'use strict';

var _tslib = require('../_virtual/_tslib.cjs');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var walletBook = require('@dynamic-labs/wallet-book');
var utils = require('@dynamic-labs/utils');
var wcClient = require('./wcClient.cjs');
var wcClient_lib = require('./wcClient.lib.cjs');

const DYNAMIC_KEPLR_NETWORK_ID = 'dynamic_keplr_wc_network_id';
class KeplrWalletConnect extends walletConnectorCore.WalletConnectorBase {
    constructor(props) {
        super(props);
        this.name = 'Keplr';
        this.bridge = 'https://bridge.walletconnect.org';
        this.isWalletConnect = true;
        this.canConnectViaQrCode = true;
        this.clientOptions = {
            signingMethods: [
                'keplr_enable_wallet_connect_v1',
                'keplr_sign_amino_wallet_connect_v1',
            ],
        };
        this.chainIdMap = {
            401: 'cosmoshub-4',
            402: 'axelar-dojo-1',
            403: 'osmosis-1',
        };
        this.supportedChains = ['COSMOS'];
        this.connectedChain = 'COSMOS';
        if (props.walletConnectV1Bridge) {
            this.bridge = props.walletConnectV1Bridge;
        }
        this.evmNetworks = utils.parseEvmNetworks(props.cosmosNetworks);
        const persistedNetworkId = localStorage.getItem(DYNAMIC_KEPLR_NETWORK_ID);
        if (persistedNetworkId) {
            this.selectedNetworkId = Number(persistedNetworkId);
        }
        else {
            this.selectedNetworkId =
                (this.evmNetworks[0] && utils.parseChainId(this.evmNetworks[0].chainId)) ||
                    401;
        }
        this.deepLinkPreference = props.deepLinkPreference || 'native';
    }
    get evmNetwork() {
        var _a;
        return (_a = this.evmNetworks) === null || _a === void 0 ? void 0 : _a.find((network) => utils.parseChainId(network.chainId) === this.selectedNetworkId);
    }
    get selectedNetwork() {
        var _a;
        return (_a = this.evmNetworks) === null || _a === void 0 ? void 0 : _a.find((network) => utils.parseChainId(network.networkId) === this.selectedNetworkId);
    }
    get lcdUrl() {
        var _a;
        return (_a = this.selectedNetwork) === null || _a === void 0 ? void 0 : _a.lcdUrl;
    }
    get denom() {
        var _a;
        return (_a = this.selectedNetwork) === null || _a === void 0 ? void 0 : _a.nativeCurrency.denom;
    }
    get chainId() {
        if (!this.selectedNetwork) {
            return 'osmosis-1';
        }
        return this.chainIdMap[utils.parseChainId(this.selectedNetwork.chainId)];
    }
    getProvider() {
        if (!this._keplrInstance) {
            this._keplrInstance = new wcClient.KeplrWalletConnectV1(this.getClient());
        }
        return this._keplrInstance;
    }
    getClient() {
        if (this.client) {
            return this.client;
        }
        this.client = wcClient_lib.initClient(this.key, this.bridge, this.clientOptions);
        return this.client;
    }
    getNetwork() {
        return Promise.resolve(this.selectedNetworkId);
    }
    switchNetwork({ networkChainId, }) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (!networkChainId)
                return;
            try {
                const keplr = this.getProvider();
                yield keplr.enable(this.chainIdMap[networkChainId]);
                this.selectedNetworkId = networkChainId;
                localStorage.setItem(DYNAMIC_KEPLR_NETWORK_ID, networkChainId.toString());
            }
            catch (e) {
                walletConnectorCore.logger.error(e);
            }
        });
    }
    signMessage(messageToSign) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const keplr = this.getProvider();
            const key = yield keplr.getKey(this.chainId);
            const res = yield keplr.signAmino(this.chainId, key.bech32Address, {
                // The property is required in the amino doc
                // https://cosmos.github.io/cosmjs/latest/amino/interfaces/StdSignDoc.html
                account_number: '0',
                chain_id: this.chainId,
                fee: {
                    amount: [],
                    gas: '0',
                },
                memo: '',
                msgs: [{ type: 'custom/MsgSignText', value: { text: messageToSign } }],
                sequence: '0',
            });
            return JSON.stringify(res);
        });
    }
    fetchPublicAddress(opts) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const client = this.getClient();
            const keplr = this.getProvider();
            return wcClient_lib.fetchWalletConnectCosmosPublicAddress(walletBook.getWalletBookWallet(this.walletBook, this.key), client, keplr, Object.assign(Object.assign({}, opts), { chainId: this.chainId, onConnect: (payload) => {
                    var _a;
                    payload.params[0].chainId = this.selectedNetworkId;
                    (_a = opts === null || opts === void 0 ? void 0 : opts.onConnect) === null || _a === void 0 ? void 0 : _a.call(opts, payload);
                } }), this.deepLinkPreference);
        });
    }
    getBalance() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const address = yield this.fetchPublicAddress();
            if (!address)
                throw new Error('Address not found');
            try {
                const response = yield fetch(`${this.lcdUrl}/cosmos/bank/v1beta1/balances/${address}`).then((res) => res.json());
                const balance = response.balances.reduce((acc, cur) => {
                    if (cur.denom === this.denom) {
                        return Number(cur.amount) / 1e6;
                    }
                    return acc;
                }, 0);
                return balance.toString();
            }
            catch (e) {
                walletConnectorCore.logger.error(e);
                return '0';
            }
        });
    }
    endSession() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            wcClient_lib.killWalletConnectSession(this.getClient());
        });
    }
    getConnectedAccounts() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const address = yield this.fetchPublicAddress({ chainId: this.chainId });
            if (address)
                return [address];
            return [];
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
    getPublicClient() {
        throw new Error('Method not implemented.');
    }
    getSigner() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const keplr = this.getProvider();
            return keplr.getOfflineSigner(this.chainId);
        });
    }
    getWalletClient() {
        return this.getProvider();
    }
    setupEventListeners() {
        wcClient_lib.setupWalletConnectEventListeners(this, this.getClient());
    }
    teardownEventListeners() {
        wcClient_lib.teardownWalletConnectEventListeners(this.getClient());
    }
    supportsNetworkSwitching() {
        return true;
    }
}

module.exports = KeplrWalletConnect;
