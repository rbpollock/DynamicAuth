'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var iconic = require('@dynamic-labs/iconic');
require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
var add = require('../../../../shared/assets/add.cjs');
var unlink = require('../../../../shared/assets/unlink.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var useIconThemeVariant = require('../../../../utils/hooks/useIconThemeVariant/useIconThemeVariant.cjs');
var useSocialAccounts = require('../../../../utils/hooks/useSocialAccounts/useSocialAccounts.cjs');
require('yup');
require('react-i18next');
require('../../../../context/MockContext/MockContext.cjs');
require('../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../ShadowDOM/ShadowDOM.cjs');
require('../../../OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../../Typography/Typography.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('../../../../context/ThemeContext/ThemeContext.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
var Icon = require('../../../Icon/Icon.cjs');
var helpers = require('../../../../widgets/DynamicWidget/helpers/helpers.cjs');
require('../../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
var ConnectedAccountAvatar = require('./components/ConnectedAccountAvatar/ConnectedAccountAvatar.cjs');
require('formik');
var Button = require('../../../Button/Button.cjs');
require('../../../IconButton/IconButton.cjs');
require('../../../Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../InlineWidget/InlineWidget.cjs');
require('../../../MenuList/Dropdown/Dropdown.cjs');
require('../../../Popper/Popper/Popper.cjs');
require('../../../Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const UserProfileSocialAccount = ({ provider, }) => {
    var _a;
    const { user, primaryWallet } = useInternalDynamicContext.useInternalDynamicContext();
    const { linkSocialAccount, unlinkSocialAccount, isProcessing, isLinked, getLinkedAccountInformation, } = useSocialAccounts.useSocialAccounts();
    const isProviderLinked = isLinked(provider);
    const connectedAccountInfo = getLinkedAccountInformation(provider);
    const iconThemeVariant = useIconThemeVariant.useIconThemeVariant();
    const isActiveCredential = !primaryWallet &&
        connectedAccountInfo &&
        (connectedAccountInfo === null || connectedAccountInfo === void 0 ? void 0 : connectedAccountInfo.id) === (user === null || user === void 0 ? void 0 : user.lastVerifiedCredentialId);
    const renderButton = () => (jsxRuntime.jsx(Button.Button, { buttonClassName: 'user-profile-social-account__button', buttonVariant: 'secondary', buttonPadding: 'none', onClick: () => isProviderLinked
            ? unlinkSocialAccount(provider)
            : linkSocialAccount(provider), loading: isProcessing, dataTestId: `social-account-${isProviderLinked ? 'disconnect' : 'connect'}-button`, typographyProps: {
            color: 'secondary',
            variant: 'button_tertiary',
            // weight: 'medium',
        }, startSlot: 
        // eslint-disable-next-line react/jsx-wrap-multilines
        jsxRuntime.jsx(Icon.Icon, { color: 'text-tertiary', size: 'small', children: isProviderLinked ? jsxRuntime.jsx(unlink.ReactComponent, {}) : jsxRuntime.jsx(add.ReactComponent, {}) }), children: isProviderLinked ? null : 'Connect' }));
    return (jsxRuntime.jsxs("div", { className: 'user-profile-social-account', "data-testid": `social-account-${provider}`, children: [jsxRuntime.jsx("div", { className: 'user-profile-social-account__icon', children: isProviderLinked ? (jsxRuntime.jsx(ConnectedAccountAvatar.ConnectedAccountAvatar, { provider: provider, avatarUrl: connectedAccountInfo === null || connectedAccountInfo === void 0 ? void 0 : connectedAccountInfo.avatar })) : (jsxRuntime.jsx(iconic.SocialIcon, { name: provider, variant: iconThemeVariant })) }), jsxRuntime.jsx("div", { className: 'user-profile-social-account__label', children: jsxRuntime.jsx(Typography.Typography, { weight: 'medium', variant: 'body_normal', color: 'primary', children: (_a = connectedAccountInfo === null || connectedAccountInfo === void 0 ? void 0 : connectedAccountInfo.publicIdentifier) !== null && _a !== void 0 ? _a : helpers.capitalize(provider) }) }), !isActiveCredential ? renderButton() : null] }));
};

exports.UserProfileSocialAccount = UserProfileSocialAccount;
