import { jsx } from 'react/jsx-runtime';
import { useState, useRef, useCallback } from 'react';
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
import 'viem';
import { usePreventPageScroll } from '../../shared/utils/hooks/usePreventPageScroll/usePreventPageScroll.js';
import { authModalZIndex } from '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
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
import { VerticalDrawerTransition } from '../../components/Transition/VerticalDrawerTransition/VerticalDrawerTransition.js';
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
import { SendBalanceView } from '../../views/SendBalanceView/SendBalanceView.js';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '@dynamic-labs/viem-utils';
import '../../components/Alert/Alert.js';
import '../../components/IconButton/IconButton.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import { Modal } from '../../components/Modal/Modal.js';
import { ModalCard } from '../../components/ModalCard/ModalCard.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import { Portal } from '../../components/Portal/Portal.js';

const SendBalanceModal = ({ initialRecipientAddress, initialValue, onReject, onSuccess, }) => {
    usePreventPageScroll(true);
    const [show, setShow] = useState(true);
    const errorRef = useRef(null);
    const transactionRef = useRef(null);
    const handleOnModalUnmount = useCallback(() => {
        if (transactionRef.current) {
            onSuccess(transactionRef.current);
            return;
        }
        onReject(errorRef.current || new Error('user rejected transaction'));
    }, [onReject, onSuccess]);
    const closeModal = () => {
        setShow(false);
    };
    return (jsx(Portal, { handleClose: closeModal, isShown: show, zIndex: authModalZIndex, withBackdrop: true, elementId: 'dynamic-send-balance', transitionEvents: {
            onUnmount: handleOnModalUnmount,
        }, children: jsx(Modal, { children: jsx(ModalCard, { children: jsx(VerticalDrawerTransition, { isShown: true, children: jsx(SendBalanceView, { initialRecipientAddress: initialRecipientAddress, initialValue: initialValue, onError: (error) => (errorRef.current = error), onClickClose: closeModal, onDone: closeModal, displayPoweredByDynamicFooter: true, onSuccess: (transaction) => {
                            errorRef.current = null;
                            transactionRef.current = transaction;
                        } }) }) }) }) }));
};

export { SendBalanceModal };
