import { __awaiter } from '../_virtual/_tslib.js';
import { createWalletClient, custom, getAddress } from 'viem';
import { ProviderLookup, logger } from '@dynamic-labs/wallet-connector-core';
import { getProvidersFromWindow } from '@dynamic-labs/utils';
import { eventListenerHandlers } from './utils/eventListenerHandlers.js';
import { Eip6963ProviderSingleton } from './eip6963Provider.js';

class EthProviderHelper {
    constructor(wallet) {
        this.wallet = wallet;
    }
    getInstalledProvider() {
        const eip6963Config = this.getEip6963Config();
        if (eip6963Config) {
            const eip6963Provider = this.eip6963ProviderLookup(eip6963Config.rdns);
            if (eip6963Provider) {
                return eip6963Provider;
            }
        }
        const config = this.getInjectedConfig();
        if (!config ||
            !config.extensionLocators ||
            !config.extensionLocators.length)
            return undefined;
        return this.installedProviderLookup(config.extensionLocators);
    }
    getEip6963Config() {
        if (!this.wallet || !this.wallet.eip6963Config)
            return;
        return this.wallet.eip6963Config;
    }
    getInjectedConfig() {
        if (!this.wallet || !this.wallet.injectedConfig)
            return;
        const { injectedConfig } = this.wallet;
        return injectedConfig.find((c) => c.chain === 'evm');
    }
    installedProviders() {
        const config = this.getInjectedConfig();
        if (!config)
            return [];
        const providers = [];
        if (config.windowLocations) {
            for (const windowLocation of config.windowLocations) {
                const foundProviders = getProvidersFromWindow(windowLocation);
                if (foundProviders && foundProviders.length)
                    providers.push(...foundProviders);
            }
        }
        if (window.ethereum) {
            if (!window.ethereum.providers || !window.ethereum.providers.length) {
                providers.push(window.ethereum);
            }
            else {
                window.ethereum.providers.forEach((p) => providers.push(p));
            }
        }
        return providers;
    }
    installedProviderLookup(providerFlags) {
        const allInstalledProviders = this.installedProviders();
        return ProviderLookup(allInstalledProviders, providerFlags);
    }
    eip6963ProviderLookup(rdns) {
        var _a;
        const { providers } = Eip6963ProviderSingleton.get();
        return (_a = providers.find((provider) => provider.info.rdns === rdns)) === null || _a === void 0 ? void 0 : _a.provider;
    }
    isInstalledHelper() {
        return this.findProvider() !== undefined;
    }
    findProvider() {
        return this.getInstalledProvider();
    }
    findWalletClient() {
        const provider = this.findProvider();
        if (!provider) {
            return undefined;
        }
        return createWalletClient({
            transport: custom(provider),
        });
    }
    fetchPublicAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = this.findWalletClient();
            if (!client) {
                return Promise.resolve(undefined);
            }
            return this.fetchPublicAddressWithProvider(client);
        });
    }
    fetchPublicAddressWithProvider(client) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [lowercaseAddress] = yield client.requestAddresses();
                const publicAddress = getAddress(lowercaseAddress);
                return publicAddress;
            }
            catch (err) {
                logger.error(err);
                return Promise.reject(err);
            }
        });
    }
    signMessage(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
            const walletAddress = yield this.fetchPublicAddress();
            if (!walletAddress) {
                return Promise.resolve(undefined);
            }
            const client = this.findWalletClient();
            if (!client) {
                return Promise.resolve(undefined);
            }
            const signedMessage = yield client.signMessage({
                account: walletAddress,
                message: messageToSign,
            });
            return signedMessage;
        });
    }
    _setupEventListeners(walletConnector, publicClient) {
        const web3Provider = this.findProvider();
        if (!web3Provider) {
            return {
                tearDownEventListeners: () => { },
            };
        }
        const { handleAccountChange, handleChainChange, handleDisconnect } = eventListenerHandlers(walletConnector, publicClient);
        web3Provider.on('accountsChanged', handleAccountChange);
        web3Provider.on('chainChanged', handleChainChange);
        web3Provider.on('disconnect', handleDisconnect);
        const tearDownEventListeners = () => {
            const web3Provider = this.findProvider();
            if (!web3Provider) {
                return;
            }
            if (handleAccountChange) {
                web3Provider.removeListener('accountsChanged', handleAccountChange);
            }
            if (handleChainChange) {
                web3Provider.removeListener('chainChanged', handleChainChange);
            }
            if (handleDisconnect) {
                web3Provider.removeListener('disconnect', handleDisconnect);
            }
        };
        return {
            tearDownEventListeners,
        };
    }
}

export { EthProviderHelper };
