'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var iconic = require('@dynamic-labs/iconic');
require('react');
require('@dynamic-labs/utils');
require('../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getSocialSignInProviderForProviderEnum = require('../../utils/functions/getSocialSignInProviderForProviderEnum/getSocialSignInProviderForProviderEnum.cjs');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
var AccountExistsContext = require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var useMutation = require('../../utils/hooks/useMutation/useMutation.cjs');
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
require('../../components/IconButton/IconButton.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var IconListTile = require('../../components/IconListTile/IconListTile.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var capitalize = require('../../shared/utils/functions/capitalize/capitalize.cjs');
var SocialRedirectContext = require('../../context/SocialRedirectContext/SocialRedirectContext.cjs');
var LoginEmailForm = require('../LoginView/sections/EmailSignInSection/LoginEmailForm.cjs');

const AccountExistsView = () => {
    const { existentAccountData } = AccountExistsContext.useAccountExistsContext();
    const { t } = reactI18next.useTranslation();
    const { email, embeddedSocialSigninProvider } = existentAccountData || {};
    const existingSocialSignInProvider = getSocialSignInProviderForProviderEnum.getSocialSignInProviderForProviderEnum(embeddedSocialSigninProvider);
    const { socialProvider, setSocialProvider, socialWalletConnector } = SocialRedirectContext.useSocialRedirectContext();
    const findSocialIcon = useFindSocialIcon.useFindSocialIcon();
    const { mutate: handleNewLoging } = useMutation.useMutation(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        setSocialProvider(existingSocialSignInProvider);
        yield (socialWalletConnector === null || socialWalletConnector === void 0 ? void 0 : socialWalletConnector.endSession());
        return socialWalletConnector === null || socialWalletConnector === void 0 ? void 0 : socialWalletConnector.connect(embeddedSocialSigninProvider);
    }));
    const renderFullMessage = () => {
        const messageTrail = embeddedSocialSigninProvider
            ? t('dyn_account_exists.trail_message_social', {
                socialOauth: capitalize.capitalize(embeddedSocialSigninProvider),
            })
            : t('dyn_account_exists.trail_message_email');
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [t('dyn_account_exists.description'), " ", jsxRuntime.jsx("strong", { children: email }), ' ', messageTrail] }));
    };
    return (jsxRuntime.jsxs("div", { className: 'account-exists__container', children: [jsxRuntime.jsx(iconic.UserProfileIcon, { className: 'account-exists__image' }), jsxRuntime.jsxs("div", { className: 'account-exists__main', children: [jsxRuntime.jsx("div", { className: 'account-exists__content', children: jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', className: 'account-exists__content--secondary', copykey: 'dyn_account_exists', children: renderFullMessage() }) }), embeddedSocialSigninProvider ? (jsxRuntime.jsxs(IconListTile.IconListTile, { dataTestId: `inline-${embeddedSocialSigninProvider}`, onClick: () => handleNewLoging(), className: 'social-sign-in--tile', children: [jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { Icon: findSocialIcon(embeddedSocialSigninProvider), isSpinning: socialProvider === existingSocialSignInProvider, iconSize: 32 }), jsxRuntime.jsx(Typography.Typography, { variant: 'button_primary', copykey: 'dyn_account_exists.connect', children: t('dyn_account_exists.connect', {
                                    socialOauth: capitalize.capitalize(embeddedSocialSigninProvider === null || embeddedSocialSigninProvider === void 0 ? void 0 : embeddedSocialSigninProvider.toString()),
                                }) })] }, embeddedSocialSigninProvider)) : (jsxRuntime.jsx(LoginEmailForm.LoginEmailForm, { isLoading: false, currentEmail: email }))] })] }));
};

exports.AccountExistsView = AccountExistsView;
