import { __awaiter } from '../../../_virtual/_tslib.js';
import { fromHex } from 'viem';
import { interceptTransport } from '../interceptTransport/interceptTransport.js';

const confirmationTransport = ({ transport, connector, walletUiUtils, getAccounts, onPersonalSign, onSendTransaction, onSignTypedData, provider, }) => interceptTransport({
    getAccounts,
    onPersonalSign: onPersonalSign
        ? (args) => walletUiUtils.signMessage({
            connector,
            handler: () => onPersonalSign(args),
            message: fromHex(args.message, 'string'),
            provider,
        })
        : undefined,
    onSendTransaction: onSendTransaction
        ? (args) => walletUiUtils.sendTransaction({
            connector,
            handler: (transaction) => __awaiter(void 0, void 0, void 0, function* () {
                return onSendTransaction(Object.assign(Object.assign({}, args), { transaction: transaction }));
            }),
            provider,
            transaction: args.transaction,
        })
        : undefined,
    onSignTypedData: onSignTypedData
        ? (args) => walletUiUtils.signMessage({
            connector,
            handler: () => onSignTypedData(args),
            message: args.message,
            provider,
        })
        : undefined,
    transport,
});

export { confirmationTransport };
