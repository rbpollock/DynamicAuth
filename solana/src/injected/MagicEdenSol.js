import { InjectedWalletBase } from './InjectedWalletBase.js';

class MagicEdenSol extends InjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'MagicEdenSol';
    }
}

export { MagicEdenSol };
