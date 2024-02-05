'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var chevronLeft = require('../../../../shared/assets/chevron-left.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getAuthToken = require('../../../../utils/functions/getAuthToken/getAuthToken.cjs');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
var api = require('../../../../data/api.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../context/ThemeContext/ThemeContext.cjs');
var usePasskeyRecovery = require('../../../../utils/hooks/usePasskeyRecovery/usePasskeyRecovery.cjs');
var usePromise = require('../../../../utils/hooks/usePromise/usePromise.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../../../context/MockContext/MockContext.cjs');
require('../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
var Skeleton = require('../../../../components/Skeleton/Skeleton.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
var DynamicWidgetContext = require('../../context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../../../components/Button/Button.cjs');
var ModalHeader = require('../../../../components/ModalHeader/ModalHeader.cjs');
var IconButton = require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
var PasskeyCreatedSuccessBanner = require('../../../../components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.cjs');
require('@dynamic-labs/viem-utils');
var PasskeyCard = require('./PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
var NeedHelpSection = require('../../../../components/NeedHelpSection/NeedHelpSection.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const ManagePasskeysWidgetView = () => {
    const { goToInitialDynamicWidgetView } = DynamicWidgetContext.useWidgetContext();
    const { environmentId, projectSettings } = useInternalDynamicContext.useInternalDynamicContext();
    const { initPasskeyRecoveryProcess } = usePasskeyRecovery.usePasskeyRecovery();
    const { t } = reactI18next.useTranslation();
    const userJwt = getAuthToken.getAuthToken();
    const { data: userPasskeys = [], isLoading } = usePromise.usePromise(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (!environmentId || !userJwt) {
            throw new Error('Environment ID or user JWT is missing');
        }
        const data = yield api.getUserPasskeys({
            environmentId: environmentId,
            userJwt: userJwt,
        });
        return data.passkeys;
    }), {
        deps: [environmentId, userJwt],
        enabled: Boolean(environmentId) && Boolean(userJwt),
    });
    const isRecoveryEnabled = Boolean(projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk.passkeyEmbeddedWalletRecoveryEnabled);
    const backButton = (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: goToInitialDynamicWidgetView, "data-testid": 'back-button', children: jsxRuntime.jsx(chevronLeft.ReactComponent, {}) }));
    return (jsxRuntime.jsxs("div", { className: 'manage-passkeys-widget-view', children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { leading: backButton, children: jsxRuntime.jsx("div", { className: 'send-balance-page-layout__header-content', children: jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', copykey: 'dyn_manage_passkeys.title', children: t('dyn_manage_passkeys.title') }) }) }), jsxRuntime.jsx(PasskeyCreatedSuccessBanner.PasskeyCreatedSuccessBanner, {}), jsxRuntime.jsxs("div", { className: 'manage-passkeys-widget-view__body', children: [jsxRuntime.jsx("div", { className: 'manage-passkeys-widget-view__body__cards', children: isLoading ? (jsxRuntime.jsx(Skeleton.Skeleton, { count: 1, className: 'manage-passkeys-widget-view__body__cards__skeleton' })) : (userPasskeys.map((passkey) => (jsxRuntime.jsx(PasskeyCard.PasskeyCard, { passkey: passkey }, passkey.id)))) }), isRecoveryEnabled && (jsxRuntime.jsx(Button.Button, { buttonPadding: 'large', buttonClassName: 'manage-passkeys-widget-view__body__recovery-button', onClick: initPasskeyRecoveryProcess, showInternalLoading: false, copykey: 'dyn_manage_passkeys.recovery_button', children: t('dyn_manage_passkeys.recovery_button') })), jsxRuntime.jsx(NeedHelpSection.NeedHelpSection, {})] })] }));
};

exports.ManagePasskeysWidgetView = ManagePasskeysWidgetView;
