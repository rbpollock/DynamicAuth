'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var walletBook = require('@dynamic-labs/wallet-book');
require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var pixelToRem = require('../../../../utils/functions/pixelToRem/pixelToRem.cjs');
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
var parseWalletLinks = require('../../../../utils/functions/parseWalletLinks/parseWalletLinks.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
var getBrowserIcon = require('../../../../shared/utils/functions/getBrowserIcon/getBrowserIcon.cjs');
var WalletHelpLink = require('../../../../views/NoQrNotInstalledView/WalletHelpLink.cjs');
require('i18next');
require('../../context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const NoQrNotInstalledModalView = () => {
    const { selectedWalletConnector } = useInternalDynamicContext.useInternalDynamicContext();
    const { walletBook: walletBook$1 } = walletBook.useWalletBookContext();
    if (!selectedWalletConnector) {
        return null;
    }
    const walletName = walletBook.getWalletBookWallet(walletBook$1, selectedWalletConnector.key).name;
    const walletLinks = walletBook.getWalletLinks(walletBook$1, selectedWalletConnector.key);
    const { currentDesktopUrl, userBrowser } = parseWalletLinks.parseWalletLinks(walletLinks);
    const downloadLinks = userBrowser && currentDesktopUrl ? (jsxRuntime.jsx(WalletHelpLink.WalletHelpLink, { name: userBrowser, link: currentDesktopUrl, Icon: getBrowserIcon.getBrowserIcon(userBrowser) }, userBrowser)) : (Object.entries(walletLinks)
        .filter(([, link]) => link !== '')
        .filter(([name]) => name !== 'ios' && name !== 'android')
        .map(([name, link]) => (jsxRuntime.jsx(WalletHelpLink.WalletHelpLink, { name: name, link: link, Icon: getBrowserIcon.getBrowserIcon(name) }, name))));
    return (jsxRuntime.jsxs("div", { className: 'no-qr-code-not-installed-modal-view', "data-testid": 'no-qr-code-not-installed', children: [jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: selectedWalletConnector.key, style: { height: pixelToRem.pixelToRem(64), width: pixelToRem.pixelToRem(64) } }), jsxRuntime.jsxs(Typography.Typography, { variant: 'body_normal', color: 'primary', children: ["We can\u2019t detect ", walletName, " extension"] }), Array.isArray(downloadLinks) && (jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'secondary', children: "Select from your preferred options below:" })), jsxRuntime.jsx("div", { className: 'no-qr-code-not-installed-modal-view__links-section', children: downloadLinks }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_mini', color: 'secondary', children: "Refresh the page once installed" })] }));
};

exports.NoQrNotInstalledModalView = NoQrNotInstalledModalView;
