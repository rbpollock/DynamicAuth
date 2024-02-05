'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var utils = require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
var ErrorContext = require('../../../context/ErrorContext/ErrorContext.cjs');
var MockContext = require('../../../context/MockContext/MockContext.cjs');
var ViewContext = require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('react');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var requiresTwoStepAuthentication = require('../../functions/requiresTwoStepAuthentication/requiresTwoStepAuthentication.cjs');
var isSelectedWalletAlreadyConnected = require('../../functions/isSelectedWalletAlreadyConnected/isSelectedWalletAlreadyConnected.cjs');
var useConnectAndSign = require('../authenticationHooks/useConnectAndSign/useConnectAndSign.cjs');
require('../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../config/ApiEndpoint.cjs');
require('../../../context/CaptchaContext/CaptchaContext.cjs');
var useConnectAndSignSplitSteps = require('../authenticationHooks/useConnectAndSignSplitSteps/useConnectAndSignSplitSteps.cjs');
require('../../../context/EmailVerificationContext/EmailVerificationContext.cjs');

const useWalletItemActions = () => {
    const { setMultiWalletWidgetState, setShowAuthFlow, setSelectedWalletConnectorKey, walletConnectorOptions, setQrcodeUri, setDesktopUri, user, linkedWallets, setLegacyIsVerifying, } = useInternalDynamicContext.useInternalDynamicContext();
    const { mockedSDK } = MockContext.useMockContext();
    const { setError } = ErrorContext.useErrorContext();
    const { setView } = ViewContext.useViewContext();
    const { onlyConnectUser } = useConnectAndSignSplitSteps.useConnectAndSignSplitSteps();
    const connectAndSignWallet = useConnectAndSign.useConnectAndSign();
    const handleCustodialWalletClick = (walletConnector) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const twoStepAuthentication = requiresTwoStepAuthentication.requiresTwoStepAuthentication(walletConnector);
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
    const handleMobileWalletClick = (walletConnector) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        setSelectedWalletConnectorKey(walletConnector.key);
        onlyConnectUser({ walletConnector });
    });
    const handleInstalledExtensionClick = (walletConnector) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        setSelectedWalletConnectorKey(walletConnector.key);
        setMultiWalletWidgetState('awaiting_signature', undefined, 'linking_new_wallet');
    });
    const handleUninstalledClick = (walletConnector) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        setSelectedWalletConnectorKey(walletConnector.key);
        if (!walletConnector.canConnectViaQrCode) {
            setView('no-qr-not-installed');
        }
        else {
            connectAndSignWallet({
                fetchPublicAddressOpts: {
                    onDesktopUri: (uri) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
                        setDesktopUri(uri);
                    }),
                    onDisplayUri: (uri) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
                        setQrcodeUri(uri);
                    }),
                },
                walletConnector,
            });
            setView('qr-code');
        }
        setError(undefined);
    });
    const handleAlreadyConnectedWallet = (walletConnector) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
        if (utils.isMobile()) {
            openMobileWallet(walletConnector);
        }
        else if (walletConnector.canConnectViaCustodialService) {
            openCustodialWallet(walletConnector);
        }
        else if (walletConnector.isInstalledOnBrowser()) {
            openExtensionWallet(walletConnector);
        }
    };
    const handleWalletItemClick = (wallet) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const { walletConnector, isInstalledOnBrowser } = wallet;
        if (mockedSDK)
            return;
        if (walletConnector.connectedChain === 'FLOW') {
            yield walletConnector.endSession();
        }
        setLegacyIsVerifying(false);
        if (isSelectedWalletAlreadyConnected.isSelectedWalletAlreadyConnected(linkedWallets, walletConnector, user) &&
            walletConnector.connectedChain !== 'FLOW') {
            // wallet is already connected
            handleAlreadyConnectedWallet(walletConnector);
        }
        else if (walletConnector.canConnectViaCustodialService) {
            // providers like blocto and dapper
            handleCustodialWalletClick(walletConnector);
        }
        else if (utils.isMobile()) {
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

exports.useWalletItemActions = useWalletItemActions;
