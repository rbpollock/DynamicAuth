import { __awaiter, __rest } from '../../../_virtual/_tslib.js';
import { toHex } from 'viem';
import { confirmationTransport } from '../confirmationTransport/confirmationTransport.js';

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
const createTransportWithUiConfirmation = ({ connector, walletUiUtils, publicClient, transport, }) => confirmationTransport({
    connector,
    onPersonalSign: ({ args, provider }) => __awaiter(void 0, void 0, void 0, function* () { return provider.request(args); }),
    onSendTransaction: ({ transaction, args, provider }) => __awaiter(void 0, void 0, void 0, function* () {
        return provider.request({
            method: args.method,
            params: [
                convertTransactionGasPriceToHex(transaction),
            ],
        });
    }),
    onSignTypedData: ({ args, provider }) => __awaiter(void 0, void 0, void 0, function* () { return provider.request(args); }),
    provider: publicClient,
    transport,
    walletUiUtils,
});
const convertTransactionGasPriceToHex = (_a) => {
    var { gasPrice } = _a, transaction = __rest(_a, ["gasPrice"]);
    return (Object.assign(Object.assign({}, transaction), { gasPrice: typeof gasPrice === 'bigint' ? toHex(gasPrice) : gasPrice }));
};

export { convertTransactionGasPriceToHex, createTransportWithUiConfirmation };
