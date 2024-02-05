import { Hex, PublicClient, WalletClient } from 'viem';
import { ProviderCondition, WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { WalletSchema } from '@dynamic-labs/wallet-book';
import { IEthereum, ProviderFlag } from './types';
export declare class EthProviderHelper {
    private wallet;
    constructor(wallet: WalletSchema);
    getInstalledProvider(): IEthereum | undefined;
    getEip6963Config(): {
        rdns: string;
    } | undefined;
    getInjectedConfig(): {
        chain: string;
        extensionLocators: {
            value: boolean;
            flag: string;
        }[];
        windowLocations?: string[] | undefined;
    } | undefined;
    installedProviders(): IEthereum[];
    installedProviderLookup(providerFlags: Array<ProviderCondition<ProviderFlag>>): IEthereum | undefined;
    eip6963ProviderLookup(rdns: string): IEthereum | undefined;
    isInstalledHelper(): boolean;
    findProvider(): IEthereum | undefined;
    findWalletClient(): WalletClient | undefined;
    fetchPublicAddress(): Promise<Hex | undefined>;
    fetchPublicAddressWithProvider(client: WalletClient): Promise<Hex | undefined>;
    signMessage(messageToSign: string): Promise<string | undefined>;
    _setupEventListeners(walletConnector: WalletConnector, publicClient: PublicClient): {
        tearDownEventListeners: () => void;
    };
}
