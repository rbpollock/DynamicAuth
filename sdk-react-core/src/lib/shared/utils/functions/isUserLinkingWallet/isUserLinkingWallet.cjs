'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isUserLinkingWallet = (user, view, isMockedSDK) => (user === null || user === void 0 ? void 0 : user.verifiedCredentials) !== undefined &&
    (view === 'wallet-list' ||
        view === 'login-with-email-or-wallet-full-wallet-list') &&
    // Mocked SDK is used in the dashboard and the user is
    // the actual user that the user logged in to the dashboard
    !isMockedSDK;

exports.isUserLinkingWallet = isUserLinkingWallet;
