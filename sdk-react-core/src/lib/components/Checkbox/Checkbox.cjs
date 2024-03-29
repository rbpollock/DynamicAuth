'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
require('react');
var check = require('../../shared/assets/check.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const Checkbox = ({ ariaLabel, checked, className = '', defaultChecked, disabled, id, name, onChange, value, }) => (jsxRuntime.jsxs("div", { className: classNames.classNames('checkbox__container', className), children: [jsxRuntime.jsx("input", { type: 'checkbox', id: id, "aria-label": ariaLabel, "aria-checked": checked, className: 'checkbox--hidden', value: value, checked: checked, name: name, disabled: disabled, defaultChecked: defaultChecked, onChange: (e) => Boolean(onChange) && (onChange === null || onChange === void 0 ? void 0 : onChange(e, e.currentTarget.value)), "data-testid": 'input-checkbox' }), jsxRuntime.jsx("div", { className: 'checkbox--visible', children: jsxRuntime.jsx(check.ReactComponent, { className: 'checkbox__icon' }) })] }));

exports.Checkbox = Checkbox;
