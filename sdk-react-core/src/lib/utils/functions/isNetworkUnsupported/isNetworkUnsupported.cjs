'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');

// Network is not supported if:
//   - its undefined
//   - its not in evmNetworks
const isNetworkUnsupported = (network, evmNetworks) => !(evmNetworks === null || evmNetworks === void 0 ? void 0 : evmNetworks.find((element) => network && element.chainId === utils.parseChainId(network)));

exports.isNetworkUnsupported = isNetworkUnsupported;
