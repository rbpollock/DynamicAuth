const isEip9693Event = (event) => event.type === 'eip6963:announceProvider' &&
    event.detail !== undefined;
class Eip6963Provider {
    constructor() {
        this.providers = [];
    }
    registerProviders() {
        if (typeof window === 'undefined') {
            return;
        }
        window.addEventListener('eip6963:announceProvider', (event) => {
            if (!isEip9693Event(event)) {
                return;
            }
            this.providers.push(event.detail);
        });
        window.dispatchEvent(new Event('eip6963:requestProvider'));
    }
}
class Eip6963ProviderSingleton {
    constructor() {
        this.eip6963Provider = new Eip6963Provider();
    }
    static get() {
        var _a;
        if (!((_a = Eip6963ProviderSingleton.instance) === null || _a === void 0 ? void 0 : _a.eip6963Provider)) {
            Eip6963ProviderSingleton.instance = new Eip6963ProviderSingleton();
            Eip6963ProviderSingleton.instance.eip6963Provider.registerProviders();
        }
        return Eip6963ProviderSingleton.instance.eip6963Provider;
    }
}

export { Eip6963Provider, Eip6963ProviderSingleton };
