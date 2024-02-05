import { __awaiter } from '../_virtual/_tslib.js';
import { SolWalletConnector } from './solWalletConnector.js';
import { SolProviderHelper } from './solProviderHelper.js';

class Glow extends SolWalletConnector {
    constructor() {
        super(...arguments);
        this.name = 'Glow';
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

export { Glow };
