'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var getWalletProvider = require('../../../functions/getWalletProvider/getWalletProvider.cjs');

const specialCareWallets = ['slope', 'myalgo', 'bloctoevm', 'perawallet'];
const showPendingConnectView = (walletConnector, setView) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const walletProvider = getWalletProvider.getWalletProvider(walletConnector);
    // We don't want to show the pending connect view for qrCode and walletConnect
    // They have their own view with qrCode so we don't need to show the pending connect view
    if (walletProvider === 'walletConnect' || walletProvider === 'qrCode') {
        return;
    }
    specialCareWallets.forEach((wallet) => {
        if (walletConnector.key === wallet) {
            // Slope and some other wallets works different as Justin mentioned in this commit:
            // https://github.com/dynamic-labs/DynamicAuth/commit/57233d3620611bc91439f3d4587b8516f8d16f99
            // It needs to show the connect view before getting connected accounts
            setView('pending-connect');
        }
    });
    const connectedAccounts = yield walletConnector.getConnectedAccounts();
    /* istanbul ignore else */
    if (connectedAccounts.length === 0) {
        setView('pending-connect');
    }
});

exports.showPendingConnectView = showPendingConnectView;
