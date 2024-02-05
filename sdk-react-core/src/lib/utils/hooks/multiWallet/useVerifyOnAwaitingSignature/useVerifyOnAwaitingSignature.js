import { useEffect } from 'react';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../../constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { requiresTwoStepAuthentication } from '../../../functions/requiresTwoStepAuthentication/requiresTwoStepAuthentication.js';
import { useConnectAndSign } from '../../authenticationHooks/useConnectAndSign/useConnectAndSign.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../config/ApiEndpoint.js';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/EmailVerificationContext/EmailVerificationContext.js';

const useVerifyOnAwaitingSignature = () => {
    const { awaitingSignatureState, multiWalletWidgetState, setMultiWalletWidgetState, legacyIsVerifying, setLegacyIsVerifying, selectedWalletConnector, } = useInternalDynamicContext();
    const triggerConnectAndSign = useConnectAndSign();
    useEffect(() => {
        if (!legacyIsVerifying &&
            multiWalletWidgetState === 'awaiting_signature' &&
            selectedWalletConnector &&
            awaitingSignatureState === 'linking_new_wallet' &&
            !requiresTwoStepAuthentication(selectedWalletConnector)) {
            setLegacyIsVerifying(true);
            triggerConnectAndSign({ walletConnector: selectedWalletConnector })
                .catch((e) => {
                logger.error(e);
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

export { useVerifyOnAwaitingSignature };
