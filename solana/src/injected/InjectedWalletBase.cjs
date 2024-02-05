'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var solWalletConnector = require('../solWalletConnector.cjs');
var solProviderHelper = require('../solProviderHelper.cjs');

class InjectedWalletBase extends solWalletConnector.SolWalletConnector {
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
        var _a;
        /**
         * When Glow wallet is installed and Phantom isn't, isPhantom will
         * still be true. This added check is to return false in that scenario.
         * It relies on the fact that if both Glow and Phantom are enabled,
         * solana.isGlow will return false.
         */
        return (solProviderHelper.SolProviderHelper.isInstalledHelper(this.name) && !((_a = window.solana) === null || _a === void 0 ? void 0 : _a.isGlow));
    }
    fetchPublicAddress() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (!this.isInstalledOnBrowser())
                return;
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

exports.InjectedWalletBase = InjectedWalletBase;
