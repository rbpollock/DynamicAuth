import { jsxs, jsx } from 'react/jsx-runtime';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgCheck } from '../../shared/assets/check.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const Checkbox = ({ ariaLabel, checked, className = '', defaultChecked, disabled, id, name, onChange, value, }) => (jsxs("div", { className: classNames('checkbox__container', className), children: [jsx("input", { type: 'checkbox', id: id, "aria-label": ariaLabel, "aria-checked": checked, className: 'checkbox--hidden', value: value, checked: checked, name: name, disabled: disabled, defaultChecked: defaultChecked, onChange: (e) => Boolean(onChange) && (onChange === null || onChange === void 0 ? void 0 : onChange(e, e.currentTarget.value)), "data-testid": 'input-checkbox' }), jsx("div", { className: 'checkbox--visible', children: jsx(SvgCheck, { className: 'checkbox__icon' }) })] }));

export { Checkbox };
