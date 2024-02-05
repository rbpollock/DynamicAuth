import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { createContext, useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { I18nextProvider } from 'react-i18next';
import { ICONIC_SPRITE_URL } from '@dynamic-labs/iconic';
import { MissingEnvironmentIdError } from '@dynamic-labs/utils';
import { useWalletBookCdn, getWalletBookCdnUrl, WalletBookContextProvider } from '@dynamic-labs/wallet-book';
import { logger as logger$1 } from '@dynamic-labs/wallet-connector-core';
import { DynamicAuthFlow } from '../../app.js';
import { CaptchaContextProvider } from '../CaptchaContext/CaptchaContext.js';
import { ErrorContextProvider } from '../ErrorContext/ErrorContext.js';
import { ViewContextProvider } from '../ViewContext/ViewContext.js';
import { decodeJwt } from '../../shared/utils/functions/decodeJwt/decodeJwt.js';
import { logger } from '../../shared/logger.js';
import { IS_FULLY_CONNECTED, AUTH_TOKEN, AUTH_USER, AUTH_MODE, WALLET_PICKER_SEARCH_KEY, IS_MULTI_WALLET_ENABLED } from '../../utils/constants/localStorage.js';
import '../../utils/constants/colors.js';
import { DEFAULT_NUMBER_OF_WALLETS_TO_SHOW } from '../../utils/constants/values.js';
import { LocalStorage } from '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import { useGlobalLoading } from '../../shared/utils/hooks/useGlobalLoading/useGlobalLoading.js';
import { useLocalStorage } from '../../shared/utils/hooks/useLocalStorage/useLocalStorage.js';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getAuthToken } from '../../utils/functions/getAuthToken/getAuthToken.js';
import '@dynamic-labs/sdk-api';
import { AccessDeniedContextProvider } from '../AccessDeniedContext/AccessDeniedContext.js';
import { AccountExistsContextProvider } from '../AccountExistsContext/AccountExistsContext.js';
import { revokeSession, sendDynamicProps } from '../../data/api.js';
import { EmailVerificationContextProvider } from '../EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { isSameWalletName } from '../../utils/functions/isSameWalletName/isSameWalletName.js';
import { useEventListener } from '../../utils/hooks/useEventListener/useEventListener.js';
import { useFetchNonce } from '../../utils/hooks/useFetchNonce/useFetchNonce.js';
import { useFetchProjectSettings } from '../../utils/hooks/useFetchProjectSettings/useFetchProjectSettings.js';
import { ThemeContextProvider } from '../ThemeContext/ThemeContext.js';
import { useSetWalletConnectorVerifiedCredentials } from '../../utils/hooks/useSetWalletConnectorVerifiedCredentials/useSetWalletConnectorVerifiedCredentials.js';
import '@dynamic-labs/types';
import 'yup';
import '../MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import { UserFieldEditorContextProvider } from '../UserFieldEditorContext/UserFieldEditorContext.js';
import { useValidateSession } from '../../utils/hooks/useValidateSession/useValidateSession.js';
import { useWalletConnectorOptions } from '../../utils/hooks/useWalletConnectorOptions/useWalletConnectorOptions.js';
import { useWalletConnectors } from '../../utils/hooks/useWalletConnectors/useWalletConnectors.js';
import { useWalletUiUtils } from '../../utils/hooks/useWalletUiUtils/useWalletUiUtils.js';
import '../../components/Alert/Alert.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/IconButton/IconButton.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../../components/OverlayCard/OverlayCard.context.js';
import { SyncPasskeyFlow } from '../../components/SyncPasskeyFlow/SyncPasskeyFlow.js';
import { Toolkit } from '../../components/Toolkit/Toolkit.js';
import ApiEndpoint from '../../config/ApiEndpoint.js';
import { Locale } from '../../locale/locale.js';
import { getMissingChains } from '../../utils/functions/getMissingChains/getMissingChains.js';
import { parseTheme } from '../../utils/functions/parseTheme/parseTheme.js';
import { useMultiWalletWidgetState } from '../../utils/hooks/multiWallet/useMultiWalletWidgetState/useMultiWalletWidgetState.js';
import { useMultiWallet } from '../../utils/hooks/multiWallet/useMultiWallet/useMultiWallet.js';
import { useClearWalletConnectSessions } from '../../utils/hooks/useClearWalletConnectSessions/useClearWalletConnectSessions.js';
import { useConnectWallet } from '../../utils/hooks/useConnectWallet/useConnectWallet.js';
import { useProcessNetworkConfigurations } from '../../utils/hooks/useProcessNetworkConfigurations/useProcessNetworkConfigurations.js';
import { useFetchWalletsForChainsMap } from '../../utils/hooks/useFetchWalletsForChainsMap/useFetchWalletsForChainsMap.js';
import { useHandleUnlinkWallet } from '../../utils/hooks/useHandleUnlinkWallet/useHandleUnlinkWallet.js';
import { usePrimaryWalletId } from '../../utils/hooks/usePrimaryWalletId/usePrimaryWalletId.js';
import { useRpcProviders } from '../../utils/hooks/useRpcProviders/useRpcProviders.js';
import { useWalletEventListeners } from '../../utils/hooks/useWalletEventListeners/useWalletEventListeners.js';
import { DynamicBridgeWidgetContextProvider } from '../../widgets/DynamicBridgeWidget/context/DynamicBridgeWidgetContext/DynamicBridgeWidgetContext.js';
import { DynamicWidgetContextProvider } from '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetCard/DynamicWidgetCard.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '../FooterAnimationContext/index.js';
import '../SocialRedirectContext/SocialRedirectContext.js';
import { QrCodeContextProvider } from '../QrCodeContext/QrCodeContext.js';
import { WalletGroupContextProvider } from '../WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import { LoadingContextProvider } from '../LoadingContext/LoadingContext.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../views/WalletList/WalletList.js';
import '../../views/viewToComponentMap.js';
import { FundingWidget } from '../../widgets/FundingWidget/FundingWidget.js';
import { FundingContextProvider } from '../FundingContext/FundingContext.js';
import { SendBalanceContextProvider } from '../SendBalanceContext/SendBalanceContext.js';
import { UseNetworkValidation } from '../UseNetworkValidation/UseNetworkValidation.js';
import { UserWalletsProvider } from '../UserWalletsContext/UserWalletsContext.js';
import { WalletContextProvider } from '../WalletContext/WalletContext.js';
import { handleDisconnectWallet } from './handleDisconnectWallet/handleDisconnectWallet.js';
import { initExpirationTime, getInitialView } from './helpers.js';
import { useDisplayOrderState } from './hooks/useDisplayOrderState/useDisplayOrderState.js';
import { useEmailLoginState } from './hooks/useEmailLoginState/useEmailLoginState.js';
import { useNameService } from './hooks/useNameService/useNameService.js';
import { useSelectedWalletConnector } from './hooks/useSelectedWalletConnector/useSelectedWalletConnector.js';
import { useSetShowAuthFlowWithInit } from './hooks/useSetShowAuthFlowWithInit/useSetShowAuthFlowWithInit.js';
import { useVerificationInProgress } from './hooks/useVerificationInProgress/useVerificationInProgress.js';
import { useShowPasskeyCreateSuccess } from './hooks/useShowPasskeyCreateSuccess/useShowPasskeyCreateSuccess.js';
import { getInternalEvents } from './internalEvents/internalEvents.js';
import { useCustomerCallbacks } from './useCustomerCallbacks/useCustomerCallbacks.js';
import { useCustomerAuthFlowCallbacks } from './useCustomerCallbacks/useCustomerAuthFlowCallbacks.js';
import { validateAuthUser } from './validators.js';

const PUBLIC_PROJECT_LIVE_ENVIRONMENT_ID = '2762a57b-faa4-41ce-9f16-abff9300e2c9';
const EMPTY_INITIAL_USER = undefined;
const DynamicContext = createContext(undefined);
/** The context provider itself we only use internally */
const InnerDynamicContextProvider = ({ children, theme, settings, locale, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const { accessDeniedMessagePrimary, accessDeniedMessageSecondary, accessDeniedButton, apiBaseUrl, enableForcedNetworkValidation: enableForcedNetworkValidationProp = false, deepLinkPreference = 'native', bridgeChains, cssOverrides, defaultNumberOfWalletsToShow = DEFAULT_NUMBER_OF_WALLETS_TO_SHOW, flowNetwork, initialAuthenticationMode = 'connect-and-sign', debugError = false, displaySiweStatement = true, newToWeb3WalletChainMap, enableVisitTrackingOnConnectOnly = true, environmentId, localStorageSuffix, eventsCallbacks, evmNetworks, walletsFilter, logLevel = 'WARN', notInTheListImageUrl, onboardingImageUrl, policiesConsentInnerComponent, customPrivacyPolicy, privacyPolicyUrl, signWithEmailWalletName, socialMediaLinkText, socialMediaIconUrl, socialMediaUrl, customTermsOfServices, termsOfServiceUrl, toolkitEnabled, siweStatement, shadowDOMEnabled = true, walletConnectors: walletConnectorsProp, socialProvidersFilter, showLockedWalletView = false, walletConnectPreferredChains, walletConnectorExtensions, } = settings;
    let enableForcedNetworkValidation = enableForcedNetworkValidationProp;
    if (bridgeChains) {
        enableForcedNetworkValidation = true;
    }
    // The internalEventsRef is temporary and should be removed after QNTM-180 is done
    const internalEventsRef = useRef(getInternalEvents());
    let { walletConnectV1Bridge, appLogoUrl = 'https://demo.dynamic.xyz/assets/dynamic-logo.svg', appName = 'Dynamic Example', } = settings;
    if (!environmentId) {
        throw new MissingEnvironmentIdError();
    }
    logger.setLogLevel(logLevel);
    logger$1.setLogLevel(logLevel);
    if (environmentId === PUBLIC_PROJECT_LIVE_ENVIRONMENT_ID) {
        logger.warn(`WARNING: DYNAMIC is using a test environment ID ${environmentId}. Please sign up on https://app.dynamic.xyz/ to get your production environment ID.`);
    }
    ApiEndpoint.setBaseUrl((_a = process.env.DYNAMIC_API_BASE_URL) !== null && _a !== void 0 ? _a : apiBaseUrl);
    LocalStorage.setSuffix(localStorageSuffix);
    const i18nSDKInstance = Locale.setup(locale);
    const isAuthenticated = Boolean(getAuthToken());
    const isBridgeFlow = Boolean(bridgeChains);
    const [onboardingOnlyJwt, setOnboardingOnlyJwt] = useState(undefined);
    const [showAuthFlow, setShowAuthFlow] = useState(false);
    // state to track the full connectivity status of the individual's wallets.
    // Set to true once the predetermined number of wallets is connected.
    const [isFullyConnected, setIsFullyConnected, removeIsFullyConnected] = useLocalStorage(IS_FULLY_CONNECTED, false);
    const [bridgeChainsToConnect, setBridgeChainsToConnect] = useState(bridgeChains);
    // Allows clients to control widget flow without need to click on AccountControl
    const [showDynamicUserProfile, setShowDynamicUserProfile] = useState(false);
    // Alows clients to control the Bridget Widget flow without need to click on Bridge Widget
    const [showBridgeWidget, setShowBridgeWidget] = useState(false);
    const [isSingleWalletAccount, setIsSingleWalletAccount] = useState(false);
    const [user, setUser, removeUser] = useLocalStorage(AUTH_USER, EMPTY_INITIAL_USER, validateAuthUser, [AUTH_TOKEN]);
    const { consumeNonce } = useFetchNonce(environmentId);
    const [qrcodeUri, setQrcodeUri] = useState('');
    const [desktopUri, setDesktopUri] = useState('');
    const [multiWalletWidgetState, setMultiWalletWidgetState, { awaiting_account_switch: [accountSwitchState], awaiting_signature: [awaitingSignatureState], },] = useMultiWalletWidgetState();
    const { projectSettings, isLoading: isProjectSettingsLoading, removeLsSettings, } = useFetchProjectSettings({
        authToken: getAuthToken(),
        dynamicContextProps: { settings },
        environmentId,
    });
    const { multiWallet, setMultiWallet } = useMultiWallet(toolkitEnabled || false, (_b = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _b === void 0 ? void 0 : _b.multiWallet);
    // for demo proposes when running single wallet
    // it should not use bridge even having walletConnectV1Bridge set on settings
    // but v2 if enabled
    if (toolkitEnabled &&
        ((_d = (_c = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _c === void 0 ? void 0 : _c.walletConnect) === null || _d === void 0 ? void 0 : _d.v2Enabled) &&
        !multiWallet) {
        walletConnectV1Bridge = undefined;
    }
    // ensures that when user comes back to site and primary wallet is out of sync, we don't show widget popup
    const [showWidgetStatePopup, setShowWidgetStatePopup] = useState(!multiWallet);
    // Used inside useVerifyOnAwaitingSignature. Is legacy and should be removed asap
    const [legacyIsVerifying, setLegacyIsVerifying] = useState(false);
    // Set to true when a customer starts any auth verification process and set to false when it ends
    const [isVerificationInProgress, setIsVerificationInProgress] = useVerificationInProgress();
    const walletBook = useWalletBookCdn();
    const { configurations: serverNetworkConfigurations, handleRemoveLsNetworks, } = useProcessNetworkConfigurations({
        authToken: getAuthToken(),
        environmentId,
        evmNetworks,
        projectSettings,
    });
    const { imageUserInAccessList, imageUserNotInAccessList, displayName, appLogo, } = (projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general) || {};
    appLogoUrl = appLogo || appLogoUrl;
    appName = displayName || appName;
    const [loginWithEmail, setLogInWithEmail] = useEmailLoginState((projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) || [], user);
    const [authorizationViewDisplayOrder, setAuthorizationViewDisplayOrder] = useDisplayOrderState(projectSettings);
    const [confirmationModal, walletUiUtils] = useWalletUiUtils({
        appLogoUrl,
        appName,
        getAppOrigin: () => window.location.origin,
    });
    const { walletConnectorOptions } = useWalletConnectorOptions({
        appLogoUrl,
        appName,
        deepLinkPreference,
        flowNetwork,
        networkConfigurations: serverNetworkConfigurations,
        projectSettings,
        walletBook,
        walletConnectPreferredChains,
        walletConnectV1Bridge,
        walletConnectorExtensions,
        walletConnectorsProp,
        walletUiUtils,
    });
    const [authMode, setAuthMode] = useLocalStorage(AUTH_MODE, initialAuthenticationMode);
    const { clearPrimaryWalletId, primaryWalletId, setPrimaryWalletId } = usePrimaryWalletId();
    const { connectWallet, removeConnectedWalletsInfo, connectedWalletsInfo, getConnectedWalletById, connectedWallets, disconnectWallet, refreshConnectedWallet, } = useConnectWallet({
        authMode,
        clearPrimaryWalletId,
        enableVisitTrackingOnConnectOnly,
        environmentId,
        isBridgeFlow,
        onBeforeConnectSuccessConfirmation: eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onBeforeConnectSuccessConfirmation,
        onDisconnect: (connectedWalletsInfo, wallet) => handleDisconnectWallet({
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
    useEffect(() => {
        const missingChains = getMissingChains(bridgeChains, connectedWalletsInfo);
        setBridgeChainsToConnect(missingChains);
    }, [bridgeChains]);
    const { selectedWalletConnector, setSelectedWalletConnectorKey } = useSelectedWalletConnector({ walletConnectorOptions });
    //selected wallet to perform an action (become primary, unlink, etc)
    const [selectedWalletWithAction, setSelectedWalletWithAction] = useState(null);
    const removeAuthTokenAndUser = useCallback(() => {
        LocalStorage.removeFromLS(AUTH_TOKEN);
        removeUser();
    }, [removeUser]);
    // until user completes onboarding, jwt is only stored in onboardingOnlyJwt
    const authToken = (_e = getAuthToken()) !== null && _e !== void 0 ? _e : onboardingOnlyJwt;
    useSetWalletConnectorVerifiedCredentials(authToken, walletConnectorOptions);
    const { didConnectedStateLoad, primaryWallet, showQrcodeModal, secondaryWallets, setPrimaryWallet, setShowQrcodeModal, wallets: linkedOrConnectedWallets, } = useWalletConnectors({
        authMode,
        authToken: getAuthToken() || onboardingOnlyJwt,
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
    const { sdkHasLoaded, setSdkHasLoaded } = useGlobalLoading({
        authMode,
        connectedInfo: connectedWalletsInfo[0],
        connectedWallets,
        primaryWallet,
        projectSettings,
        user,
        walletBook,
    });
    const isRenderingEmbeddedAuthFlow = useRef(false);
    const setShowAuthFlowWithInit = useSetShowAuthFlowWithInit({
        isMultiWalletEnabled: multiWallet,
        isRenderingEmbeddedAuthFlow,
        setShowAuthFlow,
        user,
        walletConnectorOptions,
    });
    const { getNameService, removeConnectedNameService } = useNameService({
        authToken,
        currentWallet: primaryWallet !== null && primaryWallet !== void 0 ? primaryWallet : connectedWallets[0],
    });
    const { clearAllWalletConnectSessions, clearOphanedWalletConnectSessions } = useClearWalletConnectSessions({
        connectors: walletConnectors,
    });
    useEffect(clearOphanedWalletConnectSessions, [
        clearOphanedWalletConnectSessions,
    ]);
    const handleLogOut = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        var _j, _k;
        setSdkHasLoaded(false);
        clearAllWalletConnectSessions();
        setBridgeChainsToConnect(bridgeChains);
        setShowDynamicUserProfile(false);
        setShowBridgeWidget(false);
        LocalStorage.removeFromLS(WALLET_PICKER_SEARCH_KEY);
        if (!toolkitEnabled) {
            LocalStorage.removeFromLS(IS_MULTI_WALLET_ENABLED);
        }
        const jwt = getAuthToken();
        if (jwt && user) {
            // do not await this async call - just fire and forget
            revokeSession({ environmentId, sessionId: user.sessionId }, jwt);
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
    useEventListener('logOut', handleLogOut);
    let wcVersion;
    if (projectSettings) {
        wcVersion =
            ((_g = (_f = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _f === void 0 ? void 0 : _f.walletConnect) === null || _g === void 0 ? void 0 : _g.v2Enabled) && !walletConnectV1Bridge
                ? 2
                : 1;
    }
    useValidateSession({
        authToken,
        handleLogOut,
        user,
        walletConnectV1Bridge,
        walletConnectors,
        wcVersion,
    });
    const handleUnlinkWallet = useHandleUnlinkWallet({
        environmentId,
        eventsCallbacks,
        primaryWalletId,
        secondaryWallets,
        setUser,
        user,
        verifiedCredentials: (user === null || user === void 0 ? void 0 : user.verifiedCredentials) || [],
    });
    const { loadingNetwork, network, setNetwork } = useWalletEventListeners({
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
    const { walletsForChainsMap } = useFetchWalletsForChainsMap(newToWeb3WalletChainMap);
    const rpcProviders = useRpcProviders({
        networkConfigurations: serverNetworkConfigurations,
    });
    useEffect(() => {
        initExpirationTime(handleLogOut);
    }, [handleLogOut]);
    useCustomerAuthFlowCallbacks({ eventsCallbacks, showAuthFlow });
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
    const { setCallback } = useCustomerCallbacks({
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
    const sendWagmiSettings = useCallback(() => (settings) => {
        const { dynamicWagmiSettings } = settings;
        if (dynamicWagmiSettings) {
            sendDynamicProps(environmentId, {
                dynamicWagmiSettings: { dynamicWagmiSettings },
            });
        }
    }, [environmentId]);
    const clearStatesOnBackClick = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
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
        if (!LocalStorage.getFromLS(AUTH_USER)) {
            LocalStorage.removeFromLS(AUTH_TOKEN);
        }
        if (LocalStorage.getFromLS(WALLET_PICKER_SEARCH_KEY)) {
            LocalStorage.removeFromLS(WALLET_PICKER_SEARCH_KEY);
        }
        if (selectedWalletConnector &&
            (!primaryWallet ||
                !isSameWalletName(primaryWallet.connector.name, selectedWalletConnector.name))) {
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
    const { showPasskeyCreatedSuccess, setShowPasskeyCreatedSuccess } = useShowPasskeyCreateSuccess();
    const value = useMemo(() => {
        var _a, _b, _c;
        return ({
            accessDeniedButton,
            accessDeniedMessagePrimary,
            accessDeniedMessageSecondary,
            accountSwitchState,
            appLogoUrl,
            appName,
            authMode,
            authToken: getAuthToken(),
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
            decodedAuthToken: decodeJwt(getAuthToken()),
            decodedOnboardingOnlyToken: decodeJwt(onboardingOnlyJwt),
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
                changeLanguage: (_a = Locale.getInstance()) === null || _a === void 0 ? void 0 : _a.changeLanguage,
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
    useEffect(() => {
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
            href: ICONIC_SPRITE_URL,
            id: 'sprite',
            type: 'image/svg+xml',
        });
        addPrefetch({
            as: 'fetch',
            href: getWalletBookCdnUrl(),
            id: 'wallet-book',
            type: 'application/json',
        });
    }, []);
    // DYN-1140 - Opens Widget when multiWalletWidgetState changes
    useEffect(() => {
        // If statement to secure SingleWallet widget
        if (!multiWallet && multiWalletWidgetState !== 'awaiting_account_switch') {
            return;
        }
        // We need to make sure that the user is logged in so that we do not try to display the widget before authorization
        if (user && multiWalletWidgetState !== 'idle' && !showDynamicUserProfile) {
            setShowDynamicUserProfile(true);
        }
    }, [multiWallet, multiWalletWidgetState, showDynamicUserProfile, user]);
    return (jsx(I18nextProvider, { i18n: i18nSDKInstance, children: jsx(DynamicContext.Provider, { value: value, children: jsx(WalletBookContextProvider, { walletBook: walletBook, children: jsx(ThemeContextProvider, { customerTheme: parseTheme(theme, ((_h = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.design) === null || _h === void 0 ? void 0 : _h.modal) || undefined), designSettings: projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.design, children: jsx(LoadingContextProvider, { children: jsx(ErrorContextProvider, { children: jsxs(ViewContextProvider, { initialView: getInitialView({
                                    connectedWallets,
                                    isAuthenticated,
                                    isBridgeFlow,
                                    isFullyConnected,
                                    isMultiWalletEnabled: multiWallet,
                                }), internalEvents: internalEventsRef, children: [enableForcedNetworkValidation && jsx(UseNetworkValidation, {}), jsx(CaptchaContextProvider, { children: jsx(AccountExistsContextProvider, { children: jsx(WalletContextProvider, { canSync: didConnectedStateLoad, children: jsx(QrCodeContextProvider, { children: jsx(EmailVerificationContextProvider, { children: jsx(DynamicWidgetContextProvider, { children: jsx(DynamicBridgeWidgetContextProvider, { children: jsx(FundingContextProvider, { children: jsx(AccessDeniedContextProvider, { children: jsx(SendBalanceContextProvider, { children: jsx(WalletGroupContextProvider, { children: jsxs(UserFieldEditorContextProvider, { children: [jsx(DynamicAuthFlow, {}), jsx(Toolkit, {}), jsx(FundingWidget, {}), jsx(SyncPasskeyFlow, {}), confirmationModal, children] }) }) }) }) }) }) }) }) }) }) }) })] }) }) }) }) }) }) }));
};
/** The context provider you need to have access too all of Dynamic's hooks */
const DynamicContextProvider = (props) => (jsx(UserWalletsProvider, { children: jsx(InnerDynamicContextProvider, Object.assign({}, props)) }));

export { DynamicContext, DynamicContextProvider, InnerDynamicContextProvider, PUBLIC_PROJECT_LIVE_ENVIRONMENT_ID };
