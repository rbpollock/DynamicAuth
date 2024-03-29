'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var ThemeContext = require('../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var pixelToRem = require('../../../utils/functions/pixelToRem/pixelToRem.cjs');

const defaultCustomColor = '#4779FF';
const Spinner = ({ className = '', size = 16, customSpinnerColor = '', }) => {
    const { theme } = ThemeContext.useThemeContext();
    const color = customSpinnerColor || theme.customColor || defaultCustomColor;
    return (jsxRuntime.jsxs("svg", { style: {
            height: pixelToRem.pixelToRem(size),
            width: pixelToRem.pixelToRem(size),
        }, viewBox: '0 0 42 42', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', className: className, "data-testid": 'spinner', children: [jsxRuntime.jsx("mask", { id: 'path-1-inside-1_1433_60360', fill: 'white', children: jsxRuntime.jsx("path", { d: 'M40.53 42C41.3419 42 42.0027 41.3416 41.9743 40.5303C41.7987 35.5162 40.726 30.5699 38.8029 25.9273C36.6922 20.8316 33.5985 16.2016 29.6985 12.3015C25.7984 8.40145 21.1684 5.30776 16.0727 3.19706C11.4301 1.27403 6.48384 0.201284 1.46972 0.0257219C0.658363 -0.00268681 0 0.658141 0 1.47C0 2.28186 0.658382 2.93711 1.46967 2.96766C6.09758 3.1419 10.6617 4.138 14.9476 5.91326C19.6866 7.87621 23.9925 10.7534 27.6196 14.3804C31.2467 18.0075 34.1238 22.3134 36.0867 27.0524C37.862 31.3383 38.8581 35.9024 39.0323 40.5303C39.0629 41.3416 39.7181 42 40.53 42Z' }) }), jsxRuntime.jsx("path", { d: 'M40.53 42C41.3419 42 42.0027 41.3416 41.9743 40.5303C41.7987 35.5162 40.726 30.5699 38.8029 25.9273C36.6922 20.8316 33.5985 16.2016 29.6985 12.3015C25.7984 8.40145 21.1684 5.30776 16.0727 3.19706C11.4301 1.27403 6.48384 0.201284 1.46972 0.0257219C0.658363 -0.00268681 0 0.658141 0 1.47C0 2.28186 0.658382 2.93711 1.46967 2.96766C6.09758 3.1419 10.6617 4.138 14.9476 5.91326C19.6866 7.87621 23.9925 10.7534 27.6196 14.3804C31.2467 18.0075 34.1238 22.3134 36.0867 27.0524C37.862 31.3383 38.8581 35.9024 39.0323 40.5303C39.0629 41.3416 39.7181 42 40.53 42Z', stroke: 'url(#paint0_linear_1433_60360)', strokeWidth: '4', mask: 'url(#path-1-inside-1_1433_60360)' }), jsxRuntime.jsx("defs", { children: jsxRuntime.jsxs("linearGradient", { id: 'paint0_linear_1433_60360', x1: '41', y1: '42', x2: '1.5', y2: '-1.82007e-07', gradientUnits: 'userSpaceOnUse', children: [jsxRuntime.jsx("stop", { stopColor: color }), jsxRuntime.jsx("stop", { offset: '1', stopColor: color, stopOpacity: '0' })] }) })] }));
};

exports.Spinner = Spinner;
