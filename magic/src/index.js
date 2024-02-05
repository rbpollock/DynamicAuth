import { EmailOTPMagicWalletConnector } from './EmailOTPMagicWalletConnector/EmailOTPMagicWalletConnector.js';
export { EmailOTPMagicWalletConnector } from './EmailOTPMagicWalletConnector/EmailOTPMagicWalletConnector.js';
import { MagicSocialWalletConnector } from './MagicSocialWalletConnector/MagicSocialWalletConnector.js';
export { MagicSocialWalletConnector } from './MagicSocialWalletConnector/MagicSocialWalletConnector.js';
export { EmailMagicWalletConnector } from './EmailMagicWalletConnector/EmailMagicWalletConnector.js';
export { MagicWalletConnector } from './MagicWalletConnector/MagicWalletConnector.js';
export { MagicClientNetworkHandler } from './MagicClientNetworkHandler/MagicClientNetworkHandler.js';

const MagicWalletConnectors = (props) => {
    var _a;
    if (!((_a = props.apiProviders.magicLink) === null || _a === void 0 ? void 0 : _a.providerProjectId)) {
        return [];
    }
    return [
        class extends EmailOTPMagicWalletConnector {
            constructor(props) {
                super(props);
            }
        },
        class extends MagicSocialWalletConnector {
            constructor(props) {
                super(props);
            }
        },
    ];
};

export { MagicWalletConnectors };
