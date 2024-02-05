import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { parseEther, isHex, hexToBigInt } from 'viem';
import { DynamicError, TransactionGasCannotBeSponsoredError } from '@dynamic-labs/utils';
import { isAccountAbstractionConnector } from '@dynamic-labs/wallet-connector-core';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import { getChainIcon } from '../../shared/utils/functions/chain/getChainIcon.js';
import '@dynamic-labs/wallet-book';
import { shortenWalletAddress } from '../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import { formatBigNumber } from '../../shared/utils/functions/formatBigNumber/formatBigNumber.js';
import '@dynamic-labs/iconic';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getAppOrigin } from '../../utils/functions/getAppOrigin/getAppOrigin.js';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { useMutation } from '../../utils/hooks/useMutation/useMutation.js';
import '../../context/ThemeContext/ThemeContext.js';
import { usePromise } from '../../utils/hooks/usePromise/usePromise.js';
import '@dynamic-labs/types';
import 'yup';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import { Alert } from '../../components/Alert/Alert.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import { Icon } from '../../components/Icon/Icon.js';
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
import { TransactionConfirmationPageLayout } from '../../components/TransactionConfirmationPageLayout/TransactionConfirmationPageLayout.js';
import { TransactionRow } from '../../components/TransactionConfirmationPageLayout/components/TransactionRow/TransactionRow.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import { useFetchChain } from '../../widgets/DynamicWidget/hooks/useFetchChain/useFetchChain.js';
import { useFetchCurrency } from '../../widgets/DynamicWidget/hooks/useFetchCurrency/useFetchCurrency.js';
import { useTransactionGas } from './hooks/useTransactionGas/useTransactionGas.js';
import { useTransactionTotal } from './hooks/useTransactionTotal/useTransactionTotal.js';
import { transactionErrorMessage } from './helpers/transactionErrorMessage.js';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';

const TransactionConfirmationView = ({ transaction, mutation, onError, onSuccess, onClickBack, onClickClose, title, displayPoweredByDynamicFooter = false, provider, copykey, }) => {
    const { appName, appLogoUrl, primaryWallet } = useInternalDynamicContext();
    const appOrigin = getAppOrigin();
    const [isGasSponsored, setIsGasSponsored] = useState(false);
    const { t } = useTranslation();
    if (!primaryWallet) {
        throw new DynamicError('Primary wallet is not available, transaction cannot be displayed');
    }
    const [currencySymbol] = useFetchCurrency(primaryWallet.connector);
    const { data: balance } = usePromise(() => __awaiter(void 0, void 0, void 0, function* () {
        const balanceText = yield primaryWallet.connector.getBalance();
        return balanceText ? parseEther(balanceText) : undefined;
    }));
    const { isLoading: isGasSponsoredLoading } = usePromise(() => {
        if (!isAccountAbstractionConnector(primaryWallet.connector)) {
            return false;
        }
        return primaryWallet.connector.canSponsorTransactionGas(transaction);
    }, {
        onResolve: (isGasSponsored) => {
            const { connector } = primaryWallet;
            setIsGasSponsored(isGasSponsored);
            if (!isGasSponsored && isAccountAbstractionConnector(connector)) {
                connector.disableGasSponsorshipOnce();
            }
        },
    });
    const { mutate: send, isLoading, error: transactionError, } = useMutation(() => mutation(), {
        onFailure: (error) => {
            if (TransactionGasCannotBeSponsoredError.isInstance(error)) {
                setIsGasSponsored(false);
                const { connector } = primaryWallet;
                if (isAccountAbstractionConnector(connector)) {
                    connector.disableGasSponsorshipOnce();
                }
            }
            onError === null || onError === void 0 ? void 0 : onError(error);
        },
        onSuccess: (tx) => onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(tx),
    });
    const { isLoading: isGasPriceLoading, gasTotalPrice, isGasEstimated, } = useTransactionGas({
        provider,
        transaction,
    });
    const { data: transactionToAddress, isLoading: isTransactionToAddressLoading, } = usePromise(() => { var _a; return (_a = transaction.to) === null || _a === void 0 ? void 0 : _a.toString(); });
    const { data: transactionFromAddress, isLoading: isTransactionFromAddressLoading, } = usePromise(() => transaction.from);
    const { data: transactionValue, isLoading: isTransactionValueLoading } = usePromise(() => __awaiter(void 0, void 0, void 0, function* () {
        const val = yield transaction.value;
        if (isHex(val)) {
            return hexToBigInt(val);
        }
        return val ? val : undefined;
    }));
    const total = useTransactionTotal({
        gasTotalPrice,
        isGasSponsored,
        transactionValue,
    });
    const isTransactionLoading = isTransactionValueLoading ||
        isGasPriceLoading ||
        isTransactionToAddressLoading ||
        isTransactionFromAddressLoading ||
        isGasSponsoredLoading;
    const [chain] = useFetchChain(primaryWallet.connector);
    const chainName = (chain === null || chain === void 0 ? void 0 : chain.name) || primaryWallet.chain;
    const ChainIconComponent = getChainIcon(chainName);
    const chainIcon = (jsx(Icon, { size: 'small', children: (chain === null || chain === void 0 ? void 0 : chain.icon) ? (jsx("img", { src: chain.icon, alt: `${chain.name} icon` })) : (jsx(ChainIconComponent, {})) }));
    const errorMessage = transactionError && transactionErrorMessage(transactionError);
    const missingFunds = useMemo(() => {
        if (balance === undefined || total === undefined)
            return undefined;
        return total - balance;
    }, [balance, total]);
    const hasInsufficientFunds = useMemo(() => {
        if (balance === undefined || total === undefined)
            return false;
        return total > balance;
    }, [balance, total]);
    const alert = useMemo(() => {
        if (isTransactionLoading || Boolean(errorMessage))
            return null;
        if (TransactionGasCannotBeSponsoredError.isInstance(transactionError)) {
            return (jsx(Alert, { icon: 'error', variant: 'error', copykey: 'dyn_send_transaction.error_message.gas_not_sponsored', children: t('dyn_send_transaction.error_message.gas_not_sponsored') }));
        }
        const showInsufficientFundsWarningMessage = hasInsufficientFunds && missingFunds;
        if (!showInsufficientFundsWarningMessage)
            return;
        const amountLeft = formatBigNumber(missingFunds, 5);
        return (jsx(Alert, { icon: 'error', variant: 'warning', contentDataTestId: 'warning_content', copykey: 'dyn_send_transaction.warning_message.insufficient_funds', children: t('dyn_send_transaction.warning_message.insufficient_funds', {
                amountLeft,
                currencySymbol,
            }) }));
    }, [
        currencySymbol,
        hasInsufficientFunds,
        missingFunds,
        t,
        transactionError,
        isTransactionLoading,
        errorMessage,
    ]);
    return (jsxs(TransactionConfirmationPageLayout, { onClickBack: onClickBack, onClickClose: onClickClose, copykey: copykey, title: title, appOrigin: appOrigin, appName: appName, appLogoUrl: appLogoUrl, isLoading: isLoading, onClickSend: () => send(), displayPoweredByDynamicFooter: displayPoweredByDynamicFooter, disableSendButton: isTransactionLoading || hasInsufficientFunds, error: errorMessage, alert: alert, children: [jsx(TransactionRow, { copykey: 'dyn_send_transaction.confirmation.data.from', label: t('dyn_send_transaction.confirmation.data.from'), isLoading: isTransactionFromAddressLoading, title: transactionFromAddress, children: shortenWalletAddress(transactionFromAddress, 4, 4) }), jsx(TransactionRow, { copykey: 'dyn_send_transaction.confirmation.data.to', label: t('dyn_send_transaction.confirmation.data.to'), isLoading: isTransactionToAddressLoading, title: transactionToAddress, children: transactionToAddress &&
                    shortenWalletAddress(transactionToAddress, 4, 4) }), jsx(TransactionRow, { copykey: 'dyn_send_transaction.confirmation.data.amount', label: t('dyn_send_transaction.confirmation.data.amount'), isLoading: isTransactionValueLoading, isEmpty: !transactionValue, title: transactionValue ? formatBigNumber(transactionValue) : undefined, suffix: currencySymbol, icon: chainIcon, dataTestId: 'transaction-amount', children: transactionValue ? formatBigNumber(transactionValue, 10) : 0 }), !isGasSponsored && (jsxs(Fragment, { children: [jsx(TransactionRow, { copykey: isGasEstimated
                            ? 'dyn_send_transaction.confirmation.data.gas_estimate'
                            : 'dyn_send_transaction.confirmation.data.gas', label: isGasEstimated
                            ? t('dyn_send_transaction.confirmation.data.gas_estimate')
                            : t('dyn_send_transaction.confirmation.data.gas'), isEmpty: !gasTotalPrice, isLoading: isGasPriceLoading || isGasSponsoredLoading, title: gasTotalPrice ? formatBigNumber(gasTotalPrice) : undefined, suffix: gasTotalPrice ? currencySymbol : undefined, icon: gasTotalPrice ? chainIcon : undefined, dataTestId: isGasEstimated
                            ? 'transaction-estimated-gas-fee'
                            : 'transaction-gas-fee', children: gasTotalPrice ? formatBigNumber(gasTotalPrice, 10) : '--' }), jsx(TransactionRow, { copykey: 'dyn_send_transaction.confirmation.data.total', label: t('dyn_send_transaction.confirmation.data.total'), isEmpty: !total, title: total ? formatBigNumber(total) : undefined, suffix: total ? currencySymbol : undefined, icon: total ? chainIcon : undefined, dataTestId: 'transaction-total', children: total
                            ? formatBigNumber(total, 10)
                            : t('dyn_send_transaction.confirmation.not_applied') })] }))] }));
};

export { TransactionConfirmationView };
