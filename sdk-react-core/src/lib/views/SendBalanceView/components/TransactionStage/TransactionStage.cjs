'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
require('react');
require('@dynamic-labs/utils');
require('../../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var isMagicConnector = require('../../../../utils/functions/isMagicConnector/isMagicConnector.cjs');
var sendTransactionWithAutoNonce = require('../../../../utils/functions/sendTransactionWithAutoNonce/sendTransactionWithAutoNonce.cjs');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
var useTransactionWithGasPrice = require('../../../../utils/hooks/useTransactionWithGasPrice/useTransactionWithGasPrice.cjs');
require('yup');
require('react-i18next');
require('../../../../context/MockContext/MockContext.cjs');
require('../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../../components/Alert/Alert.cjs');
require('../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('../../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
var TransactionConfirmationView = require('../../../TransactionConfirmationView/TransactionConfirmationView.cjs');
require('../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');

const TransactionStage = (_a) => {
    var { transaction, provider, walletConnector, mutation } = _a, rest = _tslib.__rest(_a, ["transaction", "provider", "walletConnector", "mutation"]);
    const transactionWithGasPrice = useTransactionWithGasPrice.useTransactionWithGasPrice({
        enabled: isMagicConnector.isMagicConnector(walletConnector),
        increasePercentage: 5,
        provider,
        transaction,
    });
    return (jsxRuntime.jsx(TransactionConfirmationView.TransactionConfirmationView, Object.assign({ provider: provider, transaction: transactionWithGasPrice, mutation: () => sendTransactionWithAutoNonce.sendTransactionWithAutoNonce(walletConnector, transactionWithGasPrice, mutation) }, rest)));
};

exports.TransactionStage = TransactionStage;
