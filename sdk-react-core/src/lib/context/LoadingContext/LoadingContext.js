import { jsx } from 'react/jsx-runtime';
import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useInternalDynamicContext } from '../DynamicContext/useInternalDynamicContext.js';

const LoadingContext = createContext(undefined);
const LoadingContextProvider = ({ children, }) => {
    const { internalEvents } = useInternalDynamicContext();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const events = internalEvents === null || internalEvents === void 0 ? void 0 : internalEvents.current;
        if (!events) {
            return;
        }
        const handleInternalLogoutEvent = () => {
            setLoading(false);
        };
        events.on('logout', handleInternalLogoutEvent);
        return () => {
            events.off('logout', handleInternalLogoutEvent);
        };
    }, [internalEvents]);
    const value = useMemo(() => ({
        loading,
        setLoading,
    }), [loading]);
    return (jsx(LoadingContext.Provider, { value: value, children: children }));
};
const useLoadingContext = () => {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error('usage of useLoadingContext not wrapped in `LoadingContextProvider`.');
    }
    return context;
};

export { LoadingContext, LoadingContextProvider, useLoadingContext };
