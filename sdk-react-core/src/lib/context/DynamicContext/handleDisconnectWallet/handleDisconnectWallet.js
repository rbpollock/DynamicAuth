import '@dynamic-labs/sdk-api';
import { logger } from '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import '../../../utils/constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import { getMissingChains } from '../../../utils/functions/getMissingChains/getMissingChains.js';

const handleDisconnectWallet = ({ wallet, connectedWalletsInfo, bridgeChains, setBridgeChainsToConnect, eventsCallbacks, }) => {
    var _a;
    const missingChains = getMissingChains(bridgeChains, connectedWalletsInfo);
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
        logger.warn('Error calling onDisconnect', error);
    }
};

export { handleDisconnectWallet };
