'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('../../../ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var isEmailProviderEnabled = require('../../../../utils/functions/isEmailProviderEnabled/isEmailProviderEnabled.cjs');

const useEmailLoginState = (providers, user) => {
    const [loginWithEmail, setLoginWithEmail] = React.useState(isEmailProviderEnabled.isEmailProviderEnabled(providers));
    React.useEffect(() => {
        if (user) {
            setLoginWithEmail(false);
        }
        else {
            setLoginWithEmail(isEmailProviderEnabled.isEmailProviderEnabled(providers));
        }
    }, [providers, user]);
    return [loginWithEmail, setLoginWithEmail];
};

exports.useEmailLoginState = useEmailLoginState;
