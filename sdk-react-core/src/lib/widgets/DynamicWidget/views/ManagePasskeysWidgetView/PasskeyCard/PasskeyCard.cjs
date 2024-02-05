'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var iconic = require('@dynamic-labs/iconic');
var classNames = require('../../../../../utils/functions/classNames/classNames.cjs');
require('@dynamic-labs/utils');
require('../../../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../../utils/constants/colors.cjs');
require('../../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../../config/ApiEndpoint.cjs');
require('../../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../../../../context/MockContext/MockContext.cjs');
require('../../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../../context/FooterAnimationContext/index.cjs');
require('../../../../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../../../../components/Typography/Typography.cjs');
require('../../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../../context/LoadingContext/LoadingContext.cjs');
var getPasskeyProviderFromUserAgent = require('../../../helpers/getPasskeyProviderFromUserAgent.cjs');
var getTimeSince = require('../../../helpers/getTimeSince.cjs');
require('../../../context/DynamicWidgetContext.cjs');
require('../../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../../components/IconButton/IconButton.cjs');
require('../../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../../components/MenuList/Dropdown/Dropdown.cjs');
var shortenEmail = require('../../../../../shared/utils/functions/shortenEmail/shortenEmail.cjs');
require('../../../../../components/Popper/Popper/Popper.cjs');
require('../../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const mapPasskeyProviderToIcon = {
    android: jsxRuntime.jsx(iconic.AndroidIcon, {}),
    brave: jsxRuntime.jsx(iconic.BraveIcon, {}),
    chrome: jsxRuntime.jsx(iconic.ChromeIcon, {}),
    edge: jsxRuntime.jsx(iconic.EdgeIcon, {}),
    firefox: jsxRuntime.jsx(iconic.FirefoxIcon, {}),
    iPhone: jsxRuntime.jsx(iconic.AppleIcon, {}),
    opera: jsxRuntime.jsx(iconic.OperaIcon, {}),
    safari: jsxRuntime.jsx(iconic.SafariIcon, {}),
};
const PasskeyCard = ({ passkey }) => {
    const { t } = reactI18next.useTranslation();
    const [showTooltip, setShowTooltip] = React.useState(false);
    const { value: timeSinceValue, unit: timeSinceUnit } = getTimeSince.getTimeSince(passkey.createdAt);
    const PasskeyProviderIcon = () => {
        if (!passkey.userAgent)
            return null;
        const provider = getPasskeyProviderFromUserAgent.getPasskeyProviderFromUserAgent(passkey.userAgent);
        if (!provider)
            return null;
        return mapPasskeyProviderToIcon[provider];
    };
    const getPasskeyProviderName = () => {
        if (!passkey.userAgent)
            return null;
        const provider = getPasskeyProviderFromUserAgent.getPasskeyProviderFromUserAgent(passkey.userAgent);
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
    return (jsxRuntime.jsxs("div", { className: 'passkey-card', children: [jsxRuntime.jsxs("div", { className: 'passkey-card__info', children: [jsxRuntime.jsx("div", { className: 'passkey-card__info__icon', "data-testid": 'provider-icon', children: jsxRuntime.jsx(PasskeyProviderIcon, {}) }), jsxRuntime.jsxs("div", { className: 'passkey-card__info__text', children: [jsxRuntime.jsxs(Typography.Typography, { "data-testid": 'passkey-alias', variant: 'body_normal', color: 'primary', title: passkey.alias, onClick: handleShowTooltip, children: [shortenEmail.shortenEmail(passkey.alias, {
                                        breakpoint: 12,
                                        cutEnd: 4,
                                        cutStart: 4,
                                    }), jsxRuntime.jsx("p", { className: classNames.classNames('passkey-card__info__tooltip', {
                                            'passkey-card__info__tooltip--visible': showTooltip,
                                        }), children: passkey.alias })] }), getPasskeyProviderName() && (jsxRuntime.jsxs(Typography.Typography, { variant: 'body_small', color: 'secondary', children: [t('dyn_manage_passkeys.passkey_from'), " ", getPasskeyProviderName()] }))] })] }), jsxRuntime.jsx("div", { className: 'passkey-card__date', children: jsxRuntime.jsxs(Typography.Typography, { variant: 'body_small', color: 'secondary', copykey: 'dyn_time_since.created', children: [t('dyn_time_since.created'), ' ', `${timeSinceValue} ${timeSinceUnit} ${t('dyn_time_since.ago')}`] }) })] }));
};

exports.PasskeyCard = PasskeyCard;
