/// <reference types="node" />
import { EventEmitter } from 'stream';
import { PublicClient } from 'viem';
import { ProviderCondition } from '@dynamic-labs/wallet-connector-core';
declare global {
    interface IWindowPhantom {
        ethereum: IEthereum;
    }
    interface Window {
        ethereum?: IEthereum;
        phantom?: IWindowPhantom;
        zerionWallet?: IEthereum;
        coinbaseWalletExtension?: IEthereum;
        superb?: IEthereum;
        okxwallet?: IEthereum;
    }
}
export type IEthereum = {
    [key in ProviderFlag]: boolean;
} & {
    providers?: object[];
    request: <T extends string>(params: {
        method: T;
    } | object) => Promise<T extends 'eth_requestAccounts' ? [string] : object>;
} & EventEmitter;
export type ProviderFlag = 'isDawn' | 'isBraveWallet' | 'isCoinbaseWallet' | 'isFrame' | 'isGamestop' | 'isMetaMask' | 'isExodus' | 'isOpera' | 'isBlocto' | 'isTrustWallet' | 'isZerion' | 'isPhantom' | 'isSuperb' | 'isRabby' | 'isOkxWallet';
export type EthProviderCondition = ProviderCondition<ProviderFlag>;
export type Provider = () => PublicClient | undefined;
export type AccountChangeEventHandler = (accounts: string[]) => Promise<void>;
export type ChainChangeEventHandler = (chainId: string | number) => Promise<void>;
export type DisconnectEventHandler = (error?: {
    code: number;
}) => Promise<void>;
export type ExternalProviderEventEmitter = PublicClient & {
    on: (event: string, listener: (...args: Array<any>) => unknown) => void;
    removeListener: (event: string, listener: (...args: Array<any>) => unknown) => void;
};
