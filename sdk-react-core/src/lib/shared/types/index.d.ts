import React from 'react';
import type { EvmRpcProvider, SolanaRpcProvider } from '@dynamic-labs/rpc-providers';
import type { FetchPublicAddressOpts, WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { WalletProviderEnum, ProjectSettings, UserFields, NameServiceData, JwtVerifiedCredential, OauthProviderRequest } from '@dynamic-labs/sdk-api';
import { NetworkConfigurationMap } from '@dynamic-labs/types';
export type BrowserName = 'brave' | 'chrome' | 'edge' | 'firefox' | 'safari';
export type Wallet = {
    address: string;
    chain: string;
    /**
     * If we are currently able to fetch information about this wallet from its provider.
     * Will be false, for example, if you are connected through a browser extension and you lock it.
     */
    connected: boolean;
    connector: WalletConnector;
    id: string;
    network?: string | number;
    /**
     * If there is a current user, this will be true if and only if the user has signed this wallet
     * to link it to their account
     */
    authenticated: boolean;
};
export type WalletAction = 'select' | 'unlink';
export type WalletWithAction = {
    action: WalletAction;
    wallet: Wallet;
};
export type UserProfile = UserFields & {
    chain?: string;
    ens?: NameServiceData;
    environmentId?: string;
    isAuthenticatedWithAWallet: boolean;
    lastVerifiedCredentialId: string | undefined;
    lists?: string[];
    newUser?: boolean;
    sessionId: string;
    userId?: string;
    verifiedCredentials: JwtVerifiedCredential[];
    wallet?: string;
    scope?: string;
};
export type Icon = React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>;
export type WalletNamesUnion = 'Coinbase Wallet' | 'Coinbase Wallet (Solana)' | 'MetaMask' | 'Phantom' | 'Phantom (EVM)' | 'Phantom (Ledger)' | 'Venly' | 'Rainbow' | 'Solflare' | 'Glow' | 'Slope' | 'Blocto (Flow)' | 'Blocto (EVM)' | 'Blocto (App)' | 'Brave Wallet (EVM)' | 'Brave Wallet (Solana)' | 'Braavos' | 'Argent X' | 'Dapper' | 'Opera Wallet' | 'Injected Wallet' | 'Exodus Wallet (EVM)' | 'Exodus Wallet (Solana)' | 'ZenGo' | 'Lilico';
export type ChainNamesUnion = 'Solana' | 'Ethereum' | 'Flow' | 'EVM' | 'Algorand' | 'Starknet' | 'Cosmos' | 'Axelar' | 'Osmosis';
export interface WalletOption {
    isInstalledOnBrowser: boolean;
    key: string;
    name: string;
    walletConnector: WalletConnector;
    group?: string;
    groupedWallets?: WalletOption[];
    injectedConfig?: Array<Record<string, unknown>>;
}
export type WalletGroupOption = WalletOption & {
    groupedWallets: WalletOption[];
};
export type ErrorWithCode = Error & {
    code: string;
};
export interface CopyKey {
    copykey?: string;
}
export interface ModalProps {
    onClose: () => void;
}
export interface IAdditionalInformation {
    appLogoUrl?: string;
    appName?: string;
    onboardingImageUrl?: string;
    setWalletConnector: (connector: WalletConnector | null) => void;
    walletConnector: WalletConnector;
    wallets: WalletOption[];
}
export interface VerifyProps {
    environmentId: string;
}
export interface VerifyCallbackArgs {
    captchaToken?: string;
    fetchPublicAddressOpts?: FetchPublicAddressOpts;
    oauth?: OauthProviderRequest;
    publicWalletAddress: string;
    walletConnector: WalletConnector;
}
export interface VerifyWalletProps {
    verifyWallet: ({ walletConnector, fetchPublicAddressOpts, }: VerifyCallbackArgs) => Promise<void>;
}
export interface ProjectSettingsProps {
    projectSettings: ProjectSettings | undefined;
}
export type WalletProvider = `${WalletProviderEnum}`;
export interface VerifyWallet {
    captchaToken?: string;
    chain: string | undefined;
    messageToSign: string;
    network: string | number | undefined;
    oauth?: OauthProviderRequest;
    publicWalletAddress: string;
    signedMessage: string;
    skipEmptyAccountCheck?: boolean;
    walletName: string;
    walletProvider: WalletProvider;
}
export type OnAuthSuccess = (params: {
    authToken: string;
    handleLogOut: () => Promise<void>;
    isAuthenticated: boolean;
    primaryWallet: Wallet | null;
    user: UserProfile;
    /** @deprecated Use primaryWallet.connector instead */
    walletConnector: WalletConnector | undefined;
}) => void;
export type OnLinkSuccess = (params: {
    authToken: string;
    user: UserProfile;
    wallet: Wallet | undefined;
    /** @deprecated Use wallet.connector instead */
    walletConnector: WalletConnector | undefined;
}) => void;
export type onConnect = (params: {
    wallet: Wallet | undefined;
    /** @deprecated Use wallet.connector instead */
    walletConnector: WalletConnector | undefined;
}) => void;
export type OnDisconnect = (params: {
    wallet: Wallet | undefined;
    /** @deprecated Use wallet.connector instead */
    walletConnector: WalletConnector | undefined;
}) => void;
export type OnEmailVerificationSuccess = (email: string) => void;
export type OnEmailVerificationFailure = (email: string) => void;
export type OnBeforeConnectSuccessConfirmation = (wallet: Partial<Wallet>) => Promise<boolean>;
export type OnUserProfileUpdate = (user: UserProfile) => void;
export type OnEmbeddedWalletCreated = (verifiedCredential: JwtVerifiedCredential | undefined) => void;
export type MultiWalletWidgetState = 'idle' | 'awaiting_account_switch' | 'awaiting_connection' | 'awaiting_signature' | 'detected_new_wallet';
export type AccountSwitchState = 'idle' | 'linking_new_wallet' | 'switching_primary' | 'primary_not_connected';
export type AwaitingSignatureState = 'idle' | 'linking_new_wallet' | 'transferring_wallet';
export type LocalStorageNonce = {
    environmentId?: string;
    expiry: number;
    value: string | undefined;
};
export type LocalStorageNetworks = {
    configurations: NetworkConfigurationMap;
    environmentId?: string;
    expiry: number;
    version: number;
};
export type LocalStorageSettings = {
    environmentId?: string;
    expiry: number;
    settings: ProjectSettings;
};
export type ChainToWalletMap = {
    primary_chain: string;
    wallets: {
        algorand?: string;
        cosmos?: string;
        evm?: string;
        flow?: string;
        solana?: string;
    };
};
export type AuthModeType = 'connect-only' | 'connect-and-sign';
export type DynamicRPCProviders = {
    evmDefaultProvider: EvmRpcProvider | undefined;
    evmProviders: EvmRpcProvider[] | undefined;
    getEvmRpcProviderByChainId: (chainId: number) => EvmRpcProvider | undefined;
    solanaDefaultProvider: SolanaRpcProvider | undefined;
    solanaProviders: SolanaRpcProvider[] | undefined;
};
export type DynamicEventsCallbacks = {
    onSignedMessage?: (params: {
        messageToSign: string;
        signedMessage: string;
    }) => void;
    onAuthFlowClose?: () => void;
    onAuthFlowOpen?: () => void;
    onAuthSuccess?: OnAuthSuccess;
    onConnect?: onConnect;
    onDisconnect?: OnDisconnect;
    onEmailVerificationSuccess?: OnEmailVerificationSuccess;
    onEmailVerificationFailure?: OnEmailVerificationFailure;
    onBeforeConnectSuccessConfirmation?: OnBeforeConnectSuccessConfirmation;
    onLinkSuccess?: OnLinkSuccess;
    onLogout?: (user: UserProfile | undefined) => void;
    onUnlinkSuccess?: (unlinkedWallet: JwtVerifiedCredential) => void;
    onUserProfileUpdate?: (user: UserProfile) => void;
    onEmbeddedWalletCreated?: OnEmbeddedWalletCreated;
};
export type AccessDeniedCustomButton = {
    action?: () => void;
    title: string;
};
