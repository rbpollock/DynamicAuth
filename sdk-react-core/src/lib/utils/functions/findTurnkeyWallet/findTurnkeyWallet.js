const findTurnkeyWallet = (walletOptions) => walletOptions === null || walletOptions === void 0 ? void 0 : walletOptions.find(({ key }) => key.startsWith('turnkey'));

export { findTurnkeyWallet };
