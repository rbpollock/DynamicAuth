'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const TurnkeyErrorMap = {
    0: 'Operation was canceled.',
    16: 'Invalid Passkey signature. Select the passkey for this account and device.',
    3: 'You reached the limit of passkeys for this account.',
    7: 'The code is invalid or expired.',
};
const DOMExceptionErrorMap = {
    NotAllowedError: 'Request Cancelled. Select a device or password manager to set up a passkey.',
};
const getProperErrorMessage = (originalError) => {
    var _a;
    if (typeof originalError === 'string') {
        return originalError;
    }
    if ('reason' in originalError) {
        return originalError.reason;
    }
    if (originalError instanceof DOMException) {
        return DOMExceptionErrorMap[originalError.name] || 'Something went wrong';
    }
    if ('cause' in originalError && ((_a = originalError === null || originalError === void 0 ? void 0 : originalError.cause) === null || _a === void 0 ? void 0 : _a.code) !== undefined) {
        return TurnkeyErrorMap[originalError.cause.code];
    }
    if ('code' in originalError && originalError.code) {
        return TurnkeyErrorMap[originalError.code];
    }
    return 'Something went wrong';
};

exports.getProperErrorMessage = getProperErrorMessage;
