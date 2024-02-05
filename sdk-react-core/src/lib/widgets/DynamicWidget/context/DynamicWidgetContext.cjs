'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/utils');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../context/ErrorContext/ErrorContext.cjs');
require('../../../context/ViewContext/ViewContext.cjs');
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
var useKYCFlag = require('../../../utils/hooks/useKYCFlag/useKYCFlag.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../../context/MockContext/MockContext.cjs');
require('../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../components/Alert/Alert.cjs');
require('../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../components/IconButton/IconButton.cjs');
require('../../../components/InlineWidget/InlineWidget.cjs');
require('../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../components/Popper/Popper/Popper.cjs');
require('../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../context/FooterAnimationContext/index.cjs');
require('../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../context/LoadingContext/LoadingContext.cjs');
require('../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
var useViewController = require('../hooks/useViewController/useViewController.cjs');
require('@dynamic-labs/viem-utils');
require('../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');

const DynamicWidgetContext = React.createContext(undefined);
const DynamicWidgetContextProvider = ({ children, }) => {
    const widgetRef = React.useRef(null);
    const inlineControlsRef = React.useRef(null);
    const availableWalletsContainerRef = React.useRef(null);
    const { setShowDynamicUserProfile, showDynamicUserProfile, multiWallet } = useInternalDynamicContext.useInternalDynamicContext();
    const isKYCEnabled = useKYCFlag.useKYCFlag();
    const { view: dynamicWidgetView, setView: setDynamicWidgetView, goToInitialView: goToInitialDynamicWidgetView, } = useViewController.useViewController(isKYCEnabled && !multiWallet ? 'profile' : 'wallets');
    const goToProfileView = React.useCallback(() => {
        if (isKYCEnabled)
            return setDynamicWidgetView('profile');
        setDynamicWidgetView('wallets');
    }, [isKYCEnabled, multiWallet]);
    const value = React.useMemo(() => ({
        availableWalletsContainerRef,
        dynamicWidgetView,
        goToInitialDynamicWidgetView,
        goToProfileView,
        inlineControlsRef,
        isOpen: showDynamicUserProfile,
        setDynamicWidgetView,
        setIsOpen: setShowDynamicUserProfile,
        widgetRef,
    }), [
        dynamicWidgetView,
        setShowDynamicUserProfile,
        goToInitialDynamicWidgetView,
        goToProfileView,
        showDynamicUserProfile,
    ]);
    return (jsxRuntime.jsx(DynamicWidgetContext.Provider, { value: value, children: children }));
};
const useWidgetContext = () => {
    const context = React.useContext(DynamicWidgetContext);
    if (context === undefined) {
        throw new Error('usage of useWidgetContext not wrapped in `DynamicWidgetContextProvider`.');
    }
    return context;
};

exports.DynamicWidgetContext = DynamicWidgetContext;
exports.DynamicWidgetContextProvider = DynamicWidgetContextProvider;
exports.useWidgetContext = useWidgetContext;
