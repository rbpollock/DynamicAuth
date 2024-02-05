import { jsx } from 'react/jsx-runtime';
import { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react';

const ViewContext = createContext(undefined);
const ViewContextProvider = ({ children, initialView = 'wallet-list', internalEvents }) => {
    const [_view, setView] = useState(null);
    const view = _view || initialView;
    const goToInitialView = useCallback(() => {
        setView(null);
    }, [initialView]);
    useEffect(() => {
        if (!internalEvents) {
            return;
        }
        const handleInternalLogoutEvent = () => {
            goToInitialView();
        };
        const events = internalEvents.current;
        events.on('logout', handleInternalLogoutEvent);
        return () => {
            events.off('logout', handleInternalLogoutEvent);
        };
    }, [goToInitialView, internalEvents]);
    const value = useMemo(() => ({
        goToInitialView,
        setView: setView,
        view,
    }), [view, goToInitialView]);
    return jsx(ViewContext.Provider, { value: value, children: children });
};
const useViewContext = () => {
    const context = useContext(ViewContext);
    if (context === undefined) {
        throw new Error('usage of useViewContext not wrapped in `ViewContextProvider`.');
    }
    return context;
};

export { ViewContext, ViewContextProvider, useViewContext };
