'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var iconic = require('@dynamic-labs/iconic');
var utils = require('@dynamic-labs/utils');
var walletBook = require('@dynamic-labs/wallet-book');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var app = require('../../app.cjs');
var CaptchaContext = require('../CaptchaContext/CaptchaContext.cjs');
var ErrorContext = require('../ErrorContext/ErrorContext.cjs');
var ViewContext = require('../ViewContext/ViewContext.cjs');
var decodeJwt = require('../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
var logger = require('../../shared/logger.cjs');
var localStorage$1 = require('../../utils/constants/localStorage.cjs');
require('../../utils/constants/colors.cjs');
var values = require('../../utils/constants/values.cjs');
var localStorage = require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var useGlobalLoading = require('../../shared/utils/hooks/useGlobalLoading/useGlobalLoading.cjs');
var useLocalStorage = require('../../shared/utils/hooks/useLocalStorage/useLocalStorage.cjs');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getAuthToken = require('../../utils/functions/getAuthToken/getAuthToken.cjs');
require('@dynamic-labs/sdk-api');
var AccessDeniedContext = require('../AccessDeniedContext/AccessDeniedContext.cjs');
var AccountExistsContext = require('../AccountExistsContext/AccountExistsContext.cjs');
var api = require('../../data/api.cjs');
var EmailVerificationContext = require('../EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var isSameWalletName = require('../../utils/functions/isSameWalletName/isSameWalletName.cjs');
var useEventListener = require('../../utils/hooks/useEventListener/useEventListener.cjs');
var useFetchNonce = require('../../utils/hooks/useFetchNonce/useFetchNonce.cjs');
var useFetchProjectSettings = require('../../utils/hooks/useFetchProjectSettings/useFetchProjectSettings.cjs');
var ThemeContext = require('../ThemeContext/ThemeContext.cjs');
var useSetWalletConnectorVerifiedCredentials = require('../../utils/hooks/useSetWalletConnectorVerifiedCredentials/useSetWalletConnectorVerifiedCredentials.cjs');
require('@dynamic-labs/types');
require('yup');
require('../MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
var UserFieldEditorContext = require('../UserFieldEditorContext/UserFieldEditorContext.cjs');
var useValidateSession = require('../../utils/hooks/useValidateSession/useValidateSession.cjs');
var useWalletConnectorOptions = require('../../utils/hooks/useWalletConnectorOptions/useWalletConnectorOptions.cjs');
var useWalletConnectors = require('../../utils/hooks/useWalletConnectors/useWalletConnectors.cjs');
var useWalletUiUtils = require('../../utils/hooks/useWalletUiUtils/useWalletUiUtils.cjs');
require('../../components/Alert/Alert.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/IconButton/IconButton.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../components/OverlayCard/OverlayCard.context.cjs');
var SyncPasskeyFlow = require('../../components/SyncPasskeyFlow/SyncPasskeyFlow.cjs');
var Toolkit = require('../../components/Toolkit/Toolkit.cjs');
var ApiEndpoint = require('../../config/ApiEndpoint.cjs');
var locale = require('../../locale/locale.cjs');
var getMissingChains = require('../../utils/functions/getMissingChains/getMissingChains.cjs');
var parseTheme = require('../../utils/functions/parseTheme/parseTheme.cjs');
var useMultiWalletWidgetState = require('../../utils/hooks/multiWallet/useMultiWalletWidgetState/useMultiWalletWidgetState.cjs');
var useMultiWallet = require('../../utils/hooks/multiWallet/useMultiWallet/useMultiWallet.cjs');
var useClearWalletConnectSessions = require('../../utils/hooks/useClearWalletConnectSessions/useClearWalletConnectSessions.cjs');
var useConnectWallet = require('../../utils/hooks/useConnectWallet/useConnectWallet.cjs');
var useProcessNetworkConfigurations = require('../../utils/hooks/useProcessNetworkConfigurations/useProcessNetworkConfigurations.cjs');
var useFetchWalletsForChainsMap = require('../../utils/hooks/useFetchWalletsForChainsMap/useFetchWalletsForChainsMap.cjs');
var useHandleUnlinkWallet = require('../../utils/hooks/useHandleUnlinkWallet/useHandleUnlinkWallet.cjs');
var usePrimaryWalletId = require('../../utils/hooks/usePrimaryWalletId/usePrimaryWalletId.cjs');
var useRpcProviders = require('../../utils/hooks/useRpcProviders/useRpcProviders.cjs');
var useWalletEventListeners = require('../../utils/hooks/useWalletEventListeners/useWalletEventListeners.cjs');
var DynamicBridgeWidgetContext = require('../../widgets/DynamicBridgeWidget/context/DynamicBridgeWidgetContext/DynamicBridgeWidgetContext.cjs');
var DynamicWidgetContext = require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetCard/DynamicWidgetCard.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('../FooterAnimationContext/index.cjs');
require('../SocialRedirectContext/SocialRedirectContext.cjs');
var QrCodeContext = require('../QrCodeContext/QrCodeContext.cjs');
var WalletGroupContext = require('../WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
var LoadingContext = require('../LoadingContext/LoadingContext.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../views/WalletList/WalletList.cjs');
require('../../views/viewToComponentMap.cjs');
var FundingWidget = require('../../widgets/FundingWidget/FundingWidget.cjs');
var FundingContext = require('../FundingContext/FundingContext.cjs');
var SendBalanceContext = require('../SendBalanceContext/SendBalanceContext.cjs');
var UseNetworkValidation = require('../UseNetworkValidation/UseNetworkValidation.cjs');
var UserWalletsContext = require('../UserWalletsContext/UserWalletsContext.cjs');
var WalletContext = require('../WalletContext/WalletContext.cjs');
var handleDisconnectWallet = require('./handleDisconnectWallet/handleDisconnectWallet.cjs');
var helpers = require('./helpers.cjs');
var useDisplayOrderState = require('./hooks/useDisplayOrderState/useDisplayOrderState.cjs');
var useEmailLoginState = require('./hooks/useEmailLoginState/useEmailLoginState.cjs');
var useNameService = require('./hooks/useNameService/useNameService.cjs');
var useSelectedWalletConnector = require('./hooks/useSelectedWalletConnector/useSelectedWalletConnector.cjs');
var useSetShowAuthFlowWithInit = require('./hooks/useSetShowAuthFlowWithInit/useSetShowAuthFlowWithInit.cjs');
var useVerificationInProgress = require('./hooks/useVerificationInProgress/useVerificationInProgress.cjs');
var useShowPasskeyCreateSuccess = require('./hooks/useShowPasskeyCreateSuccess/useShowPasskeyCreateSuccess.cjs');
var internalEvents = require('./internalEvents/internalEvents.cjs');
var useCustomerCallbacks = require('./useCustomerCallbacks/useCustomerCallbacks.cjs');
var useCustomerAuthFlowCallbacks = require('./useCustomerCallbacks/useCustomerAuthFlowCallbacks.cjs');
var validators = require('./validators.cjs');

const PUBLIC_PROJECT_LIVE_ENVIRONMENT_ID = '2762a57b-faa4-41ce-9f16-abff9300e2c9';
const EMPTY_INITIAL_USER = undefined;
const DynamicContext = React.createContext(undefined);
/** The context provider itself we only use internally */
const InnerDynamicContextProvider = ({ children, theme, settings, locale: locale$1, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { accessDeniedMessagePrimary, accessDeniedMessageSecondary, accessDeniedButton, apiBaseUrl, enableForcedNetworkValidation: enableForcedNetworkValidationProp = false, deepLinkPreference = 'native', bridgeChains, cssOverrides, defaultNumberOfWalletsToShow = values.DEFAULT_NUMBER_OF_WALLETS_TO_SHOW, flowNetwork, initialAuthenticationMode = 'connect-and-sign', debugError = false, displaySiweStatement = true, newToWeb3WalletChainMap, enableVisitTrackingOnConnectOnly = true, environmentId, localStorageSuffix, eventsCallbacks, evmNetworks, walletsFilter, logLevel = 'WARN', notInTheListImageUrl, onboardingImageUrl, policiesConsentInnerComponent, customPrivacyPolicy, privacyPolicyUrl, signWithEmailWalletName, socialMediaLinkText, socialMediaIconUrl, socialMediaUrl, customTermsOfServices, termsOfServiceUrl, toolkitEnabled, siweStatement, shadowDOMEnabled = true, walletConnectors: walletConnectorsProp, socialProvidersFilter, showLockedWalletView = false, walletConnectPreferredChains, walletConnectorExtensions, } = settings;
    let enableForcedNetworkValidation = enableForcedNetworkValidationProp;
    if (bridgeChains) {
        enableForcedNetworkValidation = true;
    }
    // The internalEventsRef is temporary and should be removed after QNTM-180 is done
    const internalEventsRef = React.useRef(internalEvents.getInternalEvents());
    let { walletConnectV1Bridge, appLogoUrl = 'https://demo.dynamic.xyz/assets/dynamic-logo.svg', appName = 'Dynamic Example', } = settings;
    if (!environmentId) {
        throw new utils.MissingEnvironmentIdError();
    }
    logger.logger.setLogLevel(logLevel);
    walletConnectorCore.logger.setLogLevel(logLevel);
    if (environmentId === PUBLIC_PROJECT_LIVE_ENVIRONMENT_ID) {
        logger.logger.warn(`WARNING: DYNAMIC is using a test environment ID ${environmentId}. Please sign up on https://app.dynamic.xyz/ to get your production environment ID.`);
    }
    ApiEndpoint.setBaseUrl((_a = process.env.DYNAMIC_API_BASE_URL) !== null && _a !== void 0 ? _a : apiBaseUrl);
    localStorage.LocalStorage.setSuffix(localStorageSuffix);
    const i18nSDKInstance = locale.Locale.setup(locale$1);
    const isAuthenticated = Boolean(getAuthToken.getAuthToken());
    const isBridgeFlow = Boolean(bridgeChains);
    const [onboardingOnlyJwt, setOnboardingOnlyJwt] = React.useState(undefined);
    const [showAuthFlow, setShowAuthFlow] = React.useState(false);
    // state to track the full connectivity status of the individual's wallets.
    // Set to true once the predetermined number of wallets is connected.
    const [isFullyConnected, setIsFullyConnected, removeIsFullyConnected] = useLocalStorage.useLocalStorage(localStorage$1.IS_FULLY_CONNECTED, false);
    const [bridgeChainsToConnect, setBridgeChainsToConnect] = React.useState(bridgeChains);
    // Allows clients to control widget flow without need to click on AccountControl
    const [showDynamicUserProfile, setShowDynamicUserProfile] = React.useState(false);
    // Alows clients to control the Bridget Widget flow without need to click on Bridge Widget
    const [showBridgeWidget, setShowBridgeWidget] = React.useState(false);
    const [isSingleWalletAccount, setIsSingleWalletAccount] = React.useState(false);
    const [user, setUser, removeUser] = useLocalStorage.useLocalStorage(localStorage$1.AUTH_USER, EMPTY_INITIAL_USER, validators.validateAuthUser, [localStorage$1.AUTH_TOKEN]);
    const { consumeNonce } = useFetchNonce.useFetchNonce(environmentId);
    const [qrcodeUri, setQrcodeUri] = React.useState('');
    const [desktopUri, setDesktopUri] = React.useState('');
    const [multiWalletWidgetState, setMultiWalletWidgetState, { awaiting_account_switch: [accountSwitchState], awaiting_signature: [awaitingSignatureState], },] = useMultiWalletWidgetState.useMultiWalletWidgetState();
    const { projectSettings, isLoading: isProjectSettingsLoading, removeLsSettings, } = useFetchProjectSettings.useFetchProjectSettings({
        authToken: getAuthToken.getAuthToken(),
        dynamicContextProps: { settings },
        environmentId,
    });
    const { multiWallet, setMultiWallet } = useMultiWallet.useMultiWallet(toolkitEnabled || false, (_b = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _b === void 0 ? void 0 : _b.multiWallet);
    // for demo proposes when running single wallet
    // it should not use bridge even having walletConnectV1Bridge set on settings
    // but v2 if enabled
    if (toolkitEnabled &&
        ((_d = (_c = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _c === void 0 ? void 0 : _c.walletConnect) === null || _d === void 0 ? void 0 : _d.v2Enabled) &&
        !multiWallet) {
        walletConnectV1Bridge = undefined;
    }
    // ensures that when user comes back to site and primary wallet is out of sync, we don't show widget popup
    const [showWidgetStatePopup, setShowWidgetStatePopup] = React.useState(!multiWallet);
    // Used inside useVerifyOnAwaitingSignature. Is legacy and should be removed asap
    const [legacyIsVerifying, setLegacyIsVerifying] = React.useState(false);
    // Set to true when a customer starts any auth verification process and set to false when it ends
    const [isVerificationInProgress, setIsVerificationInProgress] = useVerificationInProgress.useVerificationInProgress();
    const walletBook$1 = walletBook.useWalletBookCdn();
    const { configurations: serverNetworkConfigurations, handleRemoveLsNetworks, } = useProcessNetworkConfigurations.useProcessNetworkConfigurations({
        authToken: getAuthToken.getAuthToken(),
        environmentId,
        evmNetworks,
        projectSettings,
    });
    const { imageUserInAccessList, imageUserNotInAccessList, displayName, appLogo, } = (projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general) || {};
    appLogoUrl = appLogo || appLogoUrl;
    appName = displayName || appName;
    const [loginWithEmail, setLogInWithEmail] = useEmailLoginState.useEmailLoginState((projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) || [], user);
    const [authorizationViewDisplayOrder, setAuthorizationViewDisplayOrder] = useDisplayOrderState.useDisplayOrderState(projectSettings);
    const [confirmationModal, walletUiUtils] = useWalletUiUtils.useWalletUiUtils({
        appLogoUrl,
        appName,
        getAppOrigin: () => window.location.origin,
    });
    const { walletConnectorOptions } = useWalletConnectorOptions.useWalletConnectorOptions({
        appLogoUrl,
        appName,
        deepLinkPreference,
        flowNetwork,
        networkConfigurations: serverNetworkConfigurations,
        projectSettings,
        walletBook: walletBook$1,
        walletConnectPreferredChains,
        walletConnectV1Bridge,
        walletConnectorExtensions,
        walletConnectorsProp,
        walletUiUtils,
    });
    const [authMode, setAuthMode] = useLocalStorage.useLocalStorage(localStorage$1.AUTH_MODE, initialAuthenticationMode);
    const { clearPrimaryWalletId, primaryWalletId, setPrimaryWalletId } = usePrimaryWalletId.usePrimaryWalletId();
    const { connectWallet, removeConnectedWalletsInfo, connectedWalletsInfo, getConnectedWalletById, connectedWallets, disconnectWallet, refreshConnectedWallet, } = useConnectWallet.useConnectWallet({
        authMode,
        clearPrimaryWalletId,
        enableVisitTrackingOnConnectOnly,
        environmentId,
        isBridgeFlow,
        onBeforeConnectSuccessConfirmation: eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onBeforeConnectSuccessConfirmation,
        onDisconnect: (connectedWalletsInfo, wallet) => handleDisconnectWallet.handleDisconnectWallet({
            bridgeChains,
            connectedWalletsInfo,
            eventsCallbacks,
            setBridgeChainsToConnect,
            wallet,
        }),
        primaryWalletId,
        setPrimaryWalletId,
        setShowAuthFlow,
        walletConnectorOptions,
    });
    React.useEffect(() => {
        const missingChains = getMissingChains.getMissingChains(bridgeChains, connectedWalletsInfo);
        setBridgeChainsToConnect(missingChains);
    }, [bridgeChains]);
    const { selectedWalletConnector, setSelectedWalletConnectorKey } = useSelectedWalletConnector.useSelectedWalletConnector({ walletConnectorOptions });
    //selected wallet to perform an action (become primary, unlink, etc)
    const [selectedWalletWithAction, setSelectedWalletWithAction] = React.useState(null);
    const removeAuthTokenAndUser = React.useCallback(() => {
        localStorage.LocalStorage.removeFromLS(localStorage$1.AUTH_TOKEN);
        removeUser();
    }, [removeUser]);
    // until user completes onboarding, jwt is only stored in onboardingOnlyJwt
    const authToken = (_e = getAuthToken.getAuthToken()) !== null && _e !== void 0 ? _e : onboardingOnlyJwt;
    useSetWalletConnectorVerifiedCredentials.useSetWalletConnectorVerifiedCredentials(authToken, walletConnectorOptions);
    const { didConnectedStateLoad, primaryWallet, showQrcodeModal, secondaryWallets, setPrimaryWallet, setShowQrcodeModal, wallets: linkedOrConnectedWallets, } = useWalletConnectors.useWalletConnectors({
        authMode,
        authToken: getAuthToken.getAuthToken() || onboardingOnlyJwt,
        canHaveMultipleWalletsConnected: multiWallet || isBridgeFlow,
        connectedWallets,
        multiWalletWidgetState,
        onboardingOnlyJwt,
        primaryWalletId,
        setDesktopUri,
        setMultiWalletWidgetState,
        setPrimaryWalletId,
        setQrcodeUri,
        user,
        walletConnectorOptions,
    });
    const walletConnectors = linkedOrConnectedWallets.map((wallet) => wallet.connector);
    const { sdkHasLoaded, setSdkHasLoaded } = useGlobalLoading.useGlobalLoading({
        authMode,
        connectedInfo: connectedWalletsInfo[0],
        connectedWallets,
        primaryWallet,
        projectSettings,
        user,
        walletBook: walletBook$1,
    });
    const isRenderingEmbeddedAuthFlow = React.useRef(false);
    const setShowAuthFlowWithInit = useSetShowAuthFlowWithInit.useSetShowAuthFlowWithInit({
        isMultiWalletEnabled: multiWallet,
        isRenderingEmbeddedAuthFlow,
        setShowAuthFlow,
        user,
        walletConnectorOptions,
    });
    const { getNameService, removeConnectedNameService } = useNameService.useNameService({
        authToken,
        currentWallet: primaryWallet !== null && primaryWallet !== void 0 ? primaryWallet : connectedWallets[0],
    });
    const { clearAllWalletConnectSessions, clearOphanedWalletConnectSessions } = useClearWalletConnectSessions.useClearWalletConnectSessions({
        connectors: walletConnectors,
    });
    React.useEffect(clearOphanedWalletConnectSessions, [
        clearOphanedWalletConnectSessions,
    ]);
    const handleLogOut = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _j, _k;
        setSdkHasLoaded(false);
        clearAllWalletConnectSessions();
        setBridgeChainsToConnect(bridgeChains);
        setShowDynamicUserProfile(false);
        setShowBridgeWidget(false);
        localStorage.LocalStorage.removeFromLS(localStorage$1.WALLET_PICKER_SEARCH_KEY);
        if (!toolkitEnabled) {
            localStorage.LocalStorage.removeFromLS(localStorage$1.IS_MULTI_WALLET_ENABLED);
        }
        const jwt = getAuthToken.getAuthToken();
        if (jwt && user) {
            // do not await this async call - just fire and forget
            api.revokeSession({ environmentId, sessionId: user.sessionId }, jwt);
        }
        for (const connector of walletConnectors) {
            yield connector.endSession();
        }
        for (const connectedWallet of connectedWallets)
            yield connectedWallet.connector.endSession();
        // Necessary when user logs out in user data collection view
        // Dont require flag to be set though
        if (isVerificationInProgress)
            setIsVerificationInProgress(false);
        setLegacyIsVerifying(false);
        setAuthMode(initialAuthenticationMode);
        setShowAuthFlow(false);
        setMultiWalletWidgetState('idle');
        removeAuthTokenAndUser();
        removeLsSettings();
        handleRemoveLsNetworks();
        setOnboardingOnlyJwt(undefined);
        removeConnectedWalletsInfo();
        removeIsFullyConnected();
        clearPrimaryWalletId();
        removeConnectedNameService();
        for (const connectedWallet of connectedWallets) {
            (_j = eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onDisconnect) === null || _j === void 0 ? void 0 : _j.call(eventsCallbacks, {
                wallet: connectedWallet,
                walletConnector: connectedWallet === null || connectedWallet === void 0 ? void 0 : connectedWallet.connector,
            });
        }
        (_k = eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onLogout) === null || _k === void 0 ? void 0 : _k.call(eventsCallbacks, user);
        internalEventsRef.current.emit('logout');
    }), [
        setSdkHasLoaded,
        clearAllWalletConnectSessions,
        bridgeChains,
        toolkitEnabled,
        user,
        isVerificationInProgress,
        setIsVerificationInProgress,
        setAuthMode,
        initialAuthenticationMode,
        setMultiWalletWidgetState,
        removeAuthTokenAndUser,
        removeLsSettings,
        handleRemoveLsNetworks,
        removeConnectedWalletsInfo,
        removeIsFullyConnected,
        clearPrimaryWalletId,
        removeConnectedNameService,
        eventsCallbacks,
        environmentId,
        walletConnectors,
        connectedWallets,
    ]);
    useEventListener.useEventListener('logOut', handleLogOut);
    let wcVersion;
    if (projectSettings) {
        wcVersion =
            ((_g = (_f = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _f === void 0 ? void 0 : _f.walletConnect) === null || _g === void 0 ? void 0 : _g.v2Enabled) && !walletConnectV1Bridge
                ? 2
                : 1;
    }
    useValidateSession.useValidateSession({
        authToken,
        handleLogOut,
        user,
        walletConnectV1Bridge,
        walletConnectors,
        wcVersion,
    });
    const handleUnlinkWallet = useHandleUnlinkWallet.useHandleUnlinkWallet({
        environmentId,
        eventsCallbacks,
        primaryWalletId,
        secondaryWallets,
        setUser,
        user,
        verifiedCredentials: (user === null || user === void 0 ? void 0 : user.verifiedCredentials) || [],
    });
    const { loadingNetwork, network, setNetwork } = useWalletEventListeners.useWalletEventListeners({
        authMode,
        handleLogOut,
        multiWallet,
        multiWalletWidgetState,
        primaryWallet,
        refreshConnectedWallet,
        secondaryWallets,
        selectedWalletConnector,
        selectedWalletWithAction,
        setMultiWalletWidgetState,
        setPrimaryWalletId,
        setSelectedWalletConnectorKey,
        setSelectedWalletWithAction,
        user,
    });
    const { walletsForChainsMap } = useFetchWalletsForChainsMap.useFetchWalletsForChainsMap(newToWeb3WalletChainMap);
    const rpcProviders = useRpcProviders.useRpcProviders({
        networkConfigurations: serverNetworkConfigurations,
    });
    React.useEffect(() => {
        helpers.initExpirationTime(handleLogOut);
    }, [handleLogOut]);
    useCustomerAuthFlowCallbacks.useCustomerAuthFlowCallbacks({ eventsCallbacks, showAuthFlow });
    const onEmailVerificationFailure = (email) => {
        var _a;
        (_a = eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onEmailVerificationFailure) === null || _a === void 0 ? void 0 : _a.call(eventsCallbacks, email);
        internalEventsRef.current.emit('emailVerificationResult', false, email);
    };
    const onEmailVerificationSuccess = (email) => {
        var _a;
        (_a = eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onEmailVerificationSuccess) === null || _a === void 0 ? void 0 : _a.call(eventsCallbacks, email);
        internalEventsRef.current.emit('emailVerificationResult', true, email);
    };
    const { setCallback } = useCustomerCallbacks.useCustomerCallbacks({
        authMode,
        callbacks: {
            onAuthSuccess: eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onAuthSuccess,
            onConnect: eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onConnect,
            onEmailVerificationFailure,
            onEmailVerificationSuccess,
            onEmbeddedWalletCreated: eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onEmbeddedWalletCreated,
            onLinkSuccess: eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onLinkSuccess,
            onUserProfileUpdate: eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onUserProfileUpdate,
        },
        handleLogOut,
        isAuthenticated,
        primaryWallet,
        secondaryWallets,
        setIsVerificationInProgress,
        user,
    });
    const sendWagmiSettings = React.useCallback(() => (settings) => {
        const { dynamicWagmiSettings } = settings;
        if (dynamicWagmiSettings) {
            api.sendDynamicProps(environmentId, {
                dynamicWagmiSettings: { dynamicWagmiSettings },
            });
        }
    }, [environmentId]);
    const clearStatesOnBackClick = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        setDesktopUri('');
        // Clear verification flag but dont require it to be set
        if (isVerificationInProgress)
            setIsVerificationInProgress(false);
        setLegacyIsVerifying(false);
        if (!user) {
            clearAllWalletConnectSessions();
        }
        setMultiWalletWidgetState('idle');
        if (authMode !== 'connect-only') {
            removeConnectedWalletsInfo();
        }
        if (!localStorage.LocalStorage.getFromLS(localStorage$1.AUTH_USER)) {
            localStorage.LocalStorage.removeFromLS(localStorage$1.AUTH_TOKEN);
        }
        if (localStorage.LocalStorage.getFromLS(localStorage$1.WALLET_PICKER_SEARCH_KEY)) {
            localStorage.LocalStorage.removeFromLS(localStorage$1.WALLET_PICKER_SEARCH_KEY);
        }
        if (selectedWalletConnector &&
            (!primaryWallet ||
                !isSameWalletName.isSameWalletName(primaryWallet.connector.name, selectedWalletConnector.name))) {
            yield (selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.endSession());
        }
    }), [
        isVerificationInProgress,
        setIsVerificationInProgress,
        user,
        setMultiWalletWidgetState,
        authMode,
        selectedWalletConnector,
        primaryWallet,
        clearAllWalletConnectSessions,
        removeConnectedWalletsInfo,
    ]);
    const { showPasskeyCreatedSuccess, setShowPasskeyCreatedSuccess } = useShowPasskeyCreateSuccess.useShowPasskeyCreateSuccess();
    const value = React.useMemo(() => {
        var _a, _b, _c;
        return ({
            accessDeniedButton,
            accessDeniedMessagePrimary,
            accessDeniedMessageSecondary,
            accountSwitchState,
            appLogoUrl,
            appName,
            authMode,
            authToken: getAuthToken.getAuthToken(),
            authorizationViewDisplayOrder,
            awaitingSignatureState,
            bridgeChains,
            bridgeChainsToConnect,
            clearStatesOnBackClick,
            connectWallet,
            connectedWallets,
            consumeNonce,
            cssOverrides,
            customPrivacyPolicy,
            customTermsOfServices,
            debugError,
            decodedAuthToken: decodeJwt.decodeJwt(getAuthToken.getAuthToken()),
            decodedOnboardingOnlyToken: decodeJwt.decodeJwt(onboardingOnlyJwt),
            defaultNumberOfWalletsToShow,
            desktopUri,
            disconnectWallet,
            displaySiweStatement,
            environmentId,
            eventsCallbacks,
            getConnectedWalletById,
            getNameService,
            handleLogOut,
            handleUnlinkWallet: authMode === 'connect-only' ? disconnectWallet : handleUnlinkWallet,
            i18nSDKInstance,
            internalEvents: internalEventsRef,
            internalSetShowAuthFlow: setShowAuthFlow,
            isAuthenticated,
            isBridgeFlow,
            isFullyConnected,
            isProjectSettingsLoading,
            isRenderingEmbeddedAuthFlow,
            isSingleWalletAccount,
            isVerificationInProgress,
            legacyIsVerifying,
            linkedWallets: authMode === 'connect-only' || !user ? [] : linkedOrConnectedWallets,
            loadingNetwork,
            locale: {
                changeLanguage: (_a = locale.Locale.getInstance()) === null || _a === void 0 ? void 0 : _a.changeLanguage,
            },
            loginWithEmail,
            multiWallet,
            multiWalletWidgetState,
            network,
            networkConfigurations: serverNetworkConfigurations,
            newToWeb3WalletChainMap: walletsForChainsMap,
            notInTheListImageUrl: imageUserNotInAccessList || notInTheListImageUrl,
            onboardingImageUrl: imageUserInAccessList || onboardingImageUrl,
            onboardingOnlyJwt,
            policiesConsentInnerComponent,
            primaryWallet,
            primaryWalletId,
            privacyPolicyUrl,
            projectSettings,
            qrcodeUri,
            removeConnectedWalletsInfo,
            rpcProviders,
            sdkHasLoaded,
            secondaryWallets,
            selectedWalletConnector,
            selectedWalletWithAction,
            sendWagmiSettings,
            setAuthMode,
            setAuthorizationViewDisplayOrder,
            setBridgeChainsToConnect,
            setCallback,
            setDesktopUri,
            setIsFullyConnected,
            setIsSingleWalletAccount,
            setIsVerificationInProgress,
            setLegacyIsVerifying,
            setLogInWithEmail,
            setMultiWallet,
            setMultiWalletWidgetState,
            setNetwork,
            setOnboardingOnlyJwt,
            setPrimaryWallet,
            setPrimaryWalletId,
            setQrcodeUri,
            setSdkHasLoaded,
            setSelectedWalletConnectorKey,
            setSelectedWalletWithAction,
            setShowAuthFlow: setShowAuthFlowWithInit,
            setShowBridgeWidget,
            setShowDynamicUserProfile,
            setShowPasskeyCreatedSuccess,
            setShowQrcodeModal,
            setShowWidgetStatePopup,
            setUser,
            shadowDOMEnabled,
            showAuthFlow,
            showBridgeWidget,
            showDynamicUserProfile,
            showLockedWalletView,
            showPasskeyCreatedSuccess,
            showQrcodeModal,
            showWidgetStatePopup,
            signWithEmailWalletName,
            siweStatement,
            socialMediaIconUrl: ((_b = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general) === null || _b === void 0 ? void 0 : _b.supportUrls) || socialMediaIconUrl,
            socialMediaLinkText,
            socialMediaUrl,
            socialProvidersFilter,
            termsOfServiceUrl,
            theme,
            toolkitEnabled,
            user,
            walletConnector: (_c = primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector) !== null && _c !== void 0 ? _c : null,
            walletConnectorOptions,
            walletUiUtils,
            walletsFilter,
        });
    }, [
        accessDeniedButton,
        accessDeniedMessagePrimary,
        accessDeniedMessageSecondary,
        accountSwitchState,
        appLogoUrl,
        appName,
        authMode,
        authorizationViewDisplayOrder,
        awaitingSignatureState,
        bridgeChains,
        bridgeChainsToConnect,
        clearStatesOnBackClick,
        connectWallet,
        connectedWallets,
        consumeNonce,
        cssOverrides,
        customPrivacyPolicy,
        customTermsOfServices,
        debugError,
        onboardingOnlyJwt,
        defaultNumberOfWalletsToShow,
        desktopUri,
        disconnectWallet,
        displaySiweStatement,
        environmentId,
        eventsCallbacks,
        getConnectedWalletById,
        getNameService,
        handleLogOut,
        handleUnlinkWallet,
        i18nSDKInstance,
        isAuthenticated,
        isBridgeFlow,
        isFullyConnected,
        isProjectSettingsLoading,
        isSingleWalletAccount,
        isVerificationInProgress,
        legacyIsVerifying,
        user,
        linkedOrConnectedWallets,
        loadingNetwork,
        loginWithEmail,
        multiWallet,
        multiWalletWidgetState,
        network,
        serverNetworkConfigurations,
        walletsForChainsMap,
        imageUserNotInAccessList,
        notInTheListImageUrl,
        imageUserInAccessList,
        onboardingImageUrl,
        policiesConsentInnerComponent,
        primaryWallet,
        primaryWalletId,
        privacyPolicyUrl,
        projectSettings,
        qrcodeUri,
        removeConnectedWalletsInfo,
        rpcProviders,
        sdkHasLoaded,
        secondaryWallets,
        selectedWalletConnector,
        selectedWalletWithAction,
        sendWagmiSettings,
        setAuthMode,
        setAuthorizationViewDisplayOrder,
        setCallback,
        setIsFullyConnected,
        setIsVerificationInProgress,
        setLogInWithEmail,
        setMultiWallet,
        setMultiWalletWidgetState,
        setNetwork,
        setPrimaryWallet,
        setPrimaryWalletId,
        setSdkHasLoaded,
        setSelectedWalletConnectorKey,
        setShowAuthFlowWithInit,
        setShowPasskeyCreatedSuccess,
        setShowQrcodeModal,
        setUser,
        shadowDOMEnabled,
        showAuthFlow,
        showBridgeWidget,
        showDynamicUserProfile,
        showLockedWalletView,
        showPasskeyCreatedSuccess,
        showQrcodeModal,
        showWidgetStatePopup,
        signWithEmailWalletName,
        siweStatement,
        socialMediaIconUrl,
        socialMediaLinkText,
        socialMediaUrl,
        socialProvidersFilter,
        termsOfServiceUrl,
        theme,
        toolkitEnabled,
        walletUiUtils,
        walletConnectorOptions,
        walletsFilter,
    ]);
    React.useEffect(() => {
        const addPrefetch = (attr) => {
            if (!document.head.querySelector(`#${attr.id}`)) {
                const element = document.createElement('link');
                element.setAttribute('id', attr.id);
                element.setAttribute('rel', 'prefetch');
                element.setAttribute('href', attr.href);
                element.setAttribute('as', attr.as);
                element.setAttribute('type', attr.type);
                document.head.insertAdjacentElement('beforeend', element);
            }
        };
        addPrefetch({
            as: 'image',
            href: iconic.ICONIC_SPRITE_URL,
            id: 'sprite',
            type: 'image/svg+xml',
        });
        addPrefetch({
            as: 'fetch',
            href: walletBook.getWalletBookCdnUrl(),
            id: 'wallet-book',
            type: 'application/json',
        });
    }, []);
    // DYN-1140 - Opens Widget when multiWalletWidgetState changes
    React.useEffect(() => {
        // If statement to secure SingleWallet widget
        if (!multiWallet && multiWalletWidgetState !== 'awaiting_account_switch') {
            return;
        }
        // We need to make sure that the user is logged in so that we do not try to display the widget before authorization
        if (user && multiWalletWidgetState !== 'idle' && !showDynamicUserProfile) {
            setShowDynamicUserProfile(true);
        }
    }, [multiWallet, multiWalletWidgetState, showDynamicUserProfile, user]);
    return (jsxRuntime.jsx(reactI18next.I18nextProvider, { i18n: i18nSDKInstance, children: jsxRuntime.jsx(DynamicContext.Provider, { value: value, children: jsxRuntime.jsx(walletBook.WalletBookContextProvider, { walletBook: walletBook$1, children: jsxRuntime.jsx(ThemeContext.ThemeContextProvider, { customerTheme: parseTheme.parseTheme(theme, ((_h = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.design) === null || _h === void 0 ? void 0 : _h.modal) || undefined), designSettings: projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.design, children: jsxRuntime.jsx(LoadingContext.LoadingContextProvider, { children: jsxRuntime.jsx(ErrorContext.ErrorContextProvider, { children: jsxRuntime.jsxs(ViewContext.ViewContextProvider, { initialView: helpers.getInitialView({
                                    connectedWallets,
                                    isAuthenticated,
                                    isBridgeFlow,
                                    isFullyConnected,
                                    isMultiWalletEnabled: multiWallet,
                                }), internalEvents: internalEventsRef, children: [enableForcedNetworkValidation && jsxRuntime.jsx(UseNetworkValidation.UseNetworkValidation, {}), jsxRuntime.jsx(CaptchaContext.CaptchaContextProvider, { children: jsxRuntime.jsx(AccountExistsContext.AccountExistsContextProvider, { children: jsxRuntime.jsx(WalletContext.WalletContextProvider, { canSync: didConnectedStateLoad, children: jsxRuntime.jsx(QrCodeContext.QrCodeContextProvider, { children: jsxRuntime.jsx(EmailVerificationContext.EmailVerificationContextProvider, { children: jsxRuntime.jsx(DynamicWidgetContext.DynamicWidgetContextProvider, { children: jsxRuntime.jsx(DynamicBridgeWidgetContext.DynamicBridgeWidgetContextProvider, { children: jsxRuntime.jsx(FundingContext.FundingContextProvider, { children: jsxRuntime.jsx(AccessDeniedContext.AccessDeniedContextProvider, { children: jsxRuntime.jsx(SendBalanceContext.SendBalanceContextProvider, { children: jsxRuntime.jsx(WalletGroupContext.WalletGroupContextProvider, { children: jsxRuntime.jsxs(UserFieldEditorContext.UserFieldEditorContextProvider, { children: [jsxRuntime.jsx(app.DynamicAuthFlow, {}), jsxRuntime.jsx(Toolkit.Toolkit, {}), jsxRuntime.jsx(FundingWidget.FundingWidget, {}), jsxRuntime.jsx(SyncPasskeyFlow.SyncPasskeyFlow, {}), confirmationModal, children] }) }) }) }) }) }) }) }) }) }) }) })] }) }) }) }) }) }) }));
};
/** The context provider you need to have access too all of Dynamic's hooks */
const DynamicContextProvider = (props) => (jsxRuntime.jsx(UserWalletsContext.UserWalletsProvider, { children: jsxRuntime.jsx(InnerDynamicContextProvider, Object.assign({}, props)) }));

exports.DynamicContext = DynamicContext;
exports.DynamicContextProvider = DynamicContextProvider;
exports.InnerDynamicContextProvider = InnerDynamicContextProvider;
exports.PUBLIC_PROJECT_LIVE_ENVIRONMENT_ID = PUBLIC_PROJECT_LIVE_ENVIRONMENT_ID;
