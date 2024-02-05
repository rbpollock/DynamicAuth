import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { isEmailOTPWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import { useViewContext } from '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/utils';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
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
import 'react-i18next';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../../components/Alert/Alert.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/IconButton/IconButton.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import { OTPVerificationView } from '../../components/OTPVerificationView/OTPVerificationView.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';

const EmailWalletOTPVerificationView = () => {
    const { setView } = useViewContext();
    const [error, setError] = useState();
    const { selectedWalletConnector: emailWalletConnector, clearStatesOnBackClick, } = useInternalDynamicContext();
    if (!emailWalletConnector ||
        !isEmailOTPWalletConnector(emailWalletConnector)) {
        throw new Error('Current wallet is not EmailWalletConnector');
    }
    const { email } = emailWalletConnector;
    if (!email) {
        throw new Error('EmailWalletOtpVerificationView requires a email');
    }
    const handleBackClick = () => {
        emailWalletConnector.clearEmail();
        clearStatesOnBackClick();
        setView('login-with-email-or-wallet');
    };
    const { data: isValid, isLoading, mutate: onSubmit, } = useMutation((otp) => emailWalletConnector.verifyOneTimePassword(otp), {
        onFailure: (error) => setError(error),
    });
    return (jsx(OTPVerificationView, { email: email, error: error, onClickBack: handleBackClick, isLoading: isLoading, onPinComplete: onSubmit, isValid: isValid === true, onPinChange: () => setError(undefined), onClickEditEmail: handleBackClick, successBannerTextKey: 'dyn_otp_verification.banner_text' }));
};

export { EmailWalletOTPVerificationView };
