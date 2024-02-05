'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var CoinbaseSolana = require('./CoinbaseSolana.cjs');
var Glow = require('./Glow.cjs');
var Slope = require('./Slope.cjs');
var Solflare = require('./Solflare.cjs');
var index = require('./injected/index.cjs');
var solWalletConnector = require('./solWalletConnector.cjs');
var solProviderHelper = require('./solProviderHelper.cjs');
var isSignedMessage = require('./utils/isSignedMessage.cjs');
var isBackpackSolanaSigner = require('./utils/isBackpackSolanaSigner.cjs');

/* eslint-disable @typescript-eslint/no-unused-vars */
const SolanaWalletConnectors = (props) => [
    ...index.injectedWallets,
    CoinbaseSolana.CoinbaseSolana,
    Glow.Glow,
    Slope.Slope,
    Solflare.Solflare,
];

exports.Solflare = Solflare.Solflare;
exports.SolWalletConnector = solWalletConnector.SolWalletConnector;
exports.SolProviderHelper = solProviderHelper.SolProviderHelper;
exports.isSignedMessage = isSignedMessage.isSignedMessage;
exports.isBackpackSolanaSigner = isBackpackSolanaSigner.isBackpackSolanaSigner;
exports.SolanaWalletConnectors = SolanaWalletConnectors;
