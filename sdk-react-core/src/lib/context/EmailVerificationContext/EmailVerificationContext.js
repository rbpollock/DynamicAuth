import { jsx } from 'react/jsx-runtime';
import { createContext, useContext, useState, useMemo } from 'react';

const EmailVerificationContext = createContext(undefined);
// Context used to hold verificationUUID & email between views.
const EmailVerificationContextProvider = ({ children, }) => {
    const [email, setEmail] = useState(undefined);
    const [verificationUUID, setVerificationUUID] = useState(undefined);
    const value = useMemo(() => ({
        email,
        setEmail,
        setVerificationUUID,
        verificationUUID,
    }), [email, verificationUUID]);
    return (jsx(EmailVerificationContext.Provider, { value: value, children: children }));
};
const useEmailVerificationContext = () => {
    const context = useContext(EmailVerificationContext);
    if (context === undefined) {
        throw new Error('usage of useEmailVerificationContext not wrapped in `EmailVerificationContextProvider`.');
    }
    return context;
};

export { EmailVerificationContext, EmailVerificationContextProvider, useEmailVerificationContext };
