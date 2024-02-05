import Client from '@walletconnect/client';
import { WalletSchema } from '@dynamic-labs/wallet-book';
import { FetchPublicAddressOpts, PayloadParams, DeepLinkVariant, WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { KeplrWalletConnectV1 } from './wcClient';
export declare const initClient: (name: string, bridge: string, settings?: any) => Client;
/**
 * Initialize a client from a stored session and terminate the connection.
 */
export declare const killWalletConnectSession: (client: Client) => Promise<void>;
/**
 * Attach event handlers to WalletConnect events.
 */
export declare const setupWalletConnectEventListeners: (walletConnector: WalletConnector, client: Client) => void;
export declare const teardownWalletConnectEventListeners: (client: Client) => void;
export declare const createSession: (client: Client) => Promise<PayloadParams>;
export declare const fetchWalletConnectCosmosPublicAddress: (metadata: WalletSchema, wcClient: Client, provider: KeplrWalletConnectV1, opts: FetchPublicAddressOpts & Required<Pick<FetchPublicAddressOpts, 'chainId'>>, deepLinkPreference: DeepLinkVariant) => Promise<string>;
