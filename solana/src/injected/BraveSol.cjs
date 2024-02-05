'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var solProviderHelper = require('../solProviderHelper.cjs');
var InjectedWalletBase = require('./InjectedWalletBase.cjs');

class BraveSol extends InjectedWalletBase.InjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'BraveSol';
    }
    fetchPublicAddress() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return solProviderHelper.SolProviderHelper.fetchPublicAddressWithName(this.name);
        });
    }
}

exports.BraveSol = BraveSol;
