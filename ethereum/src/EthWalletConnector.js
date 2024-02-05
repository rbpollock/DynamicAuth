import { __awaiter } from '../_virtual/_tslib.js';
import { createPublicClient, http, formatEther } from 'viem';
import { WalletConnectorBase } from '@dynamic-labs/wallet-connector-core';
import { parseEvmNetworks, getOrMapViemChain, retryableFn, FALLBACK_UNDEFINED, DynamicError } from '@dynamic-labs/utils';
import { ProviderChain } from '@dynamic-labs/rpc-providers';
import { findEvmNetwork } from './utils/findEvmNetwork.js';

class EthWalletConnector extends WalletConnectorBase {
    getPublicClient() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const networkId = (_a = (yield this.getNetwork())) !== null && _a !== void 0 ? _a : 1;
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
        });
    }
    constructor(props) {
        var _a;
        super(props);
        this.evmNetworkRpcMap = () => this.evmNetworks.reduce((acc, network) => {
            var _a;
            [acc[network.chainId]] = ((_a = network === null || network === void 0 ? void 0 : network.privateCustomerRpcUrls) === null || _a === void 0 ? void 0 : _a.length)
                ? network.privateCustomerRpcUrls
                : network.rpcUrls;
            return acc;
        }, {});
        this.evmNetworks = parseEvmNetworks(props.evmNetworks);
        this.chainRpcProviders = props.chainRpcProviders;
        (_a = this.chainRpcProviders) === null || _a === void 0 ? void 0 : _a.registerChainProviders(ProviderChain.EVM, (config) => {
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
    getNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = this.getWalletClient();
            if (!this.supportsNetworkSwitching || !provider) {
                return Promise.resolve(undefined);
            }
            return retryableFn(provider.getChainId, {
                fallbackValue: FALLBACK_UNDEFINED,
                /**
                 * The timeout is set to 1 second because the getChainId method
                 * takes around 500ms to resolve on Brave. If the timeout is not set
                 * it will use 100ms by default and the method will fail.
                 * QNTM-815
                 */
                timeoutMs: 1000,
            });
        });
    }
    getNameService() {
        return __awaiter(this, void 0, void 0, function* () {
            const [[address], rpcProvider] = yield Promise.all([
                this.getConnectedAccounts(),
                this.getPublicClient(),
            ]);
            if (!address || !rpcProvider) {
                return;
            }
            const ensName = yield rpcProvider.getEnsName({
                address: address,
            });
            const ensAvatar = ensName
                ? yield rpcProvider.getEnsAvatar({
                    name: ensName,
                })
                : undefined;
            const ensData = {
                avatar: ensAvatar !== null && ensAvatar !== void 0 ? ensAvatar : undefined,
                name: ensName !== null && ensName !== void 0 ? ensName : undefined,
            };
            return ensData;
        });
    }
    getSigner() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getWalletClient();
        });
    }
    getBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            // This is equivalent to getSigner().getAddress() but does not crash
            // if the signer is not available
            const [address] = yield this.getConnectedAccounts();
            if (!address)
                return;
            const client = yield this.getPublicClient();
            const result = yield (client === null || client === void 0 ? void 0 : client.getBalance({
                address: address,
            }));
            if (!result && result !== BigInt(0))
                return;
            return formatEther(result);
        });
    }
    supportsNetworkSwitching() {
        return true;
    }
    switchNetwork({ networkName, networkChainId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const network = findEvmNetwork({
                chainId: networkChainId,
                name: networkName,
                networks: this.evmNetworks,
            });
            if (!network) {
                throw new DynamicError(`Could not find network mapping for chain ${networkName ? networkName : networkChainId}`);
            }
            if (!this.supportsNetworkSwitching()) {
                throw new DynamicError('Network switching is not supported');
            }
            const provider = this.getWalletClient();
            if (!provider) {
                throw new DynamicError('Provider not found');
            }
            return this.providerSwitchNetwork({ network, provider });
        });
    }
    getConnectedAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = this.getWalletClient();
            if (!provider)
                return [];
            return retryableFn(provider.getAddresses, {
                fallbackValue: [],
                timeoutMs: 300,
            });
        });
    }
    providerSwitchNetwork({ network, provider, }) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const { chainId } = network;
            const currentNetworkId = yield this.getNetwork();
            if (currentNetworkId && currentNetworkId === chainId) {
                return;
            }
            try {
                if (!this.supportsNetworkSwitching()) {
                    throw new DynamicError('Network switching is not supported');
                }
                return yield provider.switchChain(getOrMapViemChain(network));
            }
            catch (error) {
                // we need to check for unrecognized chain error first because it also contains 'rejected' in message
                if (error.code === 4902 ||
                    ((_a = error.message) === null || _a === void 0 ? void 0 : _a.includes('Unrecognized chain')) ||
                    // https://github.com/MetaMask/metamask-mobile/issues/3312#issuecomment-1065923294
                    ((_c = (_b = error.data) === null || _b === void 0 ? void 0 : _b.orginalError) === null || _c === void 0 ? void 0 : _c.code) === 4902) {
                    // error code indicates the chain has not been added yet
                    // https://docs.metamask.io/guide/rpc-api.html#usage-with-wallet-switchethereumchain
                    return this.providerAddNetwork({ network, provider });
                }
                else if (((_d = error.message) === null || _d === void 0 ? void 0 : _d.includes('rejected')) ||
                    (typeof error === 'string' && error.includes('rejected'))) {
                    throw new DynamicError("User rejected the wallet's request to switch network");
                }
                else {
                    throw error;
                }
            }
        });
    }
    providerAddNetwork({ network, provider, }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield provider.addChain({ chain: getOrMapViemChain(network) });
            }
            catch (error) {
                if (((_a = error.message) === null || _a === void 0 ? void 0 : _a.includes('rejected')) ||
                    (typeof error === 'string' && error.includes('rejected'))) {
                    throw new DynamicError("User rejected the wallet's request to add network");
                }
                else {
                    throw error;
                }
            }
        });
    }
}

export { EthWalletConnector };
