import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useCallback } from 'react';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { useViewContext } from '../../../context/ViewContext/ViewContext.js';
import { decodeJwt } from '../../../shared/utils/functions/decodeJwt/decodeJwt.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import { createUserProfile } from '../../functions/createUserProfile/createUserProfile.js';
import '@dynamic-labs/multi-wallet';
import '@dynamic-labs/sdk-api';
import { storeAuthToken } from '../../functions/storeAuthToken/index.js';

const useCreateUserProfileByJWTCallback = () => {
    const { setUser, handleLogOut } = useInternalDynamicContext();
    const { goToInitialView } = useViewContext();
    const createUserProfileByJWT = useCallback((jwt) => __awaiter(void 0, void 0, void 0, function* () {
        const decodedJWT = decodeJwt(jwt);
        if (!decodedJWT) {
            yield handleLogOut();
            goToInitialView();
            return;
        }
        storeAuthToken(jwt);
        const userProfile = createUserProfile(decodedJWT);
        setUser(userProfile);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), []);
    return { createUserProfileByJWT };
};

export { useCreateUserProfileByJWTCallback };
