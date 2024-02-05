import { jsx, jsxs } from 'react/jsx-runtime';
import { useWalletBookContext, getWalletBookWallet, getWalletLinks, WalletIcon } from '@dynamic-labs/wallet-book';
import 'react';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
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
import '../../../../context/ThemeContext/ThemeContext.js';
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
import { parseWalletLinks } from '../../../../utils/functions/parseWalletLinks/parseWalletLinks.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import { getBrowserIcon } from '../../../../shared/utils/functions/getBrowserIcon/getBrowserIcon.js';
import { WalletHelpLink } from '../../../../views/NoQrNotInstalledView/WalletHelpLink.js';
import 'i18next';
import '../../context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const NoQrNotInstalledModalView = () => {
    const { selectedWalletConnector } = useInternalDynamicContext();
    const { walletBook } = useWalletBookContext();
    if (!selectedWalletConnector) {
        return null;
    }
    const walletName = getWalletBookWallet(walletBook, selectedWalletConnector.key).name;
    const walletLinks = getWalletLinks(walletBook, selectedWalletConnector.key);
    const { currentDesktopUrl, userBrowser } = parseWalletLinks(walletLinks);
    const downloadLinks = userBrowser && currentDesktopUrl ? (jsx(WalletHelpLink, { name: userBrowser, link: currentDesktopUrl, Icon: getBrowserIcon(userBrowser) }, userBrowser)) : (Object.entries(walletLinks)
        .filter(([, link]) => link !== '')
        .filter(([name]) => name !== 'ios' && name !== 'android')
        .map(([name, link]) => (jsx(WalletHelpLink, { name: name, link: link, Icon: getBrowserIcon(name) }, name))));
    return (jsxs("div", { className: 'no-qr-code-not-installed-modal-view', "data-testid": 'no-qr-code-not-installed', children: [jsx(WalletIcon, { walletKey: selectedWalletConnector.key, style: { height: pixelToRem(64), width: pixelToRem(64) } }), jsxs(Typography, { variant: 'body_normal', color: 'primary', children: ["We can\u2019t detect ", walletName, " extension"] }), Array.isArray(downloadLinks) && (jsx(Typography, { variant: 'body_normal', color: 'secondary', children: "Select from your preferred options below:" })), jsx("div", { className: 'no-qr-code-not-installed-modal-view__links-section', children: downloadLinks }), jsx(Typography, { variant: 'body_mini', color: 'secondary', children: "Refresh the page once installed" })] }));
};

export { NoQrNotInstalledModalView };
