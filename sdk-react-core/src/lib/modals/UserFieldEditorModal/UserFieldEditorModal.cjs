'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
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
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var UserFieldEditorView = require('../../views/UserFieldEditorView/UserFieldEditorView.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
var Modal = require('../../components/Modal/Modal.cjs');
var ModalCard = require('../../components/ModalCard/ModalCard.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
var Portal = require('../../components/Portal/Portal.cjs');

const UserFieldEditorModal = (_a) => {
    var { onCancel, onSubmit, fields } = _a, textOptions = _tslib.__rest(_a, ["onCancel", "onSubmit", "fields"]);
    const [show, setShow] = React.useState(true);
    /** Whether onCancel or onSubmit has been called */
    const alreadyResolved = React.useRef(false);
    const handleOnModalUnmount = React.useCallback(() => {
        if (!alreadyResolved.current)
            onCancel('User cancelled');
        alreadyResolved.current = true;
    }, [onCancel]);
    const onAccept = (newValues) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        return onSubmit(newValues).then(() => {
            // Close modal but prevent onCancel from being called
            alreadyResolved.current = true;
            setShow(false);
        });
    });
    const cancelAndClose = () => setShow(false);
    return (jsxRuntime.jsx(Portal.Portal, { handleClose: cancelAndClose, isShown: show, zIndex: index.authModalZIndex, withBackdrop: true, elementId: 'dynamic-edit-user-field', transitionEvents: {
            onUnmount: handleOnModalUnmount,
        }, children: jsxRuntime.jsx(Modal.Modal, { children: jsxRuntime.jsx(ModalCard.ModalCard, { children: jsxRuntime.jsx(UserFieldEditorView.UserFieldEditorView, Object.assign({ onSubmit: onAccept, onClickClose: cancelAndClose, fields: fields }, textOptions)) }) }) }));
};

exports.UserFieldEditorModal = UserFieldEditorModal;
