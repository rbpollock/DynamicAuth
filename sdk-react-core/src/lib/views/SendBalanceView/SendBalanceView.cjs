'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var viem = require('viem');
var utils = require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
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
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../context/ThemeContext/ThemeContext.cjs');
var usePromise = require('../../utils/hooks/usePromise/usePromise.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../components/Alert/Alert.cjs');
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
var SendBalancePageLayout = require('../../components/SendBalancePageLayout/SendBalancePageLayout.cjs');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var TransactionStatusLayout = require('../../components/TransactionStatusLayout/TransactionStatusLayout.cjs');
var useFetchChain = require('../../widgets/DynamicWidget/hooks/useFetchChain/useFetchChain.cjs');
var useFetchCurrency = require('../../widgets/DynamicWidget/hooks/useFetchCurrency/useFetchCurrency.cjs');
var TransactionStage = require('./components/TransactionStage/TransactionStage.cjs');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('@dynamic-labs/viem-utils');

const SendBalanceView = ({ initialRecipientAddress = '', initialValue, onClickBack, onClickClose, onError, onSuccess, onDone, displayPoweredByDynamicFooter = false, }) => {
    const [stage, setStage] = React.useState('form');
    const { primaryWallet, network, walletUiUtils } = useInternalDynamicContext.useInternalDynamicContext();
    const { t } = reactI18next.useTranslation();
    const [value, setValue] = React.useState(initialValue !== null && initialValue !== void 0 ? initialValue : null);
    const [recipientAddress, setRecipientAddress] = React.useState(initialRecipientAddress);
    const transactionRef = React.useRef(null);
    if (!primaryWallet) {
        throw new utils.DynamicError('Primary wallet is not available, send balance cannot be displayed');
    }
    const walletConnector = primaryWallet.connector;
    const { data: balance } = usePromise.usePromise(() => walletConnector.getBalance(), {
        deps: [walletConnector],
    });
    const { data: provider } = usePromise.usePromise(() => primaryWallet.connector.getPublicClient());
    const evmNetworks = (walletConnector && walletConnector.evmNetworks) || [];
    const evmNetwork = evmNetworks.find((evmNetwork) => evmNetwork.chainId === network);
    const networkIcon = evmNetwork && (jsxRuntime.jsx("img", { src: evmNetwork === null || evmNetwork === void 0 ? void 0 : evmNetwork.iconUrls[0], alt: `${evmNetwork === null || evmNetwork === void 0 ? void 0 : evmNetwork.name} icon` }));
    const networkName = (evmNetwork === null || evmNetwork === void 0 ? void 0 : evmNetwork.vanityName) || (evmNetwork === null || evmNetwork === void 0 ? void 0 : evmNetwork.name);
    const networkCurrencyDecimals = evmNetwork === null || evmNetwork === void 0 ? void 0 : evmNetwork.nativeCurrency.decimals;
    const [chain] = useFetchChain.useFetchChain(primaryWallet.connector);
    const chainName = (chain === null || chain === void 0 ? void 0 : chain.name) || primaryWallet.chain;
    const ChainIconComponent = getChainIcon.getChainIcon(chainName);
    const chainIcon = (jsxRuntime.jsx(Icon.Icon, { size: 'small', children: (chain === null || chain === void 0 ? void 0 : chain.icon) ? (jsxRuntime.jsx("img", { src: chain.icon, alt: `${chain.name} icon` })) : (jsxRuntime.jsx(ChainIconComponent, {})) }));
    const [currencySymbol = ''] = useFetchCurrency.useFetchCurrency(primaryWallet.connector);
    const buildFormStage = () => (jsxRuntime.jsx(SendBalancePageLayout.SendBalancePageLayout, { initialValues: {
            amount: value === null ? '' : formatBigNumber.formatBigNumber(value),
            recipient: recipientAddress,
        }, balance: balance, onClickBack: onClickBack, chain: primaryWallet.chain, networkName: networkName, networkIcon: networkIcon, networkCurrencyDecimals: networkCurrencyDecimals, currencySymbol: currencySymbol, isLoading: false, walletAddress: shortenWalletAddress.shortenWalletAddress(primaryWallet.address, 3, 3), walletKey: primaryWallet.connector.key, onClickClose: onClickClose, displayPoweredByDynamicFooter: displayPoweredByDynamicFooter, onSubmit: (data) => {
            setValue(viem.parseEther(data.amount, 'wei'));
            setRecipientAddress(data.recipient);
            setStage('confirmation');
        } }));
    const buildTransactionStage = () => {
        if (!provider || value === null) {
            return null;
        }
        const transaction = {
            from: primaryWallet.address,
            to: recipientAddress,
            value,
        };
        return (jsxRuntime.jsx(TransactionStage.TransactionStage, { walletConnector: walletConnector, provider: provider, transaction: transaction, copykey: 'dyn_send_transaction.confirmation.title', title: t('dyn_send_transaction.confirmation.title'), onClickBack: () => setStage('form'), onError: onError, displayPoweredByDynamicFooter: displayPoweredByDynamicFooter, mutation: ({ to, value, gasPrice, nonce }) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
                walletUiUtils.disabledConfirmationOnce();
                const signer = yield walletConnector.getSigner();
                const sentTransaction = yield signer.sendTransaction({
                    account: signer.account || primaryWallet.address,
                    /**
                     * chain is set to null because viem already have the correct chain from the wallet connector
                     * docs: https://viem.sh/docs/actions/wallet/sendTransaction.html#chain-optional
                     */
                    chain: null,
                    gasPrice,
                    nonce,
                    to,
                    value,
                });
                return sentTransaction;
            }), onSuccess: (transaction) => {
                transactionRef.current = transaction;
                setStage('success');
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(transactionRef.current);
            } }));
    };
    const buildSuccessState = () => {
        if (value === null)
            return null;
        return (jsxRuntime.jsx(TransactionStatusLayout.TransactionStatusLayout, { amount: formatBigNumber.formatBigNumber(value), destinationAddress: recipientAddress, networkCurrency: currencySymbol, networkName: chainName || '', NetworkIcon: chainIcon, onClickClose: onClickClose, onDone: () => onDone === null || onDone === void 0 ? void 0 : onDone(), displayPoweredByDynamicFooter: displayPoweredByDynamicFooter }));
    };
    const getCurrentView = () => {
        switch (stage) {
            case 'form':
                return buildFormStage();
            case 'confirmation':
                return buildTransactionStage();
            case 'success':
                return buildSuccessState();
        }
    };
    return getCurrentView();
};

exports.SendBalanceView = SendBalanceView;
