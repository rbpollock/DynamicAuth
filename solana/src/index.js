import { CoinbaseSolana } from './CoinbaseSolana.js';
import { Glow } from './Glow.js';
import { Slope } from './Slope.js';
import { Solflare } from './Solflare.js';
export { Solflare } from './Solflare.js';
import { injectedWallets } from './injected/index.js';
export { SolWalletConnector } from './solWalletConnector.js';
export { SolProviderHelper } from './solProviderHelper.js';
export { isSignedMessage } from './utils/isSignedMessage.js';
export { isBackpackSolanaSigner } from './utils/isBackpackSolanaSigner.js';

/* eslint-disable @typescript-eslint/no-unused-vars */
const SolanaWalletConnectors = (props) => [
    ...injectedWallets,
    CoinbaseSolana,
    Glow,
    Slope,
    Solflare,
];

export { SolanaWalletConnectors };
