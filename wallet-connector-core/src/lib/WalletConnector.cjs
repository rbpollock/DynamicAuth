'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var EventEmitter = require('eventemitter3');
var walletBook = require('@dynamic-labs/wallet-book');
var WalletBookSingleton = require('./WalletBookSingleton.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);

/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/no-unused-vars */
var _WalletConnectorBase_registeredExtensions;
/* eslint-disable @typescript-eslint/no-empty-interface */
const Chains = [
    'ETH',
    'FLOW',
    'SOL',
    'EVM',
    'ALGO',
    'STARK',
    'ATOM',
    'COSMOS',
];
const socialProviders = [
    'google',
    'facebook',
    'apple',
    'github',
    'bitbucket',
    'gitlab',
    'linkedin',
    'twitter',
    'discord',
    'twitch',
    'microsoft',
];
class WalletConnectorBase extends EventEmitter__default["default"] {
    /**
     * We store the constructor props so that we can use them later on
     * in getMobileOrInstalledWallet which may fall back to a different class
     * but will need the original constructor props.
     * @param props - constructor props
     */
    constructor(props) {
        super();
        this.chainRpcProviders = undefined;
        _WalletConnectorBase_registeredExtensions.set(this, []);
        this.didSetup = false;
        /**
         * @default false
         */
        this.canConnectViaEmail = false;
        /**
         * IF the wallet needs to be connected via a custodial service
         * such as Blocto, this will be true.
         * @default false
         */
        this.canConnectViaCustodialService = false;
        /**
         * If the wallet is not installed, and can be connected via a QR code,
         * this will be true.
         * @default false
         */
        this.canConnectViaQrCode = false;
        /**
         * Whether this connector can be connected via social login.
         * @default false
         */
        this.canConnectViaSocial = false;
        /**
         * @deprecated getWeb3Provider has been renamed to getWalletClient
         * If you would like to still get the ethers web3Provider,
         *  see our docs for enabling ethers: https://docs.dynamic.xyz/ethers
         *
         * Get the wallet provider
         */
        this.getWeb3Provider = this.getWalletClient;
        /**
         * @deprecated getRpcProvider has been renamed to getPublicClient
         * If you would like to still get the ethers rpcProvider,
         *  see our docs for enabling ethers: https://docs.dynamic.xyz/ethers
         *
         * Get the rpc provider
         */
        this.getRpcProvider = this.getPublicClient;
        /**
         * If the wallet generated by a valid embedded wallet provider
         * For example: magic wallets
         * @default false
         */
        this.isEmbeddedWallet = false;
        /**
         * Flag if it is wallet Connect
         *
         * @default false
         */
        this.isWalletConnect = false;
        /**
         * Override key for the wallet (used for injected wallet linking)
         */
        this.overrideKey = undefined;
        /**
         * Additional resources to add to the message to be signed
         *
         * @default undefined
         */
        this.providerResources = undefined;
        /**
         * Requires switching network in the wallet itself
         * @default undefined
         */
        this.switchNetworkOnlyFromWallet = undefined;
        /**
         * Whether the connector has been initialized
         * @default true
         */
        this.isInitialized = true;
        this.constructorProps = props;
        this._walletBookInstance = WalletBookSingleton.WalletBookSingleton.getOrCreate(props.walletBook);
        if (this.walletBook === undefined) {
            throw new Error('WalletConnectorBase was not called with super(props) and is missing wallet-book');
        }
    }
    extend(extension) {
        if (_tslib.__classPrivateFieldGet(this, _WalletConnectorBase_registeredExtensions, "f").includes(extension.name)) {
            throw new Error(`You can only register a single extension of: ${extension.name}`);
        }
        _tslib.__classPrivateFieldGet(this, _WalletConnectorBase_registeredExtensions, "f").push(extension.name);
        extension.extend(this);
    }
    /**
     * Add the event listeners for the wallet and connect
     * with event emitter.
     */
    initEventListener() {
        if (this.didSetup)
            return;
        this.didSetup = true;
        this.setupEventListeners();
    }
    get walletBook() {
        return this._walletBookInstance.walletBook;
    }
    filterByWalletBook() {
        try {
            walletBook.getWalletBookWallet(this.walletBook, this.key);
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    connect() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.fetchPublicAddress();
        });
    }
    /**
     * Generic function to close the wallet connection
     * Originally implemented for WalletConnect, but it is used
     * for anything that needs to be "logged out" or cleaned up
     *
     * @default Promise<undefined>
     */
    endSession() {
        return Promise.resolve();
    }
    /**
     * Gets the public address of the wallet
     *
     * @default Promise<undefined>
     */
    fetchPublicAddress(opts) {
        return Promise.resolve(undefined);
    }
    /**
     * Gets the balance of the wallet
     *
     * @default Promise<undefined>
     */
    getBalance() {
        return Promise.resolve(undefined);
    }
    /**
     * Get the address silently
     *
     * @default Promise<[]>
     */
    getConnectedAccounts() {
        return Promise.resolve([]);
    }
    /**
     * Gets the deep link of the wallet
     *
     * @default undefined
     */
    getDeepLink() {
        return undefined;
    }
    getNetwork() {
        return Promise.resolve(undefined);
    }
    /**
     * Gets current network of connected wallet
     *
     * @default Promise<undefined>
     */
    getNameService() {
        return Promise.resolve(undefined);
    }
    getPublicClient() {
        return Promise.resolve(undefined);
    }
    getSession() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return Promise.resolve();
        });
    }
    getSigner() {
        return Promise.resolve(undefined);
    }
    getWalletClient() {
        return undefined;
    }
    /**
     * Initialize the wallet connector with any async operations
     *
     * @default Promise<void>
     */
    init() {
        return Promise.resolve();
    }
    /**
     * Check if the wallet is installed on the browser
     *
     * @default false
     */
    isInstalledOnBrowser() {
        return false;
    }
    /**
     * Override key or the normalized wallet name if needed
     */
    get key() {
        return this.overrideKey || this.name.replace(/\W/g, '').toLowerCase();
    }
    /**
     * Whether the wallet connector should fall back to a different wallet connector
     * This is called after the object is instantiated, so it can't be a static property
     * and will return the appropriate instance of the wallet connector
     * @returns WalletConnector
     * @default this
     */
    getMobileOrInstalledWallet() {
        return this;
    }
    /**
     * In most cases this is an alias for `signMessage`
     *
     * @default Promise<undefined>
     */
    proveOwnership(messageToSign) {
        return this.signMessage(messageToSign);
    }
    /**
     * Set up event listeners for the wallet
     *
     * @default void
     */
    setupEventListeners() {
        return;
    }
    /**
     * Sign a message
     *
     * @default Promise<undefined>
     */
    signMessage(messageToSign) {
        return Promise.resolve(undefined);
    }
    /**
     * Whether the wallet supports network switching
     *
     * @default false
     */
    supportsNetworkSwitching() {
        return false;
    }
    switchNetwork({ networkName, networkChainId, }) {
        return Promise.resolve(undefined);
    }
    /**
     * Tear down event listeners for the wallet
     * @default void
     */
    teardownEventListeners() {
        return;
    }
    /**
     * Sign a message
     *
     * @default Promise<undefined>
     */
    getSupportedNetworks() {
        return Promise.resolve(undefined);
    }
    /**
     * Receive the user verified credentials
     */
    setVerifiedCredentials(verifiedCredentials) {
        return;
    }
}
_WalletConnectorBase_registeredExtensions = new WeakMap();

exports.Chains = Chains;
exports.WalletConnectorBase = WalletConnectorBase;
exports.socialProviders = socialProviders;
