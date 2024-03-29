'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ViewContext = require('../ViewContext/ViewContext.cjs');

const FooterAnimationContext = React.createContext(undefined);
const FooterAnimationContextProvider = ({ children, }) => {
    const { view } = ViewContext.useViewContext();
    const [isFooterExpanded, setIsFooterExpanded] = React.useState(false);
    React.useEffect(() => {
        setIsFooterExpanded(false);
    }, [view]);
    const value = React.useMemo(() => ({
        isFooterExpanded,
        setIsFooterExpanded,
    }), [isFooterExpanded]);
    return (jsxRuntime.jsx(FooterAnimationContext.Provider, { value: value, children: jsxRuntime.jsx("div", { children: children }) }));
};
const useFooterAnimationContext = () => {
    const context = React.useContext(FooterAnimationContext);
    if (!context)
        throw new Error('Can only call useFooterAnimationContext inside FooterAnimationContextProvider');
    return context;
};

exports.FooterAnimationContext = FooterAnimationContext;
exports.FooterAnimationContextProvider = FooterAnimationContextProvider;
exports.useFooterAnimationContext = useFooterAnimationContext;
