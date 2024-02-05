'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('../DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../CaptchaContext/CaptchaContext.cjs');
require('../ErrorContext/ErrorContext.cjs');
require('../AccessDeniedContext/AccessDeniedContext.cjs');
require('../AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../EmailVerificationContext/EmailVerificationContext.cjs');
var useSyncPrimaryWallet = require('../../utils/hooks/multiWallet/useSyncPrimaryWallet/useSyncPrimaryWallet.cjs');

const WalletContext = React.createContext(undefined);
const WalletContextProvider = ({ children, canSync, }) => {
    useSyncPrimaryWallet.useSyncPrimaryWallet(canSync);
    const value = undefined;
    return (jsxRuntime.jsx(WalletContext.Provider, { value: value, children: children }));
};

exports.WalletContext = WalletContext;
exports.WalletContextProvider = WalletContextProvider;
