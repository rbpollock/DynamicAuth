'use strict';

var process$1 = require('./shim/process.cjs');

if (typeof window !== 'undefined') {
    window.global = globalThis;
    if (!window.process && typeof process === 'undefined') {
        Object.assign(window, { process: process$1.process });
    }
}
