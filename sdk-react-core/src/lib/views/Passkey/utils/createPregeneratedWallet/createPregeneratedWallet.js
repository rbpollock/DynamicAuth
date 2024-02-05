import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { DynamicError } from '@dynamic-labs/utils';
import { decodeJwt } from '../../../../shared/utils/functions/decodeJwt/decodeJwt.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../../context/ViewContext/ViewContext.js';
import 'react';
import '../../../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../shared/consts/index.js';
import { createTurnkeyEvmEmbeddedWallet } from '../../../../data/api.js';
import { findEmbeddedWalletFromVerifiedCredentials } from '../../../../utils/functions/findEmbeddedWalletFromVerifiedCredentials/findEmbeddedWalletFromVerifiedCredentials.js';
import '@dynamic-labs/multi-wallet';
import '@dynamic-labs/sdk-api';

const createPregeneratedWallet = ({ user, walletConnector, environmentId, authToken, }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!authToken) {
        throw new DynamicError('Auth token is not defined');
    }
    if (!walletConnector) {
        throw new DynamicError('PasskeyWalletConnector not found');
    }
    if (!user) {
        throw new DynamicError('User is not defined');
    }
    walletConnector.setEmail(user.email);
    const signersResponse = yield createTurnkeyEvmEmbeddedWallet({
        environmentId,
        userJwt: authToken,
    });
    const { jwt } = signersResponse;
    const decodedJwt = decodeJwt(jwt);
    if (decodedJwt === undefined)
        throw new DynamicError('Invalid token!');
    const embeddedWalletVerifiedCredential = findEmbeddedWalletFromVerifiedCredentials(jwt);
    if (!embeddedWalletVerifiedCredential) {
        throw new DynamicError('EmbeddedWalletVerifiedCredential not found');
    }
    walletConnector.setVerifiedCredentials(decodedJwt.verifiedCredentials);
    return {
        decodedJwt,
        embeddedWalletVerifiedCredential,
        jwt,
        walletConnector,
    };
});

export { createPregeneratedWallet };
