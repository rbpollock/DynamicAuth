import { Wallet } from '../../../shared';
export declare const useEmbeddedWallet: () => {
    readonly createEmbeddedWallet: () => Promise<Wallet | undefined>;
    readonly userHasEmbeddedWallet: () => boolean;
};
