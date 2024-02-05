import { WalletProviderEnum } from '@dynamic-labs/sdk-api';
import { decodeJwt } from '../../../../../shared/utils/functions/decodeJwt/decodeJwt.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../../../context/ViewContext/ViewContext.js';
import 'react';
import '../../../../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import '../../../../constants/colors.js';
import '../../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { shouldManuallyReconnectOnRefresh } from '../../../../functions/shouldManuallyReconnectOnRefresh/shouldManuallyReconnectOnRefresh.js';
import { findWallet } from '../findWallet/findWallet.js';
import { isOwnerOfASmartWallet, initializeSmartWallet } from '../smartWallet/smartWallet.js';

const createLinkedWalletsFromWalletOptions = ({ authToken, walletConnectorOptions, primaryWalletId, }) => {
    const decodedJwt = decodeJwt(authToken);
    // wallet state should be null while loading all the wallets or when there is no user
    if (!walletConnectorOptions || !decodedJwt) {
        return [];
    }
    return decodedJwt.verifiedCredentials
        .map((account) => {
        const wallet = findWallet(account, walletConnectorOptions);
        // this probably shouldn't happen. this would mean that the user has an account linked
        // with wallet W, but the customer has toggled off wallet W or the chain that
        // supports wallet W
        /* istanbul ignore next */
        if (!wallet)
            return null;
        if (account.id === primaryWalletId &&
            shouldManuallyReconnectOnRefresh(wallet.walletConnector)) {
            wallet.walletConnector.connect();
        }
        // this account is the owner of a smart wallet, and should not be surfaced
        if (isOwnerOfASmartWallet(account, decodedJwt.verifiedCredentials)) {
            return null;
        }
        if (account.address && account.chain) {
            if (account.walletProvider === WalletProviderEnum.SmartContractWallet) {
                initializeSmartWallet({
                    account,
                    verifiedCredentials: decodedJwt.verifiedCredentials,
                    walletConnectorOptions,
                });
            }
            return {
                address: account.address,
                authenticated: true,
                chain: account.chain,
                connected: false,
                connector: wallet.walletConnector,
                id: account.id,
            };
        }
        return null;
    })
        .filter((wc) => wc !== null);
};

export { createLinkedWalletsFromWalletOptions };
