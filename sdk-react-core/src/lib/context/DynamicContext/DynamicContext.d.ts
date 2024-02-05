import { FC, ReactNode } from 'react';
import { LogLevel } from '@dynamic-labs/logger';
import { EvmNetwork, SocialProviderFilter } from '@dynamic-labs/types';
import { DeepLinkVariant, WalletConnectorExtension, WalletConnectorsMethod } from '@dynamic-labs/wallet-connector-core';
import { LocaleResource } from '../../locale';
import { AccessDeniedCustomButton, AuthModeType, ChainToWalletMap, DynamicEventsCallbacks, WalletOption } from '../../shared';
import { SocialNetworkIconType } from '../../utils/functions/getSocialNetworkIcon';
import { ThemeData, ThemeSetting } from '../ThemeContext';
import { ChainsToConnect, IDynamicContext, SettingsOverrides } from './types';
export declare const PUBLIC_PROJECT_LIVE_ENVIRONMENT_ID = "2762a57b-faa4-41ce-9f16-abff9300e2c9";
export interface DynamicContextProps {
    children: ReactNode;
    settings: {
        enableForcedNetworkValidation?: boolean;
        overrides?: SettingsOverrides;
        bridgeChains?: ChainsToConnect[];
        accessDeniedMessagePrimary?: string;
        accessDeniedMessageSecondary?: string;
        accessDeniedButton?: AccessDeniedCustomButton;
        apiBaseUrl?: string;
        appLogoUrl?: string;
        appName?: string;
        cssOverrides?: string | JSX.Element;
        debugError?: boolean;
        /**
         * Used to control the type of deep link used when connecting
         * a mobile wallet. Defaults to 'native'. This is useful for
         * example if your app is running in a webview of a native
         * mobile app, and you want to be able to link out to any
         * wallet without having to modify your iOS build config.
         * In this case, you can set this to 'universal'.
         */
        deepLinkPreference?: DeepLinkVariant;
        defaultNumberOfWalletsToShow?: number;
        displaySiweStatement?: boolean;
        enableVisitTrackingOnConnectOnly?: boolean;
        environmentId: string;
        localStorageSuffix?: string;
        eventsCallbacks?: DynamicEventsCallbacks;
        evmNetworks?: EvmNetwork[];
        /**
         * @deprecated Set flow network in dashboard instead
         */
        flowNetwork?: 'testnet' | 'mainnet';
        initialAuthenticationMode?: AuthModeType;
        /**
         * The log level to use for client side logging with our SDK
         * @default WARN
         */
        logLevel?: keyof typeof LogLevel;
        showLockedWalletView?: boolean;
        newToWeb3WalletChainMap?: ChainToWalletMap;
        notInTheListImageUrl?: string;
        onboardingImageUrl?: string;
        policiesConsentInnerComponent?: ReactNode | ReactNode[];
        customPrivacyPolicy?: ReactNode;
        privacyPolicyUrl?: string;
        shadowDOMEnabled?: boolean;
        signWithEmailWalletName?: string;
        siweStatement?: string;
        socialMediaIconUrl?: Record<string, string> | Record<SocialNetworkIconType, string>;
        socialMediaLinkText?: string;
        socialMediaUrl?: string;
        customTermsOfServices?: ReactNode;
        termsOfServiceUrl?: string;
        toolkitEnabled?: boolean;
        walletConnectV1Bridge?: string;
        walletConnectPreferredChains?: `eip155:${number}`[];
        walletConnectors?: WalletConnectorsMethod[];
        walletConnectorExtensions?: WalletConnectorExtension[];
        walletsFilter?: (options: WalletOption[]) => WalletOption[];
        socialProvidersFilter?: SocialProviderFilter;
    };
    theme?: ThemeData | ThemeSetting;
    locale?: LocaleResource;
}
export declare const DynamicContext: import("react").Context<IDynamicContext | undefined>;
/** The context provider itself we only use internally */
export declare const InnerDynamicContextProvider: FC<DynamicContextProps>;
/** The context provider you need to have access too all of Dynamic's hooks */
export declare const DynamicContextProvider: FC<DynamicContextProps>;
