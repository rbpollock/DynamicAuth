import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import '@dynamic-labs/utils';
import '../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgClose } from '../../shared/assets/close.js';
import { ReactComponent as SvgSignCircle } from '../../shared/assets/sign-circle.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import { usePreventPageScroll } from '../../shared/utils/hooks/usePreventPageScroll/usePreventPageScroll.js';
import { authModalZIndex } from '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { useMutation } from '../../utils/hooks/useMutation/useMutation.js';
import '../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import { AnimatePresence } from '../../components/AnimatePresence/AnimatePresence.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import { VerticalDrawerTransition } from '../../components/Transition/VerticalDrawerTransition/VerticalDrawerTransition.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import { useIsTurnkeyWallet } from '../../utils/hooks/useIsTurnkeyWallet/useIsTurnkeyWallet.js';
import { PoweredByDynamic } from '../../components/PoweredByDynamic/PoweredByDynamic.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import { IconWithSpinner } from '../../components/IconWithSpinner/IconWithSpinner.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import { Icon } from '../../components/Icon/Icon.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import { ErrorContainer } from '../../components/ErrorContainer/ErrorContainer.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { Button } from '../../components/Button/Button.js';
import { ModalHeader } from '../../components/ModalHeader/ModalHeader.js';
import { IconButton } from '../../components/IconButton/IconButton.js';
import { Typography } from '../../components/Typography/Typography.js';
import '../../components/Alert/Alert.js';
import { AppOriginTile } from '../../components/AppOriginTile/AppOriginTile.js';
import { SecureTurnkeyWalletCard } from '../../components/SecureTurnkeyWalletCard/SecureTurnkeyWalletCard.js';
import { PasskeyCreatedSuccessBanner } from '../../components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { getProperErrorMessage } from './getProperErrorMessage.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import { Modal } from '../../components/Modal/Modal.js';
import { ModalCard } from '../../components/ModalCard/ModalCard.js';
import { NeedHelpSection } from '../../components/NeedHelpSection/NeedHelpSection.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import { Portal } from '../../components/Portal/Portal.js';
import { SignMessagePreview } from '../../components/SignMessagePreview/SignMessagePreview.js';

const SignMessageConfirmationModal = ({ appLogoUrl, appName, appOrigin, message, handler, onReject, onSignMessage, }) => {
    usePreventPageScroll(true);
    const didConfirmRef = useRef(false);
    const [show, setShow] = useState(true);
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet();
    const { t } = useTranslation();
    const handleOnReject = useCallback(() => {
        didConfirmRef.current = false;
        setShow(false);
    }, [setShow]);
    const { isLoading, mutate: confirm, data: signedMessage, error: signMessageError, } = useMutation(() => handler(message), {
        onSuccess: () => {
            didConfirmRef.current = true;
            setShow(false);
        },
    });
    const handleOnModalUnmount = useCallback(() => {
        if (signedMessage) {
            return onSignMessage(signedMessage);
        }
        onReject(signMessageError || new Error('user rejected signing'));
    }, [signedMessage, onSignMessage, onReject, signMessageError]);
    const closeButton = (jsx(IconButton, { type: 'button', onClick: handleOnReject, "data-testid": 'close', disabled: isLoading, children: jsx(SvgClose, {}) }));
    return (jsx(Portal, { handleClose: handleOnReject, isShown: show, zIndex: authModalZIndex, withBackdrop: true, elementId: 'dynamic-sign-message', transitionEvents: {
            onUnmount: handleOnModalUnmount,
        }, children: jsx(Modal, { children: jsxs(ModalCard, { children: [jsx(ModalHeader, { trailing: closeButton, alignContent: 'bottom', children: jsx(IconWithSpinner, { Icon: (props) => (jsx(Icon, { color: 'brand-primary', children: jsx(SvgSignCircle, Object.assign({}, props)) })), iconSize: 64, isSpinning: true }) }), jsx(PasskeyCreatedSuccessBanner, {}), jsxs("div", { className: 'sign-message-confirmation__body', children: [jsx(Typography, { variant: 'title', color: 'primary', className: 'sign-message-confirmation__title', copykey: 'dyn_sign_message.title', children: t('dyn_sign_message.title') }), jsx(AnimatePresence, { animationComponent: jsx(VerticalDrawerTransition, {}), children: signMessageError && (jsx("div", { className: 'sign-message-confirmation__error', children: jsx(ErrorContainer, { children: getProperErrorMessage(signMessageError) }) })) }), jsxs("div", { className: 'sign-message-confirmation__message-container', children: [jsx(AppOriginTile, { appLogoUrl: appLogoUrl, appName: appName, appOrigin: appOrigin }), jsx("div", { className: 'sign-message-confirmation__message', children: jsx(SignMessagePreview, { message: message.toString() }) })] }), jsx(SecureTurnkeyWalletCard, { className: 'sign-message-confirmation__secure-wallet' }), jsxs("div", { className: 'sign-message-confirmation__actions', children: [jsx(Button, { buttonVariant: 'secondary', onClick: handleOnReject, expanded: true, buttonPadding: 'large', disabled: isLoading, copykey: 'dyn_sign_message.cancel_button', children: t('dyn_sign_message.cancel_button') }), jsx(Button, { buttonVariant: 'primary', buttonPadding: 'large', onClick: () => confirm(), expanded: true, disabled: isTurnkeyWalletWithoutAuthenticator, loading: isLoading, copykey: 'dyn_sign_message.sign_button', children: t('dyn_sign_message.sign_button') })] }), jsx(NeedHelpSection, {}), jsx(PoweredByDynamic, {})] })] }) }) }));
};

export { SignMessageConfirmationModal };
