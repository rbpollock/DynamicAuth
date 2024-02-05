import { __awaiter } from '../../_virtual/_tslib.js';
import { OAuthExtension } from '@magic-ext/oauth';
import { Magic } from 'magic-sdk';
import { logger } from '@dynamic-labs/wallet-connector-core';
import { MagicWalletConnector, storedAddressKey } from '../MagicWalletConnector/MagicWalletConnector.js';
import { MagicClientNetworkHandler } from '../MagicClientNetworkHandler/MagicClientNetworkHandler.js';

class MagicSocialWalletConnector extends MagicWalletConnector {
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
        this._magicClient = new MagicClientNetworkHandler({
            createClient: (config) => new Magic(apiKey, Object.assign(Object.assign({}, config), { extensions: [new OAuthExtension()] })),
            defaultChainId: defaultChainId,
            evmNetworks: opts.evmNetworks,
            walletConnector: this,
        });
    }
    connect(provider) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loginWithMagic(provider);
        });
    }
    loginWithMagic(provider) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!provider) {
                logger.warn('loginWithMagic called without a provider, returning early');
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
        return __awaiter(this, void 0, void 0, function* () {
            const client = this._magicClient.getClient();
            try {
                const result = yield client.oauth.getRedirectResult();
                const { publicAddress } = result.magic.userMetadata;
                if (publicAddress) {
                    localStorage.setItem(storedAddressKey, publicAddress);
                }
                return Object.assign(Object.assign({}, result.oauth), { didToken: result.magic.idToken, oauthId: result.oauth.userInfo.sub });
            }
            catch (e) {
                logger.error(e);
                return undefined;
            }
        });
    }
}

export { MagicSocialWalletConnector };
