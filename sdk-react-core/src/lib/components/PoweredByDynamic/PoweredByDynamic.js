import { jsxs, jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { Typography } from '../Typography/Typography.js';
import 'react';
import { ReactComponent as SvgDynamicLogo } from '../../assets/dynamic-logo.js';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import { DynamicWidgetFooter } from '../../widgets/DynamicWidget/components/DynamicWidgetFooter/DynamicWidgetFooter.js';

const URL = 'https://dynamic.xyz';
const alignClassNames = {
    center: 'powered-by-dynamic--center',
    right: 'powered-by-dynamic--right',
};
const PoweredByDynamic = ({ align = 'center', classNameLogo, classNameRoot, classNameText, asFooter, }) => {
    var _a;
    const { projectSettings } = useInternalDynamicContext();
    if (((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _a === void 0 ? void 0 : _a.displayDynamicMessaging) === false) {
        return null;
    }
    const content = (jsxs("a", { target: '_blank', href: URL, className: classNames('powered-by-dynamic', alignClassNames[align], classNameRoot), rel: 'noreferrer', children: [jsx(Typography, { as: 'span', color: 'tertiary', weight: 'regular', variant: 'body_mini', className: classNames('powered-by-dynamic__text', classNameText), children: "Powered by" }), jsx(SvgDynamicLogo, { className: classNames('powered-by-dynamic__logo', classNameLogo) })] }));
    if (asFooter)
        return jsx(DynamicWidgetFooter, { children: content });
    return content;
};

export { PoweredByDynamic };
