'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var Typography = require('../Typography/Typography.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
var shortenWalletAddress = require('../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
var Icon = require('../Icon/Icon.cjs');

const WalletInformationCard = ({ address, ens, balance, icon, network, menu, }) => {
    const { t } = reactI18next.useTranslation();
    const details = React.useMemo(() => {
        const shortenAddress = shortenWalletAddress.shortenWalletAddress(address, 4, 4);
        if (ens) {
            return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Typography.Typography, { color: 'primary', variant: 'body_normal', truncate: true, children: ens }), jsxRuntime.jsx(Typography.Typography, { weight: 'regular', variant: 'body_small', color: 'secondary', children: shortenAddress })] }));
        }
        return (jsxRuntime.jsx(Typography.Typography, { weight: 'medium', variant: 'body_normal', color: 'primary', children: shortenAddress }));
    }, [ens, address]);
    return (jsxRuntime.jsxs("div", { className: 'wallet-information-card', children: [jsxRuntime.jsxs("div", { className: 'wallet-information-card__header', children: [jsxRuntime.jsxs("div", { className: 'wallet-information-card__details-container', children: [icon && (jsxRuntime.jsx(Icon.Icon, { className: 'wallet-information-card__icon', children: icon })), jsxRuntime.jsx("div", { className: 'wallet-information-card__details', children: details }), jsxRuntime.jsx("div", { className: 'wallet-information-card__menu', children: menu })] }), network] }), jsxRuntime.jsxs("div", { className: 'wallet-information-card__balance-container', children: [jsxRuntime.jsx(Typography.Typography, { color: 'secondary', variant: 'body_small', copykey: 'dyn_wallet_information.balance', children: t('dyn_wallet_information.balance') }), balance] })] }));
};

exports.WalletInformationCard = WalletInformationCard;
