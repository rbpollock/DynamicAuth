'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactDom = require('react-dom');
var ReactFocusLock = require('react-focus-lock');
require('../Transition/ZoomTransition/ZoomTransition.cjs');
require('../Transition/SlideInUpTransition/SlideInUpTransition.cjs');
var OpacityTransition = require('../Transition/OpacityTransition/OpacityTransition.cjs');
require('react');
require('@dynamic-labs/utils');
require('../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
var useElementById = require('../../utils/hooks/useElementById/useElementById.cjs');
require('../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../Alert/Alert.cjs');
var ShadowDOM = require('../ShadowDOM/ShadowDOM.cjs');
require('../IconButton/IconButton.cjs');
require('../InlineWidget/InlineWidget.cjs');
require('../MenuList/Dropdown/Dropdown.cjs');
require('../Popper/Popper/Popper.cjs');
require('../Popper/PopperContext/PopperContext.cjs');
var useKeyboardEventListener = require('../../utils/hooks/useKeyboardEventListener/useKeyboardEventListener.cjs');
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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ReactFocusLock__default = /*#__PURE__*/_interopDefaultLegacy(ReactFocusLock);

const ModalComponent = ({ children, handleClose, withBackdrop = true, zIndex, whiteList, }) => {
    const { view } = ViewContext.useViewContext();
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
    useKeyboardEventListener.useKeyboardEventListener({
        disabled: !shouldCloseOnBackdropClick,
        inputKey: 'Escape',
        onKeyPressed: handleClose,
    });
    return (jsxRuntime.jsxs(ReactFocusLock__default["default"], { className: 'portal__container', whiteList: whiteList, children: [withBackdrop && (jsxRuntime.jsx("div", { "data-testid": 'portal-backdrop', role: 'button', onClick: (e) => {
                    onBackdropClick(e);
                }, onKeyDown: handleKeyClose, tabIndex: 0, "aria-label": 'Close modal', 
                // z-index - 2 to ensure that the backdrop is always behind the content
                style: { zIndex: zIndex ? zIndex - 2 : undefined }, className: 'portal__backdrop' })), jsxRuntime.jsx("div", { style: { zIndex }, children: children })] }));
};
const Portal = ({ children, isShown, handleClose, withBackdrop, zIndex, transitionEvents, elementId = 'dynamic-modal', }) => {
    const modalRootElementRef = useElementById.useElementById(elementId);
    return reactDom.createPortal(jsxRuntime.jsx(ShadowDOM.ShadowDOM, { zIndex: zIndex, dataTestId: 'dynamic-modal-shadow', children: jsxRuntime.jsx(OpacityTransition.OpacityTransition, Object.assign({ isShown: isShown }, transitionEvents, { children: jsxRuntime.jsx(ModalComponent, { handleClose: handleClose, withBackdrop: withBackdrop, whiteList: (node) => modalRootElementRef.current.contains(node), children: children }) })) }), modalRootElementRef.current);
};

exports.Portal = Portal;
