import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useCallback } from 'react';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import { PRIMARY_WALLET_ID } from '../../constants/localStorage.js';
import '../../constants/colors.js';
import { LocalStorage } from '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import { handleUnlinkHelper } from '../../functions/handleUnlinkHelper/handleUnlinkHelper.js';
import { isSameWalletName } from '../../functions/isSameWalletName/isSameWalletName.js';

const useHandleUnlinkWallet = ({ verifiedCredentials, environmentId, primaryWalletId, secondaryWallets, setUser, user, eventsCallbacks, }) => {
    const callback = useCallback((walletId) => __awaiter(void 0, void 0, void 0, function* () {
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
        const currentPrimaryWalletId = (_a = LocalStorage.getFromLS(PRIMARY_WALLET_ID)) !== null && _a !== void 0 ? _a : primaryWalletId;
        if (walletId === currentPrimaryWalletId)
            return;
        const vcWalletFromId = user === null || user === void 0 ? void 0 : user.verifiedCredentials.find((wallet) => wallet.id === walletId);
        const newUser = yield handleUnlinkHelper({
            environmentId,
            primaryWalletId: currentPrimaryWalletId,
            walletId,
        });
        if (newUser) {
            setUser(newUser);
        }
        const wallet = secondaryWallets.find((w) => w.id === walletId);
        const numberOfLinkedWallets = verifiedCredentials.filter((account) => account.walletName &&
            isSameWalletName(account.walletName, (wallet === null || wallet === void 0 ? void 0 : wallet.connector.name) || '')).length;
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

export { useHandleUnlinkWallet };
