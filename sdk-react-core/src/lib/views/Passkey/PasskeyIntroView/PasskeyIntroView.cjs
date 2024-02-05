'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var utils = require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../context/ErrorContext/ErrorContext.cjs');
require('../../../context/ViewContext/ViewContext.cjs');
var decodeJwt = require('../../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
require('@dynamic-labs/iconic');
var passkeyIntroIcon = require('../../../shared/assets/passkey-intro-icon.cjs');
var questionMark = require('../../../shared/assets/question-mark.cjs');
require('../../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
var localStorage$1 = require('../../../utils/constants/localStorage.cjs');
require('../../../utils/constants/colors.cjs');
var localStorage = require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getAuthToken = require('../../../utils/functions/getAuthToken/getAuthToken.cjs');
require('@dynamic-labs/sdk-api');
var isPasskeyEnabled = require('../../../utils/functions/isPasskeyEnabled/isPasskeyEnabled.cjs');
require('../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../config/ApiEndpoint.cjs');
require('../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var useCreateDynamicEmbeddedWalletMutation = require('../../../utils/hooks/useCreateDynamicEmbeddedWalletMutation/useCreateDynamicEmbeddedWalletMutation.cjs');
require('../../../context/ThemeContext/ThemeContext.cjs');
var usePromise = require('../../../utils/hooks/usePromise/usePromise.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../../context/MockContext/MockContext.cjs');
require('../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../components/OverlayCard/OverlayCard.context.cjs');
var index = require('../../../context/FooterAnimationContext/index.cjs');
require('../../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../../components/Typography/Typography.cjs');
var Tooltip = require('../../../components/Tooltip/Tooltip.cjs');
require('../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
var ErrorContainer = require('../../../components/ErrorContainer/ErrorContainer.cjs');
require('../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../../components/Button/Button.cjs');
var ModalHeader = require('../../../components/ModalHeader/ModalHeader.cjs');
var IconButton = require('../../../components/IconButton/IconButton.cjs');
require('../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var getProperErrorMessage = require('../../../modals/SignMessageConfirmationModal/getProperErrorMessage.cjs');
var TextButton = require('../../../components/TextButton/TextButton.cjs');
require('../../../components/InlineWidget/InlineWidget.cjs');
require('../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../components/Popper/Popper/Popper.cjs');
require('../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var PasskeyDeviceIcon = require('../PasskeyDeviceIcon/PasskeyDeviceIcon.cjs');

const PasskeyIntroView = () => {
    const { walletConnectorOptions, environmentId, handleLogOut, onboardingOnlyJwt, } = useInternalDynamicContext.useInternalDynamicContext();
    const { setIsFooterExpanded } = index.useFooterAnimationContext();
    const { t } = reactI18next.useTranslation();
    const { data: passkeyEnabled } = usePromise.usePromise(isPasskeyEnabled.isPasskeyEnabled);
    // if passkey is not yet setup, but user logged in with email in a passkey env
    // it should be null to force user to setup passkey even after the a refresh
    React.useEffect(() => localStorage.LocalStorage.removeFromLS(localStorage$1.LAST_USED_WALLET), []);
    const { createDynamicEmbeddedWalletMutation, isLoading, error } = useCreateDynamicEmbeddedWalletMutation.useCreateDynamicEmbeddedWalletMutation();
    const handleCreateEmbeddedWallet = () => {
        var _a;
        const jwt = (_a = getAuthToken.getAuthToken()) !== null && _a !== void 0 ? _a : onboardingOnlyJwt;
        const decodedJwt = decodeJwt.decodeJwt(jwt);
        if (!jwt || !decodedJwt) {
            throw new Error('User is not logged in');
        }
        createDynamicEmbeddedWalletMutation({
            authToken: jwt,
            decodedJwt,
            environmentId,
            walletConnectorOptions,
            withAuthenticator: true,
        });
    };
    const errorText = React.useMemo(() => {
        if (!error) {
            return undefined;
        }
        if (error instanceof utils.DynamicError) {
            return error.message;
        }
        return getProperErrorMessage.getProperErrorMessage(error);
    }, [error]);
    const infoIconButton = (jsxRuntime.jsx(Tooltip.Tooltip, { content: t('dyn_passkey_intro.helper.tooltip'), className: 'header__tooltip', copykey: 'dyn_passkey_intro.helper.tooltip', children: jsxRuntime.jsx(IconButton.IconButton, { type: 'button', "data-testid": 'info-button', onClick: () => setIsFooterExpanded((prev) => !prev), className: 'header__icon', children: jsxRuntime.jsx(questionMark.ReactComponent, {}) }) }, 'info-button'));
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { trailing: infoIconButton, children: jsxRuntime.jsx(Typography.Typography, { as: 'h1', variant: 'title', color: 'primary', "data-testid": 'dynamic-auth-modal-heading', className: 'header__typography', copykey: 'dyn_passkey_intro.title', children: t('dyn_passkey_intro.title') }) }), jsxRuntime.jsxs("div", { className: 'passkey-intro-view', children: [jsxRuntime.jsx("div", { className: 'passkey-intro-view__header', children: jsxRuntime.jsx(passkeyIntroIcon.ReactComponent, {}) }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', className: 'passkey-intro-view__subtitle', copykey: 'dyn_passkey_intro.subtitle', children: t('dyn_passkey_intro.subtitle') }), passkeyEnabled === false && (jsxRuntime.jsx(ErrorContainer.ErrorContainer, { copykey: 'dyn_passkey_intro.disabled', children: t('dyn_passkey_intro.disabled') })), errorText && jsxRuntime.jsx(ErrorContainer.ErrorContainer, { children: errorText }), jsxRuntime.jsxs("div", { className: 'passkey-intro-view__actions', children: [jsxRuntime.jsx(Button.Button, { buttonVariant: 'brand-primary', buttonPadding: 'large', onClick: handleCreateEmbeddedWallet, dataTestId: 'setup-passkey-button', loading: isLoading, disabled: isLoading || !passkeyEnabled, typographyProps: {
                                    color: 'inherit',
                                }, children: jsxRuntime.jsxs("div", { className: 'passkey-intro-view__inline-button', children: [jsxRuntime.jsx(PasskeyDeviceIcon.PasskeyDeviceIcon, {}), jsxRuntime.jsx(Typography.Typography, { copykey: 'dyn_passkey_intro.button', children: t('dyn_passkey_intro.button') })] }) }), jsxRuntime.jsx(TextButton.TextButton, { "data-testid": 'setup-passkey-logout-button', className: 'passkey-intro-view__log-out', onClick: handleLogOut, copykey: 'dyn_passkey_intro.button_logout', children: t('dyn_passkey_intro.button_logout') })] })] })] }));
};

exports.PasskeyIntroView = PasskeyIntroView;
