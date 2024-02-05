'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
var ConnectedWalletsListLayout = require('../../layouts/ConnectedWalletsListLayout/ConnectedWalletsListLayout.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
var getChainIcon = require('../../shared/utils/functions/chain/getChainIcon.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('@dynamic-labs/iconic');
require('../../context/ViewContext/ViewContext.cjs');
require('../../shared/consts/index.cjs');
var DynamicBridgeWalletCard = require('../../widgets/DynamicBridgeWidget/components/DynamicBridgeWalletCard/DynamicBridgeWalletCard.cjs');
var DynamicBridgeWalletCardBody = require('../../widgets/DynamicBridgeWidget/components/DynamicBridgeWalletCardBody/DynamicBridgeWalletCardBody.cjs');
var SecondaryWallets = require('../../widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.cjs');
var Balance = require('../../widgets/DynamicWidget/components/Balance/Balance.cjs');

const BridgeSummaryView = () => {
    const { primaryWallet, setShowAuthFlow, appName, bridgeChains = [], } = useInternalDynamicContext.useInternalDynamicContext();
    const { t } = reactI18next.useTranslation();
    const onClickClose = () => setShowAuthFlow(false);
    const body = React.useMemo(() => {
        const blockchainNames = bridgeChains.map(({ chain }) => { var _a; return (_a = walletConnectorCore.getChainInfo(chain)) === null || _a === void 0 ? void 0 : _a.blockchainName; });
        const [firstBlockchainName, secondBlockchainName] = blockchainNames;
        return t('dyn_bridge.summary_view.connection_succeed', {
            firstBlockchainName,
            secondBlockchainName,
        });
    }, [bridgeChains, t]);
    const createPrimaryWalletCard = (wallet) => {
        const PrimaryWalletChainIcon = getChainIcon.getChainIcon(wallet.chain);
        const primaryWalletChainInfo = walletConnectorCore.getChainInfo(wallet.chain);
        return (jsxRuntime.jsx(DynamicBridgeWalletCard.DynamicBridgeWalletCard, { networkIcon: jsxRuntime.jsx(PrimaryWalletChainIcon, {}), networkName: primaryWalletChainInfo === null || primaryWalletChainInfo === void 0 ? void 0 : primaryWalletChainInfo.displayName, children: jsxRuntime.jsx(DynamicBridgeWalletCardBody.DynamicBridgeWalletCardBody, { walletKey: wallet.connector.key, walletAddress: wallet.address, walletBalance: 
                // eslint-disable-next-line react/jsx-wrap-multilines
                jsxRuntime.jsx(Balance.Balance, { address: wallet.address, connector: wallet.connector, network: wallet.chain }) }) }));
    };
    return (jsxRuntime.jsxs(ConnectedWalletsListLayout.ConnectedWalletsListLayout, { onClickClose: onClickClose, onClickAction: onClickClose, copykey: 'dyn_bridge.summary_view.title', title: t('dyn_bridge.summary_view.title', { appName }), body: body, children: [primaryWallet && createPrimaryWalletCard(primaryWallet), jsxRuntime.jsx(SecondaryWallets.MemoSecondaryWallets, { hideUnlinkAction: true })] }));
};

exports.BridgeSummaryView = BridgeSummaryView;
