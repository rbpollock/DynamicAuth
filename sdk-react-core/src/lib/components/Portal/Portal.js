import { jsx, jsxs } from 'react/jsx-runtime';
import { createPortal } from 'react-dom';
import ReactFocusLock from 'react-focus-lock';
import '../Transition/ZoomTransition/ZoomTransition.js';
import '../Transition/SlideInUpTransition/SlideInUpTransition.js';
import { OpacityTransition } from '../Transition/OpacityTransition/OpacityTransition.js';
import 'react';
import '@dynamic-labs/utils';
import '../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import { useElementById } from '../../utils/hooks/useElementById/useElementById.js';
import '../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../Alert/Alert.js';
import { ShadowDOM } from '../ShadowDOM/ShadowDOM.js';
import '../IconButton/IconButton.js';
import '../InlineWidget/InlineWidget.js';
import '../MenuList/Dropdown/Dropdown.js';
import '../Popper/Popper/Popper.js';
import '../Popper/PopperContext/PopperContext.js';
import { useKeyboardEventListener } from '../../utils/hooks/useKeyboardEventListener/useKeyboardEventListener.js';
import 'formik';
import 'i18next';
import '../OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';

const ModalComponent = ({ children, handleClose, withBackdrop = true, zIndex, whiteList, }) => {
    const { view } = useViewContext();
    const shouldCloseOnBackdropClick = view !== 'collect-user-data' &&
        view !== 'update-email' &&
        view !== 'login-with-email-verification' &&
        view !== 'verify-email';
    const handleKeyClose = (event) => {
        if (!shouldCloseOnBackdropClick)
            return;
        if (event.key === 'Escape')
            handleClose();
    };
    const onBackdropClick = (e) => {
        if (!shouldCloseOnBackdropClick)
            return;
        e.stopPropagation();
        handleClose();
    };
    useKeyboardEventListener({
        disabled: !shouldCloseOnBackdropClick,
        inputKey: 'Escape',
        onKeyPressed: handleClose,
    });
    return (jsxs(ReactFocusLock, { className: 'portal__container', whiteList: whiteList, children: [withBackdrop && (jsx("div", { "data-testid": 'portal-backdrop', role: 'button', onClick: (e) => {
                    onBackdropClick(e);
                }, onKeyDown: handleKeyClose, tabIndex: 0, "aria-label": 'Close modal', 
                // z-index - 2 to ensure that the backdrop is always behind the content
                style: { zIndex: zIndex ? zIndex - 2 : undefined }, className: 'portal__backdrop' })), jsx("div", { style: { zIndex }, children: children })] }));
};
const Portal = ({ children, isShown, handleClose, withBackdrop, zIndex, transitionEvents, elementId = 'dynamic-modal', }) => {
    const modalRootElementRef = useElementById(elementId);
    return createPortal(jsx(ShadowDOM, { zIndex: zIndex, dataTestId: 'dynamic-modal-shadow', children: jsx(OpacityTransition, Object.assign({ isShown: isShown }, transitionEvents, { children: jsx(ModalComponent, { handleClose: handleClose, withBackdrop: withBackdrop, whiteList: (node) => modalRootElementRef.current.contains(node), children: children }) })) }), modalRootElementRef.current);
};

export { Portal };
