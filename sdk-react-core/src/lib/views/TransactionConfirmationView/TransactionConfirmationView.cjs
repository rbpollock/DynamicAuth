'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var viem = require('viem');
var utils = require('@dynamic-labs/utils');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
var getChainIcon = require('../../shared/utils/functions/chain/getChainIcon.cjs');
require('@dynamic-labs/wallet-book');
var shortenWalletAddress = require('../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
var formatBigNumber = require('../../shared/utils/functions/formatBigNumber/formatBigNumber.cjs');
require('@dynamic-labs/iconic');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getAppOrigin = require('../../utils/functions/getAppOrigin/getAppOrigin.cjs');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var useMutation = require('../../utils/hooks/useMutation/useMutation.cjs');
require('../../context/ThemeContext/ThemeContext.cjs');
var usePromise = require('../../utils/hooks/usePromise/usePromise.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
var Alert = require('../../components/Alert/Alert.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
var Icon = require('../../components/Icon/Icon.cjs');
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
var TransactionConfirmationPageLayout = require('../../components/TransactionConfirmationPageLayout/TransactionConfirmationPageLayout.cjs');
var TransactionRow = require('../../components/TransactionConfirmationPageLayout/components/TransactionRow/TransactionRow.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
var useFetchChain = require('../../widgets/DynamicWidget/hooks/useFetchChain/useFetchChain.cjs');
var useFetchCurrency = require('../../widgets/DynamicWidget/hooks/useFetchCurrency/useFetchCurrency.cjs');
var useTransactionGas = require('./hooks/useTransactionGas/useTransactionGas.cjs');
var useTransactionTotal = require('./hooks/useTransactionTotal/useTransactionTotal.cjs');
var transactionErrorMessage = require('./helpers/transactionErrorMessage.cjs');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');

const TransactionConfirmationView = ({ transaction, mutation, onError, onSuccess, onClickBack, onClickClose, title, displayPoweredByDynamicFooter = false, provider, copykey, }) => {
    const { appName, appLogoUrl, primaryWallet } = useInternalDynamicContext.useInternalDynamicContext();
    const appOrigin = getAppOrigin.getAppOrigin();
    const [isGasSponsored, setIsGasSponsored] = React.useState(false);
    const { t } = reactI18next.useTranslation();
    if (!primaryWallet) {
        throw new utils.DynamicError('Primary wallet is not available, transaction cannot be displayed');
    }
    const [currencySymbol] = useFetchCurrency.useFetchCurrency(primaryWallet.connector);
    const { data: balance } = usePromise.usePromise(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const balanceText = yield primaryWallet.connector.getBalance();
        return balanceText ? viem.parseEther(balanceText) : undefined;
    }));
    const { isLoading: isGasSponsoredLoading } = usePromise.usePromise(() => {
        if (!walletConnectorCore.isAccountAbstractionConnector(primaryWallet.connector)) {
            return false;
        }
        return primaryWallet.connector.canSponsorTransactionGas(transaction);
    }, {
        onResolve: (isGasSponsored) => {
            const { connector } = primaryWallet;
            setIsGasSponsored(isGasSponsored);
            if (!isGasSponsored && walletConnectorCore.isAccountAbstractionConnector(connector)) {
                connector.disableGasSponsorshipOnce();
            }
        },
    });
    const { mutate: send, isLoading, error: transactionError, } = useMutation.useMutation(() => mutation(), {
        onFailure: (error) => {
            if (utils.TransactionGasCannotBeSponsoredError.isInstance(error)) {
                setIsGasSponsored(false);
                const { connector } = primaryWallet;
                if (walletConnectorCore.isAccountAbstractionConnector(connector)) {
                    connector.disableGasSponsorshipOnce();
                }
            }
            onError === null || onError === void 0 ? void 0 : onError(error);
        },
        onSuccess: (tx) => onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(tx),
    });
    const { isLoading: isGasPriceLoading, gasTotalPrice, isGasEstimated, } = useTransactionGas.useTransactionGas({
        provider,
        transaction,
    });
    const { data: transactionToAddress, isLoading: isTransactionToAddressLoading, } = usePromise.usePromise(() => { var _a; return (_a = transaction.to) === null || _a === void 0 ? void 0 : _a.toString(); });
    const { data: transactionFromAddress, isLoading: isTransactionFromAddressLoading, } = usePromise.usePromise(() => transaction.from);
    const { data: transactionValue, isLoading: isTransactionValueLoading } = usePromise.usePromise(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const val = yield transaction.value;
        if (viem.isHex(val)) {
            return viem.hexToBigInt(val);
        }
        return val ? val : undefined;
    }));
    const total = useTransactionTotal.useTransactionTotal({
        gasTotalPrice,
        isGasSponsored,
        transactionValue,
    });
    const isTransactionLoading = isTransactionValueLoading ||
        isGasPriceLoading ||
        isTransactionToAddressLoading ||
        isTransactionFromAddressLoading ||
        isGasSponsoredLoading;
    const [chain] = useFetchChain.useFetchChain(primaryWallet.connector);
    const chainName = (chain === null || chain === void 0 ? void 0 : chain.name) || primaryWallet.chain;
    const ChainIconComponent = getChainIcon.getChainIcon(chainName);
    const chainIcon = (jsxRuntime.jsx(Icon.Icon, { size: 'small', children: (chain === null || chain === void 0 ? void 0 : chain.icon) ? (jsxRuntime.jsx("img", { src: chain.icon, alt: `${chain.name} icon` })) : (jsxRuntime.jsx(ChainIconComponent, {})) }));
    const errorMessage = transactionError && transactionErrorMessage.transactionErrorMessage(transactionError);
    const missingFunds = React.useMemo(() => {
        if (balance === undefined || total === undefined)
            return undefined;
        return total - balance;
    }, [balance, total]);
    const hasInsufficientFunds = React.useMemo(() => {
        if (balance === undefined || total === undefined)
            return false;
        return total > balance;
    }, [balance, total]);
    const alert = React.useMemo(() => {
        if (isTransactionLoading || Boolean(errorMessage))
            return null;
        if (utils.TransactionGasCannotBeSponsoredError.isInstance(transactionError)) {
            return (jsxRuntime.jsx(Alert.Alert, { icon: 'error', variant: 'error', copykey: 'dyn_send_transaction.error_message.gas_not_sponsored', children: t('dyn_send_transaction.error_message.gas_not_sponsored') }));
        }
        const showInsufficientFundsWarningMessage = hasInsufficientFunds && missingFunds;
        if (!showInsufficientFundsWarningMessage)
            return;
        const amountLeft = formatBigNumber.formatBigNumber(missingFunds, 5);
        return (jsxRuntime.jsx(Alert.Alert, { icon: 'error', variant: 'warning', contentDataTestId: 'warning_content', copykey: 'dyn_send_transaction.warning_message.insufficient_funds', children: t('dyn_send_transaction.warning_message.insufficient_funds', {
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
    return (jsxRuntime.jsxs(TransactionConfirmationPageLayout.TransactionConfirmationPageLayout, { onClickBack: onClickBack, onClickClose: onClickClose, copykey: copykey, title: title, appOrigin: appOrigin, appName: appName, appLogoUrl: appLogoUrl, isLoading: isLoading, onClickSend: () => send(), displayPoweredByDynamicFooter: displayPoweredByDynamicFooter, disableSendButton: isTransactionLoading || hasInsufficientFunds, error: errorMessage, alert: alert, children: [jsxRuntime.jsx(TransactionRow.TransactionRow, { copykey: 'dyn_send_transaction.confirmation.data.from', label: t('dyn_send_transaction.confirmation.data.from'), isLoading: isTransactionFromAddressLoading, title: transactionFromAddress, children: shortenWalletAddress.shortenWalletAddress(transactionFromAddress, 4, 4) }), jsxRuntime.jsx(TransactionRow.TransactionRow, { copykey: 'dyn_send_transaction.confirmation.data.to', label: t('dyn_send_transaction.confirmation.data.to'), isLoading: isTransactionToAddressLoading, title: transactionToAddress, children: transactionToAddress &&
                    shortenWalletAddress.shortenWalletAddress(transactionToAddress, 4, 4) }), jsxRuntime.jsx(TransactionRow.TransactionRow, { copykey: 'dyn_send_transaction.confirmation.data.amount', label: t('dyn_send_transaction.confirmation.data.amount'), isLoading: isTransactionValueLoading, isEmpty: !transactionValue, title: transactionValue ? formatBigNumber.formatBigNumber(transactionValue) : undefined, suffix: currencySymbol, icon: chainIcon, dataTestId: 'transaction-amount', children: transactionValue ? formatBigNumber.formatBigNumber(transactionValue, 10) : 0 }), !isGasSponsored && (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(TransactionRow.TransactionRow, { copykey: isGasEstimated
                            ? 'dyn_send_transaction.confirmation.data.gas_estimate'
                            : 'dyn_send_transaction.confirmation.data.gas', label: isGasEstimated
                            ? t('dyn_send_transaction.confirmation.data.gas_estimate')
                            : t('dyn_send_transaction.confirmation.data.gas'), isEmpty: !gasTotalPrice, isLoading: isGasPriceLoading || isGasSponsoredLoading, title: gasTotalPrice ? formatBigNumber.formatBigNumber(gasTotalPrice) : undefined, suffix: gasTotalPrice ? currencySymbol : undefined, icon: gasTotalPrice ? chainIcon : undefined, dataTestId: isGasEstimated
                            ? 'transaction-estimated-gas-fee'
                            : 'transaction-gas-fee', children: gasTotalPrice ? formatBigNumber.formatBigNumber(gasTotalPrice, 10) : '--' }), jsxRuntime.jsx(TransactionRow.TransactionRow, { copykey: 'dyn_send_transaction.confirmation.data.total', label: t('dyn_send_transaction.confirmation.data.total'), isEmpty: !total, title: total ? formatBigNumber.formatBigNumber(total) : undefined, suffix: total ? currencySymbol : undefined, icon: total ? chainIcon : undefined, dataTestId: 'transaction-total', children: total
                            ? formatBigNumber.formatBigNumber(total, 10)
                            : t('dyn_send_transaction.confirmation.not_applied') })] }))] }));
};

exports.TransactionConfirmationView = TransactionConfirmationView;
