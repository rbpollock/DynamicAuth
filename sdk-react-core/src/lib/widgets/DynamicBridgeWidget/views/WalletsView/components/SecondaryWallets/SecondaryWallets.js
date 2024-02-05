import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import React__default from 'react';
import { getChainInfo } from '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import '../../../../../../shared/logger.js';
import { getChainIcon } from '../../../../../../shared/utils/functions/chain/getChainIcon.js';
import '@dynamic-labs/wallet-book';
import '../../../../../../utils/constants/colors.js';
import '../../../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '@dynamic-labs/iconic';
import '../../../../../../context/ViewContext/ViewContext.js';
import '../../../../../../shared/consts/index.js';
import { DynamicBridgeWalletCard } from '../../../../components/DynamicBridgeWalletCard/DynamicBridgeWalletCard.js';
import { DynamicBridgeWalletCardBody } from '../../../../components/DynamicBridgeWalletCardBody/DynamicBridgeWalletCardBody.js';
import { Balance } from '../../../../../DynamicWidget/components/Balance/Balance.js';
import { useInternalDynamicContext } from '../../../../../../context/DynamicContext/useInternalDynamicContext.js';
import { DynamicBridgeWidgetEmptyCard } from '../../../../components/DynamicBridgeWidgetEmptyCard/DynamicBridgeWidgetEmptyCard.js';

const SecondaryWallets = ({ hideUnlinkAction = false }) => {
    const { disconnectWallet, getConnectedWalletById, bridgeChains } = useInternalDynamicContext();
    const wallet = getConnectedWalletById('connect-wallet-1');
    const NetworkIcon = wallet && getChainIcon(wallet === null || wallet === void 0 ? void 0 : wallet.chain);
    const networkInfo = wallet && getChainInfo(wallet === null || wallet === void 0 ? void 0 : wallet.chain);
    return (jsxs(Fragment, { children: [!wallet && (jsx(DynamicBridgeWidgetEmptyCard, { chain: bridgeChains === null || bridgeChains === void 0 ? void 0 : bridgeChains[1].chain })), wallet && NetworkIcon && (jsx(DynamicBridgeWalletCard, { networkIcon: jsx(NetworkIcon, {}), networkName: networkInfo === null || networkInfo === void 0 ? void 0 : networkInfo.displayName, children: jsx(DynamicBridgeWalletCardBody, { walletKey: wallet.connector.key, walletAddress: wallet.address, walletBalance: 
                    // eslint-disable-next-line react/jsx-wrap-multilines
                    jsx(Balance, { address: wallet.address, connector: wallet.connector, network: wallet.chain }), onDisconnectClick: !hideUnlinkAction ? () => disconnectWallet(wallet.id) : undefined }, wallet.id) }))] }));
};
const MemoSecondaryWallets = React__default.memo(SecondaryWallets);

export { MemoSecondaryWallets, SecondaryWallets };
