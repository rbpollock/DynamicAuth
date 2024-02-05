'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var utils = require('@dynamic-labs/utils');
var decodeJwt = require('../../../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../../context/ViewContext/ViewContext.cjs');
require('react');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
var api = require('../../../../data/api.cjs');
var findEmbeddedWalletFromVerifiedCredentials = require('../../../../utils/functions/findEmbeddedWalletFromVerifiedCredentials/findEmbeddedWalletFromVerifiedCredentials.cjs');
require('@dynamic-labs/multi-wallet');
require('@dynamic-labs/sdk-api');

const createPregeneratedWallet = ({ user, walletConnector, environmentId, authToken, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    if (!authToken) {
        throw new utils.DynamicError('Auth token is not defined');
    }
    if (!walletConnector) {
        throw new utils.DynamicError('PasskeyWalletConnector not found');
    }
    if (!user) {
        throw new utils.DynamicError('User is not defined');
    }
    walletConnector.setEmail(user.email);
    const signersResponse = yield api.createTurnkeyEvmEmbeddedWallet({
        environmentId,
        userJwt: authToken,
    });
    const { jwt } = signersResponse;
    const decodedJwt = decodeJwt.decodeJwt(jwt);
    if (decodedJwt === undefined)
        throw new utils.DynamicError('Invalid token!');
    const embeddedWalletVerifiedCredential = findEmbeddedWalletFromVerifiedCredentials.findEmbeddedWalletFromVerifiedCredentials(jwt);
    if (!embeddedWalletVerifiedCredential) {
        throw new utils.DynamicError('EmbeddedWalletVerifiedCredential not found');
    }
    walletConnector.setVerifiedCredentials(decodedJwt.verifiedCredentials);
    return {
        decodedJwt,
        embeddedWalletVerifiedCredential,
        jwt,
        walletConnector,
    };
});

exports.createPregeneratedWallet = createPregeneratedWallet;
