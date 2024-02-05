'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var utils = require('@dynamic-labs/utils');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var pixelToRem = require('../../utils/functions/pixelToRem/pixelToRem.cjs');
var Spinner = require('./Spinner/Spinner.cjs');
var Indicator = require('./Indicator/Indicator.cjs');

const iconRatio = 7 / 11;
const IconWithSpinner = ({ iconSize = 24, Icon, isSpinning = false, className = '', indicator, customSpinnerColor, treatAsFunctionComponent, }) => {
    const realIconSize = iconSize * iconRatio;
    const spinnerIconSize = iconSize / 2;
    const [spinningDegrees, setSpinningDegrees] = React.useState(0);
    React.useEffect(() => {
        let currentDegree = 0;
        const millisecondsForEachSpin = 1300;
        const spinningInterval = setInterval(() => {
            setSpinningDegrees(currentDegree);
            currentDegree = currentDegree < 360 ? currentDegree + 1 : 0;
        }, millisecondsForEachSpin / 360);
        return () => clearInterval(spinningInterval);
    }, []);
    const effectiveContainerClassName = classNames.classNames('icon-with-spinner__container', className);
    const IconAsFC = Icon;
    return (jsxRuntime.jsxs("div", { className: effectiveContainerClassName, style: {
            height: pixelToRem.pixelToRem(iconSize),
            width: pixelToRem.pixelToRem(iconSize),
        }, children: [Icon && (jsxRuntime.jsxs("div", { style: {
                    height: pixelToRem.pixelToRem(realIconSize),
                    width: pixelToRem.pixelToRem(realIconSize),
                }, className: 'icon-with-spinner__icon-container', children: [treatAsFunctionComponent || typeof Icon === 'function' ? (jsxRuntime.jsx(IconAsFC, { height: realIconSize, width: realIconSize })) : (Icon), indicator && jsxRuntime.jsx(Indicator.Indicator, { indicator: indicator, iconSize: iconSize })] })), isSpinning && !utils.isLegacySafari() && (jsxRuntime.jsx("div", { className: 'icon-with-spinner__spinner-container', "data-chromatic": 'ignore', style: {
                    height: pixelToRem.pixelToRem(iconSize),
                    transform: `rotate(${spinningDegrees}deg)`,
                    width: pixelToRem.pixelToRem(iconSize),
                }, children: jsxRuntime.jsx(Spinner.Spinner, { className: 'icon-with-spinner__spinner', customSpinnerColor: customSpinnerColor, size: spinnerIconSize }) }))] }));
};

exports.IconWithSpinner = IconWithSpinner;
exports.iconRatio = iconRatio;
