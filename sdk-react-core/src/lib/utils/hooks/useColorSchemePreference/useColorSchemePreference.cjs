'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var useMediaQuery = require('../../../shared/utils/hooks/useMediaQuery/useMediaQuery.cjs');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');

const useColorSchemePreference = () => {
    const isDarkMode = useMediaQuery.useMediaQuery('(prefers-color-scheme: dark)');
    return isDarkMode ? 'dark' : 'light';
};

exports.useColorSchemePreference = useColorSchemePreference;
