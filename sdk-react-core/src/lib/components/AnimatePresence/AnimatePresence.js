import { useState, useRef, useMemo, useCallback, useEffect, isValidElement, Children, cloneElement } from 'react';
import '@dynamic-labs/utils';
import '../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
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
import 'react-dom';
import '../../context/ThemeContext/ThemeContext.js';
import { useForceUpdate } from '../../utils/hooks/useForceUpdate/useForceUpdate.js';
import { usePrevious } from '../../utils/hooks/usePrevious/usePrevious.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../Alert/Alert.js';
import '../ShadowDOM/ShadowDOM.js';
import '../IconButton/IconButton.js';
import '../InlineWidget/InlineWidget.js';
import '../MenuList/Dropdown/Dropdown.js';
import '../Transition/ZoomTransition/ZoomTransition.js';
import '../Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../Transition/OpacityTransition/OpacityTransition.js';
import '../Popper/Popper/Popper.js';
import '../Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
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

const AnimatePresence = ({ children, animationComponent, }) => {
    const [isShown, setIsShown] = useState(true);
    const forceRerender = useForceUpdate();
    const childrenRef = useRef(null);
    const isChildrenPresent = useMemo(() => Boolean(children), [children]);
    const prevIsChildrenPresent = usePrevious(isChildrenPresent);
    const onUnmount = useCallback(() => {
        childrenRef.current = null;
        forceRerender();
    }, [forceRerender]);
    useEffect(() => {
        if (isValidElement(children)) {
            childrenRef.current = Children.map(children, (child) => cloneElement(child));
        }
    }, [children]);
    useEffect(() => {
        if (isChildrenPresent && !prevIsChildrenPresent) {
            setIsShown(true);
        }
        if (prevIsChildrenPresent && !isChildrenPresent) {
            setIsShown(false);
        }
    }, [isChildrenPresent, prevIsChildrenPresent]);
    return cloneElement(animationComponent, {
        children: children || childrenRef.current,
        isShown,
        onUnmount,
    });
};

export { AnimatePresence };
