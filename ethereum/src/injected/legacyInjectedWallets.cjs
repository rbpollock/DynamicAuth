'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var BloctoInjected = require('./BloctoInjected.cjs');
var BraveEvm = require('./BraveEvm.cjs');
var Dawn = require('./Dawn.cjs');
var ExodusEvm = require('./ExodusEvm.cjs');
var Frame = require('./Frame.cjs');
var GameStop = require('./GameStop.cjs');
var Opera = require('./Opera.cjs');
var PhantomEvm = require('./PhantomEvm.cjs');
var Trust = require('./Trust.cjs');
var Zerion = require('./Zerion.cjs');
var Superb = require('./Superb.cjs');
var Rabby = require('./Rabby.cjs');

const legacyInjectedWallets = [
    PhantomEvm.PhantomEvm,
    BloctoInjected.BloctoInjected,
    BraveEvm.BraveEvm,
    Dawn.Dawn,
    ExodusEvm.ExodusEvm,
    Frame.Frame,
    GameStop.GameStop,
    Opera.Opera,
    Trust.Trust,
    Zerion.Zerion,
    Superb.Superb,
    Rabby.Rabby,
];
const filteredLegacyInjectedWalletKeys = [
    'phantomevm',
    'coinbase',
    'bloctoinjected',
    'dawn',
    'exodusevm',
    'frame',
    'gamestop',
    'opera',
    'trust',
    'zerion',
    'superb',
    'rabby',
    'braveevm',
];

exports.filteredLegacyInjectedWalletKeys = filteredLegacyInjectedWalletKeys;
exports.legacyInjectedWallets = legacyInjectedWallets;
