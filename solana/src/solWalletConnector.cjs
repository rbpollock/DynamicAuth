'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.cjs');
var web3_js = require('@solana/web3.js');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var rpcProviders = require('@dynamic-labs/rpc-providers');
var utils = require('@dynamic-labs/utils');

class SolWalletConnector extends walletConnectorCore.WalletConnectorBase {
    constructor(opts) {
        var _a;
        super(opts);
        this.supportedChains = ['SOL'];
        this.connectedChain = 'SOL';
        this.solNetworks = opts.solNetworks;
        this.chainRpcProviders = opts.chainRpcProviders;
        (_a = this.chainRpcProviders) === null || _a === void 0 ? void 0 : _a.registerChainProviders(rpcProviders.ProviderChain.SOLANA, (config) => {
            const rpcProviders = {};
            if (config === null || config === void 0 ? void 0 : config.solana) {
                rpcProviders.solana = config.solana.map((network) => {
                    var _a;
                    const rpcUrl = ((_a = network.privateCustomerRpcUrls) === null || _a === void 0 ? void 0 : _a[0]) || network.rpcUrls[0];
                    const provider = new web3_js.Connection(rpcUrl);
                    return {
                        chainId: network.chainId.toString(),
                        chainName: network.name,
                        provider,
                    };
                });
            }
            return rpcProviders.solana;
        });
    }
    getNetwork() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const provider = this.getWalletClient();
            let genesisHash = yield provider.getGenesisHash();
            genesisHash = genesisHash.substring(0, 32);
            // see: https://github.com/ChainAgnostic/namespaces/blob/main/solana/caip2.md
            if (genesisHash === '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp') {
                return 'mainnet';
            }
            else if (genesisHash === 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1') {
                return 'devnet';
            }
            else {
                return 'testnet';
            }
        });
    }
    getWalletClient() {
        var _a;
        const [network] = this.solNetworks;
        if (!network) {
            throw new utils.DynamicError('No enabled networks');
        }
        const rpcUrl = ((_a = network.privateCustomerRpcUrls) === null || _a === void 0 ? void 0 : _a[0]) || network.rpcUrls[0];
        return new web3_js.Connection(rpcUrl, 'confirmed');
    }
    getPublicClient() {
        var _a, _b;
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (this.solNetworks.length === 0)
                return;
            const configurations = {
                cosmos: [],
                evm: undefined,
                solana: this.solNetworks,
                starknet: undefined,
            };
            return (_b = (_a = this.chainRpcProviders) === null || _a === void 0 ? void 0 : _a.getSolanaRpcProviderByChainId(configurations, '101')) === null || _b === void 0 ? void 0 : _b.provider;
        });
    }
    getBalance() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const signer = yield this.getSigner();
            if (!signer || !signer.publicKey)
                return;
            const publicKey = new web3_js.PublicKey(signer.publicKey.toString());
            const balance = this.lamportsToSol(yield this.getWalletClient().getBalance(publicKey));
            return balance.toString();
        });
    }
    // Solana uses lamports as the smallest unit of currency. This converts lamports to SOL.
    lamportsToSol(lamports) {
        return lamports / 1000000000;
    }
}

exports.SolWalletConnector = SolWalletConnector;
