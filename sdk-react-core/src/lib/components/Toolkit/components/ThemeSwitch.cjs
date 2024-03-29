'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var ThemeContext = require('../../../context/ThemeContext/ThemeContext.cjs');
var Switch = require('../../Switch/Switch.cjs');

const ThemeSwitch = () => {
    const { changeTheme, theme } = ThemeContext.useThemeContext();
    return (jsxRuntime.jsx(Switch.Switch, { firstButton: {
            active: theme.theme.name === 'light',
            handleButtonClick: () => changeTheme('light'),
            name: 'Light',
        }, secondButton: {
            active: theme.theme.name === 'dark',
            handleButtonClick: () => changeTheme('dark'),
            name: 'Dark',
        }, thirdButton: {
            active: theme.theme.name === 'auto',
            handleButtonClick: () => changeTheme('auto'),
            name: 'Auto',
        } }));
};

exports.ThemeSwitch = ThemeSwitch;
