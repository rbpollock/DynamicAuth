'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var validators = require('../../../context/DynamicContext/validators.cjs');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
var localStorage = require('../../constants/localStorage.cjs');
require('../../constants/colors.cjs');
var localStorage$1 = require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var useLocalStorage = require('../../../shared/utils/hooks/useLocalStorage/useLocalStorage.cjs');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
var usePrevious = require('../usePrevious/usePrevious.cjs');
var mergeCustomerEvmNetworksWithServerNetworks = require('./utils/mergeCustomerEvmNetworksWithServerNetworks/mergeCustomerEvmNetworksWithServerNetworks.cjs');

const useProcessNetworkConfigurations = ({ authToken, environmentId, evmNetworks: customerEvmNetworks, projectSettings, }) => {
    var _a;
    /**
     * This is the version of the local storage object. If the version changes, the local storage object will be removed.
     * This is used in case we need to change the structure of the local storage object.
     */
    const VERSION = 2;
    const [lsNetworks, setLsNetworks, removeLsNetworks] = useLocalStorage.useLocalStorage(localStorage.NETWORKS_STORAGE_KEY, undefined, validators.validateLocalStorageExpiry);
    const [loading, setLoading] = React.useState(false);
    const [completed, setCompleted] = React.useState(false);
    const [lsNetworksExists, setlsNetworksExists] = React.useState(Boolean(lsNetworks === null || lsNetworks === void 0 ? void 0 : lsNetworks.configurations) && (lsNetworks === null || lsNetworks === void 0 ? void 0 : lsNetworks.version) === VERSION);
    // Stringify the objects for easy comparison
    const customerEvmNetworksJson = customerEvmNetworks === null || customerEvmNetworks === void 0 ? void 0 : customerEvmNetworks.map((network) => JSON.stringify(network));
    const handleRemoveLsNetworks = React.useCallback(() => {
        removeLsNetworks();
        setlsNetworksExists(false);
    }, [removeLsNetworks]);
    React.useEffect(() => {
        if (lsNetworks && (lsNetworks === null || lsNetworks === void 0 ? void 0 : lsNetworks.environmentId) !== environmentId) {
            handleRemoveLsNetworks();
        }
        if (lsNetworks && lsNetworks.version !== VERSION) {
            handleRemoveLsNetworks();
        }
    }, [environmentId, handleRemoveLsNetworks, lsNetworks, removeLsNetworks]);
    React.useEffect(() => {
        const connectedWalletData = localStorage$1.LocalStorage.getFromLS(localStorage.CONNECTED_WALLETS_INFO) || [];
        if (!authToken && !(connectedWalletData === null || connectedWalletData === void 0 ? void 0 : connectedWalletData.length)) {
            handleRemoveLsNetworks();
        }
    }, [authToken, handleRemoveLsNetworks]);
    // When customer networks change, we need to update ls networks
    const previousCustomerEvmNetworks = usePrevious.usePrevious(customerEvmNetworks);
    React.useEffect(() => {
        if (JSON.stringify(customerEvmNetworks) ===
            JSON.stringify(previousCustomerEvmNetworks))
            return;
        setlsNetworksExists(false);
    }, [customerEvmNetworks, previousCustomerEvmNetworks]);
    React.useEffect(() => {
        var _a, _b;
        if (lsNetworksExists && customerEvmNetworksJson && !completed) {
            const localStorageNetworksJson = (_b = (_a = lsNetworks === null || lsNetworks === void 0 ? void 0 : lsNetworks.configurations) === null || _a === void 0 ? void 0 : _a.evm) === null || _b === void 0 ? void 0 : _b.map((network) => JSON.stringify(network));
            if (localStorageNetworksJson) {
                const fullMatch = customerEvmNetworksJson.every((network) => localStorageNetworksJson.indexOf(network) !== -1);
                if (!fullMatch) {
                    handleRemoveLsNetworks();
                }
                setCompleted(true);
            }
        }
    }, [
        lsNetworksExists,
        customerEvmNetworksJson,
        (_a = lsNetworks === null || lsNetworks === void 0 ? void 0 : lsNetworks.configurations) === null || _a === void 0 ? void 0 : _a.evm,
        completed,
        setCompleted,
        handleRemoveLsNetworks,
    ]);
    React.useEffect(() => {
        var _a, _b, _c, _d;
        if (!lsNetworksExists && !loading && (projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.networks)) {
            setLoading(true);
            const { networks } = projectSettings;
            const expiry = new Date().getTime() + 60000 * 5;
            const evm = networks.find((configurations) => configurations.chainName === 'evm');
            const solana = networks.find((configurations) => configurations.chainName === 'solana');
            const cosmos = networks.find((configurations) => configurations.chainName === 'cosmos');
            const starknet = networks.find((configurations) => configurations.chainName === 'starknet');
            let mergedEvmNetworks;
            const createNetwork = (network, parser = (input) => input) => ({
                blockExplorerUrls: network.blockExplorerUrls,
                chainId: parser(network.chainId),
                iconUrls: network.iconUrls,
                lcdUrl: network.lcdUrl,
                name: network.name,
                nativeCurrency: network.nativeCurrency,
                networkId: parser(network.networkId),
                privateCustomerRpcUrls: network.privateCustomerRpcUrls,
                rpcUrls: network.rpcUrls,
                vanityName: network.vanityName,
            });
            const cosmosNetworks = (_a = cosmos === null || cosmos === void 0 ? void 0 : cosmos.networks) === null || _a === void 0 ? void 0 : _a.map((net) => createNetwork(net, parseInt));
            const serverNetworks = (_b = evm === null || evm === void 0 ? void 0 : evm.networks) === null || _b === void 0 ? void 0 : _b.map((net) => createNetwork(net, parseInt));
            const starknetNetworks = (_c = starknet === null || starknet === void 0 ? void 0 : starknet.networks) === null || _c === void 0 ? void 0 : _c.map((net) => createNetwork(net));
            const solanaNetworks = (_d = solana === null || solana === void 0 ? void 0 : solana.networks) === null || _d === void 0 ? void 0 : _d.map((net) => createNetwork(net));
            if (!serverNetworks && (customerEvmNetworks === null || customerEvmNetworks === void 0 ? void 0 : customerEvmNetworks.length)) {
                mergedEvmNetworks = customerEvmNetworks;
            }
            if (!customerEvmNetworks && (serverNetworks === null || serverNetworks === void 0 ? void 0 : serverNetworks.length)) {
                mergedEvmNetworks = serverNetworks;
            }
            if (serverNetworks !== undefined &&
                serverNetworks.length &&
                customerEvmNetworks !== undefined &&
                customerEvmNetworks.length) {
                mergedEvmNetworks = mergeCustomerEvmNetworksWithServerNetworks.mergeCustomerEvmNetworksWithServerNetworks(customerEvmNetworks, serverNetworks);
            }
            setLsNetworks({
                configurations: {
                    cosmos: cosmosNetworks,
                    evm: mergedEvmNetworks,
                    solana: solanaNetworks,
                    starknet: starknetNetworks,
                },
                environmentId,
                expiry,
                version: VERSION,
            });
            setlsNetworksExists(true);
            setLoading(false);
        }
    }, [
        environmentId,
        loading,
        customerEvmNetworks,
        lsNetworksExists,
        setLsNetworks,
        projectSettings,
    ]);
    return {
        configurations: lsNetworks === null || lsNetworks === void 0 ? void 0 : lsNetworks.configurations,
        handleRemoveLsNetworks,
    };
};

exports.useProcessNetworkConfigurations = useProcessNetworkConfigurations;
