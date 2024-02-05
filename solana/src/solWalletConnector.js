import { __awaiter } from '../_virtual/_tslib.js';
import { Connection, PublicKey } from '@solana/web3.js';
import { WalletConnectorBase } from '@dynamic-labs/wallet-connector-core';
import { ProviderChain } from '@dynamic-labs/rpc-providers';
import { DynamicError } from '@dynamic-labs/utils';

class SolWalletConnector extends WalletConnectorBase {
    constructor(opts) {
        var _a;
        super(opts);
        this.supportedChains = ['SOL'];
        this.connectedChain = 'SOL';
        this.solNetworks = opts.solNetworks;
        this.chainRpcProviders = opts.chainRpcProviders;
        (_a = this.chainRpcProviders) === null || _a === void 0 ? void 0 : _a.registerChainProviders(ProviderChain.SOLANA, (config) => {
            const rpcProviders = {};
            if (config === null || config === void 0 ? void 0 : config.solana) {
                rpcProviders.solana = config.solana.map((network) => {
                    var _a;
                    const rpcUrl = ((_a = network.privateCustomerRpcUrls) === null || _a === void 0 ? void 0 : _a[0]) || network.rpcUrls[0];
                    const provider = new Connection(rpcUrl);
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
        return __awaiter(this, void 0, void 0, function* () {
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
            throw new DynamicError('No enabled networks');
        }
        const rpcUrl = ((_a = network.privateCustomerRpcUrls) === null || _a === void 0 ? void 0 : _a[0]) || network.rpcUrls[0];
        return new Connection(rpcUrl, 'confirmed');
    }
    getPublicClient() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
            const signer = yield this.getSigner();
            if (!signer || !signer.publicKey)
                return;
            const publicKey = new PublicKey(signer.publicKey.toString());
            const balance = this.lamportsToSol(yield this.getWalletClient().getBalance(publicKey));
            return balance.toString();
        });
    }
    // Solana uses lamports as the smallest unit of currency. This converts lamports to SOL.
    lamportsToSol(lamports) {
        return lamports / 1000000000;
    }
}

export { SolWalletConnector };
