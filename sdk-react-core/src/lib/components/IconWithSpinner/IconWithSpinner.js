import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { isLegacySafari } from '@dynamic-labs/utils';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { pixelToRem } from '../../utils/functions/pixelToRem/pixelToRem.js';
import { Spinner } from './Spinner/Spinner.js';
import { Indicator } from './Indicator/Indicator.js';

const iconRatio = 7 / 11;
const IconWithSpinner = ({ iconSize = 24, Icon, isSpinning = false, className = '', indicator, customSpinnerColor, treatAsFunctionComponent, }) => {
    const realIconSize = iconSize * iconRatio;
    const spinnerIconSize = iconSize / 2;
    const [spinningDegrees, setSpinningDegrees] = useState(0);
    useEffect(() => {
        let currentDegree = 0;
        const millisecondsForEachSpin = 1300;
        const spinningInterval = setInterval(() => {
            setSpinningDegrees(currentDegree);
            currentDegree = currentDegree < 360 ? currentDegree + 1 : 0;
        }, millisecondsForEachSpin / 360);
        return () => clearInterval(spinningInterval);
    }, []);
    const effectiveContainerClassName = classNames('icon-with-spinner__container', className);
    const IconAsFC = Icon;
    return (jsxs("div", { className: effectiveContainerClassName, style: {
            height: pixelToRem(iconSize),
            width: pixelToRem(iconSize),
        }, children: [Icon && (jsxs("div", { style: {
                    height: pixelToRem(realIconSize),
                    width: pixelToRem(realIconSize),
                }, className: 'icon-with-spinner__icon-container', children: [treatAsFunctionComponent || typeof Icon === 'function' ? (jsx(IconAsFC, { height: realIconSize, width: realIconSize })) : (Icon), indicator && jsx(Indicator, { indicator: indicator, iconSize: iconSize })] })), isSpinning && !isLegacySafari() && (jsx("div", { className: 'icon-with-spinner__spinner-container', "data-chromatic": 'ignore', style: {
                    height: pixelToRem(iconSize),
                    transform: `rotate(${spinningDegrees}deg)`,
                    width: pixelToRem(iconSize),
                }, children: jsx(Spinner, { className: 'icon-with-spinner__spinner', customSpinnerColor: customSpinnerColor, size: spinnerIconSize }) }))] }));
};

export { IconWithSpinner, iconRatio };
