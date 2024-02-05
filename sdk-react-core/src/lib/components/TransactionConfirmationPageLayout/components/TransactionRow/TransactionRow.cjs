'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Typography = require('../../../Typography/Typography.cjs');
var Skeleton = require('../../../Skeleton/Skeleton.cjs');

const TransactionRow = ({ label, title, children, isEmpty = false, isLoading = false, suffix, dataTestId, icon, copykey, }) => (jsxRuntime.jsxs("div", { className: 'transaction-row', children: [jsxRuntime.jsx(Typography.Typography, { color: 'secondary', variant: 'body_normal', weight: 'regular', className: 'transaction-row__label', copykey: copykey, children: label }), jsxRuntime.jsxs("div", { className: 'transaction-row__content', "data-testid": dataTestId, children: [isLoading && (jsxRuntime.jsx(Skeleton.Skeleton, { count: 1, className: 'transaction-row__skeleton' })), isLoading === false && children !== undefined && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Typography.Typography, { title: title, color: isEmpty ? 'secondary' : 'primary', variant: 'body_normal', weight: isEmpty ? 'regular' : 'medium', truncate: true, children: children }), suffix && (jsxRuntime.jsx(Typography.Typography, { as: 'span', color: 'secondary', weight: 'regular', children: suffix })), icon] }))] })] }));

exports.TransactionRow = TransactionRow;
