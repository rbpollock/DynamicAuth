import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { useRef, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import '@dynamic-labs/utils';
import '../../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../context/CaptchaContext/CaptchaContext.js';
import '../../../context/ErrorContext/ErrorContext.js';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../config/ApiEndpoint.js';
import '../../../context/EmailVerificationContext/EmailVerificationContext.js';
import { useConfirmationModal } from '../useConfirmationModal/useConfirmationModal.js';
import '../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import '../../../context/MockContext/MockContext.js';
import '../useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../components/Alert/Alert.js';
import 'react-dom';
import '../../../components/ShadowDOM/ShadowDOM.js';
import '../../../components/IconButton/IconButton.js';
import '../../../components/InlineWidget/InlineWidget.js';
import '../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../components/Popper/Popper/Popper.js';
import '../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../../../components/OverlayCard/OverlayCard.context.js';
import '../../../context/FooterAnimationContext/index.js';
import '../../../context/QrCodeContext/QrCodeContext.js';
import '../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../context/LoadingContext/LoadingContext.js';
import '../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { SignMessageConfirmationModal } from '../../../modals/SignMessageConfirmationModal/SignMessageConfirmationModal.js';
import { TransactionConfirmationModal } from '../../../modals/TransactionConfirmationModal/TransactionConfirmationModal.js';

const useWalletUiUtils = ({ appLogoUrl, appName, getAppOrigin, }) => {
    const confirmationStateRef = useRef('enabled');
    const { t } = useTranslation();
    const { modal: sendTransactionModal, open: openSendTransaction } = useConfirmationModal({
        elementId: 'dynamic-send-transaction',
    });
    const { modal, open: openSignMessage } = useConfirmationModal({
        elementId: 'dynamic-sign-message',
    });
    const shouldConfirmAction = useCallback(() => {
        if (confirmationStateRef.current === 'disabled') {
            confirmationStateRef.current = 'enabled';
            return false;
        }
        return true;
    }, [confirmationStateRef]);
    const signMessage = useCallback(({ message, handler }) => {
        if (!shouldConfirmAction()) {
            return handler();
        }
        return openSignMessage((resolve, reject) => (jsx(SignMessageConfirmationModal, { appLogoUrl: appLogoUrl, appName: appName, appOrigin: getAppOrigin(), message: message, handler: handler, onSignMessage: resolve, onReject: reject })));
    }, [appLogoUrl, appName, getAppOrigin, openSignMessage, shouldConfirmAction]);
    const sendTransaction = useCallback(({ transaction, handler, provider, connector }) => __awaiter(void 0, void 0, void 0, function* () {
        if (!shouldConfirmAction()) {
            return handler(transaction);
        }
        return openSendTransaction((resolve, reject) => (jsx(TransactionConfirmationModal, { walletConnector: connector, copykey: 'dyn_send_transaction.confirmation.title', title: t('dyn_send_transaction.confirmation.title'), transaction: transaction, handler: handler, onTransactionResponseSuccess: resolve, onReject: reject, provider: provider })));
    }), [openSendTransaction, shouldConfirmAction, t]);
    const disabledConfirmationOnce = useCallback(() => {
        confirmationStateRef.current = 'disabled';
    }, []);
    const walletUiUtils = useMemo(() => ({
        disabledConfirmationOnce,
        sendTransaction,
        signMessage,
    }), [signMessage, disabledConfirmationOnce, sendTransaction]);
    return useMemo(() => [modal || sendTransactionModal, walletUiUtils], [modal, sendTransactionModal, walletUiUtils]);
};

export { useWalletUiUtils };
