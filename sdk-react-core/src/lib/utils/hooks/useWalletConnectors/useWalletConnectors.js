import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { DynamicError } from '@dynamic-labs/utils';
import { isEmbeddedConnector, isEmailWalletConnector, isSocialWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { useInternalUserWallets } from '../../../context/UserWalletsContext/UserWalletsContext.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getWalletIdentifier } from '../../functions/getWalletIdentifier/getWalletIdentifier.js';
import { isSameWalletName } from '../../functions/isSameWalletName/isSameWalletName.js';
import { useWalletsConnectionState } from '../useWalletsConnectionState/useWalletsConnectionState.js';
import { reconnectSocialWallet } from './reconnectSocialWallet.js';
import { createLinkedWalletsFromWalletOptions } from './utils/createLinkedWalletsFromWalletOptions/createLinkedWalletsFromWalletOptions.js';
import { updateUserWalletsFromLinkedWallets } from './utils/updateUserWalletsFromLinkedWallets/updateUserWalletsFromLinkedWallets.js';

const useWalletConnectors = ({ authMode, authToken, connectedWallets, walletConnectorOptions, multiWalletWidgetState, setDesktopUri, setMultiWalletWidgetState, setQrcodeUri, primaryWalletId, setPrimaryWalletId, user, onboardingOnlyJwt, canHaveMultipleWalletsConnected, }) => {
    const [showQrcodeModal, setShowQrcodeModal] = useState(false);
    const linkedWallets = useMemo(() => {
        if (!authToken) {
            return [];
        }
        return createLinkedWalletsFromWalletOptions({
            authToken,
            primaryWalletId,
            walletConnectorOptions,
        });
    }, [authToken, primaryWalletId, walletConnectorOptions]);
    const walletsBasedOnAuthMode = useMemo(() => {
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
            linkedWallets.find((wallet) => isEmbeddedConnector(wallet.connector))) {
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
    useEffect(() => walletsBasedOnAuthMode.forEach((wallet) => {
        wallet.connector.initEventListener();
    }), [walletsBasedOnAuthMode]);
    const { connectedWalletsMap, didConnectedStateLoad } = useWalletsConnectionState(walletsBasedOnAuthMode);
    const wallets = useMemo(() => walletsBasedOnAuthMode.map((wallet) => (Object.assign(Object.assign({}, wallet), { connected: Boolean(connectedWalletsMap[getWalletIdentifier(wallet)]) }))), [connectedWalletsMap, walletsBasedOnAuthMode]);
    const { setUserWallets } = useInternalUserWallets();
    // Keep userWallets in sync whenever linkedWallets changes
    useEffect(() => {
        if (!didConnectedStateLoad.current)
            return;
        setUserWallets((userWallets) => updateUserWalletsFromLinkedWallets(userWallets, wallets));
    }, [didConnectedStateLoad, setUserWallets, wallets]);
    const primaryWallet = useMemo(() => { var _a; return (_a = wallets.find((wallet) => wallet.id === primaryWalletId)) !== null && _a !== void 0 ? _a : null; }, [primaryWalletId, wallets]);
    const secondaryWallets = useMemo(() => canHaveMultipleWalletsConnected
        ? wallets.filter((wallet) => wallet.id !== primaryWalletId)
        : [], [primaryWalletId, wallets, canHaveMultipleWalletsConnected]);
    const getSelectedWallet = useCallback((walletId) => __awaiter(void 0, void 0, void 0, function* () {
        const newWallet = wallets.find(({ id }) => id === walletId);
        if (!newWallet) {
            throw new DynamicError(`Wallet with id: ${walletId} not found`);
        }
        const connectedAccounts = yield newWallet.connector.getConnectedAccounts();
        return { connectedAccounts, newWallet };
    }), [wallets]);
    const checkIfAccountChangeIsRequired = useCallback((primaryWallet, newPrimaryWallet, connectedAccounts) => {
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
        return (isSameWalletName(newPrimaryWallet.connector.name, primaryWallet.connector.name) || accountIsNotConnectedInSecondaryWallet);
    }, [multiWalletWidgetState]);
    const checkIfShowQrCodeModal = useCallback((wallet) => !wallet.connector.isInstalledOnBrowser() &&
        !wallet.connector.canConnectViaCustodialService, []);
    const setPrimaryWallet = useCallback((walletId) => __awaiter(void 0, void 0, void 0, function* () {
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
        if (isEmailWalletConnector(newPrimaryWallet.connector)) {
            const emailConnector = newPrimaryWallet.connector;
            const email = localStorage.getItem('magic-link-email');
            if (email) {
                emailConnector.setEmail(email);
            }
        }
        if (isSocialWalletConnector(newPrimaryWallet.connector) &&
            !newPrimaryWallet.connected) {
            reconnectSocialWallet(authToken, newPrimaryWallet);
            return;
        }
        /* istanbul ignore next */
        const publicAddress = yield newPrimaryWallet.connector.fetchPublicAddress({
            onDesktopUri: (uri) => __awaiter(void 0, void 0, void 0, function* () {
                setDesktopUri(uri);
            }),
            onDisplayUri: (uri) => __awaiter(void 0, void 0, void 0, function* () {
                setQrcodeUri(uri);
            }),
        });
        /**
         * need to check for connected account again for wallets that disconnect on refresh
         *  and only reconnect upon fetching public address above
         */
        const updatedConnectedAccounts = yield newPrimaryWallet.connector.getConnectedAccounts();
        if (checkIfAccountChangeIsRequired(primaryWallet, newPrimaryWallet, updatedConnectedAccounts) &&
            !isEmailWalletConnector(newPrimaryWallet.connector)) {
            setMultiWalletWidgetState('awaiting_account_switch', 'switching_primary');
            return;
        }
        if (publicAddress) {
            setPrimaryWalletId(walletId);
            setMultiWalletWidgetState('idle');
        }
        else {
            logger.error('Failed to connect to wallet');
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

export { useWalletConnectors };
