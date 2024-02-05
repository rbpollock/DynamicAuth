import { jsxs, jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getChainInfo } from '@dynamic-labs/wallet-connector-core';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import { ConnectedWalletsListLayout } from '../../layouts/ConnectedWalletsListLayout/ConnectedWalletsListLayout.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import { getChainIcon } from '../../shared/utils/functions/chain/getChainIcon.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '@dynamic-labs/iconic';
import '../../context/ViewContext/ViewContext.js';
import '../../shared/consts/index.js';
import { DynamicBridgeWalletCard } from '../../widgets/DynamicBridgeWidget/components/DynamicBridgeWalletCard/DynamicBridgeWalletCard.js';
import { DynamicBridgeWalletCardBody } from '../../widgets/DynamicBridgeWidget/components/DynamicBridgeWalletCardBody/DynamicBridgeWalletCardBody.js';
import { MemoSecondaryWallets } from '../../widgets/DynamicBridgeWidget/views/WalletsView/components/SecondaryWallets/SecondaryWallets.js';
import { Balance } from '../../widgets/DynamicWidget/components/Balance/Balance.js';

const BridgeSummaryView = () => {
    const { primaryWallet, setShowAuthFlow, appName, bridgeChains = [], } = useInternalDynamicContext();
    const { t } = useTranslation();
    const onClickClose = () => setShowAuthFlow(false);
    const body = useMemo(() => {
        const blockchainNames = bridgeChains.map(({ chain }) => { var _a; return (_a = getChainInfo(chain)) === null || _a === void 0 ? void 0 : _a.blockchainName; });
        const [firstBlockchainName, secondBlockchainName] = blockchainNames;
        return t('dyn_bridge.summary_view.connection_succeed', {
            firstBlockchainName,
            secondBlockchainName,
        });
    }, [bridgeChains, t]);
    const createPrimaryWalletCard = (wallet) => {
        const PrimaryWalletChainIcon = getChainIcon(wallet.chain);
        const primaryWalletChainInfo = getChainInfo(wallet.chain);
        return (jsx(DynamicBridgeWalletCard, { networkIcon: jsx(PrimaryWalletChainIcon, {}), networkName: primaryWalletChainInfo === null || primaryWalletChainInfo === void 0 ? void 0 : primaryWalletChainInfo.displayName, children: jsx(DynamicBridgeWalletCardBody, { walletKey: wallet.connector.key, walletAddress: wallet.address, walletBalance: 
                // eslint-disable-next-line react/jsx-wrap-multilines
                jsx(Balance, { address: wallet.address, connector: wallet.connector, network: wallet.chain }) }) }));
    };
    return (jsxs(ConnectedWalletsListLayout, { onClickClose: onClickClose, onClickAction: onClickClose, copykey: 'dyn_bridge.summary_view.title', title: t('dyn_bridge.summary_view.title', { appName }), body: body, children: [primaryWallet && createPrimaryWalletCard(primaryWallet), jsx(MemoSecondaryWallets, { hideUnlinkAction: true })] }));
};

export { BridgeSummaryView };
