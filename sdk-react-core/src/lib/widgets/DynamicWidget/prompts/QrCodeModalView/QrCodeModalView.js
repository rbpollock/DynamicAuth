import { jsx, jsxs } from 'react/jsx-runtime';
import { useWalletBookContext, getWalletPrimaryColor, WalletIcon } from '@dynamic-labs/wallet-book';
import { normalizeWalletName } from '@dynamic-labs/wallet-connector-core';
import { QRCode } from '../../../../views/QrCodeView/QRCode.js';
import 'react';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgExternalLink } from '../../../../shared/assets/externalLink.js';
import { ReactComponent as SvgLink } from '../../../../shared/assets/link.js';
import { shortenWalletAddress } from '../../../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { pixelToRem } from '../../../../utils/functions/pixelToRem/pixelToRem.js';
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../config/ApiEndpoint.js';
import '../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { useThemeContext } from '../../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../../../context/MockContext/MockContext.js';
import '../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../../components/ShadowDOM/ShadowDOM.js';
import '../../../../components/OverlayCard/OverlayCard.context.js';
import '../../../../context/FooterAnimationContext/index.js';
import '../../../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../../../components/Typography/Typography.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import '../../../../context/LoadingContext/LoadingContext.js';
import { Icon } from '../../../../components/Icon/Icon.js';
import 'i18next';
import '../../context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { CopyButton } from '../../../../components/CopyButton/CopyButton.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import { TextButton } from '../../../../components/TextButton/TextButton.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const QrCodeModalView = ({ walletId }) => {
    var _a, _b;
    const { secondaryWallets, qrcodeUri, desktopUri } = useInternalDynamicContext();
    const { walletBook } = useWalletBookContext();
    const newPrimaryWallet = secondaryWallets.find(({ id }) => id === walletId);
    const walletKey = ((_a = newPrimaryWallet === null || newPrimaryWallet === void 0 ? void 0 : newPrimaryWallet.connector) === null || _a === void 0 ? void 0 : _a.key) || '';
    const walletName = ((_b = newPrimaryWallet === null || newPrimaryWallet === void 0 ? void 0 : newPrimaryWallet.connector) === null || _b === void 0 ? void 0 : _b.name) || '';
    const { theme } = useThemeContext();
    const qrCodeColorsByTheme = {
        dark: {
            accentColor: 'var(--dynamic-text-primary)',
        },
        light: {
            accentColor: getWalletPrimaryColor(walletBook, walletKey) ||
                'var(--dynamic-text-primary)',
        },
    };
    // can't use theme because it's string instead of 'light' | 'dark'
    const typedTheme = theme.theme.name === 'light' ? 'light' : 'dark';
    const icon = (jsx(WalletIcon, { walletKey: walletKey, style: { height: pixelToRem(24), width: pixelToRem(24) } }));
    return (jsxs("div", { className: 'qr-code-modal-view', children: [jsxs(Typography, { variant: 'button_primary', color: 'primary', className: 'qr-code-modal-view__title', children: ["Connect with ", newPrimaryWallet === null || newPrimaryWallet === void 0 ? void 0 : newPrimaryWallet.connector.name] }), jsxs(Typography, { variant: 'body_small', color: 'secondary', className: 'qr-code-modal-view__title', children: ["Connect wallet", ' ', jsx(Typography, { as: 'span', weight: 'medium', color: 'primary', children: shortenWalletAddress(newPrimaryWallet === null || newPrimaryWallet === void 0 ? void 0 : newPrimaryWallet.address, 4, 4) }), ' ', "to switch active account."] }), jsx("div", { className: 'qr-code-modal-view__container', children: jsx("div", { className: 'qr-code-modal-view__wrapper', children: qrcodeUri ? (jsx(QRCode, { Icon: icon, accentColor: qrCodeColorsByTheme[typedTheme].accentColor, value: qrcodeUri, size: 175, logoSize: 40, walletKey: normalizeWalletName(walletKey) })) : (
                    // this div exists to give the parent a child, so that the parent
                    // takes on its given width and height. the result is stable
                    // rendering of this component, without this there is a brief flash
                    jsx("div", { "data-testid": 'no-qrcode' })) }) }), jsxs("div", { className: 'button__container', children: [(newPrimaryWallet === null || newPrimaryWallet === void 0 ? void 0 : newPrimaryWallet.connector.isWalletConnect) && qrcodeUri && (jsxs(CopyButton, { textToCopy: qrcodeUri, children: [jsx(Icon, { size: 'small', color: 'text-tertiary', children: jsx(SvgLink, {}) }), "Copy QR URI"] })), desktopUri && (jsxs(TextButton, { className: 'button--open-app', onClick: () => window.open(desktopUri), children: [jsx(Icon, { size: 'xsmall', color: 'text-tertiary', children: jsx(SvgExternalLink, {}) }), "Open ", walletName, " App"] }))] })] }));
};

export { QrCodeModalView };
