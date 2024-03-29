import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SignInWithEmailIcon } from '@dynamic-labs/iconic';
import { isEmailWalletConnector } from '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import { ReactComponent as SvgPencilAltIcon } from '../../shared/assets/pencil-alt-icon.js';
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
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import { PoweredByDynamic } from '../../components/PoweredByDynamic/PoweredByDynamic.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import { IconWithSpinner } from '../../components/IconWithSpinner/IconWithSpinner.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import { Icon } from '../../components/Icon/Icon.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import { Typography } from '../../components/Typography/Typography.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { IconButton } from '../../components/IconButton/IconButton.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const EmailConfirmationWaitingView = () => {
    const { setView } = useViewContext();
    const { clearStatesOnBackClick, selectedWalletConnector: walletConnector } = useInternalDynamicContext();
    const { t } = useTranslation();
    if (walletConnector && !isEmailWalletConnector(walletConnector)) {
        throw new Error('Wallet connector is not email provider');
    }
    const emailConnector = walletConnector;
    const onClickResetEmail = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (emailConnector === null || emailConnector === void 0 ? void 0 : emailConnector.endSession());
        setView('login-with-email-or-wallet');
        clearStatesOnBackClick();
    }), [setView, emailConnector, clearStatesOnBackClick]);
    return (jsxs("div", { className: 'email-confirmation-waiting-view', children: [jsx("div", { className: 'email-confirmation-waiting-view__header-icon', children: jsx(IconWithSpinner, { Icon: SignInWithEmailIcon, iconSize: 80, isSpinning: true }) }), jsx(Typography, { weight: 'medium', variant: 'title', color: 'primary', className: 'email-confirmation-waiting-view__title', copykey: 'dyn_email_confirmation.title', children: t('dyn_email_confirmation.title') }), jsx(Typography, { weight: 'regular', variant: 'body_normal', color: 'secondary', copykey: 'dyn_email_confirmation.description', children: t('dyn_email_confirmation.description') }), jsxs("div", { className: 'email-confirmation-waiting-view__email-container', children: [jsx(Typography, { variant: 'body_normal', color: 'secondary', weight: 'medium', as: 'span', children: emailConnector === null || emailConnector === void 0 ? void 0 : emailConnector.email }), jsx(IconButton, { onClick: onClickResetEmail, className: 'email-confirmation-waiting-view__edit-icon-button', "data-testid": 'email-confirmation-waiting-view__edit-button', children: jsx(Icon, { color: 'text-tertiary', children: jsx(SvgPencilAltIcon, {}) }) })] }), jsx("div", { className: 'email-confirmation-waiting-view__note', children: jsx(Typography, { weight: 'regular', variant: 'body_small', color: 'secondary', copykey: 'dyn_email_confirmation.note', children: t('dyn_email_confirmation.note') }) }), jsx(PoweredByDynamic, { classNameRoot: 'email-confirmation-waiting-view__powered_by_dynamic_footer' })] }));
};

export { EmailConfirmationWaitingView };
