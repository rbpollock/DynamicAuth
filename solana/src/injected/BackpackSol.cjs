'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var utils = require('@dynamic-labs/utils');
var solProviderHelper = require('../solProviderHelper.cjs');
var InjectedWalletBase = require('./InjectedWalletBase.cjs');

class BackpackSol extends InjectedWalletBase.InjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'BackpackSol';
    }
    setupEventListeners() {
        const web3Provider = solProviderHelper.SolProviderHelper.findProvider(this.name);
        if (!web3Provider)
            return;
        web3Provider === null || web3Provider === void 0 ? void 0 : web3Provider.on('activeWalletDidChange', (publicKey) => solProviderHelper.SolProviderHelper.handleAccountChange(this, web3Provider, publicKey));
        solProviderHelper.SolProviderHelper._setupEventListeners(this, web3Provider);
    }
    fetchPublicAddress() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return solProviderHelper.SolProviderHelper.fetchPublicAddressWithName(this.name);
        });
    }
    getSigner() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return solProviderHelper.SolProviderHelper.connectWithName(this.name);
        });
    }
    signMessage(messageToSign) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const publicAddress = yield this.fetchPublicAddress();
            if (!publicAddress) {
                return undefined;
            }
            const provider = yield this.getSigner();
            if (!provider) {
                return undefined;
            }
            const signedMessage = yield provider.signMessage(Buffer.from(messageToSign, 'utf8'));
            if (!signedMessage) {
                return undefined;
            }
            if (typeof signedMessage === 'object' && 'signature' in signedMessage) {
                return utils.bufferToBase64(signedMessage.signature);
            }
            return utils.bufferToBase64(signedMessage);
        });
    }
    getConnectedAccounts() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return solProviderHelper.SolProviderHelper.getConnectedAccountsWithName(this.name);
        });
    }
}

exports.BackpackSol = BackpackSol;
