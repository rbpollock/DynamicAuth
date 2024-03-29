import { hexToBigInt } from 'viem';

/* eslint-disable max-len */
/**
 * Unformat a transaction request
 * This is used to convert the transaction the RPC transporter receives from
 * an eth_sendTransaction call to a format that viem account accepts.
 * This reverts what viem is doing internally with the format function.
 * https://github.com/wagmi-dev/viem/blob/0977829160effbe7dac5a69f43d263605544fa19/src/actions/wallet/sendTransaction.ts#L206
 */
const unFormatTransaction = (transactionRequest) => (Object.assign(Object.assign({}, transactionRequest), { gas: typeof transactionRequest.gas !== 'undefined'
        ? hexToBigInt(transactionRequest.gas)
        : undefined, gasPrice: typeof transactionRequest.gasPrice !== 'undefined'
        ? hexToBigInt(transactionRequest.gasPrice)
        : undefined, maxFeePerGas: typeof transactionRequest.maxFeePerGas !== 'undefined'
        ? hexToBigInt(transactionRequest.maxFeePerGas)
        : undefined, maxPriorityFeePerGas: typeof transactionRequest.maxPriorityFeePerGas !== 'undefined'
        ? hexToBigInt(transactionRequest.maxPriorityFeePerGas)
        : undefined, nonce: typeof transactionRequest.nonce !== 'undefined'
        ? hexToBigInt(transactionRequest.nonce)
        : undefined, value: typeof transactionRequest.value !== 'undefined'
        ? hexToBigInt(transactionRequest.value)
        : undefined }));

export { unFormatTransaction };
