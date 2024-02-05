'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var sdkApi = require('@dynamic-labs/sdk-api');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
var EmailVerificationContext = require('../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
var ViewContext = require('../../../context/ViewContext/ViewContext.cjs');
var useWalletItemActions = require('../useWalletItemActions/useWalletItemActions.cjs');
var useConnectWithEmail = require('../useConnectWithEmail/useConnectWithEmail.cjs');
var api = require('../../../data/api.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('react');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var isProviderEnabled = require('../../functions/isProviderEnabled/isProviderEnabled.cjs');
var isTurnkeyEnabled = require('../../functions/isTurnkeyEnabled/isTurnkeyEnabled.cjs');

const checkMagicOrBloctoEnabled = (providers) => isProviderEnabled.isProviderEnabled(providers || [], sdkApi.ProviderEnum.MagicLink) ||
    isProviderEnabled.isProviderEnabled(providers || [], sdkApi.ProviderEnum.Blocto);
const useEmailProvider = ({ emailWalletConnector }) => {
    const { projectSettings, environmentId } = useInternalDynamicContext.useInternalDynamicContext();
    const { setEmail: setEmailForVerification, setVerificationUUID } = EmailVerificationContext.useEmailVerificationContext();
    const { setView } = ViewContext.useViewContext();
    const { handleInstalledExtensionClick } = useWalletItemActions.useWalletItemActions();
    const { connectWithEmail, loading: isEmailProviderLoading } = useConnectWithEmail.useConnectWithEmail({
        emailWalletConnector,
        handleConnect: handleInstalledExtensionClick,
    });
    const { providers } = projectSettings || {};
    const isInjectedWalletProviderEnabled = emailWalletConnector !== undefined;
    // this is enabled in the sense that we could use the given provider in the email form
    // for magic, as long as there are magic credentials available, then could have an email
    // address that is a magic address, even if magic was previously turned off in dashboard
    const isMagicOrBloctoEnabled = isInjectedWalletProviderEnabled && checkMagicOrBloctoEnabled(providers);
    const handleEmailOnlyLoginSubmit = (emailInput, captchaToken) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const { email, verificationUUID } = yield api.createEmailVerification({
            captchaToken,
            email: emailInput,
            environmentId,
        });
        setView('login-with-email-verification');
        setEmailForVerification(email);
        setVerificationUUID(verificationUUID);
    });
    const handleMagicLinkOrBloctoSubmit = (emailInput) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        yield connectWithEmail(emailInput);
    });
    const submitEmail = (emailInput, captchaToken) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (isMagicOrBloctoEnabled) {
            yield handleMagicLinkOrBloctoSubmit(emailInput);
            return;
        }
        yield handleEmailOnlyLoginSubmit(emailInput, captchaToken);
    });
    const handleEmailSubmitWithOptionalCaptcha = (emailInput, captchaToken) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if ((emailWalletConnector !== undefined ||
            isTurnkeyEnabled.isTurnkeyEnabled(projectSettings)) &&
            (projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk.confirmEmailProviderForVerify)) {
            // see: https://linear.app/dynamic-labs/issue/DYN-2517
            // if confirmWalletTransfers setting is true, check api first to confirm emailProvider
            const { emailProvider } = yield api.getEmailProvider({
                email: emailInput,
                environmentId,
            });
            // For v0.19 we will support emailOnly and Dynamic as email providers
            // For v0.20/v1 we need to remove emailOnly and leave Dynamic as the only one email provider
            // Ticket: https://linear.app/dynamic-labs/issue/GVTY-213/remove-emailonly-as-a-provider-from-sdk
            if (emailProvider === sdkApi.ProviderEnum.EmailOnly ||
                emailProvider === sdkApi.ProviderEnum.Dynamic) {
                yield handleEmailOnlyLoginSubmit(emailInput, captchaToken);
                return;
            }
        }
        yield submitEmail(emailInput, captchaToken);
    });
    return {
        handleEmailSubmitWithOptionalCaptcha,
        isEmailProviderLoading,
    };
};

exports.checkMagicOrBloctoEnabled = checkMagicOrBloctoEnabled;
exports.useEmailProvider = useEmailProvider;
