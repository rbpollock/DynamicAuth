import { useMemo, useEffect } from 'react';
import { getWallets } from '../../../views/WalletList/data.js';
import { verifyRequiredConnectorsAreSetup } from './utils/verifyRequiredConnectorsAreSetup/verifyRequiredConnectorsAreSetup.js';

const useWalletConnectorOptions = ({ projectSettings, appLogoUrl, appName, deepLinkPreference, flowNetwork, networkConfigurations, walletBook, walletConnectV1Bridge, walletUiUtils, walletConnectorsProp, walletConnectPreferredChains, walletConnectorExtensions, }) => {
    const walletConnectorOptions = useMemo(() => {
        if (!projectSettings ||
            !Object.keys(walletBook !== null && walletBook !== void 0 ? walletBook : {}).length ||
            !networkConfigurations)
            return [];
        return getWallets({
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
    useEffect(() => {
        if (!projectSettings || walletConnectorOptions.length === 0)
            return;
        verifyRequiredConnectorsAreSetup(projectSettings, walletConnectorOptions.map(({ walletConnector }) => walletConnector));
    }, [walletConnectorOptions, projectSettings]);
    return { walletConnectorOptions };
};

export { useWalletConnectorOptions };
