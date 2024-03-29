import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '../Typography/Typography.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import { shortenWalletAddress } from '../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import { Icon } from '../Icon/Icon.js';

const WalletInformationCard = ({ address, ens, balance, icon, network, menu, }) => {
    const { t } = useTranslation();
    const details = useMemo(() => {
        const shortenAddress = shortenWalletAddress(address, 4, 4);
        if (ens) {
            return (jsxs(Fragment, { children: [jsx(Typography, { color: 'primary', variant: 'body_normal', truncate: true, children: ens }), jsx(Typography, { weight: 'regular', variant: 'body_small', color: 'secondary', children: shortenAddress })] }));
        }
        return (jsx(Typography, { weight: 'medium', variant: 'body_normal', color: 'primary', children: shortenAddress }));
    }, [ens, address]);
    return (jsxs("div", { className: 'wallet-information-card', children: [jsxs("div", { className: 'wallet-information-card__header', children: [jsxs("div", { className: 'wallet-information-card__details-container', children: [icon && (jsx(Icon, { className: 'wallet-information-card__icon', children: icon })), jsx("div", { className: 'wallet-information-card__details', children: details }), jsx("div", { className: 'wallet-information-card__menu', children: menu })] }), network] }), jsxs("div", { className: 'wallet-information-card__balance-container', children: [jsx(Typography, { color: 'secondary', variant: 'body_small', copykey: 'dyn_wallet_information.balance', children: t('dyn_wallet_information.balance') }), balance] })] }));
};

export { WalletInformationCard };
