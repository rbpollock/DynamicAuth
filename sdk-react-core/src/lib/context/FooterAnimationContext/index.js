import { jsx } from 'react/jsx-runtime';
import { createContext, useState, useEffect, useMemo, useContext } from 'react';
import { useViewContext } from '../ViewContext/ViewContext.js';

const FooterAnimationContext = createContext(undefined);
const FooterAnimationContextProvider = ({ children, }) => {
    const { view } = useViewContext();
    const [isFooterExpanded, setIsFooterExpanded] = useState(false);
    useEffect(() => {
        setIsFooterExpanded(false);
    }, [view]);
    const value = useMemo(() => ({
        isFooterExpanded,
        setIsFooterExpanded,
    }), [isFooterExpanded]);
    return (jsx(FooterAnimationContext.Provider, { value: value, children: jsx("div", { children: children }) }));
};
const useFooterAnimationContext = () => {
    const context = useContext(FooterAnimationContext);
    if (!context)
        throw new Error('Can only call useFooterAnimationContext inside FooterAnimationContextProvider');
    return context;
};

export { FooterAnimationContext, FooterAnimationContextProvider, useFooterAnimationContext };
