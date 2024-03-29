import { jsx, jsxs } from 'react/jsx-runtime';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '../../context/ViewContext/ViewContext.js';
import 'react';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { pixelToRem } from '../../utils/functions/pixelToRem/pixelToRem.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { StatusDot } from '../StatusDot/StatusDot.js';
import { Icon } from '../Icon/Icon.js';

const IconWithStatus = ({ Icon: Icon$1, InnerIcon, primaryWalletKey, containerClassName, iconSize = 16, variant = 'green', }) => {
    const Inner = primaryWalletKey ? (jsx("div", { className: 'inner-icon__container', children: jsx("div", { className: classNames('inner-icon'), children: jsx(Icon, { size: 'medium', children: jsx(WalletIcon, { walletKey: primaryWalletKey }) }) }) })) : (jsx("div", { className: 'inner-icon__container', children: jsx("div", { className: classNames('inner-icon', `inner-icon--${variant}`), children: InnerIcon && jsx(InnerIcon, {}) }) }));
    return (jsxs("div", { className: classNames('icon-with-status__container', containerClassName || ''), children: [typeof Icon$1 === 'string' ? (jsx("img", { style: {
                    height: pixelToRem(iconSize),
                    width: pixelToRem(iconSize),
                }, src: Icon$1, alt: '', className: 'icon' })) : (jsx(Icon$1, { style: {
                    height: pixelToRem(iconSize),
                    width: pixelToRem(iconSize),
                } })), InnerIcon || primaryWalletKey ? (Inner) : (jsx(StatusDot, { variant: variant, containerClassName: 'icon-with-status__status-dot' }))] }));
};

export { IconWithStatus };
