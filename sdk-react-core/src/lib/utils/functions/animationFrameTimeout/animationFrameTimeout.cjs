'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const animationFrameTimeout = (callback, duration) => {
    const startTime = performance.now();
    const canceller = { id: -1 };
    const tick = () => {
        canceller.id = requestAnimationFrame((now) => {
            if (now - startTime > duration) {
                callback();
            }
            else {
                tick();
            }
        });
    };
    tick();
    return canceller;
};
const clearAnimationFrameTimeout = (canceller) => {
    if (canceller.id)
        cancelAnimationFrame(canceller.id);
};

exports.animationFrameTimeout = animationFrameTimeout;
exports.clearAnimationFrameTimeout = clearAnimationFrameTimeout;
