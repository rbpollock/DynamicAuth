'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var walletBook = require('@dynamic-labs/wallet-book');
require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../context/ViewContext/ViewContext.cjs');
require('react');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var pixelToRem = require('../../utils/functions/pixelToRem/pixelToRem.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var StatusDot = require('../StatusDot/StatusDot.cjs');
var Icon = require('../Icon/Icon.cjs');

const IconWithStatus = ({ Icon: Icon$1, InnerIcon, primaryWalletKey, containerClassName, iconSize = 16, variant = 'green', }) => {
    const Inner = primaryWalletKey ? (jsxRuntime.jsx("div", { className: 'inner-icon__container', children: jsxRuntime.jsx("div", { className: classNames.classNames('inner-icon'), children: jsxRuntime.jsx(Icon.Icon, { size: 'medium', children: jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: primaryWalletKey }) }) }) })) : (jsxRuntime.jsx("div", { className: 'inner-icon__container', children: jsxRuntime.jsx("div", { className: classNames.classNames('inner-icon', `inner-icon--${variant}`), children: InnerIcon && jsxRuntime.jsx(InnerIcon, {}) }) }));
    return (jsxRuntime.jsxs("div", { className: classNames.classNames('icon-with-status__container', containerClassName || ''), children: [typeof Icon$1 === 'string' ? (jsxRuntime.jsx("img", { style: {
                    height: pixelToRem.pixelToRem(iconSize),
                    width: pixelToRem.pixelToRem(iconSize),
                }, src: Icon$1, alt: '', className: 'icon' })) : (jsxRuntime.jsx(Icon$1, { style: {
                    height: pixelToRem.pixelToRem(iconSize),
                    width: pixelToRem.pixelToRem(iconSize),
                } })), InnerIcon || primaryWalletKey ? (Inner) : (jsxRuntime.jsx(StatusDot.StatusDot, { variant: variant, containerClassName: 'icon-with-status__status-dot' }))] }));
};

exports.IconWithStatus = IconWithStatus;
