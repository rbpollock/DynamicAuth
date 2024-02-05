'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var iconic = require('@dynamic-labs/iconic');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
var error = require('../../shared/assets/error.cjs');
require('@dynamic-labs/wallet-book');
var shortenWalletAddress = require('../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var pixelToRem = require('../../utils/functions/pixelToRem/pixelToRem.cjs');
var AccessDeniedContext = require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
var EmailVerificationContext = require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
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
var AuthProviderIcon = require('../../components/AuthProviderIcon/AuthProviderIcon.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../components/Button/Button.cjs');
require('../../components/IconButton/IconButton.cjs');
var IconWithStatus = require('../../components/IconWithStatus/IconWithStatus.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var StatusDot = require('../../components/StatusDot/StatusDot.cjs');
var getSocialNetworkIcon = require('../../utils/functions/getSocialNetworkIcon/getSocialNetworkIcon.cjs');
var useNoAccessText = require('./useNoAccessText.cjs');

const NoAccess = () => {
    const { deniedAddress, setDeniedAddress, setDeniedOauthProvider } = AccessDeniedContext.useAccessDeniedContext();
    const { t } = reactI18next.useTranslation();
    const { selectedWalletConnector: walletConnector, socialMediaIconUrl, notInTheListImageUrl, onboardingOnlyJwt, accessDeniedButton, } = useInternalDynamicContext.useInternalDynamicContext();
    const { email } = EmailVerificationContext.useEmailVerificationContext();
    const { goToInitialView } = ViewContext.useViewContext();
    const { _socialMediaLinkText, _socialMediaUrl, isAccessListView, isGateBlockedView, subtitle, title, buttonTitle: _buttonTitle, } = useNoAccessText.useNoAccessText();
    const handleChangeWallet = () => {
        goToInitialView();
        setDeniedAddress('');
        setDeniedOauthProvider(undefined);
        walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.endSession();
    };
    const SocialMediaIcon = !socialMediaIconUrl || typeof socialMediaIconUrl === 'string'
        ? null
        : getSocialNetworkIcon.getSocialNetworkIcon(Object.keys(socialMediaIconUrl)[0]);
    const Icon = React.useMemo(() => {
        if (walletConnector) {
            return jsxRuntime.jsx(AuthProviderIcon.AuthProviderIcon, { jwt: onboardingOnlyJwt });
        }
        return (jsxRuntime.jsx(IconWithStatus.IconWithStatus, { containerClassName: 'wallet-no-access__icon--verified', Icon: iconic.SignInWithEmailIcon, iconSize: 50, InnerIcon: error.ReactComponent, variant: 'red' }));
    }, [onboardingOnlyJwt, walletConnector]);
    const formattedAddress = shortenWalletAddress.shortenWalletAddress(deniedAddress, 6, 4);
    const buttonTitle = (accessDeniedButton === null || accessDeniedButton === void 0 ? void 0 : accessDeniedButton.title) || _buttonTitle;
    const buttonAction = (accessDeniedButton === null || accessDeniedButton === void 0 ? void 0 : accessDeniedButton.action) || handleChangeWallet;
    const emailOrAddress = email !== null && email !== void 0 ? email : formattedAddress;
    const showNoInTheListImage = Boolean(notInTheListImageUrl) && (isAccessListView || isGateBlockedView);
    const showSocialMediaIcon = SocialMediaIcon && (isAccessListView || isGateBlockedView);
    return (jsxRuntime.jsxs("div", { className: 'wallet-no-access__container', children: [showNoInTheListImage && (jsxRuntime.jsx("img", { src: notInTheListImageUrl, alt: t('dyn_no_access.not_in_the_list_image_alt'), className: 'wallet-no-access__image', copykey: 'dyn_no_access.not_in_the_list_image_alt' })), jsxRuntime.jsxs("div", { className: 'wallet-no-access__main', children: [jsxRuntime.jsxs("div", { className: 'wallet-no-access__user-info-container', children: [Icon, jsxRuntime.jsxs("div", { "data-testid": 'walletAddress', className: 'wallet-no-access__wallet-address-container', children: [walletConnector && (jsxRuntime.jsx(StatusDot.StatusDot, { variant: 'red', containerClassName: 'user-info__status-dot' })), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'primary', weight: 'medium', className: 'wallet-no-access__wallet-address', children: emailOrAddress })] })] }), jsxRuntime.jsxs("div", { className: 'wallet-no-access__content', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', className: 'wallet-no-access__content--primary', children: title }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', className: 'wallet-no-access__content--secondary', children: subtitle })] }), jsxRuntime.jsx(Button.Button, { onClick: buttonAction, className: 'wallet-no-access__button--primary', expanded: true, buttonPadding: 'large', children: buttonTitle }), _socialMediaUrl && _socialMediaLinkText && (jsxRuntime.jsxs("div", { className: 'wallet-no-access__social-info-container', children: [jsxRuntime.jsxs("a", { href: _socialMediaUrl, className: 'wallet-no-access__waitlist-link', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'button_primary', color: 'primary', children: _socialMediaLinkText }), showSocialMediaIcon && (jsxRuntime.jsx(SocialMediaIcon, { className: 'wallet-no-access__social-icon', style: {
                                            height: pixelToRem.pixelToRem(24),
                                            width: pixelToRem.pixelToRem(24),
                                        } }))] }), typeof socialMediaIconUrl === 'string' && (jsxRuntime.jsx("img", { alt: 'social media', src: socialMediaIconUrl, style: {
                                    height: '1.5rem',
                                    width: '1.5rem',
                                } }))] }))] })] }));
};

exports.NoAccess = NoAccess;
