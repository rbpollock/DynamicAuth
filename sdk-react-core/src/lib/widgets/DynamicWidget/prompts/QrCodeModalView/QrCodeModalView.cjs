'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var walletBook = require('@dynamic-labs/wallet-book');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var QRCode = require('../../../../views/QrCodeView/QRCode.cjs');
require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var externalLink = require('../../../../shared/assets/externalLink.cjs');
var link = require('../../../../shared/assets/link.cjs');
var shortenWalletAddress = require('../../../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
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
var ThemeContext = require('../../../../context/ThemeContext/ThemeContext.cjs');
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
require('../../../../context/LoadingContext/LoadingContext.cjs');
var Icon = require('../../../../components/Icon/Icon.cjs');
require('i18next');
require('../../context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var CopyButton = require('../../../../components/CopyButton/CopyButton.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
var TextButton = require('../../../../components/TextButton/TextButton.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const QrCodeModalView = ({ walletId }) => {
    var _a, _b;
    const { secondaryWallets, qrcodeUri, desktopUri } = useInternalDynamicContext.useInternalDynamicContext();
    const { walletBook: walletBook$1 } = walletBook.useWalletBookContext();
    const newPrimaryWallet = secondaryWallets.find(({ id }) => id === walletId);
    const walletKey = ((_a = newPrimaryWallet === null || newPrimaryWallet === void 0 ? void 0 : newPrimaryWallet.connector) === null || _a === void 0 ? void 0 : _a.key) || '';
    const walletName = ((_b = newPrimaryWallet === null || newPrimaryWallet === void 0 ? void 0 : newPrimaryWallet.connector) === null || _b === void 0 ? void 0 : _b.name) || '';
    const { theme } = ThemeContext.useThemeContext();
    const qrCodeColorsByTheme = {
        dark: {
            accentColor: 'var(--dynamic-text-primary)',
        },
        light: {
            accentColor: walletBook.getWalletPrimaryColor(walletBook$1, walletKey) ||
                'var(--dynamic-text-primary)',
        },
    };
    // can't use theme because it's string instead of 'light' | 'dark'
    const typedTheme = theme.theme.name === 'light' ? 'light' : 'dark';
    const icon = (jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: walletKey, style: { height: pixelToRem.pixelToRem(24), width: pixelToRem.pixelToRem(24) } }));
    return (jsxRuntime.jsxs("div", { className: 'qr-code-modal-view', children: [jsxRuntime.jsxs(Typography.Typography, { variant: 'button_primary', color: 'primary', className: 'qr-code-modal-view__title', children: ["Connect with ", newPrimaryWallet === null || newPrimaryWallet === void 0 ? void 0 : newPrimaryWallet.connector.name] }), jsxRuntime.jsxs(Typography.Typography, { variant: 'body_small', color: 'secondary', className: 'qr-code-modal-view__title', children: ["Connect wallet", ' ', jsxRuntime.jsx(Typography.Typography, { as: 'span', weight: 'medium', color: 'primary', children: shortenWalletAddress.shortenWalletAddress(newPrimaryWallet === null || newPrimaryWallet === void 0 ? void 0 : newPrimaryWallet.address, 4, 4) }), ' ', "to switch active account."] }), jsxRuntime.jsx("div", { className: 'qr-code-modal-view__container', children: jsxRuntime.jsx("div", { className: 'qr-code-modal-view__wrapper', children: qrcodeUri ? (jsxRuntime.jsx(QRCode.QRCode, { Icon: icon, accentColor: qrCodeColorsByTheme[typedTheme].accentColor, value: qrcodeUri, size: 175, logoSize: 40, walletKey: walletConnectorCore.normalizeWalletName(walletKey) })) : (
                    // this div exists to give the parent a child, so that the parent
                    // takes on its given width and height. the result is stable
                    // rendering of this component, without this there is a brief flash
                    jsxRuntime.jsx("div", { "data-testid": 'no-qrcode' })) }) }), jsxRuntime.jsxs("div", { className: 'button__container', children: [(newPrimaryWallet === null || newPrimaryWallet === void 0 ? void 0 : newPrimaryWallet.connector.isWalletConnect) && qrcodeUri && (jsxRuntime.jsxs(CopyButton.CopyButton, { textToCopy: qrcodeUri, children: [jsxRuntime.jsx(Icon.Icon, { size: 'small', color: 'text-tertiary', children: jsxRuntime.jsx(link.ReactComponent, {}) }), "Copy QR URI"] })), desktopUri && (jsxRuntime.jsxs(TextButton.TextButton, { className: 'button--open-app', onClick: () => window.open(desktopUri), children: [jsxRuntime.jsx(Icon.Icon, { size: 'xsmall', color: 'text-tertiary', children: jsxRuntime.jsx(externalLink.ReactComponent, {}) }), "Open ", walletName, " App"] }))] })] }));
};

exports.QrCodeModalView = QrCodeModalView;
