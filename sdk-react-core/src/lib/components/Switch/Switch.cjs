'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const Switch = ({ disabled = false, firstButton, secondButton, thirdButton, }) => (jsxRuntime.jsxs("div", { className: classNames.classNames('switch__container', { disabled: disabled }), children: [jsxRuntime.jsx("button", { disabled: disabled, className: classNames.classNames('button', { active: firstButton.active }), onClick: firstButton.handleButtonClick, children: firstButton.name }), jsxRuntime.jsx("button", { disabled: disabled, className: classNames.classNames('button', { active: secondButton.active }), onClick: secondButton.handleButtonClick, children: secondButton.name }), thirdButton && (jsxRuntime.jsx("button", { disabled: disabled, className: classNames.classNames('button', { active: thirdButton.active }), onClick: thirdButton.handleButtonClick, children: thirdButton.name }))] }));

exports.Switch = Switch;
