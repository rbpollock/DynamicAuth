import { jsxs, jsx } from 'react/jsx-runtime';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import { StatusDot } from '../../../../components/StatusDot/StatusDot.js';
import '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '../../../../context/ViewContext/ViewContext.js';
import 'react';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { pixelToRem } from '../../../../utils/functions/pixelToRem/pixelToRem.js';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';

const WalletIconWithStatus = ({ iconSize = 24, walletKey, connected, variant = 'primary', }) => (jsxs("div", { className: 'wallet-icon-with-status__container', children: [jsx(WalletIcon, { walletKey: walletKey, style: {
                height: pixelToRem(iconSize),
                width: pixelToRem(iconSize),
            } }, walletKey), jsx("div", { "data-testid": 'status-dot-container', className: classNames('wallet-icon-with-status__dot-container', variant === 'secondary'
                ? 'wallet-icon-with-status__dot-container--secondary'
                : ''), children: jsx(StatusDot, { variant: connected ? 'green' : 'red' }) })] }));

export { WalletIconWithStatus };
