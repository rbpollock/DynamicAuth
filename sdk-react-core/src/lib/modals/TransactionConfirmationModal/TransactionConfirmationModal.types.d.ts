import { FC, ReactNode } from 'react';
import { Address, PublicClient, TransactionRequest } from 'viem';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { CopyKey } from '../../shared';
export type TransactionConfirmationModalProps = {
    handler: (transaction: TransactionRequest) => Promise<Address>;
    onReject: (error: unknown) => void;
    onTransactionResponseSuccess: (transactionResponse: Address) => void;
    title: ReactNode;
    transaction: TransactionRequest;
    provider: PublicClient;
    walletConnector: WalletConnector;
} & CopyKey;
export type TransactionConfirmationModalComponent = FC<TransactionConfirmationModalProps>;
