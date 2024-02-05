import { Dispatch, SetStateAction } from 'react';
import { DynamicEventsCallbacks, Wallet } from '../../../shared';
import { ConnectedWalletConnectorType } from '../../../utils/hooks/useConnectWallet/useConnectWallet';
import { ChainsToConnect } from '../types';
type HandleDisconnectWalletArgs = {
    wallet?: Wallet;
    connectedWalletsInfo: ConnectedWalletConnectorType[];
    bridgeChains: ChainsToConnect[] | undefined;
    setBridgeChainsToConnect: Dispatch<SetStateAction<ChainsToConnect[] | undefined>>;
    eventsCallbacks?: DynamicEventsCallbacks;
};
export declare const handleDisconnectWallet: ({ wallet, connectedWalletsInfo, bridgeChains, setBridgeChainsToConnect, eventsCallbacks, }: HandleDisconnectWalletArgs) => void;
export {};
