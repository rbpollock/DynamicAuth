'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.cjs');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var utils = require('@dynamic-labs/utils');
var isSignedMessage = require('./utils/isSignedMessage.cjs');

var _a;
class SolProviderHelper {
    static installedProviderLookup(providerFlags) {
        return walletConnectorCore.ProviderLookup(this.allInstalledProviders(), providerFlags);
    }
    static allInstalledProviders() {
        var _b;
        return this.findSolanaProviders(window.solana).concat(this.findSolanaProviders(window.solflare), this.findSolanaProviders(window.glowSolana), this.findSolanaProviders(window.backpack), this.findSolanaProviders((_b = window.magicEden) === null || _b === void 0 ? void 0 : _b.solana));
    }
    static findSolanaProviders(solana) {
        const solanaProviders = [];
        if (solana && !solana.providers) {
            solanaProviders.push(solana);
        }
        else if (solana && solana.providers) {
            solana.providers.forEach((provider) => {
                solanaProviders.push(provider);
            });
        }
        return solanaProviders;
    }
    static isInstalledHelper(walletName) {
        return this.findProvider(walletName) !== undefined;
    }
    static findProvider(walletName) {
        var _b, _c;
        return (_c = (_b = this.providers)[walletConnectorCore.normalizeWalletName(walletName)]) === null || _c === void 0 ? void 0 : _c.call(_b);
    }
    static fetchPublicAddressWithName(name) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const provider = this.findProvider(name);
            if (!provider) {
                return Promise.resolve(undefined);
            }
            if (!provider.isConnected) {
                yield provider.connect();
            }
            const { publicKey } = provider;
            return publicKey ? publicKey.toString() : Promise.resolve(undefined);
        });
    }
    static connectWithName(name) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const provider = this.findProvider(name);
            if (!provider) {
                return Promise.resolve(undefined);
            }
            try {
                if (!provider.isConnected) {
                    yield provider.connect();
                }
                return provider;
            }
            catch (err) {
                return undefined;
            }
        });
    }
    static signMessageWithName(messageToSign, name) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const walletAddress = yield this.fetchPublicAddressWithName(name);
            if (!walletAddress) {
                return Promise.resolve(undefined);
            }
            const provider = this.findProvider(name);
            if (!provider) {
                return Promise.resolve(undefined);
            }
            if (!provider.isConnected) {
                yield provider.connect();
            }
            const encodedMessage = new TextEncoder().encode(messageToSign);
            const signedMessage = yield provider.signMessage(encodedMessage, 'utf8');
            if (!signedMessage) {
                return Promise.resolve(undefined);
            }
            return utils.bufferToBase64(isSignedMessage.isSignedMessage(signedMessage) ? signedMessage.signature : signedMessage);
        });
    }
    static _setupEventListeners(walletConnector, web3Provider) {
        web3Provider === null || web3Provider === void 0 ? void 0 : web3Provider.on('accountChanged', (publicKey) => this.handleAccountChange(walletConnector, web3Provider, publicKey));
        web3Provider === null || web3Provider === void 0 ? void 0 : web3Provider.on('disconnect', () => walletConnector.emit('disconnect'));
    }
    static _teardownEventListeners(name) {
        const web3Provider = this.findProvider(name);
        if (!web3Provider) {
            return;
        }
        web3Provider.removeAllListeners();
    }
    static getConnectedAccountsWithName(name) {
        var _b, _c;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const provider = this.findProvider(name);
            if (!provider) {
                return [];
            }
            let connectionResult;
            try {
                if (!provider.isConnected) {
                    connectionResult = yield provider.connect({
                        onlyIfTrusted: true,
                    });
                }
            }
            catch (e) {
                return [];
            }
            const address = connectionResult === null || connectionResult === void 0 ? void 0 : connectionResult.address;
            // Solflare does not return the address or public key on connect
            const publicKey = (_b = connectionResult === null || connectionResult === void 0 ? void 0 : connectionResult.publicKey) !== null && _b !== void 0 ? _b : (_c = provider.publicKey) === null || _c === void 0 ? void 0 : _c.toString();
            if (address) {
                return [address];
            }
            else if (publicKey) {
                return [publicKey.toString()];
            }
            else {
                return [];
            }
        });
    }
}
_a = SolProviderHelper;
SolProviderHelper.GlowProvider = () => _a.installedProviderLookup([{ flag: 'isGlow', value: true }]);
SolProviderHelper.CoinbaseProvider = () => _a.findSolanaProviders(window.coinbaseSolana)[0];
SolProviderHelper.PhantomProvider = () => _a.installedProviderLookup([
    { flag: 'isPhantom', value: true },
    { flag: 'isBraveWallet', value: false },
    { flag: 'isExodus', value: false },
]);
SolProviderHelper.MagicEdenProvider = () => _a.installedProviderLookup([
    { flag: 'isMagicEden', value: true },
    { flag: 'isPhantom', value: false },
]);
SolProviderHelper.SolflareProvider = () => _a.installedProviderLookup([{ flag: 'isSolflare', value: true }]);
SolProviderHelper.BraveProvider = () => _a.installedProviderLookup([
    { flag: 'isPhantom', value: true },
    { flag: 'isBraveWallet', value: true },
]);
SolProviderHelper.ExodusProvider = () => _a.installedProviderLookup([
    { flag: 'isPhantom', value: true },
    { flag: 'isExodus', value: true },
]);
SolProviderHelper.BackpackSol = () => _a.installedProviderLookup([{ flag: 'isBackpack', value: true }]);
SolProviderHelper.providers = {
    backpacksol: _a.BackpackSol,
    bravesol: _a.BraveProvider,
    coinbasesolana: _a.CoinbaseProvider,
    exodussol: _a.ExodusProvider,
    glow: _a.GlowProvider,
    magicedensol: _a.MagicEdenProvider,
    phantom: _a.PhantomProvider,
    phantomledger: _a.PhantomProvider,
    solflare: _a.SolflareProvider,
};
SolProviderHelper.handleAccountChange = (walletConnector, web3Provider, address) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    var _b;
    if (!address) {
        yield (web3Provider === null || web3Provider === void 0 ? void 0 : web3Provider.connect());
        if ((_b = web3Provider === null || web3Provider === void 0 ? void 0 : web3Provider.publicKey) === null || _b === void 0 ? void 0 : _b.toString()) {
            walletConnector.emit('accountChange', {
                accounts: [web3Provider.publicKey.toString()],
            });
        }
        return;
    }
    if (address.toString()) {
        walletConnector.emit('accountChange', { accounts: [address.toString()] });
    }
});

exports.SolProviderHelper = SolProviderHelper;
