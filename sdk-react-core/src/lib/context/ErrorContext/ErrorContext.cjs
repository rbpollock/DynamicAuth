'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var useInternalDynamicContext = require('../DynamicContext/useInternalDynamicContext.cjs');

const errorMessageMap = {
    '-32000': 'Message signature denied',
    '-32002': 'Please unlock your wallet extension and try again.',
    '-32602': 'Invalid parameters. Please try again.',
    '-32603': 'There was an internal error. Please try again.',
    0: 'Message signature denied.',
    4001: 'Message signature denied.',
    5001: 'Message signature denied.',
    5002: 'Message signature denied.',
    account_already_linked_to_different_profile: 'This social account is already linked to a different profile.',
    connection_rejected: 'Connection rejected. Please try again.',
    metamask_timeout: 'Whoops. Looks like something went wrong. Please try again.',
    'missing-nonce': 'Something went wrong. Please try again.',
    'missing-public-address': 'Connection cancelled. Please try again',
    oauth_window_blocked: 'To connect to your social account, enable popups in your browser and then try again.',
    oauth_window_timeout: 'Session time out. Please try again.',
    too_many_email_verification_attempts: 'Too many email verification attempts, please try again later',
    'user-cancelled': '',
    wallet_not_deployed: 'Your smart wallet has not been deployed.',
    wrong_email_verification_token: 'The code you entered is incorrect. Please try again.',
};
const ErrorContext = React.createContext(undefined);
const ErrorContextProvider = ({ children }) => {
    const { showAuthFlow } = useInternalDynamicContext.useInternalDynamicContext();
    const [error, setError] = React.useState(undefined);
    const setErrorMessage = React.useCallback((status) => {
        var _a;
        setError((_a = errorMessageMap[status]) !== null && _a !== void 0 ? _a : 'Something went wrong. Please try again.');
    }, []);
    React.useEffect(() => {
        setError(undefined);
    }, [showAuthFlow]);
    const value = React.useMemo(() => ({
        error,
        setError,
        setErrorMessage,
    }), [error, setErrorMessage]);
    return (jsxRuntime.jsx(ErrorContext.Provider, { value: value, children: children }));
};
const useErrorContext = () => {
    const context = React.useContext(ErrorContext);
    if (context === undefined) {
        throw new Error('usage of useErrorContext not wrapped in `ErrorContextProvider`.');
    }
    return context;
};

exports.ErrorContext = ErrorContext;
exports.ErrorContextProvider = ErrorContextProvider;
exports.useErrorContext = useErrorContext;
