'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var BraveSol = require('./BraveSol.cjs');
var ExodusSol = require('./ExodusSol.cjs');
var PhantomLedger = require('./PhantomLedger.cjs');
var Phantom = require('./Phantom.cjs');
var BackpackSol = require('./BackpackSol.cjs');
var MagicEdenSol = require('./MagicEdenSol.cjs');

const injectedWallets = [
    BraveSol.BraveSol,
    ExodusSol.ExodusSol,
    BackpackSol.BackpackSol,
    PhantomLedger.PhantomLedger,
    Phantom.Phantom,
    MagicEdenSol.MagicEdenSol,
];

exports.injectedWallets = injectedWallets;
