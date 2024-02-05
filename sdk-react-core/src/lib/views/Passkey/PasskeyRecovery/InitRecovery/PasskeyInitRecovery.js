import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicError } from '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgClose } from '../../../../shared/assets/close.js';
import { ReactComponent as SvgSignInWithEmail } from '../../../../shared/assets/sign-in-with-email.js';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../shared/consts/index.js';
import { createOwnerWallet } from '../../../../utils/functions/createOwnerWallet/createOwnerWallet.js';
import '@dynamic-labs/multi-wallet';
import { isAccountAbstractionWallet } from '../../../../utils/functions/isAccountAbstractionWallet/isAccountAbstractionWallet.js';
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../config/ApiEndpoint.js';
import '../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { useElementById } from '../../../../utils/hooks/useElementById/useElementById.js';
import { useMutation } from '../../../../utils/hooks/useMutation/useMutation.js';
import '../../../../context/ThemeContext/ThemeContext.js';
import { iframeContainerId, iframeElementId } from '../constants.js';
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
import { IconWithSpinner } from '../../../../components/IconWithSpinner/IconWithSpinner.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import { Icon } from '../../../../components/Icon/Icon.js';
import 'i18next';
import '../../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import { ErrorContainer } from '../../../../components/ErrorContainer/ErrorContainer.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { Button } from '../../../../components/Button/Button.js';
import { ModalHeader } from '../../../../components/ModalHeader/ModalHeader.js';
import { IconButton } from '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import { NeedHelpSection } from '../../../../components/NeedHelpSection/NeedHelpSection.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { initPasskeyRecovery } from '../../utils/passkeyRecovery/passkeyRecovery.js';

const PasskeyInitRecovery = () => {
    const { authToken, primaryWallet, environmentId, internalEvents, setShowAuthFlow, user, } = useInternalDynamicContext();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet();
    const { setView } = useViewContext();
    useElementById(iframeContainerId);
    const { t } = useTranslation();
    const { mutate: initRecovery, isLoading, error, } = useMutation(() => __awaiter(void 0, void 0, void 0, function* () {
        const wallet = isAccountAbstractionWallet(primaryWallet)
            ? createOwnerWallet(primaryWallet, (user === null || user === void 0 ? void 0 : user.verifiedCredentials) || [])
            : primaryWallet;
        yield initPasskeyRecovery({
            authToken,
            environmentId,
            iframeContainerId,
            iframeElementId,
            wallet,
        });
        setView('passkey-recovery-bundle');
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
        return 'Something went wrong.';
    }, [error]);
    const EmailIcon = (jsx(Icon, { color: 'brand-primary', children: jsx(SvgSignInWithEmail, {}) }));
    const translationKey = isTurnkeyWalletWithoutAuthenticator
        ? 'dyn_passkey_secure_modal'
        : 'dyn_passkey_recovery';
    const closeButton = (jsx(IconButton, { type: 'button', onClick: () => setShowAuthFlow(false), "data-testid": 'close-button', children: jsx(SvgClose, {}) }));
    return (jsxs(Fragment, { children: [jsx(ModalHeader, { trailing: closeButton, children: jsx(Typography, { as: 'h1', variant: 'title', color: 'primary', "data-testid": 'dynamic-auth-modal-heading', className: 'header__typography', children: t(`${translationKey}.start.title`) }) }), jsxs("div", { className: 'passkey-recovery-view', children: [jsx(IconWithSpinner, { Icon: EmailIcon, isSpinning: isLoading, iconSize: 96 }), jsx(Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', className: 'passkey-recovery-view__subtitle', children: t(`${translationKey}.start.description`) }), errorText && jsx(ErrorContainer, { children: errorText }), jsx("div", { className: 'passkey-recovery-view__actions', children: jsx(Button, { buttonPadding: 'large', dataTestId: 'passkey-recovery-button', onClick: () => initRecovery(), disabled: isLoading, showInternalLoading: false, children: jsx("div", { children: jsx(Typography, { children: t(`${translationKey}.start.start_button`) }) }) }) }), jsx(NeedHelpSection, {})] })] }));
};

export { PasskeyInitRecovery };
