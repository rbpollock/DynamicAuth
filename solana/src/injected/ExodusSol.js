import { InjectedWalletBase } from './InjectedWalletBase.js';

class ExodusSol extends InjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'ExodusSol';
    }
}

export { ExodusSol };
