'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var data = require('../../../views/WalletList/data.cjs');
var verifyRequiredConnectorsAreSetup = require('./utils/verifyRequiredConnectorsAreSetup/verifyRequiredConnectorsAreSetup.cjs');

const useWalletConnectorOptions = ({ projectSettings, appLogoUrl, appName, deepLinkPreference, flowNetwork, networkConfigurations, walletBook, walletConnectV1Bridge, walletUiUtils, walletConnectorsProp, walletConnectPreferredChains, walletConnectorExtensions, }) => {
    const walletConnectorOptions = React.useMemo(() => {
        if (!projectSettings ||
            !Object.keys(walletBook !== null && walletBook !== void 0 ? walletBook : {}).length ||
            !networkConfigurations)
            return [];
        return data.getWallets({
            getSupportedWalletOpts: {
                appLogoUrl,
                appName,
                deepLinkPreference,
                flowNetwork,
                networkConfigurations,
                settings: projectSettings,
                skipMemo: true,
                walletBook,
                walletConnectPreferredChains,
                walletConnectV1Bridge,
                walletConnectorsProp: walletConnectorsProp !== null && walletConnectorsProp !== void 0 ? walletConnectorsProp : [],
                walletUiUtils,
            },
            walletConnectorExtensions,
        });
        // Cannot include walletUiUtils in the dependency array because it will cause an infinite loop
    }, [
        appLogoUrl,
        appName,
        projectSettings,
        walletConnectorsProp,
        walletConnectV1Bridge,
        walletConnectPreferredChains,
        flowNetwork,
        Object.keys(walletBook !== null && walletBook !== void 0 ? walletBook : {}).length,
        networkConfigurations,
    ]);
    React.useEffect(() => {
        if (!projectSettings || walletConnectorOptions.length === 0)
            return;
        verifyRequiredConnectorsAreSetup.verifyRequiredConnectorsAreSetup(projectSettings, walletConnectorOptions.map(({ walletConnector }) => walletConnector));
    }, [walletConnectorOptions, projectSettings]);
    return { walletConnectorOptions };
};

exports.useWalletConnectorOptions = useWalletConnectorOptions;
