'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var walletBook = require('@dynamic-labs/wallet-book');
var IconButton = require('../IconButton/IconButton.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
var chevronLeft = require('../../shared/assets/chevron-left.cjs');
var close = require('../../shared/assets/close.cjs');
var shortenWalletAddress = require('../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
var ModalHeader = require('../ModalHeader/ModalHeader.cjs');
var Typography = require('../Typography/Typography.cjs');
var Icon = require('../Icon/Icon.cjs');
var PoweredByDynamic = require('../PoweredByDynamic/PoweredByDynamic.cjs');
var AnimatePresence = require('../AnimatePresence/AnimatePresence.cjs');
require('../Transition/ZoomTransition/ZoomTransition.cjs');
require('../Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../Transition/OpacityTransition/OpacityTransition.cjs');
var VerticalDrawerTransition = require('../Transition/VerticalDrawerTransition/VerticalDrawerTransition.cjs');
var Alert = require('../Alert/Alert.cjs');
var SendBalanceForm = require('../SendBalanceForm/SendBalanceForm.cjs');
var Chip = require('../Chip/Chip.cjs');
var FormFieldLabel = require('../FormFieldLabel/FormFieldLabel.cjs');
var TokenBalanceCard = require('./components/TokenBalanceCard/TokenBalanceCard.cjs');

const SendBalancePageLayout = ({ error, walletAddress, onClickClose, onClickBack, walletKey, onSubmit, displayPoweredByDynamicFooter = false, balance, chain, currencySymbol, initialValues, networkName, networkIcon, networkCurrencyDecimals, }) => {
    const { t } = reactI18next.useTranslation();
    const closeButton = onClickClose && (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: onClickClose, "data-testid": 'close-button', children: jsxRuntime.jsx(close.ReactComponent, {}) }));
    const backButton = onClickBack && (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: onClickBack, "data-testid": 'back-button', children: jsxRuntime.jsx(chevronLeft.ReactComponent, {}) }));
    const balanceNumber = React.useMemo(() => {
        if (!balance)
            return;
        const number = parseFloat(balance);
        if (isNaN(number))
            return;
        return parseFloat(balance);
    }, [balance]);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { leading: backButton, trailing: closeButton, children: jsxRuntime.jsxs("div", { className: 'send-balance-page-layout__header-content', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'primary', as: 'p', copykey: 'dyn_send_transaction.data.from', children: t('dyn_send_transaction.data.from') }), walletKey && (jsxRuntime.jsx(Icon.Icon, { size: 'small', children: jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: walletKey }) })), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'primary', as: 'p', children: shortenWalletAddress.shortenWalletAddress(walletAddress, 3, 3) })] }) }), jsxRuntime.jsxs("div", { className: 'send-balance-page-layout__body', children: [jsxRuntime.jsx(AnimatePresence.AnimatePresence, { animationComponent: jsxRuntime.jsx(VerticalDrawerTransition.VerticalDrawerTransition, {}), children: error && (jsxRuntime.jsx("div", { className: 'send-balance-page-layout__error', children: jsxRuntime.jsx(Alert.Alert, { icon: 'error', variant: 'error', children: error }) })) }), networkName && networkIcon && (jsxRuntime.jsx("div", { className: 'send-balance-page-layout__network-container', children: jsxRuntime.jsx(Chip.Chip, { icon: networkIcon, children: networkName }) })), jsxRuntime.jsxs("div", { className: 'send-balance-page-layout__balance-container', children: [jsxRuntime.jsx(FormFieldLabel.FormFieldLabel, { divider: true, children: "Token" }), jsxRuntime.jsx(TokenBalanceCard.TokenBalanceCard, { chainIcon: networkIcon, currencySymbol: currencySymbol, balance: balance })] }), jsxRuntime.jsx(SendBalanceForm.SendBalanceForm, { onSubmit: onSubmit, initialValues: initialValues, balance: balanceNumber, decimals: networkCurrencyDecimals }), displayPoweredByDynamicFooter && (jsxRuntime.jsx(PoweredByDynamic.PoweredByDynamic, { classNameRoot: 'send-balance-page-layout__footer' }))] })] }));
};

exports.SendBalancePageLayout = SendBalancePageLayout;
