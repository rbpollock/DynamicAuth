import Client from '@walletconnect/client';
import { OfflineAminoSigner } from '@keplr-wallet/types';
import { Chain, FetchPublicAddressOpts, WalletConnectorBase, DeepLinkVariant } from '@dynamic-labs/wallet-connector-core';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
import { EvmNetwork, GenericNetwork } from '@dynamic-labs/types';
import { KeplrWalletConnectV1 } from './wcClient';
export type KeplrWalletConnectProps = {
    walletConnectV1Bridge: string;
    cosmosNetworks: GenericNetwork[];
    walletBook: WalletBookSchema;
    deepLinkPreference?: DeepLinkVariant;
};
export type SwitchNetworkOps = {
    networkChainId?: number;
    networkName?: string;
};
declare class KeplrWalletConnect extends WalletConnectorBase {
    private deepLinkPreference;
    constructor(props: KeplrWalletConnectProps);
    name: string;
    bridge: string;
    isWalletConnect: boolean;
    canConnectViaQrCode: boolean;
    client?: Client;
    clientOptions: {
        signingMethods: string[];
    };
    evmNetworks?: EvmNetwork[];
    selectedNetworkId: number;
    chainIdMap: Record<number, string>;
    supportedChains: Chain[];
    connectedChain: Chain;
    _keplrInstance: KeplrWalletConnectV1 | undefined;
    get evmNetwork(): EvmNetwork | undefined;
    get selectedNetwork(): GenericNetwork | undefined;
    get lcdUrl(): string | undefined;
    get denom(): string | undefined;
    get chainId(): string;
    getProvider(): KeplrWalletConnectV1;
    getClient(): Client;
    getNetwork(): Promise<number>;
    switchNetwork({ networkChainId, }: SwitchNetworkOps): Promise<void>;
    signMessage(messageToSign: string): Promise<string | undefined>;
    fetchPublicAddress(opts?: FetchPublicAddressOpts): Promise<string | undefined>;
    getBalance(): Promise<string>;
    endSession(): Promise<void>;
    getConnectedAccounts(): Promise<string[]>;
    getDeepLink(): string | undefined;
    getPublicClient(): Promise<unknown>;
    getSigner(): Promise<OfflineAminoSigner | undefined>;
    getWalletClient(): KeplrWalletConnectV1 | undefined;
    setupEventListeners(): void;
    teardownEventListeners(): void;
    supportsNetworkSwitching(): boolean;
}
export default KeplrWalletConnect;
