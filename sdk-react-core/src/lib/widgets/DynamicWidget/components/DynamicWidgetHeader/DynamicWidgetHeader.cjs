'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('@dynamic-labs/utils');
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
require('../../../../shared/consts/index.cjs');
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
require('../../../../components/Alert/Alert.cjs');
require('../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
var OptionsSwitcher = require('../../../../components/OptionsSwitcher/OptionsSwitcher.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
var PasskeyCreatedSuccessBanner = require('../../../../components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
var DynamicWidgetContext = require('../../context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var DynamicWidgetWalletHeader = require('./DynamicWidgetWalletHeader/DynamicWidgetWalletHeader.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const options = [
    {
        key: 'wallets',
        label: 'Wallets',
    },
    {
        key: 'profile',
        label: 'Profile',
    },
];
const DynamicWidgetHeader = ({ variant, }) => {
    const { dynamicWidgetView, setDynamicWidgetView } = DynamicWidgetContext.useWidgetContext();
    const { multiWallet } = useInternalDynamicContext.useInternalDynamicContext();
    const isKYCEnabled = useKYCFlag.useKYCFlag();
    // Marks 'Profile' view as active when client goes to 'Edit Profile' view
    const dynamicWidgetSwitcherOverwriteValue = React.useMemo(() => {
        if (!isKYCEnabled && !multiWallet)
            return 'wallets';
        if (dynamicWidgetView === 'edit-profile')
            return 'profile';
        return dynamicWidgetView;
    }, [dynamicWidgetView, isKYCEnabled, multiWallet]);
    return (jsxRuntime.jsxs("div", { className: 'dynamic-widget-header', children: [isKYCEnabled && multiWallet && (jsxRuntime.jsx(OptionsSwitcher.OptionsSwitcher, { rootClassName: 'dynamic-widget-header__switcher', value: dynamicWidgetSwitcherOverwriteValue, options: options, onChange: (view) => setDynamicWidgetView(view) })), jsxRuntime.jsx(PasskeyCreatedSuccessBanner.PasskeyCreatedSuccessBanner, { className: 'dynamic-widget-header__passkey-success' }), (dynamicWidgetSwitcherOverwriteValue === 'wallets' ||
                (dynamicWidgetSwitcherOverwriteValue === 'profile' &&
                    !multiWallet)) && jsxRuntime.jsx(DynamicWidgetWalletHeader.DynamicWidgetWalletHeader, { variant: variant })] }));
};
const MemoizedDynamicWidgetHeader = React__default["default"].memo(DynamicWidgetHeader);

exports.DynamicWidgetHeader = DynamicWidgetHeader;
exports.MemoizedDynamicWidgetHeader = MemoizedDynamicWidgetHeader;
exports["default"] = MemoizedDynamicWidgetHeader;
