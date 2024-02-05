import { jsx } from 'react/jsx-runtime';
import { getChainInfo } from '@dynamic-labs/wallet-connector-core';
import { DynamicError } from '@dynamic-labs/utils';
import { useViewContext } from '../../context/ViewContext/ViewContext.js';
import { BridgeNextWalletToConnectLayout } from '../../layouts/BridgeNextWalletToConnectLayout/BridgeNextWalletToConnectLayout.js';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import { getChainIcon } from '../../shared/utils/functions/chain/getChainIcon.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import 'react';
import '@dynamic-labs/iconic';
import '../../shared/consts/index.js';

const BridgeNextWalletConnectionView = () => {
    const { setShowAuthFlow, bridgeChainsToConnect } = useInternalDynamicContext();
    const { setView } = useViewContext();
    if (!(bridgeChainsToConnect === null || bridgeChainsToConnect === void 0 ? void 0 : bridgeChainsToConnect.length)) {
        throw new DynamicError('No wallets to connect');
    }
    const [nextWalletToConnect] = bridgeChainsToConnect;
    const { chain } = nextWalletToConnect;
    const chainInfo = getChainInfo(chain);
    const ChainIcon = getChainIcon(chain);
    if (!chainInfo) {
        throw new DynamicError('No chain info found for chain', chain);
    }
    return (jsx(BridgeNextWalletToConnectLayout, { chainName: chainInfo.blockchainName, chainIcon: jsx(ChainIcon, {}), onClickAction: () => setView('wallet-list'), onClickClose: () => setShowAuthFlow(false) }));
};

export { BridgeNextWalletConnectionView };
