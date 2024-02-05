import { LocalAccount, PublicClient } from 'viem';
import { WalletUiUtils } from '@dynamic-labs/types';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
type Props = {
    account: LocalAccount;
    walletUiUtils: WalletUiUtils<WalletConnector>;
    connector: WalletConnector;
    provider: PublicClient;
};
export declare const createAccountWithUiConfirmation: ({ account, connector, provider, walletUiUtils, }: Props) => LocalAccount;
export {};
