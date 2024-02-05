'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../config/ApiEndpoint.cjs');
require('../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../context/ThemeContext/ThemeContext.cjs');
var useIsLoggedIn = require('../../../utils/hooks/useIsLoggedIn/useIsLoggedIn.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../../context/MockContext/MockContext.cjs');
require('../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../context/UserWalletsContext/UserWalletsContext.cjs');
var DynamicAuthLayout = require('../../../layout/DynamicAuthLayout/DynamicAuthLayout.cjs');
require('../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
var ShadowDOM = require('../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../components/IconButton/IconButton.cjs');
require('../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var index = require('../../../context/FooterAnimationContext/index.cjs');
require('../../../components/InlineWidget/InlineWidget.cjs');
var IsBrowser = require('../../../components/IsBrowser/IsBrowser.cjs');
require('../../../components/MenuList/Dropdown/Dropdown.cjs');
var ModalCard = require('../../../components/ModalCard/ModalCard.cjs');
require('../../../components/Popper/Popper/Popper.cjs');
var PopperContext = require('../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var SocialRedirectContext = require('../../../context/SocialRedirectContext/SocialRedirectContext.cjs');
require('../../../views/WalletList/WalletList.cjs');
var viewToComponentMap = require('../../../views/viewToComponentMap.cjs');

const DynamicEmbeddedAuthFlow = ({ background = 'none', className, style, }) => {
    const hide = useIsLoggedIn.useIsLoggedIn();
    const { projectSettings, internalEvents, isRenderingEmbeddedAuthFlow } = useInternalDynamicContext.useInternalDynamicContext();
    const { view: authView, goToInitialView: resetAuthView } = ViewContext.useViewContext();
    // Reset view when user logs out
    React.useEffect(() => {
        const currentEvents = internalEvents.current;
        currentEvents.addListener('logout', resetAuthView);
        return () => {
            currentEvents.removeListener('logout', resetAuthView);
        };
    }, [internalEvents, resetAuthView]);
    // Keep isRenderingEmbeddedAuthFlow up to date
    React.useEffect(() => {
        isRenderingEmbeddedAuthFlow.current = !hide;
        return () => {
            isRenderingEmbeddedAuthFlow.current = false;
        };
    }, [hide]);
    if (hide)
        return null;
    const content = (jsxRuntime.jsx(DynamicAuthLayout.DynamicAuthLayout, { className: className, style: style, projectSettings: projectSettings, children: viewToComponentMap.viewToComponentMap[authView] }));
    return (jsxRuntime.jsx(IsBrowser.IsBrowser, { children: jsxRuntime.jsx(ShadowDOM.ShadowDOM, { className: 'embedded-widget', children: jsxRuntime.jsx(PopperContext.PopperProvider, { children: jsxRuntime.jsx(SocialRedirectContext.SocialRedirectContextProvider, { children: jsxRuntime.jsx(index.FooterAnimationContextProvider, { children: background === 'none' ? (content) : (jsxRuntime.jsx(ModalCard.ModalCard, { border: background === 'with-border', sharpBottomRadiusOnMobile: false, children: content })) }) }) }) }) }));
};

exports.DynamicEmbeddedAuthFlow = DynamicEmbeddedAuthFlow;
