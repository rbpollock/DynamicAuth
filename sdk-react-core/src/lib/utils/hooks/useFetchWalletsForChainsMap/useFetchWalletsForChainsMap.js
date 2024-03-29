import { useMemo } from 'react';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import { defaultWalletsForChains } from '../../../shared/consts/index.js';

const useFetchWalletsForChainsMap = (propsWalletsChainsMap) => {
    const walletsForChainsMap = useMemo(() => {
        if (!propsWalletsChainsMap) {
            return defaultWalletsForChains;
        }
        return Object.assign(Object.assign({}, defaultWalletsForChains), { primary_chain: propsWalletsChainsMap.primary_chain, wallets: Object.assign(Object.assign({}, defaultWalletsForChains.wallets), (Boolean(propsWalletsChainsMap.wallets) &&
                propsWalletsChainsMap.wallets)) });
    }, [propsWalletsChainsMap]);
    return { walletsForChainsMap };
};

export { useFetchWalletsForChainsMap };
