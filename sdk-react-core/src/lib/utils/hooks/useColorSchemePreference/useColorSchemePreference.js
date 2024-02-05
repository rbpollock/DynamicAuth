import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import { useMediaQuery } from '../../../shared/utils/hooks/useMediaQuery/useMediaQuery.js';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';

const useColorSchemePreference = () => {
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    return isDarkMode ? 'dark' : 'light';
};

export { useColorSchemePreference };
