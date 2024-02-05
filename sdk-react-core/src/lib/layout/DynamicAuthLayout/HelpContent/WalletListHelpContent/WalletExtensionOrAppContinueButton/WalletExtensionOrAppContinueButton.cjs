'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@dynamic-labs/utils');
require('react');
require('../../../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
var localStorage$1 = require('../../../../../utils/constants/localStorage.cjs');
require('../../../../../utils/constants/colors.cjs');
var localStorage = require('../../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../../config/ApiEndpoint.cjs');
require('../../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../../../../context/MockContext/MockContext.cjs');
require('../../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../../context/FooterAnimationContext/index.cjs');
require('../../../../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../../../../components/Typography/Typography.cjs');
var NewToWeb3WalletItem = require('../NewToWeb3WalletItem/NewToWeb3WalletItem.cjs');
require('../../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../../components/IconButton/IconButton.cjs');
require('../../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../../components/Popper/Popper/Popper.cjs');
require('../../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const WalletExtensionOrAppContinueButton = ({ wallet, selectedUrl, }) => {
    const showRefreshOnceInstalledWalletButton = Boolean(selectedUrl.length) && !(wallet === null || wallet === void 0 ? void 0 : wallet.isInstalledOnBrowser);
    const walletConnectionAfterPageReloadHandler = () => {
        if (!(wallet === null || wallet === void 0 ? void 0 : wallet.name)) {
            return;
        }
        localStorage.LocalStorage.setToLS(localStorage$1.NEWTOWEB3_WALLET_EXTENSION_FLAG_KEY, wallet.name);
        window.location.reload();
    };
    return (jsxRuntime.jsxs("div", { className: 'new-to-web3-buttons__container', children: [!utils.isMobile() && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [(wallet === null || wallet === void 0 ? void 0 : wallet.isInstalledOnBrowser) && (jsxRuntime.jsx(NewToWeb3WalletItem.NewToWeb3WalletItem, { wallet: wallet, children: jsxRuntime.jsx(Typography.Typography, { as: 'p', "data-testid": 'desktop-interactive-wallet-item', variant: 'body_normal', weight: 'bold', children: "Continue" }) })), showRefreshOnceInstalledWalletButton && (jsxRuntime.jsx("button", { onClick: walletConnectionAfterPageReloadHandler, children: jsxRuntime.jsx(Typography.Typography, { as: 'p', "data-testid": 'refresh-once-installed-button', variant: 'body_normal', weight: 'bold', children: "Continue once installed" }) }))] })), wallet && utils.isMobile() && (jsxRuntime.jsx(NewToWeb3WalletItem.NewToWeb3WalletItem, { wallet: wallet, children: jsxRuntime.jsx("p", { "data-testid": 'mobile-interactive-wallet-item', children: "Continue once installed" }) }))] }));
};

exports.WalletExtensionOrAppContinueButton = WalletExtensionOrAppContinueButton;
