import { jsx } from 'react/jsx-runtime';
import { createContext, useContext, useState, useMemo } from 'react';

const AccessDeniedContext = createContext(undefined);
const AccessDeniedContextProvider = ({ children, }) => {
    const [deniedAddress, setDeniedAddress] = useState('');
    const [deniedOauthProvider, setDeniedOauthProvider] = useState(undefined);
    const value = useMemo(() => ({
        deniedAddress,
        deniedOauthProvider,
        setDeniedAddress,
        setDeniedOauthProvider,
    }), [deniedAddress, deniedOauthProvider]);
    return (jsx(AccessDeniedContext.Provider, { value: value, children: children }));
};
const useAccessDeniedContext = () => {
    const context = useContext(AccessDeniedContext);
    if (context === undefined) {
        throw new Error('usage of useAccessDeniedContext not wrapped in `AccessDeniedContextProvider`.');
    }
    return context;
};

export { AccessDeniedContext, AccessDeniedContextProvider, useAccessDeniedContext };
