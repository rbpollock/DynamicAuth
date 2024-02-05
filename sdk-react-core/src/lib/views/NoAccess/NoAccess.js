import { jsx, jsxs } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SignInWithEmailIcon } from '@dynamic-labs/iconic';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import { ReactComponent as SvgError } from '../../shared/assets/error.js';
import '@dynamic-labs/wallet-book';
import { shortenWalletAddress } from '../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { pixelToRem } from '../../utils/functions/pixelToRem/pixelToRem.js';
import { useAccessDeniedContext } from '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import { useEmailVerificationContext } from '../../context/EmailVerificationContext/EmailVerificationContext.js';
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
import { AuthProviderIcon } from '../../components/AuthProviderIcon/AuthProviderIcon.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { Button } from '../../components/Button/Button.js';
import '../../components/IconButton/IconButton.js';
import { IconWithStatus } from '../../components/IconWithStatus/IconWithStatus.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { StatusDot } from '../../components/StatusDot/StatusDot.js';
import { getSocialNetworkIcon } from '../../utils/functions/getSocialNetworkIcon/getSocialNetworkIcon.js';
import { useNoAccessText } from './useNoAccessText.js';

const NoAccess = () => {
    const { deniedAddress, setDeniedAddress, setDeniedOauthProvider } = useAccessDeniedContext();
    const { t } = useTranslation();
    const { selectedWalletConnector: walletConnector, socialMediaIconUrl, notInTheListImageUrl, onboardingOnlyJwt, accessDeniedButton, } = useInternalDynamicContext();
    const { email } = useEmailVerificationContext();
    const { goToInitialView } = useViewContext();
    const { _socialMediaLinkText, _socialMediaUrl, isAccessListView, isGateBlockedView, subtitle, title, buttonTitle: _buttonTitle, } = useNoAccessText();
    const handleChangeWallet = () => {
        goToInitialView();
        setDeniedAddress('');
        setDeniedOauthProvider(undefined);
        walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.endSession();
    };
    const SocialMediaIcon = !socialMediaIconUrl || typeof socialMediaIconUrl === 'string'
        ? null
        : getSocialNetworkIcon(Object.keys(socialMediaIconUrl)[0]);
    const Icon = useMemo(() => {
        if (walletConnector) {
            return jsx(AuthProviderIcon, { jwt: onboardingOnlyJwt });
        }
        return (jsx(IconWithStatus, { containerClassName: 'wallet-no-access__icon--verified', Icon: SignInWithEmailIcon, iconSize: 50, InnerIcon: SvgError, variant: 'red' }));
    }, [onboardingOnlyJwt, walletConnector]);
    const formattedAddress = shortenWalletAddress(deniedAddress, 6, 4);
    const buttonTitle = (accessDeniedButton === null || accessDeniedButton === void 0 ? void 0 : accessDeniedButton.title) || _buttonTitle;
    const buttonAction = (accessDeniedButton === null || accessDeniedButton === void 0 ? void 0 : accessDeniedButton.action) || handleChangeWallet;
    const emailOrAddress = email !== null && email !== void 0 ? email : formattedAddress;
    const showNoInTheListImage = Boolean(notInTheListImageUrl) && (isAccessListView || isGateBlockedView);
    const showSocialMediaIcon = SocialMediaIcon && (isAccessListView || isGateBlockedView);
    return (jsxs("div", { className: 'wallet-no-access__container', children: [showNoInTheListImage && (jsx("img", { src: notInTheListImageUrl, alt: t('dyn_no_access.not_in_the_list_image_alt'), className: 'wallet-no-access__image', copykey: 'dyn_no_access.not_in_the_list_image_alt' })), jsxs("div", { className: 'wallet-no-access__main', children: [jsxs("div", { className: 'wallet-no-access__user-info-container', children: [Icon, jsxs("div", { "data-testid": 'walletAddress', className: 'wallet-no-access__wallet-address-container', children: [walletConnector && (jsx(StatusDot, { variant: 'red', containerClassName: 'user-info__status-dot' })), jsx(Typography, { variant: 'body_normal', color: 'primary', weight: 'medium', className: 'wallet-no-access__wallet-address', children: emailOrAddress })] })] }), jsxs("div", { className: 'wallet-no-access__content', children: [jsx(Typography, { variant: 'title', color: 'primary', className: 'wallet-no-access__content--primary', children: title }), jsx(Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', className: 'wallet-no-access__content--secondary', children: subtitle })] }), jsx(Button, { onClick: buttonAction, className: 'wallet-no-access__button--primary', expanded: true, buttonPadding: 'large', children: buttonTitle }), _socialMediaUrl && _socialMediaLinkText && (jsxs("div", { className: 'wallet-no-access__social-info-container', children: [jsxs("a", { href: _socialMediaUrl, className: 'wallet-no-access__waitlist-link', children: [jsx(Typography, { variant: 'button_primary', color: 'primary', children: _socialMediaLinkText }), showSocialMediaIcon && (jsx(SocialMediaIcon, { className: 'wallet-no-access__social-icon', style: {
                                            height: pixelToRem(24),
                                            width: pixelToRem(24),
                                        } }))] }), typeof socialMediaIconUrl === 'string' && (jsx("img", { alt: 'social media', src: socialMediaIconUrl, style: {
                                    height: '1.5rem',
                                    width: '1.5rem',
                                } }))] }))] })] }));
};

export { NoAccess };
