import { __rest } from '../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const Typography = (_a) => {
    var { as: Tag = 'p', variant, weight, color, transform, className = '', truncate = false } = _a, props = __rest(_a, ["as", "variant", "weight", "color", "transform", "className", "truncate"]);
    const variantClassNameMap = {
        body_mini: 'typography--body-mini',
        body_normal: 'typography--body-normal',
        body_small: 'typography--body-small',
        button_primary: 'typography--button-primary',
        button_secondary: 'typography--button-secondary',
        button_tertiary: 'typography--button-tertiary',
        numbers_big: 'typography--numbers-big',
        numbers_medium: 'typography--numbers-medium',
        title: 'typography--title',
    };
    const weightClassNameMap = {
        bold: 'typography--bold',
        medium: 'typography--medium',
        regular: 'typography--regular',
    };
    const colorClassNameMap = {
        'brand-primary': 'typography--brand-primary',
        'error-1': 'typography--dynamic-error-1',
        'error-2': 'typography--dynamic-error-2',
        'green-1': 'typography--connection-green-1',
        inherit: 'typography--inherit',
        link: 'typography--link',
        primary: 'typography--primary',
        secondary: 'typography--secondary',
        tertiary: 'typography--tertiary',
        tooltip: 'typography--tooltip',
    };
    const transformClassNameMap = {
        uppercase: 'typography--uppercase',
    };
    const effectiveClassName = classNames('typography', variant ? variantClassNameMap[variant] : '', weight ? weightClassNameMap[weight] : '', color ? colorClassNameMap[color] : '', transform ? transformClassNameMap[transform] : '', {
        'typography--truncate': truncate,
    }, className);
    return jsx(Tag, Object.assign({ className: effectiveClassName }, props));
};

export { Typography };
