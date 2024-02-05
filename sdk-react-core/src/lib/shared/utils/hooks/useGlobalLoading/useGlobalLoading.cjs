'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../../functions/lastAuthenticatedAccount/index.cjs');

const useGlobalLoading = ({ authMode, connectedInfo, connectedWallets, projectSettings, primaryWallet, user, walletBook, }) => {
    var _a;
    const [sdkHasLoaded, setSdkHasLoaded] = React.useState(false);
    const primaryWalletIsLoading = user &&
        ((_a = index.lastAuthenticatedAccount(user)) === null || _a === void 0 ? void 0 : _a.format) === 'blockchain' &&
        !primaryWallet;
    const connectOnlyUserIsLoading = authMode === 'connect-only' &&
        connectedInfo &&
        connectedWallets.length === 0;
    React.useEffect(() => {
        var _a;
        if (!Object.keys((_a = walletBook === null || walletBook === void 0 ? void 0 : walletBook.wallets) !== null && _a !== void 0 ? _a : {}).length) {
            return;
        }
        if (projectSettings) {
            if (primaryWalletIsLoading || connectOnlyUserIsLoading) {
                return;
            }
            setSdkHasLoaded(true);
        }
    }, [
        projectSettings,
        primaryWallet,
        user,
        primaryWalletIsLoading,
        connectOnlyUserIsLoading,
        walletBook,
    ]);
    return {
        sdkHasLoaded,
        setSdkHasLoaded,
    };
};

exports.useGlobalLoading = useGlobalLoading;
