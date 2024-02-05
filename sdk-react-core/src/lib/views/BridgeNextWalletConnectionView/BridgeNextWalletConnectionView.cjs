'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var utils = require('@dynamic-labs/utils');
var ViewContext = require('../../context/ViewContext/ViewContext.cjs');
var BridgeNextWalletToConnectLayout = require('../../layouts/BridgeNextWalletToConnectLayout/BridgeNextWalletToConnectLayout.cjs');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
var getChainIcon = require('../../shared/utils/functions/chain/getChainIcon.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('react');
require('@dynamic-labs/iconic');
require('../../shared/consts/index.cjs');

const BridgeNextWalletConnectionView = () => {
    const { setShowAuthFlow, bridgeChainsToConnect } = useInternalDynamicContext.useInternalDynamicContext();
    const { setView } = ViewContext.useViewContext();
    if (!(bridgeChainsToConnect === null || bridgeChainsToConnect === void 0 ? void 0 : bridgeChainsToConnect.length)) {
        throw new utils.DynamicError('No wallets to connect');
    }
    const [nextWalletToConnect] = bridgeChainsToConnect;
    const { chain } = nextWalletToConnect;
    const chainInfo = walletConnectorCore.getChainInfo(chain);
    const ChainIcon = getChainIcon.getChainIcon(chain);
    if (!chainInfo) {
        throw new utils.DynamicError('No chain info found for chain', chain);
    }
    return (jsxRuntime.jsx(BridgeNextWalletToConnectLayout.BridgeNextWalletToConnectLayout, { chainName: chainInfo.blockchainName, chainIcon: jsxRuntime.jsx(ChainIcon, {}), onClickAction: () => setView('wallet-list'), onClickClose: () => setShowAuthFlow(false) }));
};

exports.BridgeNextWalletConnectionView = BridgeNextWalletConnectionView;
