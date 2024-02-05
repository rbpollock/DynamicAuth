import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { ModalHeader } from '../ModalHeader/ModalHeader.js';
import { IconWithSpinner } from '../IconWithSpinner/IconWithSpinner.js';
import { Icon } from '../Icon/Icon.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgChevronLeft } from '../../shared/assets/chevron-left.js';
import { ReactComponent as SvgClose } from '../../shared/assets/close.js';
import { ReactComponent as SvgSignCircle } from '../../shared/assets/sign-circle.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import { IconButton } from '../IconButton/IconButton.js';
import { Typography } from '../Typography/Typography.js';
import { AnimatePresence } from '../AnimatePresence/AnimatePresence.js';
import '../Transition/ZoomTransition/ZoomTransition.js';
import '../Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../Transition/OpacityTransition/OpacityTransition.js';
import { VerticalDrawerTransition } from '../Transition/VerticalDrawerTransition/VerticalDrawerTransition.js';
import { Alert } from '../Alert/Alert.js';
import { AppOriginTile } from '../AppOriginTile/AppOriginTile.js';
import { Button } from '../Button/Button.js';
import { PoweredByDynamic } from '../PoweredByDynamic/PoweredByDynamic.js';
import { useIsTurnkeyWallet } from '../../utils/hooks/useIsTurnkeyWallet/useIsTurnkeyWallet.js';
import { SecureTurnkeyWalletCard } from '../SecureTurnkeyWalletCard/SecureTurnkeyWalletCard.js';
import { PasskeyCreatedSuccessBanner } from '../PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js';

const TransactionConfirmationPageLayout = ({ onClickClose, isLoading, onClickBack, copykey, title, error, appOrigin, appLogoUrl, appName, onClickSend, disableSendButton, displayPoweredByDynamicFooter = false, alert, children, }) => {
    const { t } = useTranslation();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet();
    const closeButton = onClickClose && (jsx(IconButton, { type: 'button', onClick: onClickClose, "data-testid": 'close', disabled: isLoading, children: jsx(SvgClose, {}) }));
    const backButton = onClickBack && (jsx(IconButton, { type: 'button', onClick: onClickBack, "data-testid": 'back-button', children: jsx(SvgChevronLeft, {}) }));
    return (jsxs(Fragment, { children: [jsx(ModalHeader, { trailing: closeButton, leading: backButton, alignContent: 'bottom', children: jsx(IconWithSpinner, { Icon: (props) => (jsx(Icon, { color: 'brand-primary', children: jsx(SvgSignCircle, Object.assign({}, props)) })), iconSize: 64, isSpinning: true }) }), jsx(PasskeyCreatedSuccessBanner, {}), jsxs("div", { className: 'transaction-confirmation__body', children: [jsx(Typography, { variant: 'title', color: 'primary', className: 'transaction-confirmation__title', copykey: copykey, children: title }), jsx(AnimatePresence, { animationComponent: jsx(VerticalDrawerTransition, {}), children: error && (jsx("div", { className: 'transaction-confirmation__error', children: jsx(Alert, { icon: 'error', variant: 'error', children: error }) })) }), jsxs("div", { className: 'transaction-confirmation__content', children: [jsx("div", { className: 'transaction-confirmation__app-origin-tile', children: jsx(AppOriginTile, { appLogoUrl: appLogoUrl, appName: appName, appOrigin: appOrigin }) }), jsx("div", { className: 'transaction-confirmation__rows', children: children })] }), jsx(AnimatePresence, { animationComponent: jsx(VerticalDrawerTransition, {}), children: alert && (jsx("div", { className: 'transaction-confirmation__warning', children: alert })) }), jsx(SecureTurnkeyWalletCard, { className: 'transaction-confirmation__secure-wallet' }), jsxs("div", { className: 'transaction-confirmation__actions', children: [onClickClose && (jsx(Button, { buttonVariant: 'secondary', onClick: onClickClose, expanded: true, buttonPadding: 'large', disabled: isLoading, copykey: 'dyn_send_transaction.confirmation.cancel_button', children: t('dyn_send_transaction.confirmation.cancel_button') })), jsx(Button, { buttonVariant: 'primary', buttonPadding: 'large', onClick: (event) => {
                                    onClickSend === null || onClickSend === void 0 ? void 0 : onClickSend(event);
                                }, expanded: true, loading: isLoading, disabled: disableSendButton || isTurnkeyWalletWithoutAuthenticator, copykey: 'dyn_send_transaction.confirmation.confirm_button', children: t('dyn_send_transaction.confirmation.confirm_button') })] }), displayPoweredByDynamicFooter && (jsx(PoweredByDynamic, { classNameRoot: 'transaction-confirmation__footer' }))] })] }));
};

export { TransactionConfirmationPageLayout };
