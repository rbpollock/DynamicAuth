import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SignInWithEmailIcon } from '@dynamic-labs/iconic';
import { DynamicError } from '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../../shared/logger.js';
import { ReactComponent as SvgCheck } from '../../../../shared/assets/check.js';
import { ReactComponent as SvgError } from '../../../../shared/assets/error.js';
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
import { IconWithSpinner } from '../../../../components/IconWithSpinner/IconWithSpinner.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import { IconWithStatus } from '../../../../components/IconWithStatus/IconWithStatus.js';
import 'i18next';
import '../../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../components/IconButton/IconButton.js';
import { Icon } from '../../../../components/Icon/Icon.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { getProperErrorMessage } from '../../../../modals/SignMessageConfirmationModal/getProperErrorMessage.js';
import { TextButton } from '../../../../components/TextButton/TextButton.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import { Input } from '../../../../components/Input/Input.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { passkeyRecoveryBundleValidation, resentRecoveryEmail } from '../../utils/passkeyRecovery/passkeyRecovery.js';

// eslint-disable-next-line no-useless-escape
const bundleRegex = new RegExp(/^([A-Za-z0-9\s_+@\.-]+)$/);
const PasskeyBundleRecovery = () => {
    const { authToken, primaryWallet, environmentId, user } = useInternalDynamicContext();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet();
    const [bundleInput, setBundleInput] = useState('');
    const [resendingCode, setResendingCode] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const { t } = useTranslation();
    const { setView } = useViewContext();
    const { mutate, isLoading, error } = useMutation((bundleInput) => __awaiter(void 0, void 0, void 0, function* () {
        const wallet = isAccountAbstractionWallet(primaryWallet)
            ? createOwnerWallet(primaryWallet, (user === null || user === void 0 ? void 0 : user.verifiedCredentials) || [])
            : primaryWallet;
        yield passkeyRecoveryBundleValidation({
            authToken,
            bundleInput,
            wallet,
        });
        setIsValid(true);
        setTimeout(() => {
            setView('passkey-recovery-complete');
        }, 2000);
    }));
    /**
     *
     * Validates an authenticator label according to Turnkey's validation rules:
     * https://github.com/tkhq/demo-passkey-wallet/blob/main/frontend/utils/validation.ts
     */
    const isValidBundle = (bundle) => {
        if (!(bundle === null || bundle === void 0 ? void 0 : bundle.length)) {
            return false;
        }
        if (bundle.length < 100 || bundle.length >= 256) {
            return false;
        }
        if (!bundleRegex.test(bundle)) {
            return false;
        }
        return true;
    };
    const handleBundleChanged = (event) => {
        var _a;
        const bundle = (_a = event.target.value) === null || _a === void 0 ? void 0 : _a.trim();
        setBundleInput(bundle);
        if (!isValidBundle(bundle)) {
            return;
        }
        mutate(bundle);
    };
    const handleResentEmail = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setResendingCode(true);
            yield resentRecoveryEmail({
                authToken,
                environmentId,
                wallet: primaryWallet,
            });
        }
        catch (err) {
            logger.error('Failed to complete passkey recovery', err);
        }
        finally {
            setResendingCode(false);
        }
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
    const emailIcon = (jsx(Icon, { color: 'brand-primary', children: jsx(SignInWithEmailIcon, {}) }));
    const translationKey = isTurnkeyWalletWithoutAuthenticator
        ? 'dyn_passkey_secure_modal'
        : 'dyn_passkey_recovery';
    return (jsxs("div", { className: 'passkey-recovery-view', children: [!error && !isValid ? (jsx(IconWithSpinner, { Icon: emailIcon, isSpinning: !error && !isValid, iconSize: 96 })) : (jsx(IconWithStatus, { Icon: SignInWithEmailIcon, iconSize: 64, variant: error ? 'red' : 'green', InnerIcon: error ? SvgError : SvgCheck })), jsx(Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', className: 'passkey-recovery-view__subtitle', children: t(`${translationKey}.code.description`) }), jsx("div", { className: 'passkey-recovery-view__actions', children: jsx(Input, { id: 'passkey-recovery-bundle', "data-testid": 'passkey-recovery-bundle-input', value: bundleInput, onChange: handleBundleChanged, label: t(`${translationKey}.code.input_label`), disabled: isLoading || resendingCode, error: Boolean(error), className: isValid ? 'passkey-recovery-view__input-valid' : '', autoFocus: true, message: errorText }) }), jsxs("div", { className: 'passkey-recovery-view__resend-code', children: [jsx(Typography, { color: 'secondary', variant: 'body_small', children: t(`${translationKey}.code.resend.text`) }), jsx(Typography, { variant: 'body_small', color: 'link', children: jsx(TextButton, { "data-testid": 'resend-email-button', onClick: handleResentEmail, disabled: resendingCode || isLoading || (bundleInput.length > 0 && !error), children: t(`${translationKey}.code.resend.button`) }) })] })] }));
};

export { PasskeyBundleRecovery };
