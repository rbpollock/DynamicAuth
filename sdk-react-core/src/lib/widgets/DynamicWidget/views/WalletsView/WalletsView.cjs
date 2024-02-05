'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var add = require('../../../../shared/assets/add.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../context/ThemeContext/ThemeContext.cjs');
var useKYCFlag = require('../../../../utils/hooks/useKYCFlag/useKYCFlag.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../../../context/MockContext/MockContext.cjs');
require('../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
var DynamicWidgetFooter = require('../../components/DynamicWidgetFooter/DynamicWidgetFooter.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../context/DynamicWidgetContext.cjs');
var DynamicWidgetWallets = require('../../components/DynamicWidgetWallets/DynamicWidgetWallets.cjs');
var SingleWalletButtons = require('../../components/SingleWalletButtons/SingleWalletButtons.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../../../components/Button/Button.cjs');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
var LogoutButton = require('../../../../components/LogoutButton/LogoutButton.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const WalletsView = () => {
    const { setShowAuthFlow, setSelectedWalletConnectorKey, user, authMode, multiWallet, } = useInternalDynamicContext.useInternalDynamicContext();
    const isKYCEnabled = useKYCFlag.useKYCFlag();
    const { setView } = ViewContext.useViewContext();
    const addNewWallet = () => {
        setView('multi-wallet-wallet-list');
        setShowAuthFlow(true);
        setSelectedWalletConnectorKey(null);
    };
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [!multiWallet && !isKYCEnabled && (jsxRuntime.jsxs("div", { className: 'dynamic-widget-index-view__email-container', children: [jsxRuntime.jsx(Typography.Typography, { children: user === null || user === void 0 ? void 0 : user.email }), jsxRuntime.jsx(SingleWalletButtons.SingleWalletButtons, {})] })), multiWallet && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(DynamicWidgetWallets.DynamicWidgetWallets, {}), jsxRuntime.jsx(DynamicWidgetFooter.DynamicWidgetFooter, { children: jsxRuntime.jsxs("div", { className: 'dynamic-widget-index-view__footer', children: [jsxRuntime.jsxs(Button.Button, { buttonClassName: 'dynamic-widget-footer__button', buttonVariant: 'tertiary', buttonPadding: 'none', onClick: addNewWallet, typographyProps: {
                                        color: 'secondary',
                                        variant: 'button_tertiary',
                                    }, startSlot: jsxRuntime.jsx(add.ReactComponent, {}), children: [authMode === 'connect-only' ? 'Connect' : 'Link', " a new wallet"] }), jsxRuntime.jsx(LogoutButton.LogoutButton, { isTextButton: true, buttonClassName: 'dynamic-widget-footer__button' })] }) })] }))] }));
};

exports.WalletsView = WalletsView;
