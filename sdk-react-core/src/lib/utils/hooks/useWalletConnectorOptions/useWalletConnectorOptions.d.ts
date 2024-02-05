import { ProjectSettings } from '@dynamic-labs/sdk-api';
import { NetworkConfigurationMap, WalletUiUtils } from '@dynamic-labs/types';
import { DeepLinkVariant, WalletConnector, WalletConnectorExtension, WalletConnectorsMethod } from '@dynamic-labs/wallet-connector-core';
import { WalletBookSchema } from '@dynamic-labs/wallet-book';
type Props = {
    appLogoUrl?: string;
    appName?: string;
    deepLinkPreference?: DeepLinkVariant;
    flowNetwork?: 'mainnet' | 'testnet';
    networkConfigurations: NetworkConfigurationMap | undefined;
    projectSettings: ProjectSettings | undefined;
    walletBook: WalletBookSchema;
    walletConnectV1Bridge?: string;
    walletConnectPreferredChains?: `eip155:${number}`[];
    walletConnectorsProp?: WalletConnectorsMethod[];
    walletUiUtils: WalletUiUtils<WalletConnector>;
    walletConnectorExtensions?: WalletConnectorExtension[];
};
export declare const useWalletConnectorOptions: ({ projectSettings, appLogoUrl, appName, deepLinkPreference, flowNetwork, networkConfigurations, walletBook, walletConnectV1Bridge, walletUiUtils, walletConnectorsProp, walletConnectPreferredChains, walletConnectorExtensions, }: Props) => {
    walletConnectorOptions: import("../../../shared").WalletOption[];
};
export {};
