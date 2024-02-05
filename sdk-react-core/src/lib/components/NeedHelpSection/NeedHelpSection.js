import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { ProviderEnum } from '@dynamic-labs/sdk-api';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import 'react';
import '@dynamic-labs/utils';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../context/ViewContext/ViewContext.js';
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
import '../../context/ThemeContext/ThemeContext.js';
import { usePasskeyRecovery } from '../../utils/hooks/usePasskeyRecovery/usePasskeyRecovery.js';
import '@dynamic-labs/types';
import 'yup';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import '../Alert/Alert.js';
import { Typography } from '../Typography/Typography.js';
import { TextButton } from '../TextButton/TextButton.js';
import '../ShadowDOM/ShadowDOM.js';
import '../IconButton/IconButton.js';
import '../InlineWidget/InlineWidget.js';
import '../MenuList/Dropdown/Dropdown.js';
import '../Transition/ZoomTransition/ZoomTransition.js';
import '../Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../Transition/OpacityTransition/OpacityTransition.js';
import '../Popper/Popper/Popper.js';
import '../Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';

const NeedHelpSection = () => {
    var _a, _b, _c, _d, _e;
    const { projectSettings } = useInternalDynamicContext();
    const { t } = useTranslation();
    const { initPasskeyRecoveryProcess } = usePasskeyRecovery();
    const { view } = useViewContext();
    const supportEmail = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general) === null || _a === void 0 ? void 0 : _a.supportEmail;
    const supportUrl = ((_b = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general) === null || _b === void 0 ? void 0 : _b.supportUrls) &&
        ((_c = Object.values(projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general.supportUrls)) === null || _c === void 0 ? void 0 : _c[0]);
    // don't show passkey recovery helper on passkey creation flow views
    const isRecoveryEnabled = !view.startsWith('passkey') &&
        ((_d = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) === null || _d === void 0 ? void 0 : _d.find((p) => p.provider === ProviderEnum.Turnkey && p.enabledAt)) &&
        Boolean((_e = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _e === void 0 ? void 0 : _e.passkeyEmbeddedWalletRecoveryEnabled);
    const hasContactInfo = Boolean(supportEmail || supportUrl);
    const getSupportHelpSession = () => {
        if (!hasContactInfo) {
            return null;
        }
        return (jsxs("div", { className: 'need-help-section__links', children: [supportUrl && (jsx(Typography, { variant: 'body_small', color: 'link', copykey: 'dyn_need_help_section.contact_support', children: jsx("a", { href: supportUrl, rel: 'noreferrer', target: '_blank', children: t('dyn_need_help_section.contact_support') }) })), supportEmail && (jsx(Typography, { variant: 'body_small', color: 'link', children: jsx("a", { href: `mailto:${supportEmail}`, children: supportEmail }) }))] }));
    };
    const getPasskeyRecoverySession = () => {
        if (!isRecoveryEnabled) {
            return null;
        }
        const recoveryText = t('dyn_need_help_section.recovery_button');
        const finalRecoveryText = hasContactInfo
            ? recoveryText
            : recoveryText.slice(0, 1).toUpperCase() + recoveryText.slice(1);
        return (jsxs(Fragment, { children: [hasContactInfo && (jsx(Typography, { color: 'secondary', variant: 'body_small', copykey: 'dyn_need_help_section.divider', children: t('dyn_need_help_section.divider') })), jsx(TextButton, { copykey: 'dyn_need_help_section.recovery_button', className: classNames('helper-link', {
                        'need-help-section--captalize': !hasContactInfo,
                    }), onClick: initPasskeyRecoveryProcess, children: finalRecoveryText })] }));
    };
    if (!hasContactInfo && !isRecoveryEnabled) {
        return null;
    }
    return (jsxs("div", { className: 'need-help-section', children: [jsx(Typography, { color: 'secondary', variant: 'body_small', copykey: 'dyn_need_help_section.info', children: t('dyn_need_help_section.info') }), getSupportHelpSession(), getPasskeyRecoverySession()] }));
};

export { NeedHelpSection };
