'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
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
require('react-dom');
var useFindSocialIcon = require('../../utils/hooks/useFindSocialIcon/useFindSocialIcon.cjs');
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
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../components/Button/Button.cjs');
require('../../components/IconButton/IconButton.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var SocialRedirectContext = require('../../context/SocialRedirectContext/SocialRedirectContext.cjs');

const SocialWrongAccountView = () => {
    const [tryAgainClicked, setTryAgainClicked] = React.useState(false);
    const { socialWalletConnector, socialAccount } = SocialRedirectContext.useSocialRedirectContext();
    const { t } = reactI18next.useTranslation();
    const findSocialIcon = useFindSocialIcon.useFindSocialIcon();
    if (!socialAccount || !socialWalletConnector)
        return null;
    return (jsxRuntime.jsxs("div", { className: classNames.classNames('social-wrong-account-view__container'), children: [jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { Icon: findSocialIcon(socialAccount.oauthProvider), isSpinning: tryAgainClicked, iconSize: 64 }), jsxRuntime.jsx(Typography.Typography, { weight: 'medium', variant: 'title', className: classNames.classNames('social-wrong-account-view__title'), copykey: 'dyn_login.wrong_social_account.title', children: t('dyn_login.wrong_social_account.title') }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', className: classNames.classNames('social-wrong-account-view__copy'), copykey: 'dyn_login.wrong_social_account.subtitle', children: t('dyn_login.wrong_social_account.subtitle') }), jsxRuntime.jsxs(Typography.Typography, { variant: 'body_normal', weight: 'regular', className: classNames.classNames('social-wrong-account-view__copy'), copykey: 'dyn_login.wrong_social_account.retry_title', children: [t('dyn_login.wrong_social_account.retry_title'), jsxRuntime.jsx("b", { children: socialAccount.oauthUsername })] }), jsxRuntime.jsx(Button.Button, { buttonClassName: 'social-wrong-account-view__button', buttonVariant: 'primary', buttonPadding: 'large', expanded: true, typographyProps: {
                    variant: 'button_primary',
                    weight: 'medium',
                }, disabled: tryAgainClicked, onClick: () => {
                    setTryAgainClicked(true);
                    socialWalletConnector.connect(socialAccount.oauthProvider);
                }, copykey: 'dyn_login.wrong_social_account.retry_button', children: t('dyn_login.wrong_social_account.retry_button') })] }));
};

exports.SocialWrongAccountView = SocialWrongAccountView;
