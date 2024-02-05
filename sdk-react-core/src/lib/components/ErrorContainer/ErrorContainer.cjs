'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
require('react');
var error = require('../../shared/assets/error.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var Typography = require('../Typography/Typography.cjs');

const ErrorContainer = ({ children, className, isMultiWalletError = false, withIcon = true, variant = 'error', copykey, }) => {
    const effectiveContainerClassName = classNames.classNames('error-container', `error-container--${variant}`, className, {
        'error-container--multi-wallet': isMultiWalletError,
    });
    const effectiveErrorClassName = classNames.classNames('error', {
        'error--with-icon': withIcon,
    });
    return (jsxRuntime.jsxs("div", { className: effectiveContainerClassName, children: [withIcon && jsxRuntime.jsx(error.ReactComponent, {}), jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', className: effectiveErrorClassName, copykey: copykey, children: children })] }));
};

exports.ErrorContainer = ErrorContainer;
