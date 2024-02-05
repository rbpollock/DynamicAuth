import { __awaiter } from '../../_virtual/_tslib.js';
import { SolWalletConnector } from '../solWalletConnector.js';
import { SolProviderHelper } from '../solProviderHelper.js';

class InjectedWalletBase extends SolWalletConnector {
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
        var _a;
        /**
         * When Glow wallet is installed and Phantom isn't, isPhantom will
         * still be true. This added check is to return false in that scenario.
         * It relies on the fact that if both Glow and Phantom are enabled,
         * solana.isGlow will return false.
         */
        return (SolProviderHelper.isInstalledHelper(this.name) && !((_a = window.solana) === null || _a === void 0 ? void 0 : _a.isGlow));
    }
    fetchPublicAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isInstalledOnBrowser())
                return;
            return SolProviderHelper.fetchPublicAddressWithName(this.name);
        });
    }
    signMessage(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
            return SolProviderHelper.signMessageWithName(messageToSign, this.name);
        });
    }
    getConnectedAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            return SolProviderHelper.getConnectedAccountsWithName(this.name);
        });
    }
}

export { InjectedWalletBase };
