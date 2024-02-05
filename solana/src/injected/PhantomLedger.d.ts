import { PublicKey } from '@solana/web3.js';
import { InjectedWalletBase } from './InjectedWalletBase';
export declare const MEMO_PROGRAM_ID: PublicKey;
export declare class PhantomLedger extends InjectedWalletBase {
    /**
     * I'm exporting the walletName to use it for DYN-1447. As we only need the wallet name,
     * exporting it in this way, we avoid to instantiate the whole PhantomLedger class every time.
     */
    name: string;
    signMessage(): Promise<string | undefined>;
    proveOwnership(messageToSign: string): Promise<string | undefined>;
    signMessageViaTransaction(messageToSign: string): Promise<string>;
    private buildAuthTx;
}
