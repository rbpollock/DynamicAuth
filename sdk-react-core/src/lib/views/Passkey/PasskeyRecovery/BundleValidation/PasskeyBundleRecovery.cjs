'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var iconic = require('@dynamic-labs/iconic');
var utils = require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../../../shared/logger.cjs');
var check = require('../../../../shared/assets/check.cjs');
var error = require('../../../../shared/assets/error.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
var createOwnerWallet = require('../../../../utils/functions/createOwnerWallet/createOwnerWallet.cjs');
require('@dynamic-labs/multi-wallet');
var isAccountAbstractionWallet = require('../../../../utils/functions/isAccountAbstractionWallet/isAccountAbstractionWallet.cjs');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var useMutation = require('../../../../utils/hooks/useMutation/useMutation.cjs');
require('../../../../context/ThemeContext/ThemeContext.cjs');
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
var useIsTurnkeyWallet = require('../../../../utils/hooks/useIsTurnkeyWallet/useIsTurnkeyWallet.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
var IconWithSpinner = require('../../../../components/IconWithSpinner/IconWithSpinner.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
var IconWithStatus = require('../../../../components/IconWithStatus/IconWithStatus.cjs');
require('i18next');
require('../../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../components/IconButton/IconButton.cjs');
var Icon = require('../../../../components/Icon/Icon.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var getProperErrorMessage = require('../../../../modals/SignMessageConfirmationModal/getProperErrorMessage.cjs');
var TextButton = require('../../../../components/TextButton/TextButton.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
var Input = require('../../../../components/Input/Input.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var passkeyRecovery = require('../../utils/passkeyRecovery/passkeyRecovery.cjs');

// eslint-disable-next-line no-useless-escape
const bundleRegex = new RegExp(/^([A-Za-z0-9\s_+@\.-]+)$/);
const PasskeyBundleRecovery = () => {
    const { authToken, primaryWallet, environmentId, user } = useInternalDynamicContext.useInternalDynamicContext();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet.useIsTurnkeyWallet();
    const [bundleInput, setBundleInput] = React.useState('');
    const [resendingCode, setResendingCode] = React.useState(false);
    const [isValid, setIsValid] = React.useState(false);
    const { t } = reactI18next.useTranslation();
    const { setView } = ViewContext.useViewContext();
    const { mutate, isLoading, error: error$1 } = useMutation.useMutation((bundleInput) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const wallet = isAccountAbstractionWallet.isAccountAbstractionWallet(primaryWallet)
            ? createOwnerWallet.createOwnerWallet(primaryWallet, (user === null || user === void 0 ? void 0 : user.verifiedCredentials) || [])
            : primaryWallet;
        yield passkeyRecovery.passkeyRecoveryBundleValidation({
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
    const handleResentEmail = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        try {
            setResendingCode(true);
            yield passkeyRecovery.resentRecoveryEmail({
                authToken,
                environmentId,
                wallet: primaryWallet,
            });
        }
        catch (err) {
            logger.logger.error('Failed to complete passkey recovery', err);
        }
        finally {
            setResendingCode(false);
        }
    });
    const errorText = React.useMemo(() => {
        if (!error$1) {
            return undefined;
        }
        if (error$1 instanceof utils.DynamicError) {
            return error$1.message;
        }
        return getProperErrorMessage.getProperErrorMessage(error$1);
    }, [error$1]);
    const emailIcon = (jsxRuntime.jsx(Icon.Icon, { color: 'brand-primary', children: jsxRuntime.jsx(iconic.SignInWithEmailIcon, {}) }));
    const translationKey = isTurnkeyWalletWithoutAuthenticator
        ? 'dyn_passkey_secure_modal'
        : 'dyn_passkey_recovery';
    return (jsxRuntime.jsxs("div", { className: 'passkey-recovery-view', children: [!error$1 && !isValid ? (jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { Icon: emailIcon, isSpinning: !error$1 && !isValid, iconSize: 96 })) : (jsxRuntime.jsx(IconWithStatus.IconWithStatus, { Icon: iconic.SignInWithEmailIcon, iconSize: 64, variant: error$1 ? 'red' : 'green', InnerIcon: error$1 ? error.ReactComponent : check.ReactComponent })), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', className: 'passkey-recovery-view__subtitle', children: t(`${translationKey}.code.description`) }), jsxRuntime.jsx("div", { className: 'passkey-recovery-view__actions', children: jsxRuntime.jsx(Input.Input, { id: 'passkey-recovery-bundle', "data-testid": 'passkey-recovery-bundle-input', value: bundleInput, onChange: handleBundleChanged, label: t(`${translationKey}.code.input_label`), disabled: isLoading || resendingCode, error: Boolean(error$1), className: isValid ? 'passkey-recovery-view__input-valid' : '', autoFocus: true, message: errorText }) }), jsxRuntime.jsxs("div", { className: 'passkey-recovery-view__resend-code', children: [jsxRuntime.jsx(Typography.Typography, { color: 'secondary', variant: 'body_small', children: t(`${translationKey}.code.resend.text`) }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'link', children: jsxRuntime.jsx(TextButton.TextButton, { "data-testid": 'resend-email-button', onClick: handleResentEmail, disabled: resendingCode || isLoading || (bundleInput.length > 0 && !error$1), children: t(`${translationKey}.code.resend.button`) }) })] })] }));
};

exports.PasskeyBundleRecovery = PasskeyBundleRecovery;
