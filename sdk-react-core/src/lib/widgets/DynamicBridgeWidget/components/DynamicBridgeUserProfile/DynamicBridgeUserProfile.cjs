'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@dynamic-labs/utils');
var DynamicBridgeWidgetContext = require('../../context/DynamicBridgeWidgetContext/DynamicBridgeWidgetContext.cjs');
var DynamicWidgetVariants = require('../../../DynamicWidget/components/DynamicWidgetVariants/DynamicWidgetVariants.cjs');
var index = require('../../../../shared/consts/index.cjs');
var DynamicWidgetCard = require('../../../DynamicWidget/components/DynamicWidgetCard/DynamicWidgetCard.cjs');
var DynamicBridgeWidgetViews = require('../DynamicBridgeWidgetViews/DynamicBridgeWidgetViews.cjs');
require('react');
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
require('@dynamic-labs/multi-wallet');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../context/ThemeContext/ThemeContext.cjs');
var useKYCFlag = require('../../../../utils/hooks/useKYCFlag/useKYCFlag.cjs');
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
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
var OptionsSwitcher = require('../../../../components/OptionsSwitcher/OptionsSwitcher.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const options = [
    {
        key: 'profile',
        label: 'Profile',
    },
    {
        key: 'wallets',
        label: 'Wallets',
    },
];
const DynamicBridgeUserProfile = ({ variant: rawVariant, }) => {
    const { widgetRef, events, bridgeWidgetView, setBridgeWidgetView } = DynamicBridgeWidgetContext.useDynamicBridgeWidgetContext();
    const { setShowBridgeWidget, showBridgeWidget } = useInternalDynamicContext.useInternalDynamicContext();
    const { onDynamicBridgeWidgetClose } = events;
    const variant = utils.isMobile() ? 'modal' : rawVariant;
    const DynamicBridgeViewSwitcher = (OptionsSwitcher.OptionsSwitcher);
    const isKYCEnabled = useKYCFlag.useKYCFlag();
    return (jsxRuntime.jsx(DynamicWidgetVariants.DynamicWidgetVariants, { transitionEvents: {
            onUnmount: onDynamicBridgeWidgetClose,
        }, isOpen: showBridgeWidget, setIsOpen: setShowBridgeWidget, variant: variant, zIndex: index.widgetModalZIndex, children: jsxRuntime.jsxs(DynamicWidgetCard.DynamicWidgetCard, { ref: widgetRef, children: [isKYCEnabled && (jsxRuntime.jsx("div", { className: 'dynamic-bridge-user-profile__switcher', children: jsxRuntime.jsx(DynamicBridgeViewSwitcher, { options: options, value: bridgeWidgetView, onChange: (view) => setBridgeWidgetView(view) }) })), jsxRuntime.jsx(DynamicBridgeWidgetViews.DynamicBridgeWidgetViews, {})] }) }));
};

exports.DynamicBridgeUserProfile = DynamicBridgeUserProfile;
