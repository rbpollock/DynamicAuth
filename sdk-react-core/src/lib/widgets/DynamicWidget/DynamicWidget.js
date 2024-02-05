import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
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
import { useOnClickOutside } from '../../shared/utils/hooks/useOnClickOutside/index.js';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../context/ThemeContext/ThemeContext.js';
import { useIsLoggedIn } from '../../utils/hooks/useIsLoggedIn/useIsLoggedIn.js';
import '@dynamic-labs/types';
import 'yup';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import { ShadowDOM } from '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import './components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import { useWidgetContext } from './context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../components/IconButton/IconButton.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import './views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { DynamicConnectButton } from '../../components/DynamicConnectButton/DynamicConnectButton.js';
import '../../components/InlineWidget/InlineWidget.js';
import { IsBrowser } from '../../components/IsBrowser/IsBrowser.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { DynamicNav } from './components/DynamicNav/DynamicNav.js';
import { DynamicUserProfile } from './components/DynamicUserProfile/DynamicUserProfile.js';

const DynamicWidget = ({ buttonContainerClassName = '', buttonClassName = '', innerButtonComponent, variant = 'modal', }) => {
    const { showAuthFlow, setShowDynamicUserProfile } = useInternalDynamicContext();
    const { widgetRef, inlineControlsRef } = useWidgetContext();
    const { t } = useTranslation();
    if (!innerButtonComponent) {
        innerButtonComponent = t('dyn_widget.connect');
    }
    const closeOnOutsideClick = useCallback((e) => {
        var _a;
        const target = e.composedPath().shift();
        if ((_a = inlineControlsRef.current) === null || _a === void 0 ? void 0 : _a.contains(target))
            return;
        if (variant === 'dropdown' && !showAuthFlow) {
            setShowDynamicUserProfile(false);
        }
    }, [inlineControlsRef, variant, showAuthFlow, setShowDynamicUserProfile]);
    useOnClickOutside(widgetRef, closeOnOutsideClick);
    const showDynamicConnectButton = !useIsLoggedIn();
    return (jsx(IsBrowser, { children: jsx(ShadowDOM, { className: 'dynamic-widget__container', id: 'dynamic-widget', children: showDynamicConnectButton ? (jsx(DynamicConnectButton, { buttonContainerClassName: buttonContainerClassName, buttonClassName: buttonClassName, copykey: 'dyn_widget.connect', children: innerButtonComponent })) : (jsxs(Fragment, { children: [jsx(DynamicNav, {}), jsx(DynamicUserProfile, { variant: variant })] })) }) }));
};

export { DynamicWidget };
