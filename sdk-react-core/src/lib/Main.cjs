'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var utils = require('@dynamic-labs/utils');
require('../polyfills.cjs');
require('@dynamic-labs/multi-wallet');
require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/rpc-providers');
require('@dynamic-labs/sdk-api');
require('./shared/logger.cjs');
require('@dynamic-labs/iconic');
var ViewContext = require('./context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
var localStorage$1 = require('./utils/constants/localStorage.cjs');
require('./utils/constants/colors.cjs');
var localStorage = require('./shared/utils/classes/storage/localStorage.cjs');
require('viem');
var usePreventPageScroll = require('./shared/utils/hooks/usePreventPageScroll/usePreventPageScroll.cjs');
var index$1 = require('./shared/consts/index.cjs');
require('./context/DynamicContext/DynamicContext.cjs');
var useInternalDynamicContext = require('./context/DynamicContext/useInternalDynamicContext.cjs');
var UserWalletsContext = require('./context/UserWalletsContext/UserWalletsContext.cjs');
require('react-i18next');
require('./context/CaptchaContext/CaptchaContext.cjs');
require('./context/ErrorContext/ErrorContext.cjs');
var isSupportedNetwork = require('./utils/functions/isSupportedNetwork/isSupportedNetwork.cjs');
var AccessDeniedContext = require('./context/AccessDeniedContext/AccessDeniedContext.cjs');
var AccountExistsContext = require('./context/AccountExistsContext/AccountExistsContext.cjs');
require('./config/ApiEndpoint.cjs');
var isConnectOnly = require('./utils/hooks/authenticationHooks/helpers/isConnectOnly.cjs');
require('./context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var isSameWalletName = require('./utils/functions/isSameWalletName/isSameWalletName.cjs');
require('./context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('./context/MockContext/MockContext.cjs');
require('./utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('./context/UserFieldEditorContext/UserFieldEditorContext.cjs');
var useWalletItemActions = require('./utils/hooks/useWalletItemActions/useWalletItemActions.cjs');
var DynamicAuthModal = require('./modals/DynamicAuthModal/DynamicAuthModal.cjs');
require('./components/IconButton/IconButton.cjs');
require('./components/Transition/ZoomTransition/ZoomTransition.cjs');
require('./components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('./components/Transition/OpacityTransition/OpacityTransition.cjs');
require('./components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('formik');
require('./components/ShadowDOM/ShadowDOM.cjs');
require('./components/InlineWidget/InlineWidget.cjs');
require('./components/MenuList/Dropdown/Dropdown.cjs');
require('./components/Popper/Popper/Popper.cjs');
var PopperContext = require('./components/Popper/PopperContext/PopperContext.cjs');
var Portal = require('./components/Portal/Portal.cjs');
require('i18next');
require('./components/OverlayCard/OverlayCard.context.cjs');
require('./widgets/DynamicBridgeWidget/context/DynamicBridgeWidgetContext/DynamicBridgeWidgetContext.cjs');
require('./widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('./widgets/DynamicWidget/components/DynamicWidgetCard/DynamicWidgetCard.cjs');
require('./components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
var index = require('./context/FooterAnimationContext/index.cjs');
var SocialRedirectContext = require('./context/SocialRedirectContext/SocialRedirectContext.cjs');
require('./context/QrCodeContext/QrCodeContext.cjs');
require('./context/WalletGroupContext/WalletGroupContext.cjs');
require('./widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('./context/LoadingContext/LoadingContext.cjs');
require('./widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('./views/WalletList/WalletList.cjs');
var viewToComponentMap = require('./views/viewToComponentMap.cjs');
require('./context/FundingContext/FundingContext.cjs');
require('./context/SendBalanceContext/SendBalanceContext.cjs');
require('./main.global.cjs');
var isSelectedWalletAlreadyConnected = require('./utils/functions/isSelectedWalletAlreadyConnected/isSelectedWalletAlreadyConnected.cjs');
var useVerifyOnAwaitingSignature = require('./utils/hooks/multiWallet/useVerifyOnAwaitingSignature/useVerifyOnAwaitingSignature.cjs');

const viewsToDisableCloseOnOverlayClick = [
    'email-wallet-otp-verification-view',
    'social-redirect-view',
    'passkey-intro',
];
const Main = () => {
    const { selectedWalletConnector, linkedWallets, isProjectSettingsLoading, projectSettings, setShowAuthFlow, showAuthFlow, walletConnectorOptions, clearStatesOnBackClick, user, disconnectWallet, authMode, connectedWallets, handleLogOut, } = useInternalDynamicContext.useInternalDynamicContext();
    const { view, goToInitialView } = ViewContext.useViewContext();
    const { setDeniedAddress, setDeniedOauthProvider } = AccessDeniedContext.useAccessDeniedContext();
    const { setExistentAccountData } = AccountExistsContext.useAccountExistsContext();
    usePreventPageScroll.usePreventPageScroll(showAuthFlow);
    const userWallets = UserWalletsContext.useUserWallets();
    const handleClose = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
    const handleOnPortalExiting = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        // In the connect only mode (default and bridge)
        // We want to disconnect wallet when users closes `network not supported` view
        // without updating network in wallet
        // We use onExiting instead onUnmount to avoid jump effect in inline widget
        const viewsToDisconnectWalletOnClose = [
            'network-not-supported',
            'network-not-supported-manual',
        ];
        if (!isConnectOnly.isConnectOnly(user, authMode) ||
            !viewsToDisconnectWalletOnClose.includes(view) ||
            !selectedWalletConnector)
            return;
        const walletByConnectorName = connectedWallets.find((connectedWallet) => connectedWallet.connector.name === selectedWalletConnector.name);
        if (!walletByConnectorName) {
            return;
        }
        // Validate the network
        if (!isSupportedNetwork.isSupportedNetwork({
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
    const handleOnPortalUnmount = React.useCallback(() => {
        // IMPORTANT: we need to reset the view because we reset state that the view depends on
        // so if the previous view renders when the user reopens the widget, it will crash
        goToInitialView();
    }, [goToInitialView]);
    useVerifyOnAwaitingSignature.useVerifyOnAwaitingSignature();
    const { handleAlreadyConnectedWallet, handleCustodialWalletClick, handleInstalledExtensionClick, handleMobileWalletClick, handleUninstalledClick, } = useWalletItemActions.useWalletItemActions();
    /* istanbul ignore next */
    const handleNewToWeb3WalletIntent = (walletConnector) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        setShowAuthFlow(true);
        if (isSelectedWalletAlreadyConnected.isSelectedWalletAlreadyConnected(linkedWallets, walletConnector, user)) {
            // wallet is already connected
            handleAlreadyConnectedWallet(walletConnector);
        }
        else if (walletConnector.canConnectViaCustodialService) {
            // providers like blocto and dapper
            handleCustodialWalletClick(walletConnector);
        }
        else if (utils.isMobile()) {
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
    React.useEffect(() => {
        const newToWeb3WalletName = localStorage.LocalStorage.getFromLS(localStorage$1.NEWTOWEB3_WALLET_EXTENSION_FLAG_KEY);
        if ((walletConnectorOptions === null || walletConnectorOptions === void 0 ? void 0 : walletConnectorOptions.length) && newToWeb3WalletName) {
            const wallet = walletConnectorOptions.find((wallet) => isSameWalletName.isSameWalletName(wallet.name, newToWeb3WalletName));
            if (wallet === null || wallet === void 0 ? void 0 : wallet.walletConnector) {
                handleNewToWeb3WalletIntent(wallet.walletConnector);
            }
            localStorage.LocalStorage.removeFromLS(localStorage$1.NEWTOWEB3_WALLET_EXTENSION_FLAG_KEY);
        }
    }, [walletConnectorOptions]);
    const showDynamicAuth = showAuthFlow && !isProjectSettingsLoading;
    return (jsxRuntime.jsx(SocialRedirectContext.SocialRedirectContextProvider, { children: jsxRuntime.jsx(index.FooterAnimationContextProvider, { children: jsxRuntime.jsx(Portal.Portal, { zIndex: index$1.authModalZIndex, isShown: showDynamicAuth, handleClose: handleClose, withBackdrop: true, transitionEvents: {
                    onExiting: handleOnPortalExiting,
                    onUnmount: handleOnPortalUnmount,
                }, children: jsxRuntime.jsx(PopperContext.PopperProvider, { children: jsxRuntime.jsx(DynamicAuthModal.DynamicAuthModal, { transitionProps: {
                            isShown: showDynamicAuth,
                        }, onClose: handleClose, projectSettings: projectSettings, walletConnector: selectedWalletConnector, children: viewToComponentMap.viewToComponentMap[view] }) }) }) }) }));
};

exports.Main = Main;
exports["default"] = Main;
