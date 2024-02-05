import { jsx, jsxs } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { useWalletBookContext, getWalletLinks, WalletIcon, getWalletBookWallet } from '@dynamic-labs/wallet-book';
import 'react';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { pixelToRem } from '../../utils/functions/pixelToRem/pixelToRem.js';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../components/Typography/Typography.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import { getBrowserIcon } from '../../shared/utils/functions/getBrowserIcon/getBrowserIcon.js';
import { WalletHelpLink } from './WalletHelpLink.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../components/IconButton/IconButton.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const NoQrNotInstalledView = () => {
    const { selectedWalletConnector } = useInternalDynamicContext();
    const { walletBook } = useWalletBookContext();
    const { t } = useTranslation();
    if (!selectedWalletConnector) {
        return null;
    }
    const downloadLinks = Object.entries(getWalletLinks(walletBook, selectedWalletConnector.key))
        .filter(([, link]) => link !== '')
        .filter(([name]) => name !== 'ios' && name !== 'android')
        .map(([name, link]) => (jsx(WalletHelpLink, { name: name, link: link, 
        // justification: we're looping over the keys of walletLinks.desktop
        Icon: getBrowserIcon(name) }, name)));
    return (jsxs("div", { className: 'no-qr-code-installed__container', "data-testid": 'no-qr-code-installed', children: [jsx("div", { className: 'no-qr-code-installed__img', children: jsx(WalletIcon, { walletKey: selectedWalletConnector.key, style: { height: pixelToRem(64), width: pixelToRem(64) } }) }), jsx(Typography, { className: 'no-qr-code-installed__typography--title', variant: 'title', copykey: 'dyn_qr_code.wallet_not_installed.install', children: t('dyn_qr_code.wallet_not_installed.install', {
                    wallet: getWalletBookWallet(walletBook, selectedWalletConnector.key)
                        .name,
                }) }), jsx(Typography, { variant: 'body_normal', className: 'no-qr-code-installed__typography', color: 'secondary', copykey: 'dyn_qr_code.wallet_not_installed.select', children: t('dyn_qr_code.wallet_not_installed.select') }), jsx("div", { className: 'no-qr-code-installed__links-section', children: downloadLinks }), jsx(Typography, { variant: 'body_mini', className: 'no-qr-code-installed__typography', weight: 'medium', color: 'secondary', copykey: 'dyn_qr_code.wallet_not_installed.refresh', children: t('dyn_qr_code.wallet_not_installed.refresh') })] }));
};

export { NoQrNotInstalledView };
