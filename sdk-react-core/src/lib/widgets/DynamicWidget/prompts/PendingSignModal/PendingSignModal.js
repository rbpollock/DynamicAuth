import { jsx } from 'react/jsx-runtime';
import { isEmailOTPWalletConnector, isEmailWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import { WidgetPortal } from '../../components/WidgetPortal/WidgetPortal.js';
import { EmailConnectorPendingSignModalContent } from '../../components/EmailConnectorPendingSignModalContent/EmailConnectorPendingSignModalContent.js';
import { EmailOTPConnectorPendingSignModalContent } from '../../components/EmailOTPConnectorPendingSignModalContent/EmailOTPConnectorPendingSignModalContent.js';
import { DefaultPendingSignModalContent } from './DefaultPendingSignModalContent/DefaultPendingSignModalContent.js';

const PendingSignModal = () => {
    const { selectedWalletConnector, setSelectedWalletConnectorKey, setMultiWalletWidgetState, } = useInternalDynamicContext();
    const handleOnClickBackdrop = () => {
        setMultiWalletWidgetState('idle');
        setSelectedWalletConnectorKey(null);
    };
    if (selectedWalletConnector !== null) {
        if (isEmailOTPWalletConnector(selectedWalletConnector)) {
            return (jsx(WidgetPortal, { onBackdropClick: handleOnClickBackdrop, disablePadding: true, children: jsx(EmailOTPConnectorPendingSignModalContent, { walletConnector: selectedWalletConnector }) }));
        }
        if (isEmailWalletConnector(selectedWalletConnector)) {
            return (jsx(WidgetPortal, { onBackdropClick: handleOnClickBackdrop, children: jsx(EmailConnectorPendingSignModalContent, { emailWalletConnector: selectedWalletConnector }) }));
        }
    }
    return jsx(DefaultPendingSignModalContent, {});
};

export { PendingSignModal };
