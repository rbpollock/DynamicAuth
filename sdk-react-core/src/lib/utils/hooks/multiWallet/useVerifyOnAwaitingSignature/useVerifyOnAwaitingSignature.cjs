'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../../constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var requiresTwoStepAuthentication = require('../../../functions/requiresTwoStepAuthentication/requiresTwoStepAuthentication.cjs');
var useConnectAndSign = require('../../authenticationHooks/useConnectAndSign/useConnectAndSign.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');

const useVerifyOnAwaitingSignature = () => {
    const { awaitingSignatureState, multiWalletWidgetState, setMultiWalletWidgetState, legacyIsVerifying, setLegacyIsVerifying, selectedWalletConnector, } = useInternalDynamicContext.useInternalDynamicContext();
    const triggerConnectAndSign = useConnectAndSign.useConnectAndSign();
    React.useEffect(() => {
        if (!legacyIsVerifying &&
            multiWalletWidgetState === 'awaiting_signature' &&
            selectedWalletConnector &&
            awaitingSignatureState === 'linking_new_wallet' &&
            !requiresTwoStepAuthentication.requiresTwoStepAuthentication(selectedWalletConnector)) {
            setLegacyIsVerifying(true);
            triggerConnectAndSign({ walletConnector: selectedWalletConnector })
                .catch((e) => {
                logger.logger.error(e);
            })
                .finally(() => {
                setMultiWalletWidgetState('idle');
                setLegacyIsVerifying(false);
            });
        }
    }, [
        awaitingSignatureState,
        selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name,
        multiWalletWidgetState,
        setMultiWalletWidgetState,
        legacyIsVerifying,
    ]);
};

exports.useVerifyOnAwaitingSignature = useVerifyOnAwaitingSignature;
