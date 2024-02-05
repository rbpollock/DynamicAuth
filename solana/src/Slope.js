import { __awaiter } from '../_virtual/_tslib.js';
import { PublicKey } from '@solana/web3.js';
import { logger } from '@dynamic-labs/wallet-connector-core';
import { SolWalletConnector } from './solWalletConnector.js';

class Slope extends SolWalletConnector {
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
        return __awaiter(this, void 0, void 0, function* () {
            if (this.wallet === undefined)
                return;
            yield this.wallet.connect();
        });
    }
    getSigner() {
        return __awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
    getBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.wallet === undefined)
                    return undefined;
                const response = yield this.wallet.connect();
                const publicKey = new PublicKey(this.isConnectData(response) && response.data.publicKey);
                const balance = this.lamportsToSol(yield this.getWalletClient().getBalance(publicKey));
                return balance.toString();
            }
            catch (e) {
                logger.debug(e);
                return undefined;
            }
        });
    }
    isInstalledOnBrowser() {
        return typeof window.Slope === 'function';
    }
    fetchPublicAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.wallet === undefined)
                    return undefined;
                const response = yield this.wallet.connect();
                return this.isConnectData(response) ? response.data.publicKey : undefined;
            }
            catch (e) {
                logger.debug(e);
                return undefined;
            }
        });
    }
    signMessage(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
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
                logger.debug(e);
                return undefined;
            }
        });
    }
    getConnectedAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.wallet === undefined)
                return [];
            const response = yield this.wallet.connect();
            return this.isConnectData(response) ? [response.data.publicKey] : [];
        });
    }
}

export { Slope };
