'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var utils = require('@dynamic-labs/utils');
var api = require('../../../../data/api.cjs');
var decodeJwt = require('../../../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('../../../../context/ViewContext/ViewContext.cjs');
require('react');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
var findEmbeddedWalletFromVerifiedCredentials = require('../../../../utils/functions/findEmbeddedWalletFromVerifiedCredentials/findEmbeddedWalletFromVerifiedCredentials.cjs');
require('@dynamic-labs/multi-wallet');
require('@dynamic-labs/sdk-api');
var removeElementById = require('../../../../utils/functions/removeElementById/removeElementById.cjs');
var constants = require('../../PasskeyRecovery/constants.cjs');

const initPasskeyRecovery = ({ authToken, iframeContainerId, iframeElementId, environmentId, wallet, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!authToken) {
        throw new utils.DynamicError('Auth token is not defined');
    }
    if (!(wallet === null || wallet === void 0 ? void 0 : wallet.connector) ||
        !(wallet === null || wallet === void 0 ? void 0 : wallet.id) ||
        !walletConnectorCore.isPasskeyWalletConnector(wallet === null || wallet === void 0 ? void 0 : wallet.connector)) {
        throw new utils.DynamicError('PasskeyWalletConnector not found');
    }
    const turnkeyRecoveryHandler = (_a = wallet.connector) === null || _a === void 0 ? void 0 : _a.getRecoverPasskeyHandler();
    const publicKey = yield turnkeyRecoveryHandler.initRecovery(iframeContainerId, iframeElementId);
    if (!publicKey) {
        throw new utils.DynamicError('Something went wrong');
    }
    const { turnkeyRecoveryUserId } = yield api.initPasskeyRecovery({
        environmentId,
        publicKey,
        userJwt: authToken,
        walletId: wallet.id,
    });
    turnkeyRecoveryHandler.recoveryUserId = turnkeyRecoveryUserId;
});
const passkeyRecoveryBundleValidation = ({ authToken, bundleInput, wallet, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    var _b, _c, _d, _e;
    if (!bundleInput) {
        throw new utils.DynamicError('Code must be informed');
    }
    if (!(wallet === null || wallet === void 0 ? void 0 : wallet.connector) ||
        !(wallet === null || wallet === void 0 ? void 0 : wallet.id) ||
        !walletConnectorCore.isPasskeyWalletConnector(wallet === null || wallet === void 0 ? void 0 : wallet.connector)) {
        throw new utils.DynamicError('PasskeyWalletConnector not found');
    }
    const decodedJwt = decodeJwt.decodeJwt(authToken);
    if (!decodedJwt) {
        throw new utils.DynamicError('User must be logged in with a valid token');
    }
    const organizationId = (_d = (_c = (_b = decodedJwt.verifiedCredentials) === null || _b === void 0 ? void 0 : _b.find(({ walletName }) => walletName === null || walletName === void 0 ? void 0 : walletName.startsWith('turnkey'))) === null || _c === void 0 ? void 0 : _c.walletProperties) === null || _d === void 0 ? void 0 : _d.turnkeySubOrganizationId;
    return (_e = wallet.connector) === null || _e === void 0 ? void 0 : _e.getRecoverPasskeyHandler().verifyRecoveryCode(bundleInput, organizationId);
});
const resentRecoveryEmail = ({ authToken, environmentId, wallet, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    var _f;
    if (!authToken) {
        throw new utils.DynamicError('Auth token is not defined');
    }
    if (!(wallet === null || wallet === void 0 ? void 0 : wallet.connector) ||
        !(wallet === null || wallet === void 0 ? void 0 : wallet.id) ||
        !walletConnectorCore.isPasskeyWalletConnector(wallet === null || wallet === void 0 ? void 0 : wallet.connector)) {
        throw new utils.DynamicError('PasskeyWalletConnector not found');
    }
    const publicKey = (_f = wallet.connector) === null || _f === void 0 ? void 0 : _f.getRecoverPasskeyHandler().publicKey;
    if (!publicKey) {
        throw new utils.DynamicError('Could not proceed with your request. Please restart the process.');
    }
    return api.initPasskeyRecovery({
        environmentId,
        publicKey,
        userJwt: authToken,
        walletId: wallet === null || wallet === void 0 ? void 0 : wallet.id,
    });
});
const completePasskeyRecovery = ({ authToken, userEmail, environmentId, wallet, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    var _g, _h, _j;
    if (!authToken) {
        throw new utils.DynamicError('User must be logged in');
    }
    let decodedJwt = decodeJwt.decodeJwt(authToken);
    if (!decodedJwt) {
        throw new utils.DynamicError('User must be logged in with a valid token');
    }
    if (!(wallet === null || wallet === void 0 ? void 0 : wallet.connector) ||
        !(wallet === null || wallet === void 0 ? void 0 : wallet.id) ||
        !walletConnectorCore.isPasskeyWalletConnector(wallet === null || wallet === void 0 ? void 0 : wallet.connector)) {
        throw new utils.DynamicError('PasskeyWalletConnector not found');
    }
    const connector = wallet.connector;
    connector.setEmail(userEmail);
    const organizationId = (_j = (_h = (_g = decodedJwt.verifiedCredentials) === null || _g === void 0 ? void 0 : _g.find(({ walletName }) => walletName === null || walletName === void 0 ? void 0 : walletName.startsWith('turnkey'))) === null || _h === void 0 ? void 0 : _h.walletProperties) === null || _j === void 0 ? void 0 : _j.turnkeySubOrganizationId;
    if (!organizationId) {
        throw new utils.DynamicError('Invalid token!');
    }
    const turnkeyRecoveryHandler = wallet.connector.getRecoverPasskeyHandler();
    const { attestation, challenge } = yield connector.getWebAuthnAttestation();
    // calls turnkey recovery api
    yield turnkeyRecoveryHandler.completeRecovery({
        attestation,
        challenge,
        organizationId,
    });
    // calls readcost recovery api
    const passkeyRecoveryResponse = yield api.completePasskeyRecovery({
        attestation: attestation,
        challenge,
        environmentId,
        userJwt: authToken,
        walletId: wallet === null || wallet === void 0 ? void 0 : wallet.id,
    });
    const { jwt } = passkeyRecoveryResponse;
    decodedJwt = decodeJwt.decodeJwt(jwt);
    if (decodedJwt === undefined) {
        throw new utils.DynamicError('Invalid token!');
    }
    const embeddedWalletVerifiedCredential = findEmbeddedWalletFromVerifiedCredentials.findEmbeddedWalletFromVerifiedCredentials(jwt);
    if (!embeddedWalletVerifiedCredential) {
        throw new utils.DynamicError('EmbeddedWalletVerifiedCredential not found');
    }
    connector.setVerifiedCredentials(decodedJwt.verifiedCredentials);
    // clear iframeStamper and its reference
    connector.getRecoverPasskeyHandler().clear();
    // deletes iframe container after usage
    removeElementById.removeElementById(constants.iframeContainerId);
    return {
        decodedJwt,
        jwt,
    };
});

exports.completePasskeyRecovery = completePasskeyRecovery;
exports.initPasskeyRecovery = initPasskeyRecovery;
exports.passkeyRecoveryBundleValidation = passkeyRecoveryBundleValidation;
exports.resentRecoveryEmail = resentRecoveryEmail;
