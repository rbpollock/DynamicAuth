import { InjectedWalletBase } from './InjectedWalletBase';
export declare class BraveSol extends InjectedWalletBase {
    name: string;
    fetchPublicAddress(): Promise<string | undefined>;
}
