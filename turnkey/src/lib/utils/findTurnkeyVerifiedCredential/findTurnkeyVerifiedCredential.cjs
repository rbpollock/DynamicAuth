'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const findTurnkeyVerifiedCredential = (verifiedCredentials) => verifiedCredentials === null || verifiedCredentials === void 0 ? void 0 : verifiedCredentials.find(({ walletName }) => walletName === null || walletName === void 0 ? void 0 : walletName.startsWith('turnkey'));

exports.findTurnkeyVerifiedCredential = findTurnkeyVerifiedCredential;
