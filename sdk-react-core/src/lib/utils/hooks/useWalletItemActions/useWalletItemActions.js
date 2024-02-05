import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { isMobile } from '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { useErrorContext } from '../../../context/ErrorContext/ErrorContext.js';
import { useMockContext } from '../../../context/MockContext/MockContext.js';
import { useViewContext } from '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import 'react';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { requiresTwoStepAuthentication } from '../../functions/requiresTwoStepAuthentication/requiresTwoStepAuthentication.js';
import { isSelectedWalletAlreadyConnected } from '../../functions/isSelectedWalletAlreadyConnected/isSelectedWalletAlreadyConnected.js';
import { useConnectAndSign } from '../authenticationHooks/useConnectAndSign/useConnectAndSign.js';
import '../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../config/ApiEndpoint.js';
import '../../../context/CaptchaContext/CaptchaContext.js';
import { useConnectAndSignSplitSteps } from '../authenticationHooks/useConnectAndSignSplitSteps/useConnectAndSignSplitSteps.js';
import '../../../context/EmailVerificationContext/EmailVerificationContext.js';

const useWalletItemActions = () => {
    const { setMultiWalletWidgetState, setShowAuthFlow, setSelectedWalletConnectorKey, walletConnectorOptions, setQrcodeUri, setDesktopUri, user, linkedWallets, setLegacyIsVerifying, } = useInternalDynamicContext();
    const { mockedSDK } = useMockContext();
    const { setError } = useErrorContext();
    const { setView } = useViewContext();
    const { onlyConnectUser } = useConnectAndSignSplitSteps();
    const connectAndSignWallet = useConnectAndSign();
    const handleCustodialWalletClick = (walletConnector) => __awaiter(void 0, void 0, void 0, function* () {
        const twoStepAuthentication = requiresTwoStepAuthentication(walletConnector);
        if (twoStepAuthentication) {
            setSelectedWalletConnectorKey(walletConnector.key);
            yield onlyConnectUser({
                walletConnector,
            });
        }
        else {
            setSelectedWalletConnectorKey(walletConnector.key);
            setMultiWalletWidgetState('awaiting_signature', undefined, 'linking_new_wallet');
        }
        setView('pending-signature');
    });
    const handleMobileWalletClick = (walletConnector) => __awaiter(void 0, void 0, void 0, function* () {
        setSelectedWalletConnectorKey(walletConnector.key);
        onlyConnectUser({ walletConnector });
    });
    const handleInstalledExtensionClick = (walletConnector) => __awaiter(void 0, void 0, void 0, function* () {
        setSelectedWalletConnectorKey(walletConnector.key);
        setMultiWalletWidgetState('awaiting_signature', undefined, 'linking_new_wallet');
    });
    const handleUninstalledClick = (walletConnector) => __awaiter(void 0, void 0, void 0, function* () {
        setSelectedWalletConnectorKey(walletConnector.key);
        if (!walletConnector.canConnectViaQrCode) {
            setView('no-qr-not-installed');
        }
        else {
            connectAndSignWallet({
                fetchPublicAddressOpts: {
                    onDesktopUri: (uri) => __awaiter(void 0, void 0, void 0, function* () {
                        setDesktopUri(uri);
                    }),
                    onDisplayUri: (uri) => __awaiter(void 0, void 0, void 0, function* () {
                        setQrcodeUri(uri);
                    }),
                },
                walletConnector,
            });
            setView('qr-code');
        }
        setError(undefined);
    });
    const handleAlreadyConnectedWallet = (walletConnector) => __awaiter(void 0, void 0, void 0, function* () {
        const connectedAccounts = yield walletConnector.getConnectedAccounts();
        const activeAccountAlreadyLinked = linkedWallets.find((wallet) => { var _a; return wallet.address.toLowerCase() === ((_a = connectedAccounts[0]) === null || _a === void 0 ? void 0 : _a.toLowerCase()); });
        if (activeAccountAlreadyLinked) {
            setMultiWalletWidgetState('awaiting_account_switch', 'linking_new_wallet');
        }
        else {
            setMultiWalletWidgetState('awaiting_signature', undefined, 'linking_new_wallet');
        }
        setShowAuthFlow(false);
        setSelectedWalletConnectorKey(walletConnector.key);
    });
    const openWallet = (walletKey, handlers) => {
        var _a;
        const { openMobileWallet = handleMobileWalletClick, openCustodialWallet = handleCustodialWalletClick, openExtensionWallet = handleInstalledExtensionClick, } = handlers || {};
        const walletConnector = (_a = walletConnectorOptions.find((wallet) => wallet.key === walletKey)) === null || _a === void 0 ? void 0 : _a.walletConnector;
        if (!walletConnector)
            return;
        if (isMobile()) {
            openMobileWallet(walletConnector);
        }
        else if (walletConnector.canConnectViaCustodialService) {
            openCustodialWallet(walletConnector);
        }
        else if (walletConnector.isInstalledOnBrowser()) {
            openExtensionWallet(walletConnector);
        }
    };
    const handleWalletItemClick = (wallet) => __awaiter(void 0, void 0, void 0, function* () {
        const { walletConnector, isInstalledOnBrowser } = wallet;
        if (mockedSDK)
            return;
        if (walletConnector.connectedChain === 'FLOW') {
            yield walletConnector.endSession();
        }
        setLegacyIsVerifying(false);
        if (isSelectedWalletAlreadyConnected(linkedWallets, walletConnector, user) &&
            walletConnector.connectedChain !== 'FLOW') {
            // wallet is already connected
            handleAlreadyConnectedWallet(walletConnector);
        }
        else if (walletConnector.canConnectViaCustodialService) {
            // providers like blocto and dapper
            handleCustodialWalletClick(walletConnector);
        }
        else if (isMobile()) {
            // mobile wallets
            if (walletConnector.name === 'WalletConnect') {
                setView('wallet-connect-mobile-wallets-list');
            }
            else {
                handleMobileWalletClick(walletConnector);
            }
        }
        else if (isInstalledOnBrowser) {
            // browser extensions or injected wallets
            handleInstalledExtensionClick(walletConnector);
        }
        else {
            // wallet requiring a qr code (wallet connect/coinbase wallet)
            handleUninstalledClick(walletConnector);
        }
    });
    return {
        handleAlreadyConnectedWallet,
        handleCustodialWalletClick,
        handleInstalledExtensionClick,
        handleMobileWalletClick,
        handleUninstalledClick,
        handleWalletItemClick,
        openWallet,
    };
};

export { useWalletItemActions };
