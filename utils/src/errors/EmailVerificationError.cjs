'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var DynamicError = require('./DynamicError.cjs');

class EmailVerificationError extends DynamicError.DynamicError {
    constructor(code) {
        super('EmailVerificationError', code);
    }
}

exports.EmailVerificationError = EmailVerificationError;
