import { useRef, useEffect } from 'react';

const useEventListener = (eventName, handler) => {
    // Create a ref that stores handler
    const savedHandler = useRef(handler);
    savedHandler.current = handler;
    useEffect(() => {
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

export { useEventListener };
