import { ProviderCondition, WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { ISolana, ProviderFlag } from './types';
type Provider = () => ISolana | undefined;
export type AccountChangeEventHandler = (address: {
    toString(): string;
} | null) => Promise<void>;
export type DisconnectEventHandler = () => Promise<void>;
export declare class SolProviderHelper {
    static GlowProvider: Provider;
    static CoinbaseProvider: Provider;
    static PhantomProvider: Provider;
    static MagicEdenProvider: Provider;
    static SolflareProvider: Provider;
    static BraveProvider: Provider;
    static ExodusProvider: Provider;
    static BackpackSol: Provider;
    static providers: {
        [wallet: string]: Provider;
    };
    static installedProviderLookup(providerFlags: Array<ProviderCondition<ProviderFlag>>): ISolana | undefined;
    static allInstalledProviders(): ISolana[];
    static findSolanaProviders(solana?: ISolana): ISolana[];
    static isInstalledHelper(walletName: string): boolean;
    static findProvider(walletName: string): ISolana | undefined;
    static fetchPublicAddressWithName(name: string): Promise<string | undefined>;
    static connectWithName(name: string): Promise<ISolana | undefined>;
    static signMessageWithName(messageToSign: string, name: string): Promise<string | undefined>;
    static handleAccountChange: (walletConnector: WalletConnector, web3Provider: ISolana, address: string) => Promise<void>;
    static _setupEventListeners(walletConnector: WalletConnector, web3Provider?: ISolana): void;
    static _teardownEventListeners(name: string): void;
    static getConnectedAccountsWithName(name: string): Promise<string[]>;
}
export {};
