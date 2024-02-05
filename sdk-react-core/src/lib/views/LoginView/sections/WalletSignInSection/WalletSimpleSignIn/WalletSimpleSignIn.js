import { jsx, jsxs } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { useWalletBookContext } from '@dynamic-labs/wallet-book';
import { Skeleton } from '../../../../../components/Skeleton/Skeleton.js';
import { useInternalDynamicContext } from '../../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../../../../context/ViewContext/ViewContext.js';
import 'react';
import { LAST_USED_WALLET, AUTH_USER } from '../../../../../utils/constants/localStorage.js';
import '../../../../../utils/constants/colors.js';
import { LocalStorage } from '../../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../../../shared/consts/index.js';
import { WalletListItem } from '../../../../WalletList/WalletListItem/WalletListItem.js';
import { ListItemButton } from '../ListItemButton/ListItemButton.js';
import { walletListBuilder } from '../../../../../utils/functions/walletListBuilder/walletListBuilder.js';

const WalletSimpleSignIn = ({ previewWalletsNumber, disabled = false, onshowAllWallets, }) => {
    const { t } = useTranslation();
    const { walletConnectorOptions, projectSettings, walletsFilter, signWithEmailWalletName, authMode, multiWallet, connectedWallets, } = useInternalDynamicContext();
    const { walletBook } = useWalletBookContext();
    const { numberOfWallets, walletsList } = walletListBuilder({
        authMode,
        connectedWallets,
        groupWallets: true,
        inputList: walletConnectorOptions,
        isWalletConnectList: false,
        lastUsedWalletName: LocalStorage.getFromLS(LAST_USED_WALLET),
        loginWithEmail: true,
        multiWallet,
        numberOfWalletsToShow: previewWalletsNumber,
        searchFilter: undefined,
        signWithEmailWalletName,
        walletBook,
        walletsFilter,
    });
    const isUsingMultiWallet = Boolean(LocalStorage.getFromLS(AUTH_USER));
    return !projectSettings ? (jsx(Skeleton, { count: previewWalletsNumber + 1, className: 'login-with-email-wallet-list__skeleton' })) : (jsxs("div", { className: 'login-with-email-wallet-list__container', "data-testid": 'top-wallets-list', children: [walletsList.map((wallet, index) => (jsx(WalletListItem, { wallet: wallet, usingMultiWallet: isUsingMultiWallet, disabled: disabled }, `${wallet.key}_${index}`))), jsx(ListItemButton, { copykey: 'dyn_wallet_list.view_all', text: t('dyn_wallet_list.view_all'), onClick: onshowAllWallets, numberOfWallets: numberOfWallets, disabled: disabled })] }));
};

export { WalletSimpleSignIn };
