'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var HCaptcha = require('@hcaptcha/react-hcaptcha');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var HCaptcha__default = /*#__PURE__*/_interopDefaultLegacy(HCaptcha);

const Captcha = ({ handleSuccess }) => {
    var _a;
    const { projectSettings } = useInternalDynamicContext.useInternalDynamicContext();
    if (!((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.security.hCaptcha) === null || _a === void 0 ? void 0 : _a.siteKey))
        return null;
    return (jsxRuntime.jsx("form", { "data-testid": 'captcha-form', children: jsxRuntime.jsx(HCaptcha__default["default"], { sitekey: projectSettings.security.hCaptcha.siteKey, onVerify: (token) => handleSuccess(token), theme: document.body.dataset.dynamicTheme }) }));
};

exports.Captcha = Captcha;
