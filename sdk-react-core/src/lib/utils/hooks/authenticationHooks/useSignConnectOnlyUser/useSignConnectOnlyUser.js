import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { isEmbeddedConnector, isBloctoConnector } from '@dynamic-labs/wallet-connector-core';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import { useViewContext } from '../../../../context/ViewContext/ViewContext.js';
import { useErrorContext } from '../../../../context/ErrorContext/ErrorContext.js';
import { useVerifyWallet } from '../../useVerifyWallet/useVerifyWallet.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import 'react';
import '@dynamic-labs/wallet-book';
import '../../../constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../../shared/consts/index.js';
import { useCaptchaContext } from '../../../../context/CaptchaContext/CaptchaContext.js';

const useSignConnectOnlyUser = () => {
    const { setView } = useViewContext();
    const { setErrorMessage } = useErrorContext();
    const { getCaptchaToken } = useCaptchaContext();
    const { connectWallet, consumeNonce, displaySiweStatement, projectSettings, environmentId, setIsSingleWalletAccount, setShowAuthFlow, setSelectedWalletConnectorKey, walletUiUtils, } = useInternalDynamicContext();
    const verifyWallet = useVerifyWallet({
        consumeNonce,
        displaySiweStatement,
        environmentId,
        projectSettings,
        setIsSingleWalletAccount,
    });
    return ({ walletConnector, fetchPublicAddressOpts = undefined, }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (isEmbeddedConnector(walletConnector) &&
                !isBloctoConnector(walletConnector)) {
                walletUiUtils.disabledConfirmationOnce();
            }
            // Prepare states to show the pending signature view (without back button)
            // We need this because in connect-only we don't want to show wallet-list
            // We don't want to show the back button in the pending signature view
            // because we don't want to go back to the wallet-list
            setSelectedWalletConnectorKey(walletConnector.key);
            setView('pending-signature-without-back-button');
            setShowAuthFlow(true);
            // Wallet should be already connected at this point
            // We just need to verify it
            const connectionResult = yield connectWallet(walletConnector, fetchPublicAddressOpts);
            if (!(connectionResult === null || connectionResult === void 0 ? void 0 : connectionResult.address)) {
                return;
            }
            yield verifyWallet({
                captchaToken: getCaptchaToken(),
                publicWalletAddress: connectionResult.address,
                walletConnector,
            });
        }
        catch (err) {
            logger.debug(err);
            setErrorMessage(err.toString());
            setShowAuthFlow(false);
            return;
        }
    });
};

export { useSignConnectOnlyUser };
