'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
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
require('viem');
var usePreventPageScroll = require('../../shared/utils/hooks/usePreventPageScroll/usePreventPageScroll.cjs');
var index = require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
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
var VerticalDrawerTransition = require('../../components/Transition/VerticalDrawerTransition/VerticalDrawerTransition.cjs');
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
var SendBalanceView = require('../../views/SendBalanceView/SendBalanceView.cjs');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('@dynamic-labs/viem-utils');
require('../../components/Alert/Alert.cjs');
require('../../components/IconButton/IconButton.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
var Modal = require('../../components/Modal/Modal.cjs');
var ModalCard = require('../../components/ModalCard/ModalCard.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
var Portal = require('../../components/Portal/Portal.cjs');

const SendBalanceModal = ({ initialRecipientAddress, initialValue, onReject, onSuccess, }) => {
    usePreventPageScroll.usePreventPageScroll(true);
    const [show, setShow] = React.useState(true);
    const errorRef = React.useRef(null);
    const transactionRef = React.useRef(null);
    const handleOnModalUnmount = React.useCallback(() => {
        if (transactionRef.current) {
            onSuccess(transactionRef.current);
            return;
        }
        onReject(errorRef.current || new Error('user rejected transaction'));
    }, [onReject, onSuccess]);
    const closeModal = () => {
        setShow(false);
    };
    return (jsxRuntime.jsx(Portal.Portal, { handleClose: closeModal, isShown: show, zIndex: index.authModalZIndex, withBackdrop: true, elementId: 'dynamic-send-balance', transitionEvents: {
            onUnmount: handleOnModalUnmount,
        }, children: jsxRuntime.jsx(Modal.Modal, { children: jsxRuntime.jsx(ModalCard.ModalCard, { children: jsxRuntime.jsx(VerticalDrawerTransition.VerticalDrawerTransition, { isShown: true, children: jsxRuntime.jsx(SendBalanceView.SendBalanceView, { initialRecipientAddress: initialRecipientAddress, initialValue: initialValue, onError: (error) => (errorRef.current = error), onClickClose: closeModal, onDone: closeModal, displayPoweredByDynamicFooter: true, onSuccess: (transaction) => {
                            errorRef.current = null;
                            transactionRef.current = transaction;
                        } }) }) }) }) }));
};

exports.SendBalanceModal = SendBalanceModal;
