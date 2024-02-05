import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import '@dynamic-labs/utils';
import '../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgCheck } from '../../shared/assets/check.js';
import { ReactComponent as SvgChevronLeft } from '../../shared/assets/chevron-left.js';
import { ReactComponent as SvgPencilAltIcon } from '../../shared/assets/pencil-alt-icon.js';
import { ReactComponent as SvgSignInWithEmail } from '../../shared/assets/sign-in-with-email.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../Transition/ZoomTransition/ZoomTransition.js';
import '../Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../Transition/OpacityTransition/OpacityTransition.js';
import '../ShadowDOM/ShadowDOM.js';
import '../OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../Typography/Typography.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import { IconWithSpinner } from '../IconWithSpinner/IconWithSpinner.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import { IconWithStatus } from '../IconWithStatus/IconWithStatus.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { ModalHeader } from '../ModalHeader/ModalHeader.js';
import { IconButton } from '../IconButton/IconButton.js';
import { Icon } from '../Icon/Icon.js';
import '../Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../InlineWidget/InlineWidget.js';
import '../MenuList/Dropdown/Dropdown.js';
import { ModalHeaderBanner } from '../ModalHeaderBanner/ModalHeaderBanner.js';
import { shortenEmail } from '../../shared/utils/functions/shortenEmail/shortenEmail.js';
import { PinField } from '../PinField/PinField.js';
import '../Popper/Popper/Popper.js';
import '../Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const OTPVerificationView = ({ onClickBack, onClickEditEmail, isLoading, email, onPinComplete, isValid, error, onPinChange, successBannerTextKey, }) => {
    const { t } = useTranslation();
    const backButton = onClickBack && (jsx(IconButton, { type: 'button', onClick: onClickBack, "data-testid": 'back-button', children: jsx(SvgChevronLeft, {}) }));
    const EmailIcon = useMemo(() => {
        const EmailIcon = (props) => (jsx(Icon, { color: 'brand-primary', children: jsx(SvgSignInWithEmail, Object.assign({}, props, { "data-testid": 'sign-in-with-email-icon' })) }));
        return EmailIcon;
    }, []);
    const titleCopyKey = () => isValid
        ? 'dyn_otp_verification.verification_succeeded'
        : 'dyn_otp_verification.confirm_code';
    return (jsxs(Fragment, { children: [jsx(ModalHeader, { alignContent: 'bottom', leading: onClickBack && backButton, children: jsx("div", { className: 'otp-verification-view__status-header', children: jsx(Typography, { weight: 'medium', variant: 'title', color: 'primary', className: 'otp-verification-view__title', copykey: titleCopyKey(), children: t(titleCopyKey()) }) }) }), successBannerTextKey && (jsx(ModalHeaderBanner, { type: 'notice', messageKey: successBannerTextKey, disableTruncate: true })), jsx(ModalHeaderBanner, { type: 'error', messageKey: error === null || error === void 0 ? void 0 : error.message }), jsxs("div", { className: classNames('otp-verification-view', {
                    'otp-verification-view--message': Boolean(successBannerTextKey || error),
                }), children: [isValid && (jsx(IconWithStatus, { Icon: EmailIcon, iconSize: 96, InnerIcon: SvgCheck })), !isValid && (jsx(IconWithSpinner, { Icon: EmailIcon, iconSize: 96, isSpinning: isLoading, className: 'otp-verification-view__icon-with-spinner', treatAsFunctionComponent: true })), jsxs("div", { className: 'otp-verification-view__body', children: [isValid && (jsx(Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', copykey: 'dyn_otp_verification.hang_tight', children: t('dyn_otp_verification.hang_tight') })), !isValid && (jsxs(Fragment, { children: [jsx(Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', copykey: 'dyn_otp_verification.code_sent', children: t('dyn_otp_verification.code_sent') }), jsxs("div", { className: 'otp-verification-view__email-container', children: [jsx(Typography, { variant: 'body_normal', weight: 'bold', color: 'secondary', children: shortenEmail(email) }), onClickEditEmail && (jsx(IconButton, { onClick: onClickEditEmail, "data-testid": 'otp-verification-view__edit-button', children: jsx(Icon, { color: 'text-tertiary', children: jsx(SvgPencilAltIcon, {}) }) }))] })] }))] }), jsx(PinField, { initialValue: Array(6).join('.').split('.'), isLoading: isLoading, handleComplete: onPinComplete, isValidated: isValid, inputMode: 'numeric', pattern: '[0-9]*', hasError: Boolean(error), onChange: onPinChange })] })] }));
};

export { OTPVerificationView };
