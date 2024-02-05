import { PublicClient } from 'viem';
import { WalletUiUtils } from '@dynamic-labs/types';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { type InterceptTransportProps } from '../interceptTransport';
type ConfirmationTransportProps = {
    connector: WalletConnector;
    provider: PublicClient;
    walletUiUtils: WalletUiUtils<WalletConnector>;
} & InterceptTransportProps;
export declare const confirmationTransport: ({ transport, connector, walletUiUtils, getAccounts, onPersonalSign, onSendTransaction, onSignTypedData, provider, }: ConfirmationTransportProps) => import("viem").CustomTransport;
export {};
