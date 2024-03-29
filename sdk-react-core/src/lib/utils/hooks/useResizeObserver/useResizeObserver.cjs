'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useResizeObserver = (ref, callback) => {
    const [rect, setRect] = React.useState();
    const onResize = React.useCallback((entries) => {
        if (!Array.isArray(entries)) {
            return;
        }
        const [entry] = entries;
        setRect(entry.contentRect);
        if (callback) {
            callback(entry.contentRect);
        }
    }, [callback, setRect]);
    React.useLayoutEffect(() => {
        if (!ref.current) {
            return;
        }
        let observer = new ResizeObserver(onResize);
        observer.observe(ref.current);
        return () => {
            observer === null || observer === void 0 ? void 0 : observer.disconnect();
            observer = null;
        };
    }, [ref]);
    return [rect];
};

exports.useResizeObserver = useResizeObserver;
