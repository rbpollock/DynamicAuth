import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { UserProfileIcon } from '@dynamic-labs/iconic';
import 'react';
import '@dynamic-labs/utils';
import '../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getSocialSignInProviderForProviderEnum } from '../../utils/functions/getSocialSignInProviderForProviderEnum/getSocialSignInProviderForProviderEnum.js';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import { useAccountExistsContext } from '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { useMutation } from '../../utils/hooks/useMutation/useMutation.js';
import { useFindSocialIcon } from '../../utils/hooks/useFindSocialIcon/useFindSocialIcon.js';
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
import { IconWithSpinner } from '../../components/IconWithSpinner/IconWithSpinner.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../components/IconButton/IconButton.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { IconListTile } from '../../components/IconListTile/IconListTile.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { capitalize } from '../../shared/utils/functions/capitalize/capitalize.js';
import { useSocialRedirectContext } from '../../context/SocialRedirectContext/SocialRedirectContext.js';
import { LoginEmailForm } from '../LoginView/sections/EmailSignInSection/LoginEmailForm.js';

const AccountExistsView = () => {
    const { existentAccountData } = useAccountExistsContext();
    const { t } = useTranslation();
    const { email, embeddedSocialSigninProvider } = existentAccountData || {};
    const existingSocialSignInProvider = getSocialSignInProviderForProviderEnum(embeddedSocialSigninProvider);
    const { socialProvider, setSocialProvider, socialWalletConnector } = useSocialRedirectContext();
    const findSocialIcon = useFindSocialIcon();
    const { mutate: handleNewLoging } = useMutation(() => __awaiter(void 0, void 0, void 0, function* () {
        setSocialProvider(existingSocialSignInProvider);
        yield (socialWalletConnector === null || socialWalletConnector === void 0 ? void 0 : socialWalletConnector.endSession());
        return socialWalletConnector === null || socialWalletConnector === void 0 ? void 0 : socialWalletConnector.connect(embeddedSocialSigninProvider);
    }));
    const renderFullMessage = () => {
        const messageTrail = embeddedSocialSigninProvider
            ? t('dyn_account_exists.trail_message_social', {
                socialOauth: capitalize(embeddedSocialSigninProvider),
            })
            : t('dyn_account_exists.trail_message_email');
        return (jsxs(Fragment, { children: [t('dyn_account_exists.description'), " ", jsx("strong", { children: email }), ' ', messageTrail] }));
    };
    return (jsxs("div", { className: 'account-exists__container', children: [jsx(UserProfileIcon, { className: 'account-exists__image' }), jsxs("div", { className: 'account-exists__main', children: [jsx("div", { className: 'account-exists__content', children: jsx(Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', className: 'account-exists__content--secondary', copykey: 'dyn_account_exists', children: renderFullMessage() }) }), embeddedSocialSigninProvider ? (jsxs(IconListTile, { dataTestId: `inline-${embeddedSocialSigninProvider}`, onClick: () => handleNewLoging(), className: 'social-sign-in--tile', children: [jsx(IconWithSpinner, { Icon: findSocialIcon(embeddedSocialSigninProvider), isSpinning: socialProvider === existingSocialSignInProvider, iconSize: 32 }), jsx(Typography, { variant: 'button_primary', copykey: 'dyn_account_exists.connect', children: t('dyn_account_exists.connect', {
                                    socialOauth: capitalize(embeddedSocialSigninProvider === null || embeddedSocialSigninProvider === void 0 ? void 0 : embeddedSocialSigninProvider.toString()),
                                }) })] }, embeddedSocialSigninProvider)) : (jsx(LoginEmailForm, { isLoading: false, currentEmail: email }))] })] }));
};

export { AccountExistsView };
