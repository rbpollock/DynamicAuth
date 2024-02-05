import { TurnkeyWalletConnector } from './lib/TurnkeyWalletConnector/TurnkeyWalletConnector.js';
export { TurnkeyWalletConnector } from './lib/TurnkeyWalletConnector/TurnkeyWalletConnector.js';
import { TurnkeyWalletConnectorInfo } from './types.js';
export { TurnkeyPasskeyRecoveryHandler } from './lib/TurnkeyPasskeyRecoveryHandler/TurnkeyPasskeyRecoveryHandler.js';

const TurnkeyWalletConnectors = (props) => {
    var _a;
    if ((_a = props.apiProviders) === null || _a === void 0 ? void 0 : _a.turnkey) {
        return [
            TurnkeyWalletConnector.bind(null, TurnkeyWalletConnectorInfo.TurnkeyHD),
            TurnkeyWalletConnector.bind(null, TurnkeyWalletConnectorInfo.Turnkey),
        ];
    }
    return [];
};

export { TurnkeyWalletConnectors };
