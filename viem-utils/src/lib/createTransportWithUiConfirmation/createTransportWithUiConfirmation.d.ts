import { PublicClient, TransactionRequest, Transport } from 'viem';
import { WalletUiUtils } from '@dynamic-labs/types';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
type Props = {
    walletUiUtils: WalletUiUtils<WalletConnector>;
    connector: WalletConnector;
    publicClient: PublicClient;
    transport: Transport;
};
/**
 * Creates a viem transport with user interface confirmation for Ethereum-related operations.
 *
 * This function wraps a `Transport` object with additional UI confirmation logic for
 * personal sign requests, transaction sending, and signing typed data using the provided
 * `WalletUiUtils`. The function intercepts various Ethereum-related operations to
 * inject custom UI handling logic.
 *
 * @param {Object} props - The properties to configure the transport.
 * @param {WalletUiUtils<WalletConnector>} props.walletUiUtils - The UI utility functions for wallet operations.
 * @param {WalletConnector} props.connector - The wallet connector instance.
 * @param {PublicClient} props.publicClient - The public client for interacting with Ethereum.
 * @param {Transport} props.transport - The transport layer to be wrapped.
 * @returns {Transport} The transport layer wrapped with UI confirmation logic.
 */
export declare const createTransportWithUiConfirmation: ({ connector, walletUiUtils, publicClient, transport, }: Props) => import("viem").CustomTransport;
export declare const convertTransactionGasPriceToHex: ({ gasPrice, ...transaction }: TransactionRequest) => TransactionRequest;
export {};
