import { Dispatch, SetStateAction } from 'react';
import { Chain, FetchPublicAddressOpts, WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { ConnectWalletResult } from '../../../context/DynamicContext/types';
import { AuthModeType, OnBeforeConnectSuccessConfirmation, Wallet, WalletOption } from '../../../shared';
export type ConnectedWalletConnectorType = {
    id: string;
    walletChain?: Chain;
    walletConnectorKey: string;
    provider: string;
};
type Props = {
    authMode: AuthModeType;
    clearPrimaryWalletId: () => void;
    enableVisitTrackingOnConnectOnly: boolean;
    environmentId: string;
    primaryWalletId: string | undefined;
    setPrimaryWalletId: (walletId: string) => void;
    walletConnectorOptions: WalletOption[];
    onDisconnect: (connectedWalletsInfo: ConnectedWalletConnectorType[], wallet?: Wallet) => void;
    onBeforeConnectSuccessConfirmation: OnBeforeConnectSuccessConfirmation | undefined;
    setShowAuthFlow: Dispatch<SetStateAction<boolean>>;
    isBridgeFlow: boolean;
};
type UseConnectWalletValue = {
    connectWallet: (walletConnector: WalletConnector, fetchPublicAddressOpts?: FetchPublicAddressOpts, shouldCallCallback?: boolean) => Promise<ConnectWalletResult | undefined>;
    connectedWallets: Wallet[];
    connectedWalletsInfo: ConnectedWalletConnectorType[];
    getConnectedWalletById: (walletId: string) => Wallet | undefined;
    refreshConnectedWallet: (walletId: string, walletConnector: WalletConnector) => Promise<void>;
    removeConnectedWalletsInfo: () => void;
    disconnectWallet: (walletId: string) => Promise<void>;
};
export declare const useConnectWallet: ({ authMode, clearPrimaryWalletId, enableVisitTrackingOnConnectOnly, environmentId, primaryWalletId, setPrimaryWalletId, walletConnectorOptions, onDisconnect, onBeforeConnectSuccessConfirmation, setShowAuthFlow, isBridgeFlow, }: Props) => UseConnectWalletValue;
export {};
