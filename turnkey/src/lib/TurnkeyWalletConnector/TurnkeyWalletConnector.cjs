'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.cjs');
var http = require('@turnkey/http');
var webauthnStamper = require('@turnkey/webauthn-stamper');
var viem = require('viem');
var viem$1 = require('@turnkey/viem');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var viemUtils = require('@dynamic-labs/viem-utils');
var utils = require('@dynamic-labs/utils');
var rpcProviders = require('@dynamic-labs/rpc-providers');
var findTurnkeyVerifiedCredential = require('../utils/findTurnkeyVerifiedCredential/findTurnkeyVerifiedCredential.cjs');
var base64UrlEncode = require('../utils/base64UrlEncode/base64UrlEncode.cjs');
var generateRandomBuffer = require('../utils/generateRandomBuffer/generateRandomBuffer.cjs');
var convertAttestationTransports = require('../utils/convertAttestationTransports/convertAttestationTransports.cjs');
var getRpcUrlForChain = require('../utils/getRpcUrlForChain/getRpcUrlForChain.cjs');
var getTLD = require('../utils/getTLD/getTLD.cjs');
var TurnkeyPasskeyRecoveryHandler = require('../TurnkeyPasskeyRecoveryHandler/TurnkeyPasskeyRecoveryHandler.cjs');

const turnkeyApi = 'https://api.turnkey.com';
class TurnkeyWalletConnector extends walletConnectorCore.WalletConnectorBase {
    constructor(nameAndKey, props) {
        var _a;
        super(props);
        // Public fields
        this.canConnectViaEmail = false;
        this.connectedChain = 'EVM';
        this.supportedChains = ['ETH', 'EVM'];
        this.isEmbeddedWallet = true;
        if (!props.appName) {
            throw new Error('appName not set');
        }
        this.name = nameAndKey.name;
        this.overrideKey = nameAndKey.key;
        this.appName = props.appName;
        this.evmNetworks = utils.parseEvmNetworks(props.evmNetworks);
        this.walletUiUtils = props.walletUiUtils;
        this._turnkeyAccount = undefined;
        this._selectedChainId = this.getLastUsedChainId();
        this.chainRpcProviders = props.chainRpcProviders;
        (_a = this.chainRpcProviders) === null || _a === void 0 ? void 0 : _a.registerChainProviders(rpcProviders.ProviderChain.EVM, (config) => {
            const rpcProviders = {};
            if (config === null || config === void 0 ? void 0 : config.evm) {
                rpcProviders.evm = utils.parseEvmNetworks(config.evm).map((network) => {
                    var _a;
                    const rpcUrl = ((_a = network.privateCustomerRpcUrls) === null || _a === void 0 ? void 0 : _a[0]) || network.rpcUrls[0];
                    const provider = viem.createPublicClient({
                        chain: utils.getOrMapViemChain(network),
                        transport: viem.http(rpcUrl),
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
        this.__passkeyRecoveryHandler = new TurnkeyPasskeyRecoveryHandler.TurnkeyPasskeyRecoveryHandler();
    }
    getLastUsedChainId() {
        var _a;
        if (this.lastUsedChainId) {
            return this.lastUsedChainId;
        }
        if (!((_a = this.evmNetworks) === null || _a === void 0 ? void 0 : _a.length)) {
            return undefined;
        }
        return this.evmNetworks[0].chainId;
    }
    getWebAuthnAttestation() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const challenge = generateRandomBuffer.generateRandomBuffer();
            const authenticatorUserId = generateRandomBuffer.generateRandomBuffer();
            const { email } = this;
            if (!email) {
                throw new Error('Email not set');
            }
            const webAuthnCreateParams = {
                publicKey: {
                    authenticatorSelection: {
                        // Allow internal only passkeys on mobile and windows ('cross-platform' doesn't seem to work on Windows).
                        authenticatorAttachment: utils.isMobile() || utils.isWindows()
                            ? undefined
                            : 'cross-platform',
                        requireResidentKey: true,
                        residentKey: 'required',
                        userVerification: 'preferred',
                    },
                    challenge,
                    pubKeyCredParams: [
                        {
                            alg: -7,
                            type: 'public-key',
                        },
                    ],
                    rp: {
                        id: getTLD.getTLD(),
                        name: this.appName,
                    },
                    user: {
                        displayName: email,
                        id: authenticatorUserId,
                        name: email,
                    },
                },
            };
            let attestation;
            try {
                attestation = yield http.getWebAuthnAttestation(webAuthnCreateParams);
            }
            catch (error) {
                walletConnectorCore.logger.warn(`Unable to register webauthn credential on the current page's TLD ${getTLD.getTLD()}. Falling back to using hostname. ${window.location.hostname}`, error);
                // Create the passkey on the hostname instead.
                webAuthnCreateParams.publicKey.rp.id = window.location.hostname;
                attestation = yield http.getWebAuthnAttestation(webAuthnCreateParams);
            }
            return {
                attestation: {
                    attestationObject: attestation.attestationObject,
                    clientDataJson: attestation.clientDataJson,
                    credentialId: attestation.credentialId,
                    transports: convertAttestationTransports.convertAttestationTransports(attestation.transports),
                },
                challenge: base64UrlEncode.base64UrlEncode(challenge),
            };
        });
    }
    getRecoverPasskeyHandler() {
        if (this.__passkeyRecoveryHandler) {
            return this.__passkeyRecoveryHandler;
        }
        this.__passkeyRecoveryHandler = new TurnkeyPasskeyRecoveryHandler.TurnkeyPasskeyRecoveryHandler();
        return this.__passkeyRecoveryHandler;
    }
    // Public methods
    get email() {
        return this._email;
    }
    setEmail(email) {
        this._email = email;
    }
    clearEmail() {
        this._email = null;
    }
    getNetwork() {
        var _a;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return (_a = (yield this.getSigner())) === null || _a === void 0 ? void 0 : _a.getChainId();
        });
    }
    supportsNetworkSwitching() {
        return true;
    }
    switchNetwork({ networkChainId, }) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            this.lastUsedChainId = networkChainId;
            this._selectedChainId = networkChainId;
            yield this.refreshTurnkeyAccount();
            this.emit('chainChange', {
                chain: networkChainId.toString(),
            });
        });
    }
    fetchPublicAddress() {
        var _a;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return (_a = this.verifiedCredential) === null || _a === void 0 ? void 0 : _a.address;
        });
    }
    getConnectedAccounts() {
        var _a;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const address = (_a = this.verifiedCredential) === null || _a === void 0 ? void 0 : _a.address;
            if (!address) {
                return [];
            }
            return [address];
        });
    }
    getMobileOrInstalledWallet() {
        return this;
    }
    setVerifiedCredentials(verifiedCredentials) {
        const turnkeyVerifiedCredential = findTurnkeyVerifiedCredential.findTurnkeyVerifiedCredential(verifiedCredentials);
        const didTurnkeyVerifiedCredentialsChanged = JSON.stringify(this.verifiedCredential) !==
            JSON.stringify(turnkeyVerifiedCredential);
        if (!didTurnkeyVerifiedCredentialsChanged) {
            return;
        }
        this.verifiedCredential = turnkeyVerifiedCredential;
        this.refreshTurnkeyAccount();
    }
    get turnkeyAddress() {
        var _a;
        const { address } = (_a = this.verifiedCredential) !== null && _a !== void 0 ? _a : {};
        return address;
    }
    getRpcUrl() {
        const chain = this._selectedChainId;
        return getRpcUrlForChain.getRpcUrlForChain({
            chainId: chain,
            networks: this.evmNetworks,
        });
    }
    getBalance() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const address = this.turnkeyAddress;
            if (!address) {
                return undefined;
            }
            const rpcUrl = this.getRpcUrl();
            if (!rpcUrl) {
                return undefined;
            }
            const client = viem.createPublicClient({
                transport: viem.http(rpcUrl),
            });
            const balance = yield client.getBalance({
                address: address,
            });
            return viem.formatEther(balance);
        });
    }
    signMessage(messageToSign) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const signer = yield this.getSigner();
            if (!signer) {
                throw new Error('Signer not found');
            }
            return signer.signMessage({
                message: messageToSign,
            });
        });
    }
    getPublicClient() {
        var _a, _b, _c;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (this.evmNetworks.length === 0) {
                return undefined;
            }
            const networkId = (_a = (yield this.getNetwork())) !== null && _a !== void 0 ? _a : 1;
            const configurations = {
                cosmos: [],
                evm: this.evmNetworks,
                solana: [],
                starknet: undefined,
            };
            return (_c = (_b = this.chainRpcProviders) === null || _b === void 0 ? void 0 : _b.getEvmProviderByChainId(configurations, networkId)) === null || _c === void 0 ? void 0 : _c.provider;
        });
    }
    getSigner() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.getTurnkeyAccount();
            return this.getWalletClient();
        });
    }
    getWalletClient() {
        const rpcUrl = this.networkRpcUrl;
        const account = this._turnkeyAccount;
        const evmNetwork = this.currentEvmNetwork;
        if (!account || !rpcUrl || !evmNetwork) {
            return undefined;
        }
        return viemUtils.createWalletClientWithUiConfirmation({
            account,
            chain: utils.getOrMapViemChain(evmNetwork),
            connector: this,
            transport: viem.http(rpcUrl),
            walletUiUtils: this.walletUiUtils,
        });
    }
    // Private methods
    set verifiedCredential(verifiedCredential) {
        this._verifiedCredential = verifiedCredential;
    }
    get verifiedCredential() {
        return this._verifiedCredential;
    }
    get walletProperties() {
        const { walletProperties } = this.verifiedCredential || {};
        return walletProperties;
    }
    refreshTurnkeyAccount() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            this._turnkeyAccount = undefined;
            return this.getTurnkeyAccount();
        });
    }
    get currentChainId() {
        var _a, _b, _c;
        return (_a = this._selectedChainId) !== null && _a !== void 0 ? _a : (_c = (_b = this.evmNetworks) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.chainId;
    }
    get networkRpcUrl() {
        const chainId = this.currentChainId;
        const evmNetwork = this.evmNetworks.find((network) => network.chainId === chainId);
        if (!evmNetwork) {
            return undefined;
        }
        const rpcUrl = getRpcUrlForChain.getRpcUrlForChain({
            chainId: chainId,
            networks: this.evmNetworks,
        });
        return rpcUrl;
    }
    get currentEvmNetwork() {
        const chainId = this.currentChainId;
        return this.evmNetworks.find((network) => network.chainId === chainId);
    }
    getTurnkeyAccount() {
        var _a, _b;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (this._turnkeyAccount) {
                return this._turnkeyAccount;
            }
            const { turnkeySubOrganizationId } = (_a = this.walletProperties) !== null && _a !== void 0 ? _a : {};
            const { address } = (_b = this.verifiedCredential) !== null && _b !== void 0 ? _b : {};
            if (!turnkeySubOrganizationId || !address) {
                return;
            }
            let rpId = getTLD.getTLD();
            if (!rpId) {
                rpId = window.location.hostname;
            }
            const stamper = new webauthnStamper.WebauthnStamper({
                rpId,
            });
            const turnkeyClient = new http.TurnkeyClient({
                baseUrl: turnkeyApi,
            }, stamper);
            this._turnkeyAccount = yield viem$1.createAccount({
                client: turnkeyClient,
                ethereumAddress: address,
                organizationId: turnkeySubOrganizationId,
                signWith: address,
            });
            return this._turnkeyAccount;
        });
    }
    get lastUsedChainId() {
        const lastUsedChainIdLS = localStorage.getItem(TurnkeyWalletConnector.lastUsedChainIdStorageKey);
        if (!lastUsedChainIdLS)
            return undefined;
        try {
            const chainId = parseInt(lastUsedChainIdLS);
            if (isNaN(chainId)) {
                return undefined;
            }
            const isChainCurrentlyEnabled = this.evmNetworks.some((network) => network.chainId === chainId);
            if (!isChainCurrentlyEnabled) {
                return (this.lastUsedChainId = this.evmNetworks[0].chainId);
            }
            return chainId;
        }
        catch (err) {
            walletConnectorCore.logger.error(err);
            return undefined;
        }
    }
    set lastUsedChainId(chainId) {
        if (chainId === undefined) {
            localStorage.removeItem(TurnkeyWalletConnector.lastUsedChainIdStorageKey);
        }
        else {
            localStorage.setItem(TurnkeyWalletConnector.lastUsedChainIdStorageKey, chainId.toString());
        }
    }
}
TurnkeyWalletConnector.lastUsedChainIdStorageKey = 'turnkey-last-used-chain-id';

exports.TurnkeyWalletConnector = TurnkeyWalletConnector;
