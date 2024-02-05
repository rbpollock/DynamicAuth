import { jsx } from 'react/jsx-runtime';
import { useEffect } from 'react';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../context/CaptchaContext/CaptchaContext.js';
import '../../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import '../../../utils/constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../config/ApiEndpoint.js';
import '../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../context/ThemeContext/ThemeContext.js';
import { useIsLoggedIn } from '../../../utils/hooks/useIsLoggedIn/useIsLoggedIn.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../../context/MockContext/MockContext.js';
import '../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../context/UserWalletsContext/UserWalletsContext.js';
import { DynamicAuthLayout } from '../../../layout/DynamicAuthLayout/DynamicAuthLayout.js';
import '../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../components/Transition/OpacityTransition/OpacityTransition.js';
import { ShadowDOM } from '../../../components/ShadowDOM/ShadowDOM.js';
import '../../../components/OverlayCard/OverlayCard.context.js';
import '../../DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../context/QrCodeContext/QrCodeContext.js';
import '../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../DynamicWidget/context/DynamicWidgetContext.js';
import '../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../components/IconButton/IconButton.js';
import '../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { FooterAnimationContextProvider } from '../../../context/FooterAnimationContext/index.js';
import '../../../components/InlineWidget/InlineWidget.js';
import { IsBrowser } from '../../../components/IsBrowser/IsBrowser.js';
import '../../../components/MenuList/Dropdown/Dropdown.js';
import { ModalCard } from '../../../components/ModalCard/ModalCard.js';
import '../../../components/Popper/Popper/Popper.js';
import { PopperProvider } from '../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { SocialRedirectContextProvider } from '../../../context/SocialRedirectContext/SocialRedirectContext.js';
import '../../../views/WalletList/WalletList.js';
import { viewToComponentMap } from '../../../views/viewToComponentMap.js';

const DynamicEmbeddedAuthFlow = ({ background = 'none', className, style, }) => {
    const hide = useIsLoggedIn();
    const { projectSettings, internalEvents, isRenderingEmbeddedAuthFlow } = useInternalDynamicContext();
    const { view: authView, goToInitialView: resetAuthView } = useViewContext();
    // Reset view when user logs out
    useEffect(() => {
        const currentEvents = internalEvents.current;
        currentEvents.addListener('logout', resetAuthView);
        return () => {
            currentEvents.removeListener('logout', resetAuthView);
        };
    }, [internalEvents, resetAuthView]);
    // Keep isRenderingEmbeddedAuthFlow up to date
    useEffect(() => {
        isRenderingEmbeddedAuthFlow.current = !hide;
        return () => {
            isRenderingEmbeddedAuthFlow.current = false;
        };
    }, [hide]);
    if (hide)
        return null;
    const content = (jsx(DynamicAuthLayout, { className: className, style: style, projectSettings: projectSettings, children: viewToComponentMap[authView] }));
    return (jsx(IsBrowser, { children: jsx(ShadowDOM, { className: 'embedded-widget', children: jsx(PopperProvider, { children: jsx(SocialRedirectContextProvider, { children: jsx(FooterAnimationContextProvider, { children: background === 'none' ? (content) : (jsx(ModalCard, { border: background === 'with-border', sharpBottomRadiusOnMobile: false, children: content })) }) }) }) }) }));
};

export { DynamicEmbeddedAuthFlow };
