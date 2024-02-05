'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var utils = require('@dynamic-labs/utils');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
var ErrorContext = require('../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../context/ViewContext/ViewContext.cjs');
var decodeJwt = require('../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
require('@dynamic-labs/iconic');
var checkCircle = require('../../shared/assets/check-circle.cjs');
var check = require('../../shared/assets/check.cjs');
var signInWithEmail = require('../../shared/assets/sign-in-with-email.cjs');
var logger = require('../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var useEffectOnce = require('../../shared/utils/hooks/useEffectOnce/useEffectOnce.cjs');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('@dynamic-labs/sdk-api');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
var AccountExistsContext = require('../../context/AccountExistsContext/AccountExistsContext.cjs');
var api = require('../../data/api.cjs');
var useEmailVerificationRequest = require('../../utils/hooks/authenticationHooks/useEmailVerificationRequest/useEmailVerificationRequest.cjs');
require('react-dom');
var useCountdown = require('../../utils/hooks/useCountdown/useCountdown.cjs');
var useEmbeddedWallet = require('../../utils/hooks/useEmbeddedWallet/useEmbeddedWallet.cjs');
require('../../context/ThemeContext/ThemeContext.cjs');
var useOnUnmount = require('../../utils/hooks/useOnUnmount/useOnUnmount.cjs');
require('@dynamic-labs/types');
var useCreateUserProfileByJWTCallback = require('../../utils/hooks/useCreateUserProfileByJWTCallback/useCreateUserProfileByJWTCallback.cjs');
require('yup');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../components/Typography/Typography.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
var IconWithSpinner = require('../../components/IconWithSpinner/IconWithSpinner.cjs');
require('qrcode');
var LoadingContext = require('../../context/LoadingContext/LoadingContext.cjs');
var IconWithStatus = require('../../components/IconWithStatus/IconWithStatus.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
var ErrorContainer = require('../../components/ErrorContainer/ErrorContainer.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../components/IconButton/IconButton.cjs');
var Icon = require('../../components/Icon/Icon.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var TextButton = require('../../components/TextButton/TextButton.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
var shortenEmail = require('../../shared/utils/functions/shortenEmail/shortenEmail.cjs');
var PinField = require('../../components/PinField/PinField.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var EmailVerificationContext = require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');

const SECONDS_TO_RETRY = 15;
const sleepToShowSuccessMessage = () => utils.sleep(1500);
const EmailVerification = () => {
    var _a, _b;
    const [hideRetryButton, setHideRetryButton] = React.useState(false);
    const [retried, setRetried] = React.useState(false);
    const [showTransferMessage, setShowTransferMessage] = React.useState(false);
    // Use a state to ensure UI is updated, but also a ref to access in effect cleanup
    const [isValidated, _setIsValidated] = React.useState(false);
    const isValidatedRef = React.useRef(isValidated);
    const setIsValidated = (value) => {
        _setIsValidated(value);
        isValidatedRef.current = value;
    };
    const { view, setView, goToInitialView } = ViewContext.useViewContext();
    const { error, setError, setErrorMessage } = ErrorContext.useErrorContext();
    const { setExistentAccountData } = AccountExistsContext.useAccountExistsContext();
    const { environmentId, onboardingOnlyJwt, handleLogOut, authToken, setOnboardingOnlyJwt, setShowAuthFlow, setCallback, setIsVerificationInProgress, projectSettings, } = useInternalDynamicContext.useInternalDynamicContext();
    const { email, verificationUUID, setVerificationUUID } = EmailVerificationContext.useEmailVerificationContext();
    const { loading, setLoading } = LoadingContext.useLoadingContext();
    const { t } = reactI18next.useTranslation();
    const { createEmbeddedWallet } = useEmbeddedWallet.useEmbeddedWallet();
    const { remainingSeconds, startCountdown } = useCountdown.useCountdown({
        callback: () => setRetried(false),
        seconds: SECONDS_TO_RETRY,
    });
    // When true, causes the component to call emailVerificationX callback on unmount
    const callCallbackOnUnmount = React.useRef(true);
    useOnUnmount.useOnUnmount(() => {
        if (!callCallbackOnUnmount.current)
            return;
        const callback = isValidatedRef.current
            ? 'emailVerificationSuccess'
            : 'emailVerificationFailure';
        setCallback(callback, { email: email !== null && email !== void 0 ? email : '' });
    });
    useEffectOnce.useEffectOnce(() => {
        // Set verification in progress
        // It should be disabled by either clearStatesOnBackClick, the close button, or onAuthSuccess
        setIsVerificationInProgress(true);
    });
    const isLoginView = view === 'login-with-email-verification';
    const { verifyEmail } = useEmailVerificationRequest.useEmailVerificationRequest();
    const { createUserProfileByJWT } = useCreateUserProfileByJWTCallback.useCreateUserProfileByJWTCallback();
    const handleComplete = React.useCallback((verificationToken) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
            logger.logger.debug(error);
            // Handle the case where the user has already an account with the email
            if (error instanceof utils.UserHasAccountWithEmailError) {
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
    const handleEmailLogin = React.useCallback((verificationToken) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _d;
        setError(undefined);
        setLoading(true);
        if (!verificationUUID) {
            yield handleLogOut();
            goToInitialView();
            return;
        }
        try {
            const { jwt } = yield api.signInWithEmailVerification({
                environmentId,
                verificationToken,
                verificationUUID,
            });
            if (!jwt) {
                yield handleLogOut();
                goToInitialView();
                return;
            }
            const decodedJwt = decodeJwt.decodeJwt(jwt);
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
            if (error instanceof utils.NoAccessError) {
                setView('no-access');
            }
            if (error instanceof utils.AccountExistsError) {
                setExistentAccountData(error.errorPayload);
                setView('account-exists');
            }
            logger.logger.debug(error);
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
    const handleRetry = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!verificationUUID || !email) {
                return;
            }
            setLoading(true);
            const { verificationUUID: newVerificationUUID } = yield api.retryEmailVerification({
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
            logger.logger.debug(error);
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
    const EmailIcon = React.useMemo(() => {
        const EmailIcon = (props) => (jsxRuntime.jsx(Icon.Icon, { color: 'brand-primary', children: jsxRuntime.jsx(signInWithEmail.ReactComponent, Object.assign({}, props)) }));
        return EmailIcon;
    }, []);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [error && (jsxRuntime.jsx(ErrorContainer.ErrorContainer, { withIcon: false, className: 'email-verification__error-message', children: error })), jsxRuntime.jsxs("div", { className: classNames.classNames('email-verification__container', {
                    'email-verification__container--error': Boolean(error),
                }), children: [showTransferMessage && (jsxRuntime.jsx("div", { className: 'email-verification__transfer-message', copykey: 'dyn_email_verification.complete', children: t('dyn_email_verification.complete') })), isValidated ? (jsxRuntime.jsx("div", { className: 'email-verification__icon-container', children: jsxRuntime.jsx(IconWithStatus.IconWithStatus, { containerClassName: 'email-verification__icon--verified', Icon: EmailIcon, iconSize: 64, InnerIcon: check.ReactComponent }) })) : (jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { Icon: EmailIcon, iconSize: 96, isSpinning: true, className: 'email-verification__icon-with-spinner' })), jsxRuntime.jsxs("div", { className: 'email-verification__copy-text-container', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', copykey: 'dyn_email_verification.description', children: t('dyn_email_verification.description') }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'bold', color: 'secondary', children: shortenEmail.shortenEmail(email) })] }), !isLoginView && !isValidated && (jsxRuntime.jsx(TextButton.TextButton, { onClick: updateEmail, className: 'email-verification__text-button', disabled: loading, copykey: 'dyn_email_verification.edit_email', children: t('dyn_email_verification.edit_email') })), jsxRuntime.jsx(PinField.PinField, { initialValue: Array(6).join('.').split('.'), isLoading: loading, handleComplete: isLoginView ? handleEmailLogin : handleComplete, isValidated: isValidated, inputMode: 'numeric', pattern: '[0-9]*', hasError: Boolean(error), onChange: () => setError(undefined) }), retried ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'secondary', className: 'email-verification__retry-text', copykey: 'dyn_email_verification.resend_code_in', children: t('dyn_email_verification.resend_code_in', { remainingSeconds }) }), jsxRuntime.jsxs("span", { className: 'email-verification__retry-container', children: [jsxRuntime.jsx(checkCircle.ReactComponent, {}), jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', weight: 'medium', color: 'primary', className: 'email-verification__retry-container-text', copykey: 'dyn_email_verification.code_sent', children: t('dyn_email_verification.code_sent') })] })] })) : (!hideRetryButton && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Typography.Typography, { className: 'email-verification__retry-copy', variant: 'body_small', weight: 'medium', color: 'secondary', copykey: 'dyn_email_verification.code_not_received', children: t('dyn_email_verification.code_not_received') }), jsxRuntime.jsx(TextButton.TextButton, { className: 'email-verification__text-button', disabled: loading || isValidated, onClick: () => handleRetry(), copykey: 'dyn_email_verification.resend_code', children: t('dyn_email_verification.resend_code') })] }))), !isLoginView && (jsxRuntime.jsx(TextButton.TextButton, { className: 'email-verification__log-out', onClick: handleLogOut, copykey: 'dyn_email_verification.log_out_button', children: t('dyn_email_verification.log_out_button') }))] })] }));
};

exports.EmailVerification = EmailVerification;
