import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useMemo } from 'react';
import { SocialOAuthErrorCode } from '@dynamic-labs/types';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { unlinkOAuth } from '../../../data/api.js';
import { useUpdateUserProfileByJWTCallback } from '../useUpdateUserProfileByJWTCallback/useUpdateUserProfileByJWTCallback.js';
import '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import { PRIMARY_WALLET_ID } from '../../constants/localStorage.js';
import '../../constants/colors.js';
import { LocalStorage } from '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getAuthToken } from '../../functions/getAuthToken/getAuthToken.js';
import { getEnabledOAuthProviders } from '../../functions/getEnabledOAuthProviders/index.js';
import { isSocialKycEnabled } from '../../functions/isSocialKycEnabled/isSocialKycEnabled.js';
import { useSocialAuth } from '../useSocialAuth/useSocialAuth.js';

// Hook exposed to customers and used internally to handle social account linking
const useSocialAccounts = ({ sessionTimeout } = {
    sessionTimeout: 10000,
}) => {
    var _a;
    const { environmentId, user, projectSettings, onboardingOnlyJwt } = useInternalDynamicContext();
    const { updateUserProfileByJWT } = useUpdateUserProfileByJWTCallback();
    const { handleError, setError, setIsProcessing, checkValidProvider, error, isProcessing, connectSocialAccount, } = useSocialAuth({
        authMode: 'link',
        sessionTimeout,
    });
    const userJwt = (_a = getAuthToken()) !== null && _a !== void 0 ? _a : onboardingOnlyJwt;
    const oauthProviders = getEnabledOAuthProviders(projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers);
    const verifiedOAuthCredentialsMap = useMemo(() => {
        var _a, _b;
        const verifiedOAuthCredential = (_b = (_a = user === null || user === void 0 ? void 0 : user.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.filter((credential) => credential.format === 'oauth')) !== null && _b !== void 0 ? _b : [];
        return Object.fromEntries(new Map(verifiedOAuthCredential.map((credential) => {
            var _a;
            return [
                (_a = credential.oauthProvider) !== null && _a !== void 0 ? _a : credential.id,
                credential,
            ];
        })));
    }, [user === null || user === void 0 ? void 0 : user.verifiedCredentials]);
    const checkValidOAuthLinking = (provider) => {
        if (!isSocialKycEnabled(projectSettings)) {
            handleError(SocialOAuthErrorCode.SOCIAL_LINKING_NOT_ENABLED, 'Social linking is not enabled on the dashboard');
            return false;
        }
        const verifiedCredential = verifiedOAuthCredentialsMap[provider];
        if (verifiedCredential) {
            handleError(SocialOAuthErrorCode.ACCOUNT_ALREADY_LINKED, `Account already linked for provider: ${provider}`);
            return false;
        }
        const oauthProvider = oauthProviders.find((p) => p.provider === provider);
        if (!oauthProvider) {
            handleError(SocialOAuthErrorCode.PROVIDER_NOT_ENABLED, `Provider is not enabled on the dashboard: ${provider}`);
            return false;
        }
        return true;
    };
    const linkSocialAccount = (provider) => __awaiter(void 0, void 0, void 0, function* () {
        connectSocialAccount({ provider, validator: checkValidOAuthLinking });
    });
    const unlinkSocialAccount = (provider) => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        setError(undefined);
        setIsProcessing(true);
        if (!checkValidProvider(provider)) {
            return;
        }
        const verifiedCredential = verifiedOAuthCredentialsMap[provider];
        if (!verifiedCredential) {
            handleError(SocialOAuthErrorCode.NO_ACCOUNT_LINKED, `No account linked for provider: ${provider}`);
            return;
        }
        try {
            const primaryWalletId = LocalStorage.getFromLS(PRIMARY_WALLET_ID);
            const jwt = yield unlinkOAuth({
                environmentId,
                primaryWalletId,
                verifiedCrentialId: (_b = verifiedCredential.id) !== null && _b !== void 0 ? _b : '',
            }, String(userJwt));
            if (!jwt) {
                handleError(SocialOAuthErrorCode.UNLINK_ERROR, `Failed to unlink social account: ${provider} | ${verifiedCredential.id}`);
                return;
            }
            yield updateUserProfileByJWT(jwt);
            setIsProcessing(false);
        }
        catch (err) {
            handleError(SocialOAuthErrorCode.GENERAL_ERROR, `Failed to unlink social account: ${provider} | ${verifiedCredential.id}`);
        }
    });
    const isLinked = (provider) => Boolean(verifiedOAuthCredentialsMap[provider]);
    const getLinkedAccountInformation = (provider) => {
        const verifiedCredential = verifiedOAuthCredentialsMap[provider];
        if (!verifiedCredential) {
            return;
        }
        const { id, oauthAccountId, oauthAccountPhotos, oauthDisplayName, oauthEmails, oauthProvider, oauthUsername, publicIdentifier, } = verifiedCredential;
        return {
            accountId: oauthAccountId,
            avatar: oauthAccountPhotos === null || oauthAccountPhotos === void 0 ? void 0 : oauthAccountPhotos[0],
            displayName: oauthDisplayName,
            email: oauthEmails === null || oauthEmails === void 0 ? void 0 : oauthEmails[0],
            id,
            provider: oauthProvider,
            publicIdentifier,
            username: oauthUsername,
        };
    };
    return {
        error,
        getLinkedAccountInformation,
        isLinked,
        isProcessing,
        linkSocialAccount,
        unlinkSocialAccount,
    };
};

export { useSocialAccounts };
