import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { useMemo } from 'react';
import '@dynamic-labs/utils';
import '../../../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
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
import '../../../../context/ThemeContext/ThemeContext.js';
import { usePromise } from '../../../../utils/hooks/usePromise/usePromise.js';
import '@dynamic-labs/types';
import { useTransactionEstimatedGas } from '../../../../utils/hooks/useTransactionEstimatedGas/useTransactionEstimatedGas.js';
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
import '@dynamic-labs/viem-utils';
import '../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';

const useTransactionGas = ({ provider, transaction, }) => {
    const { data: estimatedGas, isLoading: isEstimatedGasLoading } = useTransactionEstimatedGas(provider, transaction);
    const { data: gasPrice, isLoading: isLoadingGasPrice } = usePromise(() => __awaiter(void 0, void 0, void 0, function* () {
        if (transaction.gasPrice) {
            const { gasPrice } = transaction;
            return gasPrice;
        }
        return provider.getGasPrice();
    }), {
        deps: [transaction.gasPrice],
    });
    const gasTotalPrice = useMemo(() => (gasPrice && estimatedGas ? gasPrice * estimatedGas : undefined), [gasPrice, estimatedGas]);
    const isLoading = isEstimatedGasLoading || isLoadingGasPrice;
    const isGasEstimated = Boolean(estimatedGas) && !transaction.gasPrice;
    return {
        gasTotalPrice,
        isGasEstimated,
        isLoading,
    };
};

export { useTransactionGas };
