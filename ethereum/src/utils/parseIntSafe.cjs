'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

const parseIntSafe = (value, radix = 10) => {
    try {
        const int = parseInt(String(value), radix);
        if (isNaN(int)) {
            walletConnectorCore.logger.error(`Error parsing ${value}`);
            return undefined;
        }
        return int;
    }
    catch (e) {
        walletConnectorCore.logger.error(`Error parsing ${value} to int: ${e}`);
    }
    return undefined;
};

exports.parseIntSafe = parseIntSafe;
