import { SolWalletConnector } from './solWalletConnector';
import { ISolana } from './types';
export declare class Solflare extends SolWalletConnector {
    name: string;
    isInstalledOnBrowser(): boolean;
    fetchPublicAddress(): Promise<string | undefined>;
    connect(): Promise<void>;
    getSigner(): Promise<ISolana | undefined>;
    signMessage(messageToSign: string): Promise<string | undefined>;
    getConnectedAccounts(): Promise<string[]>;
    setupEventListeners(): void;
    teardownEventListeners(): void;
}
