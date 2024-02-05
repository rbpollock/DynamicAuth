import { TransactionGasCannotBeSponsoredError, InsufficientFundsError } from '@dynamic-labs/utils';
import { isTransactionExecutionError } from '@dynamic-labs/viem-utils';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import '../../../utils/constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';

const errorCodesMapping = {
    '-32603': 'Could not replace existing transaction',
    0: 'The operation either timed out or was not allowed.',
    16: 'Invalid Passkey signature. Select the passkey for this account and device.',
    3: 'You reached the limit of passkeys for this account.',
    INSUFFICIENT_FUNDS: 'Insufficient funds for this transaction.',
};
const errorReasonsMapping = {
    'provided ENS name resolves to null': 'Invalid address. Please check that the entered address is correct.',
};
const getCode = (error) => {
    var _a;
    const err = error;
    return (err === null || err === void 0 ? void 0 : err.code) || ((_a = err === null || err === void 0 ? void 0 : err.cause) === null || _a === void 0 ? void 0 : _a.code);
};
const hasReason = (error) => 'reason' in error && error.reason !== undefined;
const transactionErrorMessage = (err) => {
    let error = err;
    if (isTransactionExecutionError(err)) {
        error = err.walk();
    }
    logger.debug('transaction error]:', error);
    if (TransactionGasCannotBeSponsoredError.isInstance(error)) {
        return;
    }
    if (InsufficientFundsError.isInstance(error)) {
        return errorCodesMapping.INSUFFICIENT_FUNDS;
    }
    const code = getCode(error);
    if (code !== undefined && errorCodesMapping[code]) {
        return errorCodesMapping[code];
    }
    if (hasReason(error) && errorReasonsMapping[error.reason]) {
        return errorReasonsMapping[error.reason];
    }
    return 'Something went wrong.';
};

export { transactionErrorMessage };
