import { __awaiter } from '../../_virtual/_tslib.js';
import { MagicWalletConnector } from '../MagicWalletConnector/MagicWalletConnector.js';

class EmailMagicWalletConnector extends MagicWalletConnector {
    constructor() {
        super(...arguments);
        this.name = 'Magic Link';
        this.canConnectViaEmail = true;
    }
    get email() {
        return this._email;
    }
    setEmail(email) {
        this._email = email;
        if (!email) {
            localStorage.removeItem(EmailMagicWalletConnector.storageEmailKey);
        }
        else {
            localStorage.setItem(EmailMagicWalletConnector.storageEmailKey, email);
        }
    }
    clearEmail() {
        this.cancelPreviousEmail();
        this.setEmail(undefined);
    }
    endSession() {
        const _super = Object.create(null, {
            endSession: { get: () => super.endSession }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.endSession.call(this);
            this.clearEmail();
        });
    }
    cancelPreviousEmail() {
        var _a;
        (_a = this._currentAuthCancellablePromise) === null || _a === void 0 ? void 0 : _a.cancel();
    }
    loginWithMagic() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this._magicClient.getClient();
            const user = yield this.getUserMetadata();
            if (user && user.publicAddress) {
                this.setEmail(user === null || user === void 0 ? void 0 : user.email);
                return user.publicAddress;
            }
            const { email } = this;
            if (!email)
                return;
            return client.auth.loginWithMagicLink({
                email,
                showUI: false,
            });
        });
    }
}
EmailMagicWalletConnector.storageEmailKey = 'magic-link-email';

export { EmailMagicWalletConnector };
