'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var VerticalAccordion = require('../../components/Accordion/components/VerticalAccordion/VerticalAccordion.cjs');
var AccordionItem = require('../../components/Accordion/components/AccordionItem/AccordionItem.cjs');
require('../../components/Alert/Alert.cjs');
require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
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
require('react-dom');
require('../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/OverlayCard/OverlayCard.context.cjs');
var OverlayCardTarget = require('../../components/OverlayCard/OverlayCardTarget.cjs');
var index = require('../../context/FooterAnimationContext/index.cjs');
var useAuthLayoutChecks = require('../../utils/hooks/useAuthLayoutChecks/useAuthLayoutChecks.cjs');
var useDynamicLayoutData = require('../../utils/hooks/useDynamicLayoutData/useDynamicLayoutData.cjs');
var DynamicFooter = require('../../components/DynamicFooter/DynamicFooter.cjs');
var header = require('./Header/header.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
var HelpContent = require('./HelpContent/HelpContent.cjs');
var ToSFooter = require('./ToSFooter/ToSFooter.cjs');
var WalletProgressStepper = require('./WalletProgressStepper/WalletProgressStepper.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../context/QrCodeContext/QrCodeContext.cjs');
require('../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../components/IconButton/IconButton.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const DynamicAuthLayout = ({ children, className, style, onClose, projectSettings, hideBridgeProgressSteppers, }) => {
    const { view } = ViewContext.useViewContext();
    const { walletConnector, authMode } = useInternalDynamicContext.useInternalDynamicContext();
    const { isFooterExpanded } = index.useFooterAnimationContext();
    const { headerData, helpHeaderData } = useDynamicLayoutData.useDynamicLayoutData({
        authMode,
        view,
    });
    const { showConnectedWalletProgress, showHeader, showHelpContent, showToSFooter, showDynamicFooter, } = useAuthLayoutChecks.useAuthLayoutChecks(walletConnector);
    return (jsxRuntime.jsx(OverlayCardTarget.OverlayCardTarget, { children: jsxRuntime.jsxs(VerticalAccordion.VerticalAccordion, { style: style, className: className, children: [jsxRuntime.jsxs(AccordionItem.AccordionItem, { isOpen: !isFooterExpanded, dimOnHide: true, children: [showConnectedWalletProgress && !hideBridgeProgressSteppers && (jsxRuntime.jsx(WalletProgressStepper.WalletProgressStepper, {})), showHeader && (jsxRuntime.jsx(header.Header, { onClose: onClose, heading: (headerData === null || headerData === void 0 ? void 0 : headerData.heading) || '', projectSettings: projectSettings, walletConnector: walletConnector, copykey: headerData === null || headerData === void 0 ? void 0 : headerData.copykey })), children, showDynamicFooter && jsxRuntime.jsx(DynamicFooter.DynamicFooter, {}), showToSFooter && jsxRuntime.jsx(ToSFooter.ToSFooter, {})] }), helpHeaderData && showHelpContent && (jsxRuntime.jsx(AccordionItem.AccordionItem, { isOpen: isFooterExpanded, children: jsxRuntime.jsx("div", { children: jsxRuntime.jsx(HelpContent.HelpContent, {}) }, isFooterExpanded.toString()) }))] }) }));
};

exports.DynamicAuthLayout = DynamicAuthLayout;
