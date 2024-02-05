import { __awaiter } from '../../_virtual/_tslib.js';
import { SolProviderHelper } from '../solProviderHelper.js';
import { InjectedWalletBase } from './InjectedWalletBase.js';

class BraveSol extends InjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'BraveSol';
    }
    fetchPublicAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            return SolProviderHelper.fetchPublicAddressWithName(this.name);
        });
    }
}

export { BraveSol };
