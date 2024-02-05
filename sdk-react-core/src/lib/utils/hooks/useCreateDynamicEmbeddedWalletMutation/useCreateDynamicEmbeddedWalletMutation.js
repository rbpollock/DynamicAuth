import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { createEmbeddedWalletWithPasskey } from '../../../views/Passkey/utils/createEmbeddedWalletWithPasskey/createEmbeddedWalletWithPasskey.js';
import { findPasskeyEmailWalletConnector } from '../../../views/Passkey/utils/findPasskeyEmailWalletConnector/findPasskeyEmailWalletConnector.js';
import { createPregeneratedWallet } from '../../../views/Passkey/utils/createPregeneratedWallet/createPregeneratedWallet.js';
import '@dynamic-labs/wallet-connector-core';
import { createUserProfile } from '../../functions/createUserProfile/createUserProfile.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { storeAuthToken } from '../../functions/storeAuthToken/index.js';
import { findSmartWallet, initializeSmartWallet } from '../useWalletConnectors/utils/smartWallet/smartWallet.js';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { useMutation } from '../useMutation/useMutation.js';

const useCreateDynamicEmbeddedWalletMutation = () => {
    const { setPrimaryWalletId, internalEvents, setCallback, setUser, user, setShowAuthFlow, } = useInternalDynamicContext();
    const { mutate: createDynamicEmbeddedWalletMutation, isLoading, error, } = useMutation(({ authToken, decodedJwt, environmentId, walletConnectorOptions, withAuthenticator, }) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const createEmbeddedWalletMethodToUse = withAuthenticator
            ? createEmbeddedWalletWithPasskey
            : createPregeneratedWallet;
        const { embeddedWalletVerifiedCredential, jwt, decodedJwt: updatedDecodedJwt, walletConnector, } = yield createEmbeddedWalletMethodToUse({
            authToken,
            environmentId,
            user: user !== null && user !== void 0 ? user : createUserProfile(decodedJwt),
            walletConnector: findPasskeyEmailWalletConnector(walletConnectorOptions),
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
        const smartWallet = findSmartWallet(embeddedWalletVerifiedCredential, updatedDecodedJwt.verifiedCredentials);
        if (smartWallet) {
            yield initializeSmartWallet({
                account: smartWallet,
                verifiedCredentials: updatedDecodedJwt.verifiedCredentials,
                walletConnectorOptions,
            });
            setPrimaryWalletId(smartWallet.id);
        }
        else {
            setPrimaryWalletId(embeddedWalletVerifiedCredential.id);
        }
        storeAuthToken(jwt);
        setUser(createUserProfile(updatedDecodedJwt));
        setShowAuthFlow(false);
        setCallback('embeddedWalletCreated', {
            email: (turnkeyVerifiedCredentials === null || turnkeyVerifiedCredentials === void 0 ? void 0 : turnkeyVerifiedCredentials.email) || '',
            verifiedCredential: turnkeyVerifiedCredentials,
        });
    }), {
        onFailure: (err) => {
            logger.error('Failed to create embedded wallet', err);
            internalEvents.current.emit('embeddedWalletFailed', err);
        },
    });
    return {
        createDynamicEmbeddedWalletMutation,
        error,
        isLoading,
    };
};

export { useCreateDynamicEmbeddedWalletMutation };
