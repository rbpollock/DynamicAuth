import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { isMobile } from '@dynamic-labs/utils';
import 'react';
import '../../../../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../../context/ErrorContext/ErrorContext.js';
import '../../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import { NEWTOWEB3_WALLET_EXTENSION_FLAG_KEY } from '../../../../../utils/constants/localStorage.js';
import '../../../../../utils/constants/colors.js';
import { LocalStorage } from '../../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../../config/ApiEndpoint.js';
import '../../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../../../../context/MockContext/MockContext.js';
import '../../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../../../components/ShadowDOM/ShadowDOM.js';
import '../../../../../components/OverlayCard/OverlayCard.context.js';
import '../../../../../context/FooterAnimationContext/index.js';
import '../../../../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../../../../components/Typography/Typography.js';
import { NewToWeb3WalletItem } from '../NewToWeb3WalletItem/NewToWeb3WalletItem.js';
import '../../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../../components/IconButton/IconButton.js';
import '../../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../../components/InlineWidget/InlineWidget.js';
import '../../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../../components/Popper/Popper/Popper.js';
import '../../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const WalletExtensionOrAppContinueButton = ({ wallet, selectedUrl, }) => {
    const showRefreshOnceInstalledWalletButton = Boolean(selectedUrl.length) && !(wallet === null || wallet === void 0 ? void 0 : wallet.isInstalledOnBrowser);
    const walletConnectionAfterPageReloadHandler = () => {
        if (!(wallet === null || wallet === void 0 ? void 0 : wallet.name)) {
            return;
        }
        LocalStorage.setToLS(NEWTOWEB3_WALLET_EXTENSION_FLAG_KEY, wallet.name);
        window.location.reload();
    };
    return (jsxs("div", { className: 'new-to-web3-buttons__container', children: [!isMobile() && (jsxs(Fragment, { children: [(wallet === null || wallet === void 0 ? void 0 : wallet.isInstalledOnBrowser) && (jsx(NewToWeb3WalletItem, { wallet: wallet, children: jsx(Typography, { as: 'p', "data-testid": 'desktop-interactive-wallet-item', variant: 'body_normal', weight: 'bold', children: "Continue" }) })), showRefreshOnceInstalledWalletButton && (jsx("button", { onClick: walletConnectionAfterPageReloadHandler, children: jsx(Typography, { as: 'p', "data-testid": 'refresh-once-installed-button', variant: 'body_normal', weight: 'bold', children: "Continue once installed" }) }))] })), wallet && isMobile() && (jsx(NewToWeb3WalletItem, { wallet: wallet, children: jsx("p", { "data-testid": 'mobile-interactive-wallet-item', children: "Continue once installed" }) }))] }));
};

export { WalletExtensionOrAppContinueButton };