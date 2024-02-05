'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
var ViewContext = require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/utils');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var useMutation = require('../../utils/hooks/useMutation/useMutation.cjs');
require('../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../components/Alert/Alert.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/IconButton/IconButton.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
var OTPVerificationView = require('../../components/OTPVerificationView/OTPVerificationView.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');

const EmailWalletOTPVerificationView = () => {
    const { setView } = ViewContext.useViewContext();
    const [error, setError] = React.useState();
    const { selectedWalletConnector: emailWalletConnector, clearStatesOnBackClick, } = useInternalDynamicContext.useInternalDynamicContext();
    if (!emailWalletConnector ||
        !walletConnectorCore.isEmailOTPWalletConnector(emailWalletConnector)) {
        throw new Error('Current wallet is not EmailWalletConnector');
    }
    const { email } = emailWalletConnector;
    if (!email) {
        throw new Error('EmailWalletOtpVerificationView requires a email');
    }
    const handleBackClick = () => {
        emailWalletConnector.clearEmail();
        clearStatesOnBackClick();
        setView('login-with-email-or-wallet');
    };
    const { data: isValid, isLoading, mutate: onSubmit, } = useMutation.useMutation((otp) => emailWalletConnector.verifyOneTimePassword(otp), {
        onFailure: (error) => setError(error),
    });
    return (jsxRuntime.jsx(OTPVerificationView.OTPVerificationView, { email: email, error: error, onClickBack: handleBackClick, isLoading: isLoading, onPinComplete: onSubmit, isValid: isValid === true, onPinChange: () => setError(undefined), onClickEditEmail: handleBackClick, successBannerTextKey: 'dyn_otp_verification.banner_text' }));
};

exports.EmailWalletOTPVerificationView = EmailWalletOTPVerificationView;
