'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var utils = require('@dynamic-labs/utils');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var UserWalletsContext = require('../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getWalletIdentifier = require('../../functions/getWalletIdentifier/getWalletIdentifier.cjs');
var isSameWalletName = require('../../functions/isSameWalletName/isSameWalletName.cjs');
var useWalletsConnectionState = require('../useWalletsConnectionState/useWalletsConnectionState.cjs');
var reconnectSocialWallet = require('./reconnectSocialWallet.cjs');
var createLinkedWalletsFromWalletOptions = require('./utils/createLinkedWalletsFromWalletOptions/createLinkedWalletsFromWalletOptions.cjs');
var updateUserWalletsFromLinkedWallets = require('./utils/updateUserWalletsFromLinkedWallets/updateUserWalletsFromLinkedWallets.cjs');

const useWalletConnectors = ({ authMode, authToken, connectedWallets, walletConnectorOptions, multiWalletWidgetState, setDesktopUri, setMultiWalletWidgetState, setQrcodeUri, primaryWalletId, setPrimaryWalletId, user, onboardingOnlyJwt, canHaveMultipleWalletsConnected, }) => {
    const [showQrcodeModal, setShowQrcodeModal] = React.useState(false);
    const linkedWallets = React.useMemo(() => {
        if (!authToken) {
            return [];
        }
        return createLinkedWalletsFromWalletOptions.createLinkedWalletsFromWalletOptions({
            authToken,
            primaryWalletId,
            walletConnectorOptions,
        });
    }, [authToken, primaryWalletId, walletConnectorOptions]);
    const walletsBasedOnAuthMode = React.useMemo(() => {
        // Before signing the first message we are using connected wallets list
        // This is because we want the first connected wallet to have events applied by useWalletEventListeners
        // In connect-and-sign mode, events are only applied after the message is signed.
        // This change ensures that events will be applied even before the signature.
        // After signing the message user could be undefined in scenarios like OTP
        if (authMode === 'connect-and-sign' && (user || onboardingOnlyJwt)) {
            return linkedWallets;
        }
        /**
         * This is to handle users in connect-only who are signing in with social/email
         * with an embedded wallet
         */
        if (authMode === 'connect-only' &&
            linkedWallets.find((wallet) => walletConnectorCore.isEmbeddedConnector(wallet.connector))) {
            return linkedWallets;
        }
        return connectedWallets;
    }, [authMode, connectedWallets, linkedWallets, user, onboardingOnlyJwt]);
    /**
     * This useEffect is temporary.
     * While the wallet connectors don't use the event emitter, we need to manually
     * initialize the bridge between the old event listeners and the new event emitter.
     * When the wallet connectors are migrated to the new event emitter, there will be no
     * need to initialize or teardown event listeners, then we can remove this useEffect.
     */
    React.useEffect(() => walletsBasedOnAuthMode.forEach((wallet) => {
        wallet.connector.initEventListener();
    }), [walletsBasedOnAuthMode]);
    const { connectedWalletsMap, didConnectedStateLoad } = useWalletsConnectionState.useWalletsConnectionState(walletsBasedOnAuthMode);
    const wallets = React.useMemo(() => walletsBasedOnAuthMode.map((wallet) => (Object.assign(Object.assign({}, wallet), { connected: Boolean(connectedWalletsMap[getWalletIdentifier.getWalletIdentifier(wallet)]) }))), [connectedWalletsMap, walletsBasedOnAuthMode]);
    const { setUserWallets } = UserWalletsContext.useInternalUserWallets();
    // Keep userWallets in sync whenever linkedWallets changes
    React.useEffect(() => {
        if (!didConnectedStateLoad.current)
            return;
        setUserWallets((userWallets) => updateUserWalletsFromLinkedWallets.updateUserWalletsFromLinkedWallets(userWallets, wallets));
    }, [didConnectedStateLoad, setUserWallets, wallets]);
    const primaryWallet = React.useMemo(() => { var _a; return (_a = wallets.find((wallet) => wallet.id === primaryWalletId)) !== null && _a !== void 0 ? _a : null; }, [primaryWalletId, wallets]);
    const secondaryWallets = React.useMemo(() => canHaveMultipleWalletsConnected
        ? wallets.filter((wallet) => wallet.id !== primaryWalletId)
        : [], [primaryWalletId, wallets, canHaveMultipleWalletsConnected]);
    const getSelectedWallet = React.useCallback((walletId) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const newWallet = wallets.find(({ id }) => id === walletId);
        if (!newWallet) {
            throw new utils.DynamicError(`Wallet with id: ${walletId} not found`);
        }
        const connectedAccounts = yield newWallet.connector.getConnectedAccounts();
        return { connectedAccounts, newWallet };
    }), [wallets]);
    const checkIfAccountChangeIsRequired = React.useCallback((primaryWallet, newPrimaryWallet, connectedAccounts) => {
        /**
         * we need to check multiWalletWidgetState here because `setPrimaryWallet` currently gets
         * called twice: once when the user clicks "make active" and once when the user performs
         * the expected account switch in their wallet. this will change once this PR
         * (https://github.com/dynamic-labs/DynamicAuth/pull/550) is merged, since setting the
         * primary wallet will be simpler, so we won't need to call `setPrimaryWallet` twice.
         */
        if (!primaryWallet || multiWalletWidgetState !== 'idle')
            return;
        const accountIsNotConnectedInSecondaryWallet = connectedAccounts &&
            !connectedAccounts.find((connectedAccount) => connectedAccount.toLowerCase() ===
                newPrimaryWallet.address.toLowerCase());
        return (isSameWalletName.isSameWalletName(newPrimaryWallet.connector.name, primaryWallet.connector.name) || accountIsNotConnectedInSecondaryWallet);
    }, [multiWalletWidgetState]);
    const checkIfShowQrCodeModal = React.useCallback((wallet) => !wallet.connector.isInstalledOnBrowser() &&
        !wallet.connector.canConnectViaCustodialService, []);
    const setPrimaryWallet = React.useCallback((walletId) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const { newWallet: newPrimaryWallet, connectedAccounts } = yield getSelectedWallet(walletId);
        if (!primaryWalletId) {
            yield newPrimaryWallet.connector.connect();
            setPrimaryWalletId(walletId);
            return;
        }
        if (primaryWalletId === walletId)
            return;
        if (checkIfAccountChangeIsRequired(primaryWallet, newPrimaryWallet)) {
            yield newPrimaryWallet.connector.connect();
            setPrimaryWalletId(walletId);
            return;
        }
        if (!connectedAccounts.length) {
            setMultiWalletWidgetState('awaiting_connection');
            setShowQrcodeModal(checkIfShowQrCodeModal(newPrimaryWallet));
        }
        if (walletConnectorCore.isEmailWalletConnector(newPrimaryWallet.connector)) {
            const emailConnector = newPrimaryWallet.connector;
            const email = localStorage.getItem('magic-link-email');
            if (email) {
                emailConnector.setEmail(email);
            }
        }
        if (walletConnectorCore.isSocialWalletConnector(newPrimaryWallet.connector) &&
            !newPrimaryWallet.connected) {
            reconnectSocialWallet.reconnectSocialWallet(authToken, newPrimaryWallet);
            return;
        }
        /* istanbul ignore next */
        const publicAddress = yield newPrimaryWallet.connector.fetchPublicAddress({
            onDesktopUri: (uri) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
                setDesktopUri(uri);
            }),
            onDisplayUri: (uri) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
                setQrcodeUri(uri);
            }),
        });
        /**
         * need to check for connected account again for wallets that disconnect on refresh
         *  and only reconnect upon fetching public address above
         */
        const updatedConnectedAccounts = yield newPrimaryWallet.connector.getConnectedAccounts();
        if (checkIfAccountChangeIsRequired(primaryWallet, newPrimaryWallet, updatedConnectedAccounts) &&
            !walletConnectorCore.isEmailWalletConnector(newPrimaryWallet.connector)) {
            setMultiWalletWidgetState('awaiting_account_switch', 'switching_primary');
            return;
        }
        if (publicAddress) {
            setPrimaryWalletId(walletId);
            setMultiWalletWidgetState('idle');
        }
        else {
            logger.logger.error('Failed to connect to wallet');
        }
    }), [
        authToken,
        checkIfAccountChangeIsRequired,
        checkIfShowQrCodeModal,
        primaryWallet,
        getSelectedWallet,
        primaryWalletId,
        setDesktopUri,
        setMultiWalletWidgetState,
        setPrimaryWalletId,
        setQrcodeUri,
    ]);
    return {
        didConnectedStateLoad: didConnectedStateLoad.current,
        primaryWallet,
        secondaryWallets,
        setPrimaryWallet,
        setShowQrcodeModal,
        showQrcodeModal,
        wallets,
    };
};

exports.useWalletConnectors = useWalletConnectors;
