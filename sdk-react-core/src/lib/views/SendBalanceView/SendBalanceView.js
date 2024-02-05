import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { parseEther } from 'viem';
import { DynamicError } from '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
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
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../context/ThemeContext/ThemeContext.js';
import { usePromise } from '../../utils/hooks/usePromise/usePromise.js';
import '@dynamic-labs/types';
import 'yup';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../../components/Alert/Alert.js';
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
import { SendBalancePageLayout } from '../../components/SendBalancePageLayout/SendBalancePageLayout.js';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { TransactionStatusLayout } from '../../components/TransactionStatusLayout/TransactionStatusLayout.js';
import { useFetchChain } from '../../widgets/DynamicWidget/hooks/useFetchChain/useFetchChain.js';
import { useFetchCurrency } from '../../widgets/DynamicWidget/hooks/useFetchCurrency/useFetchCurrency.js';
import { TransactionStage } from './components/TransactionStage/TransactionStage.js';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '@dynamic-labs/viem-utils';

const SendBalanceView = ({ initialRecipientAddress = '', initialValue, onClickBack, onClickClose, onError, onSuccess, onDone, displayPoweredByDynamicFooter = false, }) => {
    const [stage, setStage] = useState('form');
    const { primaryWallet, network, walletUiUtils } = useInternalDynamicContext();
    const { t } = useTranslation();
    const [value, setValue] = useState(initialValue !== null && initialValue !== void 0 ? initialValue : null);
    const [recipientAddress, setRecipientAddress] = useState(initialRecipientAddress);
    const transactionRef = useRef(null);
    if (!primaryWallet) {
        throw new DynamicError('Primary wallet is not available, send balance cannot be displayed');
    }
    const walletConnector = primaryWallet.connector;
    const { data: balance } = usePromise(() => walletConnector.getBalance(), {
        deps: [walletConnector],
    });
    const { data: provider } = usePromise(() => primaryWallet.connector.getPublicClient());
    const evmNetworks = (walletConnector && walletConnector.evmNetworks) || [];
    const evmNetwork = evmNetworks.find((evmNetwork) => evmNetwork.chainId === network);
    const networkIcon = evmNetwork && (jsx("img", { src: evmNetwork === null || evmNetwork === void 0 ? void 0 : evmNetwork.iconUrls[0], alt: `${evmNetwork === null || evmNetwork === void 0 ? void 0 : evmNetwork.name} icon` }));
    const networkName = (evmNetwork === null || evmNetwork === void 0 ? void 0 : evmNetwork.vanityName) || (evmNetwork === null || evmNetwork === void 0 ? void 0 : evmNetwork.name);
    const networkCurrencyDecimals = evmNetwork === null || evmNetwork === void 0 ? void 0 : evmNetwork.nativeCurrency.decimals;
    const [chain] = useFetchChain(primaryWallet.connector);
    const chainName = (chain === null || chain === void 0 ? void 0 : chain.name) || primaryWallet.chain;
    const ChainIconComponent = getChainIcon(chainName);
    const chainIcon = (jsx(Icon, { size: 'small', children: (chain === null || chain === void 0 ? void 0 : chain.icon) ? (jsx("img", { src: chain.icon, alt: `${chain.name} icon` })) : (jsx(ChainIconComponent, {})) }));
    const [currencySymbol = ''] = useFetchCurrency(primaryWallet.connector);
    const buildFormStage = () => (jsx(SendBalancePageLayout, { initialValues: {
            amount: value === null ? '' : formatBigNumber(value),
            recipient: recipientAddress,
        }, balance: balance, onClickBack: onClickBack, chain: primaryWallet.chain, networkName: networkName, networkIcon: networkIcon, networkCurrencyDecimals: networkCurrencyDecimals, currencySymbol: currencySymbol, isLoading: false, walletAddress: shortenWalletAddress(primaryWallet.address, 3, 3), walletKey: primaryWallet.connector.key, onClickClose: onClickClose, displayPoweredByDynamicFooter: displayPoweredByDynamicFooter, onSubmit: (data) => {
            setValue(parseEther(data.amount, 'wei'));
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
        return (jsx(TransactionStage, { walletConnector: walletConnector, provider: provider, transaction: transaction, copykey: 'dyn_send_transaction.confirmation.title', title: t('dyn_send_transaction.confirmation.title'), onClickBack: () => setStage('form'), onError: onError, displayPoweredByDynamicFooter: displayPoweredByDynamicFooter, mutation: ({ to, value, gasPrice, nonce }) => __awaiter(void 0, void 0, void 0, function* () {
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
        return (jsx(TransactionStatusLayout, { amount: formatBigNumber(value), destinationAddress: recipientAddress, networkCurrency: currencySymbol, networkName: chainName || '', NetworkIcon: chainIcon, onClickClose: onClickClose, onDone: () => onDone === null || onDone === void 0 ? void 0 : onDone(), displayPoweredByDynamicFooter: displayPoweredByDynamicFooter }));
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

export { SendBalanceView };
