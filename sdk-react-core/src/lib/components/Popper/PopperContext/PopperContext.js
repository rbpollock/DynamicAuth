import { jsx } from 'react/jsx-runtime';
import { createContext, useContext, useRef } from 'react';

const popperContext = createContext(undefined);
const PopperProvider = ({ children }) => {
    const { Provider } = popperContext;
    const containerRef = useRef(null);
    return (jsx(Provider, { value: {
            containerRef,
        }, children: jsx("div", { ref: containerRef, style: { position: 'relative' }, children: children }) }));
};
const usePopper = () => {
    const context = useContext(popperContext);
    if (!context) {
        throw new Error('To use popper, use the PopperProvider above in the dom hierarchy');
    }
    return context;
};

export { PopperProvider, popperContext, usePopper };
