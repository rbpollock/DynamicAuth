import { SolWalletConnector } from './solWalletConnector';
import { ICoinbaseSolanaSigner } from './types';
export declare class CoinbaseSolana extends SolWalletConnector {
    name: string;
    setupEventListeners(): void;
    teardownEventListeners(): void;
    connect(): Promise<void>;
    getSigner(): Promise<ICoinbaseSolanaSigner | undefined>;
    isInstalledOnBrowser(): boolean;
    fetchPublicAddress(): Promise<string | undefined>;
    signMessage(messageToSign: string): Promise<string | undefined>;
    getConnectedAccounts(): Promise<string[]>;
}
