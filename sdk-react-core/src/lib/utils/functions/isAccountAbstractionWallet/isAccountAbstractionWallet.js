import { isAccountAbstractionConnector } from '@dynamic-labs/wallet-connector-core';

const isAccountAbstractionWallet = (wallet) => {
    if (!wallet ||
        wallet === undefined ||
        wallet === null ||
        typeof wallet !== 'object' ||
        !('connector' in wallet)) {
        return false;
    }
    return isAccountAbstractionConnector(wallet.connector);
};

export { isAccountAbstractionWallet };
