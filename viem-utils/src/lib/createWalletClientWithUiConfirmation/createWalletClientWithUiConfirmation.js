import { __awaiter } from '../../../_virtual/_tslib.js';
import { createPublicClient, createWalletClient, fromHex } from 'viem';
import { interceptTransport } from '../interceptTransport/interceptTransport.js';
import { unFormatTransaction } from '../unFormatTransaction/unFormatTransaction.js';
import { createAccountWithUiConfirmation } from '../createAccountWithUiConfirmation/createAccountWithUiConfirmation.js';

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
    const provider = createPublicClient({ transport });
    const gatedAccount = createAccountWithUiConfirmation({
        account,
        connector,
        provider,
        walletUiUtils: walletUiUtils,
    });
    const customTransport = interceptTransport({
        getAccounts: () => __awaiter(void 0, void 0, void 0, function* () { return [account.address]; }),
        onPersonalSign: ({ message }) => __awaiter(void 0, void 0, void 0, function* () {
            if (!client)
                throw new Error('Client not initialized');
            return client.signMessage({
                message: fromHex(message, 'string'),
            });
        }),
        onSendTransaction: ({ transaction }) => __awaiter(void 0, void 0, void 0, function* () {
            if (!client)
                throw new Error('Client not initialized');
            const unFormattedTransaction = unFormatTransaction(transaction);
            return client.sendTransaction(unFormattedTransaction);
        }),
        onSignTypedData: ({ message }) => __awaiter(void 0, void 0, void 0, function* () {
            if (!client)
                throw new Error('Client not initialized');
            return client.signTypedData(JSON.parse(message));
        }),
        transport,
    });
    client = createWalletClient({
        account: gatedAccount,
        chain,
        transport: customTransport,
    });
    return client;
};

export { createWalletClientWithUiConfirmation };
