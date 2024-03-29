'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var PinInput = require('../PinInput/PinInput.cjs');

const isComplete = (values) => values.every((value) => value);
const PinField = ({ handleComplete, initialValue, inputMode, isLoading, isValidated, pattern, type = 'number', hasError, onChange, }) => {
    const [values, setValues] = React.useState(initialValue);
    const handleOnChange = (values) => {
        const value = values.join('');
        setValues(values);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
        if (isComplete(values)) {
            handleComplete(value);
        }
    };
    return (jsxRuntime.jsx("div", { className: 'pin-field__container', children: values.map((value, index) => (jsxRuntime.jsx(PinInput.PinInput, { values: values, inputIndex: index, value: value, onChange: handleOnChange, disabled: isLoading, inputMode: inputMode, isValidated: isValidated, pattern: pattern, type: type, autoFocus: true, hasError: hasError }, `pin_input_${index}`))) }));
};

exports.PinField = PinField;
