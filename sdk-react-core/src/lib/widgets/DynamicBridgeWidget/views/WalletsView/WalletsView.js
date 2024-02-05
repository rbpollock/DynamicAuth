import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { getChainInfo } from '@dynamic-labs/wallet-connector-core';
import 'react';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import { getChainIcon } from '../../../../shared/utils/functions/chain/getChainIcon.js';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/iconic';
import '../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
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
import { DynamicWidgetFooter } from '../../../DynamicWidget/components/DynamicWidgetFooter/DynamicWidgetFooter.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../../DynamicWidget/context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import { LogoutButton } from '../../../../components/LogoutButton/LogoutButton.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { Balance } from '../../../DynamicWidget/components/Balance/Balance.js';
import { DynamicBridgeWalletCard } from '../../components/DynamicBridgeWalletCard/DynamicBridgeWalletCard.js';
import { DynamicBridgeWalletCardBody } from '../../components/DynamicBridgeWalletCardBody/DynamicBridgeWalletCardBody.js';
import { DynamicBridgeWidgetEmptyCard } from '../../components/DynamicBridgeWidgetEmptyCard/DynamicBridgeWidgetEmptyCard.js';

const WalletsView = () => {
    const { disconnectWallet, bridgeChains, connectedWallets } = useInternalDynamicContext();
    return (jsxs(Fragment, { children: [jsx("div", { className: 'dynamic-bridge-widget-wallets-view', "data-testid": 'dynamic-bridge-wget-wallets-view', children: bridgeChains === null || bridgeChains === void 0 ? void 0 : bridgeChains.map(({ chain }) => {
                    const chainWallets = connectedWallets.filter(({ chain: walletChain }) => chain === walletChain);
                    // "Connect wallet" for empty chains
                    if (!chainWallets.length)
                        return jsx(DynamicBridgeWidgetEmptyCard, { chain: chain }, chain);
                    const WalletIcon = getChainIcon(chain);
                    const walletInfo = getChainInfo(chain);
                    // Wallets info for chains with connected wallets
                    return chainWallets.map(({ connector, address, id }) => (jsx(DynamicBridgeWalletCard, { networkIcon: jsx(WalletIcon, {}), networkName: walletInfo === null || walletInfo === void 0 ? void 0 : walletInfo.displayName, children: jsx(DynamicBridgeWalletCardBody, { walletKey: connector.key, walletAddress: address, walletBalance: jsx(Balance, { address: address, connector: connector, network: chain }), onDisconnectClick: () => disconnectWallet(id) }) }, `${id}-${connector.name}`)));
                }) }), jsx(DynamicWidgetFooter, { children: jsx(LogoutButton, { buttonClassName: 'dynamic-bridge-widget-wallets-view__logout-button', isTextButton: true }) })] }));
};

export { WalletsView, WalletsView as default };
