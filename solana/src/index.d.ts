export * from './solWalletConnector';
export * from './solProviderHelper';
export * from './Solflare';
export declare const SolanaWalletConnectors: (props: any) => typeof import("./injected/BraveSol").BraveSol[];
export { isSignedMessage } from './utils/isSignedMessage';
export { isBackpackSolanaSigner } from './utils/isBackpackSolanaSigner';
export type { ISolana, IBackpackSolanaSigner, ICoinbaseSolanaSigner, SignedMessage, ISolanaSigner, } from './types';
