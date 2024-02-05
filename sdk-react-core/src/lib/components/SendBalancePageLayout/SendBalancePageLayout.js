import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import { IconButton } from '../IconButton/IconButton.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../context/ViewContext/ViewContext.js';
import { ReactComponent as SvgChevronLeft } from '../../shared/assets/chevron-left.js';
import { ReactComponent as SvgClose } from '../../shared/assets/close.js';
import { shortenWalletAddress } from '../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import { ModalHeader } from '../ModalHeader/ModalHeader.js';
import { Typography } from '../Typography/Typography.js';
import { Icon } from '../Icon/Icon.js';
import { PoweredByDynamic } from '../PoweredByDynamic/PoweredByDynamic.js';
import { AnimatePresence } from '../AnimatePresence/AnimatePresence.js';
import '../Transition/ZoomTransition/ZoomTransition.js';
import '../Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../Transition/OpacityTransition/OpacityTransition.js';
import { VerticalDrawerTransition } from '../Transition/VerticalDrawerTransition/VerticalDrawerTransition.js';
import { Alert } from '../Alert/Alert.js';
import { SendBalanceForm } from '../SendBalanceForm/SendBalanceForm.js';
import { Chip } from '../Chip/Chip.js';
import { FormFieldLabel } from '../FormFieldLabel/FormFieldLabel.js';
import { TokenBalanceCard } from './components/TokenBalanceCard/TokenBalanceCard.js';

const SendBalancePageLayout = ({ error, walletAddress, onClickClose, onClickBack, walletKey, onSubmit, displayPoweredByDynamicFooter = false, balance, chain, currencySymbol, initialValues, networkName, networkIcon, networkCurrencyDecimals, }) => {
    const { t } = useTranslation();
    const closeButton = onClickClose && (jsx(IconButton, { type: 'button', onClick: onClickClose, "data-testid": 'close-button', children: jsx(SvgClose, {}) }));
    const backButton = onClickBack && (jsx(IconButton, { type: 'button', onClick: onClickBack, "data-testid": 'back-button', children: jsx(SvgChevronLeft, {}) }));
    const balanceNumber = useMemo(() => {
        if (!balance)
            return;
        const number = parseFloat(balance);
        if (isNaN(number))
            return;
        return parseFloat(balance);
    }, [balance]);
    return (jsxs(Fragment, { children: [jsx(ModalHeader, { leading: backButton, trailing: closeButton, children: jsxs("div", { className: 'send-balance-page-layout__header-content', children: [jsx(Typography, { variant: 'body_normal', color: 'primary', as: 'p', copykey: 'dyn_send_transaction.data.from', children: t('dyn_send_transaction.data.from') }), walletKey && (jsx(Icon, { size: 'small', children: jsx(WalletIcon, { walletKey: walletKey }) })), jsx(Typography, { variant: 'body_normal', color: 'primary', as: 'p', children: shortenWalletAddress(walletAddress, 3, 3) })] }) }), jsxs("div", { className: 'send-balance-page-layout__body', children: [jsx(AnimatePresence, { animationComponent: jsx(VerticalDrawerTransition, {}), children: error && (jsx("div", { className: 'send-balance-page-layout__error', children: jsx(Alert, { icon: 'error', variant: 'error', children: error }) })) }), networkName && networkIcon && (jsx("div", { className: 'send-balance-page-layout__network-container', children: jsx(Chip, { icon: networkIcon, children: networkName }) })), jsxs("div", { className: 'send-balance-page-layout__balance-container', children: [jsx(FormFieldLabel, { divider: true, children: "Token" }), jsx(TokenBalanceCard, { chainIcon: networkIcon, currencySymbol: currencySymbol, balance: balance })] }), jsx(SendBalanceForm, { onSubmit: onSubmit, initialValues: initialValues, balance: balanceNumber, decimals: networkCurrencyDecimals }), displayPoweredByDynamicFooter && (jsx(PoweredByDynamic, { classNameRoot: 'send-balance-page-layout__footer' }))] })] }));
};

export { SendBalancePageLayout };
