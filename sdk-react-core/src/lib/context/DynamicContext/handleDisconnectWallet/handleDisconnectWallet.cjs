'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@dynamic-labs/sdk-api');
var logger = require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
var getMissingChains = require('../../../utils/functions/getMissingChains/getMissingChains.cjs');

const handleDisconnectWallet = ({ wallet, connectedWalletsInfo, bridgeChains, setBridgeChainsToConnect, eventsCallbacks, }) => {
    var _a;
    const missingChains = getMissingChains.getMissingChains(bridgeChains, connectedWalletsInfo);
    setBridgeChainsToConnect(missingChains);
    // there might not be a wallet to disconnect because
    // the connectedWallets state may never have been initialized.
    // this is because we asyncronously init the connectedWallets,
    // and as part of the async init we fetch the address and network.
    // if either of these fails, we consider the wallet disconnected,
    // and call this function.
    //
    // ideally, we would syncronously populate connectedWallets
    // based off the connectedWalletsInfo, and then async update it
    // with the network and address from the wallet
    if (!wallet) {
        return;
    }
    try {
        (_a = eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onDisconnect) === null || _a === void 0 ? void 0 : _a.call(eventsCallbacks, {
            wallet,
            walletConnector: wallet.connector,
        });
    }
    catch (error) {
        logger.logger.warn('Error calling onDisconnect', error);
    }
};

exports.handleDisconnectWallet = handleDisconnectWallet;
