import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useState, useCallback } from 'react';
import { DynamicError } from '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../context/CaptchaContext/CaptchaContext.js';
import '../../../context/ErrorContext/ErrorContext.js';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../config/ApiEndpoint.js';
import { useSignConnectOnlyUser } from '../authenticationHooks/useSignConnectOnlyUser/useSignConnectOnlyUser.js';
import '../../../context/EmailVerificationContext/EmailVerificationContext.js';

const useAuthenticateConnectedUser = () => {
    const signConnectOnlyUser = useSignConnectOnlyUser();
    const { connectedWallets, user } = useInternalDynamicContext();
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const authenticateUser = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (user) {
            throw new DynamicError('User is already authenticated');
        }
        if (connectedWallets.length === 0) {
            throw new DynamicError('No connected wallet');
        }
        const connectedWallet = connectedWallets[0];
        setIsAuthenticating(true);
        yield signConnectOnlyUser({
            walletConnector: connectedWallet.connector,
        });
        setIsAuthenticating(false);
    }), [connectedWallets, signConnectOnlyUser, user]);
    return { authenticateUser, isAuthenticating };
};

export { useAuthenticateConnectedUser };
