import { getEnabledWallets } from '@dynamic-labs/multi-wallet';
import { getChainInfo } from '@dynamic-labs/wallet-connector-core';
import { ChainRpcProviders } from '@dynamic-labs/rpc-providers';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '../../context/ViewContext/ViewContext.js';
import 'react';
import { createWallet } from '../../shared/utils/functions/wallet/createWallet.js';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';

/**
 * This object is needed because the selected symbols default value from
 * getChainInfo differs from the one used in the wallet connectors
 */
const chainInfoOverrides = {
    starknet: 'STARK',
};
const getEnabledChains = (chains) => chains
    .filter(({ enabled }) => enabled)
    .map(({ name }) => { var _a, _b; return (_a = chainInfoOverrides[name]) !== null && _a !== void 0 ? _a : (_b = getChainInfo(name)) === null || _b === void 0 ? void 0 : _b.symbol; })
    .filter((chain) => Boolean(chain));
const getWallets = (props) => {
    var _a, _b, _c, _d;
    return getEnabledWallets({
        enabledChains: getEnabledChains(props.getSupportedWalletOpts.settings.chains),
        getSupportedWalletOpts: Object.assign(Object.assign({}, props.getSupportedWalletOpts), { chainRpcProviders: ChainRpcProviders, isWalletConnectV2Enabled: !props.getSupportedWalletOpts.walletConnectV1Bridge &&
                ((_a = props.getSupportedWalletOpts.settings.sdk.walletConnect) === null || _a === void 0 ? void 0 : _a.v2Enabled) &&
                ((_b = props.getSupportedWalletOpts.settings.sdk.walletConnect) === null || _b === void 0 ? void 0 : _b.projectId)
                ? (_c = props.getSupportedWalletOpts.settings.sdk.walletConnect) === null || _c === void 0 ? void 0 : _c.v2Enabled
                : false, walletConnectProjectId: (_d = props.getSupportedWalletOpts.settings.sdk.walletConnect) === null || _d === void 0 ? void 0 : _d.projectId }),
    }).map((wallet) => {
        var _a;
        (_a = props.walletConnectorExtensions) === null || _a === void 0 ? void 0 : _a.forEach((extension) => wallet.extend(extension));
        return createWallet(props.getSupportedWalletOpts.walletBook, wallet);
    });
};

export { getEnabledChains, getWallets };
