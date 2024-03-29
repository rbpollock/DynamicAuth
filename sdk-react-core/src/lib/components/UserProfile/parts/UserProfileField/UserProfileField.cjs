'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('react');
require('@dynamic-labs/utils');
require('../../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
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
require('../../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
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
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
var VerifiedEmailIcon = require('./components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../IconButton/IconButton.cjs');
require('../../../Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../InlineWidget/InlineWidget.cjs');
require('../../../MenuList/Dropdown/Dropdown.cjs');
require('../../../Popper/Popper/Popper.cjs');
require('../../../Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const UserProfileField = ({ name, label, value, copykey, }) => {
    const isEmpty = value === '';
    const isEmailField = name === 'email';
    return (jsxRuntime.jsxs("div", { className: 'user-profile-field', children: [label && (jsxRuntime.jsx(Typography.Typography, { as: 'h6', color: 'secondary', weight: 'regular', variant: 'body_small', copykey: copykey, children: label })), jsxRuntime.jsxs("div", { className: 'user-profile-field__value', children: [jsxRuntime.jsx(Typography.Typography, { color: isEmpty ? 'tertiary' : 'primary', as: 'p', weight: 'regular', variant: 'body_normal', children: value }), isEmailField && (jsxRuntime.jsx(VerifiedEmailIcon.VerifiedEmailIcon, { className: 'user-profile-field__verify-email-icon', overwriteTooltipProps: { as: 'div' } }))] })] }));
};

exports.UserProfileField = UserProfileField;
