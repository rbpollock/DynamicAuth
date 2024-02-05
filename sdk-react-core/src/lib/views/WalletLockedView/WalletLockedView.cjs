'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var walletBook = require('@dynamic-labs/wallet-book');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var pixelToRem = require('../../utils/functions/pixelToRem/pixelToRem.cjs');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../context/ThemeContext/ThemeContext.cjs');
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
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../components/Typography/Typography.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
var IconWithSpinner = require('../../components/IconWithSpinner/IconWithSpinner.cjs');
var Divider = require('../../components/Divider/Divider.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
var ErrorContainer = require('../../components/ErrorContainer/ErrorContainer.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../components/Button/Button.cjs');
require('../../components/IconButton/IconButton.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var TextButton = require('../../components/TextButton/TextButton.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const iconSize = 64;
const WalletLockedView = () => {
    const { handleLogOut, primaryWallet, setShowAuthFlow, appName, authToken } = useInternalDynamicContext.useInternalDynamicContext();
    const { t } = reactI18next.useTranslation();
    React.useEffect(() => {
        // when there is no valid session, we want to log user out
        if (!authToken) {
            handleLogOut();
        }
    }, [authToken, handleLogOut]);
    if (!primaryWallet) {
        return null;
    }
    const handleConnectWallet = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        try {
            yield primaryWallet.connector.connect();
            setShowAuthFlow(false);
        }
        catch (_a) {
            logger.logger.info('could not connect wallet');
        }
    });
    const icon = (jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: primaryWallet.connector.key, style: {
            height: pixelToRem.pixelToRem(iconSize * IconWithSpinner.iconRatio),
            width: pixelToRem.pixelToRem(iconSize * IconWithSpinner.iconRatio),
        } }));
    return (jsxRuntime.jsxs("div", { "data-testid": 'wallet-locked-view', children: [jsxRuntime.jsx(ErrorContainer.ErrorContainer, { withIcon: false, variant: 'success', className: 'wallet-locked-view__error-container', copykey: 'dyn_wallet_locked.connect_continue', children: t('dyn_wallet_locked.connect_continue') }), jsxRuntime.jsxs("div", { className: 'wallet-locked-view__content', children: [jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { Icon: icon, iconSize: iconSize, className: 'wallet-locked-view__icon', isSpinning: true }), jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', weight: 'medium', className: 'wallet-locked-view__title', copykey: 'dyn_wallet_locked.title', children: t('dyn_wallet_locked.title') }), jsxRuntime.jsxs(Typography.Typography, { variant: 'body_normal', color: 'secondary', weight: 'regular', copykey: 'dyn_wallet_locked.subtitle', children: [t('dyn_wallet_locked.subtitle'), appName, "."] }), jsxRuntime.jsx(Button.Button, { onClick: () => handleConnectWallet(), buttonClassName: 'wallet-locked-view__button', copykey: 'dyn_wallet_locked.connect', children: t('dyn_wallet_locked.connect') }), jsxRuntime.jsx(Divider.Divider, { text: 'Or' }), jsxRuntime.jsx(TextButton.TextButton, { className: 'wallet-locked-view__log-out', onClick: handleLogOut, copykey: 'dyn_wallet_locked.logout', children: t('dyn_wallet_locked.logout') })] })] }));
};

exports.WalletLockedView = WalletLockedView;
