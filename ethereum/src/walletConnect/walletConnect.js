import { __rest, __awaiter } from '../../_virtual/_tslib.js';
import WalletConnectProvider from '@walletconnect/ethereum-provider';
import { createWalletClient, custom } from 'viem';
import { normalizeWalletName, getDeepLink } from '@dynamic-labs/wallet-connector-core';
import { getWalletBookWallet } from '@dynamic-labs/wallet-book';
import { isMobile, DynamicError } from '@dynamic-labs/utils';
import { EthWalletConnector } from '../EthWalletConnector.js';
import { INFURA_ID } from '../constants.js';
import { initClient, setupWalletConnectEventListeners, teardownWalletConnectEventListeners, fetchWalletConnectEVMPublicAddress, signWalletConnectPersonalMessage, killWalletConnectSession } from './client/client.js';

class WalletConnect extends EthWalletConnector {
    constructor(_a) {
        var { walletConnectV1Bridge, walletName } = _a, props = __rest(_a, ["walletConnectV1Bridge", "walletName"]);
        super(props);
        this.supportedChains = ['EVM', 'ETH'];
        this.connectedChain = 'EVM';
        this.bridge = 'https://bridge.walletconnect.org';
        this.canConnectViaQrCode = true;
        this.isWalletConnect = true;
        this.switchNetworkOnlyFromWallet = false;
        this.name = walletName;
        if (walletConnectV1Bridge) {
            this.bridge = walletConnectV1Bridge;
        }
        this.deepLinkPreference = props.deepLinkPreference || 'native';
    }
    getClient() {
        if (this.client) {
            return this.client;
        }
        this.client = initClient(normalizeWalletName(this.name), this.bridge, this.clientOptions);
        return this.client;
    }
    supportsNetworkSwitching() {
        if (this.connectedChain === 'EVM') {
            return true;
        }
        else {
            const client = this.getClient();
            return Boolean(client === null || client === void 0 ? void 0 : client.chainId);
        }
    }
    setupEventListeners() {
        setupWalletConnectEventListeners(this, this.getClient());
    }
    teardownEventListeners() {
        teardownWalletConnectEventListeners(this.getClient());
    }
    getWalletClient() {
        const client = this.getClient();
        return client
            ? createWalletClient({
                transport: custom(new WalletConnectProvider({
                    connector: client,
                    infuraId: INFURA_ID,
                    rpc: this.evmNetworkRpcMap(),
                })),
            })
            : undefined;
    }
    fetchPublicAddress(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            return fetchWalletConnectEVMPublicAddress(getWalletBookWallet(this.walletBook, this.key), this.getClient(), this.deepLinkPreference, Object.assign(Object.assign({}, opts), { onConnect: (payload) => {
                    var _a, _b;
                    (_a = opts === null || opts === void 0 ? void 0 : opts.onConnect) === null || _a === void 0 ? void 0 : _a.call(opts, payload);
                    this.connectedChain = payload.params[0].chainId ? 'EVM' : 'SOL';
                    if ((_b = payload.params[0].accounts) === null || _b === void 0 ? void 0 : _b.length) {
                        this.emit('accountChange', {
                            accounts: payload.params[0].accounts,
                        });
                    }
                } }));
        });
    }
    getDeepLink() {
        var _a;
        const wallet = getWalletBookWallet(this.walletBook, this.key);
        if (!isMobile() && !((_a = wallet.desktop) === null || _a === void 0 ? void 0 : _a.native)) {
            return undefined;
        }
        return getDeepLink({
            metadata: wallet,
            mode: 'regular',
            preference: this.deepLinkPreference,
            uri: this.getClient().uri,
        });
    }
    signMessage(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
            return signWalletConnectPersonalMessage(messageToSign, getWalletBookWallet(this.walletBook, this.key), this.getClient(), this.deepLinkPreference, 
            // don't call getPublicClient until we really need to
            () => __awaiter(this, void 0, void 0, function* () { return this.getPublicClient(); }));
        });
    }
    endSession() {
        return __awaiter(this, void 0, void 0, function* () {
            killWalletConnectSession(this.getClient());
        });
    }
    providerSwitchNetwork({ network, provider, }) {
        const _super = Object.create(null, {
            providerSwitchNetwork: { get: () => super.providerSwitchNetwork }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.getClient();
            const currentNetworkId = yield this.getNetwork();
            if (currentNetworkId && currentNetworkId === network.chainId) {
                return;
            }
            if (this.switchNetworkOnlyFromWallet !== undefined &&
                this.switchNetworkOnlyFromWallet) {
                throw new DynamicError('Network switching is only supported through the wallet');
            }
            if (!this.supportsNetworkSwitching()) {
                throw new DynamicError('Network switching not supported');
            }
            if (!client) {
                throw new DynamicError('Client not found');
            }
            if (isMobile()) {
                const deepLink = getDeepLink({
                    metadata: getWalletBookWallet(this.walletBook, this.key),
                    mode: 'regular',
                    preference: this.deepLinkPreference,
                    uri: client.uri,
                });
                window.location.href = deepLink;
            }
            return _super.providerSwitchNetwork.call(this, { network, provider });
        });
    }
    getConnectedAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.getClient();
            if (!client.connected)
                return [];
            return client.accounts;
        });
    }
    getSession() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = this.client) === null || _a === void 0 ? void 0 : _a.session;
        });
    }
}

export { WalletConnect };
