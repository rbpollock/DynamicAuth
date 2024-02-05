import { Dispatch, MutableRefObject, ReactNode, SetStateAction } from 'react';
import { DynamicJwt, NameServiceData, ProjectSettings, SdkView } from '@dynamic-labs/sdk-api';
import { NetworkConfigurationMap, SocialProviderFilter, WalletUiUtils } from '@dynamic-labs/types';
import { Chain, FetchPublicAddressOpts, WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { AccessDeniedCustomButton, AccountSwitchState, AuthModeType, AwaitingSignatureState, ChainToWalletMap, DynamicEventsCallbacks, DynamicRPCProviders, MultiWalletWidgetState, UserProfile, Wallet, WalletOption, WalletWithAction } from '../../../shared';
import { SocialNetworkIconType } from '../../../utils/functions/getSocialNetworkIcon';
import { MultiWalletWidgetStateSetter } from '../../../utils/hooks/multiWallet';
import { ThemeData, ThemeSetting } from '../../ThemeContext';
import { DisplayOrder, SetDisplayOrderPriority } from '../hooks';
import { InternalEventEmitter } from '../internalEvents';
import { SetCallbackType } from '../useCustomerCallbacks';
export type ChainsToConnect = {
    chain: Chain;
    chainId?: number;
};
export type SettingsOverrides = {
    views?: Array<SdkView>;
};
export type ConnectWalletResult = {
    address: string;
    id: string;
};
export interface IDynamicContext {
    accessDeniedMessagePrimary?: string;
    accessDeniedMessageSecondary?: string;
    accessDeniedButton?: AccessDeniedCustomButton;
    accountSwitchState: AccountSwitchState;
    appLogoUrl?: string;
    appName?: string;
    isBridgeFlow: boolean;
    authMode: AuthModeType;
    authToken: string | undefined;
    authorizationViewDisplayOrder: DisplayOrder;
    awaitingSignatureState: AwaitingSignatureState;
    clearStatesOnBackClick: () => void;
    connectWallet: (walletConnector: WalletConnector, fetchPublicAddressOpts?: FetchPublicAddressOpts, shouldCallCallback?: boolean) => Promise<ConnectWalletResult | undefined>;
    connectedWallets: Wallet[];
    linkedWallets: Wallet[];
    locale: {
        changeLanguage: (lang: string) => void;
    };
    isFullyConnected: boolean;
    setIsFullyConnected: (value: boolean | ((val: boolean) => boolean)) => void;
    consumeNonce: () => string | undefined;
    cssOverrides?: string | JSX.Element;
    customPrivacyPolicy?: ReactNode;
    customTermsOfServices?: ReactNode;
    debugError: boolean;
    decodedAuthToken: Omit<DynamicJwt, 'jwt'> | undefined;
    decodedOnboardingOnlyToken: Omit<DynamicJwt, 'jwt'> | undefined;
    defaultNumberOfWalletsToShow: number;
    bridgeChains: ChainsToConnect[] | undefined;
    bridgeChainsToConnect: ChainsToConnect[] | undefined;
    setBridgeChainsToConnect: Dispatch<SetStateAction<ChainsToConnect[] | undefined>>;
    desktopUri: string;
    displaySiweStatement: boolean;
    environmentId: string;
    eventsCallbacks?: DynamicEventsCallbacks;
    getConnectedWalletById: (walletId: string) => Wallet | undefined;
    getNameService: (address?: string) => Promise<NameServiceData | undefined>;
    handleLogOut: () => Promise<void>;
    handleUnlinkWallet: (walletId: string) => Promise<void> | void;
    isAuthenticated: boolean;
    isProjectSettingsLoading: boolean;
    isSingleWalletAccount: boolean;
    loadingNetwork: boolean;
    loginWithEmail: boolean;
    sendWagmiSettings: (settings: {
        dynamicWagmiSettings?: object;
    }) => void;
    multiWallet: boolean;
    multiWalletWidgetState: MultiWalletWidgetState;
    network: number | string | undefined;
    networkConfigurations: NetworkConfigurationMap | undefined;
    newToWeb3WalletChainMap: ChainToWalletMap;
    notInTheListImageUrl?: string;
    onboardingImageUrl?: string;
    onboardingOnlyJwt: string | undefined;
    policiesConsentInnerComponent?: ReactNode | ReactNode[];
    primaryWallet: Wallet | null;
    primaryWalletId: string | undefined;
    privacyPolicyUrl?: string;
    projectSettings: ProjectSettings | undefined;
    qrcodeUri: string;
    rpcProviders: DynamicRPCProviders;
    sdkHasLoaded: boolean;
    secondaryWallets: Wallet[];
    selectedWalletConnector: WalletConnector | null;
    selectedWalletWithAction: WalletWithAction | null;
    setAuthMode: Dispatch<SetStateAction<AuthModeType>>;
    setAuthorizationViewDisplayOrder: SetDisplayOrderPriority;
    setCallback: SetCallbackType;
    setDesktopUri: Dispatch<SetStateAction<string>>;
    setIsSingleWalletAccount: Dispatch<SetStateAction<boolean>>;
    setLogInWithEmail: Dispatch<SetStateAction<boolean>>;
    setMultiWallet: (value: boolean) => void;
    setMultiWalletWidgetState: MultiWalletWidgetStateSetter;
    setNetwork: Dispatch<SetStateAction<number | string | undefined>>;
    setOnboardingOnlyJwt: Dispatch<SetStateAction<string | undefined>>;
    setPrimaryWallet: (walletId: string) => Promise<void>;
    setPrimaryWalletId: (walletId: string) => void;
    setQrcodeUri: Dispatch<SetStateAction<string>>;
    setSelectedWalletConnectorKey: (key: string | null) => void;
    setSelectedWalletWithAction: (walletWithAction: WalletWithAction | null) => void;
    setShowAuthFlow: Dispatch<SetStateAction<boolean>>;
    /** The unwrapped version of setShowAuthFlow. See useSetShowAuthFlowWithInit.ts for context */
    internalSetShowAuthFlow: Dispatch<SetStateAction<boolean>>;
    setShowDynamicUserProfile: Dispatch<SetStateAction<boolean>>;
    setShowPasskeyCreatedSuccess: VoidFunction;
    setShowQrcodeModal: Dispatch<SetStateAction<boolean>>;
    setShowWidgetStatePopup: Dispatch<SetStateAction<boolean>>;
    setUser: Dispatch<SetStateAction<UserProfile | undefined>>;
    /**
     * The set state action which regulates displaying the bridge widget
     */
    setShowBridgeWidget: Dispatch<SetStateAction<boolean>>;
    shadowDOMEnabled: boolean;
    showAuthFlow: boolean;
    showDynamicUserProfile: boolean;
    /**
     * The boolean value representing the state of displaying the bridge widget
     */
    showBridgeWidget: boolean;
    showLockedWalletView?: boolean;
    showPasskeyCreatedSuccess: boolean;
    showQrcodeModal: boolean;
    showWidgetStatePopup: boolean;
    signWithEmailWalletName?: string;
    siweStatement?: string;
    socialMediaIconUrl?: Record<string, string> | Record<SocialNetworkIconType, string>;
    socialMediaLinkText?: string;
    socialMediaUrl?: string;
    socialProvidersFilter?: SocialProviderFilter;
    termsOfServiceUrl?: string;
    theme?: ThemeData | ThemeSetting;
    toolkitEnabled?: boolean;
    user: UserProfile | undefined;
    disconnectWallet: (walletId: string) => void;
    walletConnector: WalletConnector | null;
    walletUiUtils: WalletUiUtils<WalletConnector>;
    walletConnectorOptions: WalletOption[];
    walletsFilter?: (options: WalletOption[]) => WalletOption[];
    removeConnectedWalletsInfo: () => void;
    /** Whether any verifications are ongoing for the current user (ex. connect, sign and email login verifications) */
    isVerificationInProgress: boolean;
    /** State setter for isVerificationInProgress
     * @param checkWasSetOnDisable when true, if newValue is false, logs a message if the flag wasn't set to true before
     */
    setIsVerificationInProgress: (newValue: boolean, checkWasSetOnDisable?: boolean) => void;
    /** Legacy boolean flag used in useVerifyOnAwaitingSignature. Used to be called "isVerifying".
     * Was meant to prevent an effect from accidentally triggering again when it shouldn't.
     * Should be removed asap.
     */
    legacyIsVerifying: boolean;
    /** Legacy setter for legacyIsVerifying */
    setLegacyIsVerifying: Dispatch<SetStateAction<boolean>>;
    /** Temporary workaround, until QNTM-180 is complete */
    internalEvents: MutableRefObject<InternalEventEmitter>;
    /** Whether there is an instance of DynamicEmbeddedAuthFlow being rendered */
    isRenderingEmbeddedAuthFlow: MutableRefObject<boolean>;
}
