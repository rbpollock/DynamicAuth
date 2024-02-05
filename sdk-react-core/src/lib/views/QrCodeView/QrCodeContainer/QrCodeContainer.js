import { jsxs, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { MockedQrCode } from '../../../components/MockedQrCode/MockedQrCode.js';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgExternalLink } from '../../../shared/assets/externalLink.js';
import { ReactComponent as SvgLink } from '../../../shared/assets/link.js';
import '@dynamic-labs/wallet-book';
import '../../../utils/constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import { QRCode } from '../QRCode.js';
import { classNames } from '../../../utils/functions/classNames/classNames.js';
import '../../../context/DynamicContext/DynamicContext.js';
import '../../../context/CaptchaContext/CaptchaContext.js';
import '../../../context/ErrorContext/ErrorContext.js';
import '@dynamic-labs/multi-wallet';
import '../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../config/ApiEndpoint.js';
import '../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import '../../../context/MockContext/MockContext.js';
import '../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../components/ShadowDOM/ShadowDOM.js';
import '../../../components/OverlayCard/OverlayCard.context.js';
import '../../../context/FooterAnimationContext/index.js';
import '../../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../../components/Typography/Typography.js';
import '../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import '../../../context/LoadingContext/LoadingContext.js';
import { Icon } from '../../../components/Icon/Icon.js';
import 'i18next';
import '../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../components/IconButton/IconButton.js';
import '../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { CopyButton } from '../../../components/CopyButton/CopyButton.js';
import '../../../components/InlineWidget/InlineWidget.js';
import '../../../components/MenuList/Dropdown/Dropdown.js';
import { TextButton } from '../../../components/TextButton/TextButton.js';
import '../../../components/Popper/Popper/Popper.js';
import '../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const QrCodeContainer = ({ accentColor, walletKey, walletName, qrcodeValue, Icon: WalletIcon, showCopyToClipboardButton = false, desktopUri, showQrCodeMessage, }) => {
    const { t } = useTranslation();
    return (jsxs("div", { className: classNames('qrcode-container__container', {
            'qrcode-container__container--message': showQrCodeMessage,
        }), children: [jsxs("div", { className: 'qrcode-container__top', children: [qrcodeValue ? (jsx(QRCode, { Icon: WalletIcon, accentColor: accentColor, value: qrcodeValue, logoSize: 50, walletKey: walletKey })) : (
                    // this div exists to give the parent a child, so that the parent
                    // takes on its given width and height. the result is stable
                    // rendering of this component, without this there is a brief flash
                    jsx("div", {})), jsx(MockedQrCode, {}), ((showCopyToClipboardButton && qrcodeValue) || desktopUri) && (jsxs("div", { className: 'button-container', children: [showCopyToClipboardButton && qrcodeValue && (jsx(CopyButton, { textToCopy: qrcodeValue, copykey: 'dyn_qr_code.copy_button', children: jsxs("div", { className: 'button__content', children: [jsx(Icon, { size: 'small', color: 'text-tertiary', children: jsx(SvgLink, {}) }), t('dyn_qr_code.copy_button')] }) })), desktopUri && (jsxs(TextButton, { className: 'desktop-button', onClick: () => window.open(desktopUri), copykey: 'dyn_qr_code.open_button', children: [jsx(Icon, { size: 'xsmall', color: 'text-tertiary', children: jsx(SvgExternalLink, {}) }), t('dyn_qr_code.open_button', { wallet: walletName })] }))] }))] }), jsx(Typography, { variant: 'body_normal', color: 'secondary', weight: 'regular', className: 'qrcode-container__content', copykey: 'dyn_qr_code.scan_title', children: t('dyn_qr_code.scan_title') })] }));
};

export { QrCodeContainer };
