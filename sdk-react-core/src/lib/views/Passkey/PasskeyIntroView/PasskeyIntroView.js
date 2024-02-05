import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicError } from '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../context/CaptchaContext/CaptchaContext.js';
import '../../../context/ErrorContext/ErrorContext.js';
import '../../../context/ViewContext/ViewContext.js';
import { decodeJwt } from '../../../shared/utils/functions/decodeJwt/decodeJwt.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgPasskeyIntroIcon } from '../../../shared/assets/passkey-intro-icon.js';
import { ReactComponent as SvgQuestionMark } from '../../../shared/assets/question-mark.js';
import '../../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import { LAST_USED_WALLET } from '../../../utils/constants/localStorage.js';
import '../../../utils/constants/colors.js';
import { LocalStorage } from '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getAuthToken } from '../../../utils/functions/getAuthToken/getAuthToken.js';
import '@dynamic-labs/sdk-api';
import { isPasskeyEnabled } from '../../../utils/functions/isPasskeyEnabled/isPasskeyEnabled.js';
import '../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../config/ApiEndpoint.js';
import '../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { useCreateDynamicEmbeddedWalletMutation } from '../../../utils/hooks/useCreateDynamicEmbeddedWalletMutation/useCreateDynamicEmbeddedWalletMutation.js';
import '../../../context/ThemeContext/ThemeContext.js';
import { usePromise } from '../../../utils/hooks/usePromise/usePromise.js';
import '@dynamic-labs/types';
import 'yup';
import '../../../context/MockContext/MockContext.js';
import '../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../components/ShadowDOM/ShadowDOM.js';
import '../../../components/OverlayCard/OverlayCard.context.js';
import { useFooterAnimationContext } from '../../../context/FooterAnimationContext/index.js';
import '../../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../../components/Typography/Typography.js';
import { Tooltip } from '../../../components/Tooltip/Tooltip.js';
import '../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import { ErrorContainer } from '../../../components/ErrorContainer/ErrorContainer.js';
import '../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { Button } from '../../../components/Button/Button.js';
import { ModalHeader } from '../../../components/ModalHeader/ModalHeader.js';
import { IconButton } from '../../../components/IconButton/IconButton.js';
import '../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { getProperErrorMessage } from '../../../modals/SignMessageConfirmationModal/getProperErrorMessage.js';
import { TextButton } from '../../../components/TextButton/TextButton.js';
import '../../../components/InlineWidget/InlineWidget.js';
import '../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../components/Popper/Popper/Popper.js';
import '../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { PasskeyDeviceIcon } from '../PasskeyDeviceIcon/PasskeyDeviceIcon.js';

const PasskeyIntroView = () => {
    const { walletConnectorOptions, environmentId, handleLogOut, onboardingOnlyJwt, } = useInternalDynamicContext();
    const { setIsFooterExpanded } = useFooterAnimationContext();
    const { t } = useTranslation();
    const { data: passkeyEnabled } = usePromise(isPasskeyEnabled);
    // if passkey is not yet setup, but user logged in with email in a passkey env
    // it should be null to force user to setup passkey even after the a refresh
    useEffect(() => LocalStorage.removeFromLS(LAST_USED_WALLET), []);
    const { createDynamicEmbeddedWalletMutation, isLoading, error } = useCreateDynamicEmbeddedWalletMutation();
    const handleCreateEmbeddedWallet = () => {
        var _a;
        const jwt = (_a = getAuthToken()) !== null && _a !== void 0 ? _a : onboardingOnlyJwt;
        const decodedJwt = decodeJwt(jwt);
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
    const errorText = useMemo(() => {
        if (!error) {
            return undefined;
        }
        if (error instanceof DynamicError) {
            return error.message;
        }
        return getProperErrorMessage(error);
    }, [error]);
    const infoIconButton = (jsx(Tooltip, { content: t('dyn_passkey_intro.helper.tooltip'), className: 'header__tooltip', copykey: 'dyn_passkey_intro.helper.tooltip', children: jsx(IconButton, { type: 'button', "data-testid": 'info-button', onClick: () => setIsFooterExpanded((prev) => !prev), className: 'header__icon', children: jsx(SvgQuestionMark, {}) }) }, 'info-button'));
    return (jsxs(Fragment, { children: [jsx(ModalHeader, { trailing: infoIconButton, children: jsx(Typography, { as: 'h1', variant: 'title', color: 'primary', "data-testid": 'dynamic-auth-modal-heading', className: 'header__typography', copykey: 'dyn_passkey_intro.title', children: t('dyn_passkey_intro.title') }) }), jsxs("div", { className: 'passkey-intro-view', children: [jsx("div", { className: 'passkey-intro-view__header', children: jsx(SvgPasskeyIntroIcon, {}) }), jsx(Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', className: 'passkey-intro-view__subtitle', copykey: 'dyn_passkey_intro.subtitle', children: t('dyn_passkey_intro.subtitle') }), passkeyEnabled === false && (jsx(ErrorContainer, { copykey: 'dyn_passkey_intro.disabled', children: t('dyn_passkey_intro.disabled') })), errorText && jsx(ErrorContainer, { children: errorText }), jsxs("div", { className: 'passkey-intro-view__actions', children: [jsx(Button, { buttonVariant: 'brand-primary', buttonPadding: 'large', onClick: handleCreateEmbeddedWallet, dataTestId: 'setup-passkey-button', loading: isLoading, disabled: isLoading || !passkeyEnabled, typographyProps: {
                                    color: 'inherit',
                                }, children: jsxs("div", { className: 'passkey-intro-view__inline-button', children: [jsx(PasskeyDeviceIcon, {}), jsx(Typography, { copykey: 'dyn_passkey_intro.button', children: t('dyn_passkey_intro.button') })] }) }), jsx(TextButton, { "data-testid": 'setup-passkey-logout-button', className: 'passkey-intro-view__log-out', onClick: handleLogOut, copykey: 'dyn_passkey_intro.button_logout', children: t('dyn_passkey_intro.button_logout') })] })] })] }));
};

export { PasskeyIntroView };
