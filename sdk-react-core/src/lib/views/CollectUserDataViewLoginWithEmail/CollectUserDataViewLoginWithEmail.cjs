'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var checkConnection = require('../../shared/assets/check-connection.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
var createUserProfile = require('../../utils/functions/createUserProfile/createUserProfile.cjs');
require('@dynamic-labs/multi-wallet');
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
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
var Icon = require('../../components/Icon/Icon.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
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
var OnboardingUserDataForm = require('../CollectUserDataView/OnboardingUserDataForm/OnboardingUserDataForm.cjs');
var UserAvatar = require('../../components/UserAvatar/UserAvatar.cjs');

const CollectUserDataViewLoginWithEmail = () => {
    const { appName, handleLogOut, projectSettings, onboardingImageUrl, decodedOnboardingOnlyToken, } = useInternalDynamicContext.useInternalDynamicContext();
    const { t } = reactI18next.useTranslation();
    if (!decodedOnboardingOnlyToken) {
        return null;
    }
    const userProfile = createUserProfile.createUserProfile(decodedOnboardingOnlyToken);
    return (jsxRuntime.jsxs("div", { className: 'collect-user-data-login-with-email', "data-testid": 'collect-user-data-login-with-email', children: [onboardingImageUrl && (jsxRuntime.jsx("img", { className: 'collect-user-data-login-with-email__main-img', src: onboardingImageUrl, alt: 'onboarding' })), jsxRuntime.jsxs("div", { className: 'collect-user-data-login-with-email__user-info-container', children: [jsxRuntime.jsx("div", { className: 'collect-user-data-login-with-email__icon-container', children: jsxRuntime.jsx(UserAvatar.UserAvatar, { user: userProfile }) }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'primary', weight: 'medium', className: 'collect-user-data-login-with-email__email-address', children: userProfile.email })] }), jsxRuntime.jsxs("div", { className: 'collect-user-data-login-with-email__form', children: [jsxRuntime.jsx("div", { className: 'collect-user-data-login-with-email__success-icon', children: jsxRuntime.jsx(Icon.Icon, { color: 'text-primary', size: 'large', children: jsxRuntime.jsx(checkConnection.ReactComponent, {}) }) }), jsxRuntime.jsx(OnboardingUserDataForm.OnboardingUserDataForm, { userProfile: userProfile, children: jsxRuntime.jsxs("div", { className: 'collect-user-data-login-with-email__welcome-container', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', className: 'collect-user-data-login-with-email__welcome-title', copykey: 'dyn_collect_user_data.greeting', children: (projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general.collectUserDataWelcomeHeader) ||
                                        t('dyn_collect_user_data.greeting', { appName }) }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', copykey: 'dyn_collect_user_data.description', children: (projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general.collectUserDataWelcomeMessage) ||
                                        t('dyn_collect_user_data.description') })] }) }), jsxRuntime.jsx(TextButton.TextButton, { className: 'collect-user-data-login-with-email__log-out', onClick: handleLogOut, copykey: 'dyn_collect_user_data.log_out_button', children: t('dyn_collect_user_data.log_out_button') })] })] }));
};

exports.CollectUserDataViewLoginWithEmail = CollectUserDataViewLoginWithEmail;
