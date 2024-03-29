'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var shouldLowercaseAddress = require('../../../shouldLowercaseAddress.cjs');

const normalizeAddress = (rawAddress, chain) => {
    if (rawAddress.startsWith('0x')) {
        rawAddress = rawAddress.slice(2);
    }
    const address = shouldLowercaseAddress.shouldLowercaseAddress(chain)
        ? rawAddress.toLowerCase()
        : rawAddress;
    return address;
};

exports.normalizeAddress = normalizeAddress;
