import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgError } from '../../../../shared/assets/error.js';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../../shared/consts/index.js';
import { Icon } from '../../../Icon/Icon.js';
import { Typography } from '../../../Typography/Typography.js';

const UnsupportedNetwork = ({ showMsg }) => {
    const { t } = useTranslation();
    return (jsxs(Fragment, { children: [jsx(Icon, { size: 'small', children: jsx(SvgError, {}) }), showMsg && (jsx(Typography, { className: 'evm-network-control__network-name', as: 'span', color: 'error-1', variant: 'body_small', copykey: 'dyn_network_not_supported.button', children: t('dyn_network_not_supported.button') }))] }));
};

export { UnsupportedNetwork };
