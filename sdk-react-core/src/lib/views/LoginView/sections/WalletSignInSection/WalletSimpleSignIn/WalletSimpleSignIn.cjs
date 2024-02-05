'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var walletBook = require('@dynamic-labs/wallet-book');
var Skeleton = require('../../../../../components/Skeleton/Skeleton.cjs');
var useInternalDynamicContext = require('../../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../../../../context/ViewContext/ViewContext.cjs');
require('react');
var localStorage$1 = require('../../../../../utils/constants/localStorage.cjs');
require('../../../../../utils/constants/colors.cjs');
var localStorage = require('../../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../../../shared/consts/index.cjs');
var WalletListItem = require('../../../../WalletList/WalletListItem/WalletListItem.cjs');
var ListItemButton = require('../ListItemButton/ListItemButton.cjs');
var walletListBuilder = require('../../../../../utils/functions/walletListBuilder/walletListBuilder.cjs');

const WalletSimpleSignIn = ({ previewWalletsNumber, disabled = false, onshowAllWallets, }) => {
    const { t } = reactI18next.useTranslation();
    const { walletConnectorOptions, projectSettings, walletsFilter, signWithEmailWalletName, authMode, multiWallet, connectedWallets, } = useInternalDynamicContext.useInternalDynamicContext();
    const { walletBook: walletBook$1 } = walletBook.useWalletBookContext();
    const { numberOfWallets, walletsList } = walletListBuilder.walletListBuilder({
        authMode,
        connectedWallets,
        groupWallets: true,
        inputList: walletConnectorOptions,
        isWalletConnectList: false,
        lastUsedWalletName: localStorage.LocalStorage.getFromLS(localStorage$1.LAST_USED_WALLET),
        loginWithEmail: true,
        multiWallet,
        numberOfWalletsToShow: previewWalletsNumber,
        searchFilter: undefined,
        signWithEmailWalletName,
        walletBook: walletBook$1,
        walletsFilter,
    });
    const isUsingMultiWallet = Boolean(localStorage.LocalStorage.getFromLS(localStorage$1.AUTH_USER));
    return !projectSettings ? (jsxRuntime.jsx(Skeleton.Skeleton, { count: previewWalletsNumber + 1, className: 'login-with-email-wallet-list__skeleton' })) : (jsxRuntime.jsxs("div", { className: 'login-with-email-wallet-list__container', "data-testid": 'top-wallets-list', children: [walletsList.map((wallet, index) => (jsxRuntime.jsx(WalletListItem.WalletListItem, { wallet: wallet, usingMultiWallet: isUsingMultiWallet, disabled: disabled }, `${wallet.key}_${index}`))), jsxRuntime.jsx(ListItemButton.ListItemButton, { copykey: 'dyn_wallet_list.view_all', text: t('dyn_wallet_list.view_all'), onClick: onshowAllWallets, numberOfWallets: numberOfWallets, disabled: disabled })] }));
};

exports.WalletSimpleSignIn = WalletSimpleSignIn;
