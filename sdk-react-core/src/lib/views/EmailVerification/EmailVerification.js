import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useRef, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { UserHasAccountWithEmailError, NoAccessError, AccountExistsError, sleep } from '@dynamic-labs/utils';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import { useErrorContext } from '../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../context/ViewContext/ViewContext.js';
import { decodeJwt } from '../../shared/utils/functions/decodeJwt/decodeJwt.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgCheckCircle } from '../../shared/assets/check-circle.js';
import { ReactComponent as SvgCheck } from '../../shared/assets/check.js';
import { ReactComponent as SvgSignInWithEmail } from '../../shared/assets/sign-in-with-email.js';
import { logger } from '../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import { useEffectOnce } from '../../shared/utils/hooks/useEffectOnce/useEffectOnce.js';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '@dynamic-labs/sdk-api';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import { useAccountExistsContext } from '../../context/AccountExistsContext/AccountExistsContext.js';
import { signInWithEmailVerification, retryEmailVerification } from '../../data/api.js';
import { useEmailVerificationRequest } from '../../utils/hooks/authenticationHooks/useEmailVerificationRequest/useEmailVerificationRequest.js';
import 'react-dom';
import { useCountdown } from '../../utils/hooks/useCountdown/useCountdown.js';
import { useEmbeddedWallet } from '../../utils/hooks/useEmbeddedWallet/useEmbeddedWallet.js';
import '../../context/ThemeContext/ThemeContext.js';
import { useOnUnmount } from '../../utils/hooks/useOnUnmount/useOnUnmount.js';
import '@dynamic-labs/types';
import { useCreateUserProfileByJWTCallback } from '../../utils/hooks/useCreateUserProfileByJWTCallback/useCreateUserProfileByJWTCallback.js';
import 'yup';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../components/Typography/Typography.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import { IconWithSpinner } from '../../components/IconWithSpinner/IconWithSpinner.js';
import 'qrcode';
import { useLoadingContext } from '../../context/LoadingContext/LoadingContext.js';
import { IconWithStatus } from '../../components/IconWithStatus/IconWithStatus.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import { ErrorContainer } from '../../components/ErrorContainer/ErrorContainer.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../components/IconButton/IconButton.js';
import { Icon } from '../../components/Icon/Icon.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { TextButton } from '../../components/TextButton/TextButton.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import { shortenEmail } from '../../shared/utils/functions/shortenEmail/shortenEmail.js';
import { PinField } from '../../components/PinField/PinField.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { useEmailVerificationContext } from '../../context/EmailVerificationContext/EmailVerificationContext.js';

const SECONDS_TO_RETRY = 15;
const sleepToShowSuccessMessage = () => sleep(1500);
const EmailVerification = () => {
    var _a, _b;
    const [hideRetryButton, setHideRetryButton] = useState(false);
    const [retried, setRetried] = useState(false);
    const [showTransferMessage, setShowTransferMessage] = useState(false);
    // Use a state to ensure UI is updated, but also a ref to access in effect cleanup
    const [isValidated, _setIsValidated] = useState(false);
    const isValidatedRef = useRef(isValidated);
    const setIsValidated = (value) => {
        _setIsValidated(value);
        isValidatedRef.current = value;
    };
    const { view, setView, goToInitialView } = useViewContext();
    const { error, setError, setErrorMessage } = useErrorContext();
    const { setExistentAccountData } = useAccountExistsContext();
    const { environmentId, onboardingOnlyJwt, handleLogOut, authToken, setOnboardingOnlyJwt, setShowAuthFlow, setCallback, setIsVerificationInProgress, projectSettings, } = useInternalDynamicContext();
    const { email, verificationUUID, setVerificationUUID } = useEmailVerificationContext();
    const { loading, setLoading } = useLoadingContext();
    const { t } = useTranslation();
    const { createEmbeddedWallet } = useEmbeddedWallet();
    const { remainingSeconds, startCountdown } = useCountdown({
        callback: () => setRetried(false),
        seconds: SECONDS_TO_RETRY,
    });
    // When true, causes the component to call emailVerificationX callback on unmount
    const callCallbackOnUnmount = useRef(true);
    useOnUnmount(() => {
        if (!callCallbackOnUnmount.current)
            return;
        const callback = isValidatedRef.current
            ? 'emailVerificationSuccess'
            : 'emailVerificationFailure';
        setCallback(callback, { email: email !== null && email !== void 0 ? email : '' });
    });
    useEffectOnce(() => {
        // Set verification in progress
        // It should be disabled by either clearStatesOnBackClick, the close button, or onAuthSuccess
        setIsVerificationInProgress(true);
    });
    const isLoginView = view === 'login-with-email-verification';
    const { verifyEmail } = useEmailVerificationRequest();
    const { createUserProfileByJWT } = useCreateUserProfileByJWTCallback();
    const handleComplete = useCallback((verificationToken) => __awaiter(void 0, void 0, void 0, function* () {
        var _c;
        setError(undefined);
        setLoading(true);
        if (!verificationUUID || (!authToken && !onboardingOnlyJwt)) {
            yield handleLogOut();
            goToInitialView();
            return;
        }
        try {
            const { nextView } = yield verifyEmail(verificationToken, verificationUUID);
            if (onboardingOnlyJwt) {
                setOnboardingOnlyJwt(undefined);
                setCallback('authSuccess');
            }
            setIsValidated(true);
            if (nextView === 'verified-and-transferred') {
                setShowTransferMessage(true);
            }
            if (!((_c = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _c === void 0 ? void 0 : _c.automaticEmbeddedWalletCreation)) {
                setShowAuthFlow(false);
                return;
            }
            try {
                // this function will check turnkey wallet enabled and create wallet if needed
                // if not enabled, it will throw an error.
                yield createEmbeddedWallet();
            }
            catch (e) {
                setShowAuthFlow(false);
            }
        }
        catch (error) {
            logger.debug(error);
            // Handle the case where the user has already an account with the email
            if (error instanceof UserHasAccountWithEmailError) {
                setView('merge-user-accounts');
                return; // Early return to not show the error message
            }
            setErrorMessage(error.code);
        }
        finally {
            setLoading(false);
        }
    }), [
        setError,
        setLoading,
        verificationUUID,
        authToken,
        onboardingOnlyJwt,
        handleLogOut,
        goToInitialView,
        verifyEmail,
        setOnboardingOnlyJwt,
        setCallback,
        (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _a === void 0 ? void 0 : _a.automaticEmbeddedWalletCreation,
        createEmbeddedWallet,
        setShowAuthFlow,
        setErrorMessage,
        setView,
    ]);
    const handleEmailLogin = useCallback((verificationToken) => __awaiter(void 0, void 0, void 0, function* () {
        var _d;
        setError(undefined);
        setLoading(true);
        if (!verificationUUID) {
            yield handleLogOut();
            goToInitialView();
            return;
        }
        try {
            const { jwt } = yield signInWithEmailVerification({
                environmentId,
                verificationToken,
                verificationUUID,
            });
            if (!jwt) {
                yield handleLogOut();
                goToInitialView();
                return;
            }
            const decodedJwt = decodeJwt(jwt);
            setIsValidated(true);
            if (decodedJwt === null || decodedJwt === void 0 ? void 0 : decodedJwt.missingFields.length) {
                setOnboardingOnlyJwt(jwt);
                yield sleepToShowSuccessMessage();
                setView('collect-user-data-login-with-email');
                return;
            }
            setCallback('authSuccess');
            // this timeout is set to make sure that the user will see success message
            yield sleepToShowSuccessMessage();
            yield createUserProfileByJWT(jwt);
            if (!((_d = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _d === void 0 ? void 0 : _d.automaticEmbeddedWalletCreation)) {
                setShowAuthFlow(false);
                return;
            }
            try {
                // this function will check turnkey wallet enabled and create wallet if needed
                // if not enabled, it will throw an error.
                yield createEmbeddedWallet();
            }
            catch (e) {
                setShowAuthFlow(false);
            }
        }
        catch (error) {
            if (error instanceof NoAccessError) {
                setView('no-access');
            }
            if (error instanceof AccountExistsError) {
                setExistentAccountData(error.errorPayload);
                setView('account-exists');
            }
            logger.debug(error);
            setErrorMessage(error.code);
        }
        finally {
            setLoading(false);
        }
    }), [
        setError,
        setLoading,
        verificationUUID,
        handleLogOut,
        goToInitialView,
        environmentId,
        setCallback,
        createUserProfileByJWT,
        setOnboardingOnlyJwt,
        setView,
        (_b = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _b === void 0 ? void 0 : _b.automaticEmbeddedWalletCreation,
        createEmbeddedWallet,
        setShowAuthFlow,
        setErrorMessage,
        setExistentAccountData,
    ]);
    const handleRetry = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!verificationUUID || !email) {
                return;
            }
            setLoading(true);
            const { verificationUUID: newVerificationUUID } = yield retryEmailVerification({
                email,
                environmentId,
                verificationUUID,
            });
            setVerificationUUID(newVerificationUUID);
            setRetried(true);
            startCountdown();
            setError(undefined);
        }
        catch (error) {
            logger.debug(error);
            setErrorMessage(error.code);
            if (error.code === 'too_many_email_verification_attempts') {
                setHideRetryButton(true);
            }
            if (error.code === 'invalid_email_verification') {
                goToInitialView();
            }
        }
        finally {
            setLoading(false);
        }
    });
    // Go to update email screen, but prevent onEmailVerificationX callback from being called
    const updateEmail = () => {
        callCallbackOnUnmount.current = false;
        setView('update-email');
    };
    const EmailIcon = useMemo(() => {
        const EmailIcon = (props) => (jsx(Icon, { color: 'brand-primary', children: jsx(SvgSignInWithEmail, Object.assign({}, props)) }));
        return EmailIcon;
    }, []);
    return (jsxs(Fragment, { children: [error && (jsx(ErrorContainer, { withIcon: false, className: 'email-verification__error-message', children: error })), jsxs("div", { className: classNames('email-verification__container', {
                    'email-verification__container--error': Boolean(error),
                }), children: [showTransferMessage && (jsx("div", { className: 'email-verification__transfer-message', copykey: 'dyn_email_verification.complete', children: t('dyn_email_verification.complete') })), isValidated ? (jsx("div", { className: 'email-verification__icon-container', children: jsx(IconWithStatus, { containerClassName: 'email-verification__icon--verified', Icon: EmailIcon, iconSize: 64, InnerIcon: SvgCheck }) })) : (jsx(IconWithSpinner, { Icon: EmailIcon, iconSize: 96, isSpinning: true, className: 'email-verification__icon-with-spinner' })), jsxs("div", { className: 'email-verification__copy-text-container', children: [jsx(Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', copykey: 'dyn_email_verification.description', children: t('dyn_email_verification.description') }), jsx(Typography, { variant: 'body_normal', weight: 'bold', color: 'secondary', children: shortenEmail(email) })] }), !isLoginView && !isValidated && (jsx(TextButton, { onClick: updateEmail, className: 'email-verification__text-button', disabled: loading, copykey: 'dyn_email_verification.edit_email', children: t('dyn_email_verification.edit_email') })), jsx(PinField, { initialValue: Array(6).join('.').split('.'), isLoading: loading, handleComplete: isLoginView ? handleEmailLogin : handleComplete, isValidated: isValidated, inputMode: 'numeric', pattern: '[0-9]*', hasError: Boolean(error), onChange: () => setError(undefined) }), retried ? (jsxs(Fragment, { children: [jsx(Typography, { variant: 'body_small', color: 'secondary', className: 'email-verification__retry-text', copykey: 'dyn_email_verification.resend_code_in', children: t('dyn_email_verification.resend_code_in', { remainingSeconds }) }), jsxs("span", { className: 'email-verification__retry-container', children: [jsx(SvgCheckCircle, {}), jsx(Typography, { variant: 'body_small', weight: 'medium', color: 'primary', className: 'email-verification__retry-container-text', copykey: 'dyn_email_verification.code_sent', children: t('dyn_email_verification.code_sent') })] })] })) : (!hideRetryButton && (jsxs(Fragment, { children: [jsx(Typography, { className: 'email-verification__retry-copy', variant: 'body_small', weight: 'medium', color: 'secondary', copykey: 'dyn_email_verification.code_not_received', children: t('dyn_email_verification.code_not_received') }), jsx(TextButton, { className: 'email-verification__text-button', disabled: loading || isValidated, onClick: () => handleRetry(), copykey: 'dyn_email_verification.resend_code', children: t('dyn_email_verification.resend_code') })] }))), !isLoginView && (jsx(TextButton, { className: 'email-verification__log-out', onClick: handleLogOut, copykey: 'dyn_email_verification.log_out_button', children: t('dyn_email_verification.log_out_button') }))] })] }));
};

export { EmailVerification };
