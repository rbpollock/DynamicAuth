'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var walletBook = require('@dynamic-labs/wallet-book');
var ThemeContext = require('../../context/ThemeContext/ThemeContext.cjs');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
var QrCodeContext = require('../../context/QrCodeContext/QrCodeContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../context/ViewContext/ViewContext.cjs');
require('react');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var pixelToRem = require('../../utils/functions/pixelToRem/pixelToRem.cjs');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('@dynamic-labs/types');
var useTimeout = require('../../utils/hooks/useTimeout/useTimeout.cjs');
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
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var QrCodeContainer = require('./QrCodeContainer/QrCodeContainer.cjs');

const QrCodeView = () => {
    var _a;
    const { theme: { theme }, } = ThemeContext.useThemeContext();
    const { name } = theme;
    const { setShowQrCodeMessage, showQrCodeMessage } = QrCodeContext.useQrCodeContext();
    const { qrcodeUri, desktopUri, selectedWalletConnector: walletConnector, } = useInternalDynamicContext.useInternalDynamicContext();
    const { walletBook: walletBook$1 } = walletBook.useWalletBookContext();
    useTimeout.useTimeout(() => setShowQrCodeMessage(true), 5000);
    if (!walletConnector) {
        return null;
    }
    const icon = (jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: walletConnector.key, style: { height: pixelToRem.pixelToRem(32), width: pixelToRem.pixelToRem(32) } }));
    return (jsxRuntime.jsx("div", { className: 'qr-code-view__container', "data-testid": 'qr-code-view', children: jsxRuntime.jsx(QrCodeContainer.QrCodeContainer, { showQrCodeMessage: showQrCodeMessage, desktopUri: desktopUri, accentColor: 
            /* istanbul ignore next */
            name === 'dark'
                ? theme.colors.textPrimary
                : (_a = walletBook.getWalletPrimaryColor(walletBook$1, walletConnector.key)) !== null && _a !== void 0 ? _a : '', walletKey: walletConnector.key, walletName: walletConnector.name, qrcodeValue: qrcodeUri, Icon: icon, showCopyToClipboardButton: walletConnector.isWalletConnect }) }));
};

exports.QrCodeView = QrCodeView;
