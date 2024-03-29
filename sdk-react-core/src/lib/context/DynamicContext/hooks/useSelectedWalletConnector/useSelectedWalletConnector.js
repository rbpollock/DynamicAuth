import { useState, useMemo } from 'react';

const useSelectedWalletConnector = ({ walletConnectorOptions, }) => {
    const [selectedWalletConnectorKey, setSelectedWalletConnectorKey] = useState(null);
    // Instead of storing the selected connector directly, we derive it from the wallets
    // This way if wallets change, the selected connector will be updated too
    const selectedWalletConnector = useMemo(() => {
        var _a, _b;
        if (!selectedWalletConnectorKey)
            return null;
        return ((_b = (_a = walletConnectorOptions.find(({ walletConnector }) => walletConnector.key === selectedWalletConnectorKey)) === null || _a === void 0 ? void 0 : _a.walletConnector) !== null && _b !== void 0 ? _b : null);
    }, [selectedWalletConnectorKey, walletConnectorOptions]);
    return { selectedWalletConnector, setSelectedWalletConnectorKey };
};

export { useSelectedWalletConnector };
