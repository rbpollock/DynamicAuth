'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Checkbox = require('../../Checkbox/Checkbox.cjs');
var Typography = require('../../Typography/Typography.cjs');

const AuthModeSwitch = ({ authMode, setAuthMode, }) => (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { className: 'auth-mode-switch__container', children: [jsxRuntime.jsx(Checkbox.Checkbox, { checked: authMode === 'connect-and-sign', onChange: () => setAuthMode('connect-and-sign'), id: 'connect-and-sign' }), jsxRuntime.jsx("label", { htmlFor: 'connect-and-sign', children: jsxRuntime.jsx(Typography.Typography, { color: 'primary', weight: 'regular', children: "Connect and sign" }) })] }), jsxRuntime.jsxs("div", { className: 'auth-mode-switch__container', children: [jsxRuntime.jsx(Checkbox.Checkbox, { checked: authMode === 'connect-only', onChange: () => setAuthMode('connect-only'), id: 'connect-only' }), jsxRuntime.jsx("label", { htmlFor: 'connect-only', children: jsxRuntime.jsx(Typography.Typography, { color: 'primary', weight: 'regular', children: "Connect only" }) })] })] }));

exports.AuthModeSwitch = AuthModeSwitch;
