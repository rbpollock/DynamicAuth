'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var walletBook = require('@dynamic-labs/wallet-book');
require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var pixelToRem = require('../../utils/functions/pixelToRem/pixelToRem.cjs');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../components/Typography/Typography.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
var getBrowserIcon = require('../../shared/utils/functions/getBrowserIcon/getBrowserIcon.cjs');
var WalletHelpLink = require('./WalletHelpLink.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../components/IconButton/IconButton.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const NoQrNotInstalledView = () => {
    const { selectedWalletConnector } = useInternalDynamicContext.useInternalDynamicContext();
    const { walletBook: walletBook$1 } = walletBook.useWalletBookContext();
    const { t } = reactI18next.useTranslation();
    if (!selectedWalletConnector) {
        return null;
    }
    const downloadLinks = Object.entries(walletBook.getWalletLinks(walletBook$1, selectedWalletConnector.key))
        .filter(([, link]) => link !== '')
        .filter(([name]) => name !== 'ios' && name !== 'android')
        .map(([name, link]) => (jsxRuntime.jsx(WalletHelpLink.WalletHelpLink, { name: name, link: link, 
        // justification: we're looping over the keys of walletLinks.desktop
        Icon: getBrowserIcon.getBrowserIcon(name) }, name)));
    return (jsxRuntime.jsxs("div", { className: 'no-qr-code-installed__container', "data-testid": 'no-qr-code-installed', children: [jsxRuntime.jsx("div", { className: 'no-qr-code-installed__img', children: jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: selectedWalletConnector.key, style: { height: pixelToRem.pixelToRem(64), width: pixelToRem.pixelToRem(64) } }) }), jsxRuntime.jsx(Typography.Typography, { className: 'no-qr-code-installed__typography--title', variant: 'title', copykey: 'dyn_qr_code.wallet_not_installed.install', children: t('dyn_qr_code.wallet_not_installed.install', {
                    wallet: walletBook.getWalletBookWallet(walletBook$1, selectedWalletConnector.key)
                        .name,
                }) }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', className: 'no-qr-code-installed__typography', color: 'secondary', copykey: 'dyn_qr_code.wallet_not_installed.select', children: t('dyn_qr_code.wallet_not_installed.select') }), jsxRuntime.jsx("div", { className: 'no-qr-code-installed__links-section', children: downloadLinks }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_mini', className: 'no-qr-code-installed__typography', weight: 'medium', color: 'secondary', copykey: 'dyn_qr_code.wallet_not_installed.refresh', children: t('dyn_qr_code.wallet_not_installed.refresh') })] }));
};

exports.NoQrNotInstalledView = NoQrNotInstalledView;
