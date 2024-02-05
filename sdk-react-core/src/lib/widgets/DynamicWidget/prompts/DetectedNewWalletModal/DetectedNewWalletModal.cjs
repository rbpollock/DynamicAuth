'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/ViewContext/ViewContext.cjs');
require('react');
var promptAccountSwitch = require('../../../../shared/assets/prompt-account-switch.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../../shared/consts/index.cjs');
var WidgetPortal = require('../../components/WidgetPortal/WidgetPortal.cjs');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../context/ThemeContext/ThemeContext.cjs');
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
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../../../components/Button/Button.cjs');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const DetectedNewWalletModal = () => {
    const { setMultiWalletWidgetState, primaryWallet } = useInternalDynamicContext.useInternalDynamicContext();
    const handleClick = () => {
        setMultiWalletWidgetState('awaiting_signature', undefined, 'linking_new_wallet');
    };
    return (jsxRuntime.jsx(WidgetPortal.WidgetPortal, { children: jsxRuntime.jsxs("div", { className: 'detected-new-wallet-modal__content', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'primary', children: "Account Change Detected" }), jsxRuntime.jsx(promptAccountSwitch.ReactComponent, {}), jsxRuntime.jsxs(Typography.Typography, { variant: 'body_small', color: 'secondary', children: ["Your active account in ", primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector.name, " has changed. This account is not currently linked to this app. Do you want to add it?"] }), jsxRuntime.jsx(Button.Button, { expanded: true, onClick: handleClick, typographyProps: {
                        variant: 'button_secondary',
                    }, children: "Yes, link this wallet" })] }) }));
};

exports.DetectedNewWalletModal = DetectedNewWalletModal;
