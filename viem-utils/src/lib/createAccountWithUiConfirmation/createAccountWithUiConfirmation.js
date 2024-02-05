import { __awaiter } from '../../../_virtual/_tslib.js';
import { toAccount } from 'viem/accounts';

const createAccountWithUiConfirmation = ({ account, connector, provider, walletUiUtils, }) => toAccount({
    address: account.address,
    signMessage: (...args) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        return walletUiUtils.signMessage({
            connector,
            handler: () => __awaiter(void 0, void 0, void 0, function* () { return account.signMessage(...args); }),
            message: (_a = args[0]) === null || _a === void 0 ? void 0 : _a.message.toString(),
            provider,
        });
    }),
    signTransaction: (...args) => __awaiter(void 0, void 0, void 0, function* () {
        return walletUiUtils.sendTransaction({
            connector,
            handler: () => __awaiter(void 0, void 0, void 0, function* () { return account.signTransaction(...args); }),
            provider,
            transaction: args[0],
        });
    }),
    signTypedData: (...args) => walletUiUtils.signMessage({
        connector,
        handler: () => __awaiter(void 0, void 0, void 0, function* () { return account.signTypedData(...args); }),
        message: JSON.stringify(args[0]),
        provider,
    }),
});

export { createAccountWithUiConfirmation };
