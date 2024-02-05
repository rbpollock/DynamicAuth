'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var keplr = require('@dynamic-labs/keplr');

const CosmosWalletConnectors = (props) => [
    ...keplr.KeplrWalletConnectors(props),
];

exports.CosmosWalletConnectors = CosmosWalletConnectors;
