'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.cjs');
var utils = require('@dynamic-labs/utils');
var solWalletConnector = require('./solWalletConnector.cjs');
var solProviderHelper = require('./solProviderHelper.cjs');

class Solflare extends solWalletConnector.SolWalletConnector {
    constructor() {
        super(...arguments);
        this.name = 'Solflare';
    }
    isInstalledOnBrowser() {
        return solProviderHelper.SolProviderHelper.isInstalledHelper(this.name);
    }
    fetchPublicAddress() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            /**
             * It should redirect to in-app browser if on mobile and if not in the in-app browser,
             * this checks if it is not in the in-app browser by checking if the provider is not available.
             */
            if (utils.isMobile() && !this.isInstalledOnBrowser()) {
                utils.handleMobileWalletRedirect({
                    nativeLink: 'solflare://ul/v1/browse',
                    universalLink: 'https://solflare.com/ul/v1/browse',
                });
                return;
            }
            return solProviderHelper.SolProviderHelper.fetchPublicAddressWithName(this.name);
        });
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
    signMessage(messageToSign) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const walletAddress = yield this.fetchPublicAddress();
            if (!walletAddress) {
                return undefined;
            }
            const provider = solProviderHelper.SolProviderHelper.findProvider(this.name);
            if (!provider) {
                return undefined;
            }
            const encodedMessage = new TextEncoder().encode(messageToSign);
            const isSignedMessage = (value) => value.signature !== undefined;
            yield provider.connect();
            /**
             * TODO: Remove the sleep once problem is fixed on Solflare's extension.
             * Tracked in DYN-442
             */
            yield new Promise((resolve) => {
                setTimeout(resolve, 100);
            });
            const rawMessage = yield provider.signMessage(encodedMessage, 'utf8');
            return isSignedMessage(rawMessage)
                ? utils.bufferToBase64(rawMessage.signature)
                : undefined;
        });
    }
    getConnectedAccounts() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return solProviderHelper.SolProviderHelper.getConnectedAccountsWithName(this.name);
        });
    }
    setupEventListeners() {
        solProviderHelper.SolProviderHelper._setupEventListeners(this, solProviderHelper.SolProviderHelper.findProvider(this.name));
    }
    teardownEventListeners() {
        solProviderHelper.SolProviderHelper._teardownEventListeners(this.name);
    }
}

exports.Solflare = Solflare;
