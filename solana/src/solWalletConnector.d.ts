import { Connection } from '@solana/web3.js';
import { Chain, WalletConnectorBase } from '@dynamic-labs/wallet-connector-core';
import { GenericNetwork } from '@dynamic-labs/types';
import { ChainRpcProviders } from '@dynamic-labs/rpc-providers';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
import { ISolana } from './types';
export type SolWalletConnectorOpts = {
    chainRpcProviders: typeof ChainRpcProviders;
    solNetworks: GenericNetwork[];
    walletBook: WalletBookSchema;
};
export declare abstract class SolWalletConnector extends WalletConnectorBase {
    solNetworks: GenericNetwork[];
    supportedChains: Chain[];
    connectedChain: Chain;
    constructor(opts: SolWalletConnectorOpts);
    getNetwork(): Promise<string>;
    getWalletClient(): Connection;
    getPublicClient(): Promise<Connection | undefined>;
    abstract getSigner(): Promise<ISolana | undefined>;
    abstract connect(): Promise<void>;
    getBalance(): Promise<string | undefined>;
    lamportsToSol(lamports: number): number;
}
