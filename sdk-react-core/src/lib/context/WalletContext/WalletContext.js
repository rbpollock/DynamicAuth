import { jsx } from 'react/jsx-runtime';
import { createContext } from 'react';
import '../DynamicContext/DynamicContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../CaptchaContext/CaptchaContext.js';
import '../ErrorContext/ErrorContext.js';
import '../AccessDeniedContext/AccessDeniedContext.js';
import '../AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../EmailVerificationContext/EmailVerificationContext.js';
import { useSyncPrimaryWallet } from '../../utils/hooks/multiWallet/useSyncPrimaryWallet/useSyncPrimaryWallet.js';

const WalletContext = createContext(undefined);
const WalletContextProvider = ({ children, canSync, }) => {
    useSyncPrimaryWallet(canSync);
    const value = undefined;
    return (jsx(WalletContext.Provider, { value: value, children: children }));
};

export { WalletContext, WalletContextProvider };
