import { ONRAMP_PROVIDERS } from '../../constants/onrampProviders.js';

const isOnrampProvider = (provider) => ONRAMP_PROVIDERS.includes(provider.provider);

export { isOnrampProvider };
