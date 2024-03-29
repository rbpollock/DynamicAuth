import { AlgorandIcon, CosmosIcon, EthereumIcon, FlowIcon, SolanaIcon, StarknetIcon } from '@dynamic-labs/iconic';
import { getChainInfo } from '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgError } from '../../../assets/error.js';

const chainIconMap = {
    algorand: AlgorandIcon,
    cosmos: CosmosIcon,
    evm: EthereumIcon,
    flow: FlowIcon,
    solana: SolanaIcon,
    starknet: StarknetIcon,
};
const getChainIcon = (chain) => {
    var _a, _b, _c;
    const chainName = (_b = (_a = getChainInfo(chain)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '';
    return (_c = chainIconMap[chainName]) !== null && _c !== void 0 ? _c : SvgError;
};

export { getChainIcon };
