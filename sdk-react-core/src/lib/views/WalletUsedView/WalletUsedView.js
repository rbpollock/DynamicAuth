import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicError } from '@dynamic-labs/utils';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import { useErrorContext } from '../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../context/ViewContext/ViewContext.js';
import { decodeJwt } from '../../shared/utils/functions/decodeJwt/decodeJwt.js';
import '@dynamic-labs/iconic';
import { logger } from '../../shared/logger.js';
import { shortenWalletAddress } from '../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import { createUserProfile } from '../../utils/functions/createUserProfile/createUserProfile.js';
import '@dynamic-labs/multi-wallet';
import '@dynamic-labs/sdk-api';
import { getVerifyArgs } from '../../utils/functions/getVerifyArgs/getVerifyArgs.js';
import { storeAuthToken } from '../../utils/functions/storeAuthToken/index.js';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import { transferWallet } from '../../data/api.js';
import { getSiweStatement } from '../../utils/functions/getSiweStatement/getSiweStatement.js';
import { getWalletProvider } from '../../utils/functions/getWalletProvider/getWalletProvider.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { isSameWalletName } from '../../utils/functions/isSameWalletName/isSameWalletName.js';
import '../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../components/Typography/Typography.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import { useLoadingContext } from '../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { Button } from '../../components/Button/Button.js';
import '../../components/IconButton/IconButton.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { Checkbox } from '../../components/Checkbox/Checkbox.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const WalletUsedView = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [walletAddress, setWalletAddress] = useState(undefined);
    const { t } = useTranslation();
    const { setErrorMessage } = useErrorContext();
    const { loading, setLoading } = useLoadingContext();
    const { setView, goToInitialView } = useViewContext();
    const { environmentId, displaySiweStatement, authToken, setCallback, setShowAuthFlow, setUser, appName, siweStatement, setPrimaryWalletId, primaryWallet, setMultiWalletWidgetState, connectWallet, selectedWalletConnector: walletConnector, isSingleWalletAccount, consumeNonce, handleLogOut, } = useInternalDynamicContext();
    useEffect(() => {
        const _fetchPublicAddress = () => __awaiter(void 0, void 0, void 0, function* () {
            const address = yield (walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.fetchPublicAddress());
            setWalletAddress(address);
        });
        _fetchPublicAddress();
    }, [walletConnector]);
    const _shortenWalletAddress = shortenWalletAddress(walletAddress);
    const updatePrimaryWalletId = (walletConnector, user) => {
        const newWalletName = walletConnector.name;
        if (user.lastVerifiedCredentialId) {
            if (!primaryWallet) {
                setPrimaryWalletId(user.lastVerifiedCredentialId);
                return;
            }
            const currentPrimaryWalletName = primaryWallet.connector.name;
            if (isSameWalletName(newWalletName, currentPrimaryWalletName)) {
                setPrimaryWalletId(user.lastVerifiedCredentialId);
            }
            // if both wallets are flow wallets, set the last verified wallet as primary
            // this is a limitation of flow as all wallets use the same flow connector
            if (primaryWallet.connector.connectedChain === 'FLOW' &&
                walletConnector.connectedChain === 'FLOW') {
                setPrimaryWalletId(user.lastVerifiedCredentialId);
            }
        }
    };
    const handleWalletTransfer = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!walletConnector || !authToken)
            return;
        const nonce = consumeNonce();
        if (!nonce) {
            goToInitialView();
            setErrorMessage('missing-nonce');
            return;
        }
        setMultiWalletWidgetState('awaiting_signature', undefined, 'transferring_wallet');
        setLoading(true);
        setView('wallet-sign');
        const siweStatementToUse = getSiweStatement({ appName, siweStatement });
        // TODO refactor this block
        try {
            const connectionResult = yield connectWallet(walletConnector);
            if (!(connectionResult === null || connectionResult === void 0 ? void 0 : connectionResult.address)) {
                return;
            }
            const walletProvider = getWalletProvider(walletConnector);
            const verifyArgs = yield getVerifyArgs({
                displaySiweStatement,
                environmentId,
                nonce,
                publicWalletAddress: connectionResult.address,
                siweStatement: siweStatementToUse,
                skipEmptyAccountCheck: isChecked,
                walletConnector,
                walletProvider,
            });
            const jwt = yield transferWallet(environmentId, verifyArgs, authToken);
            if (!jwt)
                throw new DynamicError('Invalid JWT!');
            const decodedJwt = decodeJwt(jwt);
            if (!decodedJwt)
                throw new DynamicError('Invalid token!');
            const userProfile = createUserProfile(decodedJwt);
            updatePrimaryWalletId(walletConnector, userProfile);
            storeAuthToken(jwt);
            setUser(userProfile);
            setCallback('linkSuccess', {
                walletId: decodedJwt.lastVerifiedCredentialId,
            });
        }
        catch (error) {
            logger.error(error);
        }
        finally {
            setLoading(false);
            setShowAuthFlow(false);
            setMultiWalletWidgetState('idle');
        }
    });
    return (jsxs("div", { className: 'wallet-used-view__container', children: [jsx("div", { className: 'wallet-used-view__icon', children: jsx(WalletIcon, { walletKey: walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.key, width: 64, height: 64 }) }), jsx(Typography, { className: 'wallet-used-view__shorten-wallet-address', variant: 'body_normal', weight: 'medium', color: 'primary', children: _shortenWalletAddress }), jsx(Typography, { className: 'wallet-used-view__copy', variant: 'body_normal', color: 'secondary', weight: 'regular', copykey: 'dyn_wallet_link.existent_account.warning', children: t('dyn_wallet_link.existent_account.warning') }), isSingleWalletAccount && (jsxs("label", { htmlFor: 'skipEmptyAccountCheck', className: 'wallet-used-view__checkbox-label', children: [jsx(Checkbox, { id: 'skipEmptyAccountCheck', className: 'wallet-used-view__checkbox-container', defaultChecked: isChecked, onChange: () => setIsChecked(!isChecked), ariaLabel: 'skip empty account check' }), jsx(Typography, { variant: 'body_small', color: 'secondary', copykey: 'dyn_wallet_link.existent_account.acceptance', children: t('dyn_wallet_link.existent_account.acceptance') })] })), jsx(Button, { buttonClassName: 'wallet-used-view__accept-button', buttonVariant: 'primary', expanded: true, buttonPadding: 'large', onClick: () => handleWalletTransfer(), disabled: (!isChecked && isSingleWalletAccount) || loading, dataTestId: 'wallet-used-view-transfer-wallet', copykey: 'dyn_wallet_link.confirm_button', children: t('dyn_wallet_link.confirm_button') }), jsx(Button, { dataTestId: 'wallet-used-view-log-out', buttonPadding: 'small', buttonClassName: 'wallet-used-view__logout', onClick: handleLogOut, copykey: 'dyn_wallet_link.log_out_button', children: t('dyn_wallet_link.log_out_button') })] }));
};

export { WalletUsedView };
