'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useEventListener = (eventName, handler) => {
    // Create a ref that stores handler
    const savedHandler = React.useRef(handler);
    savedHandler.current = handler;
    React.useEffect(() => {
        // Define the listening target
        const targetElement = window;
        if (!(targetElement && targetElement.addEventListener))
            return;
        // Create event listener that calls handler function stored in ref
        const listener = (event) => savedHandler.current(event);
        targetElement.addEventListener(eventName, listener);
        // Remove event listener on cleanup
        return () => {
            targetElement.removeEventListener(eventName, listener);
        };
    }, [eventName, handler]);
};

exports.useEventListener = useEventListener;
