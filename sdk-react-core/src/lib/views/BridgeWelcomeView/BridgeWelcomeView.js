import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getChainInfo } from '@dynamic-labs/wallet-connector-core';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import { BridgeWelcomeLayout } from '../../layouts/BridgeWelcomeLayout/BridgeWelcomeLayout.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import { getChainIcon } from '../../shared/utils/functions/chain/getChainIcon.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '@dynamic-labs/iconic';
import { useViewContext } from '../../context/ViewContext/ViewContext.js';
import '../../shared/consts/index.js';

const isChainInfoDefined = (chainInfo) => chainInfo !== undefined;
const BridgeWelcomeView = () => {
    const { appName, bridgeChains = [], setShowAuthFlow, } = useInternalDynamicContext();
    const { setView } = useViewContext();
    const { t } = useTranslation();
    const body = useMemo(() => {
        const blockchainNames = bridgeChains.map(({ chain }) => { var _a; return (_a = getChainInfo(chain)) === null || _a === void 0 ? void 0 : _a.blockchainName; });
        const [firstBlockchainName, secondBlockchainName] = blockchainNames;
        return t('dyn_bridge.welcome_view.description', {
            firstBlockchainName,
            secondBlockchainName,
        });
    }, [bridgeChains, t]);
    const chains = useMemo(() => bridgeChains
        .map(({ chain }, index) => {
        const chainInfo = getChainInfo(chain);
        const ChainIcon = getChainIcon(chain);
        if (chainInfo && ChainIcon) {
            return {
                icon: jsx(ChainIcon, {}),
                id: index,
                name: chainInfo.blockchainName,
            };
        }
        return undefined;
    })
        .filter(isChainInfoDefined), [bridgeChains]);
    return (jsx(BridgeWelcomeLayout, { onClickClose: () => setShowAuthFlow(false), title: t('dyn_bridge.welcome_view.title', { appName }), copykey: 'dyn_bridge.welcome_view.title', body: body, chains: chains, actionButtonText: t('dyn_bridge.welcome_view.button'), onClickAction: () => setView('wallet-list') }));
};

export { BridgeWelcomeView };
