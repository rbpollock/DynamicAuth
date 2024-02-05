import { SolWalletConnector } from './solWalletConnector';
import { ISolana } from './types';
interface ConnectData {
    data: {
        publicKey: string;
    };
}
interface SignatureData {
    data: {
        signature: string;
    };
}
export declare class Slope extends SolWalletConnector {
    name: string;
    private static _wallet;
    get wallet(): ISolana | undefined;
    connect(): Promise<void>;
    getSigner(): Promise<undefined>;
    getBalance(): Promise<string | undefined>;
    isInstalledOnBrowser(): boolean;
    isConnectData: (value: unknown) => value is ConnectData;
    isSignatureData: (value: unknown) => value is SignatureData;
    fetchPublicAddress(): Promise<string | undefined>;
    signMessage(messageToSign: string): Promise<string | undefined>;
    getConnectedAccounts(): Promise<string[]>;
}
export {};
