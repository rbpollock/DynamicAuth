'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
var ViewContext = require('../../../context/ViewContext/ViewContext.cjs');
var decodeJwt = require('../../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
var createUserProfile = require('../../functions/createUserProfile/createUserProfile.cjs');
require('@dynamic-labs/multi-wallet');
require('@dynamic-labs/sdk-api');
var index = require('../../functions/storeAuthToken/index.cjs');

const useCreateUserProfileByJWTCallback = () => {
    const { setUser, handleLogOut } = useInternalDynamicContext.useInternalDynamicContext();
    const { goToInitialView } = ViewContext.useViewContext();
    const createUserProfileByJWT = React.useCallback((jwt) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const decodedJWT = decodeJwt.decodeJwt(jwt);
        if (!decodedJWT) {
            yield handleLogOut();
            goToInitialView();
            return;
        }
        index.storeAuthToken(jwt);
        const userProfile = createUserProfile.createUserProfile(decodedJWT);
        setUser(userProfile);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), []);
    return { createUserProfileByJWT };
};

exports.useCreateUserProfileByJWTCallback = useCreateUserProfileByJWTCallback;
