'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
require('@dynamic-labs/utils');
require('../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var close = require('../../shared/assets/close.cjs');
var signCircle = require('../../shared/assets/sign-circle.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var usePreventPageScroll = require('../../shared/utils/hooks/usePreventPageScroll/usePreventPageScroll.cjs');
var index = require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var useMutation = require('../../utils/hooks/useMutation/useMutation.cjs');
require('../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
var AnimatePresence = require('../../components/AnimatePresence/AnimatePresence.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
var VerticalDrawerTransition = require('../../components/Transition/VerticalDrawerTransition/VerticalDrawerTransition.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
var useIsTurnkeyWallet = require('../../utils/hooks/useIsTurnkeyWallet/useIsTurnkeyWallet.cjs');
var PoweredByDynamic = require('../../components/PoweredByDynamic/PoweredByDynamic.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
var IconWithSpinner = require('../../components/IconWithSpinner/IconWithSpinner.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
var Icon = require('../../components/Icon/Icon.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
var ErrorContainer = require('../../components/ErrorContainer/ErrorContainer.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../components/Button/Button.cjs');
var ModalHeader = require('../../components/ModalHeader/ModalHeader.cjs');
var IconButton = require('../../components/IconButton/IconButton.cjs');
var Typography = require('../../components/Typography/Typography.cjs');
require('../../components/Alert/Alert.cjs');
var AppOriginTile = require('../../components/AppOriginTile/AppOriginTile.cjs');
var SecureTurnkeyWalletCard = require('../../components/SecureTurnkeyWalletCard/SecureTurnkeyWalletCard.cjs');
var PasskeyCreatedSuccessBanner = require('../../components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var getProperErrorMessage = require('./getProperErrorMessage.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
var Modal = require('../../components/Modal/Modal.cjs');
var ModalCard = require('../../components/ModalCard/ModalCard.cjs');
var NeedHelpSection = require('../../components/NeedHelpSection/NeedHelpSection.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
var Portal = require('../../components/Portal/Portal.cjs');
var SignMessagePreview = require('../../components/SignMessagePreview/SignMessagePreview.cjs');

const SignMessageConfirmationModal = ({ appLogoUrl, appName, appOrigin, message, handler, onReject, onSignMessage, }) => {
    usePreventPageScroll.usePreventPageScroll(true);
    const didConfirmRef = React.useRef(false);
    const [show, setShow] = React.useState(true);
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet.useIsTurnkeyWallet();
    const { t } = reactI18next.useTranslation();
    const handleOnReject = React.useCallback(() => {
        didConfirmRef.current = false;
        setShow(false);
    }, [setShow]);
    const { isLoading, mutate: confirm, data: signedMessage, error: signMessageError, } = useMutation.useMutation(() => handler(message), {
        onSuccess: () => {
            didConfirmRef.current = true;
            setShow(false);
        },
    });
    const handleOnModalUnmount = React.useCallback(() => {
        if (signedMessage) {
            return onSignMessage(signedMessage);
        }
        onReject(signMessageError || new Error('user rejected signing'));
    }, [signedMessage, onSignMessage, onReject, signMessageError]);
    const closeButton = (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: handleOnReject, "data-testid": 'close', disabled: isLoading, children: jsxRuntime.jsx(close.ReactComponent, {}) }));
    return (jsxRuntime.jsx(Portal.Portal, { handleClose: handleOnReject, isShown: show, zIndex: index.authModalZIndex, withBackdrop: true, elementId: 'dynamic-sign-message', transitionEvents: {
            onUnmount: handleOnModalUnmount,
        }, children: jsxRuntime.jsx(Modal.Modal, { children: jsxRuntime.jsxs(ModalCard.ModalCard, { children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { trailing: closeButton, alignContent: 'bottom', children: jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { Icon: (props) => (jsxRuntime.jsx(Icon.Icon, { color: 'brand-primary', children: jsxRuntime.jsx(signCircle.ReactComponent, Object.assign({}, props)) })), iconSize: 64, isSpinning: true }) }), jsxRuntime.jsx(PasskeyCreatedSuccessBanner.PasskeyCreatedSuccessBanner, {}), jsxRuntime.jsxs("div", { className: 'sign-message-confirmation__body', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', className: 'sign-message-confirmation__title', copykey: 'dyn_sign_message.title', children: t('dyn_sign_message.title') }), jsxRuntime.jsx(AnimatePresence.AnimatePresence, { animationComponent: jsxRuntime.jsx(VerticalDrawerTransition.VerticalDrawerTransition, {}), children: signMessageError && (jsxRuntime.jsx("div", { className: 'sign-message-confirmation__error', children: jsxRuntime.jsx(ErrorContainer.ErrorContainer, { children: getProperErrorMessage.getProperErrorMessage(signMessageError) }) })) }), jsxRuntime.jsxs("div", { className: 'sign-message-confirmation__message-container', children: [jsxRuntime.jsx(AppOriginTile.AppOriginTile, { appLogoUrl: appLogoUrl, appName: appName, appOrigin: appOrigin }), jsxRuntime.jsx("div", { className: 'sign-message-confirmation__message', children: jsxRuntime.jsx(SignMessagePreview.SignMessagePreview, { message: message.toString() }) })] }), jsxRuntime.jsx(SecureTurnkeyWalletCard.SecureTurnkeyWalletCard, { className: 'sign-message-confirmation__secure-wallet' }), jsxRuntime.jsxs("div", { className: 'sign-message-confirmation__actions', children: [jsxRuntime.jsx(Button.Button, { buttonVariant: 'secondary', onClick: handleOnReject, expanded: true, buttonPadding: 'large', disabled: isLoading, copykey: 'dyn_sign_message.cancel_button', children: t('dyn_sign_message.cancel_button') }), jsxRuntime.jsx(Button.Button, { buttonVariant: 'primary', buttonPadding: 'large', onClick: () => confirm(), expanded: true, disabled: isTurnkeyWalletWithoutAuthenticator, loading: isLoading, copykey: 'dyn_sign_message.sign_button', children: t('dyn_sign_message.sign_button') })] }), jsxRuntime.jsx(NeedHelpSection.NeedHelpSection, {}), jsxRuntime.jsx(PoweredByDynamic.PoweredByDynamic, {})] })] }) }) }));
};

exports.SignMessageConfirmationModal = SignMessageConfirmationModal;
