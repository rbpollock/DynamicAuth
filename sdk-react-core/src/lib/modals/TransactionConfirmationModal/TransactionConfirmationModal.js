import { jsx } from 'react/jsx-runtime';
import { useState, useRef, useCallback } from 'react';
import { TransactionExecutionError, BaseError } from 'viem';
import '@dynamic-labs/utils';
import '../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import { usePreventPageScroll } from '../../shared/utils/hooks/usePreventPageScroll/usePreventPageScroll.js';
import { authModalZIndex } from '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { isMagicConnector } from '../../utils/functions/isMagicConnector/isMagicConnector.js';
import { sendTransactionWithAutoNonce } from '../../utils/functions/sendTransactionWithAutoNonce/sendTransactionWithAutoNonce.js';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import { useTransactionWithGasPrice } from '../../utils/hooks/useTransactionWithGasPrice/useTransactionWithGasPrice.js';
import 'yup';
import 'react-i18next';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../components/IconButton/IconButton.js';
import '../../components/Alert/Alert.js';
import { TransactionConfirmationView } from '../../views/TransactionConfirmationView/TransactionConfirmationView.js';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import { Modal } from '../../components/Modal/Modal.js';
import { ModalCard } from '../../components/ModalCard/ModalCard.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import { Portal } from '../../components/Portal/Portal.js';

const TransactionConfirmationModal = ({ title, handler, onReject, onTransactionResponseSuccess, transaction, provider, walletConnector, copykey, }) => {
    usePreventPageScroll(true);
    const [show, setShow] = useState(true);
    const errorRef = useRef(null);
    const transactionResponseRef = useRef(null);
    const transactionWithGasPrice = useTransactionWithGasPrice({
        enabled: isMagicConnector(walletConnector),
        increasePercentage: 5,
        provider,
        transaction,
    });
    const closeModal = useCallback(() => {
        setShow(false);
    }, [setShow]);
    const handleOnModalUnmount = useCallback(() => {
        if (transactionResponseRef.current) {
            return onTransactionResponseSuccess(transactionResponseRef.current);
        }
        return onReject(errorRef.current ||
            new TransactionExecutionError(new BaseError('user rejected transaction'), Object.assign({}, transactionWithGasPrice)));
    }, [onTransactionResponseSuccess, onReject]);
    return (jsx(Portal, { handleClose: closeModal, isShown: show, zIndex: authModalZIndex, withBackdrop: true, elementId: 'dynamic-send-transaction', transitionEvents: {
            onUnmount: handleOnModalUnmount,
        }, children: jsx(Modal, { children: jsx(ModalCard, { children: jsx(TransactionConfirmationView, { provider: provider, transaction: transactionWithGasPrice, title: title, copykey: copykey, mutation: () => sendTransactionWithAutoNonce(walletConnector, transactionWithGasPrice, handler), onClickClose: closeModal, onError: (error) => (errorRef.current = error), displayPoweredByDynamicFooter: true, onSuccess: (transactionResponse) => {
                        errorRef.current = null;
                        transactionResponseRef.current = transactionResponse;
                        closeModal();
                    } }) }) }) }));
};

export { TransactionConfirmationModal };
