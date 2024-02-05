import { SolWalletConnector } from './solWalletConnector';
export declare class Glow extends SolWalletConnector {
    name: string;
    setupEventListeners(): void;
    teardownEventListeners(): void;
    connect(): Promise<void>;
    getSigner(): Promise<import("./types").ISolana | undefined>;
    isInstalledOnBrowser(): boolean;
    fetchPublicAddress(): Promise<string | undefined>;
    signMessage(messageToSign: string): Promise<string | undefined>;
    getConnectedAccounts(): Promise<string[]>;
}
