'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
var WidgetPortal = require('../../components/WidgetPortal/WidgetPortal.cjs');
var EmailConnectorPendingSignModalContent = require('../../components/EmailConnectorPendingSignModalContent/EmailConnectorPendingSignModalContent.cjs');
var EmailOTPConnectorPendingSignModalContent = require('../../components/EmailOTPConnectorPendingSignModalContent/EmailOTPConnectorPendingSignModalContent.cjs');
var DefaultPendingSignModalContent = require('./DefaultPendingSignModalContent/DefaultPendingSignModalContent.cjs');

const PendingSignModal = () => {
    const { selectedWalletConnector, setSelectedWalletConnectorKey, setMultiWalletWidgetState, } = useInternalDynamicContext.useInternalDynamicContext();
    const handleOnClickBackdrop = () => {
        setMultiWalletWidgetState('idle');
        setSelectedWalletConnectorKey(null);
    };
    if (selectedWalletConnector !== null) {
        if (walletConnectorCore.isEmailOTPWalletConnector(selectedWalletConnector)) {
            return (jsxRuntime.jsx(WidgetPortal.WidgetPortal, { onBackdropClick: handleOnClickBackdrop, disablePadding: true, children: jsxRuntime.jsx(EmailOTPConnectorPendingSignModalContent.EmailOTPConnectorPendingSignModalContent, { walletConnector: selectedWalletConnector }) }));
        }
        if (walletConnectorCore.isEmailWalletConnector(selectedWalletConnector)) {
            return (jsxRuntime.jsx(WidgetPortal.WidgetPortal, { onBackdropClick: handleOnClickBackdrop, children: jsxRuntime.jsx(EmailConnectorPendingSignModalContent.EmailConnectorPendingSignModalContent, { emailWalletConnector: selectedWalletConnector }) }));
        }
    }
    return jsxRuntime.jsx(DefaultPendingSignModalContent.DefaultPendingSignModalContent, {});
};

exports.PendingSignModal = PendingSignModal;
