'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var Typography = require('../Typography/Typography.cjs');
require('react');
var dynamicLogo = require('../../assets/dynamic-logo.cjs');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
var DynamicWidgetFooter = require('../../widgets/DynamicWidget/components/DynamicWidgetFooter/DynamicWidgetFooter.cjs');

const URL = 'https://dynamic.xyz';
const alignClassNames = {
    center: 'powered-by-dynamic--center',
    right: 'powered-by-dynamic--right',
};
const PoweredByDynamic = ({ align = 'center', classNameLogo, classNameRoot, classNameText, asFooter, }) => {
    var _a;
    const { projectSettings } = useInternalDynamicContext.useInternalDynamicContext();
    if (((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _a === void 0 ? void 0 : _a.displayDynamicMessaging) === false) {
        return null;
    }
    const content = (jsxRuntime.jsxs("a", { target: '_blank', href: URL, className: classNames.classNames('powered-by-dynamic', alignClassNames[align], classNameRoot), rel: 'noreferrer', children: [jsxRuntime.jsx(Typography.Typography, { as: 'span', color: 'tertiary', weight: 'regular', variant: 'body_mini', className: classNames.classNames('powered-by-dynamic__text', classNameText), children: "Powered by" }), jsxRuntime.jsx(dynamicLogo.ReactComponent, { className: classNames.classNames('powered-by-dynamic__logo', classNameLogo) })] }));
    if (asFooter)
        return jsxRuntime.jsx(DynamicWidgetFooter.DynamicWidgetFooter, { children: content });
    return content;
};

exports.PoweredByDynamic = PoweredByDynamic;
