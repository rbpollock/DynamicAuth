'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/ViewContext/ViewContext.cjs');
require('react');
var walletConnectLogo = require('../../../shared/assets/wallet-connect-logo.cjs');
require('@dynamic-labs/wallet-book');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var pixelToRem = require('../../../utils/functions/pixelToRem/pixelToRem.cjs');

const Indicator = ({ indicator, iconSize }) => {
    const walletConnectSizes = {
        container: (iconSize * 4) / 15,
        icon: (iconSize * 3) / 15,
    };
    const connectedSizes = {
        container: iconSize / 6,
        icon: iconSize / 9,
    };
    if (indicator === 'walletConnect') {
        return (jsxRuntime.jsx("div", { className: 'indicator__wallet-connect', style: {
                height: pixelToRem.pixelToRem(walletConnectSizes.container),
                width: pixelToRem.pixelToRem(walletConnectSizes.container),
            }, children: jsxRuntime.jsx(walletConnectLogo.ReactComponent, { style: {
                    height: pixelToRem.pixelToRem(walletConnectSizes.icon),
                    width: pixelToRem.pixelToRem(walletConnectSizes.icon),
                } }) }));
    }
    return (jsxRuntime.jsx("div", { className: 'indicator__container indicator__container--connected', style: {
            height: pixelToRem.pixelToRem(connectedSizes.container),
            width: pixelToRem.pixelToRem(connectedSizes.container),
        }, "data-testid": 'connected-indicator', children: jsxRuntime.jsx("div", { className: 'indicator__icon', style: {
                height: pixelToRem.pixelToRem(connectedSizes.icon),
                width: pixelToRem.pixelToRem(connectedSizes.icon),
            } }) }));
};

exports.Indicator = Indicator;
