'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
var ViewContext = require('../../../../context/ViewContext/ViewContext.cjs');
var ErrorContext = require('../../../../context/ErrorContext/ErrorContext.cjs');
var useVerifyWallet = require('../../useVerifyWallet/useVerifyWallet.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('react');
require('@dynamic-labs/wallet-book');
require('../../../constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../../shared/consts/index.cjs');
var CaptchaContext = require('../../../../context/CaptchaContext/CaptchaContext.cjs');

const useSignConnectOnlyUser = () => {
    const { setView } = ViewContext.useViewContext();
    const { setErrorMessage } = ErrorContext.useErrorContext();
    const { getCaptchaToken } = CaptchaContext.useCaptchaContext();
    const { connectWallet, consumeNonce, displaySiweStatement, projectSettings, environmentId, setIsSingleWalletAccount, setShowAuthFlow, setSelectedWalletConnectorKey, walletUiUtils, } = useInternalDynamicContext.useInternalDynamicContext();
    const verifyWallet = useVerifyWallet.useVerifyWallet({
        consumeNonce,
        displaySiweStatement,
        environmentId,
        projectSettings,
        setIsSingleWalletAccount,
    });
    return ({ walletConnector, fetchPublicAddressOpts = undefined, }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        try {
            if (walletConnectorCore.isEmbeddedConnector(walletConnector) &&
                !walletConnectorCore.isBloctoConnector(walletConnector)) {
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
            logger.logger.debug(err);
            setErrorMessage(err.toString());
            setShowAuthFlow(false);
            return;
        }
    });
};

exports.useSignConnectOnlyUser = useSignConnectOnlyUser;
