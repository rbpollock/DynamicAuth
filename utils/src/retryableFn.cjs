'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.cjs');

const FALLBACK_UNDEFINED = 'FALLBACK_UNDEFINED';
const retryableFn = (fn, options = {}) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const { maxRetries = 3, currentRetry = 0, timeoutMs = 100, fallbackValue = new Error('Max retries reached'), retryStrategy = 'timeout-only', logger, } = options;
    logger === null || logger === void 0 ? void 0 : logger.debug('Configured retryableFn with options: ', {
        currentRetry,
        fallbackValue,
        maxRetries,
        retryStrategy,
        timeoutMs,
    });
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Timeout'));
        }, timeoutMs);
    });
    try {
        const result = yield Promise.race([fn(), timeoutPromise]);
        return result;
    }
    catch (err) {
        logger === null || logger === void 0 ? void 0 : logger.debug('retryableFn caught error: ', err);
        if (currentRetry >= maxRetries) {
            logger === null || logger === void 0 ? void 0 : logger.error('Error while retrying function, returning/throwing fallback value', err, fallbackValue);
            if (fallbackValue instanceof Error) {
                throw fallbackValue;
            }
            else if (fallbackValue === FALLBACK_UNDEFINED) {
                return undefined;
            }
            return fallbackValue;
        }
        const isTimeout = err.message === 'Timeout';
        const shouldRetry = retryStrategy === 'timeout-and-rejection' ||
            (retryStrategy === 'timeout-only' && isTimeout) ||
            (retryStrategy === 'rejection-only' && !isTimeout);
        logger === null || logger === void 0 ? void 0 : logger.debug('retryableFn shouldRetry: ', shouldRetry);
        if (!shouldRetry) {
            if (fallbackValue instanceof Error) {
                logger === null || logger === void 0 ? void 0 : logger.debug('retryableFn throwing fallbackValue error: ', fallbackValue);
                throw err;
            }
            else if (fallbackValue === FALLBACK_UNDEFINED) {
                logger === null || logger === void 0 ? void 0 : logger.debug('retryableFn returning undefined');
                return undefined;
            }
            logger === null || logger === void 0 ? void 0 : logger.debug('retryableFn returning fallbackValue: ', fallbackValue);
            logger === null || logger === void 0 ? void 0 : logger.error('Error while retrying function, returning fallback value', err);
            return fallbackValue;
        }
        return retryableFn(fn, {
            currentRetry: currentRetry + 1,
            fallbackValue,
            logger,
            maxRetries,
            retryStrategy,
            timeoutMs,
        });
    }
});

exports.FALLBACK_UNDEFINED = FALLBACK_UNDEFINED;
exports.retryableFn = retryableFn;
