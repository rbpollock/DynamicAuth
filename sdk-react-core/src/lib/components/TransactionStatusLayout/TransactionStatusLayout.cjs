'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var ModalHeader = require('../ModalHeader/ModalHeader.cjs');
var IconButton = require('../IconButton/IconButton.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
require('react');
var check = require('../../shared/assets/check.cjs');
var close = require('../../shared/assets/close.cjs');
var signCircle = require('../../shared/assets/sign-circle.cjs');
require('@dynamic-labs/wallet-book');
var shortenWalletAddress = require('../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
var IconWithStatus = require('../IconWithStatus/IconWithStatus.cjs');
var Typography = require('../Typography/Typography.cjs');
var PoweredByDynamic = require('../PoweredByDynamic/PoweredByDynamic.cjs');
var Button = require('../Button/Button.cjs');
require('@dynamic-labs/multi-wallet');
require('../../context/ThemeContext/ThemeContext.cjs');
require('../../context/DynamicContext/DynamicContext.cjs');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('@dynamic-labs/types');
require('yup');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../Alert/Alert.cjs');
require('../ShadowDOM/ShadowDOM.cjs');
require('../InlineWidget/InlineWidget.cjs');
require('../MenuList/Dropdown/Dropdown.cjs');
require('../Transition/ZoomTransition/ZoomTransition.cjs');
require('../Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../Transition/OpacityTransition/OpacityTransition.cjs');
require('../Popper/Popper/Popper.cjs');
require('../Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var TransactionRow = require('../TransactionConfirmationPageLayout/components/TransactionRow/TransactionRow.cjs');

const TransactionStatusLayout = ({ destinationAddress, amount, networkName, networkCurrency, NetworkIcon, onDone, displayPoweredByDynamicFooter = true, onClickClose, }) => {
    const { t } = reactI18next.useTranslation();
    const closeButton = onClickClose && (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: onClickClose, "data-testid": 'close', children: jsxRuntime.jsx(close.ReactComponent, {}) }));
    const networkIcon = (jsxRuntime.jsx("span", { className: 'transaction-status-layout__network-icon', children: NetworkIcon }));
    return (jsxRuntime.jsxs("div", { className: 'transaction-status-layout', children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { trailing: closeButton, alignContent: 'bottom', children: jsxRuntime.jsx(IconWithStatus.IconWithStatus, { containerClassName: 'transaction-status-layout__status-icon', iconSize: 50, Icon: signCircle.ReactComponent, InnerIcon: check.ReactComponent }) }), jsxRuntime.jsxs("div", { className: 'transaction-status-layout__body', children: [jsxRuntime.jsx(Typography.Typography, { weight: 'medium', variant: 'title', color: 'primary', className: 'transaction-status-layout__title', copykey: 'dyn_send_transaction.succeeded.title', children: t('dyn_send_transaction.succeeded.title') }), jsxRuntime.jsx("div", { className: 'transaction-status-layout__content', children: jsxRuntime.jsxs("div", { className: 'transaction-status-layout__rows', children: [jsxRuntime.jsx(TransactionRow.TransactionRow, { copykey: 'dyn_send_transaction.succeeded.recipient.label', label: t('dyn_send_transaction.succeeded.recipient.label'), children: shortenWalletAddress.shortenWalletAddress(destinationAddress, 3, 3) }), jsxRuntime.jsxs(TransactionRow.TransactionRow, { copykey: 'dyn_send_transaction.succeeded.network.label', label: t('dyn_send_transaction.succeeded.network.label'), children: [networkIcon, jsxRuntime.jsx("span", { className: 'transaction-status-layout__network-name', children: networkName })] }), jsxRuntime.jsxs(TransactionRow.TransactionRow, { copykey: 'dyn_send_transaction.succeeded.total_amount.label', label: t('dyn_send_transaction.succeeded.total_amount.label'), children: [amount, jsxRuntime.jsx(Typography.Typography, { as: 'span', color: 'secondary', className: 'transaction-status-layout__network-currency', children: networkCurrency })] })] }) }), jsxRuntime.jsx("div", { className: 'transaction-status-layout__actions', children: jsxRuntime.jsx(Button.Button, { buttonVariant: 'primary', buttonPadding: 'large', expanded: true, onClick: onDone, loading: false, copykey: 'dyn_send_transaction.succeeded.continue_button', children: t('dyn_send_transaction.succeeded.continue_button') }) }), displayPoweredByDynamicFooter && (jsxRuntime.jsx(PoweredByDynamic.PoweredByDynamic, { classNameRoot: 'transaction-status-layout__footer' }))] })] }));
};

exports.TransactionStatusLayout = TransactionStatusLayout;
