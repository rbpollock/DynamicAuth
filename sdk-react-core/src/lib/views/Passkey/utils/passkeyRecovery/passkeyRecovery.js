import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { isPasskeyWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { DynamicError } from '@dynamic-labs/utils';
import { initPasskeyRecovery as initPasskeyRecovery$1, completePasskeyRecovery as completePasskeyRecovery$1 } from '../../../../data/api.js';
import { decodeJwt } from '../../../../shared/utils/functions/decodeJwt/decodeJwt.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '../../../../context/ViewContext/ViewContext.js';
import 'react';
import '../../../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../shared/consts/index.js';
import { findEmbeddedWalletFromVerifiedCredentials } from '../../../../utils/functions/findEmbeddedWalletFromVerifiedCredentials/findEmbeddedWalletFromVerifiedCredentials.js';
import '@dynamic-labs/multi-wallet';
import '@dynamic-labs/sdk-api';
import { removeElementById } from '../../../../utils/functions/removeElementById/removeElementById.js';
import { iframeContainerId } from '../../PasskeyRecovery/constants.js';

const initPasskeyRecovery = ({ authToken, iframeContainerId, iframeElementId, environmentId, wallet, }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!authToken) {
        throw new DynamicError('Auth token is not defined');
    }
    if (!(wallet === null || wallet === void 0 ? void 0 : wallet.connector) ||
        !(wallet === null || wallet === void 0 ? void 0 : wallet.id) ||
        !isPasskeyWalletConnector(wallet === null || wallet === void 0 ? void 0 : wallet.connector)) {
        throw new DynamicError('PasskeyWalletConnector not found');
    }
    const turnkeyRecoveryHandler = (_a = wallet.connector) === null || _a === void 0 ? void 0 : _a.getRecoverPasskeyHandler();
    const publicKey = yield turnkeyRecoveryHandler.initRecovery(iframeContainerId, iframeElementId);
    if (!publicKey) {
        throw new DynamicError('Something went wrong');
    }
    const { turnkeyRecoveryUserId } = yield initPasskeyRecovery$1({
        environmentId,
        publicKey,
        userJwt: authToken,
        walletId: wallet.id,
    });
    turnkeyRecoveryHandler.recoveryUserId = turnkeyRecoveryUserId;
});
const passkeyRecoveryBundleValidation = ({ authToken, bundleInput, wallet, }) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c, _d, _e;
    if (!bundleInput) {
        throw new DynamicError('Code must be informed');
    }
    if (!(wallet === null || wallet === void 0 ? void 0 : wallet.connector) ||
        !(wallet === null || wallet === void 0 ? void 0 : wallet.id) ||
        !isPasskeyWalletConnector(wallet === null || wallet === void 0 ? void 0 : wallet.connector)) {
        throw new DynamicError('PasskeyWalletConnector not found');
    }
    const decodedJwt = decodeJwt(authToken);
    if (!decodedJwt) {
        throw new DynamicError('User must be logged in with a valid token');
    }
    const organizationId = (_d = (_c = (_b = decodedJwt.verifiedCredentials) === null || _b === void 0 ? void 0 : _b.find(({ walletName }) => walletName === null || walletName === void 0 ? void 0 : walletName.startsWith('turnkey'))) === null || _c === void 0 ? void 0 : _c.walletProperties) === null || _d === void 0 ? void 0 : _d.turnkeySubOrganizationId;
    return (_e = wallet.connector) === null || _e === void 0 ? void 0 : _e.getRecoverPasskeyHandler().verifyRecoveryCode(bundleInput, organizationId);
});
const resentRecoveryEmail = ({ authToken, environmentId, wallet, }) => __awaiter(void 0, void 0, void 0, function* () {
    var _f;
    if (!authToken) {
        throw new DynamicError('Auth token is not defined');
    }
    if (!(wallet === null || wallet === void 0 ? void 0 : wallet.connector) ||
        !(wallet === null || wallet === void 0 ? void 0 : wallet.id) ||
        !isPasskeyWalletConnector(wallet === null || wallet === void 0 ? void 0 : wallet.connector)) {
        throw new DynamicError('PasskeyWalletConnector not found');
    }
    const publicKey = (_f = wallet.connector) === null || _f === void 0 ? void 0 : _f.getRecoverPasskeyHandler().publicKey;
    if (!publicKey) {
        throw new DynamicError('Could not proceed with your request. Please restart the process.');
    }
    return initPasskeyRecovery$1({
        environmentId,
        publicKey,
        userJwt: authToken,
        walletId: wallet === null || wallet === void 0 ? void 0 : wallet.id,
    });
});
const completePasskeyRecovery = ({ authToken, userEmail, environmentId, wallet, }) => __awaiter(void 0, void 0, void 0, function* () {
    var _g, _h, _j;
    if (!authToken) {
        throw new DynamicError('User must be logged in');
    }
    let decodedJwt = decodeJwt(authToken);
    if (!decodedJwt) {
        throw new DynamicError('User must be logged in with a valid token');
    }
    if (!(wallet === null || wallet === void 0 ? void 0 : wallet.connector) ||
        !(wallet === null || wallet === void 0 ? void 0 : wallet.id) ||
        !isPasskeyWalletConnector(wallet === null || wallet === void 0 ? void 0 : wallet.connector)) {
        throw new DynamicError('PasskeyWalletConnector not found');
    }
    const connector = wallet.connector;
    connector.setEmail(userEmail);
    const organizationId = (_j = (_h = (_g = decodedJwt.verifiedCredentials) === null || _g === void 0 ? void 0 : _g.find(({ walletName }) => walletName === null || walletName === void 0 ? void 0 : walletName.startsWith('turnkey'))) === null || _h === void 0 ? void 0 : _h.walletProperties) === null || _j === void 0 ? void 0 : _j.turnkeySubOrganizationId;
    if (!organizationId) {
        throw new DynamicError('Invalid token!');
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
    const passkeyRecoveryResponse = yield completePasskeyRecovery$1({
        attestation: attestation,
        challenge,
        environmentId,
        userJwt: authToken,
        walletId: wallet === null || wallet === void 0 ? void 0 : wallet.id,
    });
    const { jwt } = passkeyRecoveryResponse;
    decodedJwt = decodeJwt(jwt);
    if (decodedJwt === undefined) {
        throw new DynamicError('Invalid token!');
    }
    const embeddedWalletVerifiedCredential = findEmbeddedWalletFromVerifiedCredentials(jwt);
    if (!embeddedWalletVerifiedCredential) {
        throw new DynamicError('EmbeddedWalletVerifiedCredential not found');
    }
    connector.setVerifiedCredentials(decodedJwt.verifiedCredentials);
    // clear iframeStamper and its reference
    connector.getRecoverPasskeyHandler().clear();
    // deletes iframe container after usage
    removeElementById(iframeContainerId);
    return {
        decodedJwt,
        jwt,
    };
});

export { completePasskeyRecovery, initPasskeyRecovery, passkeyRecoveryBundleValidation, resentRecoveryEmail };
