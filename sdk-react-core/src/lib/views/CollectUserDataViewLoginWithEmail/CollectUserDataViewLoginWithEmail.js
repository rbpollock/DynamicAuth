import { jsxs, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import 'react';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgCheckConnection } from '../../shared/assets/check-connection.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import { createUserProfile } from '../../utils/functions/createUserProfile/createUserProfile.js';
import '@dynamic-labs/multi-wallet';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../components/Typography/Typography.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import { Icon } from '../../components/Icon/Icon.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../components/IconButton/IconButton.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { TextButton } from '../../components/TextButton/TextButton.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { OnboardingUserDataForm } from '../CollectUserDataView/OnboardingUserDataForm/OnboardingUserDataForm.js';
import { UserAvatar } from '../../components/UserAvatar/UserAvatar.js';

const CollectUserDataViewLoginWithEmail = () => {
    const { appName, handleLogOut, projectSettings, onboardingImageUrl, decodedOnboardingOnlyToken, } = useInternalDynamicContext();
    const { t } = useTranslation();
    if (!decodedOnboardingOnlyToken) {
        return null;
    }
    const userProfile = createUserProfile(decodedOnboardingOnlyToken);
    return (jsxs("div", { className: 'collect-user-data-login-with-email', "data-testid": 'collect-user-data-login-with-email', children: [onboardingImageUrl && (jsx("img", { className: 'collect-user-data-login-with-email__main-img', src: onboardingImageUrl, alt: 'onboarding' })), jsxs("div", { className: 'collect-user-data-login-with-email__user-info-container', children: [jsx("div", { className: 'collect-user-data-login-with-email__icon-container', children: jsx(UserAvatar, { user: userProfile }) }), jsx(Typography, { variant: 'body_normal', color: 'primary', weight: 'medium', className: 'collect-user-data-login-with-email__email-address', children: userProfile.email })] }), jsxs("div", { className: 'collect-user-data-login-with-email__form', children: [jsx("div", { className: 'collect-user-data-login-with-email__success-icon', children: jsx(Icon, { color: 'text-primary', size: 'large', children: jsx(SvgCheckConnection, {}) }) }), jsx(OnboardingUserDataForm, { userProfile: userProfile, children: jsxs("div", { className: 'collect-user-data-login-with-email__welcome-container', children: [jsx(Typography, { variant: 'title', color: 'primary', className: 'collect-user-data-login-with-email__welcome-title', copykey: 'dyn_collect_user_data.greeting', children: (projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general.collectUserDataWelcomeHeader) ||
                                        t('dyn_collect_user_data.greeting', { appName }) }), jsx(Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', copykey: 'dyn_collect_user_data.description', children: (projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general.collectUserDataWelcomeMessage) ||
                                        t('dyn_collect_user_data.description') })] }) }), jsx(TextButton, { className: 'collect-user-data-login-with-email__log-out', onClick: handleLogOut, copykey: 'dyn_collect_user_data.log_out_button', children: t('dyn_collect_user_data.log_out_button') })] })] }));
};

export { CollectUserDataViewLoginWithEmail };
