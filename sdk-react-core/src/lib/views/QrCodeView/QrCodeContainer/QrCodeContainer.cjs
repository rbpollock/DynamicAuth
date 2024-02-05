'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var MockedQrCode = require('../../../components/MockedQrCode/MockedQrCode.cjs');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/ViewContext/ViewContext.cjs');
require('react');
var externalLink = require('../../../shared/assets/externalLink.cjs');
var link = require('../../../shared/assets/link.cjs');
require('@dynamic-labs/wallet-book');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
var QRCode = require('../QRCode.cjs');
var classNames = require('../../../utils/functions/classNames/classNames.cjs');
require('../../../context/DynamicContext/DynamicContext.cjs');
require('../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../context/ErrorContext/ErrorContext.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../config/ApiEndpoint.cjs');
require('../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../../context/MockContext/MockContext.cjs');
require('../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../context/FooterAnimationContext/index.cjs');
require('../../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../../components/Typography/Typography.cjs');
require('../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('../../../context/LoadingContext/LoadingContext.cjs');
var Icon = require('../../../components/Icon/Icon.cjs');
require('i18next');
require('../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../components/IconButton/IconButton.cjs');
require('../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var CopyButton = require('../../../components/CopyButton/CopyButton.cjs');
require('../../../components/InlineWidget/InlineWidget.cjs');
require('../../../components/MenuList/Dropdown/Dropdown.cjs');
var TextButton = require('../../../components/TextButton/TextButton.cjs');
require('../../../components/Popper/Popper/Popper.cjs');
require('../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const QrCodeContainer = ({ accentColor, walletKey, walletName, qrcodeValue, Icon: WalletIcon, showCopyToClipboardButton = false, desktopUri, showQrCodeMessage, }) => {
    const { t } = reactI18next.useTranslation();
    return (jsxRuntime.jsxs("div", { className: classNames.classNames('qrcode-container__container', {
            'qrcode-container__container--message': showQrCodeMessage,
        }), children: [jsxRuntime.jsxs("div", { className: 'qrcode-container__top', children: [qrcodeValue ? (jsxRuntime.jsx(QRCode.QRCode, { Icon: WalletIcon, accentColor: accentColor, value: qrcodeValue, logoSize: 50, walletKey: walletKey })) : (
                    // this div exists to give the parent a child, so that the parent
                    // takes on its given width and height. the result is stable
                    // rendering of this component, without this there is a brief flash
                    jsxRuntime.jsx("div", {})), jsxRuntime.jsx(MockedQrCode.MockedQrCode, {}), ((showCopyToClipboardButton && qrcodeValue) || desktopUri) && (jsxRuntime.jsxs("div", { className: 'button-container', children: [showCopyToClipboardButton && qrcodeValue && (jsxRuntime.jsx(CopyButton.CopyButton, { textToCopy: qrcodeValue, copykey: 'dyn_qr_code.copy_button', children: jsxRuntime.jsxs("div", { className: 'button__content', children: [jsxRuntime.jsx(Icon.Icon, { size: 'small', color: 'text-tertiary', children: jsxRuntime.jsx(link.ReactComponent, {}) }), t('dyn_qr_code.copy_button')] }) })), desktopUri && (jsxRuntime.jsxs(TextButton.TextButton, { className: 'desktop-button', onClick: () => window.open(desktopUri), copykey: 'dyn_qr_code.open_button', children: [jsxRuntime.jsx(Icon.Icon, { size: 'xsmall', color: 'text-tertiary', children: jsxRuntime.jsx(externalLink.ReactComponent, {}) }), t('dyn_qr_code.open_button', { wallet: walletName })] }))] }))] }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'secondary', weight: 'regular', className: 'qrcode-container__content', copykey: 'dyn_qr_code.scan_title', children: t('dyn_qr_code.scan_title') })] }));
};

exports.QrCodeContainer = QrCodeContainer;
