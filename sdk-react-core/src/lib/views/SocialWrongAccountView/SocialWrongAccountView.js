import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import '@dynamic-labs/utils';
import '../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
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
import { Button } from '../../components/Button/Button.js';
import '../../components/IconButton/IconButton.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { useSocialRedirectContext } from '../../context/SocialRedirectContext/SocialRedirectContext.js';

const SocialWrongAccountView = () => {
    const [tryAgainClicked, setTryAgainClicked] = useState(false);
    const { socialWalletConnector, socialAccount } = useSocialRedirectContext();
    const { t } = useTranslation();
    const findSocialIcon = useFindSocialIcon();
    if (!socialAccount || !socialWalletConnector)
        return null;
    return (jsxs("div", { className: classNames('social-wrong-account-view__container'), children: [jsx(IconWithSpinner, { Icon: findSocialIcon(socialAccount.oauthProvider), isSpinning: tryAgainClicked, iconSize: 64 }), jsx(Typography, { weight: 'medium', variant: 'title', className: classNames('social-wrong-account-view__title'), copykey: 'dyn_login.wrong_social_account.title', children: t('dyn_login.wrong_social_account.title') }), jsx(Typography, { variant: 'body_normal', weight: 'regular', className: classNames('social-wrong-account-view__copy'), copykey: 'dyn_login.wrong_social_account.subtitle', children: t('dyn_login.wrong_social_account.subtitle') }), jsxs(Typography, { variant: 'body_normal', weight: 'regular', className: classNames('social-wrong-account-view__copy'), copykey: 'dyn_login.wrong_social_account.retry_title', children: [t('dyn_login.wrong_social_account.retry_title'), jsx("b", { children: socialAccount.oauthUsername })] }), jsx(Button, { buttonClassName: 'social-wrong-account-view__button', buttonVariant: 'primary', buttonPadding: 'large', expanded: true, typographyProps: {
                    variant: 'button_primary',
                    weight: 'medium',
                }, disabled: tryAgainClicked, onClick: () => {
                    setTryAgainClicked(true);
                    socialWalletConnector.connect(socialAccount.oauthProvider);
                }, copykey: 'dyn_login.wrong_social_account.retry_button', children: t('dyn_login.wrong_social_account.retry_button') })] }));
};

export { SocialWrongAccountView };
