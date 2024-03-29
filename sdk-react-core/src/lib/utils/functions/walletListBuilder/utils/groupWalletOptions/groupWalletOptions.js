import { getWalletGroup } from '@dynamic-labs/wallet-book';
import { isWalletGroup } from '../isWalletGroup/isWalletGroup.js';

const findGroupIndex = (groupKey, workingArray) => workingArray.findIndex((walletOption) => isWalletGroup(walletOption) && walletOption.key === groupKey);
/**
 *  Group wallets by `group` property
 *
 * @param {WalletOption[]} walletOptionList - WalletOption list
 * @returns {WalletOption[]} the wallet options list with groups
 */
const groupWalletOptions = (walletBook, walletOptionList) => {
    const output = [];
    walletOptionList.forEach((currentWalletOption) => {
        var _a;
        // Go to the next step if walletOption does not contain group
        if (!currentWalletOption.group) {
            return output.push(currentWalletOption);
        }
        // Determine if there a already defined group
        const existingGroupIndex = findGroupIndex(currentWalletOption.group, output);
        if (existingGroupIndex > -1) {
            return (_a = output[existingGroupIndex].groupedWallets) === null || _a === void 0 ? void 0 : _a.push(currentWalletOption);
        }
        // Validate if there is any other wallet with the same group
        const isThereWalletOptionWithSameGroup = walletOptionList.some((walletOption) => {
            var _a;
            const isSameGroup = currentWalletOption.group === walletOption.group;
            const isDifferentKey = currentWalletOption.key !== walletOption.key;
            const hasInjectedConfig = ((_a = walletOption.injectedConfig) === null || _a === void 0 ? void 0 : _a.length) &&
                walletOption.injectedConfig.length > 1;
            return isSameGroup && (hasInjectedConfig || isDifferentKey);
        });
        // Avoid group creation if there only one wallet in group
        if (!isThereWalletOptionWithSameGroup) {
            return output.push(currentWalletOption);
        }
        const walletBookData = getWalletGroup(walletBook, currentWalletOption.group);
        const walletGroup = {
            groupedWallets: [currentWalletOption],
            key: walletBookData.key,
            name: walletBookData.name,
        };
        return output.push(walletGroup);
    });
    return output;
};

export { groupWalletOptions };
