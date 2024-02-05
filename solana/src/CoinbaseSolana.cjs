'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.cjs');
var utils = require('@dynamic-labs/utils');
var solWalletConnector = require('./solWalletConnector.cjs');
var solProviderHelper = require('./solProviderHelper.cjs');
require('@solana/web3.js');
require('@dynamic-labs/wallet-connector-core');
require('./injected/PhantomLedger.cjs');
var isSignedMessage = require('./utils/isSignedMessage.cjs');

class CoinbaseSolana extends solWalletConnector.SolWalletConnector {
    constructor() {
        super(...arguments);
        this.name = 'CoinbaseSolana';
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
            if (this.isInstalledOnBrowser()) {
                return solProviderHelper.SolProviderHelper.fetchPublicAddressWithName(this.name);
            }
            return;
        });
    }
    signMessage(messageToSign) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const walletAddress = yield this.fetchPublicAddress();
            if (!walletAddress) {
                return undefined;
            }
            const provider = yield this.getSigner();
            if (!provider) {
                return undefined;
            }
            const encodedMessage = new TextEncoder().encode(messageToSign);
            const signedMessage = yield provider.signMessage(encodedMessage, walletAddress);
            if (!signedMessage) {
                return undefined;
            }
            return utils.bufferToBase64(isSignedMessage.isSignedMessage(signedMessage) ? signedMessage.signature : signedMessage);
        });
    }
    getConnectedAccounts() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return solProviderHelper.SolProviderHelper.getConnectedAccountsWithName(this.name);
        });
    }
}

exports.CoinbaseSolana = CoinbaseSolana;
