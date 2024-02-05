import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../config/ApiEndpoint.js';
import '../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { useMutation } from '../../../../utils/hooks/useMutation/useMutation.js';
import '../../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
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
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import { OTPVerificationView } from '../../../../components/OTPVerificationView/OTPVerificationView.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const EmailOTPConnectorPendingSignModalContent = ({ walletConnector }) => {
    const { setSelectedWalletWithAction, selectedWalletWithAction, setPrimaryWalletId, setMultiWalletWidgetState, } = useInternalDynamicContext();
    const [error, setError] = useState();
    const { email } = walletConnector;
    if (!email) {
        throw new Error('EmailOTPConnectorPendingSignModalContent requires a email');
    }
    const { data: isValid, isLoading, mutate: onSubmit, } = useMutation((otp) => walletConnector.verifyOneTimePassword(otp), {
        onFailure: (error) => setError(error),
        onSuccess: () => __awaiter(void 0, void 0, void 0, function* () {
            if (!selectedWalletWithAction) {
                return;
            }
            setMultiWalletWidgetState('idle');
            setSelectedWalletWithAction(null);
            setPrimaryWalletId(selectedWalletWithAction.wallet.id);
        }),
    });
    return (jsx(OTPVerificationView, { email: email, error: error, isLoading: isLoading, onPinComplete: onSubmit, isValid: isValid === true, onPinChange: () => setError(undefined) }));
};

export { EmailOTPConnectorPendingSignModalContent };
