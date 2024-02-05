import { __rest } from '../../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useEffect } from 'react';
import { classNames } from '../../../utils/functions/classNames/classNames.js';
import { Popper } from '../../Popper/Popper/Popper.js';
import { usePopper } from '../../Popper/PopperContext/PopperContext.js';
import { watchToScrollInHierarchy } from '../utils/watchToScrollInHierarchy/watchToScrollInHierarchy.js';
import { useForwardedRef } from '../../../shared/utils/hooks/useForwardedRef/useForwardedRef.js';
import '../../../shared/logger.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import { useOnClickOutside } from '../../../shared/utils/hooks/useOnClickOutside/index.js';
import '@dynamic-labs/utils';
import '@dynamic-labs/sdk-api';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../../utils/constants/colors.js';
import 'viem';
import '../../../shared/consts/index.js';
import '../../../context/DynamicContext/DynamicContext.js';
import '../../../context/CaptchaContext/CaptchaContext.js';
import '../../../context/ErrorContext/ErrorContext.js';
import '@dynamic-labs/multi-wallet';
import '../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../config/ApiEndpoint.js';
import '../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import { useTransition } from '../../../utils/hooks/useTransition/useTransition.js';
import 'yup';
import 'react-i18next';
import '../../../context/MockContext/MockContext.js';
import '../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../Alert/Alert.js';
import '../../ShadowDOM/ShadowDOM.js';
import '../../IconButton/IconButton.js';
import '../../InlineWidget/InlineWidget.js';
import '../../Transition/ZoomTransition/ZoomTransition.js';
import '../../Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../Transition/OpacityTransition/OpacityTransition.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../../OverlayCard/OverlayCard.context.js';
import '../../../context/FooterAnimationContext/index.js';
import '../../../context/QrCodeContext/QrCodeContext.js';
import '../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../context/LoadingContext/LoadingContext.js';
import '../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';

const IN_DURATION = 300;
const OUT_DURATION = 300;
const Dropdown = forwardRef((_a, ref) => {
    var { children, isOpen, onClickOutside, onScroll, className, style, maxHeight = 300 } = _a, popperProps = __rest(_a, ["children", "isOpen", "onClickOutside", "onScroll", "className", "style", "maxHeight"]);
    // Get popper container
    const { containerRef } = usePopper();
    // ==============================
    // OPEN/CLOSE LOGIC
    // ==============================
    const contentRef = useForwardedRef(ref);
    // Close on click outside
    useOnClickOutside(contentRef, () => onClickOutside === null || onClickOutside === void 0 ? void 0 : onClickOutside());
    // Listen for scroll events to auto close
    useEffect(() => {
        if (!containerRef.current || !popperProps.anchorRef.current)
            return;
        return watchToScrollInHierarchy(containerRef.current, popperProps.anchorRef.current, () => onScroll === null || onScroll === void 0 ? void 0 : onScroll());
    }, [containerRef, popperProps.anchorRef, onScroll]);
    // ==============================
    // ANIMATIONS
    // ==============================
    const { mount, stage, currentDuration } = useTransition({
        inDuration: IN_DURATION,
        isShown: isOpen,
        outDuration: OUT_DURATION,
    });
    const transitionClassName = classNames({
        'dropdown--entering': stage === 'ENTERING',
        'dropdown--exiting': stage === 'EXITING',
    });
    if (!mount)
        return null;
    return (jsx(Popper, Object.assign({}, popperProps, { ref: contentRef, children: jsx("div", { className: classNames('dropdown', transitionClassName, className), style: Object.assign({ '--max-height': `${maxHeight}px`, animationDuration: `${currentDuration}ms` }, style), children: children }) })));
});
Dropdown.displayName = 'Dropdown';

export { Dropdown };
