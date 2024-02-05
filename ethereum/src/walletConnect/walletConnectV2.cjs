'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var Provider = require('@walletconnect/universal-provider');
var EventEmitter = require('eventemitter3');
var viem = require('viem');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var walletBook = require('@dynamic-labs/wallet-book');
var utils = require('@dynamic-labs/utils');
var EthWalletConnector = require('../EthWalletConnector.cjs');
var parseIntSafe = require('../utils/parseIntSafe.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Provider__default = /*#__PURE__*/_interopDefaultLegacy(Provider);
var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);

const activeAccountKey = (walletName) => `dynamic-wc2-active-account-${walletName}`;
const sessionTopicKey = (walletName) => `dynamic-wc2-session-topic-${walletName}`;
const swicthedNetworkKey = (walletName) => `dynamic-wc2-switched-network-${walletName}`;
const currentChainKey = (walletName) => `dynamic-wc2-current-chain-${walletName}`;
const ee = new EventEmitter__default["default"]();
class WalletConnectV2 extends EthWalletConnector.EthWalletConnector {
    constructor(opts) {
        var _a;
        super(opts);
        this.supportedChains = ['EVM', 'ETH'];
        this.connectedChain = 'EVM';
        this.isInitialized = false;
        this.canConnectViaQrCode = true;
        this.isWalletConnect = true;
        this.preferredChains = [];
        // When trying to switch network for MetaMask, the switch promise gets stuck
        // if the switch got trigged once already, so we need to keep track of that
        this._hasSwitchedNetwork = false;
        this.name = opts.walletName;
        this.projectId = opts.projectId;
        this.deepLinkPreference = opts.deepLinkPreference || 'native';
        this.preferredChains = opts.walletConnectPreferredChains || [];
        this.hasSwitchedNetwork =
            (_a = Boolean(localStorage.getItem(this.swicthedNetworkKey))) !== null && _a !== void 0 ? _a : false;
        const lsCurrentChain = localStorage.getItem(this.currentChainKey);
        this.currentChainId = lsCurrentChain
            ? parseIntSafe.parseIntSafe(lsCurrentChain)
            : undefined;
    }
    getMappedChains() {
        return (this.evmNetworks
            // Filters out palm that crashes Trust Wallet
            .filter((network) => network.chainId !== 11297108109)
            .map((network) => `eip155:${network.chainId}`));
    }
    getMappedChainsByPreferredOrder() {
        // adding Ethereum to avoid an error connecting if none of the evm networks are supported by the wallet
        const allChains = this.getMappedChains();
        if (!allChains.includes('eip155:1')) {
            allChains.push('eip155:1');
        }
        const reorderedChains = this.preferredChains.filter((chain) => allChains.includes(chain));
        const remainingChains = allChains.filter((chain) => !this.preferredChains.includes(chain));
        return [...reorderedChains, ...remainingChains];
    }
    initConnection() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const { provider } = WalletConnectV2;
            if (!provider) {
                throw new utils.DynamicError('No provider found (init connection)');
            }
            // this means there is already a connection in progress, so don't call connect again
            if (provider === null || provider === void 0 ? void 0 : provider.uri) {
                return;
            }
            const optionalNamespaces = {
                eip155: {
                    chains: this.getMappedChainsByPreferredOrder(),
                    events: ['chainChanged', 'accountsChanged'],
                    methods: [
                        'eth_chainId',
                        'eth_signTypedData',
                        'eth_signTransaction',
                        'eth_sign',
                        'personal_sign',
                        'eth_sendTransaction',
                        'eth_signTypedData_v4',
                        'wallet_switchEthereumChain',
                        'wallet_addEthereumChain',
                    ],
                    rpcMap: this.evmNetworkRpcMap(),
                },
            };
            provider
                .connect({
                optionalNamespaces,
            })
                .catch((e) => {
                walletConnectorCore.logger.error(e);
                ee.emit('walletconnect_connection_failed', e);
            });
        });
    }
    createInitProviderPromise() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const provider = yield Provider__default["default"].init({
                logger: walletConnectorCore.logger.logLevel.toLowerCase() === 'debug' ? 'debug' : undefined,
                projectId: this.projectId,
            });
            WalletConnectV2.provider = provider;
            this.teardownEventListeners();
            this.setupEventListeners();
        });
    }
    initProvider() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const { provider } = WalletConnectV2;
            if (!provider) {
                if (this.initializePromise === undefined) {
                    this.initializePromise = this.createInitProviderPromise();
                }
                yield this.initializePromise;
            }
        });
    }
    refreshSession() {
        var _a, _b, _c, _d, _e;
        if ((_b = (_a = WalletConnectV2.provider) === null || _a === void 0 ? void 0 : _a.session) === null || _b === void 0 ? void 0 : _b.topic) {
            if (localStorage.getItem(this.sessionTopicKey) ===
                ((_d = (_c = WalletConnectV2.provider) === null || _c === void 0 ? void 0 : _c.session) === null || _d === void 0 ? void 0 : _d.topic)) {
                this.session = WalletConnectV2.provider.session;
                this.activeAccount = ((_e = localStorage.getItem(this.activeAccountKey)) !== null && _e !== void 0 ? _e : undefined);
            }
        }
    }
    init() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.initProvider();
            yield this.initConnection();
            this.isInitialized = true;
        });
    }
    get sessionTopicKey() {
        return sessionTopicKey(this.key);
    }
    get activeAccountKey() {
        return activeAccountKey(this.key);
    }
    get swicthedNetworkKey() {
        return swicthedNetworkKey(this.key);
    }
    get currentChainKey() {
        return currentChainKey(this.key);
    }
    set currentChainId(value) {
        this._currentChainId = value;
        if (value) {
            localStorage.setItem(this.currentChainKey, value.toString());
        }
        else {
            localStorage.removeItem(this.currentChainKey);
        }
    }
    get currentChainId() {
        return this._currentChainId;
    }
    set hasSwitchedNetwork(value) {
        this._hasSwitchedNetwork = value;
        if (value) {
            localStorage.setItem(this.swicthedNetworkKey, value.toString());
        }
        else {
            localStorage.removeItem(this.swicthedNetworkKey);
        }
    }
    get hasSwitchedNetwork() {
        return this._hasSwitchedNetwork;
    }
    supportsNetworkSwitching() {
        return true;
    }
    setupEventListeners() {
        if (!WalletConnectV2.provider) {
            return;
        }
        WalletConnectV2.provider.client.on('session_event', ({ params }) => {
            walletConnectorCore.logger.debug('session_event was called', { params });
            if (!params || !params.event) {
                walletConnectorCore.logger.debug('session_event was called without params or params.event');
                return;
            }
            const { name, data } = params.event;
            if (name === 'chainChanged') {
                const chainId = parseIntSafe.parseIntSafe(data);
                if (chainId === undefined) {
                    walletConnectorCore.logger.debug(`received unexpected data for chainChanged: ${data} with type ${typeof data}}`);
                    return;
                }
                this.currentChainId = chainId;
                this.emit('chainChange', { chain: String(chainId) });
                // When a user switches network from their wallet, we need the provider to change network
                // such that any future calls to `getNetwork` will return the correct network
                this.switchNetwork({ networkChainId: chainId });
            }
            else if (name === 'accountsChanged') {
                if (!Array.isArray(data)) {
                    walletConnectorCore.logger.debug(`received unexpected data for accountsChanged: ${data} with type ${typeof data}}`);
                    return;
                }
                // eslint-disable-next-line prefer-destructuring
                const account = data[0].split(':')[2];
                this.setActiveAccount(account);
            }
        });
        WalletConnectV2.provider.client.on('session_delete', () => _tslib.__awaiter(this, void 0, void 0, function* () {
            this.endSession();
            this.emit('disconnect');
        }));
    }
    teardownEventListeners() {
        if (!WalletConnectV2.provider) {
            return;
        }
        WalletConnectV2.provider.client.removeAllListeners('session_event');
        WalletConnectV2.provider.client.removeAllListeners('session_delete');
    }
    getWalletClient() {
        if (!WalletConnectV2.provider) {
            return;
        }
        return viem.createWalletClient({
            transport: viem.custom(WalletConnectV2.provider),
        });
    }
    fetchPublicAddress(opts) {
        var _a, _b;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (this.activeAccount) {
                return this.activeAccount;
            }
            if (!WalletConnectV2.provider || !((_a = WalletConnectV2.provider) === null || _a === void 0 ? void 0 : _a.uri)) {
                walletConnectorCore.logger.debug('No WC2 provider found, re-initializing...');
                yield this.endSession();
                yield this.init();
                // sleep 1 s to wait for connect call to finish
                // the connect call isn't await-ed because it only resolves once
                // the connection is established, but we need to wait for it to
                // finish setting up the connection URI and making it available
                // on the provider
                yield new Promise((resolve) => setTimeout(resolve, 1000));
                if (!WalletConnectV2.provider || !((_b = WalletConnectV2.provider) === null || _b === void 0 ? void 0 : _b.uri)) {
                    walletConnectorCore.logger.debug('No WC2 provider found, escaping and throwing error');
                    throw new utils.DynamicError('No provider found');
                }
            }
            const metadata = walletBook.getWalletBookWallet(this.walletBook, this.key);
            walletConnectorCore.performPlatformSpecificConnectionMethod(WalletConnectV2.provider.uri, metadata, {
                onDesktopUri: opts === null || opts === void 0 ? void 0 : opts.onDesktopUri,
                onDisplayUri: opts === null || opts === void 0 ? void 0 : opts.onDisplayUri,
            }, this.deepLinkPreference);
            return new Promise((resolve, reject) => {
                if (!WalletConnectV2.provider) {
                    reject(new utils.DynamicError('No provider found'));
                    return;
                }
                ee.on('walletconnect_connection_failed', () => {
                    const error = new utils.DynamicError('Connection rejected. Please try again.');
                    error.code = 'connection_rejected';
                    if (WalletConnectV2.provider) {
                        WalletConnectV2.provider.uri = undefined;
                    }
                    reject(error);
                });
                WalletConnectV2.provider.on('connect', ({ session }) => {
                    if (!session) {
                        reject(new utils.DynamicError('No session found'));
                    }
                    this.setSession(session);
                    this.setActiveAccount(session.namespaces.eip155.accounts[0].split(':')[2]);
                    resolve(this.activeAccount);
                });
            });
        });
    }
    /**
     * WalletConnect V2 will fail to send the sign message request if the chainId
     * is not the same as the one in the session. This method will wait for the
     * chainId to change and then retry the sign message request.
     *
     * Otherwise it will just return the result of the sign message request.
     *
     * @param signMessageFn - Function to sign message with provider
     * @param messageToSign - Message to sign
     * @returns
     */
    waitForSignMessage(signMessageFn, messageToSign) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const raceConditionPromise = new Promise((resolve) => {
                // Create listener for chain change event
                this.on('chainChange', () => resolve({ success: false }));
                signMessageFn(messageToSign).then((result) => resolve({ signedMessage: result, success: true }));
            });
            const signedMessageResult = yield raceConditionPromise;
            if (signedMessageResult.success === false) {
                return signMessageFn(messageToSign);
            }
            return signedMessageResult.signedMessage;
        });
    }
    getDeepLink() {
        var _a;
        if (!this.session) {
            return;
        }
        const metadata = walletBook.getWalletBookWallet(this.walletBook, this.key);
        const deepLink = walletConnectorCore.getDeepLink({
            metadata,
            mode: 'regular',
            preference: this.deepLinkPreference,
            uri: (_a = WalletConnectV2.provider) === null || _a === void 0 ? void 0 : _a.uri,
        });
        if (!deepLink) {
            return;
        }
        // we need to include the session topic here because it helps the wallet
        // auto redirect back to the dapp after signing
        return `${deepLink}?sessionTopic=${this.session.topic}`;
    }
    signMessage(messageToSign) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (!this.session) {
                throw new utils.DynamicError('no session');
            }
            const web3Provider = this.getWalletClient();
            if (!web3Provider) {
                throw new utils.DynamicError('No WalletConnect provider found to handle signing');
            }
            const deepLink = this.getDeepLink();
            if (utils.isMobile() && deepLink) {
                window.location.href = deepLink;
            }
            const signMessageFn = (messageToSign) => _tslib.__awaiter(this, void 0, void 0, function* () {
                const { activeAccount } = this;
                if (!activeAccount) {
                    return;
                }
                return web3Provider.signMessage({
                    account: activeAccount,
                    message: messageToSign,
                });
            });
            const response = yield this.waitForSignMessage(signMessageFn, messageToSign);
            return response;
        });
    }
    clearActiveAccount() {
        localStorage.removeItem(this.activeAccountKey);
        this.activeAccount = undefined;
    }
    clearSession() {
        localStorage.removeItem(this.sessionTopicKey);
        this.session = undefined;
    }
    setActiveAccount(account) {
        localStorage.setItem(this.activeAccountKey, account);
        this.activeAccount = account;
        this.emit('accountChange', { accounts: [account] });
    }
    setSession(session) {
        localStorage.setItem(this.sessionTopicKey, session.topic);
        this.session = session;
    }
    endSession() {
        var _a;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            this.clearActiveAccount();
            this.clearSession();
            this.hasSwitchedNetwork = false;
            this.currentChainId = undefined;
            if (!((_a = WalletConnectV2.provider) === null || _a === void 0 ? void 0 : _a.session)) {
                return;
            }
            try {
                yield WalletConnectV2.provider.disconnect();
                // We must unset provider on logout so that a new session can be established
                // If we don't then the provider will still have the old session and will hang
                WalletConnectV2.provider = undefined;
            }
            catch (e) {
                walletConnectorCore.logger.debug(e);
            }
        });
    }
    getNetwork() {
        const _super = Object.create(null, {
            getNetwork: { get: () => super.getNetwork }
        });
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (this.currentChainId) {
                return this.currentChainId;
            }
            yield this.initProvider();
            return _super.getNetwork.call(this);
        });
    }
    providerSwitchNetwork({ network, provider, }) {
        const _super = Object.create(null, {
            providerSwitchNetwork: { get: () => super.providerSwitchNetwork }
        });
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const currentNetworkId = yield this.getNetwork();
            if (currentNetworkId && currentNetworkId === network.chainId) {
                return;
            }
            if (this.switchNetworkOnlyFromWallet) {
                throw new utils.DynamicError('Network switching is only supported through the wallet');
            }
            if (!this.supportsNetworkSwitching()) {
                throw new utils.DynamicError('Network switching not supported');
            }
            if (!provider) {
                throw new utils.DynamicError('Provider not found');
            }
            yield _super.providerSwitchNetwork.call(this, { network, provider });
            this.currentChainId = network.chainId;
            this.hasSwitchedNetwork = true;
            this.emit('chainChange', { chain: String(network.chainId) });
        });
    }
    getConnectedAccounts() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (this.isInitialized === false) {
                yield this.initProvider();
                this.refreshSession();
                this.isInitialized = true;
            }
            if (!this.activeAccount) {
                return [];
            }
            return [this.activeAccount];
        });
    }
    getSupportedNetworks() {
        var _a;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (!this.hasSwitchedNetwork) {
                return undefined;
            }
            yield this.initProvider();
            this.refreshSession();
            if (!this.session) {
                return [];
            }
            const chains = [];
            // Some wallet (i.e ZenGo) use namespaces.account to list supported chains
            // while others use keys within the namespaces object
            Object.keys(this.session.namespaces).forEach((key) => {
                if (key.startsWith('eip155:')) {
                    chains.push(key.split(':')[1]);
                }
            });
            (_a = this.session.namespaces.eip155) === null || _a === void 0 ? void 0 : _a.accounts.forEach((account) => chains.push(account.split(':')[1]));
            return chains.length ? chains : undefined;
        });
    }
}

exports.WalletConnectV2 = WalletConnectV2;
