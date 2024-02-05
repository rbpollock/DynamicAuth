import { IBackpackSolanaSigner } from '../types';
import { InjectedWalletBase } from './InjectedWalletBase';
export declare class BackpackSol extends InjectedWalletBase {
    name: string;
    setupEventListeners(): void;
    fetchPublicAddress(): Promise<string | undefined>;
    getSigner(): Promise<IBackpackSolanaSigner | undefined>;
    signMessage(messageToSign: string): Promise<string | undefined>;
    getConnectedAccounts(): Promise<string[]>;
}
