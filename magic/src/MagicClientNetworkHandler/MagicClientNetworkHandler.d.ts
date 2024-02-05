import { MagicSDKAdditionalConfiguration, MagicSDKExtensionsOption } from 'magic-sdk';
import { EvmNetwork, GenericNetwork } from '@dynamic-labs/types';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
export type MagicLinkConfig = Pick<MagicSDKAdditionalConfiguration<string, MagicSDKExtensionsOption<string>>, 'network' | 'testMode' | 'locale'> & {
    redirectURI?: string;
};
export type MagicConfigForNetwork = MagicSDKAdditionalConfiguration<string, MagicSDKExtensionsOption<string>> | undefined;
export type MagicClientNetworkHandlerProps<TClient> = {
    createClient: (config: MagicConfigForNetwork) => TClient;
    defaultChainId?: number;
    evmNetworks: GenericNetwork[];
    walletConnector: WalletConnector;
};
export declare class MagicClientNetworkHandler<TClient = unknown> {
    protected _clients: {
        [chainId: number]: TClient;
    };
    protected _networkId: number;
    evmNetworks: EvmNetwork[];
    private walletConnector;
    protected _createClient: MagicClientNetworkHandlerProps<TClient>['createClient'];
    static lastUsedNetworkIdStorageKey: string;
    constructor({ walletConnector, createClient, evmNetworks, defaultChainId, }: MagicClientNetworkHandlerProps<TClient>);
    selectNetwork(networkChainId: number): Promise<void>;
    get networkId(): number;
    getClient(): TClient;
    getConfigForNetwork(networkId: number): MagicSDKAdditionalConfiguration<string, MagicSDKExtensionsOption<string>> | undefined;
    private _getRpcUrlByNetworkId;
    private _getChainIdByNetworkId;
    get lastUsedNetworkId(): number | undefined;
    set lastUsedNetworkId(networkId: number | undefined);
}
