'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
var index = require('../../../shared/consts/index.cjs');

const useFetchWalletsForChainsMap = (propsWalletsChainsMap) => {
    const walletsForChainsMap = React.useMemo(() => {
        if (!propsWalletsChainsMap) {
            return index.defaultWalletsForChains;
        }
        return Object.assign(Object.assign({}, index.defaultWalletsForChains), { primary_chain: propsWalletsChainsMap.primary_chain, wallets: Object.assign(Object.assign({}, index.defaultWalletsForChains.wallets), (Boolean(propsWalletsChainsMap.wallets) &&
                propsWalletsChainsMap.wallets)) });
    }, [propsWalletsChainsMap]);
    return { walletsForChainsMap };
};

exports.useFetchWalletsForChainsMap = useFetchWalletsForChainsMap;
