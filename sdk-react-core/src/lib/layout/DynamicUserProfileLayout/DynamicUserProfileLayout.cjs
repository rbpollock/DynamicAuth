'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('react');
require('react-dom');
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
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
require('../../components/Alert/Alert.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/IconButton/IconButton.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
var DynamicWidgetHeader = require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
var DynamicWidgetPrompts = require('../../widgets/DynamicWidget/components/DynamicWidgetPrompts/DynamicWidgetPrompts.cjs');
var DynamicWidgetViews = require('../../widgets/DynamicWidget/components/DynamicWidgetViews/DynamicWidgetViews.cjs');
var DynamicWidgetContext = require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
var DynamicWidgetContext_types = require('../../widgets/DynamicWidget/context/DynamicWidgetContext.types.cjs');
require('@dynamic-labs/viem-utils');
require('../../components/OverlayCard/OverlayCard.context.cjs');
var OverlayCardTarget = require('../../components/OverlayCard/OverlayCardTarget.cjs');

const shouldNotRenderHeaderViews = [
    ...DynamicWidgetContext_types.DynamicPasskeyWidgetViews,
    ...DynamicWidgetContext_types.DynamicTransactionsWidgetViews,
];
const DynamicUserProfileLayout = ({ variant, className, style, }) => {
    const { dynamicWidgetView } = DynamicWidgetContext.useWidgetContext();
    // It should render header only if the view is not send-balance or one of passkey widgets view
    const shouldRenderHeader = !shouldNotRenderHeaderViews.includes(dynamicWidgetView);
    return (jsxRuntime.jsx(OverlayCardTarget.OverlayCardTarget, { children: jsxRuntime.jsxs("div", { className: classNames.classNames(className, 'dynamic-user-profile-layout'), style: style, children: [shouldRenderHeader && jsxRuntime.jsx(DynamicWidgetHeader.MemoizedDynamicWidgetHeader, { variant: variant }), jsxRuntime.jsx(DynamicWidgetViews.DynamicWidgetViews, {}), jsxRuntime.jsx(DynamicWidgetPrompts.DynamicWidgetPrompts, {})] }) }));
};

exports.DynamicUserProfileLayout = DynamicUserProfileLayout;
