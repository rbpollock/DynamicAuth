'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var walletBook = require('@dynamic-labs/wallet-book');
var ErrorContainer = require('../../components/ErrorContainer/ErrorContainer.cjs');
var Search = require('../../components/Search/Search.cjs');
var Skeleton = require('../../components/Skeleton/Skeleton.cjs');
var ErrorContext = require('../../context/ErrorContext/ErrorContext.cjs');
var localStorage$1 = require('../../utils/constants/localStorage.cjs');
require('../../utils/constants/colors.cjs');
var walletListBuilder = require('../../utils/functions/walletListBuilder/walletListBuilder.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
var index = require('../../utils/functions/walletFilters/index.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
var localStorage = require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
var noWalletFound = require('../../assets/no-wallet-found.cjs');
var DefaultFooter = require('../../layout/DynamicAuthLayout/DefaultFooter/DefaultFooter.cjs');
var useAuthLayoutChecks = require('../../utils/hooks/useAuthLayoutChecks/useAuthLayoutChecks.cjs');
var SearchNotFoundMessage = require('./SearchNotFoundMessage/SearchNotFoundMessage.cjs');
var WalletListItem = require('./WalletListItem/WalletListItem.cjs');

localStorage.LocalStorage.setToLS(localStorage$1.WALLET_PICKER_SEARCH_KEY, '');
const WalletList = ({ isWalletConnectList = false, }) => {
    var _a;
    const { walletsFilter, signWithEmailWalletName, walletConnectorOptions, projectSettings, defaultNumberOfWalletsToShow, bridgeChainsToConnect, connectedWallets, authMode, multiWallet, walletConnector, } = useInternalDynamicContext.useInternalDynamicContext();
    const { walletBook: walletBook$1 } = walletBook.useWalletBookContext();
    const { error } = ErrorContext.useErrorContext();
    const { showDefaultFooter } = useAuthLayoutChecks.useAuthLayoutChecks(walletConnector);
    const [footerBorderIsVisible, setFooterBorderIsVisible] = React.useState(true);
    const { t } = reactI18next.useTranslation();
    const [filterValue, setFilterValue] = React.useState((_a = localStorage.LocalStorage.getFromLS(localStorage$1.WALLET_PICKER_SEARCH_KEY)) !== null && _a !== void 0 ? _a : '');
    const getFilteredBridgeChains = (bridgeChainsToConnect === null || bridgeChainsToConnect === void 0 ? void 0 : bridgeChainsToConnect.length) &&
        index.FilterBridgeChainsName(bridgeChainsToConnect[0].chain);
    const filteredBridgeChains = getFilteredBridgeChains && getFilteredBridgeChains(walletConnectorOptions);
    const { numberOfWallets, walletsList } = walletListBuilder.walletListBuilder({
        authMode,
        connectedWallets,
        groupWallets: true,
        inputList: filteredBridgeChains || walletConnectorOptions,
        isWalletConnectList,
        lastUsedWalletName: localStorage.LocalStorage.getFromLS(localStorage$1.LAST_USED_WALLET),
        multiWallet,
        numberOfWalletsToShow: defaultNumberOfWalletsToShow,
        searchFilter: filterValue,
        showMoreWalletsWithFilter: true,
        signWithEmailWalletName,
        walletBook: walletBook$1,
        walletsFilter,
    });
    const isSearchEnabled = numberOfWallets > defaultNumberOfWalletsToShow &&
        walletsList.length !== numberOfWallets;
    const walletListScrollRef = React.useRef(null);
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
        localStorage.LocalStorage.setToLS(localStorage$1.WALLET_PICKER_SEARCH_KEY, value);
        setFilterValue(value);
    };
    const searchContainer = !projectSettings ? (jsxRuntime.jsx(Skeleton.Skeleton, { className: 'wallet-list__search-skeleton' })) : (isSearchEnabled && (jsxRuntime.jsx("div", { className: classNames.classNames('wallet-list__search-container', {
            'wallet-list__search-container--scroll': !error,
        }), children: jsxRuntime.jsx(Search.Search, { copykey: 'dyn_wallet_list.search.label', label: t('dyn_wallet_list.search.label', { numberOfWallets }), value: filterValue, onChange: ({ target: { value } }) => handleFilterValueChange(value), onClickClear: () => handleFilterValueChange('') }) })));
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [searchContainer, Boolean(error) && (jsxRuntime.jsx(ErrorContainer.ErrorContainer, { className: 'wallet-list__error-container', withIcon: false, children: error })), jsxRuntime.jsx("div", { className: 'wallet-list__container', children: jsxRuntime.jsxs("div", { className: classNames.classNames('wallet-list__scroll-container', {
                        'wallet-list__scroll-container--error': Boolean(error),
                        'wallet-list__scroll-container--full-height': isSearchEnabled,
                    }), "data-testid": 'wallet-list-scroll-container', ref: walletListScrollRef, onScroll: handleScroll, children: [!projectSettings ? (jsxRuntime.jsx(Skeleton.Skeleton, { count: 10, className: 'wallet-list__tile-skeleton' })) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [walletConnectorOptions.length === 0 && (jsxRuntime.jsx(ErrorContainer.ErrorContainer, { copykey: 'dyn_wallet_list.configuration_mismatch', children: t('dyn_wallet_list.configuration_mismatch') })), walletConnectorOptions.length && walletsList.length === 0 ? (jsxRuntime.jsx(SearchNotFoundMessage.SearchNotFoundMessage, { title: t('dyn_wallet_list.search.not_found.title'), subtitle: t('dyn_wallet_list.search.not_found.description'), image: jsxRuntime.jsx(noWalletFound.ReactComponent, {}) })) : (walletsList.map((wallet, index) => (jsxRuntime.jsx(WalletListItem.WalletListItem, { wallet: wallet, usingMultiWallet: multiWallet, onResetSearchValue: () => handleFilterValueChange('') }, `${wallet.key}_${index}`))))] })), isSearchEnabled && !filterValue && projectSettings && (jsxRuntime.jsx(SearchNotFoundMessage.SearchNotFoundMessage, {}))] }) }), showDefaultFooter && (jsxRuntime.jsx(DefaultFooter.DefaultFooter, { hideBorder: !footerBorderIsVisible }))] }));
};

exports.WalletList = WalletList;
