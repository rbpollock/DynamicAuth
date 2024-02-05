'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('../../../utils/functions/classNames/classNames.cjs');
var Popper = require('../../Popper/Popper/Popper.cjs');
var PopperContext = require('../../Popper/PopperContext/PopperContext.cjs');
var watchToScrollInHierarchy = require('../utils/watchToScrollInHierarchy/watchToScrollInHierarchy.cjs');
var useForwardedRef = require('../../../shared/utils/hooks/useForwardedRef/useForwardedRef.cjs');
require('../../../shared/logger.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
var index = require('../../../shared/utils/hooks/useOnClickOutside/index.cjs');
require('@dynamic-labs/utils');
require('@dynamic-labs/sdk-api');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../../utils/constants/colors.cjs');
require('viem');
require('../../../shared/consts/index.cjs');
require('../../../context/DynamicContext/DynamicContext.cjs');
require('../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../context/ErrorContext/ErrorContext.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../config/ApiEndpoint.cjs');
require('../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
var useTransition = require('../../../utils/hooks/useTransition/useTransition.cjs');
require('yup');
require('react-i18next');
require('../../../context/MockContext/MockContext.cjs');
require('../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../Alert/Alert.cjs');
require('../../ShadowDOM/ShadowDOM.cjs');
require('../../IconButton/IconButton.cjs');
require('../../InlineWidget/InlineWidget.cjs');
require('../../Transition/ZoomTransition/ZoomTransition.cjs');
require('../../Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../Transition/OpacityTransition/OpacityTransition.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../OverlayCard/OverlayCard.context.cjs');
require('../../../context/FooterAnimationContext/index.cjs');
require('../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../context/LoadingContext/LoadingContext.cjs');
require('../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');

const IN_DURATION = 300;
const OUT_DURATION = 300;
const Dropdown = React.forwardRef((_a, ref) => {
    var { children, isOpen, onClickOutside, onScroll, className, style, maxHeight = 300 } = _a, popperProps = _tslib.__rest(_a, ["children", "isOpen", "onClickOutside", "onScroll", "className", "style", "maxHeight"]);
    // Get popper container
    const { containerRef } = PopperContext.usePopper();
    // ==============================
    // OPEN/CLOSE LOGIC
    // ==============================
    const contentRef = useForwardedRef.useForwardedRef(ref);
    // Close on click outside
    index.useOnClickOutside(contentRef, () => onClickOutside === null || onClickOutside === void 0 ? void 0 : onClickOutside());
    // Listen for scroll events to auto close
    React.useEffect(() => {
        if (!containerRef.current || !popperProps.anchorRef.current)
            return;
        return watchToScrollInHierarchy.watchToScrollInHierarchy(containerRef.current, popperProps.anchorRef.current, () => onScroll === null || onScroll === void 0 ? void 0 : onScroll());
    }, [containerRef, popperProps.anchorRef, onScroll]);
    // ==============================
    // ANIMATIONS
    // ==============================
    const { mount, stage, currentDuration } = useTransition.useTransition({
        inDuration: IN_DURATION,
        isShown: isOpen,
        outDuration: OUT_DURATION,
    });
    const transitionClassName = classNames.classNames({
        'dropdown--entering': stage === 'ENTERING',
        'dropdown--exiting': stage === 'EXITING',
    });
    if (!mount)
        return null;
    return (jsxRuntime.jsx(Popper.Popper, Object.assign({}, popperProps, { ref: contentRef, children: jsxRuntime.jsx("div", { className: classNames.classNames('dropdown', transitionClassName, className), style: Object.assign({ '--max-height': `${maxHeight}px`, animationDuration: `${currentDuration}ms` }, style), children: children }) })));
});
Dropdown.displayName = 'Dropdown';

exports.Dropdown = Dropdown;
