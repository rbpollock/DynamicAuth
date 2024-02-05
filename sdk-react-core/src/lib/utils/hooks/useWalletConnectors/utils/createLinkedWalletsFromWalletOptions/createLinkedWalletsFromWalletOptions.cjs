'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApi = require('@dynamic-labs/sdk-api');
var decodeJwt = require('../../../../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../../../context/ViewContext/ViewContext.cjs');
require('react');
require('../../../../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../constants/colors.cjs');
require('../../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var shouldManuallyReconnectOnRefresh = require('../../../../functions/shouldManuallyReconnectOnRefresh/shouldManuallyReconnectOnRefresh.cjs');
var findWallet = require('../findWallet/findWallet.cjs');
var smartWallet = require('../smartWallet/smartWallet.cjs');

const createLinkedWalletsFromWalletOptions = ({ authToken, walletConnectorOptions, primaryWalletId, }) => {
    const decodedJwt = decodeJwt.decodeJwt(authToken);
    // wallet state should be null while loading all the wallets or when there is no user
    if (!walletConnectorOptions || !decodedJwt) {
        return [];
    }
    return decodedJwt.verifiedCredentials
        .map((account) => {
        const wallet = findWallet.findWallet(account, walletConnectorOptions);
        // this probably shouldn't happen. this would mean that the user has an account linked
        // with wallet W, but the customer has toggled off wallet W or the chain that
        // supports wallet W
        /* istanbul ignore next */
        if (!wallet)
            return null;
        if (account.id === primaryWalletId &&
            shouldManuallyReconnectOnRefresh.shouldManuallyReconnectOnRefresh(wallet.walletConnector)) {
            wallet.walletConnector.connect();
        }
        // this account is the owner of a smart wallet, and should not be surfaced
        if (smartWallet.isOwnerOfASmartWallet(account, decodedJwt.verifiedCredentials)) {
            return null;
        }
        if (account.address && account.chain) {
            if (account.walletProvider === sdkApi.WalletProviderEnum.SmartContractWallet) {
                smartWallet.initializeSmartWallet({
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

exports.createLinkedWalletsFromWalletOptions = createLinkedWalletsFromWalletOptions;
