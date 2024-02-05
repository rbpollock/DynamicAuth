import { __awaiter } from '../_virtual/_tslib.js';
import { bufferToBase64 } from '@dynamic-labs/utils';
import { SolWalletConnector } from './solWalletConnector.js';
import { SolProviderHelper } from './solProviderHelper.js';
import '@solana/web3.js';
import '@dynamic-labs/wallet-connector-core';
import './injected/PhantomLedger.js';
import { isSignedMessage } from './utils/isSignedMessage.js';

class CoinbaseSolana extends SolWalletConnector {
    constructor() {
        super(...arguments);
        this.name = 'CoinbaseSolana';
    }
    setupEventListeners() {
        SolProviderHelper._setupEventListeners(this, SolProviderHelper.findProvider(this.name));
    }
    teardownEventListeners() {
        SolProviderHelper._teardownEventListeners(this.name);
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
    isInstalledOnBrowser() {
        return SolProviderHelper.isInstalledHelper(this.name);
    }
    fetchPublicAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isInstalledOnBrowser()) {
                return SolProviderHelper.fetchPublicAddressWithName(this.name);
            }
            return;
        });
    }
    signMessage(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
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
            return bufferToBase64(isSignedMessage(signedMessage) ? signedMessage.signature : signedMessage);
        });
    }
    getConnectedAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            return SolProviderHelper.getConnectedAccountsWithName(this.name);
        });
    }
}

export { CoinbaseSolana };
