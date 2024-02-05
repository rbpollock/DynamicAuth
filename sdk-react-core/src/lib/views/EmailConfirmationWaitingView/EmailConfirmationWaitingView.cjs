'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var iconic = require('@dynamic-labs/iconic');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
var pencilAltIcon = require('../../shared/assets/pencil-alt-icon.cjs');
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
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
var PoweredByDynamic = require('../../components/PoweredByDynamic/PoweredByDynamic.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
var IconWithSpinner = require('../../components/IconWithSpinner/IconWithSpinner.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
var Icon = require('../../components/Icon/Icon.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
var Typography = require('../../components/Typography/Typography.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var IconButton = require('../../components/IconButton/IconButton.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const EmailConfirmationWaitingView = () => {
    const { setView } = ViewContext.useViewContext();
    const { clearStatesOnBackClick, selectedWalletConnector: walletConnector } = useInternalDynamicContext.useInternalDynamicContext();
    const { t } = reactI18next.useTranslation();
    if (walletConnector && !walletConnectorCore.isEmailWalletConnector(walletConnector)) {
        throw new Error('Wallet connector is not email provider');
    }
    const emailConnector = walletConnector;
    const onClickResetEmail = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        yield (emailConnector === null || emailConnector === void 0 ? void 0 : emailConnector.endSession());
        setView('login-with-email-or-wallet');
        clearStatesOnBackClick();
    }), [setView, emailConnector, clearStatesOnBackClick]);
    return (jsxRuntime.jsxs("div", { className: 'email-confirmation-waiting-view', children: [jsxRuntime.jsx("div", { className: 'email-confirmation-waiting-view__header-icon', children: jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { Icon: iconic.SignInWithEmailIcon, iconSize: 80, isSpinning: true }) }), jsxRuntime.jsx(Typography.Typography, { weight: 'medium', variant: 'title', color: 'primary', className: 'email-confirmation-waiting-view__title', copykey: 'dyn_email_confirmation.title', children: t('dyn_email_confirmation.title') }), jsxRuntime.jsx(Typography.Typography, { weight: 'regular', variant: 'body_normal', color: 'secondary', copykey: 'dyn_email_confirmation.description', children: t('dyn_email_confirmation.description') }), jsxRuntime.jsxs("div", { className: 'email-confirmation-waiting-view__email-container', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'secondary', weight: 'medium', as: 'span', children: emailConnector === null || emailConnector === void 0 ? void 0 : emailConnector.email }), jsxRuntime.jsx(IconButton.IconButton, { onClick: onClickResetEmail, className: 'email-confirmation-waiting-view__edit-icon-button', "data-testid": 'email-confirmation-waiting-view__edit-button', children: jsxRuntime.jsx(Icon.Icon, { color: 'text-tertiary', children: jsxRuntime.jsx(pencilAltIcon.ReactComponent, {}) }) })] }), jsxRuntime.jsx("div", { className: 'email-confirmation-waiting-view__note', children: jsxRuntime.jsx(Typography.Typography, { weight: 'regular', variant: 'body_small', color: 'secondary', copykey: 'dyn_email_confirmation.note', children: t('dyn_email_confirmation.note') }) }), jsxRuntime.jsx(PoweredByDynamic.PoweredByDynamic, { classNameRoot: 'email-confirmation-waiting-view__powered_by_dynamic_footer' })] }));
};

exports.EmailConfirmationWaitingView = EmailConfirmationWaitingView;
