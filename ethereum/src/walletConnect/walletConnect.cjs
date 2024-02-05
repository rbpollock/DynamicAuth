'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var WalletConnectProvider = require('@walletconnect/ethereum-provider');
var viem = require('viem');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var walletBook = require('@dynamic-labs/wallet-book');
var utils = require('@dynamic-labs/utils');
var EthWalletConnector = require('../EthWalletConnector.cjs');
var constants = require('../constants.cjs');
var client = require('./client/client.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var WalletConnectProvider__default = /*#__PURE__*/_interopDefaultLegacy(WalletConnectProvider);

class WalletConnect extends EthWalletConnector.EthWalletConnector {
    constructor(_a) {
        var { walletConnectV1Bridge, walletName } = _a, props = _tslib.__rest(_a, ["walletConnectV1Bridge", "walletName"]);
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
        this.client = client.initClient(walletConnectorCore.normalizeWalletName(this.name), this.bridge, this.clientOptions);
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
        client.setupWalletConnectEventListeners(this, this.getClient());
    }
    teardownEventListeners() {
        client.teardownWalletConnectEventListeners(this.getClient());
    }
    getWalletClient() {
        const client = this.getClient();
        return client
            ? viem.createWalletClient({
                transport: viem.custom(new WalletConnectProvider__default["default"]({
                    connector: client,
                    infuraId: constants.INFURA_ID,
                    rpc: this.evmNetworkRpcMap(),
                })),
            })
            : undefined;
    }
    fetchPublicAddress(opts) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return client.fetchWalletConnectEVMPublicAddress(walletBook.getWalletBookWallet(this.walletBook, this.key), this.getClient(), this.deepLinkPreference, Object.assign(Object.assign({}, opts), { onConnect: (payload) => {
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
        const wallet = walletBook.getWalletBookWallet(this.walletBook, this.key);
        if (!utils.isMobile() && !((_a = wallet.desktop) === null || _a === void 0 ? void 0 : _a.native)) {
            return undefined;
        }
        return walletConnectorCore.getDeepLink({
            metadata: wallet,
            mode: 'regular',
            preference: this.deepLinkPreference,
            uri: this.getClient().uri,
        });
    }
    signMessage(messageToSign) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return client.signWalletConnectPersonalMessage(messageToSign, walletBook.getWalletBookWallet(this.walletBook, this.key), this.getClient(), this.deepLinkPreference, 
            // don't call getPublicClient until we really need to
            () => _tslib.__awaiter(this, void 0, void 0, function* () { return this.getPublicClient(); }));
        });
    }
    endSession() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            client.killWalletConnectSession(this.getClient());
        });
    }
    providerSwitchNetwork({ network, provider, }) {
        const _super = Object.create(null, {
            providerSwitchNetwork: { get: () => super.providerSwitchNetwork }
        });
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const client = this.getClient();
            const currentNetworkId = yield this.getNetwork();
            if (currentNetworkId && currentNetworkId === network.chainId) {
                return;
            }
            if (this.switchNetworkOnlyFromWallet !== undefined &&
                this.switchNetworkOnlyFromWallet) {
                throw new utils.DynamicError('Network switching is only supported through the wallet');
            }
            if (!this.supportsNetworkSwitching()) {
                throw new utils.DynamicError('Network switching not supported');
            }
            if (!client) {
                throw new utils.DynamicError('Client not found');
            }
            if (utils.isMobile()) {
                const deepLink = walletConnectorCore.getDeepLink({
                    metadata: walletBook.getWalletBookWallet(this.walletBook, this.key),
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
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const client = this.getClient();
            if (!client.connected)
                return [];
            return client.accounts;
        });
    }
    getSession() {
        var _a;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return (_a = this.client) === null || _a === void 0 ? void 0 : _a.session;
        });
    }
}

exports.WalletConnect = WalletConnect;
