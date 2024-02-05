'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
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
var index = require('../../shared/utils/hooks/useOnClickOutside/index.cjs');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../context/ThemeContext/ThemeContext.cjs');
var useIsLoggedIn = require('../../utils/hooks/useIsLoggedIn/useIsLoggedIn.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
var ShadowDOM = require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('./components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
var DynamicWidgetContext = require('./context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../components/IconButton/IconButton.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('./views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var DynamicConnectButton = require('../../components/DynamicConnectButton/DynamicConnectButton.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
var IsBrowser = require('../../components/IsBrowser/IsBrowser.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var DynamicNav = require('./components/DynamicNav/DynamicNav.cjs');
var DynamicUserProfile = require('./components/DynamicUserProfile/DynamicUserProfile.cjs');

const DynamicWidget = ({ buttonContainerClassName = '', buttonClassName = '', innerButtonComponent, variant = 'modal', }) => {
    const { showAuthFlow, setShowDynamicUserProfile } = useInternalDynamicContext.useInternalDynamicContext();
    const { widgetRef, inlineControlsRef } = DynamicWidgetContext.useWidgetContext();
    const { t } = reactI18next.useTranslation();
    if (!innerButtonComponent) {
        innerButtonComponent = t('dyn_widget.connect');
    }
    const closeOnOutsideClick = React.useCallback((e) => {
        var _a;
        const target = e.composedPath().shift();
        if ((_a = inlineControlsRef.current) === null || _a === void 0 ? void 0 : _a.contains(target))
            return;
        if (variant === 'dropdown' && !showAuthFlow) {
            setShowDynamicUserProfile(false);
        }
    }, [inlineControlsRef, variant, showAuthFlow, setShowDynamicUserProfile]);
    index.useOnClickOutside(widgetRef, closeOnOutsideClick);
    const showDynamicConnectButton = !useIsLoggedIn.useIsLoggedIn();
    return (jsxRuntime.jsx(IsBrowser.IsBrowser, { children: jsxRuntime.jsx(ShadowDOM.ShadowDOM, { className: 'dynamic-widget__container', id: 'dynamic-widget', children: showDynamicConnectButton ? (jsxRuntime.jsx(DynamicConnectButton.DynamicConnectButton, { buttonContainerClassName: buttonContainerClassName, buttonClassName: buttonClassName, copykey: 'dyn_widget.connect', children: innerButtonComponent })) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(DynamicNav.DynamicNav, {}), jsxRuntime.jsx(DynamicUserProfile.DynamicUserProfile, { variant: variant })] })) }) }));
};

exports.DynamicWidget = DynamicWidget;
