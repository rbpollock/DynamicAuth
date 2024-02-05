'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.cjs');
var utils = require('@dynamic-labs/utils');
var sdkApi$1 = require('@dynamic-labs/sdk-api');
var version = require('../../version.cjs');
var ApiEndpoint = require('../config/ApiEndpoint.cjs');
var logger = require('../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
require('../utils/constants/colors.cjs');
require('../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../shared/consts/index.cjs');
var helpers = require('../context/DynamicContext/helpers.cjs');

const sdkApi = (jwt) => {
    const settings = {
        basePath: ApiEndpoint.getBaseUrl(),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (jwt) {
        settings.headers.Authorization = `Bearer ${jwt}`;
    }
    settings.headers['x-dyn-version'] = `WalletKit/${version.VERSION}`;
    settings.headers['x-dyn-api-version'] = `API/${version.API_VERSION}`;
    return new sdkApi$1.SDKApi(new sdkApi$1.Configuration(settings));
};
const fetchNonce = (environmentId) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield sdkApi().getNonce({
            environmentId,
        });
        return res.nonce;
    }
    catch (e) {
        return undefined;
    }
});
const getEmailProvider = ({ email, environmentId, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield sdkApi().getEmailProvider({
            email,
            environmentId,
        });
        return res;
    }
    catch (e) {
        const data = yield e.json();
        logger.logger.error(data.error);
        throw new utils.EmailProviderError(data.code);
    }
});
const createEmailVerification = ({ email, environmentId, captchaToken, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield sdkApi().createEmailVerification({
            emailVerificationCreateRequest: {
                captchaToken,
                email,
            },
            environmentId,
        });
        return res;
    }
    catch (e) {
        const data = yield e.json();
        logger.logger.error(data.error);
        throw new utils.EmailVerificationError(data.code);
    }
});
const signInWithEmailVerification = ({ verificationToken, verificationUUID, environmentId, captchaToken, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield sdkApi().signInWithEmailVerification({
            emailVerificationVerifyRequest: {
                captchaToken,
                verificationToken,
                verificationUUID,
            },
            environmentId,
        });
        return res;
    }
    catch (e) {
        const data = yield e.json();
        logger.logger.error(data.error);
        if (data.error.code === 'missing_from_list') {
            throw new utils.NoAccessError({ email: data.payload.email });
        }
        if (data.code === 'email_associated_with_different_provider') {
            throw new utils.AccountExistsError(data.error, data.payload);
        }
        throw new utils.EmailVerificationError(data.code);
    }
});
const retryEmailVerification = ({ email, environmentId, verificationUUID, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield sdkApi().retryEmailVerification({
            emailVerificationRetryRequest: {
                email,
                verificationUUID,
            },
            environmentId,
        });
        return res;
    }
    catch (e) {
        const data = yield e.json();
        logger.logger.error(data.error);
        throw new utils.EmailVerificationError(data.code);
    }
});
const verifyEmail = ({ verificationToken, verificationUUID, environmentId, }, userJwt) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield sdkApi(userJwt).verifyEmailVerification({
            emailVerificationVerifyRequest: {
                verificationToken,
                verificationUUID,
            },
            environmentId,
        });
        return res;
    }
    catch (e) {
        const data = yield e.json();
        logger.logger.error(data.error);
        if (data.code === sdkApi$1.UnprocessableEntityErrorCode.UserHasAlreadyAccountWithEmail) {
            throw new utils.UserHasAccountWithEmailError(data.error);
        }
        throw new utils.EmailVerificationError(data.code);
    }
});
const revokeSession = ({ environmentId, sessionId, }, userJwt) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sdkApi(userJwt).revokeSession({
            environmentId,
        });
    }
    catch (error) {
        const body = yield error.json();
        logger.logger.error(Error(body.error.message));
    }
});
const linkWallet = (environmentId, { messageToSign, network, signedMessage, publicWalletAddress, chain, walletName, walletProvider, }, userJwt) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const verifyRequest = sdkApi$1.VerifyRequestFromJSON({
        chain,
        messageToSign,
        network,
        publicWalletAddress,
        signedMessage,
        walletName,
        walletProvider,
    });
    try {
        const { jwt } = yield sdkApi(userJwt).verifyLink({
            environmentId,
            verifyRequest,
        });
        return jwt;
    }
    catch (e) {
        logger.logger.error(e);
        const data = yield e.json();
        if (data.code === 'reassign_wallet_confirm' ||
            data.code === 'reassign_wallet_error') {
            throw new utils.WalletUsedError(data.code);
        }
        return undefined;
    }
});
const unlinkWallet = ({ environmentId, primaryWalletId, walletId, }, userJwt) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const { jwt } = yield sdkApi(userJwt).verifyUnlink({
            environmentId,
            verifyUnlinkRequest: {
                primaryWalletId,
                walletId,
            },
        });
        return jwt;
    }
    catch (e) {
        return undefined;
    }
});
const transferWallet = (environmentId, { network, messageToSign, signedMessage, publicWalletAddress, chain, walletName, walletProvider, skipEmptyAccountCheck = false, }, userJwt) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    // We should find a better way to do this than force type casting
    const verifyRequest = {
        chain,
        messageToSign,
        network,
        publicWalletAddress,
        signedMessage,
        skipEmptyAccountCheck,
        walletName,
        walletProvider,
    };
    try {
        const { jwt } = yield sdkApi(userJwt).verifyTransfer({
            environmentId,
            verifyRequest,
        });
        return jwt;
    }
    catch (_a) {
        return undefined;
    }
});
const mapChainToChainEnum = (chain) => {
    const foundChain = Object.values(sdkApi$1.ChainEnum).find((value) => value === chain);
    if (!foundChain) {
        throw new utils.DynamicError(`Invalid chain ${chain}`);
    }
    return foundChain;
};
const mapProviderToProviderEnum = (provider) => {
    const foundProvider = Object.values(sdkApi$1.WalletProviderEnum).find((value) => value === provider);
    if (!foundProvider) {
        throw new utils.DynamicError(`Invalid provider ${provider}`);
    }
    return foundProvider;
};
const mapAuthModeTypeToEnum = (authMode) => {
    const found = Object.values(sdkApi$1.AuthModeEnum).find((value) => value === authMode);
    if (!found) {
        throw new utils.DynamicError(`Invalid authMode ${authMode}`);
    }
    return found;
};
const createVisit = ({ authMode, chain, environmentId, walletProvider, publicWalletAddress, walletName, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const connectRequest = {
            address: publicWalletAddress,
            authMode: mapAuthModeTypeToEnum(authMode),
            chain: mapChainToChainEnum(chain),
            provider: mapProviderToProviderEnum(walletProvider),
            walletName,
        };
        yield sdkApi().createVisit({
            connectRequest,
            environmentId,
        });
    }
    catch (error) {
        // log error to console, don't do anything else
        logger.logger.error(error);
    }
});
const verifyWallet = (environmentId, { messageToSign, signedMessage, publicWalletAddress, chain, walletName, walletProvider, captchaToken, network, oauth, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const verifyRequest = sdkApi$1.VerifyRequestFromJSON({
        captchaToken,
        chain,
        messageToSign,
        network,
        oauth,
        publicWalletAddress,
        signedMessage,
        walletName,
        walletProvider,
    });
    try {
        const { jwt } = yield sdkApi().verify({
            environmentId,
            verifyRequest,
        });
        return jwt;
    }
    catch (e) {
        logger.logger.error(e);
        const data = yield e.json();
        if (data.code === 'wallet_not_deployed') {
            throw new utils.WalletNotDeployedError();
        }
        if (data.error.code === 'chainalysis_blocked_wallet') {
            throw new utils.ChainalysisError(data.payload.walletPublicKey);
        }
        if (data.error.code === 'gate_blocked') {
            throw new utils.GateBlockedError(data.payload.walletPublicKey);
        }
        if (data.error.code === 'missing_from_list') {
            throw new utils.NoAccessError({
                walletPublicKey: data.payload.walletPublicKey,
            });
        }
        if (data.code === 'email_associated_with_different_provider') {
            throw new utils.AccountExistsError(data.error, data.payload);
        }
        return undefined;
    }
});
const fetchProjectSettings = (environmentId) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield sdkApi().getEnvironmentSettings({
            environmentId,
        });
        return res;
    }
    catch (e) {
        logger.logger.error(e);
        return undefined;
    }
});
const updateUserProfileFields = (jwt, environmentId, fields) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!jwt)
            throw new utils.DynamicError('User not authenticated');
        const res = yield sdkApi(jwt).updateSelf({
            environmentId,
            userFields: fields,
        });
        return res;
    }
    catch (e) {
        logger.logger.error(e);
        if (e instanceof Response) {
            const error = yield e.json();
            if (error.code === 'email_already_exists') {
                throw new utils.EmailAlreadyExistsError();
            }
            else if (error.code === 'username_already_exists') {
                throw new utils.UsernameAlreadyExistsError();
            }
        }
        throw e;
    }
});
const verifyOAuth = (environmentId, providerType, { code, codeVerifier, state }, userJwt) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const oauthRequest = {
        code,
        codeVerifier,
        state,
    };
    try {
        const { jwt } = yield sdkApi(userJwt).oauthVerify({
            environmentId,
            oauthRequest,
            providerType,
        });
        return jwt;
    }
    catch (e) {
        logger.logger.error(e);
        const data = yield e.json();
        if (data.code === 'social_account_already_exists') {
            throw new utils.SocialAccountAlreadyExistsError();
        }
        return undefined;
    }
});
const unlinkOAuth = ({ environmentId, primaryWalletId, verifiedCrentialId, }, userJwt) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const { jwt } = yield sdkApi(userJwt).verifyUnlink({
            environmentId,
            verifyUnlinkRequest: {
                primaryWalletId,
                verifiedCrentialId,
            },
        });
        return jwt;
    }
    catch (e) {
        return undefined;
    }
});
const signInOAuth = (environmentId, providerType, { code, codeVerifier, state, captchaToken }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const oauthRequest = {
        captchaToken,
        code,
        codeVerifier,
        state,
    };
    try {
        const { jwt } = yield sdkApi().oauthSignIn({
            environmentId,
            oauthRequest,
            providerType,
        });
        return jwt;
    }
    catch (e) {
        logger.logger.error(e);
        const data = yield e.json();
        if (data.error.code === 'gate_blocked') {
            throw new utils.GateBlockedError(data.payload.walletPublicKey);
        }
        if (data.error.code === 'missing_from_list') {
            throw new utils.NoAccessError({
                walletPublicKey: data.payload.walletPublicKey,
            });
        }
        if (data.error.code === 'email_associated_with_different_provider') {
            throw new utils.AccountExistsError(data.error, data.payload);
        }
        return undefined;
    }
});
const getOAuthResult = (environmentId, providerType, { state }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const oauthResultRequest = {
        state,
    };
    try {
        const result = yield sdkApi().oauthResult({
            environmentId,
            oauthResultRequest,
            providerType,
        });
        return result;
    }
    catch (e) {
        logger.logger.error(e);
        return undefined;
    }
});
const getOnrampProviders = ({ chain, environmentId, networkId, token, walletAddress, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const { onramps } = yield sdkApi().getSupportedOnramps({
        chain,
        environmentId,
        networkId: networkId ? String(networkId) : undefined,
        token,
        walletAddress,
    });
    if (!onramps || onramps.length === 0) {
        throw new Error('No onramps');
    }
    return onramps;
});
const sendDynamicProps = (environmentId, settingsToSend) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const { dynamicContextProps, dynamicWagmiSettings, frameworkSettings } = settingsToSend;
        if (dynamicContextProps) {
            yield sendDynamicContextSettings(environmentId, { dynamicContextProps, frameworkSettings }, helpers.isDynamicContextSessionSettingExpired, helpers.setDynamicContextSessionSettings);
        }
        if (dynamicWagmiSettings) {
            yield sendDynamicContextSettings(environmentId, { dynamicWagmiSettings }, helpers.isWagmiSessionSettingExpired, helpers.setWagmiSessionSettings);
        }
    }
    catch (error) {
        logger.logger.warn('Error caught when sending sdkSettings to api. Please notify Dynamic, and send the DynamicContextProvider settings you currently have configured', { error });
    }
});
const sendDynamicContextSettings = (environmentId, sdkSettingsRequest, isSdkSettingExpired, setSDKSessionSettings) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    // sent once. no need to send again
    if (!isSdkSettingExpired()) {
        return;
    }
    yield sdkApi().logDynamicSdkSettings({ environmentId, sdkSettingsRequest });
    setSDKSessionSettings();
});
const mergeUserAccounts = (userJwt, environmentId) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const { jwt } = yield sdkApi(userJwt).mergeUsers({
            environmentId,
        });
        return jwt;
    }
    catch (e) {
        logger.logger.error(e);
        throw e;
    }
});
const createTurnkeyEvmEmbeddedWallet = ({ attestation, challenge, environmentId, userJwt, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const embeddedWallets = [
        {
            chain: sdkApi$1.ChainEnum.Evm,
            embeddedWalletProvider: sdkApi$1.EmbeddedWalletProviderEnum.Turnkeyhd,
            isAuthenticatorAttached: false,
        },
    ];
    if (attestation && challenge) {
        embeddedWallets[0] = Object.assign(Object.assign({}, embeddedWallets[0]), { embeddedWalletSpecificOpts: {
                attestation,
                challenge,
            }, isAuthenticatorAttached: true });
    }
    return sdkApi(userJwt).createEmbeddedWallets({
        createEmbeddedWalletsRequest: {
            embeddedWallets,
        },
        environmentId,
    });
});
const initPasskeyRecovery = ({ walletId, publicKey, environmentId, userJwt, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    return sdkApi(userJwt).initPasskeyRecovery({
        environmentId,
        initPasskeyRecoveryRequest: {
            turnkeyRecoveryTargetPublicKey: publicKey,
            walletId,
        },
    });
});
const completePasskeyRecovery = ({ walletId, attestation, challenge, environmentId, userJwt, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    return sdkApi(userJwt).completePasskeyRecovery({
        completePasskeyRecoveryRequest: {
            attestation,
            challenge,
            walletId,
        },
        environmentId,
    });
});
const getUserPasskeys = ({ userJwt, environmentId, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield sdkApi(userJwt).getUserPasskeys({
            environmentId,
        });
        return data;
    }
    catch (e) {
        logger.logger.error(e);
        return {
            count: 0,
            passkeys: [],
        };
    }
});

exports.completePasskeyRecovery = completePasskeyRecovery;
exports.createEmailVerification = createEmailVerification;
exports.createTurnkeyEvmEmbeddedWallet = createTurnkeyEvmEmbeddedWallet;
exports.createVisit = createVisit;
exports.fetchNonce = fetchNonce;
exports.fetchProjectSettings = fetchProjectSettings;
exports.getEmailProvider = getEmailProvider;
exports.getOAuthResult = getOAuthResult;
exports.getOnrampProviders = getOnrampProviders;
exports.getUserPasskeys = getUserPasskeys;
exports.initPasskeyRecovery = initPasskeyRecovery;
exports.linkWallet = linkWallet;
exports.mapAuthModeTypeToEnum = mapAuthModeTypeToEnum;
exports.mapChainToChainEnum = mapChainToChainEnum;
exports.mapProviderToProviderEnum = mapProviderToProviderEnum;
exports.mergeUserAccounts = mergeUserAccounts;
exports.retryEmailVerification = retryEmailVerification;
exports.revokeSession = revokeSession;
exports.sendDynamicProps = sendDynamicProps;
exports.signInOAuth = signInOAuth;
exports.signInWithEmailVerification = signInWithEmailVerification;
exports.transferWallet = transferWallet;
exports.unlinkOAuth = unlinkOAuth;
exports.unlinkWallet = unlinkWallet;
exports.updateUserProfileFields = updateUserProfileFields;
exports.verifyEmail = verifyEmail;
exports.verifyOAuth = verifyOAuth;
exports.verifyWallet = verifyWallet;
