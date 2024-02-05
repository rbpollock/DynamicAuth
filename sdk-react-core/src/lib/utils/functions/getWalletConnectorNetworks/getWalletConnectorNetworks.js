const getWalletConnectorNetworks = (walletConnector) => {
    if (!walletConnector)
        return [];
    const _walletConnector = walletConnector;
    return (_walletConnector.evmNetworks || _walletConnector.starknetNetworks || []);
};

export { getWalletConnectorNetworks };
