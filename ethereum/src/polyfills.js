import { Buffer } from 'buffer/index.js';

/* eslint-disable */
/**
 * @walletconnect/client and @walletconnect/qrcode-modal use `global` and `Buffer`, respectively.
 * This issue is captured here: https://github.com/WalletConnect/walletconnect-monorepo/issues/341
 * Here are some GH issues of others facing the same problem:
 *   * https://github.com/WalletConnect/walletconnect-monorepo/issues/734
 *   * https://github.com/WalletConnect/walletconnect-monorepo/issues/748
 */
if (typeof window !== 'undefined') {
    window.global = globalThis;
    Object.assign(window, { Buffer });
}
