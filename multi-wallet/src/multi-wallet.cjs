'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var walletBook = require('@dynamic-labs/wallet-book');
var utils = require('@dynamic-labs/utils');
var sdkApi = require('@dynamic-labs/sdk-api');
var getApiProviders = require('./utils/getApiProviders.cjs');

let wallets = [];
const defaultWalletUiUtils = {
    disabledConfirmationOnce: () => {
        throw Error('disabledConfirmationOnce, not implemented');
    },
    sendTransaction: () => {
        throw Error('requestSendTransactionConfirmation not implemented');
    },
    signMessage: () => {
        throw Error('signMessage not implemented');
    },
};
const getSupportedWallets = (args) => {
    const { appLogoUrl = '', appName = '', chainRpcProviders, deepLinkPreference, flowNetwork, isWalletConnectV2Enabled = false, networkConfigurations = { cosmos: [], evm: [], solana: [], starknet: [] }, settings, skipMemo = false, walletConnectProjectId = '', walletConnectorsProp, walletUiUtils = undefined, walletBook, walletConnectV1Bridge, walletConnectPreferredChains, } = args;
    if (!skipMemo && wallets.length > 0) {
        return wallets;
    }
    const evmNetworkConfigs = (networkConfigurations === null || networkConfigurations === void 0 ? void 0 : networkConfigurations.evm) || [];
    const solanaNetworkConfigs = (networkConfigurations === null || networkConfigurations === void 0 ? void 0 : networkConfigurations.solana) || [];
    const cosmosNetworkConfigs = (networkConfigurations === null || networkConfigurations === void 0 ? void 0 : networkConfigurations.cosmos) || [];
    const starknetNetworkConfigs = (networkConfigurations === null || networkConfigurations === void 0 ? void 0 : networkConfigurations.starknet) || [];
    const apiProviders = getApiProviders.getApiProviders(getEnabledProviders(settings.providers));
    const opts = {
        apiProviders,
        appLogoUrl,
        appName,
        chainRpcProviders,
        cosmosNetworks: cosmosNetworkConfigs,
        deepLinkPreference,
        evmNetworks: evmNetworkConfigs,
        flowNetwork,
        isWalletConnectV2Enabled,
        projectId: walletConnectProjectId,
        settings,
        solNetworks: solanaNetworkConfigs,
        starknetNetworks: starknetNetworkConfigs,
        walletBook,
        walletConnectPreferredChains,
        walletConnectV1Bridge,
        walletUiUtils: walletUiUtils || defaultWalletUiUtils,
    };
    const allWallets = walletConnectorsProp
        .map((walletConnector) => walletConnector(opts))
        .flat()
        .map((wallet) => new wallet(opts))
        .filter((wallet) => wallet.filterByWalletBook())
        .map((wallet) => wallet.getMobileOrInstalledWallet());
    // Memoize the wallets
    const filteredWallets = filterWalletsForPlatform(walletBook, allWallets);
    wallets = applyLinksOverrides(walletBook, filteredWallets);
    return wallets;
};
const applyLinksOverrides = (walletBook$1, wallets) => wallets.map((wallet) => {
    const metadata = walletBook.getWalletBookWallet(walletBook$1, wallet.key);
    if (metadata.switchNetworkOnlyFromWallet !== undefined) {
        wallet.switchNetworkOnlyFromWallet = metadata.switchNetworkOnlyFromWallet;
    }
    return wallet;
});
const filterWalletsForPlatform = (walletBook$1, wallets) => wallets.filter((wallet) => {
    const metadata = walletBook.getWalletBookWallet(walletBook$1, wallet.key);
    if (wallet.isInstalledOnBrowser()) {
        return true;
    }
    else if (walletConnectorCore.isEmbeddedConnector(wallet)) {
        return true;
    }
    else if (metadata.showOnlyIfInstalled) {
        return false;
    }
    else if (!utils.isMobile()) {
        return true;
    }
    else {
        return handleMobileWalletFilter(walletBook$1, wallet.key, metadata);
    }
});
const handleMobileWalletFilter = (walletBook$1, walletKey, metadata) => {
    if (!metadata.mobile)
        return false;
    /**
     * WalletConnect provides a "universal" and "native" deep link. They recommend using
     * the universal deep link over the native one due to UX differences, and our current
     * implementation uses only universal. This means we need to filter for wallets that
     * have a universal deep link available.
     */
    const hasWalletConnectLink = Boolean(metadata.mobile.universal) || Boolean(metadata.mobile.native);
    const isWalletConnectWallet = metadata.walletConnect !== undefined;
    if (utils.isIPad() || utils.isIPhone()) {
        const hasIOSLink = Boolean(walletBook.getWalletLinks(walletBook$1, walletKey).ios);
        return !isWalletConnectWallet
            ? hasIOSLink
            : hasIOSLink && hasWalletConnectLink;
    }
    else {
        const hasAndroidLink = Boolean(walletBook.getWalletLinks(walletBook$1, walletKey).android);
        return !isWalletConnectWallet
            ? hasAndroidLink
            : hasAndroidLink && hasWalletConnectLink;
    }
};
const chainStringToChains = {
    'eip155:1': ['ETH', 'EVM'],
    'flow:mainnet': ['FLOW'],
};
const getSupportedChainsForWalletConnector = (walletBook$1, walletConnector) => {
    var _a;
    const metadata = walletBook.getWalletBookWallet(walletBook$1, walletConnector.key);
    /**
     * chains could contain multiple eth networks eg
     *  "eip155:1",
     *  "eip155:10",
     *  "eip155:56",
     *  "eip155:100",
     *
     * so we will use a set to ensure uniqueness
     */
    const chainSet = new Set();
    const chainStringList = (_a = metadata.chains) !== null && _a !== void 0 ? _a : [];
    chainStringList.forEach((chainString) => {
        const chains = chainStringToChains[chainString];
        chains === null || chains === void 0 ? void 0 : chains.forEach((chain) => {
            chainSet.add(chain);
        });
    });
    walletConnector.supportedChains.forEach((chain) => {
        chainSet.add(chain);
    });
    return [...chainSet];
};
const getEnabledWallets = (props) => {
    const supportedWallets = getSupportedWallets(props.getSupportedWalletOpts);
    const allEnabledWallets = supportedWallets.filter((wallet) => props.enabledChains.some((chain) => getSupportedChainsForWalletConnector(props.getSupportedWalletOpts.walletBook, wallet).includes(chain)) || wallet.key === 'magiclink');
    return allEnabledWallets;
};
// get list of providers enabled in the sense that we should have wallet connectors for them
// note: magic and turnkey are considered enabled when a provider exists (for magic, a providerProjectId exists)
const getEnabledProviders = (providers) => {
    var _a;
    return (_a = providers === null || providers === void 0 ? void 0 : providers.filter((provider) => Boolean(provider.enabledAt) ||
        (provider.provider === sdkApi.ProviderEnum.MagicLink &&
            Boolean(provider.providerProjectId)) ||
        provider.provider === sdkApi.ProviderEnum.Turnkey)) !== null && _a !== void 0 ? _a : [];
};

exports.getEnabledProviders = getEnabledProviders;
exports.getEnabledWallets = getEnabledWallets;
exports.getSupportedChainsForWalletConnector = getSupportedChainsForWalletConnector;
exports.getSupportedWallets = getSupportedWallets;
