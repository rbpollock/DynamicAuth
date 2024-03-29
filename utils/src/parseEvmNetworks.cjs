'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var parseChainId = require('./parseChainId.cjs');

const parseEvmNetworks = (networks) => {
    const clone = networks.slice();
    return clone.map((network) => {
        network.chainId = parseChainId.parseChainId(network.chainId);
        network.networkId = parseChainId.parseChainId(network.networkId);
        return network;
    });
};

exports.parseEvmNetworks = parseEvmNetworks;
