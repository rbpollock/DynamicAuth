import { __rest } from '../../../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import 'react';
import '@dynamic-labs/utils';
import '../../../../context/DynamicContext/DynamicContext.js';
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
import { isMagicConnector } from '../../../../utils/functions/isMagicConnector/isMagicConnector.js';
import { sendTransactionWithAutoNonce } from '../../../../utils/functions/sendTransactionWithAutoNonce/sendTransactionWithAutoNonce.js';
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../config/ApiEndpoint.js';
import '../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import { useTransactionWithGasPrice } from '../../../../utils/hooks/useTransactionWithGasPrice/useTransactionWithGasPrice.js';
import 'yup';
import 'react-i18next';
import '../../../../context/MockContext/MockContext.js';
import '../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../../components/Alert/Alert.js';
import '../../../../components/ShadowDOM/ShadowDOM.js';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../../../../components/OverlayCard/OverlayCard.context.js';
import '../../../../context/FooterAnimationContext/index.js';
import '../../../../context/QrCodeContext/QrCodeContext.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import '../../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import { TransactionConfirmationView } from '../../../TransactionConfirmationView/TransactionConfirmationView.js';
import '../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';

const TransactionStage = (_a) => {
    var { transaction, provider, walletConnector, mutation } = _a, rest = __rest(_a, ["transaction", "provider", "walletConnector", "mutation"]);
    const transactionWithGasPrice = useTransactionWithGasPrice({
        enabled: isMagicConnector(walletConnector),
        increasePercentage: 5,
        provider,
        transaction,
    });
    return (jsx(TransactionConfirmationView, Object.assign({ provider: provider, transaction: transactionWithGasPrice, mutation: () => sendTransactionWithAutoNonce(walletConnector, transactionWithGasPrice, mutation) }, rest)));
};

export { TransactionStage };
