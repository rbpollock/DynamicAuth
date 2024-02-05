import { useState, useEffect } from 'react';
import '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '../../../ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { isEmailProviderEnabled } from '../../../../utils/functions/isEmailProviderEnabled/isEmailProviderEnabled.js';

const useEmailLoginState = (providers, user) => {
    const [loginWithEmail, setLoginWithEmail] = useState(isEmailProviderEnabled(providers));
    useEffect(() => {
        if (user) {
            setLoginWithEmail(false);
        }
        else {
            setLoginWithEmail(isEmailProviderEnabled(providers));
        }
    }, [providers, user]);
    return [loginWithEmail, setLoginWithEmail];
};

export { useEmailLoginState };
