import { __awaiter } from '../../_virtual/_tslib.js';
import { bufferToBase64 } from '@dynamic-labs/utils';
import { SolProviderHelper } from '../solProviderHelper.js';
import { InjectedWalletBase } from './InjectedWalletBase.js';

class BackpackSol extends InjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'BackpackSol';
    }
    setupEventListeners() {
        const web3Provider = SolProviderHelper.findProvider(this.name);
        if (!web3Provider)
            return;
        web3Provider === null || web3Provider === void 0 ? void 0 : web3Provider.on('activeWalletDidChange', (publicKey) => SolProviderHelper.handleAccountChange(this, web3Provider, publicKey));
        SolProviderHelper._setupEventListeners(this, web3Provider);
    }
    fetchPublicAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            return SolProviderHelper.fetchPublicAddressWithName(this.name);
        });
    }
    getSigner() {
        return __awaiter(this, void 0, void 0, function* () {
            return SolProviderHelper.connectWithName(this.name);
        });
    }
    signMessage(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
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
                return bufferToBase64(signedMessage.signature);
            }
            return bufferToBase64(signedMessage);
        });
    }
    getConnectedAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            return SolProviderHelper.getConnectedAccountsWithName(this.name);
        });
    }
}

export { BackpackSol };
