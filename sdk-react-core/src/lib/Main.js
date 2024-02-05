import { __awaiter } from '../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { useCallback, useEffect } from 'react';
import { isMobile } from '@dynamic-labs/utils';
import '../polyfills.js';
import '@dynamic-labs/multi-wallet';
import '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/rpc-providers';
import '@dynamic-labs/sdk-api';
import './shared/logger.js';
import '@dynamic-labs/iconic';
import { useViewContext } from './context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import { NEWTOWEB3_WALLET_EXTENSION_FLAG_KEY } from './utils/constants/localStorage.js';
import './utils/constants/colors.js';
import { LocalStorage } from './shared/utils/classes/storage/localStorage.js';
import 'viem';
import { usePreventPageScroll } from './shared/utils/hooks/usePreventPageScroll/usePreventPageScroll.js';
import { authModalZIndex } from './shared/consts/index.js';
import './context/DynamicContext/DynamicContext.js';
import { useInternalDynamicContext } from './context/DynamicContext/useInternalDynamicContext.js';
import { useUserWallets } from './context/UserWalletsContext/UserWalletsContext.js';
import 'react-i18next';
import './context/CaptchaContext/CaptchaContext.js';
import './context/ErrorContext/ErrorContext.js';
import { isSupportedNetwork } from './utils/functions/isSupportedNetwork/isSupportedNetwork.js';
import { useAccessDeniedContext } from './context/AccessDeniedContext/AccessDeniedContext.js';
import { useAccountExistsContext } from './context/AccountExistsContext/AccountExistsContext.js';
import './config/ApiEndpoint.js';
import { isConnectOnly } from './utils/hooks/authenticationHooks/helpers/isConnectOnly.js';
import './context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { isSameWalletName } from './utils/functions/isSameWalletName/isSameWalletName.js';
import './context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import './context/MockContext/MockContext.js';
import './utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import './context/UserFieldEditorContext/UserFieldEditorContext.js';
import { useWalletItemActions } from './utils/hooks/useWalletItemActions/useWalletItemActions.js';
import { DynamicAuthModal } from './modals/DynamicAuthModal/DynamicAuthModal.js';
import './components/IconButton/IconButton.js';
import './components/Transition/ZoomTransition/ZoomTransition.js';
import './components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import './components/Transition/OpacityTransition/OpacityTransition.js';
import './components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import 'formik';
import './components/ShadowDOM/ShadowDOM.js';
import './components/InlineWidget/InlineWidget.js';
import './components/MenuList/Dropdown/Dropdown.js';
import './components/Popper/Popper/Popper.js';
import { PopperProvider } from './components/Popper/PopperContext/PopperContext.js';
import { Portal } from './components/Portal/Portal.js';
import 'i18next';
import './components/OverlayCard/OverlayCard.context.js';
import './widgets/DynamicBridgeWidget/context/DynamicBridgeWidgetContext/DynamicBridgeWidgetContext.js';
import './widgets/DynamicWidget/context/DynamicWidgetContext.js';
import './widgets/DynamicWidget/components/DynamicWidgetCard/DynamicWidgetCard.js';
import './components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import { FooterAnimationContextProvider } from './context/FooterAnimationContext/index.js';
import { SocialRedirectContextProvider } from './context/SocialRedirectContext/SocialRedirectContext.js';
import './context/QrCodeContext/QrCodeContext.js';
import './context/WalletGroupContext/WalletGroupContext.js';
import './widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import './context/LoadingContext/LoadingContext.js';
import './widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import './views/WalletList/WalletList.js';
import { viewToComponentMap } from './views/viewToComponentMap.js';
import './context/FundingContext/FundingContext.js';
import './context/SendBalanceContext/SendBalanceContext.js';
import './main.global.js';
import { isSelectedWalletAlreadyConnected } from './utils/functions/isSelectedWalletAlreadyConnected/isSelectedWalletAlreadyConnected.js';
import { useVerifyOnAwaitingSignature } from './utils/hooks/multiWallet/useVerifyOnAwaitingSignature/useVerifyOnAwaitingSignature.js';

const viewsToDisableCloseOnOverlayClick = [
    'email-wallet-otp-verification-view',
    'social-redirect-view',
    'passkey-intro',
];
const Main = () => {
    const { selectedWalletConnector, linkedWallets, isProjectSettingsLoading, projectSettings, setShowAuthFlow, showAuthFlow, walletConnectorOptions, clearStatesOnBackClick, user, disconnectWallet, authMode, connectedWallets, handleLogOut, } = useInternalDynamicContext();
    const { view, goToInitialView } = useViewContext();
    const { setDeniedAddress, setDeniedOauthProvider } = useAccessDeniedContext();
    const { setExistentAccountData } = useAccountExistsContext();
    usePreventPageScroll(showAuthFlow);
    const userWallets = useUserWallets();
    const handleClose = () => __awaiter(void 0, void 0, void 0, function* () {
        if (viewsToDisableCloseOnOverlayClick.includes(view))
            return;
        if ((view === 'network-not-supported' ||
            view === 'network-not-supported-manual') &&
            userWallets.length === 1) {
            yield handleLogOut();
        }
        setShowAuthFlow(false);
        setDeniedAddress('');
        setDeniedOauthProvider(undefined);
        setExistentAccountData(undefined);
        clearStatesOnBackClick();
    });
    const handleOnPortalExiting = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        // In the connect only mode (default and bridge)
        // We want to disconnect wallet when users closes `network not supported` view
        // without updating network in wallet
        // We use onExiting instead onUnmount to avoid jump effect in inline widget
        const viewsToDisconnectWalletOnClose = [
            'network-not-supported',
            'network-not-supported-manual',
        ];
        if (!isConnectOnly(user, authMode) ||
            !viewsToDisconnectWalletOnClose.includes(view) ||
            !selectedWalletConnector)
            return;
        const walletByConnectorName = connectedWallets.find((connectedWallet) => connectedWallet.connector.name === selectedWalletConnector.name);
        if (!walletByConnectorName) {
            return;
        }
        // Validate the network
        if (!isSupportedNetwork({
            network: yield walletByConnectorName.connector.getNetwork(),
            walletConnector: walletByConnectorName.connector,
        })) {
            disconnectWallet(walletByConnectorName.id);
        }
    }), [
        selectedWalletConnector,
        authMode,
        connectedWallets,
        disconnectWallet,
        user,
        view,
    ]);
    const handleOnPortalUnmount = useCallback(() => {
        // IMPORTANT: we need to reset the view because we reset state that the view depends on
        // so if the previous view renders when the user reopens the widget, it will crash
        goToInitialView();
    }, [goToInitialView]);
    useVerifyOnAwaitingSignature();
    const { handleAlreadyConnectedWallet, handleCustodialWalletClick, handleInstalledExtensionClick, handleMobileWalletClick, handleUninstalledClick, } = useWalletItemActions();
    /* istanbul ignore next */
    const handleNewToWeb3WalletIntent = (walletConnector) => __awaiter(void 0, void 0, void 0, function* () {
        setShowAuthFlow(true);
        if (isSelectedWalletAlreadyConnected(linkedWallets, walletConnector, user)) {
            // wallet is already connected
            handleAlreadyConnectedWallet(walletConnector);
        }
        else if (walletConnector.canConnectViaCustodialService) {
            // providers like blocto and dapper
            handleCustodialWalletClick(walletConnector);
        }
        else if (isMobile()) {
            // mobile wallets
            handleMobileWalletClick(walletConnector);
        }
        else if (walletConnector.isInstalledOnBrowser()) {
            // browser extensions or injected wallets
            handleInstalledExtensionClick(walletConnector);
        }
        else {
            // wallet requiring a qr code (wallet connect/coinbase wallet)
            handleUninstalledClick(walletConnector);
        }
    });
    useEffect(() => {
        const newToWeb3WalletName = LocalStorage.getFromLS(NEWTOWEB3_WALLET_EXTENSION_FLAG_KEY);
        if ((walletConnectorOptions === null || walletConnectorOptions === void 0 ? void 0 : walletConnectorOptions.length) && newToWeb3WalletName) {
            const wallet = walletConnectorOptions.find((wallet) => isSameWalletName(wallet.name, newToWeb3WalletName));
            if (wallet === null || wallet === void 0 ? void 0 : wallet.walletConnector) {
                handleNewToWeb3WalletIntent(wallet.walletConnector);
            }
            LocalStorage.removeFromLS(NEWTOWEB3_WALLET_EXTENSION_FLAG_KEY);
        }
    }, [walletConnectorOptions]);
    const showDynamicAuth = showAuthFlow && !isProjectSettingsLoading;
    return (jsx(SocialRedirectContextProvider, { children: jsx(FooterAnimationContextProvider, { children: jsx(Portal, { zIndex: authModalZIndex, isShown: showDynamicAuth, handleClose: handleClose, withBackdrop: true, transitionEvents: {
                    onExiting: handleOnPortalExiting,
                    onUnmount: handleOnPortalUnmount,
                }, children: jsx(PopperProvider, { children: jsx(DynamicAuthModal, { transitionProps: {
                            isShown: showDynamicAuth,
                        }, onClose: handleClose, projectSettings: projectSettings, walletConnector: selectedWalletConnector, children: viewToComponentMap[view] }) }) }) }) }));
};

export { Main, Main as default };
