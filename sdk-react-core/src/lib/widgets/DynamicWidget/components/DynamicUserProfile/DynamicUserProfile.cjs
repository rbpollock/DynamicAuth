'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var utils = require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var index = require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../../../context/MockContext/MockContext.cjs');
require('../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
var ShadowDOM = require('../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
var DynamicUserProfileLayout = require('../../../../layout/DynamicUserProfileLayout/DynamicUserProfileLayout.cjs');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('formik');
require('../../../../components/InlineWidget/InlineWidget.cjs');
var IsBrowser = require('../../../../components/IsBrowser/IsBrowser.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
var PopperContext = require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('i18next');
var DynamicWidgetContext = require('../../context/DynamicWidgetContext.cjs');
var DynamicWidgetCard = require('../DynamicWidgetCard/DynamicWidgetCard.cjs');
var DynamicWidgetVariants = require('../DynamicWidgetVariants/DynamicWidgetVariants.cjs');

const DynamicUserProfile = ({ variant, }) => {
    const { projectSettings } = useInternalDynamicContext.useInternalDynamicContext();
    const { setIsOpen, isOpen, widgetRef } = DynamicWidgetContext.useWidgetContext();
    const _variant = React.useMemo(() => {
        if (utils.isMobile()) {
            return 'modal';
        }
        return variant;
    }, [variant]);
    if (!projectSettings)
        return null;
    return (jsxRuntime.jsx(IsBrowser.IsBrowser, { children: jsxRuntime.jsx(PopperContext.PopperProvider, { children: jsxRuntime.jsx(DynamicWidgetVariants.DynamicWidgetVariants, { isOpen: isOpen, setIsOpen: setIsOpen, variant: _variant, zIndex: index.widgetModalZIndex, children: jsxRuntime.jsx(DynamicWidgetCard.DynamicWidgetCard, { ref: widgetRef, children: jsxRuntime.jsx(DynamicUserProfileLayout.DynamicUserProfileLayout, { variant: variant }) }) }) }) }));
};
const ShadowedDynamicUserProfile = () => (jsxRuntime.jsx(ShadowDOM.ShadowDOM, { zIndex: index.widgetModalZIndex, children: jsxRuntime.jsx(DynamicUserProfile, {}) }));

exports.DynamicUserProfile = DynamicUserProfile;
exports.ShadowedDynamicUserProfile = ShadowedDynamicUserProfile;
