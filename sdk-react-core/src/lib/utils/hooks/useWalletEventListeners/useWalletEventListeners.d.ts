/// <reference types="react" />
import type { WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { AuthModeType, MultiWalletWidgetState, UserProfile, Wallet, WalletWithAction } from '../../../shared';
import { MultiWalletWidgetStateSetter } from '../multiWallet';
import { IDynamicContext } from '../../../context/DynamicContext/types';
export type UseWalletEventListenersArgs = {
    handleLogOut(): Promise<void>;
    multiWallet: boolean;
    multiWalletWidgetState: MultiWalletWidgetState;
    primaryWallet: Wallet | null;
    secondaryWallets: Wallet[];
    selectedWalletConnector: WalletConnector | null;
    selectedWalletWithAction: WalletWithAction | null;
    setMultiWalletWidgetState: MultiWalletWidgetStateSetter;
    setPrimaryWalletId(walletId: string): void;
    setSelectedWalletConnectorKey: IDynamicContext['setSelectedWalletConnectorKey'];
    setSelectedWalletWithAction(walletWithAction: WalletWithAction | null): void;
    user: UserProfile | undefined;
    authMode: AuthModeType;
    refreshConnectedWallet: (walletId: string, walletConnector: WalletConnector, shouldCallCallback?: boolean) => Promise<void>;
};
export declare const useWalletEventListeners: ({ handleLogOut, multiWallet, multiWalletWidgetState, primaryWallet, secondaryWallets, selectedWalletConnector, selectedWalletWithAction, setSelectedWalletConnectorKey, setSelectedWalletWithAction, setMultiWalletWidgetState, user, setPrimaryWalletId, authMode, refreshConnectedWallet, }: UseWalletEventListenersArgs) => {
    loadingNetwork: boolean;
    network: string | number | undefined;
    setNetwork: import("react").Dispatch<import("react").SetStateAction<string | number | undefined>>;
};
