'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');
var viemUtils = require('@dynamic-labs/viem-utils');
require('@dynamic-labs/sdk-api');
var logger = require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../shared/consts/index.cjs');

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
    if (viemUtils.isTransactionExecutionError(err)) {
        error = err.walk();
    }
    logger.logger.debug('transaction error]:', error);
    if (utils.TransactionGasCannotBeSponsoredError.isInstance(error)) {
        return;
    }
    if (utils.InsufficientFundsError.isInstance(error)) {
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

exports.transactionErrorMessage = transactionErrorMessage;
