'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var EmailMagicWalletConnector = require('../EmailMagicWalletConnector/EmailMagicWalletConnector.cjs');

class EmailOTPMagicWalletConnector extends EmailMagicWalletConnector.EmailMagicWalletConnector {
    constructor() {
        super(...arguments);
        this.name = 'Magic Email OTP';
    }
    cancelLogIn() {
        var _a;
        (_a = this._handle) === null || _a === void 0 ? void 0 : _a.emit('cancel');
    }
    verifyOneTimePassword(otp) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const handle = this._handle;
            const invalidOTPError = new Error('Please double check your code and try again');
            if (!handle) {
                throw new Error('Login with email OTP before verifying');
            }
            return new Promise((resolve, reject) => {
                handle
                    .on('done', () => resolve(true))
                    .on('invalid-email-otp', () => reject(invalidOTPError))
                    .on('error', reject)
                    .catch(reject)
                    .emit('verify-email-otp', otp);
            }).then((result) => _tslib.__awaiter(this, void 0, void 0, function* () {
                yield this.getAndCacheWalletAddress();
                return result;
            }));
        });
    }
    loginWithMagic() {
        var _a;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const client = this._magicClient.getClient();
            const user = yield this.getUserMetadata();
            if (user && user.publicAddress) {
                this.setEmail(user === null || user === void 0 ? void 0 : user.email);
                return user.publicAddress;
            }
            const { email } = this;
            if (!email)
                return;
            (_a = this._handle) === null || _a === void 0 ? void 0 : _a.emit('cancel');
            try {
                yield this._handle;
            }
            catch (err) {
                walletConnectorCore.logger.error(err);
            }
            this._handle = client.auth.loginWithEmailOTP({
                email,
                showUI: false,
            });
            return this._handle;
        });
    }
}

exports.EmailOTPMagicWalletConnector = EmailOTPMagicWalletConnector;
