import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicError } from '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgPasskeyIntroIcon } from '../../../../shared/assets/passkey-intro-icon.js';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../shared/consts/index.js';
import { createOwnerWallet } from '../../../../utils/functions/createOwnerWallet/createOwnerWallet.js';
import { createUserProfile } from '../../../../utils/functions/createUserProfile/createUserProfile.js';
import '@dynamic-labs/multi-wallet';
import { isAccountAbstractionWallet } from '../../../../utils/functions/isAccountAbstractionWallet/isAccountAbstractionWallet.js';
import { storeAuthToken } from '../../../../utils/functions/storeAuthToken/index.js';
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../config/ApiEndpoint.js';
import '../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { useMutation } from '../../../../utils/hooks/useMutation/useMutation.js';
import '../../../../context/ThemeContext/ThemeContext.js';
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
import { useIsTurnkeyWallet } from '../../../../utils/hooks/useIsTurnkeyWallet/useIsTurnkeyWallet.js';
import { Typography } from '../../../../components/Typography/Typography.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import { ErrorContainer } from '../../../../components/ErrorContainer/ErrorContainer.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { Button } from '../../../../components/Button/Button.js';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { getProperErrorMessage } from '../../../../modals/SignMessageConfirmationModal/getProperErrorMessage.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import { NeedHelpSection } from '../../../../components/NeedHelpSection/NeedHelpSection.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { completePasskeyRecovery } from '../../utils/passkeyRecovery/passkeyRecovery.js';
import { PasskeyDeviceIcon } from '../../PasskeyDeviceIcon/PasskeyDeviceIcon.js';

const PasskeyCompleteRecovery = () => {
    const { authToken, primaryWallet, environmentId, internalEvents, user, setShowAuthFlow, setUser, setShowPasskeyCreatedSuccess, } = useInternalDynamicContext();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet();
    const { t } = useTranslation();
    const { mutate: completeRecovery, isLoading, error, } = useMutation(() => __awaiter(void 0, void 0, void 0, function* () {
        const wallet = isAccountAbstractionWallet(primaryWallet)
            ? createOwnerWallet(primaryWallet, (user === null || user === void 0 ? void 0 : user.verifiedCredentials) || [])
            : primaryWallet;
        const { jwt, decodedJwt } = yield completePasskeyRecovery({
            authToken,
            environmentId,
            userEmail: user === null || user === void 0 ? void 0 : user.email,
            wallet,
        });
        internalEvents.current.emit('passkeyRecoveryCompleted', primaryWallet);
        storeAuthToken(jwt);
        setUser(createUserProfile(decodedJwt));
        setShowAuthFlow(false);
        setShowPasskeyCreatedSuccess();
    }), {
        onFailure: (err) => {
            logger.error('Failed to init passkey recovery', err);
            internalEvents.current.emit('passkeyRecoveryFailed', err);
        },
    });
    const errorText = useMemo(() => {
        if (!error) {
            return undefined;
        }
        if (error instanceof DynamicError) {
            return error.message;
        }
        return getProperErrorMessage(error);
    }, [error]);
    const translationKey = isTurnkeyWalletWithoutAuthenticator
        ? 'dyn_passkey_secure_modal'
        : 'dyn_passkey_recovery';
    return (jsxs("div", { className: 'passkey-recovery-view', children: [jsx("div", { className: 'passkey-recovery-view__header', children: jsx(SvgPasskeyIntroIcon, {}) }), jsx(Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', className: 'passkey-recovery-view__subtitle', children: t(`${translationKey}.complete.description`) }), errorText && jsx(ErrorContainer, { children: errorText }), jsx("div", { className: 'passkey-recovery-view__actions', children: jsx(Button, { buttonVariant: 'brand-primary', buttonPadding: 'large', dataTestId: 'passkey-recovery-complete-button', onClick: () => completeRecovery(), disabled: isLoading, showInternalLoading: false, typographyProps: {
                        color: 'inherit',
                    }, children: jsxs("div", { className: 'passkey-recovery-view__inline-button', children: [jsx(PasskeyDeviceIcon, {}), jsx(Typography, { children: t(`${translationKey}.complete.complete_button`) })] }) }) }), jsx(NeedHelpSection, {})] }));
};

export { PasskeyCompleteRecovery };
