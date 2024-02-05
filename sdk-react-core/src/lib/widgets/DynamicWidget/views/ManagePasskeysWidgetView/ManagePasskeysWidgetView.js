import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import 'react';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgChevronLeft } from '../../../../shared/assets/chevron-left.js';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getAuthToken } from '../../../../utils/functions/getAuthToken/getAuthToken.js';
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import { getUserPasskeys } from '../../../../data/api.js';
import '../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../../context/ThemeContext/ThemeContext.js';
import { usePasskeyRecovery } from '../../../../utils/hooks/usePasskeyRecovery/usePasskeyRecovery.js';
import { usePromise } from '../../../../utils/hooks/usePromise/usePromise.js';
import '@dynamic-labs/types';
import 'yup';
import '../../../../context/MockContext/MockContext.js';
import '../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../../components/ShadowDOM/ShadowDOM.js';
import '../../../../components/OverlayCard/OverlayCard.context.js';
import '../../../../context/FooterAnimationContext/index.js';
import '../../../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../../../components/Typography/Typography.js';
import { Skeleton } from '../../../../components/Skeleton/Skeleton.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import { useWidgetContext } from '../../context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { Button } from '../../../../components/Button/Button.js';
import { ModalHeader } from '../../../../components/ModalHeader/ModalHeader.js';
import { IconButton } from '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import { PasskeyCreatedSuccessBanner } from '../../../../components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js';
import '@dynamic-labs/viem-utils';
import { PasskeyCard } from './PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import { NeedHelpSection } from '../../../../components/NeedHelpSection/NeedHelpSection.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const ManagePasskeysWidgetView = () => {
    const { goToInitialDynamicWidgetView } = useWidgetContext();
    const { environmentId, projectSettings } = useInternalDynamicContext();
    const { initPasskeyRecoveryProcess } = usePasskeyRecovery();
    const { t } = useTranslation();
    const userJwt = getAuthToken();
    const { data: userPasskeys = [], isLoading } = usePromise(() => __awaiter(void 0, void 0, void 0, function* () {
        if (!environmentId || !userJwt) {
            throw new Error('Environment ID or user JWT is missing');
        }
        const data = yield getUserPasskeys({
            environmentId: environmentId,
            userJwt: userJwt,
        });
        return data.passkeys;
    }), {
        deps: [environmentId, userJwt],
        enabled: Boolean(environmentId) && Boolean(userJwt),
    });
    const isRecoveryEnabled = Boolean(projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk.passkeyEmbeddedWalletRecoveryEnabled);
    const backButton = (jsx(IconButton, { type: 'button', onClick: goToInitialDynamicWidgetView, "data-testid": 'back-button', children: jsx(SvgChevronLeft, {}) }));
    return (jsxs("div", { className: 'manage-passkeys-widget-view', children: [jsx(ModalHeader, { leading: backButton, children: jsx("div", { className: 'send-balance-page-layout__header-content', children: jsx(Typography, { variant: 'title', color: 'primary', copykey: 'dyn_manage_passkeys.title', children: t('dyn_manage_passkeys.title') }) }) }), jsx(PasskeyCreatedSuccessBanner, {}), jsxs("div", { className: 'manage-passkeys-widget-view__body', children: [jsx("div", { className: 'manage-passkeys-widget-view__body__cards', children: isLoading ? (jsx(Skeleton, { count: 1, className: 'manage-passkeys-widget-view__body__cards__skeleton' })) : (userPasskeys.map((passkey) => (jsx(PasskeyCard, { passkey: passkey }, passkey.id)))) }), isRecoveryEnabled && (jsx(Button, { buttonPadding: 'large', buttonClassName: 'manage-passkeys-widget-view__body__recovery-button', onClick: initPasskeyRecoveryProcess, showInternalLoading: false, copykey: 'dyn_manage_passkeys.recovery_button', children: t('dyn_manage_passkeys.recovery_button') })), jsx(NeedHelpSection, {})] })] }));
};

export { ManagePasskeysWidgetView };
