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
var ViewContext = require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var close = require('../../../../shared/assets/close.cjs');
var signInWithEmail = require('../../../../shared/assets/sign-in-with-email.cjs');
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
var useElementById = require('../../../../utils/hooks/useElementById/useElementById.cjs');
var useMutation = require('../../../../utils/hooks/useMutation/useMutation.cjs');
require('../../../../context/ThemeContext/ThemeContext.cjs');
var constants = require('../constants.cjs');
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
var Icon = require('../../../../components/Icon/Icon.cjs');
require('i18next');
require('../../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
var ErrorContainer = require('../../../../components/ErrorContainer/ErrorContainer.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../../../components/Button/Button.cjs');
var ModalHeader = require('../../../../components/ModalHeader/ModalHeader.cjs');
var IconButton = require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
var NeedHelpSection = require('../../../../components/NeedHelpSection/NeedHelpSection.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var passkeyRecovery = require('../../utils/passkeyRecovery/passkeyRecovery.cjs');

const PasskeyInitRecovery = () => {
    const { authToken, primaryWallet, environmentId, internalEvents, setShowAuthFlow, user, } = useInternalDynamicContext.useInternalDynamicContext();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet.useIsTurnkeyWallet();
    const { setView } = ViewContext.useViewContext();
    useElementById.useElementById(constants.iframeContainerId);
    const { t } = reactI18next.useTranslation();
    const { mutate: initRecovery, isLoading, error, } = useMutation.useMutation(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const wallet = isAccountAbstractionWallet.isAccountAbstractionWallet(primaryWallet)
            ? createOwnerWallet.createOwnerWallet(primaryWallet, (user === null || user === void 0 ? void 0 : user.verifiedCredentials) || [])
            : primaryWallet;
        yield passkeyRecovery.initPasskeyRecovery({
            authToken,
            environmentId,
            iframeContainerId: constants.iframeContainerId,
            iframeElementId: constants.iframeElementId,
            wallet,
        });
        setView('passkey-recovery-bundle');
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
        return 'Something went wrong.';
    }, [error]);
    const EmailIcon = (jsxRuntime.jsx(Icon.Icon, { color: 'brand-primary', children: jsxRuntime.jsx(signInWithEmail.ReactComponent, {}) }));
    const translationKey = isTurnkeyWalletWithoutAuthenticator
        ? 'dyn_passkey_secure_modal'
        : 'dyn_passkey_recovery';
    const closeButton = (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: () => setShowAuthFlow(false), "data-testid": 'close-button', children: jsxRuntime.jsx(close.ReactComponent, {}) }));
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { trailing: closeButton, children: jsxRuntime.jsx(Typography.Typography, { as: 'h1', variant: 'title', color: 'primary', "data-testid": 'dynamic-auth-modal-heading', className: 'header__typography', children: t(`${translationKey}.start.title`) }) }), jsxRuntime.jsxs("div", { className: 'passkey-recovery-view', children: [jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { Icon: EmailIcon, isSpinning: isLoading, iconSize: 96 }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', className: 'passkey-recovery-view__subtitle', children: t(`${translationKey}.start.description`) }), errorText && jsxRuntime.jsx(ErrorContainer.ErrorContainer, { children: errorText }), jsxRuntime.jsx("div", { className: 'passkey-recovery-view__actions', children: jsxRuntime.jsx(Button.Button, { buttonPadding: 'large', dataTestId: 'passkey-recovery-button', onClick: () => initRecovery(), disabled: isLoading, showInternalLoading: false, children: jsxRuntime.jsx("div", { children: jsxRuntime.jsx(Typography.Typography, { children: t(`${translationKey}.start.start_button`) }) }) }) }), jsxRuntime.jsx(NeedHelpSection.NeedHelpSection, {})] })] }));
};

exports.PasskeyInitRecovery = PasskeyInitRecovery;
