import { jsx } from 'react/jsx-runtime';
import { createContext, useContext } from 'react';
import '@dynamic-labs/utils';
import '../DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../CaptchaContext/CaptchaContext.js';
import '../ErrorContext/ErrorContext.js';
import '../ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../AccessDeniedContext/AccessDeniedContext.js';
import '../AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { useDefaultQrCode } from '../../utils/hooks/useDefaultQrCode/useDefaultQrCode.js';
import '../ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../UserWalletsContext/UserWalletsContext.js';
import '../../components/Alert/Alert.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/IconButton/IconButton.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../FooterAnimationContext/index.js';
import '../WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../LoadingContext/LoadingContext.js';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';

const QrCodeContext = createContext(undefined);
const QrCodeContextProvider = ({ children, }) => {
    const { setShowQrCodeImage, setShowQrCodeMessage, showQrCodeImage, showQrCodeMessage, } = useDefaultQrCode();
    const value = {
        setShowQrCodeImage,
        setShowQrCodeMessage,
        showQrCodeImage,
        showQrCodeMessage,
    };
    return (jsx(QrCodeContext.Provider, { value: value, children: children }));
};
const useQrCodeContext = () => {
    const context = useContext(QrCodeContext);
    if (context === undefined) {
        throw new Error('usage of useQrCodeContext not wrapped in `QrCodeContextProvider`.');
    }
    return context;
};

export { QrCodeContext, QrCodeContextProvider, useQrCodeContext };
