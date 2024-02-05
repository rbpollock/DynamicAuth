import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useWalletBookContext } from '@dynamic-labs/wallet-book';
import { ErrorContainer } from '../../components/ErrorContainer/ErrorContainer.js';
import { Search } from '../../components/Search/Search.js';
import { Skeleton } from '../../components/Skeleton/Skeleton.js';
import { useErrorContext } from '../../context/ErrorContext/ErrorContext.js';
import { WALLET_PICKER_SEARCH_KEY, LAST_USED_WALLET } from '../../utils/constants/localStorage.js';
import '../../utils/constants/colors.js';
import { walletListBuilder } from '../../utils/functions/walletListBuilder/walletListBuilder.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import { FilterBridgeChainsName } from '../../utils/functions/walletFilters/index.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../context/ViewContext/ViewContext.js';
import { LocalStorage } from '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import { ReactComponent as SvgNoWalletFound } from '../../assets/no-wallet-found.js';
import { DefaultFooter } from '../../layout/DynamicAuthLayout/DefaultFooter/DefaultFooter.js';
import { useAuthLayoutChecks } from '../../utils/hooks/useAuthLayoutChecks/useAuthLayoutChecks.js';
import { SearchNotFoundMessage } from './SearchNotFoundMessage/SearchNotFoundMessage.js';
import { WalletListItem } from './WalletListItem/WalletListItem.js';

LocalStorage.setToLS(WALLET_PICKER_SEARCH_KEY, '');
const WalletList = ({ isWalletConnectList = false, }) => {
    var _a;
    const { walletsFilter, signWithEmailWalletName, walletConnectorOptions, projectSettings, defaultNumberOfWalletsToShow, bridgeChainsToConnect, connectedWallets, authMode, multiWallet, walletConnector, } = useInternalDynamicContext();
    const { walletBook } = useWalletBookContext();
    const { error } = useErrorContext();
    const { showDefaultFooter } = useAuthLayoutChecks(walletConnector);
    const [footerBorderIsVisible, setFooterBorderIsVisible] = useState(true);
    const { t } = useTranslation();
    const [filterValue, setFilterValue] = useState((_a = LocalStorage.getFromLS(WALLET_PICKER_SEARCH_KEY)) !== null && _a !== void 0 ? _a : '');
    const getFilteredBridgeChains = (bridgeChainsToConnect === null || bridgeChainsToConnect === void 0 ? void 0 : bridgeChainsToConnect.length) &&
        FilterBridgeChainsName(bridgeChainsToConnect[0].chain);
    const filteredBridgeChains = getFilteredBridgeChains && getFilteredBridgeChains(walletConnectorOptions);
    const { numberOfWallets, walletsList } = walletListBuilder({
        authMode,
        connectedWallets,
        groupWallets: true,
        inputList: filteredBridgeChains || walletConnectorOptions,
        isWalletConnectList,
        lastUsedWalletName: LocalStorage.getFromLS(LAST_USED_WALLET),
        multiWallet,
        numberOfWalletsToShow: defaultNumberOfWalletsToShow,
        searchFilter: filterValue,
        showMoreWalletsWithFilter: true,
        signWithEmailWalletName,
        walletBook,
        walletsFilter,
    });
    const isSearchEnabled = numberOfWallets > defaultNumberOfWalletsToShow &&
        walletsList.length !== numberOfWallets;
    const walletListScrollRef = useRef(null);
    /* istanbul ignore next */
    const handleScroll = () => {
        const element = walletListScrollRef.current;
        if (!element) {
            return;
        }
        if ((element === null || element === void 0 ? void 0 : element.scrollTop) > (element === null || element === void 0 ? void 0 : element.clientHeight) * 1.25) {
            setFooterBorderIsVisible(false);
        }
        else {
            setFooterBorderIsVisible(true);
        }
    };
    const handleFilterValueChange = (value) => {
        LocalStorage.setToLS(WALLET_PICKER_SEARCH_KEY, value);
        setFilterValue(value);
    };
    const searchContainer = !projectSettings ? (jsx(Skeleton, { className: 'wallet-list__search-skeleton' })) : (isSearchEnabled && (jsx("div", { className: classNames('wallet-list__search-container', {
            'wallet-list__search-container--scroll': !error,
        }), children: jsx(Search, { copykey: 'dyn_wallet_list.search.label', label: t('dyn_wallet_list.search.label', { numberOfWallets }), value: filterValue, onChange: ({ target: { value } }) => handleFilterValueChange(value), onClickClear: () => handleFilterValueChange('') }) })));
    return (jsxs(Fragment, { children: [searchContainer, Boolean(error) && (jsx(ErrorContainer, { className: 'wallet-list__error-container', withIcon: false, children: error })), jsx("div", { className: 'wallet-list__container', children: jsxs("div", { className: classNames('wallet-list__scroll-container', {
                        'wallet-list__scroll-container--error': Boolean(error),
                        'wallet-list__scroll-container--full-height': isSearchEnabled,
                    }), "data-testid": 'wallet-list-scroll-container', ref: walletListScrollRef, onScroll: handleScroll, children: [!projectSettings ? (jsx(Skeleton, { count: 10, className: 'wallet-list__tile-skeleton' })) : (jsxs(Fragment, { children: [walletConnectorOptions.length === 0 && (jsx(ErrorContainer, { copykey: 'dyn_wallet_list.configuration_mismatch', children: t('dyn_wallet_list.configuration_mismatch') })), walletConnectorOptions.length && walletsList.length === 0 ? (jsx(SearchNotFoundMessage, { title: t('dyn_wallet_list.search.not_found.title'), subtitle: t('dyn_wallet_list.search.not_found.description'), image: jsx(SvgNoWalletFound, {}) })) : (walletsList.map((wallet, index) => (jsx(WalletListItem, { wallet: wallet, usingMultiWallet: multiWallet, onResetSearchValue: () => handleFilterValueChange('') }, `${wallet.key}_${index}`))))] })), isSearchEnabled && !filterValue && projectSettings && (jsx(SearchNotFoundMessage, {}))] }) }), showDefaultFooter && (jsx(DefaultFooter, { hideBorder: !footerBorderIsVisible }))] }));
};

export { WalletList };
