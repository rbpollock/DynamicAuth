import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { ProviderEnum } from '@dynamic-labs/sdk-api';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { useEmailVerificationContext } from '../../../context/EmailVerificationContext/EmailVerificationContext.js';
import { useViewContext } from '../../../context/ViewContext/ViewContext.js';
import { useWalletItemActions } from '../useWalletItemActions/useWalletItemActions.js';
import { useConnectWithEmail } from '../useConnectWithEmail/useConnectWithEmail.js';
import { getEmailProvider, createEmailVerification } from '../../../data/api.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import 'react';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { isProviderEnabled } from '../../functions/isProviderEnabled/isProviderEnabled.js';
import { isTurnkeyEnabled } from '../../functions/isTurnkeyEnabled/isTurnkeyEnabled.js';

const checkMagicOrBloctoEnabled = (providers) => isProviderEnabled(providers || [], ProviderEnum.MagicLink) ||
    isProviderEnabled(providers || [], ProviderEnum.Blocto);
const useEmailProvider = ({ emailWalletConnector }) => {
    const { projectSettings, environmentId } = useInternalDynamicContext();
    const { setEmail: setEmailForVerification, setVerificationUUID } = useEmailVerificationContext();
    const { setView } = useViewContext();
    const { handleInstalledExtensionClick } = useWalletItemActions();
    const { connectWithEmail, loading: isEmailProviderLoading } = useConnectWithEmail({
        emailWalletConnector,
        handleConnect: handleInstalledExtensionClick,
    });
    const { providers } = projectSettings || {};
    const isInjectedWalletProviderEnabled = emailWalletConnector !== undefined;
    // this is enabled in the sense that we could use the given provider in the email form
    // for magic, as long as there are magic credentials available, then could have an email
    // address that is a magic address, even if magic was previously turned off in dashboard
    const isMagicOrBloctoEnabled = isInjectedWalletProviderEnabled && checkMagicOrBloctoEnabled(providers);
    const handleEmailOnlyLoginSubmit = (emailInput, captchaToken) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, verificationUUID } = yield createEmailVerification({
            captchaToken,
            email: emailInput,
            environmentId,
        });
        setView('login-with-email-verification');
        setEmailForVerification(email);
        setVerificationUUID(verificationUUID);
    });
    const handleMagicLinkOrBloctoSubmit = (emailInput) => __awaiter(void 0, void 0, void 0, function* () {
        yield connectWithEmail(emailInput);
    });
    const submitEmail = (emailInput, captchaToken) => __awaiter(void 0, void 0, void 0, function* () {
        if (isMagicOrBloctoEnabled) {
            yield handleMagicLinkOrBloctoSubmit(emailInput);
            return;
        }
        yield handleEmailOnlyLoginSubmit(emailInput, captchaToken);
    });
    const handleEmailSubmitWithOptionalCaptcha = (emailInput, captchaToken) => __awaiter(void 0, void 0, void 0, function* () {
        if ((emailWalletConnector !== undefined ||
            isTurnkeyEnabled(projectSettings)) &&
            (projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk.confirmEmailProviderForVerify)) {
            // see: https://linear.app/dynamic-labs/issue/DYN-2517
            // if confirmWalletTransfers setting is true, check api first to confirm emailProvider
            const { emailProvider } = yield getEmailProvider({
                email: emailInput,
                environmentId,
            });
            // For v0.19 we will support emailOnly and Dynamic as email providers
            // For v0.20/v1 we need to remove emailOnly and leave Dynamic as the only one email provider
            // Ticket: https://linear.app/dynamic-labs/issue/GVTY-213/remove-emailonly-as-a-provider-from-sdk
            if (emailProvider === ProviderEnum.EmailOnly ||
                emailProvider === ProviderEnum.Dynamic) {
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

export { checkMagicOrBloctoEnabled, useEmailProvider };
