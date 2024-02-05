import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { createContext, useContext, useCallback } from 'react';
import { isEmbeddedConnector } from '@dynamic-labs/wallet-connector-core';
import { useInternalDynamicContext } from '../DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/utils';
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
import { useConfirmationModal } from '../../utils/hooks/useConfirmationModal/useConfirmationModal.js';
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
import 'react-dom';
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
import '../QrCodeContext/QrCodeContext.js';
import '../WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../LoadingContext/LoadingContext.js';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { SendBalanceModal } from '../../modals/SendBalanceModal/SendBalanceModal.js';
import { noWalletError, invalidWalletTypeError } from './SendBalanceContext.errors.js';

const sendBalanceContext = createContext(undefined);
const SendBalanceContextProvider = ({ children, }) => {
    const { primaryWallet } = useInternalDynamicContext();
    const { Provider } = sendBalanceContext;
    const { open, modal } = useConfirmationModal({
        elementId: 'dynamic-send-balance',
    });
    const openSendBalanceModal = useCallback((props) => __awaiter(void 0, void 0, void 0, function* () {
        return open((resolve, reject) => {
            if (!primaryWallet) {
                throw noWalletError;
            }
            if (!isEmbeddedConnector(primaryWallet.connector)) {
                throw invalidWalletTypeError;
            }
            return (jsx(SendBalanceModal, { onReject: reject, onSuccess: resolve, initialRecipientAddress: props === null || props === void 0 ? void 0 : props.recipientAddress, initialValue: props === null || props === void 0 ? void 0 : props.value }));
        });
    }), [open, primaryWallet]);
    return (jsxs(Provider, { value: { open: openSendBalanceModal }, children: [modal, children] }));
};
const useSendBalance = () => {
    const context = useContext(sendBalanceContext);
    if (context === undefined) {
        throw new Error('usage of useSendBalance not wrapped in `SendBalanceContextProvider`.');
    }
    return context;
};

export { SendBalanceContextProvider, useSendBalance };
