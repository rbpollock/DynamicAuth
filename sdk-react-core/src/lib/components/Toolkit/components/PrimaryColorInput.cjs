'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ThemeContext = require('../../../context/ThemeContext/ThemeContext.cjs');
var Input = require('../../Input/Input.cjs');

const PrimaryColorInput = () => {
    const { changePrimaryColor, theme } = ThemeContext.useThemeContext();
    const [color, setColor] = React.useState(theme.customColor);
    return (jsxRuntime.jsx(Input.Input, { id: 'primary-color', label: 'Primary color', value: color, onChange: (e) => setColor(e.target.value), onBlur: (e) => {
            const newColor = color || theme.customColor;
            setColor(newColor);
            changePrimaryColor(newColor);
        } }));
};

exports.PrimaryColorInput = PrimaryColorInput;
