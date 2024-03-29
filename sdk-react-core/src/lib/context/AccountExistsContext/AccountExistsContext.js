import { jsx } from 'react/jsx-runtime';
import { createContext, useContext, useState, useMemo } from 'react';

const AccountExistsContext = createContext(undefined);
const AccountExistsContextProvider = ({ children, }) => {
    const [existentAccountData, setExistentAccountData] = useState();
    const value = useMemo(() => ({
        existentAccountData,
        setExistentAccountData,
    }), [existentAccountData, setExistentAccountData]);
    return (jsx(AccountExistsContext.Provider, { value: value, children: children }));
};
const useAccountExistsContext = () => {
    const context = useContext(AccountExistsContext);
    if (context === undefined) {
        throw new Error('usage of useAccountExistsContext not wrapped in `AccountExistsContextProvider`.');
    }
    return context;
};

export { AccountExistsContext, AccountExistsContextProvider, useAccountExistsContext };
