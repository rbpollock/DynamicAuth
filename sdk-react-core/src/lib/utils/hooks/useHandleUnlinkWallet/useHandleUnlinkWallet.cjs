'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
var localStorage$1 = require('../../constants/localStorage.cjs');
require('../../constants/colors.cjs');
var localStorage = require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
var handleUnlinkHelper = require('../../functions/handleUnlinkHelper/handleUnlinkHelper.cjs');
var isSameWalletName = require('../../functions/isSameWalletName/isSameWalletName.cjs');

const useHandleUnlinkWallet = ({ verifiedCredentials, environmentId, primaryWalletId, secondaryWallets, setUser, user, eventsCallbacks, }) => {
    const callback = React.useCallback((walletId) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _a;
        // when we call handleUnlinkWallet on the same execution stack as setPrimaryWallet, the value of
        // primaryWalletId coming from the DynamicContext will be the old one in  this callback function
        // so we need to get the latest value from LS
        // e.g. primary wallet id is 1234, and we have a function like this:
        // async function setPrimaryWalletAndUnlink() {
        //  await setPrimaryWallet('5678');
        //  handleUnlinkWallet('1234');
        // }
        // without fetching from LS, primaryWalletId would still be 1234 when handleUnlinkWallet runs in the example above
        const currentPrimaryWalletId = (_a = localStorage.LocalStorage.getFromLS(localStorage$1.PRIMARY_WALLET_ID)) !== null && _a !== void 0 ? _a : primaryWalletId;
        if (walletId === currentPrimaryWalletId)
            return;
        const vcWalletFromId = user === null || user === void 0 ? void 0 : user.verifiedCredentials.find((wallet) => wallet.id === walletId);
        const newUser = yield handleUnlinkHelper.handleUnlinkHelper({
            environmentId,
            primaryWalletId: currentPrimaryWalletId,
            walletId,
        });
        if (newUser) {
            setUser(newUser);
        }
        const wallet = secondaryWallets.find((w) => w.id === walletId);
        const numberOfLinkedWallets = verifiedCredentials.filter((account) => account.walletName &&
            isSameWalletName.isSameWalletName(account.walletName, (wallet === null || wallet === void 0 ? void 0 : wallet.connector.name) || '')).length;
        // If there's only 1, it's the one being removed and we can kill the session
        if (numberOfLinkedWallets === 1) {
            yield (wallet === null || wallet === void 0 ? void 0 : wallet.connector.endSession());
        }
        if (vcWalletFromId && (eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onUnlinkSuccess)) {
            eventsCallbacks.onUnlinkSuccess(vcWalletFromId);
        }
    }), [
        primaryWalletId,
        environmentId,
        secondaryWallets,
        setUser,
        verifiedCredentials,
        eventsCallbacks,
        user,
    ]);
    return callback;
};

exports.useHandleUnlinkWallet = useHandleUnlinkWallet;
