import { __awaiter } from '../../../../../../../_virtual/_tslib.js';
import { isSmartWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { findWallet } from '../findWallet/findWallet.js';

// assumes `account` input is a smart wallet (has a signerRefId) and attempts to find
// the associated eoa account
const findOwner = (account, verifiedCredentials) => verifiedCredentials.find((credential) => credential.id === account.signerRefId);
const findSmartWallet = (account, verifiedCredentials) => verifiedCredentials.find((credential) => credential.signerRefId === account.id);
const isOwnerOfASmartWallet = (account, verifiedCredentials) => Boolean(findSmartWallet(account, verifiedCredentials));
const initializeSmartWallet = ({ account, verifiedCredentials, walletConnectorOptions, }) => __awaiter(void 0, void 0, void 0, function* () {
    const owner = findOwner(account, verifiedCredentials);
    if (!owner) {
        throw new Error('could not find associated eoa account for smart wallet');
    }
    const ownerWallet = findWallet(owner, walletConnectorOptions);
    if (!ownerWallet) {
        throw new Error('could not find owner wallet from wallet options');
    }
    const smartWallet = findWallet(account, walletConnectorOptions);
    if (!smartWallet) {
        throw new Error('could not find smart wallet from wallet options');
    }
    const connector = smartWallet.walletConnector;
    if (!isSmartWalletConnector(connector)) {
        throw new Error('could not initialize smart wallet');
    }
    yield connector.setEoaConnector(ownerWallet.walletConnector);
});

export { findOwner, findSmartWallet, initializeSmartWallet, isOwnerOfASmartWallet };
