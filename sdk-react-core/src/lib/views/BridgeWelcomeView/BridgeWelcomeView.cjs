'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
var BridgeWelcomeLayout = require('../../layouts/BridgeWelcomeLayout/BridgeWelcomeLayout.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
var getChainIcon = require('../../shared/utils/functions/chain/getChainIcon.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('@dynamic-labs/iconic');
var ViewContext = require('../../context/ViewContext/ViewContext.cjs');
require('../../shared/consts/index.cjs');

const isChainInfoDefined = (chainInfo) => chainInfo !== undefined;
const BridgeWelcomeView = () => {
    const { appName, bridgeChains = [], setShowAuthFlow, } = useInternalDynamicContext.useInternalDynamicContext();
    const { setView } = ViewContext.useViewContext();
    const { t } = reactI18next.useTranslation();
    const body = React.useMemo(() => {
        const blockchainNames = bridgeChains.map(({ chain }) => { var _a; return (_a = walletConnectorCore.getChainInfo(chain)) === null || _a === void 0 ? void 0 : _a.blockchainName; });
        const [firstBlockchainName, secondBlockchainName] = blockchainNames;
        return t('dyn_bridge.welcome_view.description', {
            firstBlockchainName,
            secondBlockchainName,
        });
    }, [bridgeChains, t]);
    const chains = React.useMemo(() => bridgeChains
        .map(({ chain }, index) => {
        const chainInfo = walletConnectorCore.getChainInfo(chain);
        const ChainIcon = getChainIcon.getChainIcon(chain);
        if (chainInfo && ChainIcon) {
            return {
                icon: jsxRuntime.jsx(ChainIcon, {}),
                id: index,
                name: chainInfo.blockchainName,
            };
        }
        return undefined;
    })
        .filter(isChainInfoDefined), [bridgeChains]);
    return (jsxRuntime.jsx(BridgeWelcomeLayout.BridgeWelcomeLayout, { onClickClose: () => setShowAuthFlow(false), title: t('dyn_bridge.welcome_view.title', { appName }), copykey: 'dyn_bridge.welcome_view.title', body: body, chains: chains, actionButtonText: t('dyn_bridge.welcome_view.button'), onClickAction: () => setView('wallet-list') }));
};

exports.BridgeWelcomeView = BridgeWelcomeView;
