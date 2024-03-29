'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isConnectOnly = (user, authMode) => {
    // we need to check for user because of connect-only (authenticated)
    // and linking a new wallet in mutliwallet
    const linking = user !== undefined;
    const connectOnly = authMode === 'connect-only' && !linking;
    return connectOnly;
};

exports.isConnectOnly = isConnectOnly;
