'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var chevronLeft = require('../../../../shared/assets/chevron-left.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
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
require('../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
var index = require('../../../../context/FooterAnimationContext/index.cjs');
var useAuthLayoutChecks = require('../../../../utils/hooks/useAuthLayoutChecks/useAuthLayoutChecks.cjs');
var useDynamicLayoutData = require('../../../../utils/hooks/useDynamicLayoutData/useDynamicLayoutData.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var ModalHeader = require('../../../../components/ModalHeader/ModalHeader.cjs');
var IconButton = require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const HelpHeader = () => {
    const { authMode, selectedWalletConnector } = useInternalDynamicContext.useInternalDynamicContext();
    const { setIsFooterExpanded } = index.useFooterAnimationContext();
    const { view } = ViewContext.useViewContext();
    const { helpHeaderData } = useDynamicLayoutData.useDynamicLayoutData({ authMode, view });
    const { displayBorderBelowHeader } = useAuthLayoutChecks.useAuthLayoutChecks(selectedWalletConnector);
    const backButton = (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: () => setIsFooterExpanded(false), "data-testid": 'back-button', className: 'header__icon', children: jsxRuntime.jsx(chevronLeft.ReactComponent, { className: 'back-button ' }) }));
    return (jsxRuntime.jsx("div", { className: 'help-header', children: jsxRuntime.jsx(ModalHeader.ModalHeader, { trailing: backButton, displayLeading: false, displayBorder: displayBorderBelowHeader, children: jsxRuntime.jsx(Typography.Typography, { as: 'h1', variant: 'title', color: 'primary', "data-testid": 'dynamic-auth-help-heading', className: 'header__typography', copykey: helpHeaderData === null || helpHeaderData === void 0 ? void 0 : helpHeaderData.copykey, children: helpHeaderData === null || helpHeaderData === void 0 ? void 0 : helpHeaderData.heading }) }) }));
};

exports.HelpHeader = HelpHeader;
