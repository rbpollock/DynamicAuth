'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var utils = require('@dynamic-labs/utils');
var LegacyInjectedWalletBase = require('./LegacyInjectedWalletBase.cjs');

class PhantomEvm extends LegacyInjectedWalletBase {
    constructor() {
        super(...arguments);
        this.name = 'PhantomEvm';
    }
    fetchPublicAddress() {
        const _super = Object.create(null, {
            fetchPublicAddress: { get: () => super.fetchPublicAddress }
        });
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (this.isInstalledOnBrowser()) {
                return _super.fetchPublicAddress.call(this);
            }
            if (utils.isMobile()) {
                utils.handleMobileWalletRedirect({
                    nativeLink: 'phantom://browse',
                    universalLink: 'https://phantom.app/ul/browse',
                });
            }
            return undefined;
        });
    }
}

exports.PhantomEvm = PhantomEvm;
