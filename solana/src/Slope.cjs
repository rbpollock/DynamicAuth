'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.cjs');
var web3_js = require('@solana/web3.js');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var solWalletConnector = require('./solWalletConnector.cjs');

class Slope extends solWalletConnector.SolWalletConnector {
    constructor() {
        super(...arguments);
        this.name = 'Slope';
        this.isConnectData = (value) => { var _a; return ((_a = value.data) === null || _a === void 0 ? void 0 : _a.publicKey) !== undefined; };
        this.isSignatureData = (value) => { var _a; return ((_a = value.data) === null || _a === void 0 ? void 0 : _a.signature) !== undefined; };
    }
    get wallet() {
        if (!window.Slope) {
            return undefined;
        }
        if (!Slope._wallet) {
            Slope._wallet = new window.Slope();
        }
        return Slope._wallet;
    }
    connect() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (this.wallet === undefined)
                return;
            yield this.wallet.connect();
        });
    }
    getSigner() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
    getBalance() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            try {
                if (this.wallet === undefined)
                    return undefined;
                const response = yield this.wallet.connect();
                const publicKey = new web3_js.PublicKey(this.isConnectData(response) && response.data.publicKey);
                const balance = this.lamportsToSol(yield this.getWalletClient().getBalance(publicKey));
                return balance.toString();
            }
            catch (e) {
                walletConnectorCore.logger.debug(e);
                return undefined;
            }
        });
    }
    isInstalledOnBrowser() {
        return typeof window.Slope === 'function';
    }
    fetchPublicAddress() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            try {
                if (this.wallet === undefined)
                    return undefined;
                const response = yield this.wallet.connect();
                return this.isConnectData(response) ? response.data.publicKey : undefined;
            }
            catch (e) {
                walletConnectorCore.logger.debug(e);
                return undefined;
            }
        });
    }
    signMessage(messageToSign) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const encodedMessage = new TextEncoder().encode(messageToSign);
            try {
                if (this.wallet === undefined)
                    return undefined;
                const response = yield this.wallet.signMessage(encodedMessage);
                return this.isSignatureData(response)
                    ? response.data.signature
                    : undefined;
            }
            catch (e) {
                walletConnectorCore.logger.debug(e);
                return undefined;
            }
        });
    }
    getConnectedAccounts() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (this.wallet === undefined)
                return [];
            const response = yield this.wallet.connect();
            return this.isConnectData(response) ? [response.data.publicKey] : [];
        });
    }
}

exports.Slope = Slope;
