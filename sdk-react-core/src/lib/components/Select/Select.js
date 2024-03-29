import { __rest } from '../../../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState, useLayoutEffect } from 'react';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../context/ViewContext/ViewContext.js';
import { ReactComponent as SvgArrowDown } from '../../shared/assets/arrow-down.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { Icon } from '../Icon/Icon.js';
import { Typography } from '../Typography/Typography.js';
import { getDisplayValue } from './utils/getDisplayValue/getDisplayValue.js';

const Select = (_a) => {
    var { children, className = '', id, label, value, error = false, selectDataTestId, message } = _a, selectProps = __rest(_a, ["children", "className", "id", "label", "value", "error", "selectDataTestId", "message"]);
    const selectRef = useRef(null);
    const [displayValue, setDisplayValue] = useState();
    useLayoutEffect(() => {
        if (!value)
            return;
        const selectElement = selectRef.current;
        setDisplayValue(getDisplayValue(selectElement));
    }, [value, setDisplayValue]);
    return (jsxs("div", { className: 'select__field', children: [jsxs("div", { className: classNames(className, 'select__container'), children: [jsxs("label", { className: classNames('select__body', {
                            select__error: error,
                            select__has_value: Boolean(displayValue),
                        }), htmlFor: id, children: [jsx("span", { className: 'select__value', children: displayValue || jsx("span", { children: "\u00A0" }) }), jsx("span", { className: 'select__label', children: label }), jsx("div", { className: 'select__control_icon', children: jsx(Icon, { size: 'medium', children: jsx(SvgArrowDown, {}) }) })] }), jsx("select", Object.assign({}, selectProps, { "data-testid": selectDataTestId, ref: selectRef, id: id, value: value, placeholder: label, className: 'select', children: children }))] }), message && (jsx(Typography, { className: classNames('select__message', {
                    select__message__error: error,
                }), variant: 'body_mini', children: message }))] }));
};

export { Select };
