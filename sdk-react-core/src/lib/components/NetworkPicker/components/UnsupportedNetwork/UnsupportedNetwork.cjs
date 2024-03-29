'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/ViewContext/ViewContext.cjs');
require('react');
var error = require('../../../../shared/assets/error.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../../shared/consts/index.cjs');
var Icon = require('../../../Icon/Icon.cjs');
var Typography = require('../../../Typography/Typography.cjs');

const UnsupportedNetwork = ({ showMsg }) => {
    const { t } = reactI18next.useTranslation();
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Icon.Icon, { size: 'small', children: jsxRuntime.jsx(error.ReactComponent, {}) }), showMsg && (jsxRuntime.jsx(Typography.Typography, { className: 'evm-network-control__network-name', as: 'span', color: 'error-1', variant: 'body_small', copykey: 'dyn_network_not_supported.button', children: t('dyn_network_not_supported.button') }))] }));
};

exports.UnsupportedNetwork = UnsupportedNetwork;
