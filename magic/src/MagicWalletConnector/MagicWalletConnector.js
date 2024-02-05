import { __awaiter } from '../../_virtual/_tslib.js';
import { Magic } from 'magic-sdk';
import { createPublicClient, http, custom, createWalletClient, formatEther } from 'viem';
import { WalletConnectorBase, logger } from '@dynamic-labs/wallet-connector-core';
import { createTransportWithUiConfirmation } from '@dynamic-labs/viem-utils';
import { parseEvmNetworks, getOrMapViemChain, DynamicError, CancellablePromise } from '@dynamic-labs/utils';
import { ProviderChain } from '@dynamic-labs/rpc-providers';
import { MagicClientNetworkHandler } from '../MagicClientNetworkHandler/MagicClientNetworkHandler.js';

const storedAddressKey = 'dynamic_magic_address';
class MagicWalletConnector extends WalletConnectorBase {
    constructor(opts) {
        var _a, _b, _c, _d, _e;
        super(opts);
        // TODO: should this actually be false?
        // see: https://linear.app/dynamic-labs/issue/GVTY-252/rename-magic-based-wallets-from-using-custodialservice-to
        this.canConnectViaCustodialService = true;
        this.isEmbeddedWallet = true;
        this.connectedChain = 'EVM';
        this.supportedChains = ['ETH', 'EVM'];
        const apiKey = (_b = (_a = opts.apiProviders) === null || _a === void 0 ? void 0 : _a.magicLink) === null || _b === void 0 ? void 0 : _b.providerProjectId;
        const defaultChainId = (_d = (_c = opts.apiProviders) === null || _c === void 0 ? void 0 : _c.magicLink) === null || _d === void 0 ? void 0 : _d.defaultChainId;
        if (!apiKey) {
            throw new Error('Missing MagicLink configuration. Add your MagicLink API key to your project configuration via the Dynamic Labs dashboard.');
        }
        this._magicClient = new MagicClientNetworkHandler({
            createClient: (config) => new Magic(apiKey, config),
            defaultChainId,
            evmNetworks: opts.evmNetworks,
            walletConnector: this,
        });
        this.evmNetworks = parseEvmNetworks(opts.evmNetworks);
        this._walletUiUtils = opts.walletUiUtils;
        this.chainRpcProviders = opts.chainRpcProviders;
        (_e = this.chainRpcProviders) === null || _e === void 0 ? void 0 : _e.registerChainProviders(ProviderChain.EVM, (config) => {
            const rpcProviders = {};
            if (config === null || config === void 0 ? void 0 : config.evm) {
                rpcProviders.evm = parseEvmNetworks(config.evm).map((network) => {
                    var _a;
                    const rpcUrl = ((_a = network.privateCustomerRpcUrls) === null || _a === void 0 ? void 0 : _a[0]) || network.rpcUrls[0];
                    const provider = createPublicClient({
                        chain: getOrMapViemChain(network),
                        transport: http(rpcUrl),
                    });
                    return {
                        chainId: network.chainId,
                        chainName: network.name,
                        provider,
                    };
                });
            }
            return rpcProviders.evm;
        });
    }
    getDeepLink() {
        return undefined;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fetchPublicAddress();
        });
    }
    endSession() {
        return __awaiter(this, void 0, void 0, function* () {
            localStorage.removeItem(storedAddressKey);
            const client = this._magicClient.getClient();
            yield client.user.logout();
        });
    }
    getUserMetadata() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this._isLoggedIn()) {
                const client = this._magicClient.getClient();
                return client.user.getInfo();
            }
            return undefined;
        });
    }
    fetchPublicAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const address = localStorage.getItem(storedAddressKey);
            if (address)
                return address;
            try {
                this._currentAuthCancellablePromise = CancellablePromise.fromPromise(this.loginWithMagic());
                this._currentAuthCancellablePromise.onCancel(() => {
                    if ('cancelLogIn' in this)
                        this.cancelLogIn();
                });
                yield this._currentAuthCancellablePromise;
                return this.getAndCacheWalletAddress();
            }
            catch (err) {
                // If we don't throw this error, useConnectWallet throws "missing-public-address" later
                // "missing-public-address" displays a UI message we don't need in this scenario
                if (err === null || err === void 0 ? void 0 : err.wasCancelled) {
                    const error = new Error();
                    // Don't show an error message
                    error.code = 'user-cancelled';
                    throw error;
                }
                logger.error(err);
                return;
            }
        });
    }
    getBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            const isLoggedIn = yield this._isLoggedIn();
            if (!isLoggedIn)
                return undefined;
            const provider = yield this.getPublicClient();
            if (!provider)
                throw this.generateDynamicErrorOnMissingProvider();
            const address = yield this.fetchPublicAddress();
            if (!address)
                return;
            return formatEther(yield provider.getBalance({ address }));
        });
    }
    getConnectedAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            const address = localStorage.getItem(storedAddressKey);
            if (!address)
                return [];
            return [address];
        });
    }
    getNetworkSync() {
        return this._magicClient.networkId;
    }
    getNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getNetworkSync();
        });
    }
    getSignerSync(account) {
        const client = this._magicClient.getClient();
        const provider = this.getPublicClientSync();
        if (!provider)
            throw this.generateDynamicErrorOnMissingProvider();
        const transport = createTransportWithUiConfirmation({
            connector: this,
            publicClient: provider,
            transport: custom(client.rpcProvider),
            walletUiUtils: this._walletUiUtils,
        });
        const walletClient = createWalletClient({
            account,
            transport,
        });
        return walletClient;
    }
    getSigner() {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = this.getPublicClientSync();
            if (!provider)
                throw this.generateDynamicErrorOnMissingProvider();
            const address = yield this.fetchPublicAddress();
            return this.getSignerSync(address);
        });
    }
    getWalletClient() {
        return this.getSignerSync();
    }
    generateDynamicErrorOnMissingProvider() {
        return new DynamicError(`No provider found for the current configured magic network.
      magic configured network_id: ${this.getNetworkSync()}, configured evmNetworks: ${this.evmNetworks} `);
    }
    getPublicClientSync() {
        var _a, _b, _c;
        const networkId = (_a = this.getNetworkSync()) !== null && _a !== void 0 ? _a : 1;
        if (this.evmNetworks.length === 0) {
            return undefined;
        }
        const configurations = {
            cosmos: [],
            evm: this.evmNetworks,
            solana: [],
            starknet: undefined,
        };
        return (_c = (_b = this.chainRpcProviders) === null || _b === void 0 ? void 0 : _b.getEvmProviderByChainId(configurations, networkId)) === null || _c === void 0 ? void 0 : _c.provider;
    }
    getPublicClient() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getPublicClientSync();
        });
    }
    signMessage(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.getSignerSync();
            const account = yield this.fetchPublicAddress();
            if (!account || !client)
                return;
            return client.signMessage({
                account,
                message: messageToSign,
            });
        });
    }
    supportsNetworkSwitching() {
        return true;
    }
    switchNetwork({ networkChainId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!networkChainId) {
                return;
            }
            this._magicClient.selectNetwork(networkChainId);
        });
    }
    _isLoggedIn() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this._magicClient.getClient();
            return client.user.isLoggedIn();
        });
    }
    getAndCacheWalletAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this._magicClient.getClient();
            const metadata = yield client.user.getInfo();
            if (!metadata || !metadata.publicAddress) {
                throw new Error('No public address');
            }
            if (metadata.issuer) {
                this.providerResources = [`magic-auth:issuer:${metadata.issuer}`];
            }
            localStorage.setItem(storedAddressKey, metadata.publicAddress);
            return metadata.publicAddress;
        });
    }
}

export { MagicWalletConnector, storedAddressKey };
