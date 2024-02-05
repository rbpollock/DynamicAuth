import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { normalizeWalletName } from '@dynamic-labs/wallet-connector-core';
import { AppleIcon, AndroidIcon } from '@dynamic-labs/iconic';
import { useWalletBookContext, getWalletLinks, WalletIcon, getWalletBookWallet } from '@dynamic-labs/wallet-book';
import { isMobile } from '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '../../../../context/ViewContext/ViewContext.js';
import { ReactComponent as SvgPuzzle } from '../../../../shared/assets/puzzle.js';
import { getValueByKey } from '../../../../shared/utils/functions/getValueByKey/index.js';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../shared/consts/index.js';
import { parseWalletLinks } from '../../../../utils/functions/parseWalletLinks/parseWalletLinks.js';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
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
import { Skeleton } from '../../../../components/Skeleton/Skeleton.js';
import { NewToWeb3WalletItem } from './NewToWeb3WalletItem/NewToWeb3WalletItem.js';
import { Item } from './Item/Item.js';
import { WalletExtensionOrAppContinueButton } from './WalletExtensionOrAppContinueButton/WalletExtensionOrAppContinueButton.js';
import '../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { EnterTileAnimation } from '../../../../components/EnterTileAnimation/EnterTileAnimation.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const WalletListHelpContent = ({ chains, newToWeb3WalletChainMap, }) => {
    var _a, _b;
    const { walletConnectorOptions } = useInternalDynamicContext();
    const { walletBook } = useWalletBookContext();
    const [selectedUrl, setSelectedUrl] = useState('');
    const chainName = ((_a = chains === null || chains === void 0 ? void 0 : chains.filter((chain) => Boolean(chain.enabled)).find((enabledChain) => enabledChain.name === newToWeb3WalletChainMap.primary_chain)) === null || _a === void 0 ? void 0 : _a.name) || 'evm';
    const walletName = getValueByKey(newToWeb3WalletChainMap === null || newToWeb3WalletChainMap === void 0 ? void 0 : newToWeb3WalletChainMap.wallets, chainName);
    const newToWeb3Wallet = walletConnectorOptions.find((wallet) => { var _a; return normalizeWalletName((_a = wallet.key) !== null && _a !== void 0 ? _a : wallet.name) === walletName; });
    const isCustodialServiceWallet = newToWeb3Wallet === null || newToWeb3Wallet === void 0 ? void 0 : newToWeb3Wallet.walletConnector.canConnectViaCustodialService;
    const links = getWalletLinks(walletBook, walletName);
    const { currentDesktopUrl, canShowAndroidAppButton, canShowIosAppButton } = parseWalletLinks(links);
    const walletLinksElements = [
        {
            content: 'Install Desktop extension',
            icon: SvgPuzzle,
            isEnabled: Boolean(currentDesktopUrl === null || currentDesktopUrl === void 0 ? void 0 : currentDesktopUrl.length) && !isMobile(),
            url: currentDesktopUrl,
        },
        {
            content: 'Install iOS app',
            icon: AppleIcon,
            isEnabled: canShowIosAppButton,
            url: links.ios,
        },
        {
            content: 'Install Android app',
            icon: AndroidIcon,
            isEnabled: canShowAndroidAppButton,
            url: links.android,
        },
    ];
    if (!Object.keys((_b = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) !== null && _b !== void 0 ? _b : {}).length) {
        return jsx(Skeleton, { className: 'walletlist-footer-content__container' });
    }
    return (jsx("div", { className: 'walletlist-help-content__container', children: jsxs(EnterTileAnimation, { delay: '300ms', children: [jsx("div", { className: 'walletlist-help-content__icon', children: jsx(WalletIcon, { walletKey: walletName, style: { height: pixelToRem(56), width: pixelToRem(56) } }) }), jsxs("div", { className: 'walletlist-help-content__typography-wrapper', children: [jsxs(Typography, { as: 'p', variant: 'title', weight: 'medium', children: ["We recommend installing", ' ', getWalletBookWallet(walletBook, walletName).name] }), jsx(Typography, { as: 'label', variant: 'body_normal', weight: 'regular', color: 'secondary', className: 'walletlist-help-content__typography--label', children: "Select your preferred option below:" })] }), jsx("div", { className: 'walletlist-help-content__buttons-wrapper', children: walletLinksElements.map((element, i) => element.isEnabled ? (jsx("button", { onClick: () => setSelectedUrl(element.url), children: jsx(Item, { StartIcon: element.icon, heading: element.content, url: element.url }) }, i)) : undefined) }), isCustodialServiceWallet && (jsxs("div", { className: 'walletlist-help-content__custodial-wallet-area', children: [jsx(Typography, { className: 'walletlist-help-content__custodial-wallet-area--title', as: 'p', color: 'secondary', variant: 'body_normal', weight: 'regular', children: "If you don't want to install a wallet, then use:" }), jsx(NewToWeb3WalletItem, { wallet: newToWeb3Wallet })] })), jsx(WalletExtensionOrAppContinueButton, { selectedUrl: selectedUrl, wallet: newToWeb3Wallet })] }) }));
};

export { WalletListHelpContent };
