'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
var index = require('../../shared/utils/functions/getValueByKey/index.cjs');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');

const getDefaultColor = (name = 'light') => name === 'light' ? '#2660FF' : '#7000FF';
const themesData = {
    border: 'rounded',
    brandStyle: 'subtle',
    customColor: '',
    template: 'default',
    themes: {
        auto: {
            colors: {
                accent_1: '#2C303A',
                accent_2: '#3C414D',
                accent_3: '#4C525F',
                background: '#15181F',
                border: '1px solid #2C303A',
                error_1: 'rgba(255, 106, 106, 0.2)',
                error_2: '#FF6A6A',
                footer: '#2C303A',
                primary: '#15181F',
                secondary: '#2C303A',
                ternary: '#2660FF',
                textPrimary: '#FFF',
                textSecondary: '#ACACB9',
            },
            name: 'auto',
        },
        dark: {
            colors: {
                accent_1: '#2C303A',
                accent_2: '#3C414D',
                accent_3: '#4C525F',
                background: '#15181F',
                border: '1px solid #2C303A',
                error_1: 'rgba(255, 106, 106, 0.2)',
                error_2: '#FF6A6A',
                footer: '#2C303A',
                primary: '#15181F',
                secondary: '#2C303A',
                ternary: '#2660FF',
                textPrimary: '#FFF',
                textSecondary: '#ACACB9',
            },
            name: 'dark',
        },
        light: {
            colors: {
                accent_1: '#FFF',
                accent_2: '#F0F3FF',
                accent_3: '#E9EDFC',
                background: '#FFFFFF',
                border: '1px solid #E9EDFC',
                error_1: 'rgba(255, 70, 70, 0.1)',
                error_2: '#FF4646',
                footer: '#F7F9FE',
                primary: '#F7F7F9',
                secondary: '#FFFFFF',
                ternary: '#2660FF',
                textPrimary: '#404040',
                textSecondary: '#80858B',
            },
            name: 'light',
        },
    },
    view: 'extended',
    walletColor: {
        color: '#1648F9',
        gradient: '90deg, #1648F9 0%, #4B73FF 100%',
    },
};
const getThemeConfig = (modalSettings, themeMode) => {
    const { border, brand, view, primaryColor } = modalSettings || {};
    const themeName = themeMode || (modalSettings === null || modalSettings === void 0 ? void 0 : modalSettings.theme) || 'light';
    const themeTemplate = (modalSettings === null || modalSettings === void 0 ? void 0 : modalSettings.template) || 'default';
    return Object.assign(Object.assign({}, themesData), { border: border || themesData.border, brandStyle: brand || themesData.brandStyle, customColor: primaryColor || themesData.customColor, template: themeTemplate, theme: index.getValueByKey(themesData.themes, themeName), view: view || themesData.view });
};

exports.getDefaultColor = getDefaultColor;
exports.getThemeConfig = getThemeConfig;
exports.themesData = themesData;
