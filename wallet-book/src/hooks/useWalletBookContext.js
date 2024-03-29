import { useContext } from 'react';
import '../helpers/logger.js';
import '@dynamic-labs/utils';
import '../schemas/walletConnectSourceSchema.js';
import '../schemas/walletBookSchema.js';
import '../schemas/walletSchema.js';
import { WalletBookContext } from '../components/WalletBookContext.js';

const useWalletBookContext = () => {
    const context = useContext(WalletBookContext);
    if (context === undefined) {
        throw new Error('useWalletBookContext must be used within a WalletBookContextProvider');
    }
    return context;
};

export { useWalletBookContext };
