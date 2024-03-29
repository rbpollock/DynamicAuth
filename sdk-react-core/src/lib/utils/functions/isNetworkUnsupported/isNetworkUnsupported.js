import { parseChainId } from '@dynamic-labs/utils';

// Network is not supported if:
//   - its undefined
//   - its not in evmNetworks
const isNetworkUnsupported = (network, evmNetworks) => !(evmNetworks === null || evmNetworks === void 0 ? void 0 : evmNetworks.find((element) => network && element.chainId === parseChainId(network)));

export { isNetworkUnsupported };
