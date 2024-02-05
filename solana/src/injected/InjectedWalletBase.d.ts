import { SolWalletConnector } from '../solWalletConnector';
import { ISolana } from '../types';
export declare abstract class InjectedWalletBase extends SolWalletConnector {
    setupEventListeners(): void;
    teardownEventListeners(): void;
    connect(): Promise<void>;
    getSigner(): Promise<ISolana | undefined>;
    isInstalledOnBrowser(): boolean;
    fetchPublicAddress(): Promise<string | undefined>;
    signMessage(messageToSign: string): Promise<string | undefined>;
    getConnectedAccounts(): Promise<string[]>;
}
