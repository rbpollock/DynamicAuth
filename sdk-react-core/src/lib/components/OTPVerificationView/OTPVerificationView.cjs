'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
require('@dynamic-labs/utils');
require('../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var check = require('../../shared/assets/check.cjs');
var chevronLeft = require('../../shared/assets/chevron-left.cjs');
var pencilAltIcon = require('../../shared/assets/pencil-alt-icon.cjs');
var signInWithEmail = require('../../shared/assets/sign-in-with-email.cjs');
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
require('../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../Transition/ZoomTransition/ZoomTransition.cjs');
require('../Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../Transition/OpacityTransition/OpacityTransition.cjs');
require('../ShadowDOM/ShadowDOM.cjs');
require('../OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../Typography/Typography.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
var IconWithSpinner = require('../IconWithSpinner/IconWithSpinner.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
var IconWithStatus = require('../IconWithStatus/IconWithStatus.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var ModalHeader = require('../ModalHeader/ModalHeader.cjs');
var IconButton = require('../IconButton/IconButton.cjs');
var Icon = require('../Icon/Icon.cjs');
require('../Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../InlineWidget/InlineWidget.cjs');
require('../MenuList/Dropdown/Dropdown.cjs');
var ModalHeaderBanner = require('../ModalHeaderBanner/ModalHeaderBanner.cjs');
var shortenEmail = require('../../shared/utils/functions/shortenEmail/shortenEmail.cjs');
var PinField = require('../PinField/PinField.cjs');
require('../Popper/Popper/Popper.cjs');
require('../Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const OTPVerificationView = ({ onClickBack, onClickEditEmail, isLoading, email, onPinComplete, isValid, error, onPinChange, successBannerTextKey, }) => {
    const { t } = reactI18next.useTranslation();
    const backButton = onClickBack && (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: onClickBack, "data-testid": 'back-button', children: jsxRuntime.jsx(chevronLeft.ReactComponent, {}) }));
    const EmailIcon = React.useMemo(() => {
        const EmailIcon = (props) => (jsxRuntime.jsx(Icon.Icon, { color: 'brand-primary', children: jsxRuntime.jsx(signInWithEmail.ReactComponent, Object.assign({}, props, { "data-testid": 'sign-in-with-email-icon' })) }));
        return EmailIcon;
    }, []);
    const titleCopyKey = () => isValid
        ? 'dyn_otp_verification.verification_succeeded'
        : 'dyn_otp_verification.confirm_code';
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { alignContent: 'bottom', leading: onClickBack && backButton, children: jsxRuntime.jsx("div", { className: 'otp-verification-view__status-header', children: jsxRuntime.jsx(Typography.Typography, { weight: 'medium', variant: 'title', color: 'primary', className: 'otp-verification-view__title', copykey: titleCopyKey(), children: t(titleCopyKey()) }) }) }), successBannerTextKey && (jsxRuntime.jsx(ModalHeaderBanner.ModalHeaderBanner, { type: 'notice', messageKey: successBannerTextKey, disableTruncate: true })), jsxRuntime.jsx(ModalHeaderBanner.ModalHeaderBanner, { type: 'error', messageKey: error === null || error === void 0 ? void 0 : error.message }), jsxRuntime.jsxs("div", { className: classNames.classNames('otp-verification-view', {
                    'otp-verification-view--message': Boolean(successBannerTextKey || error),
                }), children: [isValid && (jsxRuntime.jsx(IconWithStatus.IconWithStatus, { Icon: EmailIcon, iconSize: 96, InnerIcon: check.ReactComponent })), !isValid && (jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { Icon: EmailIcon, iconSize: 96, isSpinning: isLoading, className: 'otp-verification-view__icon-with-spinner', treatAsFunctionComponent: true })), jsxRuntime.jsxs("div", { className: 'otp-verification-view__body', children: [isValid && (jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', copykey: 'dyn_otp_verification.hang_tight', children: t('dyn_otp_verification.hang_tight') })), !isValid && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', copykey: 'dyn_otp_verification.code_sent', children: t('dyn_otp_verification.code_sent') }), jsxRuntime.jsxs("div", { className: 'otp-verification-view__email-container', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'bold', color: 'secondary', children: shortenEmail.shortenEmail(email) }), onClickEditEmail && (jsxRuntime.jsx(IconButton.IconButton, { onClick: onClickEditEmail, "data-testid": 'otp-verification-view__edit-button', children: jsxRuntime.jsx(Icon.Icon, { color: 'text-tertiary', children: jsxRuntime.jsx(pencilAltIcon.ReactComponent, {}) }) }))] })] }))] }), jsxRuntime.jsx(PinField.PinField, { initialValue: Array(6).join('.').split('.'), isLoading: isLoading, handleComplete: onPinComplete, isValidated: isValid, inputMode: 'numeric', pattern: '[0-9]*', hasError: Boolean(error), onChange: onPinChange })] })] }));
};

exports.OTPVerificationView = OTPVerificationView;
