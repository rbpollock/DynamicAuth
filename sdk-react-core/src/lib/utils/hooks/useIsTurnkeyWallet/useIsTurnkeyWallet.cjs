'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');

const useIsTurnkeyWallet = () => {
    var _a;
    const { primaryWallet, user } = useInternalDynamicContext.useInternalDynamicContext();
    const getTurnkeyVerifiedCredential = () => {
        if (!primaryWallet || !user) {
            return undefined;
        }
        const isPrimaryWalletTurnkey = primaryWallet.connector.key.startsWith('turnkey');
        if (!isPrimaryWalletTurnkey) {
            return undefined;
        }
        const primaryWalletId = primaryWallet.id;
        const turnkeyVC = user.verifiedCredentials.find((vc) => vc.id === primaryWalletId);
        if (!turnkeyVC) {
            return undefined;
        }
        return turnkeyVC;
    };
    const getUnclaimedTurnkeyTheSignerOfScw = () => {
        if (!primaryWallet || !user) {
            return false;
        }
        const unclaimedTurnkeyVc = user.verifiedCredentials.find((vc) => {
            var _a, _b;
            return ((_a = vc.walletName) === null || _a === void 0 ? void 0 : _a.startsWith('turnkey')) &&
                ((_b = vc.walletProperties) === null || _b === void 0 ? void 0 : _b.isAuthenticatorAttached) === false;
        });
        const smartContractWalletWithUnclaimedTurnkeySigner = user.verifiedCredentials.find((vc) => unclaimedTurnkeyVc && vc.signerRefId === unclaimedTurnkeyVc.id);
        return smartContractWalletWithUnclaimedTurnkeySigner;
    };
    const turnkeyVerifiedCredential = getTurnkeyVerifiedCredential();
    const unclaimedTurnkeyTheSignerOfScw = getUnclaimedTurnkeyTheSignerOfScw();
    const isTurnkeyWallet = Boolean(turnkeyVerifiedCredential);
    const isUnclaimedTurnkeyTheSignerOfScw = Boolean(unclaimedTurnkeyTheSignerOfScw);
    const hasTurnkeyVerifiedCredentialAuthenticator = Boolean((_a = turnkeyVerifiedCredential === null || turnkeyVerifiedCredential === void 0 ? void 0 : turnkeyVerifiedCredential.walletProperties) === null || _a === void 0 ? void 0 : _a.isAuthenticatorAttached);
    const isTurnkeyWalletWithoutAuthenticator = (isTurnkeyWallet && !hasTurnkeyVerifiedCredentialAuthenticator) ||
        isUnclaimedTurnkeyTheSignerOfScw;
    return {
        hasTurnkeyVerifiedCredentialAuthenticator,
        isTurnkeyWallet,
        isTurnkeyWalletWithoutAuthenticator,
        turnkeyVerifiedCredential,
    };
};

exports.useIsTurnkeyWallet = useIsTurnkeyWallet;
