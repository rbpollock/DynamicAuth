'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.cjs');
var buffer = require('buffer');
var provider = require('@keplr-wallet/provider');
var utils = require('@walletconnect/utils');
var deepmerge = require('deepmerge');
var indexDB = require('./utils/indexDB.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var deepmerge__default = /*#__PURE__*/_interopDefaultLegacy(deepmerge);

/* eslint-disable  */
// VersionFormatRegExp checks if a chainID is in the format required for parsing versions
// The chainID should be in the form: `{identifier}-{version}`
const ChainVersionFormatRegExp = /(.+)-([\d]+)/;
function parseChainId(chainId) {
    const split = chainId.split(ChainVersionFormatRegExp).filter(Boolean);
    if (split.length !== 2) {
        return {
            identifier: chainId,
            version: 0,
        };
    }
    else {
        return { identifier: split[0], version: parseInt(split[1]) };
    }
}
class KeplrWalletConnectV1 {
    constructor(connector, options = {}) {
        this.connector = connector;
        this.options = options;
        this.version = '0.9.0';
        this.mode = 'walletconnect';
        this.defaultOptions = {};
        this.onCallReqeust = (error, payload) => _tslib.__awaiter(this, void 0, void 0, function* () {
            if (error) {
                console.log(error);
                return;
            }
            if (!payload) {
                return;
            }
            if (payload.method === 'keplr_keystore_may_changed_event_wallet_connect_v1') {
                const param = payload.params[0];
                if (!param) {
                    return;
                }
                const lastSeenKeys = yield this.getAllLastSeenKey();
                if (!lastSeenKeys) {
                    return;
                }
                const mayChangedKeyMap = {};
                for (const mayChangedKey of param.keys) {
                    mayChangedKeyMap[mayChangedKey.chainIdentifier] = {
                        address: mayChangedKey.address,
                        algo: param.algo,
                        bech32Address: mayChangedKey.bech32Address,
                        isKeystone: param.isKeystone,
                        isNanoLedger: param.isNanoLedger,
                        name: param.name,
                        pubKey: mayChangedKey.pubKey,
                    };
                }
                let hasChanged = false;
                for (const chainId of Object.keys(lastSeenKeys)) {
                    const savedKey = lastSeenKeys[chainId];
                    if (savedKey) {
                        const { identifier } = parseChainId(chainId);
                        const mayChangedKey = mayChangedKeyMap[identifier];
                        if (mayChangedKey) {
                            if (mayChangedKey.algo !== savedKey.algo ||
                                mayChangedKey.name !== savedKey.name ||
                                mayChangedKey.isKeystone !== savedKey.isKeystone ||
                                mayChangedKey.isNanoLedger !== savedKey.isNanoLedger ||
                                mayChangedKey.address !== savedKey.address ||
                                mayChangedKey.bech32Address !== savedKey.bech32Address ||
                                mayChangedKey.pubKey !== savedKey.pubKey) {
                                hasChanged = true;
                                lastSeenKeys[chainId] = mayChangedKey;
                            }
                        }
                    }
                }
                if (hasChanged) {
                    yield this.saveAllLastSeenKey(lastSeenKeys);
                    window.dispatchEvent(new Event('keplr_keystorechange'));
                }
            }
        });
        if (!options.kvStore) {
            options.kvStore = new indexDB.IndexedDBKVStore('keplr_wallet_connect');
        }
        connector.on('disconnect', () => {
            this.clearSaved();
        });
        connector.on('call_request', this.onCallReqeust);
    }
    clearSaved() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const kvStore = this.options.kvStore;
            yield Promise.all([
                kvStore.set(this.getKeyHasEnabled(), null),
                kvStore.set(this.getKeyLastSeenKey(), null),
            ]);
        });
    }
    sendCustomRequest(request, options) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (this.options.onBeforeSendRequest) {
                yield this.options.onBeforeSendRequest(request, options);
            }
            const res = yield this.connector.sendCustomRequest(request, options);
            if (this.options.onAfterSendRequest) {
                yield this.options.onAfterSendRequest(res, request, options);
            }
            return res;
        });
    }
    enable(chainIds) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (typeof chainIds === 'string') {
                chainIds = [chainIds];
            }
            const hasEnabledChainIds = yield this.getHasEnabledChainIds();
            let allEnabled = true;
            for (const chainId of chainIds) {
                if (hasEnabledChainIds.indexOf(chainId) < 0) {
                    allEnabled = false;
                    break;
                }
            }
            if (allEnabled) {
                return;
            }
            yield this.sendCustomRequest({
                id: utils.payloadId(),
                jsonrpc: '2.0',
                method: 'keplr_enable_wallet_connect_v1',
                params: chainIds,
            });
            yield this.saveHasEnabledChainIds(chainIds);
        });
    }
    getKeyHasEnabled() {
        return `${this.connector.session.handshakeTopic}-enabled`;
    }
    getHasEnabledChainIds() {
        var _a;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return ((_a = (yield this.options.kvStore.get(this.getKeyHasEnabled()))) !== null && _a !== void 0 ? _a : []);
        });
    }
    saveHasEnabledChainIds(chainIds) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const hasEnabledChainIds = yield this.getHasEnabledChainIds();
            for (const chainId of chainIds) {
                if (hasEnabledChainIds.indexOf(chainId) < 0) {
                    hasEnabledChainIds.push(chainId);
                }
            }
            yield this.options.kvStore.set(this.getKeyHasEnabled(), hasEnabledChainIds);
        });
    }
    enigmaDecrypt(_chainId, _ciphertext, _nonce) {
        throw new Error('Not yet implemented');
    }
    enigmaEncrypt(_chainId, _contractCodeHash, 
    // eslint-disable-next-line @typescript-eslint/ban-types
    _msg) {
        throw new Error('Not yet implemented');
    }
    experimentalSuggestChain(_chainInfo) {
        throw new Error('Not yet implemented');
    }
    getEnigmaPubKey(_chainId) {
        throw new Error('Not yet implemented');
    }
    getEnigmaTxEncryptionKey(_chainId, _nonce) {
        throw new Error('Not yet implemented');
    }
    getEnigmaUtils(_chainId) {
        throw new Error('Not yet implemented');
    }
    getKey(chainId) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const lastSeenKey = yield this.getLastSeenKey(chainId);
            if (lastSeenKey) {
                return {
                    address: buffer.Buffer.from(lastSeenKey.address, 'hex'),
                    algo: lastSeenKey.algo,
                    bech32Address: lastSeenKey.bech32Address,
                    isKeystone: lastSeenKey.isKeystone,
                    isNanoLedger: lastSeenKey.isNanoLedger,
                    name: lastSeenKey.name,
                    pubKey: buffer.Buffer.from(lastSeenKey.pubKey, 'hex'),
                };
            }
            const response = (yield this.sendCustomRequest({
                id: utils.payloadId(),
                jsonrpc: '2.0',
                method: 'keplr_get_key_wallet_connect_v1',
                params: [chainId],
            }))[0];
            yield this.saveLastSeenKey(chainId, response);
            return {
                address: buffer.Buffer.from(response.address, 'hex'),
                algo: response.algo,
                bech32Address: response.bech32Address,
                isKeystone: response.isKeystone,
                isNanoLedger: response.isNanoLedger,
                name: response.name,
                pubKey: buffer.Buffer.from(response.pubKey, 'hex'),
            };
        });
    }
    getKeyLastSeenKey() {
        return `${this.connector.session.handshakeTopic}-key`;
    }
    getLastSeenKey(chainId) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const saved = yield this.getAllLastSeenKey();
            if (!saved) {
                return undefined;
            }
            return saved[chainId];
        });
    }
    getAllLastSeenKey() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return yield this.options.kvStore.get(this.getKeyLastSeenKey());
        });
    }
    saveAllLastSeenKey(data) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            yield this.options.kvStore.set(this.getKeyLastSeenKey(), data);
        });
    }
    saveLastSeenKey(chainId, response) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            let saved = yield this.getAllLastSeenKey();
            if (!saved) {
                saved = {};
            }
            saved[chainId] = response;
            yield this.saveAllLastSeenKey(saved);
        });
    }
    signArbitrary(_chainId, _signer, _data) {
        throw new Error('Not yet implemented');
    }
    verifyArbitrary(_chainId, _signer, _data, _signature) {
        throw new Error('Not yet implemented');
    }
    signEthereum(_chainId, _signer, _data, _mode) {
        throw new Error('Not yet implemented');
    }
    signICNSAdr36(_chainId, _contractAddress, _owner, _username, _addressChainIds) {
        throw new Error('Not yet implemented');
    }
    getOfflineSigner(chainId) {
        return new provider.CosmJSOfflineSigner(chainId, this);
    }
    getOfflineSignerAuto(chainId) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const key = yield this.getKey(chainId);
            if (key.isNanoLedger) {
                return new provider.CosmJSOfflineSignerOnlyAmino(chainId, this);
            }
            return new provider.CosmJSOfflineSigner(chainId, this);
        });
    }
    getOfflineSignerOnlyAmino(chainId) {
        return new provider.CosmJSOfflineSignerOnlyAmino(chainId, this);
    }
    getSecret20ViewingKey(_chainId, _contractAddress) {
        throw new Error('Not yet implemented');
    }
    /**
     * In the extension environment, this API let the extension to send the tx on behalf of the client.
     * But, in the wallet connect environment, in order to send the tx on behalf of the client, wallet should receive the tx data from remote.
     * However, this approach is not efficient and hard to ensure the stability and `KeplrWalletConnect` should have the informations of rpc and rest endpoints.
     * So, rather than implementing this, just fallback to the client sided implementation or throw error of the client sided implementation is not delivered to the `options`.
     * @param chainId
     * @param stdTx
     * @param mode
     */
    sendTx(chainId, tx, mode) {
        if (this.options.sendTx) {
            return this.options.sendTx(chainId, tx, mode);
        }
        throw new Error('send tx is not delivered by options');
    }
    signAmino(chainId, signer, signDoc, signOptions = {}) {
        var _a;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            return (yield this.sendCustomRequest({
                id: utils.payloadId(),
                jsonrpc: '2.0',
                method: 'keplr_sign_amino_wallet_connect_v1',
                params: [
                    chainId,
                    signer,
                    signDoc,
                    deepmerge__default["default"]((_a = this.defaultOptions.sign) !== null && _a !== void 0 ? _a : {}, signOptions),
                ],
            }))[0];
        });
    }
    signDirect(_chainId, _signer, _signDoc, _signOptions = {}) {
        throw new Error('Not yet implemented');
    }
    suggestToken(_chainId, _contractAddress, _viewingKey) {
        throw new Error('Not yet implemented');
    }
    experimentalSignEIP712CosmosTx_v0(_chainId, _signer, _eip712, _signDoc, _signOptions = {}) {
        throw new Error('Not yet implemented');
    }
    getChainInfosWithoutEndpoints() {
        throw new Error('Not yet implemented');
    }
    disable(_chainIds) {
        throw new Error('Not yet implemented');
    }
    changeKeyRingName(_opts) {
        throw new Error('Not yet implemented');
    }
}

exports.KeplrWalletConnectV1 = KeplrWalletConnectV1;
