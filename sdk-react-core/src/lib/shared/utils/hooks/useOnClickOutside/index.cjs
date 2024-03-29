'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useOnClickOutside = (ref, handler) => {
    React.useEffect(() => {
        const listener = (event) => {
            event.stopPropagation();
            const realTarget = event.composedPath().shift();
            if (!ref.current ||
                ref.current.contains(event.currentTarget) ||
                ref.current.contains(realTarget)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('touchstart', listener);
        document.addEventListener('click', listener);
        return () => {
            document.removeEventListener('touchstart', listener);
            document.removeEventListener('click', listener);
        };
    }, [ref, handler]);
};

exports.useOnClickOutside = useOnClickOutside;
