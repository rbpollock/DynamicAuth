'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var utils = require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../context/ErrorContext/ErrorContext.cjs');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../config/ApiEndpoint.cjs');
var useSignConnectOnlyUser = require('../authenticationHooks/useSignConnectOnlyUser/useSignConnectOnlyUser.cjs');
require('../../../context/EmailVerificationContext/EmailVerificationContext.cjs');

const useAuthenticateConnectedUser = () => {
    const signConnectOnlyUser = useSignConnectOnlyUser.useSignConnectOnlyUser();
    const { connectedWallets, user } = useInternalDynamicContext.useInternalDynamicContext();
    const [isAuthenticating, setIsAuthenticating] = React.useState(false);
    const authenticateUser = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (user) {
            throw new utils.DynamicError('User is already authenticated');
        }
        if (connectedWallets.length === 0) {
            throw new utils.DynamicError('No connected wallet');
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

exports.useAuthenticateConnectedUser = useAuthenticateConnectedUser;
