import { useContext } from 'react';
import { DynamicContext } from './DynamicContext.js';

// This is external context hook which is exposed to customers
const useDynamicContext = () => {
    const context = useContext(DynamicContext);
    if (context === undefined) {
        throw new Error('useDynamicContext must be used within a DynamicContextProvider');
    }
    const { accountSwitchState, authMode, authToken, awaitingSignatureState, getNameService, handleLogOut, handleUnlinkWallet, isAuthenticated, isFullyConnected, isVerificationInProgress, loadingNetwork, locale, loginWithEmail, multiWalletWidgetState, network, networkConfigurations, qrcodeUri, rpcProviders, sdkHasLoaded, setLogInWithEmail, setMultiWalletWidgetState, setNetwork, setPrimaryWallet, setShowAuthFlow, setShowDynamicUserProfile, setShowQrcodeModal, shadowDOMEnabled, showAuthFlow, showQrcodeModal, user, walletConnector, walletConnectorOptions, bridgeChains, bridgeChainsToConnect, primaryWallet, setShowBridgeWidget, sendWagmiSettings, } = context;
    return {
        accountSwitchState,
        authMode,
        authToken,
        awaitingSignatureState,
        bridgeChains,
        bridgeChainsToConnect,
        getNameService,
        handleLogOut,
        handleUnlinkWallet,
        isAuthenticated,
        isFullyConnected,
        isVerificationInProgress,
        loadingNetwork,
        locale,
        loginWithEmail,
        multiWalletWidgetState,
        network,
        networkConfigurations,
        primaryWallet,
        qrcodeUri,
        rpcProviders,
        sdkHasLoaded,
        sendWagmiSettings,
        setLogInWithEmail,
        setMultiWalletWidgetState,
        setNetwork,
        setPrimaryWallet,
        setShowAuthFlow,
        setShowBridgeWidget,
        setShowDynamicUserProfile,
        setShowQrcodeModal,
        shadowDOMEnabled,
        showAuthFlow,
        showQrcodeModal,
        user,
        walletConnector,
        walletConnectorOptions,
    };
};

export { useDynamicContext };
