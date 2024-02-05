/// <reference types="react" />
import { ProjectSettings } from '@dynamic-labs/sdk-api';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
import { UserProfile, Wallet } from '../../../types';
import { ConnectedWalletConnectorType } from '../../../../utils/hooks/useConnectWallet/useConnectWallet';
type Props = {
    authMode: string;
    connectedInfo: ConnectedWalletConnectorType | null;
    connectedWallets: Wallet[];
    primaryWallet: Wallet | null;
    projectSettings: ProjectSettings | undefined;
    user: UserProfile | undefined;
    walletBook: WalletBookSchema;
};
export declare const useGlobalLoading: ({ authMode, connectedInfo, connectedWallets, projectSettings, primaryWallet, user, walletBook, }: Props) => {
    sdkHasLoaded: boolean;
    setSdkHasLoaded: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
export {};
