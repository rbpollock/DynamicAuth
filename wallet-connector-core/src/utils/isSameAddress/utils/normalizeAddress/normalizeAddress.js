import { shouldLowercaseAddress } from '../../../shouldLowercaseAddress.js';

const normalizeAddress = (rawAddress, chain) => {
    if (rawAddress.startsWith('0x')) {
        rawAddress = rawAddress.slice(2);
    }
    const address = shouldLowercaseAddress(chain)
        ? rawAddress.toLowerCase()
        : rawAddress;
    return address;
};

export { normalizeAddress };
