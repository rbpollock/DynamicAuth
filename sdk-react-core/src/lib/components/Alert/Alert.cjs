'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
require('react');
var error = require('../../shared/assets/error.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
var Icon = require('../Icon/Icon.cjs');
var Typography = require('../Typography/Typography.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const errorIconMap = {
    error: jsxRuntime.jsx(error.ReactComponent, {}),
};
const Alert = ({ children, icon, variant = 'error', contentDataTestId, }) => (jsxRuntime.jsxs("div", { className: classNames.classNames('alert', {
        'alert--error': variant === 'error',
        'alert--warning': variant === 'warning',
    }), children: [icon && (jsxRuntime.jsx(Icon.Icon, { size: 'small', className: 'alert__icon', children: typeof icon === 'string' ? errorIconMap[icon] : icon })), jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', "data-testid": contentDataTestId, children: children })] }));

exports.Alert = Alert;
