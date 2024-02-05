import { jsxs, jsx } from 'react/jsx-runtime';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgError } from '../../shared/assets/error.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { Typography } from '../Typography/Typography.js';

const ErrorContainer = ({ children, className, isMultiWalletError = false, withIcon = true, variant = 'error', copykey, }) => {
    const effectiveContainerClassName = classNames('error-container', `error-container--${variant}`, className, {
        'error-container--multi-wallet': isMultiWalletError,
    });
    const effectiveErrorClassName = classNames('error', {
        'error--with-icon': withIcon,
    });
    return (jsxs("div", { className: effectiveContainerClassName, children: [withIcon && jsx(SvgError, {}), jsx(Typography, { variant: 'body_small', className: effectiveErrorClassName, copykey: copykey, children: children })] }));
};

export { ErrorContainer };
