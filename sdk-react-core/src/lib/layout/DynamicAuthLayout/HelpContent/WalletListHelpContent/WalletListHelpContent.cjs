'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var iconic = require('@dynamic-labs/iconic');
var walletBook = require('@dynamic-labs/wallet-book');
var utils = require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
var puzzle = require('../../../../shared/assets/puzzle.cjs');
var index = require('../../../../shared/utils/functions/getValueByKey/index.cjs');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
var parseWalletLinks = require('../../../../utils/functions/parseWalletLinks/parseWalletLinks.cjs');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
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
var Skeleton = require('../../../../components/Skeleton/Skeleton.cjs');
var NewToWeb3WalletItem = require('./NewToWeb3WalletItem/NewToWeb3WalletItem.cjs');
var Item = require('./Item/Item.cjs');
var WalletExtensionOrAppContinueButton = require('./WalletExtensionOrAppContinueButton/WalletExtensionOrAppContinueButton.cjs');
require('../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var EnterTileAnimation = require('../../../../components/EnterTileAnimation/EnterTileAnimation.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const WalletListHelpContent = ({ chains, newToWeb3WalletChainMap, }) => {
    var _a, _b;
    const { walletConnectorOptions } = useInternalDynamicContext.useInternalDynamicContext();
    const { walletBook: walletBook$1 } = walletBook.useWalletBookContext();
    const [selectedUrl, setSelectedUrl] = React.useState('');
    const chainName = ((_a = chains === null || chains === void 0 ? void 0 : chains.filter((chain) => Boolean(chain.enabled)).find((enabledChain) => enabledChain.name === newToWeb3WalletChainMap.primary_chain)) === null || _a === void 0 ? void 0 : _a.name) || 'evm';
    const walletName = index.getValueByKey(newToWeb3WalletChainMap === null || newToWeb3WalletChainMap === void 0 ? void 0 : newToWeb3WalletChainMap.wallets, chainName);
    const newToWeb3Wallet = walletConnectorOptions.find((wallet) => { var _a; return walletConnectorCore.normalizeWalletName((_a = wallet.key) !== null && _a !== void 0 ? _a : wallet.name) === walletName; });
    const isCustodialServiceWallet = newToWeb3Wallet === null || newToWeb3Wallet === void 0 ? void 0 : newToWeb3Wallet.walletConnector.canConnectViaCustodialService;
    const links = walletBook.getWalletLinks(walletBook$1, walletName);
    const { currentDesktopUrl, canShowAndroidAppButton, canShowIosAppButton } = parseWalletLinks.parseWalletLinks(links);
    const walletLinksElements = [
        {
            content: 'Install Desktop extension',
            icon: puzzle.ReactComponent,
            isEnabled: Boolean(currentDesktopUrl === null || currentDesktopUrl === void 0 ? void 0 : currentDesktopUrl.length) && !utils.isMobile(),
            url: currentDesktopUrl,
        },
        {
            content: 'Install iOS app',
            icon: iconic.AppleIcon,
            isEnabled: canShowIosAppButton,
            url: links.ios,
        },
        {
            content: 'Install Android app',
            icon: iconic.AndroidIcon,
            isEnabled: canShowAndroidAppButton,
            url: links.android,
        },
    ];
    if (!Object.keys((_b = walletBook$1 === null || walletBook$1 === void 0 ? void 0 : walletBook$1.wallets) !== null && _b !== void 0 ? _b : {}).length) {
        return jsxRuntime.jsx(Skeleton.Skeleton, { className: 'walletlist-footer-content__container' });
    }
    return (jsxRuntime.jsx("div", { className: 'walletlist-help-content__container', children: jsxRuntime.jsxs(EnterTileAnimation.EnterTileAnimation, { delay: '300ms', children: [jsxRuntime.jsx("div", { className: 'walletlist-help-content__icon', children: jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: walletName, style: { height: pixelToRem.pixelToRem(56), width: pixelToRem.pixelToRem(56) } }) }), jsxRuntime.jsxs("div", { className: 'walletlist-help-content__typography-wrapper', children: [jsxRuntime.jsxs(Typography.Typography, { as: 'p', variant: 'title', weight: 'medium', children: ["We recommend installing", ' ', walletBook.getWalletBookWallet(walletBook$1, walletName).name] }), jsxRuntime.jsx(Typography.Typography, { as: 'label', variant: 'body_normal', weight: 'regular', color: 'secondary', className: 'walletlist-help-content__typography--label', children: "Select your preferred option below:" })] }), jsxRuntime.jsx("div", { className: 'walletlist-help-content__buttons-wrapper', children: walletLinksElements.map((element, i) => element.isEnabled ? (jsxRuntime.jsx("button", { onClick: () => setSelectedUrl(element.url), children: jsxRuntime.jsx(Item.Item, { StartIcon: element.icon, heading: element.content, url: element.url }) }, i)) : undefined) }), isCustodialServiceWallet && (jsxRuntime.jsxs("div", { className: 'walletlist-help-content__custodial-wallet-area', children: [jsxRuntime.jsx(Typography.Typography, { className: 'walletlist-help-content__custodial-wallet-area--title', as: 'p', color: 'secondary', variant: 'body_normal', weight: 'regular', children: "If you don't want to install a wallet, then use:" }), jsxRuntime.jsx(NewToWeb3WalletItem.NewToWeb3WalletItem, { wallet: newToWeb3Wallet })] })), jsxRuntime.jsx(WalletExtensionOrAppContinueButton.WalletExtensionOrAppContinueButton, { selectedUrl: selectedUrl, wallet: newToWeb3Wallet })] }) }));
};

exports.WalletListHelpContent = WalletListHelpContent;
