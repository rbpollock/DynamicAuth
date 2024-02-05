import { __rest, __awaiter } from '../../../../_virtual/_tslib.js';
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
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { UserFieldEditorView } from '../../views/UserFieldEditorView/UserFieldEditorView.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import { Modal } from '../../components/Modal/Modal.js';
import { ModalCard } from '../../components/ModalCard/ModalCard.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import { Portal } from '../../components/Portal/Portal.js';

const UserFieldEditorModal = (_a) => {
    var { onCancel, onSubmit, fields } = _a, textOptions = __rest(_a, ["onCancel", "onSubmit", "fields"]);
    const [show, setShow] = useState(true);
    /** Whether onCancel or onSubmit has been called */
    const alreadyResolved = useRef(false);
    const handleOnModalUnmount = useCallback(() => {
        if (!alreadyResolved.current)
            onCancel('User cancelled');
        alreadyResolved.current = true;
    }, [onCancel]);
    const onAccept = (newValues) => __awaiter(void 0, void 0, void 0, function* () {
        return onSubmit(newValues).then(() => {
            // Close modal but prevent onCancel from being called
            alreadyResolved.current = true;
            setShow(false);
        });
    });
    const cancelAndClose = () => setShow(false);
    return (jsx(Portal, { handleClose: cancelAndClose, isShown: show, zIndex: authModalZIndex, withBackdrop: true, elementId: 'dynamic-edit-user-field', transitionEvents: {
            onUnmount: handleOnModalUnmount,
        }, children: jsx(Modal, { children: jsx(ModalCard, { children: jsx(UserFieldEditorView, Object.assign({ onSubmit: onAccept, onClickClose: cancelAndClose, fields: fields }, textOptions)) }) }) }));
};

export { UserFieldEditorModal };
