import { __awaiter } from '../_virtual/_tslib.js';
import { isMobile, handleMobileWalletRedirect, bufferToBase64 } from '@dynamic-labs/utils';
import { SolWalletConnector } from './solWalletConnector.js';
import { SolProviderHelper } from './solProviderHelper.js';

class Solflare extends SolWalletConnector {
    constructor() {
        super(...arguments);
        this.name = 'Solflare';
    }
    isInstalledOnBrowser() {
        return SolProviderHelper.isInstalledHelper(this.name);
    }
    fetchPublicAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * It should redirect to in-app browser if on mobile and if not in the in-app browser,
             * this checks if it is not in the in-app browser by checking if the provider is not available.
             */
            if (isMobile() && !this.isInstalledOnBrowser()) {
                handleMobileWalletRedirect({
                    nativeLink: 'solflare://ul/v1/browse',
                    universalLink: 'https://solflare.com/ul/v1/browse',
                });
                return;
            }
            return SolProviderHelper.fetchPublicAddressWithName(this.name);
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield SolProviderHelper.connectWithName(this.name);
        });
    }
    getSigner() {
        return __awaiter(this, void 0, void 0, function* () {
            return SolProviderHelper.connectWithName(this.name);
        });
    }
    signMessage(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
            const walletAddress = yield this.fetchPublicAddress();
            if (!walletAddress) {
                return undefined;
            }
            const provider = SolProviderHelper.findProvider(this.name);
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
                ? bufferToBase64(rawMessage.signature)
                : undefined;
        });
    }
    getConnectedAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            return SolProviderHelper.getConnectedAccountsWithName(this.name);
        });
    }
    setupEventListeners() {
        SolProviderHelper._setupEventListeners(this, SolProviderHelper.findProvider(this.name));
    }
    teardownEventListeners() {
        SolProviderHelper._teardownEventListeners(this.name);
    }
}

export { Solflare };
