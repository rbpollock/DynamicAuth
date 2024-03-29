import { Provider } from '@dynamic-labs/sdk-api';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
export * from './getPasskeyProviderFromUserAgent';
export * from './getTimeSince';
export declare const replaceAll: (text: string, char: string, replace: string) => string;
export declare const copyToClipboard: (textToCopy: string) => void;
export declare const roundBalance: (balanceString: string, decimals?: number) => string;
export declare const capitalize: (text: string) => string;
export declare const getExportKeysOption: (connector?: WalletConnector, providerSettings?: Provider[]) => (() => void) | undefined;
