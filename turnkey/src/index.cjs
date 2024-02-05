'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var TurnkeyWalletConnector = require('./lib/TurnkeyWalletConnector/TurnkeyWalletConnector.cjs');
var types = require('./types.cjs');
var TurnkeyPasskeyRecoveryHandler = require('./lib/TurnkeyPasskeyRecoveryHandler/TurnkeyPasskeyRecoveryHandler.cjs');

const TurnkeyWalletConnectors = (props) => {
    var _a;
    if ((_a = props.apiProviders) === null || _a === void 0 ? void 0 : _a.turnkey) {
        return [
            TurnkeyWalletConnector.TurnkeyWalletConnector.bind(null, types.TurnkeyWalletConnectorInfo.TurnkeyHD),
            TurnkeyWalletConnector.TurnkeyWalletConnector.bind(null, types.TurnkeyWalletConnectorInfo.Turnkey),
        ];
    }
    return [];
};

exports.TurnkeyWalletConnector = TurnkeyWalletConnector.TurnkeyWalletConnector;
exports.TurnkeyPasskeyRecoveryHandler = TurnkeyPasskeyRecoveryHandler.TurnkeyPasskeyRecoveryHandler;
exports.TurnkeyWalletConnectors = TurnkeyWalletConnectors;
