'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const OptionsSwitcher = ({ onChange, value, options, rootClassName, activeButtonClassName, buttonClassName, }) => {
    const isActive = (_value) => _value !== undefined && _value === value;
    const rootRef = React.useRef(null);
    const [railCSSLeft, setRailCSSLeft] = React.useState(0);
    const getOptionDisplayValue = (option) => option.label || option.key;
    // Updates .options-switcher__active-rail position
    React.useLayoutEffect(() => {
        if (!rootRef.current)
            return;
        const activeOption = options === null || options === void 0 ? void 0 : options.find(({ key }) => key === value);
        if (!activeOption)
            return;
        const activeOptionLabel = getOptionDisplayValue(activeOption);
        const $activeOption = rootRef.current.querySelector(`[data-options-switcher-label=${activeOptionLabel}]`);
        if (!$activeOption)
            return;
        const parentBouding = rootRef.current.getBoundingClientRect();
        const activeOptionBouding = $activeOption.getBoundingClientRect();
        setRailCSSLeft(activeOptionBouding.x - parentBouding.x);
    }, [options, value]);
    return (jsxRuntime.jsxs("div", { ref: rootRef, "data-testid": 'OptionsSwitcher', className: classNames.classNames('options-switcher', rootClassName), children: [jsxRuntime.jsx("div", { className: 'options-switcher__active-rail', style: { left: railCSSLeft, width: `${100 / ((options === null || options === void 0 ? void 0 : options.length) || 1)}%` } }), options === null || options === void 0 ? void 0 : options.map((option) => (jsxRuntime.jsx("button", { type: 'button', className: classNames.classNames('options-switcher__button', buttonClassName, {
                    'options-switcher__button--active': isActive(option.key),
                }, isActive(option.key) && activeButtonClassName), onClick: () => onChange === null || onChange === void 0 ? void 0 : onChange(option.key), "data-options-switcher-label": getOptionDisplayValue(option), children: getOptionDisplayValue(option) }, option.key)))] }));
};

exports.OptionsSwitcher = OptionsSwitcher;
