'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.cjs');
var solWalletConnector = require('./solWalletConnector.cjs');
var solProviderHelper = require('./solProviderHelper.cjs');

class Glow extends solWalletConnector.SolWalletConnector {
    constructor() {
        super(...arguments);
        this.name = 'Glow';
    }
    setupEventListeners() {
        solProviderHelper.SolProviderHelper._setupEventListeners(this, solProviderHelper.SolProviderHelper.findProvider(this.name));
    }
    teardownEventListeners() {
        solProviderHelper.SolProviderHelper._teardownEventListeners(this.name);
    }
    connect() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield solProviderHelper.SolProviderHelper.connectWithName(this.name);
        });
    }
    getSigner() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return solProviderHelper.SolProviderHelper.connectWithName(this.name);
        });
    }
    isInstalledOnBrowser() {
        return solProviderHelper.SolProviderHelper.isInstalledHelper(this.name);
    }
    fetchPublicAddress() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return solProviderHelper.SolProviderHelper.fetchPublicAddressWithName(this.name);
        });
    }
    signMessage(messageToSign) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return solProviderHelper.SolProviderHelper.signMessageWithName(messageToSign, this.name);
        });
    }
    getConnectedAccounts() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return solProviderHelper.SolProviderHelper.getConnectedAccountsWithName(this.name);
        });
    }
}

exports.Glow = Glow;
