'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Typography = require('../../../Typography/Typography.cjs');
var capitalize = require('../../../../shared/utils/functions/capitalize/capitalize.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
var shortenWalletAddress = require('../../../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../../shared/consts/index.cjs');

const SignTypedDataPreview = ({ currentType, types, showTypeName = false, data }) => {
    const fields = types[currentType].map((field) => {
        var _a;
        const type = field.type.replace('[]', '');
        const isCollection = field.type.endsWith('[]');
        const isKnownType = type in types;
        if (isCollection && isKnownType) {
            return (jsxRuntime.jsx(TypeSection, { title: capitalize.capitalize(field.name), children: (_a = data === null || data === void 0 ? void 0 : data[field.name]) === null || _a === void 0 ? void 0 : _a.map((item, index) => (jsxRuntime.jsx(TypeSection, { title: index.toString(), children: jsxRuntime.jsx(SignTypedDataPreview, { currentType: type, types: types, data: item }) }, index))) }, field.name));
        }
        if (isKnownType) {
            return (jsxRuntime.jsx(TypeSection, { title: capitalize.capitalize(field.name), children: jsxRuntime.jsx(SignTypedDataPreview, { currentType: type, types: types, data: data === null || data === void 0 ? void 0 : data[field.name] }) }, field.name));
        }
        const fieldData = data === null || data === void 0 ? void 0 : data[field.name];
        const fieldType = field.type;
        return (jsxRuntime.jsx(FieldRow, { name: capitalize.capitalize(field.name), data: fieldData, displayValue: fieldType === 'address'
                ? shortenWalletAddress.shortenWalletAddress(fieldData, 4, 4)
                : fieldData }, field.name));
    });
    if (showTypeName) {
        return jsxRuntime.jsx(TypeSection, { title: currentType, children: fields });
    }
    return jsxRuntime.jsx("div", { className: 'sign-typed-data-preview--fields-list', children: fields });
};
// Components
const TypeTitle = ({ children }) => (jsxRuntime.jsx(Typography.Typography, { color: 'secondary', weight: 'medium', children: children }));
const AttributeName = TypeTitle;
const AttributeValue = ({ children, title, }) => (jsxRuntime.jsx(Typography.Typography, { as: 'span', weight: 'regular', color: 'primary', title: title, children: children }));
const PaddedContent = ({ children }) => (jsxRuntime.jsx("div", { className: 'sign-typed-data-preview--type-container', children: children }));
const TypeSection = ({ title, children, }) => (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(TypeTitle, { children: title }), jsxRuntime.jsx(PaddedContent, { children: children })] }));
const FieldRow = ({ name, displayValue, data, }) => (jsxRuntime.jsxs("div", { className: 'sign-typed-data-preview--attribute-row', children: [jsxRuntime.jsxs(AttributeName, { children: [capitalize.capitalize(name), ": "] }), jsxRuntime.jsx(AttributeValue, { title: data, children: displayValue })] }));

exports.SignTypedDataPreview = SignTypedDataPreview;
