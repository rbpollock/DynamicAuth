'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.cjs');
var Client = require('@walletconnect/client');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Client__default = /*#__PURE__*/_interopDefaultLegacy(Client);

const initClient = (name, bridge, settings) => {
    const storageId = `walletconnect-${name}`;
    const session = localStorage.getItem(storageId);
    const clientArgs = session
        ? { session: JSON.parse(session), storageId }
        : { bridge, storageId };
    return new Client__default["default"](Object.assign(Object.assign({}, clientArgs), settings));
};
/**
 * Initialize a client from a stored session and terminate the connection.
 */
const killWalletConnectSession = (client) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    try {
        if (client === null || client === void 0 ? void 0 : client.connected) {
            yield client.killSession();
        }
    }
    catch (e) {
        walletConnectorCore.logger.debug(e);
    }
});
/**
 * Attach event handlers to WalletConnect events.
 */
const setupWalletConnectEventListeners = (walletConnector, client) => {
    if (!client) {
        return;
    }
    let prevAccount;
    let prevChain;
    if (client.connected) {
        // eslint-disable-next-line prefer-destructuring
        prevAccount = client.accounts[0];
        prevChain = client.chainId;
    }
    client.on('disconnect', () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        walletConnector.emit('disconnect');
    }));
    client.on('session_update', (_, payload) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        // eslint-disable-next-line prefer-destructuring
        const { accounts, chainId } = payload.params[0];
        const didAccountChange = !walletConnectorCore.isSameAddress(prevAccount || '', accounts[0], 'eip155');
        const didChainChange = prevChain !== chainId;
        // eslint-disable-next-line prefer-destructuring
        prevAccount = accounts[0];
        prevChain = chainId;
        if (didAccountChange) {
            walletConnector.emit('accountChange', { accounts });
        }
        if (didChainChange) {
            walletConnector.emit('chainChange', { chain: String(chainId) });
        }
    }));
};
const teardownWalletConnectEventListeners = (client) => {
    client.off('disconnect');
    client.off('session_update');
};
const createSession = (client) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        client.on('connect', (error, payload) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
            if (error)
                throw error;
            resolve(payload);
        }));
        client.on('disconnect', (error, payload) => {
            reject(error || payload.params[0].message);
        });
    });
});
const fetchWalletConnectCosmosPublicAddress = (metadata, wcClient, provider, opts, deepLinkPreference) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (wcClient.connected) {
        const key = yield provider.getKey(opts.chainId);
        return key.bech32Address;
    }
    yield wcClient.createSession();
    walletConnectorCore.performPlatformSpecificConnectionMethod(wcClient.uri, metadata, opts, deepLinkPreference);
    const payload = yield createSession(wcClient);
    const key = yield provider.getKey(opts.chainId);
    (_a = opts === null || opts === void 0 ? void 0 : opts.onConnect) === null || _a === void 0 ? void 0 : _a.call(opts, payload);
    wcClient.accounts = [key.bech32Address];
    return key.bech32Address;
});

exports.createSession = createSession;
exports.fetchWalletConnectCosmosPublicAddress = fetchWalletConnectCosmosPublicAddress;
exports.initClient = initClient;
exports.killWalletConnectSession = killWalletConnectSession;
exports.setupWalletConnectEventListeners = setupWalletConnectEventListeners;
exports.teardownWalletConnectEventListeners = teardownWalletConnectEventListeners;
