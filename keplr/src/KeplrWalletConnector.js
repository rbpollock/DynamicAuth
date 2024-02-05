import { __awaiter } from '../_virtual/_tslib.js';
import { WalletConnectorBase, logger } from '@dynamic-labs/wallet-connector-core';
import { parseEvmNetworks } from '@dynamic-labs/utils';
import KeplrWalletConnect from './KeplrWalletConnect.js';

const DYNAMIC_KEPLR_NETWORK_ID = 'dynamic_keplr_network_id';
class KeplrWalletConnector extends WalletConnectorBase {
    getMobileOrInstalledWallet() {
        if (this.isInstalledOnBrowser()) {
            return this;
        }
        else {
            return new KeplrWalletConnect(this.constructorProps);
        }
    }
    constructor(props) {
        super(props);
        this.switchNetworkOnlyFromWallet = true;
        this.name = 'Keplr';
        this.connectedChain = 'COSMOS';
        this.supportedChains = ['COSMOS'];
        this.chainIdMap = {
            401: 'cosmoshub-4',
            402: 'axelar-dojo-1',
            403: 'osmosis-1',
        };
        this.reverseChainIdMap = {
            'axelar-dojo-1': 402,
            'cosmoshub-4': 401,
            'osmosis-1': 403,
        };
        this.evmNetworks = parseEvmNetworks(props.cosmosNetworks);
        this._handleAccountChange = this._handleAccountChange.bind(this);
        const persistedNetworkId = localStorage.getItem(DYNAMIC_KEPLR_NETWORK_ID);
        this.chainId = persistedNetworkId !== null && persistedNetworkId !== void 0 ? persistedNetworkId : 'cosmoshub-4';
    }
    getWalletClient() {
        return this.keplr;
    }
    getDeepLink() {
        throw new Error('Method not implemented.');
    }
    get selectedNetwork() {
        return this.evmNetworks.find((network) => network.networkId === this.reverseChainIdMap[this.chainId]);
    }
    get lcdUrl() {
        var _a;
        return (_a = this.selectedNetwork) === null || _a === void 0 ? void 0 : _a.lcdUrl;
    }
    get denom() {
        var _a;
        return (_a = this.selectedNetwork) === null || _a === void 0 ? void 0 : _a.nativeCurrency.denom;
    }
    getAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            const accountsList = yield this.keplr
                .getOfflineSigner(this.chainId)
                .getAccounts();
            if (!accountsList)
                throw new Error('No accounts found');
            const [account] = accountsList;
            return account;
        });
    }
    get keplr() {
        if (typeof window === 'undefined')
            throw new Error('Keplr is not available');
        // @ts-expect-error keplr is not defined if extension is not installed
        return window.keplr;
    }
    endSession() {
        return __awaiter(this, void 0, void 0, function* () {
            localStorage.removeItem(DYNAMIC_KEPLR_NETWORK_ID);
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const chainIdsToConnect = this.evmNetworks.map((network) => this.chainIdMap[network.chainId]);
            yield this.keplr.enable(chainIdsToConnect);
            localStorage.setItem(DYNAMIC_KEPLR_NETWORK_ID, this.chainIdMap[this.evmNetworks[0].chainId]);
        });
    }
    fetchPublicAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            const account = yield this.getAccount();
            return account.address;
        });
    }
    getBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield this.fetchPublicAddress();
            const value = yield this.fetchBalance(address);
            return value;
        });
    }
    getConnectedAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield this.fetchPublicAddress();
            return [address];
        });
    }
    getNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.reverseChainIdMap[this.chainId];
        });
    }
    getSigner() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.keplr.getOfflineSigner(this.chainId);
        });
    }
    isInstalledOnBrowser() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore window.keplr is provided by extension
        return typeof window.keplr !== 'undefined';
    }
    _handleAccountChange() {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield this.fetchPublicAddress();
            this.emit('accountChange', { accounts: [address] });
        });
    }
    setupEventListeners() {
        window.addEventListener('keplr_keystorechange', this._handleAccountChange);
    }
    teardownEventListeners() {
        window.removeEventListener('keplr_keystorechange', this._handleAccountChange);
        localStorage.removeItem(DYNAMIC_KEPLR_NETWORK_ID);
    }
    // SignDoc used for signAmin method;
    getSignDoc(message) {
        return {
            account_number: '0',
            chain_id: this.chainId,
            fee: { amount: [], gas: '0' },
            memo: '',
            msgs: [{ type: 'custom/MsgSignText', value: { text: message } }],
            sequence: '0',
        };
    }
    signMessage(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
            const signDoc = this.getSignDoc(messageToSign);
            const address = yield this.fetchPublicAddress();
            const signatureResponse = yield this.keplr.signAmino(this.chainId, address, signDoc);
            if (!signatureResponse)
                throw new Error('Could not sign message');
            return JSON.stringify(signatureResponse);
        });
    }
    supportsNetworkSwitching() {
        return true;
    }
    fetchBalance(address) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(`${this.lcdUrl}/cosmos/bank/v1beta1/balances/${address}`).then((res) => res.json());
                const balance = response.balances.reduce((acc, cur) => {
                    if (cur.denom === this.denom) {
                        return Number(cur.amount) / 1e6;
                    }
                    return acc;
                }, 0);
                return balance.toString();
            }
            catch (e) {
                logger.error(e);
                return '0';
            }
        });
    }
    switchNetwork({ networkChainId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!networkChainId)
                return;
            this.chainId = this.chainIdMap[networkChainId];
            localStorage.setItem(DYNAMIC_KEPLR_NETWORK_ID, this.chainId);
        });
    }
}

export { DYNAMIC_KEPLR_NETWORK_ID, KeplrWalletConnector };
