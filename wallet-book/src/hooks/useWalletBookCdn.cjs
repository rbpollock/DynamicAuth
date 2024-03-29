'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var react = require('react');
var utils = require('@dynamic-labs/utils');
require('../schemas/walletConnectSourceSchema.cjs');
var walletBookSchema = require('../schemas/walletBookSchema.cjs');
require('../schemas/walletSchema.cjs');
var logger = require('../helpers/logger.cjs');
var getWalletBookCdnUrl = require('../helpers/getWalletBookCdnUrl.cjs');
var walletBookFallbacks = require('../../wallet-book-fallbacks.cjs');

const useWalletBookCdn = () => {
    const [walletBook, setWalletBook] = react.useState({});
    react.useEffect(() => {
        const fetchWalletBook = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
            const url = getWalletBookCdnUrl.getWalletBookCdnUrl();
            const fn = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
                const res = yield fetch(url, { mode: 'cors' });
                if (res.ok) {
                    const json = yield res.json();
                    try {
                        const parsedData = walletBookSchema.walletBookSchema.parse(json);
                        return parsedData;
                    }
                    catch (e) {
                        logger.logger.error('Error parsing wallet book data', e, json);
                        throw e;
                    }
                }
                throw new Error(`Failed to fetch wallet book data from ${url} with status code ${res.status}`);
            });
            const data = yield utils.retryableFn(fn, {
                fallbackValue: walletBookSchema.walletBookSchema.parse(walletBookFallbacks["default"]),
                logger: logger.logger.createLogger('useWalletBookCdn'),
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

exports.useWalletBookCdn = useWalletBookCdn;
