'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var iconic = require('@dynamic-labs/iconic');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../../context/ViewContext/ViewContext.cjs');
require('react');
var error = require('../../../assets/error.cjs');

const chainIconMap = {
    algorand: iconic.AlgorandIcon,
    cosmos: iconic.CosmosIcon,
    evm: iconic.EthereumIcon,
    flow: iconic.FlowIcon,
    solana: iconic.SolanaIcon,
    starknet: iconic.StarknetIcon,
};
const getChainIcon = (chain) => {
    var _a, _b, _c;
    const chainName = (_b = (_a = walletConnectorCore.getChainInfo(chain)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '';
    return (_c = chainIconMap[chainName]) !== null && _c !== void 0 ? _c : error.ReactComponent;
};

exports.getChainIcon = getChainIcon;
