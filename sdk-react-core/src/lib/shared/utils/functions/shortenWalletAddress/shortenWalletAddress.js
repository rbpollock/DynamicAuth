const shortenWalletAddress = (walletAddress, first = 6, last = 4) => {
    if (!walletAddress)
        return '';
    return walletAddress.replace(walletAddress.substring(first, Number(walletAddress.length) - last), '...');
};

export { shortenWalletAddress };
