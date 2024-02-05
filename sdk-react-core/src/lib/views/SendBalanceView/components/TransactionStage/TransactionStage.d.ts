import { FC } from 'react';
import { Hex, TransactionRequest } from 'viem';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { TransactionConfirmationViewProps } from '../../../TransactionConfirmationView';
import { CopyKey } from '../../../../shared';
type TransactionStageProps = Omit<TransactionConfirmationViewProps, 'mutation'> & {
    walletConnector: WalletConnector;
    mutation: (transaction: TransactionRequest) => Promise<Hex>;
} & CopyKey;
export declare const TransactionStage: FC<TransactionStageProps>;
export {};
