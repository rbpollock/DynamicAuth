'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var multiWallet = require('@dynamic-labs/multi-wallet');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var rpcProviders = require('@dynamic-labs/rpc-providers');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('../../context/ViewContext/ViewContext.cjs');
require('react');
var createWallet = require('../../shared/utils/functions/wallet/createWallet.cjs');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');

/**
 * This object is needed because the selected symbols default value from
 * getChainInfo differs from the one used in the wallet connectors
 */
const chainInfoOverrides = {
    starknet: 'STARK',
};
const getEnabledChains = (chains) => chains
    .filter(({ enabled }) => enabled)
    .map(({ name }) => { var _a, _b; return (_a = chainInfoOverrides[name]) !== null && _a !== void 0 ? _a : (_b = walletConnectorCore.getChainInfo(name)) === null || _b === void 0 ? void 0 : _b.symbol; })
    .filter((chain) => Boolean(chain));
const getWallets = (props) => {
    var _a, _b, _c, _d;
    return multiWallet.getEnabledWallets({
        enabledChains: getEnabledChains(props.getSupportedWalletOpts.settings.chains),
        getSupportedWalletOpts: Object.assign(Object.assign({}, props.getSupportedWalletOpts), { chainRpcProviders: rpcProviders.ChainRpcProviders, isWalletConnectV2Enabled: !props.getSupportedWalletOpts.walletConnectV1Bridge &&
                ((_a = props.getSupportedWalletOpts.settings.sdk.walletConnect) === null || _a === void 0 ? void 0 : _a.v2Enabled) &&
                ((_b = props.getSupportedWalletOpts.settings.sdk.walletConnect) === null || _b === void 0 ? void 0 : _b.projectId)
                ? (_c = props.getSupportedWalletOpts.settings.sdk.walletConnect) === null || _c === void 0 ? void 0 : _c.v2Enabled
                : false, walletConnectProjectId: (_d = props.getSupportedWalletOpts.settings.sdk.walletConnect) === null || _d === void 0 ? void 0 : _d.projectId }),
    }).map((wallet) => {
        var _a;
        (_a = props.walletConnectorExtensions) === null || _a === void 0 ? void 0 : _a.forEach((extension) => wallet.extend(extension));
        return createWallet.createWallet(props.getSupportedWalletOpts.walletBook, wallet);
    });
};

exports.getEnabledChains = getEnabledChains;
exports.getWallets = getWallets;
