import { jsx } from 'react/jsx-runtime';
import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { useViewContext } from '../ViewContext/ViewContext.js';

const CaptchaTokenLocalStorageKey = 'dynamic-captcha-token';
const CaptchaContext = createContext(undefined);
const CaptchaContextProvider = ({ children, }) => {
    const { setView } = useViewContext();
    const [captchaToken, setCaptchaToken] = useState(undefined);
    const [captchaAuthState, setCaptchaAuthState] = useState();
    const setCaptchaTokenInLS = useCallback((token) => localStorage.setItem(CaptchaTokenLocalStorageKey, token), []);
    const engageCaptcha = useCallback(({ authMethod, onCaptchaSuccess, }) => {
        setCaptchaAuthState({ authMethod, onCaptchaSuccess });
        setView('captcha');
    }, [setView, setCaptchaAuthState]);
    const getCaptchaToken = useCallback(() => {
        var _a;
        return (_a = captchaToken !== null && captchaToken !== void 0 ? captchaToken : localStorage.getItem(CaptchaTokenLocalStorageKey)) !== null && _a !== void 0 ? _a : undefined;
    }, [captchaToken]);
    const value = useMemo(() => ({
        captchaAuthState,
        captchaToken,
        engageCaptcha,
        getCaptchaToken,
        setCaptchaAuthState,
        setCaptchaToken,
        setCaptchaTokenInLS,
    }), [
        captchaAuthState,
        captchaToken,
        engageCaptcha,
        setCaptchaAuthState,
        setCaptchaTokenInLS,
        getCaptchaToken,
    ]);
    return (jsx(CaptchaContext.Provider, { value: value, children: children }));
};
const useCaptchaContext = () => {
    const context = useContext(CaptchaContext);
    if (context === undefined) {
        throw new Error('usage of useCaptchaContext not wrapped in `CaptchaContextProvider`.');
    }
    return context;
};

export { CaptchaContext, CaptchaContextProvider, CaptchaTokenLocalStorageKey, useCaptchaContext };
