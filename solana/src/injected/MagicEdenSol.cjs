'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var InjectedWalletBase = require('./InjectedWalletBase.cjs');

class MagicEdenSol extends InjectedWalletBase.InjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'MagicEdenSol';
    }
}

exports.MagicEdenSol = MagicEdenSol;
