import { DynamicError } from './DynamicError.js';

class EmailVerificationError extends DynamicError {
    constructor(code) {
        super('EmailVerificationError', code);
    }
}

export { EmailVerificationError };
