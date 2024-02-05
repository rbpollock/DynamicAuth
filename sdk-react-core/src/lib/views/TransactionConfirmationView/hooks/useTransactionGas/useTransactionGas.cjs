'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var React = require('react');
require('@dynamic-labs/utils');
require('../../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../context/ThemeContext/ThemeContext.cjs');
var usePromise = require('../../../../utils/hooks/usePromise/usePromise.cjs');
require('@dynamic-labs/types');
var useTransactionEstimatedGas = require('../../../../utils/hooks/useTransactionEstimatedGas/useTransactionEstimatedGas.cjs');
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
require('@dynamic-labs/viem-utils');
require('../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');

const useTransactionGas = ({ provider, transaction, }) => {
    const { data: estimatedGas, isLoading: isEstimatedGasLoading } = useTransactionEstimatedGas.useTransactionEstimatedGas(provider, transaction);
    const { data: gasPrice, isLoading: isLoadingGasPrice } = usePromise.usePromise(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (transaction.gasPrice) {
            const { gasPrice } = transaction;
            return gasPrice;
        }
        return provider.getGasPrice();
    }), {
        deps: [transaction.gasPrice],
    });
    const gasTotalPrice = React.useMemo(() => (gasPrice && estimatedGas ? gasPrice * estimatedGas : undefined), [gasPrice, estimatedGas]);
    const isLoading = isEstimatedGasLoading || isLoadingGasPrice;
    const isGasEstimated = Boolean(estimatedGas) && !transaction.gasPrice;
    return {
        gasTotalPrice,
        isGasEstimated,
        isLoading,
    };
};

exports.useTransactionGas = useTransactionGas;
