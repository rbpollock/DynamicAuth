'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var types = require('@dynamic-labs/types');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
var api = require('../../../data/api.cjs');
var useUpdateUserProfileByJWTCallback = require('../useUpdateUserProfileByJWTCallback/useUpdateUserProfileByJWTCallback.cjs');
require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
var localStorage$1 = require('../../constants/localStorage.cjs');
require('../../constants/colors.cjs');
var localStorage = require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getAuthToken = require('../../functions/getAuthToken/getAuthToken.cjs');
var index = require('../../functions/getEnabledOAuthProviders/index.cjs');
var isSocialKycEnabled = require('../../functions/isSocialKycEnabled/isSocialKycEnabled.cjs');
var useSocialAuth = require('../useSocialAuth/useSocialAuth.cjs');

// Hook exposed to customers and used internally to handle social account linking
const useSocialAccounts = ({ sessionTimeout } = {
    sessionTimeout: 10000,
}) => {
    var _a;
    const { environmentId, user, projectSettings, onboardingOnlyJwt } = useInternalDynamicContext.useInternalDynamicContext();
    const { updateUserProfileByJWT } = useUpdateUserProfileByJWTCallback.useUpdateUserProfileByJWTCallback();
    const { handleError, setError, setIsProcessing, checkValidProvider, error, isProcessing, connectSocialAccount, } = useSocialAuth.useSocialAuth({
        authMode: 'link',
        sessionTimeout,
    });
    const userJwt = (_a = getAuthToken.getAuthToken()) !== null && _a !== void 0 ? _a : onboardingOnlyJwt;
    const oauthProviders = index.getEnabledOAuthProviders(projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers);
    const verifiedOAuthCredentialsMap = React.useMemo(() => {
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
        if (!isSocialKycEnabled.isSocialKycEnabled(projectSettings)) {
            handleError(types.SocialOAuthErrorCode.SOCIAL_LINKING_NOT_ENABLED, 'Social linking is not enabled on the dashboard');
            return false;
        }
        const verifiedCredential = verifiedOAuthCredentialsMap[provider];
        if (verifiedCredential) {
            handleError(types.SocialOAuthErrorCode.ACCOUNT_ALREADY_LINKED, `Account already linked for provider: ${provider}`);
            return false;
        }
        const oauthProvider = oauthProviders.find((p) => p.provider === provider);
        if (!oauthProvider) {
            handleError(types.SocialOAuthErrorCode.PROVIDER_NOT_ENABLED, `Provider is not enabled on the dashboard: ${provider}`);
            return false;
        }
        return true;
    };
    const linkSocialAccount = (provider) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        connectSocialAccount({ provider, validator: checkValidOAuthLinking });
    });
    const unlinkSocialAccount = (provider) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _b;
        setError(undefined);
        setIsProcessing(true);
        if (!checkValidProvider(provider)) {
            return;
        }
        const verifiedCredential = verifiedOAuthCredentialsMap[provider];
        if (!verifiedCredential) {
            handleError(types.SocialOAuthErrorCode.NO_ACCOUNT_LINKED, `No account linked for provider: ${provider}`);
            return;
        }
        try {
            const primaryWalletId = localStorage.LocalStorage.getFromLS(localStorage$1.PRIMARY_WALLET_ID);
            const jwt = yield api.unlinkOAuth({
                environmentId,
                primaryWalletId,
                verifiedCrentialId: (_b = verifiedCredential.id) !== null && _b !== void 0 ? _b : '',
            }, String(userJwt));
            if (!jwt) {
                handleError(types.SocialOAuthErrorCode.UNLINK_ERROR, `Failed to unlink social account: ${provider} | ${verifiedCredential.id}`);
                return;
            }
            yield updateUserProfileByJWT(jwt);
            setIsProcessing(false);
        }
        catch (err) {
            handleError(types.SocialOAuthErrorCode.GENERAL_ERROR, `Failed to unlink social account: ${provider} | ${verifiedCredential.id}`);
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

exports.useSocialAccounts = useSocialAccounts;
