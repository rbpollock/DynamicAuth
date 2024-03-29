'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

const AccountExistsContext = React.createContext(undefined);
const AccountExistsContextProvider = ({ children, }) => {
    const [existentAccountData, setExistentAccountData] = React.useState();
    const value = React.useMemo(() => ({
        existentAccountData,
        setExistentAccountData,
    }), [existentAccountData, setExistentAccountData]);
    return (jsxRuntime.jsx(AccountExistsContext.Provider, { value: value, children: children }));
};
const useAccountExistsContext = () => {
    const context = React.useContext(AccountExistsContext);
    if (context === undefined) {
        throw new Error('usage of useAccountExistsContext not wrapped in `AccountExistsContextProvider`.');
    }
    return context;
};

exports.AccountExistsContext = AccountExistsContext;
exports.AccountExistsContextProvider = AccountExistsContextProvider;
exports.useAccountExistsContext = useAccountExistsContext;
