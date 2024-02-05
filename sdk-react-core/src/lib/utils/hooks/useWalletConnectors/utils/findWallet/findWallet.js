import { isSameWalletName } from '../../../../functions/isSameWalletName/isSameWalletName.js';

const findWallet = (account, walletOptions) => walletOptions.find((wallet) => account.walletName && isSameWalletName(wallet.name, account.walletName));

export { findWallet };
