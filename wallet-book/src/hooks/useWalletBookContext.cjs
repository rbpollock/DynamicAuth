'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
require('../helpers/logger.cjs');
require('@dynamic-labs/utils');
require('../schemas/walletConnectSourceSchema.cjs');
require('../schemas/walletBookSchema.cjs');
require('../schemas/walletSchema.cjs');
var WalletBookContext = require('../components/WalletBookContext.cjs');

const useWalletBookContext = () => {
    const context = react.useContext(WalletBookContext.WalletBookContext);
    if (context === undefined) {
        throw new Error('useWalletBookContext must be used within a WalletBookContextProvider');
    }
    return context;
};

exports.useWalletBookContext = useWalletBookContext;
