'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var InjectedWalletBase = require('./InjectedWalletBase.cjs');

class ExodusSol extends InjectedWalletBase.InjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'ExodusSol';
    }
}

exports.ExodusSol = ExodusSol;
