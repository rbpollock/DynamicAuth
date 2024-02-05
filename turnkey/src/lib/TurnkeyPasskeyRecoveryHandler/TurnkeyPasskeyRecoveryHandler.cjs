'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.cjs');
var iframeStamper = require('@turnkey/iframe-stamper');
var http = require('@turnkey/http');
var utils = require('@dynamic-labs/utils');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

const turnkeyBaseUrl = 'https://api.turnkey.com';
const turnkeyRecoveryUrl = 'https://recovery.turnkey.com';
const TURNKEY_RECOVERY_CREDENTIAL_EXPIRATION_SECONDS = 15;
class TurnkeyPasskeyRecoveryHandler {
    get publicKey() {
        return this.__publicKey;
    }
    set recoveryUserId(turnkeyRecoveryUserId) {
        this.__turnkeyRecoveryUserId = turnkeyRecoveryUserId;
    }
    clear() {
        var _a;
        (_a = this.__iframeStamper) === null || _a === void 0 ? void 0 : _a.clear();
        this.__iframeStamper = undefined;
        this.__publicKey = undefined;
        this.__client = undefined;
        this.__turnkeyRecoveryUserId = undefined;
    }
    initRecovery(iframeContainerId, iframeElementId) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            this.__iframeStamper = new iframeStamper.IframeStamper({
                iframeContainerId,
                iframeElementId,
                iframeUrl: turnkeyRecoveryUrl,
            });
            yield this.__iframeStamper.init();
            this.__publicKey = this.__iframeStamper.publicKey();
            return this.__publicKey;
        });
    }
    verifyRecoveryCode(recoveryBundle, organizationId) {
        var _a, _b;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (!this.__iframeStamper) {
                throw new utils.DynamicError('Cannot proceed with your request');
            }
            try {
                yield this.__iframeStamper.injectRecoveryBundle(recoveryBundle);
                this.__client = new http.TurnkeyClient({
                    baseUrl: turnkeyBaseUrl,
                }, this.__iframeStamper);
                if (!organizationId || !this.__turnkeyRecoveryUserId) {
                    throw new utils.DynamicError('Cannot proceed with your request');
                }
                const userResponse = yield this.__client.getUser({
                    organizationId,
                    userId: this.__turnkeyRecoveryUserId,
                });
                const recoveryCredential = (_b = (_a = userResponse === null || userResponse === void 0 ? void 0 : userResponse.user) === null || _a === void 0 ? void 0 : _a.apiKeys) === null || _b === void 0 ? void 0 : _b.find((k) => k.credential.type === 'CREDENTIAL_TYPE_RECOVER_USER_KEY_P256');
                if (!recoveryCredential) {
                    throw new utils.DynamicError('The code is invalid or expired.');
                }
                const recoveryExpirationSeconds = parseInt(recoveryCredential.createdAt.seconds) +
                    60 * TURNKEY_RECOVERY_CREDENTIAL_EXPIRATION_SECONDS; // creation time + 15 minutes
                const expirationTime = new Date(recoveryExpirationSeconds * 1000);
                if (new Date() >= expirationTime) {
                    throw new utils.DynamicError('The code is invalid or expired.');
                }
            }
            catch (err) {
                walletConnectorCore.logger.error('Error while verifying recovery code', err);
                if (err instanceof utils.DynamicError) {
                    throw err;
                }
                throw new utils.DynamicError('The code is invalid or expired.');
            }
        });
    }
    completeRecovery({ attestation, challenge, organizationId, }) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (!this.__client || !this.__turnkeyRecoveryUserId) {
                throw new utils.DynamicError('Cannot proceed with your request');
            }
            try {
                return this.__client.recoverUser({
                    organizationId,
                    parameters: {
                        authenticator: {
                            attestation: attestation,
                            authenticatorName: 'Passkey',
                            challenge,
                        },
                        userId: this.__turnkeyRecoveryUserId,
                    },
                    timestampMs: String(Date.now()),
                    type: 'ACTIVITY_TYPE_RECOVER_USER',
                });
            }
            catch (err) {
                walletConnectorCore.logger.error('Error while completing recovery process', err);
                throw err;
            }
        });
    }
}

exports.TurnkeyPasskeyRecoveryHandler = TurnkeyPasskeyRecoveryHandler;
