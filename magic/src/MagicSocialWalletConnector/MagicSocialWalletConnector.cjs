'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var oauth = require('@magic-ext/oauth');
var magicSdk = require('magic-sdk');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var MagicWalletConnector = require('../MagicWalletConnector/MagicWalletConnector.cjs');
var MagicClientNetworkHandler = require('../MagicClientNetworkHandler/MagicClientNetworkHandler.cjs');

class MagicSocialWalletConnector extends MagicWalletConnector.MagicWalletConnector {
    constructor(opts) {
        var _a, _b, _c, _d;
        super(opts);
        this.name = 'Magic Social';
        this.canConnectViaSocial = true;
        const apiKey = (_b = (_a = opts.apiProviders) === null || _a === void 0 ? void 0 : _a.magicLink) === null || _b === void 0 ? void 0 : _b.providerProjectId;
        const defaultChainId = (_d = (_c = opts.apiProviders) === null || _c === void 0 ? void 0 : _c.magicLink) === null || _d === void 0 ? void 0 : _d.defaultChainId;
        if (!apiKey) {
            throw new Error('Missing MagicLink configuration. Add your MagicLink API key to your project configuration via the Dynamic Labs dashboard.');
        }
        this._magicClient = new MagicClientNetworkHandler.MagicClientNetworkHandler({
            createClient: (config) => new magicSdk.Magic(apiKey, Object.assign(Object.assign({}, config), { extensions: [new oauth.OAuthExtension()] })),
            defaultChainId: defaultChainId,
            evmNetworks: opts.evmNetworks,
            walletConnector: this,
        });
    }
    connect(provider) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.loginWithMagic(provider);
        });
    }
    loginWithMagic(provider) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (!provider) {
                walletConnectorCore.logger.warn('loginWithMagic called without a provider, returning early');
                return;
            }
            const client = this._magicClient.getClient();
            if (yield client.user.isLoggedIn()) {
                return (yield client.user.getInfo()).publicAddress;
            }
            yield client.oauth.loginWithRedirect({
                provider,
                redirectURI: window.location.href,
            });
            return undefined;
        });
    }
    getSession() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const client = this._magicClient.getClient();
            try {
                const result = yield client.oauth.getRedirectResult();
                const { publicAddress } = result.magic.userMetadata;
                if (publicAddress) {
                    localStorage.setItem(MagicWalletConnector.storedAddressKey, publicAddress);
                }
                return Object.assign(Object.assign({}, result.oauth), { didToken: result.magic.idToken, oauthId: result.oauth.userInfo.sub });
            }
            catch (e) {
                walletConnectorCore.logger.error(e);
                return undefined;
            }
        });
    }
}

exports.MagicSocialWalletConnector = MagicSocialWalletConnector;
