import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AndroidIcon, BraveIcon, ChromeIcon, EdgeIcon, FirefoxIcon, AppleIcon, OperaIcon, SafariIcon } from '@dynamic-labs/iconic';
import { classNames } from '../../../../../utils/functions/classNames/classNames.js';
import '@dynamic-labs/utils';
import '../../../../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../../context/ErrorContext/ErrorContext.js';
import '../../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import '../../../../../utils/constants/colors.js';
import '../../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../../config/ApiEndpoint.js';
import '../../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import '../../../../../context/MockContext/MockContext.js';
import '../../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../../../components/ShadowDOM/ShadowDOM.js';
import '../../../../../components/OverlayCard/OverlayCard.context.js';
import '../../../../../context/FooterAnimationContext/index.js';
import '../../../../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../../../../components/Typography/Typography.js';
import '../../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../../context/LoadingContext/LoadingContext.js';
import { getPasskeyProviderFromUserAgent } from '../../../helpers/getPasskeyProviderFromUserAgent.js';
import { getTimeSince } from '../../../helpers/getTimeSince.js';
import '../../../context/DynamicWidgetContext.js';
import '../../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../../components/IconButton/IconButton.js';
import '../../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../../../components/InlineWidget/InlineWidget.js';
import '../../../../../components/MenuList/Dropdown/Dropdown.js';
import { shortenEmail } from '../../../../../shared/utils/functions/shortenEmail/shortenEmail.js';
import '../../../../../components/Popper/Popper/Popper.js';
import '../../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const mapPasskeyProviderToIcon = {
    android: jsx(AndroidIcon, {}),
    brave: jsx(BraveIcon, {}),
    chrome: jsx(ChromeIcon, {}),
    edge: jsx(EdgeIcon, {}),
    firefox: jsx(FirefoxIcon, {}),
    iPhone: jsx(AppleIcon, {}),
    opera: jsx(OperaIcon, {}),
    safari: jsx(SafariIcon, {}),
};
const PasskeyCard = ({ passkey }) => {
    const { t } = useTranslation();
    const [showTooltip, setShowTooltip] = useState(false);
    const { value: timeSinceValue, unit: timeSinceUnit } = getTimeSince(passkey.createdAt);
    const PasskeyProviderIcon = () => {
        if (!passkey.userAgent)
            return null;
        const provider = getPasskeyProviderFromUserAgent(passkey.userAgent);
        if (!provider)
            return null;
        return mapPasskeyProviderToIcon[provider];
    };
    const getPasskeyProviderName = () => {
        if (!passkey.userAgent)
            return null;
        const provider = getPasskeyProviderFromUserAgent(passkey.userAgent);
        if (!provider)
            return null;
        return t(`dyn_manage_passkeys.passkey_providers.${provider}`);
    };
    const handleShowTooltip = () => {
        setShowTooltip(true);
        setTimeout(() => {
            setShowTooltip(false);
        }, 2000);
    };
    return (jsxs("div", { className: 'passkey-card', children: [jsxs("div", { className: 'passkey-card__info', children: [jsx("div", { className: 'passkey-card__info__icon', "data-testid": 'provider-icon', children: jsx(PasskeyProviderIcon, {}) }), jsxs("div", { className: 'passkey-card__info__text', children: [jsxs(Typography, { "data-testid": 'passkey-alias', variant: 'body_normal', color: 'primary', title: passkey.alias, onClick: handleShowTooltip, children: [shortenEmail(passkey.alias, {
                                        breakpoint: 12,
                                        cutEnd: 4,
                                        cutStart: 4,
                                    }), jsx("p", { className: classNames('passkey-card__info__tooltip', {
                                            'passkey-card__info__tooltip--visible': showTooltip,
                                        }), children: passkey.alias })] }), getPasskeyProviderName() && (jsxs(Typography, { variant: 'body_small', color: 'secondary', children: [t('dyn_manage_passkeys.passkey_from'), " ", getPasskeyProviderName()] }))] })] }), jsx("div", { className: 'passkey-card__date', children: jsxs(Typography, { variant: 'body_small', color: 'secondary', copykey: 'dyn_time_since.created', children: [t('dyn_time_since.created'), ' ', `${timeSinceValue} ${timeSinceUnit} ${t('dyn_time_since.ago')}`] }) })] }));
};

export { PasskeyCard };
