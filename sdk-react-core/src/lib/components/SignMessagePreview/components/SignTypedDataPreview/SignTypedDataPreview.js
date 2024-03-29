import { jsx, jsxs } from 'react/jsx-runtime';
import { Typography } from '../../../Typography/Typography.js';
import { capitalize } from '../../../../shared/utils/functions/capitalize/capitalize.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import { shortenWalletAddress } from '../../../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../../shared/consts/index.js';

const SignTypedDataPreview = ({ currentType, types, showTypeName = false, data }) => {
    const fields = types[currentType].map((field) => {
        var _a;
        const type = field.type.replace('[]', '');
        const isCollection = field.type.endsWith('[]');
        const isKnownType = type in types;
        if (isCollection && isKnownType) {
            return (jsx(TypeSection, { title: capitalize(field.name), children: (_a = data === null || data === void 0 ? void 0 : data[field.name]) === null || _a === void 0 ? void 0 : _a.map((item, index) => (jsx(TypeSection, { title: index.toString(), children: jsx(SignTypedDataPreview, { currentType: type, types: types, data: item }) }, index))) }, field.name));
        }
        if (isKnownType) {
            return (jsx(TypeSection, { title: capitalize(field.name), children: jsx(SignTypedDataPreview, { currentType: type, types: types, data: data === null || data === void 0 ? void 0 : data[field.name] }) }, field.name));
        }
        const fieldData = data === null || data === void 0 ? void 0 : data[field.name];
        const fieldType = field.type;
        return (jsx(FieldRow, { name: capitalize(field.name), data: fieldData, displayValue: fieldType === 'address'
                ? shortenWalletAddress(fieldData, 4, 4)
                : fieldData }, field.name));
    });
    if (showTypeName) {
        return jsx(TypeSection, { title: currentType, children: fields });
    }
    return jsx("div", { className: 'sign-typed-data-preview--fields-list', children: fields });
};
// Components
const TypeTitle = ({ children }) => (jsx(Typography, { color: 'secondary', weight: 'medium', children: children }));
const AttributeName = TypeTitle;
const AttributeValue = ({ children, title, }) => (jsx(Typography, { as: 'span', weight: 'regular', color: 'primary', title: title, children: children }));
const PaddedContent = ({ children }) => (jsx("div", { className: 'sign-typed-data-preview--type-container', children: children }));
const TypeSection = ({ title, children, }) => (jsxs("div", { children: [jsx(TypeTitle, { children: title }), jsx(PaddedContent, { children: children })] }));
const FieldRow = ({ name, displayValue, data, }) => (jsxs("div", { className: 'sign-typed-data-preview--attribute-row', children: [jsxs(AttributeName, { children: [capitalize(name), ": "] }), jsx(AttributeValue, { title: data, children: displayValue })] }));

export { SignTypedDataPreview };
