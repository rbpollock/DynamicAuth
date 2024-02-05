import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
export declare const useAuthLayoutChecks: (walletConnector?: WalletConnector | null) => {
    displayBorderBelowHeader: boolean;
    isWalletListTypeView: boolean;
    showBackButton: boolean;
    showCloseButton: boolean;
    showConnectedWalletProgress: boolean;
    showDefaultFooter: boolean;
    showDynamicFooter: boolean;
    showHeader: boolean;
    showHelpContent: boolean;
    showQrCodePreHeader: boolean;
    showToSFooter: boolean;
};
