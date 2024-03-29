'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var ThemeContext = require('../../../context/ThemeContext/ThemeContext.cjs');
var Select = require('../../Select/Select.cjs');

const TemplateSelect = () => {
    const { theme, changeTemplate } = ThemeContext.useThemeContext();
    const handleChange = (e) => {
        changeTemplate(e.target.value);
    };
    return (jsxRuntime.jsxs(Select.Select, { label: 'template', value: theme.template, onChange: handleChange, selectDataTestId: 'template-select', children: [jsxRuntime.jsx("option", { value: 'default', children: "Default" }), jsxRuntime.jsx("option", { value: 'matrix', children: "Matrix" }), jsxRuntime.jsx("option", { value: 'minimal', children: "Minimal" }), jsxRuntime.jsx("option", { value: 'rounded', children: "Rounded" }), jsxRuntime.jsx("option", { value: 'trinity', children: "Trinity" })] }));
};

exports.TemplateSelect = TemplateSelect;
