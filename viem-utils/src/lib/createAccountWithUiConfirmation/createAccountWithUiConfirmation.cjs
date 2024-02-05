'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.cjs');
var accounts = require('viem/accounts');

const createAccountWithUiConfirmation = ({ account, connector, provider, walletUiUtils, }) => accounts.toAccount({
    address: account.address,
    signMessage: (...args) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _a;
        return walletUiUtils.signMessage({
            connector,
            handler: () => _tslib.__awaiter(void 0, void 0, void 0, function* () { return account.signMessage(...args); }),
            message: (_a = args[0]) === null || _a === void 0 ? void 0 : _a.message.toString(),
            provider,
        });
    }),
    signTransaction: (...args) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        return walletUiUtils.sendTransaction({
            connector,
            handler: () => _tslib.__awaiter(void 0, void 0, void 0, function* () { return account.signTransaction(...args); }),
            provider,
            transaction: args[0],
        });
    }),
    signTypedData: (...args) => walletUiUtils.signMessage({
        connector,
        handler: () => _tslib.__awaiter(void 0, void 0, void 0, function* () { return account.signTypedData(...args); }),
        message: JSON.stringify(args[0]),
        provider,
    }),
});

exports.createAccountWithUiConfirmation = createAccountWithUiConfirmation;
