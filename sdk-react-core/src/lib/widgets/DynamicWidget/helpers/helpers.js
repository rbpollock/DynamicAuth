import { ProviderEnum } from '@dynamic-labs/sdk-api';
import { isMagicConnector } from '@dynamic-labs/wallet-connector-core';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import '../../../utils/constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import { ceil } from '../../../shared/utils/functions/ceil/ceil.js';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';
import 'i18next';

const replaceAll = (text, char, replace) => {
    const re = new RegExp(char, 'g');
    return text.replace(re, replace);
};
const copyToClipboard = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
};
/** Applies Math.floor, but takes into account edge cases, like how 2.99999 should be 3 */
// First apply ceil with very high accuracy, to account for floating point inaccuracies
// const smartFloor = (value: number) => Math.floor(value);
const smartFloor = (value) => Math.floor(ceil(value, 13));
const WITHOUT_DECIMAL_VALUE = 1000;
const MAX_BALANCE_VALUE = 1000000;
const PRECISION_FLOOR_DIVIDER = 10000;
const roundBalance = (balanceString, decimals = 4) => {
    const clearedBalance = parseFloat(replaceAll(balanceString, '"', ''));
    if (clearedBalance > MAX_BALANCE_VALUE) {
        const dividedValue = Math.floor(clearedBalance);
        const roundedBalance = Math.floor((dividedValue / MAX_BALANCE_VALUE) * PRECISION_FLOOR_DIVIDER) /
            PRECISION_FLOOR_DIVIDER;
        return `${roundedBalance}M`;
    }
    if (clearedBalance > WITHOUT_DECIMAL_VALUE) {
        return String(Math.floor(clearedBalance));
    }
    const decimalsPrecision = Math.pow(10, decimals);
    const minBalanceValue = 1 / decimalsPrecision;
    if (clearedBalance < minBalanceValue && clearedBalance > 0)
        return `< ${minBalanceValue}`;
    const roundedBalance = smartFloor(clearedBalance * decimalsPrecision) / decimalsPrecision;
    if (roundedBalance === 0)
        return '0.0';
    return String(roundedBalance);
};
const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);
const getExportKeysOption = (connector, providerSettings) => {
    var _a;
    if (!connector || !(providerSettings === null || providerSettings === void 0 ? void 0 : providerSettings.length) || !isMagicConnector(connector)) {
        return;
    }
    const keyExportUrl = (_a = providerSettings.find((provider) => provider.provider === ProviderEnum.MagicLink)) === null || _a === void 0 ? void 0 : _a.keyExportUrl;
    if (!keyExportUrl) {
        return;
    }
    return () => {
        window.open(keyExportUrl, '_blank');
    };
};

export { capitalize, copyToClipboard, getExportKeysOption, replaceAll, roundBalance };
