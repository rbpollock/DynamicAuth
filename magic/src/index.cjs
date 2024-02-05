'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var EmailOTPMagicWalletConnector = require('./EmailOTPMagicWalletConnector/EmailOTPMagicWalletConnector.cjs');
var MagicSocialWalletConnector = require('./MagicSocialWalletConnector/MagicSocialWalletConnector.cjs');
var EmailMagicWalletConnector = require('./EmailMagicWalletConnector/EmailMagicWalletConnector.cjs');
var MagicWalletConnector = require('./MagicWalletConnector/MagicWalletConnector.cjs');
var MagicClientNetworkHandler = require('./MagicClientNetworkHandler/MagicClientNetworkHandler.cjs');

const MagicWalletConnectors = (props) => {
    var _a;
    if (!((_a = props.apiProviders.magicLink) === null || _a === void 0 ? void 0 : _a.providerProjectId)) {
        return [];
    }
    return [
        class extends EmailOTPMagicWalletConnector.EmailOTPMagicWalletConnector {
            constructor(props) {
                super(props);
            }
        },
        class extends MagicSocialWalletConnector.MagicSocialWalletConnector {
            constructor(props) {
                super(props);
            }
        },
    ];
};

exports.EmailOTPMagicWalletConnector = EmailOTPMagicWalletConnector.EmailOTPMagicWalletConnector;
exports.MagicSocialWalletConnector = MagicSocialWalletConnector.MagicSocialWalletConnector;
exports.EmailMagicWalletConnector = EmailMagicWalletConnector.EmailMagicWalletConnector;
exports.MagicWalletConnector = MagicWalletConnector.MagicWalletConnector;
exports.MagicClientNetworkHandler = MagicClientNetworkHandler.MagicClientNetworkHandler;
exports.MagicWalletConnectors = MagicWalletConnectors;
