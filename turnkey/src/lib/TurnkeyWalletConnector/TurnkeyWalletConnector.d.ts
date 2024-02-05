import { PublicClient, Transport, Chain as ViemChain, Account, WalletClient } from 'viem';
import { JwtVerifiedCredential } from '@dynamic-labs/sdk-api';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
import { WalletConnectorBase } from '@dynamic-labs/wallet-connector-core';
import type { Chain, IEmailWalletConnector, IPasskeyWalletConnector, WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { EvmNetwork, GenericNetwork, WalletUiUtils } from '@dynamic-labs/types';
import { ChainRpcProviders } from '@dynamic-labs/rpc-providers';
import { TurnkeyPasskeyRecoveryHandler } from '../TurnkeyPasskeyRecoveryHandler';
import { TurnkeyWalletConnectorNameAndKey } from '../../types';
export type TurnkeyConnectorProps = {
    walletUiUtils: WalletUiUtils<WalletConnector>;
    walletBook: WalletBookSchema;
    evmNetworks: GenericNetwork[];
    appName?: string;
    chainRpcProviders: typeof ChainRpcProviders;
};
type ITurnkeyWalletConnector = IEmailWalletConnector & IPasskeyWalletConnector;
export declare class TurnkeyWalletConnector extends WalletConnectorBase implements ITurnkeyWalletConnector {
    canConnectViaEmail: boolean;
    connectedChain: Chain;
    name: string;
    supportedChains: Chain[];
    evmNetworks: EvmNetwork[];
    isEmbeddedWallet: boolean;
    private appName;
    private _email;
    private _verifiedCredential;
    private walletUiUtils;
    private _turnkeyAccount;
    static lastUsedChainIdStorageKey: string;
    private _selectedChainId;
    private __passkeyRecoveryHandler;
    constructor(nameAndKey: TurnkeyWalletConnectorNameAndKey, props: TurnkeyConnectorProps);
    private getLastUsedChainId;
    getWebAuthnAttestation(): Promise<{
        attestation: {
            attestationObject: string;
            clientDataJson: string;
            credentialId: string;
            transports: import("@dynamic-labs/sdk-api").AuthenticatorTransportProtocol[];
        };
        challenge: string;
    }>;
    getRecoverPasskeyHandler(): TurnkeyPasskeyRecoveryHandler;
    get email(): string | null | undefined;
    setEmail(email: string | null | undefined): void;
    clearEmail(): void;
    getNetwork(): Promise<number | undefined>;
    supportsNetworkSwitching(): boolean;
    switchNetwork({ networkChainId, }: {
        networkChainId: number;
    }): Promise<void>;
    fetchPublicAddress(): Promise<string | undefined>;
    getConnectedAccounts(): Promise<string[]>;
    getMobileOrInstalledWallet(): WalletConnector;
    setVerifiedCredentials(verifiedCredentials: JwtVerifiedCredential[]): void;
    private get turnkeyAddress();
    getRpcUrl(): string | undefined;
    getBalance(): Promise<string | undefined>;
    signMessage(messageToSign: string): Promise<string | undefined>;
    getPublicClient(): Promise<void | PublicClient | undefined>;
    getSigner(): Promise<WalletClient<Transport, ViemChain, Account> | undefined>;
    getWalletClient(): WalletClient<Transport, ViemChain, Account> | undefined;
    private set verifiedCredential(value);
    private get verifiedCredential();
    private get walletProperties();
    private refreshTurnkeyAccount;
    private get currentChainId();
    private get networkRpcUrl();
    private get currentEvmNetwork();
    private getTurnkeyAccount;
    get lastUsedChainId(): number | undefined;
    set lastUsedChainId(chainId: number | undefined);
}
export {};