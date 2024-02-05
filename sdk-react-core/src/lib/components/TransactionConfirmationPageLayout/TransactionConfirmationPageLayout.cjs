'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var ModalHeader = require('../ModalHeader/ModalHeader.cjs');
var IconWithSpinner = require('../IconWithSpinner/IconWithSpinner.cjs');
var Icon = require('../Icon/Icon.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
require('react');
var chevronLeft = require('../../shared/assets/chevron-left.cjs');
var close = require('../../shared/assets/close.cjs');
var signCircle = require('../../shared/assets/sign-circle.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
var IconButton = require('../IconButton/IconButton.cjs');
var Typography = require('../Typography/Typography.cjs');
var AnimatePresence = require('../AnimatePresence/AnimatePresence.cjs');
require('../Transition/ZoomTransition/ZoomTransition.cjs');
require('../Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../Transition/OpacityTransition/OpacityTransition.cjs');
var VerticalDrawerTransition = require('../Transition/VerticalDrawerTransition/VerticalDrawerTransition.cjs');
var Alert = require('../Alert/Alert.cjs');
var AppOriginTile = require('../AppOriginTile/AppOriginTile.cjs');
var Button = require('../Button/Button.cjs');
var PoweredByDynamic = require('../PoweredByDynamic/PoweredByDynamic.cjs');
var useIsTurnkeyWallet = require('../../utils/hooks/useIsTurnkeyWallet/useIsTurnkeyWallet.cjs');
var SecureTurnkeyWalletCard = require('../SecureTurnkeyWalletCard/SecureTurnkeyWalletCard.cjs');
var PasskeyCreatedSuccessBanner = require('../PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.cjs');

const TransactionConfirmationPageLayout = ({ onClickClose, isLoading, onClickBack, copykey, title, error, appOrigin, appLogoUrl, appName, onClickSend, disableSendButton, displayPoweredByDynamicFooter = false, alert, children, }) => {
    const { t } = reactI18next.useTranslation();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet.useIsTurnkeyWallet();
    const closeButton = onClickClose && (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: onClickClose, "data-testid": 'close', disabled: isLoading, children: jsxRuntime.jsx(close.ReactComponent, {}) }));
    const backButton = onClickBack && (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: onClickBack, "data-testid": 'back-button', children: jsxRuntime.jsx(chevronLeft.ReactComponent, {}) }));
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { trailing: closeButton, leading: backButton, alignContent: 'bottom', children: jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { Icon: (props) => (jsxRuntime.jsx(Icon.Icon, { color: 'brand-primary', children: jsxRuntime.jsx(signCircle.ReactComponent, Object.assign({}, props)) })), iconSize: 64, isSpinning: true }) }), jsxRuntime.jsx(PasskeyCreatedSuccessBanner.PasskeyCreatedSuccessBanner, {}), jsxRuntime.jsxs("div", { className: 'transaction-confirmation__body', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', className: 'transaction-confirmation__title', copykey: copykey, children: title }), jsxRuntime.jsx(AnimatePresence.AnimatePresence, { animationComponent: jsxRuntime.jsx(VerticalDrawerTransition.VerticalDrawerTransition, {}), children: error && (jsxRuntime.jsx("div", { className: 'transaction-confirmation__error', children: jsxRuntime.jsx(Alert.Alert, { icon: 'error', variant: 'error', children: error }) })) }), jsxRuntime.jsxs("div", { className: 'transaction-confirmation__content', children: [jsxRuntime.jsx("div", { className: 'transaction-confirmation__app-origin-tile', children: jsxRuntime.jsx(AppOriginTile.AppOriginTile, { appLogoUrl: appLogoUrl, appName: appName, appOrigin: appOrigin }) }), jsxRuntime.jsx("div", { className: 'transaction-confirmation__rows', children: children })] }), jsxRuntime.jsx(AnimatePresence.AnimatePresence, { animationComponent: jsxRuntime.jsx(VerticalDrawerTransition.VerticalDrawerTransition, {}), children: alert && (jsxRuntime.jsx("div", { className: 'transaction-confirmation__warning', children: alert })) }), jsxRuntime.jsx(SecureTurnkeyWalletCard.SecureTurnkeyWalletCard, { className: 'transaction-confirmation__secure-wallet' }), jsxRuntime.jsxs("div", { className: 'transaction-confirmation__actions', children: [onClickClose && (jsxRuntime.jsx(Button.Button, { buttonVariant: 'secondary', onClick: onClickClose, expanded: true, buttonPadding: 'large', disabled: isLoading, copykey: 'dyn_send_transaction.confirmation.cancel_button', children: t('dyn_send_transaction.confirmation.cancel_button') })), jsxRuntime.jsx(Button.Button, { buttonVariant: 'primary', buttonPadding: 'large', onClick: (event) => {
                                    onClickSend === null || onClickSend === void 0 ? void 0 : onClickSend(event);
                                }, expanded: true, loading: isLoading, disabled: disableSendButton || isTurnkeyWalletWithoutAuthenticator, copykey: 'dyn_send_transaction.confirmation.confirm_button', children: t('dyn_send_transaction.confirmation.confirm_button') })] }), displayPoweredByDynamicFooter && (jsxRuntime.jsx(PoweredByDynamic.PoweredByDynamic, { classNameRoot: 'transaction-confirmation__footer' }))] })] }));
};

exports.TransactionConfirmationPageLayout = TransactionConfirmationPageLayout;
