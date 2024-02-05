'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.cjs');
var viem = require('viem');
var interceptTransport = require('../interceptTransport/interceptTransport.cjs');
var unFormatTransaction = require('../unFormatTransaction/unFormatTransaction.cjs');
var createAccountWithUiConfirmation = require('../createAccountWithUiConfirmation/createAccountWithUiConfirmation.cjs');

/**
 * Creates a WalletClient with UI confirmation for sensitive actions.
 *
 * This function initializes a WalletClient instance that integrates with a UI
 * for user confirmations. It wraps the provided transport with additional functionality
 * to handle personal sign requests, transaction sending, and signing typed data by
 * injecting UI confirmation steps before proceeding with the actual wallet actions.
 *
 * @param {Props} props - The properties required to create a WalletClient with UI confirmation.
 * @param {LocalAccount} props.account - The local account to be used with the WalletClient.
 * @param {Chain} props.chain - The blockchain chain to which the WalletClient will connect.
 * @param {Transport} props.transport - The transport layer responsible for communication with the blockchain.
 * @param {WalletConnector} props.connector - The wallet connector instance.
 * @param {WalletUiUtils<WalletConnector>} props.walletUiUtils - The UI utility functions for the WalletConnector.
 *
 * @returns {WalletClient<Transport, Chain, Account>} An instance of WalletClient equipped with UI confirmation logic.
 */
const createWalletClientWithUiConfirmation = ({ account, chain, transport, connector, walletUiUtils, }) => {
    let client = null;
    const provider = viem.createPublicClient({ transport });
    const gatedAccount = createAccountWithUiConfirmation.createAccountWithUiConfirmation({
        account,
        connector,
        provider,
        walletUiUtils: walletUiUtils,
    });
    const customTransport = interceptTransport.interceptTransport({
        getAccounts: () => _tslib.__awaiter(void 0, void 0, void 0, function* () { return [account.address]; }),
        onPersonalSign: ({ message }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
            if (!client)
                throw new Error('Client not initialized');
            return client.signMessage({
                message: viem.fromHex(message, 'string'),
            });
        }),
        onSendTransaction: ({ transaction }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
            if (!client)
                throw new Error('Client not initialized');
            const unFormattedTransaction = unFormatTransaction.unFormatTransaction(transaction);
            return client.sendTransaction(unFormattedTransaction);
        }),
        onSignTypedData: ({ message }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
            if (!client)
                throw new Error('Client not initialized');
            return client.signTypedData(JSON.parse(message));
        }),
        transport,
    });
    client = viem.createWalletClient({
        account: gatedAccount,
        chain,
        transport: customTransport,
    });
    return client;
};

exports.createWalletClientWithUiConfirmation = createWalletClientWithUiConfirmation;
