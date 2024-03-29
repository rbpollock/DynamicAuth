import { jsx, jsxs } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { Typography } from '../Typography/Typography.js';
import { Icon } from '../Icon/Icon.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../context/ViewContext/ViewContext.js';
import { ReactComponent as SvgCheck } from '../../shared/assets/check.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';

const typographyOpacityMap = {
    current: '1',
    default: '1',
    done: '0.4',
    upcoming: '0.15',
};
const Step = ({ children, className, icon, state = 'default', }) => {
    // Reduce opacity of icon if upcoming
    const style = useMemo(() => ({ opacity: state === 'upcoming' ? 0.5 : 1 }), [state]);
    const ComputedIcon = useMemo(() => {
        // If done use checkmark icon
        if (state === 'done')
            return (jsx("div", { className: 'step__icon step__icon--done', children: jsx(Icon, { className: 'step__icon__check-mark', children: jsx(SvgCheck, { style: style }) }) }));
        // Use provided icon if available
        else if (icon)
            return (jsx(Icon, { className: 'step__icon', children: jsx("div", { style: style, children: icon }) }));
        // Otherwise use step index as icon
        else
            return (jsx("div", { className: 'step__index', children: jsx(Typography, { color: 'primary', variant: 'body_small', style: style, children: jsx("span", { className: 'step__index-label' }) }) }));
    }, [icon, state, style]);
    return (jsxs("div", { className: classNames('step', className), children: [ComputedIcon, jsx(Typography, { color: 'primary', variant: 'body_small', style: { opacity: typographyOpacityMap[state] }, children: children })] }));
};

export { Step };
