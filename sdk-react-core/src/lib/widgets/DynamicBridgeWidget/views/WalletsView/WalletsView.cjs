'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
var getChainIcon = require('../../../../shared/utils/functions/chain/getChainIcon.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/iconic');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
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
var DynamicWidgetFooter = require('../../../DynamicWidget/components/DynamicWidgetFooter/DynamicWidgetFooter.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
var LogoutButton = require('../../../../components/LogoutButton/LogoutButton.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var Balance = require('../../../DynamicWidget/components/Balance/Balance.cjs');
var DynamicBridgeWalletCard = require('../../components/DynamicBridgeWalletCard/DynamicBridgeWalletCard.cjs');
var DynamicBridgeWalletCardBody = require('../../components/DynamicBridgeWalletCardBody/DynamicBridgeWalletCardBody.cjs');
var DynamicBridgeWidgetEmptyCard = require('../../components/DynamicBridgeWidgetEmptyCard/DynamicBridgeWidgetEmptyCard.cjs');

const WalletsView = () => {
    const { disconnectWallet, bridgeChains, connectedWallets } = useInternalDynamicContext.useInternalDynamicContext();
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", { className: 'dynamic-bridge-widget-wallets-view', "data-testid": 'dynamic-bridge-wget-wallets-view', children: bridgeChains === null || bridgeChains === void 0 ? void 0 : bridgeChains.map(({ chain }) => {
                    const chainWallets = connectedWallets.filter(({ chain: walletChain }) => chain === walletChain);
                    // "Connect wallet" for empty chains
                    if (!chainWallets.length)
                        return jsxRuntime.jsx(DynamicBridgeWidgetEmptyCard.DynamicBridgeWidgetEmptyCard, { chain: chain }, chain);
                    const WalletIcon = getChainIcon.getChainIcon(chain);
                    const walletInfo = walletConnectorCore.getChainInfo(chain);
                    // Wallets info for chains with connected wallets
                    return chainWallets.map(({ connector, address, id }) => (jsxRuntime.jsx(DynamicBridgeWalletCard.DynamicBridgeWalletCard, { networkIcon: jsxRuntime.jsx(WalletIcon, {}), networkName: walletInfo === null || walletInfo === void 0 ? void 0 : walletInfo.displayName, children: jsxRuntime.jsx(DynamicBridgeWalletCardBody.DynamicBridgeWalletCardBody, { walletKey: connector.key, walletAddress: address, walletBalance: jsxRuntime.jsx(Balance.Balance, { address: address, connector: connector, network: chain }), onDisconnectClick: () => disconnectWallet(id) }) }, `${id}-${connector.name}`)));
                }) }), jsxRuntime.jsx(DynamicWidgetFooter.DynamicWidgetFooter, { children: jsxRuntime.jsx(LogoutButton.LogoutButton, { buttonClassName: 'dynamic-bridge-widget-wallets-view__logout-button', isTextButton: true }) })] }));
};

exports.WalletsView = WalletsView;
exports["default"] = WalletsView;
