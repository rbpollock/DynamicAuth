import { InjectedWalletBase } from './InjectedWalletBase';
export declare class Phantom extends InjectedWalletBase {
    name: string;
    fetchPublicAddress(): Promise<string | undefined>;
}
