'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
require('@dynamic-labs/utils');
require('../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../context/ErrorContext/ErrorContext.cjs');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../config/ApiEndpoint.cjs');
require('../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
var useConfirmationModal = require('../useConfirmationModal/useConfirmationModal.cjs');
require('../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../../context/MockContext/MockContext.cjs');
require('../useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../components/Alert/Alert.cjs');
require('react-dom');
require('../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../components/IconButton/IconButton.cjs');
require('../../../components/InlineWidget/InlineWidget.cjs');
require('../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../components/Popper/Popper/Popper.cjs');
require('../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../context/FooterAnimationContext/index.cjs');
require('../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../context/LoadingContext/LoadingContext.cjs');
require('../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var SignMessageConfirmationModal = require('../../../modals/SignMessageConfirmationModal/SignMessageConfirmationModal.cjs');
var TransactionConfirmationModal = require('../../../modals/TransactionConfirmationModal/TransactionConfirmationModal.cjs');

const useWalletUiUtils = ({ appLogoUrl, appName, getAppOrigin, }) => {
    const confirmationStateRef = React.useRef('enabled');
    const { t } = reactI18next.useTranslation();
    const { modal: sendTransactionModal, open: openSendTransaction } = useConfirmationModal.useConfirmationModal({
        elementId: 'dynamic-send-transaction',
    });
    const { modal, open: openSignMessage } = useConfirmationModal.useConfirmationModal({
        elementId: 'dynamic-sign-message',
    });
    const shouldConfirmAction = React.useCallback(() => {
        if (confirmationStateRef.current === 'disabled') {
            confirmationStateRef.current = 'enabled';
            return false;
        }
        return true;
    }, [confirmationStateRef]);
    const signMessage = React.useCallback(({ message, handler }) => {
        if (!shouldConfirmAction()) {
            return handler();
        }
        return openSignMessage((resolve, reject) => (jsxRuntime.jsx(SignMessageConfirmationModal.SignMessageConfirmationModal, { appLogoUrl: appLogoUrl, appName: appName, appOrigin: getAppOrigin(), message: message, handler: handler, onSignMessage: resolve, onReject: reject })));
    }, [appLogoUrl, appName, getAppOrigin, openSignMessage, shouldConfirmAction]);
    const sendTransaction = React.useCallback(({ transaction, handler, provider, connector }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (!shouldConfirmAction()) {
            return handler(transaction);
        }
        return openSendTransaction((resolve, reject) => (jsxRuntime.jsx(TransactionConfirmationModal.TransactionConfirmationModal, { walletConnector: connector, copykey: 'dyn_send_transaction.confirmation.title', title: t('dyn_send_transaction.confirmation.title'), transaction: transaction, handler: handler, onTransactionResponseSuccess: resolve, onReject: reject, provider: provider })));
    }), [openSendTransaction, shouldConfirmAction, t]);
    const disabledConfirmationOnce = React.useCallback(() => {
        confirmationStateRef.current = 'disabled';
    }, []);
    const walletUiUtils = React.useMemo(() => ({
        disabledConfirmationOnce,
        sendTransaction,
        signMessage,
    }), [signMessage, disabledConfirmationOnce, sendTransaction]);
    return React.useMemo(() => [modal || sendTransactionModal, walletUiUtils], [modal, sendTransactionModal, walletUiUtils]);
};

exports.useWalletUiUtils = useWalletUiUtils;
