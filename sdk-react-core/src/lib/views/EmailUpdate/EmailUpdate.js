import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EmailAlreadyExistsError } from '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import { useErrorContext } from '../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgChevronLeft } from '../../shared/assets/chevron-left.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import { updateUserProfileFields } from '../../data/api.js';
import { useEmailVerificationContext } from '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../components/Typography/Typography.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import { useLoadingContext } from '../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { Button } from '../../components/Button/Button.js';
import { ModalHeader } from '../../components/ModalHeader/ModalHeader.js';
import { IconButton } from '../../components/IconButton/IconButton.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../components/InlineWidget/InlineWidget.js';
import { Input } from '../../components/Input/Input.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const EmailUpdate = () => {
    const [updatedEmail, setUpdatedEmail] = useState('');
    const { setError, setErrorMessage } = useErrorContext();
    const { loading, setLoading } = useLoadingContext();
    const { setView, goToInitialView } = useViewContext();
    const { email, setEmail, setVerificationUUID } = useEmailVerificationContext();
    const { environmentId, handleLogOut, onboardingOnlyJwt, authToken } = useInternalDynamicContext();
    const { t } = useTranslation();
    const [emailError, setEmailError] = useState(undefined);
    const handleBackClick = () => {
        setView('verify-email');
        setError(undefined);
    };
    const backButton = (jsx(IconButton, { type: 'button', onClick: handleBackClick, "data-testid": 'back-button', children: jsx(SvgChevronLeft, {}) }));
    // If user tries to update an email for logged user there is already an authToken and onboardingOnlyJwt is undefined
    // If user tries to update the email in the authFlow, authToken is undefined and onboardingOnlyJwt is defined
    const jwtToken = authToken || onboardingOnlyJwt;
    const handleEmailUpdate = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!updatedEmail) {
                return;
            }
            setEmailError(undefined);
            setLoading(true);
            const { emailVerification } = yield updateUserProfileFields(jwtToken, environmentId, { email: updatedEmail });
            if (!emailVerification) {
                yield handleLogOut();
                goToInitialView();
                return;
            }
            setError(undefined);
            setView('verify-email');
            setEmail(emailVerification.email);
            setVerificationUUID(emailVerification.verificationUUID);
        }
        catch (error) {
            logger.debug(error);
            if (error instanceof EmailAlreadyExistsError) {
                setEmailError('Email already exists');
                return;
            }
            setErrorMessage(error.code);
        }
        finally {
            setLoading(false);
        }
    });
    return (jsxs(Fragment, { children: [jsx(ModalHeader, { leading: backButton, displayLeading: true, displayBorder: true, children: jsx(Typography, { as: 'h1', variant: 'title', color: 'primary', "data-testid": 'dynamic-auth-modal-heading', className: 'header__typography', copykey: 'dyn_email_update.title', children: t('dyn_email_update.title') }) }), jsxs("div", { className: 'email-update__container', children: [jsxs("div", { className: 'email-update__copy-text-container', children: [jsx(Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', copykey: 'dyn_email_update.current_email', children: t('dyn_email_update.current_email') }), jsx(Typography, { variant: 'body_normal', weight: 'bold', color: 'secondary', children: email })] }), jsx(Input, { id: 'email_field', onChange: (e) => {
                            setUpdatedEmail(e.target.value);
                        }, type: 'email', copykey: 'dyn_email_update.label', label: t('dyn_email_update.label'), className: 'email-update__input', error: Boolean(emailError), message: emailError }), jsx(Button, { buttonVariant: 'primary', buttonPadding: 'medium', buttonClassName: 'email-update__button', onClick: () => handleEmailUpdate(), loading: loading, copykey: 'dyn_email_update.send_verification', children: t('dyn_email_update.send_verification') })] })] }));
};

export { EmailUpdate };
