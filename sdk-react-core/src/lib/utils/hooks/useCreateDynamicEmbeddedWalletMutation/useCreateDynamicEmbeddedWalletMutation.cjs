'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var createEmbeddedWalletWithPasskey = require('../../../views/Passkey/utils/createEmbeddedWalletWithPasskey/createEmbeddedWalletWithPasskey.cjs');
var findPasskeyEmailWalletConnector = require('../../../views/Passkey/utils/findPasskeyEmailWalletConnector/findPasskeyEmailWalletConnector.cjs');
var createPregeneratedWallet = require('../../../views/Passkey/utils/createPregeneratedWallet/createPregeneratedWallet.cjs');
require('@dynamic-labs/wallet-connector-core');
var createUserProfile = require('../../functions/createUserProfile/createUserProfile.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var index = require('../../functions/storeAuthToken/index.cjs');
var smartWallet = require('../useWalletConnectors/utils/smartWallet/smartWallet.cjs');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
var useMutation = require('../useMutation/useMutation.cjs');

const useCreateDynamicEmbeddedWalletMutation = () => {
    const { setPrimaryWalletId, internalEvents, setCallback, setUser, user, setShowAuthFlow, } = useInternalDynamicContext.useInternalDynamicContext();
    const { mutate: createDynamicEmbeddedWalletMutation, isLoading, error, } = useMutation.useMutation(({ authToken, decodedJwt, environmentId, walletConnectorOptions, withAuthenticator, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const createEmbeddedWalletMethodToUse = withAuthenticator
            ? createEmbeddedWalletWithPasskey.createEmbeddedWalletWithPasskey
            : createPregeneratedWallet.createPregeneratedWallet;
        const { embeddedWalletVerifiedCredential, jwt, decodedJwt: updatedDecodedJwt, walletConnector, } = yield createEmbeddedWalletMethodToUse({
            authToken,
            environmentId,
            user: user !== null && user !== void 0 ? user : createUserProfile.createUserProfile(decodedJwt),
            walletConnector: findPasskeyEmailWalletConnector.findPasskeyEmailWalletConnector(walletConnectorOptions),
        });
        const turnkeyVerifiedCredentials = (_a = updatedDecodedJwt === null || updatedDecodedJwt === void 0 ? void 0 : updatedDecodedJwt.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.find(({ walletName }) => walletName === null || walletName === void 0 ? void 0 : walletName.startsWith('turnkey'));
        /** It's not authenticated if it's a turnkey wallet that still hasn't created a passkey */
        const authenticated = Boolean((_b = turnkeyVerifiedCredentials === null || turnkeyVerifiedCredentials === void 0 ? void 0 : turnkeyVerifiedCredentials.walletProperties) === null || _b === void 0 ? void 0 : _b.isAuthenticatorAttached);
        const passkeyWallet = {
            address: (yield walletConnector.fetchPublicAddress()) || '',
            authenticated,
            chain: walletConnector.connectedChain || '',
            connected: true,
            connector: walletConnector,
            id: embeddedWalletVerifiedCredential.id,
        };
        internalEvents.current.emit('embeddedWalletCreated', passkeyWallet);
        const smartWallet$1 = smartWallet.findSmartWallet(embeddedWalletVerifiedCredential, updatedDecodedJwt.verifiedCredentials);
        if (smartWallet$1) {
            yield smartWallet.initializeSmartWallet({
                account: smartWallet$1,
                verifiedCredentials: updatedDecodedJwt.verifiedCredentials,
                walletConnectorOptions,
            });
            setPrimaryWalletId(smartWallet$1.id);
        }
        else {
            setPrimaryWalletId(embeddedWalletVerifiedCredential.id);
        }
        index.storeAuthToken(jwt);
        setUser(createUserProfile.createUserProfile(updatedDecodedJwt));
        setShowAuthFlow(false);
        setCallback('embeddedWalletCreated', {
            email: (turnkeyVerifiedCredentials === null || turnkeyVerifiedCredentials === void 0 ? void 0 : turnkeyVerifiedCredentials.email) || '',
            verifiedCredential: turnkeyVerifiedCredentials,
        });
    }), {
        onFailure: (err) => {
            logger.logger.error('Failed to create embedded wallet', err);
            internalEvents.current.emit('embeddedWalletFailed', err);
        },
    });
    return {
        createDynamicEmbeddedWalletMutation,
        error,
        isLoading,
    };
};

exports.useCreateDynamicEmbeddedWalletMutation = useCreateDynamicEmbeddedWalletMutation;
