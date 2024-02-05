import { Connection, SendOptions, Signer, Transaction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import EventEmitter from 'eventemitter3';
import { ProviderCondition } from '@dynamic-labs/wallet-connector-core';
declare global {
    interface IWindowPhantom {
        solana: ISolana;
    }
    interface Window {
        Slope?: {
            new (): ISolana;
        };
        coinbaseSolana?: ICoinbaseSolanaSigner;
        glowSolana?: ISolana;
        phantom?: IWindowPhantom;
        solana?: ISolana;
        solflare?: ISolana;
        backpack?: IBackpackSolanaSigner;
        magicEden?: {
            solana: ISolana;
        };
    }
}
type PublicKey = {
    toString: () => string;
};
export type ConnectionResult = {
    address?: string;
    publicKey?: PublicKey;
} | undefined;
interface ISolanaEvents {
    connect(...args: unknown[]): unknown;
    disconnect(...args: unknown[]): unknown;
    accountChanged(publicKey: string): unknown;
    activeWalletDidChange(publicKey: string): unknown;
}
export type SignedMessage = {
    signature: Uint8Array;
};
export type ISolanaSigner = {
    [key in ProviderFlag]: boolean;
} & EventEmitter<ISolanaEvents> & {
    publicKey?: {
        toBytes(): Uint8Array;
    };
    isConnected: boolean;
    providers: ISolanaSigner[];
    signTransaction<T extends Transaction | VersionedTransaction>(transaction: T): Promise<T>;
    signAllTransactions<T extends Transaction | VersionedTransaction>(transactions: T[]): Promise<T[]>;
    signAndSendTransaction<T extends Transaction | VersionedTransaction>(transaction: T, options?: SendOptions): Promise<{
        signature: TransactionSignature;
    }>;
    signMessage(message: Uint8Array, encoding?: string): Promise<SignedMessage>;
    connect: (args?: {
        onlyIfTrusted: boolean;
    }) => Promise<ConnectionResult>;
    disconnect(): Promise<void>;
};
type BackpackSolanaSignerResponse = {
    signature: Uint8Array;
};
export type IBackpackSolanaSigner = Omit<ISolanaSigner, 'signMessage'> & {
    signMessage: (message: Uint8Array, encoding?: string) => Promise<void | BackpackSolanaSignerResponse | Uint8Array>;
    send: (transaction: Transaction, signers?: Signer[], options?: SendOptions, connection?: Connection, publicKey?: PublicKey) => Promise<TransactionSignature>;
};
export type ICoinbaseSolanaSigner = Omit<ISolanaSigner, 'signMessage'> & {
    signMessage: (message: Uint8Array, publicKey?: string) => Promise<void | Uint8Array>;
};
export type ISolana = ISolanaSigner | IBackpackSolanaSigner | ICoinbaseSolanaSigner;
export type ProviderFlag = 'isBraveWallet' | 'isGlow' | 'isPhantom' | 'isSolflare' | 'isExodus' | 'isBackpack' | 'isMagicEden';
export type EthProviderCondition = ProviderCondition<ProviderFlag>;
export {};
