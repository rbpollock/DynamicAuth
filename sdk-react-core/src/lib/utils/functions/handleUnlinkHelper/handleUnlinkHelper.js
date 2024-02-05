import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { DynamicError } from '@dynamic-labs/utils';
import { unlinkWallet } from '../../../data/api.js';
import { decodeJwt } from '../../../shared/utils/functions/decodeJwt/decodeJwt.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import 'react';
import '../../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';
import { createUserProfile } from '../createUserProfile/createUserProfile.js';
import '@dynamic-labs/multi-wallet';
import { getAuthToken } from '../getAuthToken/getAuthToken.js';
import '@dynamic-labs/sdk-api';
import { storeAuthToken } from '../storeAuthToken/index.js';

/**
 * A helper function that wraps the unlinkWallet function from the API.
 * This function will store the updated JWT in local storage and return the decoded JWT.
 *
 * @throws Error if the authentication call returns no or invalid JWT
 */
const handleUnlinkHelper = ({ environmentId, primaryWalletId, walletId, }) => __awaiter(void 0, void 0, void 0, function* () {
    const token = getAuthToken();
    if (!token)
        return;
    const jwt = yield unlinkWallet({ environmentId, primaryWalletId, walletId }, token);
    if (!jwt)
        throw new DynamicError('Failed to unlink wallet, no jwt returned');
    const decodedJwt = decodeJwt(jwt);
    if (!decodedJwt) {
        throw new DynamicError('Failed to unlink wallet, unable to decode jwt');
    }
    storeAuthToken(jwt);
    const userProfile = createUserProfile(decodedJwt);
    return userProfile;
});

export { handleUnlinkHelper };
