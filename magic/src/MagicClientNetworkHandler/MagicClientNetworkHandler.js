import { __awaiter } from '../../_virtual/_tslib.js';
import { parseEvmNetworks } from '@dynamic-labs/utils';
import { logger } from '../utils/logger/logger.js';

class MagicClientNetworkHandler {
    constructor({ walletConnector, createClient, evmNetworks, defaultChainId, }) {
        var _a, _b;
        this._clients = {};
        this.evmNetworks = [];
        this.evmNetworks = parseEvmNetworks(evmNetworks);
        this._networkId = (_b = (_a = this.lastUsedNetworkId) !== null && _a !== void 0 ? _a : defaultChainId) !== null && _b !== void 0 ? _b : 1;
        this._createClient = createClient;
        this.walletConnector = walletConnector;
    }
    selectNetwork(networkChainId) {
        return __awaiter(this, void 0, void 0, function* () {
            this._networkId = networkChainId;
            this.lastUsedNetworkId = networkChainId;
            this.walletConnector.emit('chainChange', {
                chain: networkChainId.toString(),
            });
        });
    }
    get networkId() {
        return this._networkId;
    }
    getClient() {
        const networkId = this._networkId;
        const client = this._clients[networkId];
        if (client) {
            return client;
        }
        const config = this.getConfigForNetwork(networkId);
        const newClient = this._createClient(config);
        this._clients[networkId] = newClient;
        return newClient;
    }
    getConfigForNetwork(networkId) {
        const rpcUrl = this._getRpcUrlByNetworkId(networkId);
        // Should prioritize custom rpc config form dashboard
        if (rpcUrl) {
            return {
                network: {
                    chainId: this._getChainIdByNetworkId(networkId),
                    rpcUrl,
                },
            };
        }
        // this will default to using their "mainnet" production environment
        // NOTE: "mainnet" DOES NOT MEAN ETH MAINNET - THEY NAME THEIR PROD ENVIRONMENT "mainnet"
        // and "goerli" IS THE NAME OF THEIR SANDBOX ENVIRONMENT :exploding_head:
        return undefined;
    }
    _getRpcUrlByNetworkId(networkId) {
        var _a;
        const evm = this.evmNetworks.find((evmNetwork) => evmNetwork.networkId === networkId);
        return ((_a = evm === null || evm === void 0 ? void 0 : evm.privateCustomerRpcUrls) === null || _a === void 0 ? void 0 : _a[0]) || (evm === null || evm === void 0 ? void 0 : evm.rpcUrls[0]);
    }
    _getChainIdByNetworkId(networkId) {
        var _a;
        return (_a = this.evmNetworks.find((evmNetwork) => evmNetwork.networkId === networkId)) === null || _a === void 0 ? void 0 : _a.chainId;
    }
    get lastUsedNetworkId() {
        const savedNetworkIdText = localStorage.getItem(MagicClientNetworkHandler.lastUsedNetworkIdStorageKey);
        if (!savedNetworkIdText)
            return undefined;
        try {
            const networkId = parseInt(savedNetworkIdText);
            if (isNaN(networkId)) {
                return undefined;
            }
            return networkId;
        }
        catch (err) {
            logger.error(err);
            return undefined;
        }
    }
    set lastUsedNetworkId(networkId) {
        if (networkId === undefined) {
            localStorage.removeItem(MagicClientNetworkHandler.lastUsedNetworkIdStorageKey);
        }
        else {
            localStorage.setItem(MagicClientNetworkHandler.lastUsedNetworkIdStorageKey, networkId.toString());
        }
    }
}
MagicClientNetworkHandler.lastUsedNetworkIdStorageKey = 'magic-last-used-network-id';

export { MagicClientNetworkHandler };
