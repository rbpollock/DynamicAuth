import { Keplr as KeplrWallet } from '@keplr-wallet/types';
import { Chain, WalletConnectorBase } from '@dynamic-labs/wallet-connector-core';
import { EvmNetwork, GenericNetwork } from '@dynamic-labs/types';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
import KeplrWalletConnect, { SwitchNetworkOps } from './KeplrWalletConnect';
export interface IFetchBalanceResponse {
    balances: IFetchBalanceBalance[];
    pagination: IFetchBalancePagination;
}
export interface IFetchBalanceBalance {
    amount: string;
    denom: string;
}
export interface IFetchBalancePagination {
    next_key: any;
    total: string;
}
export declare const DYNAMIC_KEPLR_NETWORK_ID = "dynamic_keplr_network_id";
export type KeplrWalletConnectorProps = {
    cosmosNetworks: GenericNetwork[];
    walletBook: WalletBookSchema;
};
type CosmoNetwork = 'cosmoshub-4' | 'axelar-dojo-1' | 'osmosis-1' | 'secret-4';
export declare class KeplrWalletConnector extends WalletConnectorBase {
    evmNetworks: EvmNetwork[];
    switchNetworkOnlyFromWallet: boolean;
    private chainId;
    name: string;
    connectedChain: Chain;
    supportedChains: Chain[];
    chainIdMap: Record<number, CosmoNetwork>;
    reverseChainIdMap: Record<CosmoNetwork, number>;
    getMobileOrInstalledWallet(): this | KeplrWalletConnect;
    constructor(props: KeplrWalletConnectorProps);
    getWalletClient(): KeplrWallet;
    getDeepLink(): string | undefined;
    get selectedNetwork(): EvmNetwork | undefined;
    get lcdUrl(): string | undefined;
    get denom(): string | undefined;
    protected getAccount(): Promise<import("@keplr-wallet/types").AccountData>;
    get keplr(): KeplrWallet;
    endSession(): Promise<void>;
    connect(): Promise<void>;
    fetchPublicAddress(): Promise<string>;
    getBalance(): Promise<string | undefined>;
    getConnectedAccounts(): Promise<string[]>;
    getNetwork(): Promise<number>;
    getSigner(): Promise<import("@keplr-wallet/types").OfflineAminoSigner & import("@keplr-wallet/types").OfflineDirectSigner>;
    isInstalledOnBrowser(): boolean;
    _handleAccountChange(): Promise<void>;
    setupEventListeners(): void;
    teardownEventListeners(): void;
    protected getSignDoc(message: string): {
        account_number: string;
        chain_id: CosmoNetwork;
        fee: {
            amount: never[];
            gas: string;
        };
        memo: string;
        msgs: {
            type: string;
            value: {
                text: string;
            };
        }[];
        sequence: string;
    };
    signMessage(messageToSign: string): Promise<string | undefined>;
    supportsNetworkSwitching(): boolean;
    fetchBalance(address: string): Promise<string>;
    switchNetwork({ networkChainId, }: SwitchNetworkOps): Promise<void>;
}
export {};
