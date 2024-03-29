'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var Typography = require('../Typography/Typography.cjs');
var Icon = require('../Icon/Icon.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
var check = require('../../shared/assets/check.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');

const typographyOpacityMap = {
    current: '1',
    default: '1',
    done: '0.4',
    upcoming: '0.15',
};
const Step = ({ children, className, icon, state = 'default', }) => {
    // Reduce opacity of icon if upcoming
    const style = React.useMemo(() => ({ opacity: state === 'upcoming' ? 0.5 : 1 }), [state]);
    const ComputedIcon = React.useMemo(() => {
        // If done use checkmark icon
        if (state === 'done')
            return (jsxRuntime.jsx("div", { className: 'step__icon step__icon--done', children: jsxRuntime.jsx(Icon.Icon, { className: 'step__icon__check-mark', children: jsxRuntime.jsx(check.ReactComponent, { style: style }) }) }));
        // Use provided icon if available
        else if (icon)
            return (jsxRuntime.jsx(Icon.Icon, { className: 'step__icon', children: jsxRuntime.jsx("div", { style: style, children: icon }) }));
        // Otherwise use step index as icon
        else
            return (jsxRuntime.jsx("div", { className: 'step__index', children: jsxRuntime.jsx(Typography.Typography, { color: 'primary', variant: 'body_small', style: style, children: jsxRuntime.jsx("span", { className: 'step__index-label' }) }) }));
    }, [icon, state, style]);
    return (jsxRuntime.jsxs("div", { className: classNames.classNames('step', className), children: [ComputedIcon, jsxRuntime.jsx(Typography.Typography, { color: 'primary', variant: 'body_small', style: { opacity: typographyOpacityMap[state] }, children: children })] }));
};

exports.Step = Step;
