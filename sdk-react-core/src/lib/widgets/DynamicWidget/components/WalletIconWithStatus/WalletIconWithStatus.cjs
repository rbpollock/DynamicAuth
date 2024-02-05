'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var walletBook = require('@dynamic-labs/wallet-book');
var StatusDot = require('../../../../components/StatusDot/StatusDot.cjs');
require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../../../context/ViewContext/ViewContext.cjs');
require('react');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var pixelToRem = require('../../../../utils/functions/pixelToRem/pixelToRem.cjs');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');

const WalletIconWithStatus = ({ iconSize = 24, walletKey, connected, variant = 'primary', }) => (jsxRuntime.jsxs("div", { className: 'wallet-icon-with-status__container', children: [jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: walletKey, style: {
                height: pixelToRem.pixelToRem(iconSize),
                width: pixelToRem.pixelToRem(iconSize),
            } }, walletKey), jsxRuntime.jsx("div", { "data-testid": 'status-dot-container', className: classNames.classNames('wallet-icon-with-status__dot-container', variant === 'secondary'
                ? 'wallet-icon-with-status__dot-container--secondary'
                : ''), children: jsxRuntime.jsx(StatusDot.StatusDot, { variant: connected ? 'green' : 'red' }) })] }));

exports.WalletIconWithStatus = WalletIconWithStatus;
