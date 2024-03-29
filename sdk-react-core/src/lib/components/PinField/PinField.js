import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { PinInput } from '../PinInput/PinInput.js';

const isComplete = (values) => values.every((value) => value);
const PinField = ({ handleComplete, initialValue, inputMode, isLoading, isValidated, pattern, type = 'number', hasError, onChange, }) => {
    const [values, setValues] = useState(initialValue);
    const handleOnChange = (values) => {
        const value = values.join('');
        setValues(values);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
        if (isComplete(values)) {
            handleComplete(value);
        }
    };
    return (jsx("div", { className: 'pin-field__container', children: values.map((value, index) => (jsx(PinInput, { values: values, inputIndex: index, value: value, onChange: handleOnChange, disabled: isLoading, inputMode: inputMode, isValidated: isValidated, pattern: pattern, type: type, autoFocus: true, hasError: hasError }, `pin_input_${index}`))) }));
};

export { PinField };
