'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useSelectedWalletConnector = ({ walletConnectorOptions, }) => {
    const [selectedWalletConnectorKey, setSelectedWalletConnectorKey] = React.useState(null);
    // Instead of storing the selected connector directly, we derive it from the wallets
    // This way if wallets change, the selected connector will be updated too
    const selectedWalletConnector = React.useMemo(() => {
        var _a, _b;
        if (!selectedWalletConnectorKey)
            return null;
        return ((_b = (_a = walletConnectorOptions.find(({ walletConnector }) => walletConnector.key === selectedWalletConnectorKey)) === null || _a === void 0 ? void 0 : _a.walletConnector) !== null && _b !== void 0 ? _b : null);
    }, [selectedWalletConnectorKey, walletConnectorOptions]);
    return { selectedWalletConnector, setSelectedWalletConnectorKey };
};

exports.useSelectedWalletConnector = useSelectedWalletConnector;
