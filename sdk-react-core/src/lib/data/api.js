import { __awaiter } from '../../../_virtual/_tslib.js';
import { NoAccessError, AccountExistsError, EmailVerificationError, UserHasAccountWithEmailError, DynamicError, EmailAlreadyExistsError, UsernameAlreadyExistsError, EmailProviderError, WalletUsedError, WalletNotDeployedError, ChainalysisError, GateBlockedError, SocialAccountAlreadyExistsError } from '@dynamic-labs/utils';
import { UnprocessableEntityErrorCode, SDKApi, Configuration, ChainEnum, EmbeddedWalletProviderEnum, VerifyRequestFromJSON, WalletProviderEnum, AuthModeEnum } from '@dynamic-labs/sdk-api';
import { VERSION, API_VERSION } from '../../version.js';
import ApiEndpoint from '../config/ApiEndpoint.js';
import { logger } from '../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../context/ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import '../utils/constants/colors.js';
import '../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../shared/consts/index.js';
import { isDynamicContextSessionSettingExpired, setDynamicContextSessionSettings, isWagmiSessionSettingExpired, setWagmiSessionSettings } from '../context/DynamicContext/helpers.js';

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
    settings.headers['x-dyn-version'] = `WalletKit/${VERSION}`;
    settings.headers['x-dyn-api-version'] = `API/${API_VERSION}`;
    return new SDKApi(new Configuration(settings));
};
const fetchNonce = (environmentId) => __awaiter(void 0, void 0, void 0, function* () {
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
const getEmailProvider = ({ email, environmentId, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield sdkApi().getEmailProvider({
            email,
            environmentId,
        });
        return res;
    }
    catch (e) {
        const data = yield e.json();
        logger.error(data.error);
        throw new EmailProviderError(data.code);
    }
});
const createEmailVerification = ({ email, environmentId, captchaToken, }) => __awaiter(void 0, void 0, void 0, function* () {
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
        logger.error(data.error);
        throw new EmailVerificationError(data.code);
    }
});
const signInWithEmailVerification = ({ verificationToken, verificationUUID, environmentId, captchaToken, }) => __awaiter(void 0, void 0, void 0, function* () {
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
        logger.error(data.error);
        if (data.error.code === 'missing_from_list') {
            throw new NoAccessError({ email: data.payload.email });
        }
        if (data.code === 'email_associated_with_different_provider') {
            throw new AccountExistsError(data.error, data.payload);
        }
        throw new EmailVerificationError(data.code);
    }
});
const retryEmailVerification = ({ email, environmentId, verificationUUID, }) => __awaiter(void 0, void 0, void 0, function* () {
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
        logger.error(data.error);
        throw new EmailVerificationError(data.code);
    }
});
const verifyEmail = ({ verificationToken, verificationUUID, environmentId, }, userJwt) => __awaiter(void 0, void 0, void 0, function* () {
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
        logger.error(data.error);
        if (data.code === UnprocessableEntityErrorCode.UserHasAlreadyAccountWithEmail) {
            throw new UserHasAccountWithEmailError(data.error);
        }
        throw new EmailVerificationError(data.code);
    }
});
const revokeSession = ({ environmentId, sessionId, }, userJwt) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sdkApi(userJwt).revokeSession({
            environmentId,
        });
    }
    catch (error) {
        const body = yield error.json();
        logger.error(Error(body.error.message));
    }
});
const linkWallet = (environmentId, { messageToSign, network, signedMessage, publicWalletAddress, chain, walletName, walletProvider, }, userJwt) => __awaiter(void 0, void 0, void 0, function* () {
    const verifyRequest = VerifyRequestFromJSON({
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
        logger.error(e);
        const data = yield e.json();
        if (data.code === 'reassign_wallet_confirm' ||
            data.code === 'reassign_wallet_error') {
            throw new WalletUsedError(data.code);
        }
        return undefined;
    }
});
const unlinkWallet = ({ environmentId, primaryWalletId, walletId, }, userJwt) => __awaiter(void 0, void 0, void 0, function* () {
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
const transferWallet = (environmentId, { network, messageToSign, signedMessage, publicWalletAddress, chain, walletName, walletProvider, skipEmptyAccountCheck = false, }, userJwt) => __awaiter(void 0, void 0, void 0, function* () {
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
    const foundChain = Object.values(ChainEnum).find((value) => value === chain);
    if (!foundChain) {
        throw new DynamicError(`Invalid chain ${chain}`);
    }
    return foundChain;
};
const mapProviderToProviderEnum = (provider) => {
    const foundProvider = Object.values(WalletProviderEnum).find((value) => value === provider);
    if (!foundProvider) {
        throw new DynamicError(`Invalid provider ${provider}`);
    }
    return foundProvider;
};
const mapAuthModeTypeToEnum = (authMode) => {
    const found = Object.values(AuthModeEnum).find((value) => value === authMode);
    if (!found) {
        throw new DynamicError(`Invalid authMode ${authMode}`);
    }
    return found;
};
const createVisit = ({ authMode, chain, environmentId, walletProvider, publicWalletAddress, walletName, }) => __awaiter(void 0, void 0, void 0, function* () {
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
        logger.error(error);
    }
});
const verifyWallet = (environmentId, { messageToSign, signedMessage, publicWalletAddress, chain, walletName, walletProvider, captchaToken, network, oauth, }) => __awaiter(void 0, void 0, void 0, function* () {
    const verifyRequest = VerifyRequestFromJSON({
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
        logger.error(e);
        const data = yield e.json();
        if (data.code === 'wallet_not_deployed') {
            throw new WalletNotDeployedError();
        }
        if (data.error.code === 'chainalysis_blocked_wallet') {
            throw new ChainalysisError(data.payload.walletPublicKey);
        }
        if (data.error.code === 'gate_blocked') {
            throw new GateBlockedError(data.payload.walletPublicKey);
        }
        if (data.error.code === 'missing_from_list') {
            throw new NoAccessError({
                walletPublicKey: data.payload.walletPublicKey,
            });
        }
        if (data.code === 'email_associated_with_different_provider') {
            throw new AccountExistsError(data.error, data.payload);
        }
        return undefined;
    }
});
const fetchProjectSettings = (environmentId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield sdkApi().getEnvironmentSettings({
            environmentId,
        });
        return res;
    }
    catch (e) {
        logger.error(e);
        return undefined;
    }
});
const updateUserProfileFields = (jwt, environmentId, fields) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!jwt)
            throw new DynamicError('User not authenticated');
        const res = yield sdkApi(jwt).updateSelf({
            environmentId,
            userFields: fields,
        });
        return res;
    }
    catch (e) {
        logger.error(e);
        if (e instanceof Response) {
            const error = yield e.json();
            if (error.code === 'email_already_exists') {
                throw new EmailAlreadyExistsError();
            }
            else if (error.code === 'username_already_exists') {
                throw new UsernameAlreadyExistsError();
            }
        }
        throw e;
    }
});
const verifyOAuth = (environmentId, providerType, { code, codeVerifier, state }, userJwt) => __awaiter(void 0, void 0, void 0, function* () {
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
        logger.error(e);
        const data = yield e.json();
        if (data.code === 'social_account_already_exists') {
            throw new SocialAccountAlreadyExistsError();
        }
        return undefined;
    }
});
const unlinkOAuth = ({ environmentId, primaryWalletId, verifiedCrentialId, }, userJwt) => __awaiter(void 0, void 0, void 0, function* () {
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
const signInOAuth = (environmentId, providerType, { code, codeVerifier, state, captchaToken }) => __awaiter(void 0, void 0, void 0, function* () {
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
        logger.error(e);
        const data = yield e.json();
        if (data.error.code === 'gate_blocked') {
            throw new GateBlockedError(data.payload.walletPublicKey);
        }
        if (data.error.code === 'missing_from_list') {
            throw new NoAccessError({
                walletPublicKey: data.payload.walletPublicKey,
            });
        }
        if (data.error.code === 'email_associated_with_different_provider') {
            throw new AccountExistsError(data.error, data.payload);
        }
        return undefined;
    }
});
const getOAuthResult = (environmentId, providerType, { state }) => __awaiter(void 0, void 0, void 0, function* () {
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
        logger.error(e);
        return undefined;
    }
});
const getOnrampProviders = ({ chain, environmentId, networkId, token, walletAddress, }) => __awaiter(void 0, void 0, void 0, function* () {
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
const sendDynamicProps = (environmentId, settingsToSend) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { dynamicContextProps, dynamicWagmiSettings, frameworkSettings } = settingsToSend;
        if (dynamicContextProps) {
            yield sendDynamicContextSettings(environmentId, { dynamicContextProps, frameworkSettings }, isDynamicContextSessionSettingExpired, setDynamicContextSessionSettings);
        }
        if (dynamicWagmiSettings) {
            yield sendDynamicContextSettings(environmentId, { dynamicWagmiSettings }, isWagmiSessionSettingExpired, setWagmiSessionSettings);
        }
    }
    catch (error) {
        logger.warn('Error caught when sending sdkSettings to api. Please notify Dynamic, and send the DynamicContextProvider settings you currently have configured', { error });
    }
});
const sendDynamicContextSettings = (environmentId, sdkSettingsRequest, isSdkSettingExpired, setSDKSessionSettings) => __awaiter(void 0, void 0, void 0, function* () {
    // sent once. no need to send again
    if (!isSdkSettingExpired()) {
        return;
    }
    yield sdkApi().logDynamicSdkSettings({ environmentId, sdkSettingsRequest });
    setSDKSessionSettings();
});
const mergeUserAccounts = (userJwt, environmentId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { jwt } = yield sdkApi(userJwt).mergeUsers({
            environmentId,
        });
        return jwt;
    }
    catch (e) {
        logger.error(e);
        throw e;
    }
});
const createTurnkeyEvmEmbeddedWallet = ({ attestation, challenge, environmentId, userJwt, }) => __awaiter(void 0, void 0, void 0, function* () {
    const embeddedWallets = [
        {
            chain: ChainEnum.Evm,
            embeddedWalletProvider: EmbeddedWalletProviderEnum.Turnkeyhd,
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
const initPasskeyRecovery = ({ walletId, publicKey, environmentId, userJwt, }) => __awaiter(void 0, void 0, void 0, function* () {
    return sdkApi(userJwt).initPasskeyRecovery({
        environmentId,
        initPasskeyRecoveryRequest: {
            turnkeyRecoveryTargetPublicKey: publicKey,
            walletId,
        },
    });
});
const completePasskeyRecovery = ({ walletId, attestation, challenge, environmentId, userJwt, }) => __awaiter(void 0, void 0, void 0, function* () {
    return sdkApi(userJwt).completePasskeyRecovery({
        completePasskeyRecoveryRequest: {
            attestation,
            challenge,
            walletId,
        },
        environmentId,
    });
});
const getUserPasskeys = ({ userJwt, environmentId, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield sdkApi(userJwt).getUserPasskeys({
            environmentId,
        });
        return data;
    }
    catch (e) {
        logger.error(e);
        return {
            count: 0,
            passkeys: [],
        };
    }
});

export { completePasskeyRecovery, createEmailVerification, createTurnkeyEvmEmbeddedWallet, createVisit, fetchNonce, fetchProjectSettings, getEmailProvider, getOAuthResult, getOnrampProviders, getUserPasskeys, initPasskeyRecovery, linkWallet, mapAuthModeTypeToEnum, mapChainToChainEnum, mapProviderToProviderEnum, mergeUserAccounts, retryEmailVerification, revokeSession, sendDynamicProps, signInOAuth, signInWithEmailVerification, transferWallet, unlinkOAuth, unlinkWallet, updateUserProfileFields, verifyEmail, verifyOAuth, verifyWallet };
