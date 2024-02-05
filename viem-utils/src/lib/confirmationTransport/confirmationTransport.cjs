'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.cjs');
var viem = require('viem');
var interceptTransport = require('../interceptTransport/interceptTransport.cjs');

const confirmationTransport = ({ transport, connector, walletUiUtils, getAccounts, onPersonalSign, onSendTransaction, onSignTypedData, provider, }) => interceptTransport.interceptTransport({
    getAccounts,
    onPersonalSign: onPersonalSign
        ? (args) => walletUiUtils.signMessage({
            connector,
            handler: () => onPersonalSign(args),
            message: viem.fromHex(args.message, 'string'),
            provider,
        })
        : undefined,
    onSendTransaction: onSendTransaction
        ? (args) => walletUiUtils.sendTransaction({
            connector,
            handler: (transaction) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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

exports.confirmationTransport = confirmationTransport;
