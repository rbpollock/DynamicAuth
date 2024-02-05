'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var utils = require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var passkeyIntroIcon = require('../../../../shared/assets/passkey-intro-icon.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
var createOwnerWallet = require('../../../../utils/functions/createOwnerWallet/createOwnerWallet.cjs');
var createUserProfile = require('../../../../utils/functions/createUserProfile/createUserProfile.cjs');
require('@dynamic-labs/multi-wallet');
var isAccountAbstractionWallet = require('../../../../utils/functions/isAccountAbstractionWallet/isAccountAbstractionWallet.cjs');
var index = require('../../../../utils/functions/storeAuthToken/index.cjs');
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
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
var ErrorContainer = require('../../../../components/ErrorContainer/ErrorContainer.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../../../components/Button/Button.cjs');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var getProperErrorMessage = require('../../../../modals/SignMessageConfirmationModal/getProperErrorMessage.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
var NeedHelpSection = require('../../../../components/NeedHelpSection/NeedHelpSection.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var passkeyRecovery = require('../../utils/passkeyRecovery/passkeyRecovery.cjs');
var PasskeyDeviceIcon = require('../../PasskeyDeviceIcon/PasskeyDeviceIcon.cjs');

const PasskeyCompleteRecovery = () => {
    const { authToken, primaryWallet, environmentId, internalEvents, user, setShowAuthFlow, setUser, setShowPasskeyCreatedSuccess, } = useInternalDynamicContext.useInternalDynamicContext();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet.useIsTurnkeyWallet();
    const { t } = reactI18next.useTranslation();
    const { mutate: completeRecovery, isLoading, error, } = useMutation.useMutation(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const wallet = isAccountAbstractionWallet.isAccountAbstractionWallet(primaryWallet)
            ? createOwnerWallet.createOwnerWallet(primaryWallet, (user === null || user === void 0 ? void 0 : user.verifiedCredentials) || [])
            : primaryWallet;
        const { jwt, decodedJwt } = yield passkeyRecovery.completePasskeyRecovery({
            authToken,
            environmentId,
            userEmail: user === null || user === void 0 ? void 0 : user.email,
            wallet,
        });
        internalEvents.current.emit('passkeyRecoveryCompleted', primaryWallet);
        index.storeAuthToken(jwt);
        setUser(createUserProfile.createUserProfile(decodedJwt));
        setShowAuthFlow(false);
        setShowPasskeyCreatedSuccess();
    }), {
        onFailure: (err) => {
            logger.logger.error('Failed to init passkey recovery', err);
            internalEvents.current.emit('passkeyRecoveryFailed', err);
        },
    });
    const errorText = React.useMemo(() => {
        if (!error) {
            return undefined;
        }
        if (error instanceof utils.DynamicError) {
            return error.message;
        }
        return getProperErrorMessage.getProperErrorMessage(error);
    }, [error]);
    const translationKey = isTurnkeyWalletWithoutAuthenticator
        ? 'dyn_passkey_secure_modal'
        : 'dyn_passkey_recovery';
    return (jsxRuntime.jsxs("div", { className: 'passkey-recovery-view', children: [jsxRuntime.jsx("div", { className: 'passkey-recovery-view__header', children: jsxRuntime.jsx(passkeyIntroIcon.ReactComponent, {}) }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', className: 'passkey-recovery-view__subtitle', children: t(`${translationKey}.complete.description`) }), errorText && jsxRuntime.jsx(ErrorContainer.ErrorContainer, { children: errorText }), jsxRuntime.jsx("div", { className: 'passkey-recovery-view__actions', children: jsxRuntime.jsx(Button.Button, { buttonVariant: 'brand-primary', buttonPadding: 'large', dataTestId: 'passkey-recovery-complete-button', onClick: () => completeRecovery(), disabled: isLoading, showInternalLoading: false, typographyProps: {
                        color: 'inherit',
                    }, children: jsxRuntime.jsxs("div", { className: 'passkey-recovery-view__inline-button', children: [jsxRuntime.jsx(PasskeyDeviceIcon.PasskeyDeviceIcon, {}), jsxRuntime.jsx(Typography.Typography, { children: t(`${translationKey}.complete.complete_button`) })] }) }) }), jsxRuntime.jsx(NeedHelpSection.NeedHelpSection, {})] }));
};

exports.PasskeyCompleteRecovery = PasskeyCompleteRecovery;
