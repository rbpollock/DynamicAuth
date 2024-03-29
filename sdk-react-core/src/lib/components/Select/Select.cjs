'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
var arrowDown = require('../../shared/assets/arrow-down.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var Icon = require('../Icon/Icon.cjs');
var Typography = require('../Typography/Typography.cjs');
var getDisplayValue = require('./utils/getDisplayValue/getDisplayValue.cjs');

const Select = (_a) => {
    var { children, className = '', id, label, value, error = false, selectDataTestId, message } = _a, selectProps = _tslib.__rest(_a, ["children", "className", "id", "label", "value", "error", "selectDataTestId", "message"]);
    const selectRef = React.useRef(null);
    const [displayValue, setDisplayValue] = React.useState();
    React.useLayoutEffect(() => {
        if (!value)
            return;
        const selectElement = selectRef.current;
        setDisplayValue(getDisplayValue.getDisplayValue(selectElement));
    }, [value, setDisplayValue]);
    return (jsxRuntime.jsxs("div", { className: 'select__field', children: [jsxRuntime.jsxs("div", { className: classNames.classNames(className, 'select__container'), children: [jsxRuntime.jsxs("label", { className: classNames.classNames('select__body', {
                            select__error: error,
                            select__has_value: Boolean(displayValue),
                        }), htmlFor: id, children: [jsxRuntime.jsx("span", { className: 'select__value', children: displayValue || jsxRuntime.jsx("span", { children: "\u00A0" }) }), jsxRuntime.jsx("span", { className: 'select__label', children: label }), jsxRuntime.jsx("div", { className: 'select__control_icon', children: jsxRuntime.jsx(Icon.Icon, { size: 'medium', children: jsxRuntime.jsx(arrowDown.ReactComponent, {}) }) })] }), jsxRuntime.jsx("select", Object.assign({}, selectProps, { "data-testid": selectDataTestId, ref: selectRef, id: id, value: value, placeholder: label, className: 'select', children: children }))] }), message && (jsxRuntime.jsx(Typography.Typography, { className: classNames.classNames('select__message', {
                    select__message__error: error,
                }), variant: 'body_mini', children: message }))] }));
};

exports.Select = Select;
