import { __awaiter } from '../../_virtual/_tslib.js';
import { useState, useEffect } from 'react';
import { retryableFn } from '@dynamic-labs/utils';
import '../schemas/walletConnectSourceSchema.js';
import { walletBookSchema } from '../schemas/walletBookSchema.js';
import '../schemas/walletSchema.js';
import { logger } from '../helpers/logger.js';
import { getWalletBookCdnUrl } from '../helpers/getWalletBookCdnUrl.js';
import walletBookFallbacks from '../../wallet-book-fallbacks.js';

const useWalletBookCdn = () => {
    const [walletBook, setWalletBook] = useState({});
    useEffect(() => {
        const fetchWalletBook = () => __awaiter(void 0, void 0, void 0, function* () {
            const url = getWalletBookCdnUrl();
            const fn = () => __awaiter(void 0, void 0, void 0, function* () {
                const res = yield fetch(url, { mode: 'cors' });
                if (res.ok) {
                    const json = yield res.json();
                    try {
                        const parsedData = walletBookSchema.parse(json);
                        return parsedData;
                    }
                    catch (e) {
                        logger.error('Error parsing wallet book data', e, json);
                        throw e;
                    }
                }
                throw new Error(`Failed to fetch wallet book data from ${url} with status code ${res.status}`);
            });
            const data = yield retryableFn(fn, {
                fallbackValue: walletBookSchema.parse(walletBookFallbacks),
                logger: logger.createLogger('useWalletBookCdn'),
                maxRetries: 3,
                retryStrategy: 'timeout-and-rejection',
                timeoutMs: 30000,
            });
            setWalletBook(data);
        });
        fetchWalletBook();
    }, []);
    return walletBook;
};

export { useWalletBookCdn };
