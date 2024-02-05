import { BloctoInjected } from './BloctoInjected.js';
import { BraveEvm } from './BraveEvm.js';
import { Dawn } from './Dawn.js';
import { ExodusEvm } from './ExodusEvm.js';
import { Frame } from './Frame.js';
import { GameStop } from './GameStop.js';
import { Opera } from './Opera.js';
import { PhantomEvm } from './PhantomEvm.js';
import { Trust } from './Trust.js';
import { Zerion } from './Zerion.js';
import { Superb } from './Superb.js';
import { Rabby } from './Rabby.js';

const legacyInjectedWallets = [
    PhantomEvm,
    BloctoInjected,
    BraveEvm,
    Dawn,
    ExodusEvm,
    Frame,
    GameStop,
    Opera,
    Trust,
    Zerion,
    Superb,
    Rabby,
];
const filteredLegacyInjectedWalletKeys = [
    'phantomevm',
    'coinbase',
    'bloctoinjected',
    'dawn',
    'exodusevm',
    'frame',
    'gamestop',
    'opera',
    'trust',
    'zerion',
    'superb',
    'rabby',
    'braveevm',
];

export { filteredLegacyInjectedWalletKeys, legacyInjectedWallets };
