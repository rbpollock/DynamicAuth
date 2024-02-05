import { __awaiter } from '../../_virtual/_tslib.js';
import { isMobile, handleMobileWalletRedirect } from '@dynamic-labs/utils';
import { InjectedWalletBase } from './InjectedWalletBase.js';

class Phantom extends InjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'Phantom';
    }
    fetchPublicAddress() {
        const _super = Object.create(null, {
            fetchPublicAddress: { get: () => super.fetchPublicAddress }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isInstalledOnBrowser()) {
                return _super.fetchPublicAddress.call(this);
            }
            if (isMobile()) {
                handleMobileWalletRedirect({
                    nativeLink: 'phantom://browse',
                    universalLink: 'https://phantom.app/ul/browse',
                });
            }
            return undefined;
        });
    }
}

export { Phantom };
