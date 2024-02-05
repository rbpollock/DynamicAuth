import { LoginWithMagicLinkEventHandlers, Magic, MagicUserMetadata, PromiEvent } from 'magic-sdk';
import { OAuthExtension, OAuthProvider } from '@magic-ext/oauth';
import { Account, Hex, PublicClient, WalletClient } from 'viem';
import { Chain, WalletConnector, WalletConnectorBase } from '@dynamic-labs/wallet-connector-core';
import { EvmNetwork, GenericNetwork, WalletUiUtils } from '@dynamic-labs/types';
import { DynamicError, CancellablePromise } from '@dynamic-labs/utils';
import { Provider, ProviderEnum } from '@dynamic-labs/sdk-api';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
import { ChainRpcProviders } from '@dynamic-labs/rpc-providers';
import { MagicClientNetworkHandler } from '../MagicClientNetworkHandler';
export type MagicConnectorProps = {
    apiProviders: {
        [key in ProviderEnum]?: Provider;
    };
    evmNetworks: GenericNetwork[];
    walletUiUtils: WalletUiUtils<WalletConnector>;
    walletBook: WalletBookSchema;
    chainRpcProviders: typeof ChainRpcProviders;
};
export type MagicPromiEvent = PromiEvent<string | null, LoginWithMagicLinkEventHandlers & {
    done: (result: string | null) => void;
    error: (reason: any) => void;
    settled: () => void;
}>;
export declare const storedAddressKey = "dynamic_magic_address";
export declare abstract class MagicWalletConnector extends WalletConnectorBase {
    canConnectViaCustodialService: boolean;
    isEmbeddedWallet: boolean;
    connectedChain: Chain;
    supportedChains: Chain[];
    evmNetworks: EvmNetwork[];
    _currentAuthCancellablePromise: CancellablePromise<MagicPromiEvent | undefined> | undefined;
    protected _magicClient: MagicClientNetworkHandler<Magic | Magic<OAuthExtension[]>>;
    private _walletUiUtils;
    constructor(opts: MagicConnectorProps);
    abstract loginWithMagic(provider?: OAuthProvider): Promise<MagicPromiEvent | undefined>;
    getDeepLink(): string | undefined;
    connect(provider?: OAuthProvider): Promise<void>;
    endSession(): Promise<void>;
    getUserMetadata(): Promise<MagicUserMetadata | undefined>;
    fetchPublicAddress(): Promise<Hex | undefined>;
    getBalance(): Promise<string | undefined>;
    getConnectedAccounts(): Promise<string[]>;
    private getNetworkSync;
    getNetwork(): Promise<number | undefined>;
    getSignerSync(account?: `0x${string}` | Account): WalletClient | undefined;
    getSigner(): Promise<WalletClient | undefined>;
    getWalletClient(): WalletClient | undefined;
    generateDynamicErrorOnMissingProvider(): DynamicError;
    getPublicClientSync(): void | PublicClient | undefined;
    getPublicClient(): Promise<void | PublicClient | undefined>;
    signMessage(messageToSign: string): Promise<string | undefined>;
    supportsNetworkSwitching(): boolean;
    switchNetwork({ networkChainId, }: {
        networkChainId?: number;
    }): Promise<void>;
    _isLoggedIn(): Promise<boolean>;
    getAndCacheWalletAddress(): Promise<Hex>;
}
