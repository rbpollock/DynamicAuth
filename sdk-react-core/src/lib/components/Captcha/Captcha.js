import { jsx } from 'react/jsx-runtime';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';

const Captcha = ({ handleSuccess }) => {
    var _a;
    const { projectSettings } = useInternalDynamicContext();
    if (!((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.security.hCaptcha) === null || _a === void 0 ? void 0 : _a.siteKey))
        return null;
    return (jsx("form", { "data-testid": 'captcha-form', children: jsx(HCaptcha, { sitekey: projectSettings.security.hCaptcha.siteKey, onVerify: (token) => handleSuccess(token), theme: document.body.dataset.dynamicTheme }) }));
};

export { Captcha };
