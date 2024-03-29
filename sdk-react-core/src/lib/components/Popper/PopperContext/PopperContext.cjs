'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

const popperContext = React.createContext(undefined);
const PopperProvider = ({ children }) => {
    const { Provider } = popperContext;
    const containerRef = React.useRef(null);
    return (jsxRuntime.jsx(Provider, { value: {
            containerRef,
        }, children: jsxRuntime.jsx("div", { ref: containerRef, style: { position: 'relative' }, children: children }) }));
};
const usePopper = () => {
    const context = React.useContext(popperContext);
    if (!context) {
        throw new Error('To use popper, use the PopperProvider above in the dom hierarchy');
    }
    return context;
};

exports.PopperProvider = PopperProvider;
exports.popperContext = popperContext;
exports.usePopper = usePopper;
