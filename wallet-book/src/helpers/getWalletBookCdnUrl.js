/* eslint-disable arrow-body-style */
// This method needs to be wrapped correctly to avoid bundler issues
// that may update process.env variable via custom configs in customers apps
const getWalletBookCdnUrl = () => {
    var _a, _b, _c;
    return ((_c = (_b = (_a = process.env['WALLET_BOOK_CDN_URL']) !== null && _a !== void 0 ? _a : process.env['NEXT_PUBLIC_WALLET_BOOK_CDN_URL']) !== null && _b !== void 0 ? _b : process.env['REACT_APP_WALLET_BOOK_CDN_URL']) !== null && _c !== void 0 ? _c : 'https://dynamic-static-assets.com/wallet-book/v1/stable/wallet-book.json');
};

export { getWalletBookCdnUrl };
