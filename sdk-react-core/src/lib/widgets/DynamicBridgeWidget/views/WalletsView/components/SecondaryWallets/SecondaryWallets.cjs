'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../../../../../shared/logger.cjs');
var getChainIcon = require('../../../../../../shared/utils/functions/chain/getChainIcon.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../../../utils/constants/colors.cjs');
require('../../../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('@dynamic-labs/iconic');
require('../../../../../../context/ViewContext/ViewContext.cjs');
require('../../../../../../shared/consts/index.cjs');
var DynamicBridgeWalletCard = require('../../../../components/DynamicBridgeWalletCard/DynamicBridgeWalletCard.cjs');
var DynamicBridgeWalletCardBody = require('../../../../components/DynamicBridgeWalletCardBody/DynamicBridgeWalletCardBody.cjs');
var Balance = require('../../../../../DynamicWidget/components/Balance/Balance.cjs');
var useInternalDynamicContext = require('../../../../../../context/DynamicContext/useInternalDynamicContext.cjs');
var DynamicBridgeWidgetEmptyCard = require('../../../../components/DynamicBridgeWidgetEmptyCard/DynamicBridgeWidgetEmptyCard.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const SecondaryWallets = ({ hideUnlinkAction = false }) => {
    const { disconnectWallet, getConnectedWalletById, bridgeChains } = useInternalDynamicContext.useInternalDynamicContext();
    const wallet = getConnectedWalletById('connect-wallet-1');
    const NetworkIcon = wallet && getChainIcon.getChainIcon(wallet === null || wallet === void 0 ? void 0 : wallet.chain);
    const networkInfo = wallet && walletConnectorCore.getChainInfo(wallet === null || wallet === void 0 ? void 0 : wallet.chain);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [!wallet && (jsxRuntime.jsx(DynamicBridgeWidgetEmptyCard.DynamicBridgeWidgetEmptyCard, { chain: bridgeChains === null || bridgeChains === void 0 ? void 0 : bridgeChains[1].chain })), wallet && NetworkIcon && (jsxRuntime.jsx(DynamicBridgeWalletCard.DynamicBridgeWalletCard, { networkIcon: jsxRuntime.jsx(NetworkIcon, {}), networkName: networkInfo === null || networkInfo === void 0 ? void 0 : networkInfo.displayName, children: jsxRuntime.jsx(DynamicBridgeWalletCardBody.DynamicBridgeWalletCardBody, { walletKey: wallet.connector.key, walletAddress: wallet.address, walletBalance: 
                    // eslint-disable-next-line react/jsx-wrap-multilines
                    jsxRuntime.jsx(Balance.Balance, { address: wallet.address, connector: wallet.connector, network: wallet.chain }), onDisconnectClick: !hideUnlinkAction ? () => disconnectWallet(wallet.id) : undefined }, wallet.id) }))] }));
};
const MemoSecondaryWallets = React__default["default"].memo(SecondaryWallets);

exports.MemoSecondaryWallets = MemoSecondaryWallets;
exports.SecondaryWallets = SecondaryWallets;
