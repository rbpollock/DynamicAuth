'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var useInternalDynamicContext = require('../DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/utils');
require('../CaptchaContext/CaptchaContext.cjs');
require('../ErrorContext/ErrorContext.cjs');
require('../ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../AccessDeniedContext/AccessDeniedContext.cjs');
require('../AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../EmailVerificationContext/EmailVerificationContext.cjs');
var useConfirmationModal = require('../../utils/hooks/useConfirmationModal/useConfirmationModal.cjs');
require('../ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../UserWalletsContext/UserWalletsContext.cjs');
require('../../components/Alert/Alert.cjs');
require('react-dom');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/IconButton/IconButton.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../FooterAnimationContext/index.cjs');
require('../QrCodeContext/QrCodeContext.cjs');
require('../WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../LoadingContext/LoadingContext.cjs');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var SendBalanceModal = require('../../modals/SendBalanceModal/SendBalanceModal.cjs');
var SendBalanceContext_errors = require('./SendBalanceContext.errors.cjs');

const sendBalanceContext = React.createContext(undefined);
const SendBalanceContextProvider = ({ children, }) => {
    const { primaryWallet } = useInternalDynamicContext.useInternalDynamicContext();
    const { Provider } = sendBalanceContext;
    const { open, modal } = useConfirmationModal.useConfirmationModal({
        elementId: 'dynamic-send-balance',
    });
    const openSendBalanceModal = React.useCallback((props) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        return open((resolve, reject) => {
            if (!primaryWallet) {
                throw SendBalanceContext_errors.noWalletError;
            }
            if (!walletConnectorCore.isEmbeddedConnector(primaryWallet.connector)) {
                throw SendBalanceContext_errors.invalidWalletTypeError;
            }
            return (jsxRuntime.jsx(SendBalanceModal.SendBalanceModal, { onReject: reject, onSuccess: resolve, initialRecipientAddress: props === null || props === void 0 ? void 0 : props.recipientAddress, initialValue: props === null || props === void 0 ? void 0 : props.value }));
        });
    }), [open, primaryWallet]);
    return (jsxRuntime.jsxs(Provider, { value: { open: openSendBalanceModal }, children: [modal, children] }));
};
const useSendBalance = () => {
    const context = React.useContext(sendBalanceContext);
    if (context === undefined) {
        throw new Error('usage of useSendBalance not wrapped in `SendBalanceContextProvider`.');
    }
    return context;
};

exports.SendBalanceContextProvider = SendBalanceContextProvider;
exports.useSendBalance = useSendBalance;
