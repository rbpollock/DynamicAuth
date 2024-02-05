import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Typography } from '../../../Typography/Typography.js';
import { Skeleton } from '../../../Skeleton/Skeleton.js';

const TransactionRow = ({ label, title, children, isEmpty = false, isLoading = false, suffix, dataTestId, icon, copykey, }) => (jsxs("div", { className: 'transaction-row', children: [jsx(Typography, { color: 'secondary', variant: 'body_normal', weight: 'regular', className: 'transaction-row__label', copykey: copykey, children: label }), jsxs("div", { className: 'transaction-row__content', "data-testid": dataTestId, children: [isLoading && (jsx(Skeleton, { count: 1, className: 'transaction-row__skeleton' })), isLoading === false && children !== undefined && (jsxs(Fragment, { children: [jsx(Typography, { title: title, color: isEmpty ? 'secondary' : 'primary', variant: 'body_normal', weight: isEmpty ? 'regular' : 'medium', truncate: true, children: children }), suffix && (jsx(Typography, { as: 'span', color: 'secondary', weight: 'regular', children: suffix })), icon] }))] })] }));

export { TransactionRow };
