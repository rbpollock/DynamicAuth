'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('react');
require('@dynamic-labs/utils');
require('../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var close = require('../../shared/assets/close.cjs');
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
require('react-i18next');
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
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../components/Button/Button.cjs');
var ModalHeader = require('../../components/ModalHeader/ModalHeader.cjs');
var IconButton = require('../../components/IconButton/IconButton.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const BridgeNextWalletToConnectLayout = ({ chainName, chainIcon, onClickAction, onClickClose }) => {
    const closeButton = onClickClose && (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: onClickClose, "data-testid": 'close-button', children: jsxRuntime.jsx(close.ReactComponent, {}) }));
    return (jsxRuntime.jsxs("div", { className: 'bridge-next-wallet-to-connect-layout', children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { trailing: closeButton, alignContent: 'bottom', children: chainIcon && (jsxRuntime.jsx("div", { className: 'bridge-next-wallet-to-connect-layout__chain-icon', children: chainIcon })) }), jsxRuntime.jsxs("div", { className: 'bridge-next-wallet-to-connect-layout__body', children: [jsxRuntime.jsxs(Typography.Typography, { color: 'primary', variant: 'title', children: ["Nice! Now let\u2019s connect your ", chainName, " wallet"] }), jsxRuntime.jsx(Button.Button, { expanded: true, buttonPadding: 'large', onClick: onClickAction, children: `Connect ${chainName} wallet` })] })] }));
};

exports.BridgeNextWalletToConnectLayout = BridgeNextWalletToConnectLayout;
