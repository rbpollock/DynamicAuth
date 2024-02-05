'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var viem = require('viem');
require('@dynamic-labs/utils');
require('../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
var usePreventPageScroll = require('../../shared/utils/hooks/usePreventPageScroll/usePreventPageScroll.cjs');
var index = require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var isMagicConnector = require('../../utils/functions/isMagicConnector/isMagicConnector.cjs');
var sendTransactionWithAutoNonce = require('../../utils/functions/sendTransactionWithAutoNonce/sendTransactionWithAutoNonce.cjs');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
var useTransactionWithGasPrice = require('../../utils/hooks/useTransactionWithGasPrice/useTransactionWithGasPrice.cjs');
require('yup');
require('react-i18next');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../components/IconButton/IconButton.cjs');
require('../../components/Alert/Alert.cjs');
var TransactionConfirmationView = require('../../views/TransactionConfirmationView/TransactionConfirmationView.cjs');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
var Modal = require('../../components/Modal/Modal.cjs');
var ModalCard = require('../../components/ModalCard/ModalCard.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
var Portal = require('../../components/Portal/Portal.cjs');

const TransactionConfirmationModal = ({ title, handler, onReject, onTransactionResponseSuccess, transaction, provider, walletConnector, copykey, }) => {
    usePreventPageScroll.usePreventPageScroll(true);
    const [show, setShow] = React.useState(true);
    const errorRef = React.useRef(null);
    const transactionResponseRef = React.useRef(null);
    const transactionWithGasPrice = useTransactionWithGasPrice.useTransactionWithGasPrice({
        enabled: isMagicConnector.isMagicConnector(walletConnector),
        increasePercentage: 5,
        provider,
        transaction,
    });
    const closeModal = React.useCallback(() => {
        setShow(false);
    }, [setShow]);
    const handleOnModalUnmount = React.useCallback(() => {
        if (transactionResponseRef.current) {
            return onTransactionResponseSuccess(transactionResponseRef.current);
        }
        return onReject(errorRef.current ||
            new viem.TransactionExecutionError(new viem.BaseError('user rejected transaction'), Object.assign({}, transactionWithGasPrice)));
    }, [onTransactionResponseSuccess, onReject]);
    return (jsxRuntime.jsx(Portal.Portal, { handleClose: closeModal, isShown: show, zIndex: index.authModalZIndex, withBackdrop: true, elementId: 'dynamic-send-transaction', transitionEvents: {
            onUnmount: handleOnModalUnmount,
        }, children: jsxRuntime.jsx(Modal.Modal, { children: jsxRuntime.jsx(ModalCard.ModalCard, { children: jsxRuntime.jsx(TransactionConfirmationView.TransactionConfirmationView, { provider: provider, transaction: transactionWithGasPrice, title: title, copykey: copykey, mutation: () => sendTransactionWithAutoNonce.sendTransactionWithAutoNonce(walletConnector, transactionWithGasPrice, handler), onClickClose: closeModal, onError: (error) => (errorRef.current = error), displayPoweredByDynamicFooter: true, onSuccess: (transactionResponse) => {
                        errorRef.current = null;
                        transactionResponseRef.current = transactionResponse;
                        closeModal();
                    } }) }) }) }));
};

exports.TransactionConfirmationModal = TransactionConfirmationModal;
