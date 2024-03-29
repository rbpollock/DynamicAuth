'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var viem = require('viem');

/* eslint-disable max-len */
/**
 * Unformat a transaction request
 * This is used to convert the transaction the RPC transporter receives from
 * an eth_sendTransaction call to a format that viem account accepts.
 * This reverts what viem is doing internally with the format function.
 * https://github.com/wagmi-dev/viem/blob/0977829160effbe7dac5a69f43d263605544fa19/src/actions/wallet/sendTransaction.ts#L206
 */
const unFormatTransaction = (transactionRequest) => (Object.assign(Object.assign({}, transactionRequest), { gas: typeof transactionRequest.gas !== 'undefined'
        ? viem.hexToBigInt(transactionRequest.gas)
        : undefined, gasPrice: typeof transactionRequest.gasPrice !== 'undefined'
        ? viem.hexToBigInt(transactionRequest.gasPrice)
        : undefined, maxFeePerGas: typeof transactionRequest.maxFeePerGas !== 'undefined'
        ? viem.hexToBigInt(transactionRequest.maxFeePerGas)
        : undefined, maxPriorityFeePerGas: typeof transactionRequest.maxPriorityFeePerGas !== 'undefined'
        ? viem.hexToBigInt(transactionRequest.maxPriorityFeePerGas)
        : undefined, nonce: typeof transactionRequest.nonce !== 'undefined'
        ? viem.hexToBigInt(transactionRequest.nonce)
        : undefined, value: typeof transactionRequest.value !== 'undefined'
        ? viem.hexToBigInt(transactionRequest.value)
        : undefined }));

exports.unFormatTransaction = unFormatTransaction;
