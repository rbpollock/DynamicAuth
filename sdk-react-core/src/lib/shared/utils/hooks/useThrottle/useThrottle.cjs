'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/**
 * useThrottle hook to throttle a callback function.
 *
 * @param callback - The callback function to be throttled. It must return void.
 * @param delay - The time in milliseconds to wait before the next call.
 * @returns A throttled version of the callback function.
 */
const useThrottle = (callback, delay) => {
    const isThrottled = React.useRef(false);
    const savedCallback = React.useRef(callback);
    // Remember the latest callback if it changes.
    savedCallback.current = callback;
    return React.useCallback((...args) => {
        if (!isThrottled.current) {
            savedCallback.current(...args);
            isThrottled.current = true;
            // Set the throttle off after the delay
            setTimeout(() => (isThrottled.current = false), delay);
        }
    }, [delay]);
};

exports.useThrottle = useThrottle;
