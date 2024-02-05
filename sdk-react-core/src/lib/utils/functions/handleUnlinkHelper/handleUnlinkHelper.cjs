'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var utils = require('@dynamic-labs/utils');
var api = require('../../../data/api.cjs');
var decodeJwt = require('../../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('react');
require('../../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../shared/consts/index.cjs');
var createUserProfile = require('../createUserProfile/createUserProfile.cjs');
require('@dynamic-labs/multi-wallet');
var getAuthToken = require('../getAuthToken/getAuthToken.cjs');
require('@dynamic-labs/sdk-api');
var index = require('../storeAuthToken/index.cjs');

/**
 * A helper function that wraps the unlinkWallet function from the API.
 * This function will store the updated JWT in local storage and return the decoded JWT.
 *
 * @throws Error if the authentication call returns no or invalid JWT
 */
const handleUnlinkHelper = ({ environmentId, primaryWalletId, walletId, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const token = getAuthToken.getAuthToken();
    if (!token)
        return;
    const jwt = yield api.unlinkWallet({ environmentId, primaryWalletId, walletId }, token);
    if (!jwt)
        throw new utils.DynamicError('Failed to unlink wallet, no jwt returned');
    const decodedJwt = decodeJwt.decodeJwt(jwt);
    if (!decodedJwt) {
        throw new utils.DynamicError('Failed to unlink wallet, unable to decode jwt');
    }
    index.storeAuthToken(jwt);
    const userProfile = createUserProfile.createUserProfile(decodedJwt);
    return userProfile;
});

exports.handleUnlinkHelper = handleUnlinkHelper;
