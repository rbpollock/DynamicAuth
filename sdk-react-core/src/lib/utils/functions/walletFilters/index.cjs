'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Sorts the provided wallets by the provided sortedWalletKeys
 * Wallets that they keys were not provided will be kept in their default order
 *
 * This function should be used when you want to have the full wallet offerings,
 * but control the order of the top wallets.
 */
const SortWallets = (sortedWalletKeys) => (wallets) => [...wallets].sort((walletA, walletB) => {
    const indexA = sortedWalletKeys.indexOf(walletA.key);
    const indexB = sortedWalletKeys.indexOf(walletB.key);
    if (indexA !== -1 && indexB === -1) {
        return -1;
    }
    else if (indexA === -1 && indexB !== -1) {
        return 1;
    }
    else {
        return indexA - indexB;
    }
});
const FilterWallets = (walletKeys) => (wallets) => wallets.filter((wallet) => walletKeys.includes(wallet.key));
const RemoveWallets = (walletKeys) => (wallets) => wallets.filter((wallet) => !walletKeys.includes(wallet.key));
const FilterBridgeChainsName = (chainName) => (wallets) => wallets.filter((wallet) => wallet.walletConnector.supportedChains.includes(chainName));
/**
 * Filters and sorts the wallet selection by the provided sortedWalletKeys.
 * This filter should be used when you only want specific wallets to be available
 * in a certain order.
 */
const FilterAndSortWallets = (sortedWalletKeys) => (wallets) => {
    const unsortedWallets = FilterWallets(sortedWalletKeys)(wallets);
    return SortWallets(sortedWalletKeys)(unsortedWallets);
};
const UniswapFilter = () => (wallets) => FilterAndSortWallets(['uniswap', 'metamask', 'coinbase', 'walletconnect'])(wallets);

exports.FilterAndSortWallets = FilterAndSortWallets;
exports.FilterBridgeChainsName = FilterBridgeChainsName;
exports.FilterWallets = FilterWallets;
exports.RemoveWallets = RemoveWallets;
exports.SortWallets = SortWallets;
exports.UniswapFilter = UniswapFilter;
