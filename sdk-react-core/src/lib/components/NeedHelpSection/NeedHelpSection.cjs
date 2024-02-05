'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var sdkApi = require('@dynamic-labs/sdk-api');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('react');
require('@dynamic-labs/utils');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../context/ViewContext/ViewContext.cjs');
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
require('../../context/ThemeContext/ThemeContext.cjs');
var usePasskeyRecovery = require('../../utils/hooks/usePasskeyRecovery/usePasskeyRecovery.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
require('../Alert/Alert.cjs');
var Typography = require('../Typography/Typography.cjs');
var TextButton = require('../TextButton/TextButton.cjs');
require('../ShadowDOM/ShadowDOM.cjs');
require('../IconButton/IconButton.cjs');
require('../InlineWidget/InlineWidget.cjs');
require('../MenuList/Dropdown/Dropdown.cjs');
require('../Transition/ZoomTransition/ZoomTransition.cjs');
require('../Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../Transition/OpacityTransition/OpacityTransition.cjs');
require('../Popper/Popper/Popper.cjs');
require('../Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');

const NeedHelpSection = () => {
    var _a, _b, _c, _d, _e;
    const { projectSettings } = useInternalDynamicContext.useInternalDynamicContext();
    const { t } = reactI18next.useTranslation();
    const { initPasskeyRecoveryProcess } = usePasskeyRecovery.usePasskeyRecovery();
    const { view } = ViewContext.useViewContext();
    const supportEmail = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general) === null || _a === void 0 ? void 0 : _a.supportEmail;
    const supportUrl = ((_b = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general) === null || _b === void 0 ? void 0 : _b.supportUrls) &&
        ((_c = Object.values(projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general.supportUrls)) === null || _c === void 0 ? void 0 : _c[0]);
    // don't show passkey recovery helper on passkey creation flow views
    const isRecoveryEnabled = !view.startsWith('passkey') &&
        ((_d = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) === null || _d === void 0 ? void 0 : _d.find((p) => p.provider === sdkApi.ProviderEnum.Turnkey && p.enabledAt)) &&
        Boolean((_e = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _e === void 0 ? void 0 : _e.passkeyEmbeddedWalletRecoveryEnabled);
    const hasContactInfo = Boolean(supportEmail || supportUrl);
    const getSupportHelpSession = () => {
        if (!hasContactInfo) {
            return null;
        }
        return (jsxRuntime.jsxs("div", { className: 'need-help-section__links', children: [supportUrl && (jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'link', copykey: 'dyn_need_help_section.contact_support', children: jsxRuntime.jsx("a", { href: supportUrl, rel: 'noreferrer', target: '_blank', children: t('dyn_need_help_section.contact_support') }) })), supportEmail && (jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'link', children: jsxRuntime.jsx("a", { href: `mailto:${supportEmail}`, children: supportEmail }) }))] }));
    };
    const getPasskeyRecoverySession = () => {
        if (!isRecoveryEnabled) {
            return null;
        }
        const recoveryText = t('dyn_need_help_section.recovery_button');
        const finalRecoveryText = hasContactInfo
            ? recoveryText
            : recoveryText.slice(0, 1).toUpperCase() + recoveryText.slice(1);
        return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [hasContactInfo && (jsxRuntime.jsx(Typography.Typography, { color: 'secondary', variant: 'body_small', copykey: 'dyn_need_help_section.divider', children: t('dyn_need_help_section.divider') })), jsxRuntime.jsx(TextButton.TextButton, { copykey: 'dyn_need_help_section.recovery_button', className: classNames.classNames('helper-link', {
                        'need-help-section--captalize': !hasContactInfo,
                    }), onClick: initPasskeyRecoveryProcess, children: finalRecoveryText })] }));
    };
    if (!hasContactInfo && !isRecoveryEnabled) {
        return null;
    }
    return (jsxRuntime.jsxs("div", { className: 'need-help-section', children: [jsxRuntime.jsx(Typography.Typography, { color: 'secondary', variant: 'body_small', copykey: 'dyn_need_help_section.info', children: t('dyn_need_help_section.info') }), getSupportHelpSession(), getPasskeyRecoverySession()] }));
};

exports.NeedHelpSection = NeedHelpSection;
