import { Wallet, WalletConnector } from '../../../..';
export declare const useConnectedAccountWallet: (connector: WalletConnector | undefined, secondaryWallets: Wallet[]) => import("../usePromise").PromiseState<Wallet | undefined, Error>;
