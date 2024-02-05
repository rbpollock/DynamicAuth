import { WalletConnectorConstructor } from '@dynamic-labs/wallet-connector-core';
export * from './EmailMagicWalletConnector';
export * from './MagicWalletConnector';
export * from './EmailOTPMagicWalletConnector';
export * from './MagicClientNetworkHandler';
export * from './MagicSocialWalletConnector';
export declare const MagicWalletConnectors: (props: any) => WalletConnectorConstructor[];
