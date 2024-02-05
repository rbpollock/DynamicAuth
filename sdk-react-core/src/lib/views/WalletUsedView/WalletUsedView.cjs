'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var utils = require('@dynamic-labs/utils');
var walletBook = require('@dynamic-labs/wallet-book');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
var ErrorContext = require('../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../context/ViewContext/ViewContext.cjs');
var decodeJwt = require('../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
require('@dynamic-labs/iconic');
var logger = require('../../shared/logger.cjs');
var shortenWalletAddress = require('../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
var createUserProfile = require('../../utils/functions/createUserProfile/createUserProfile.cjs');
require('@dynamic-labs/multi-wallet');
require('@dynamic-labs/sdk-api');
var getVerifyArgs = require('../../utils/functions/getVerifyArgs/getVerifyArgs.cjs');
var index = require('../../utils/functions/storeAuthToken/index.cjs');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
var api = require('../../data/api.cjs');
var getSiweStatement = require('../../utils/functions/getSiweStatement/getSiweStatement.cjs');
var getWalletProvider = require('../../utils/functions/getWalletProvider/getWalletProvider.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var isSameWalletName = require('../../utils/functions/isSameWalletName/isSameWalletName.cjs');
require('../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../components/Typography/Typography.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
var LoadingContext = require('../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../components/Button/Button.cjs');
require('../../components/IconButton/IconButton.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var Checkbox = require('../../components/Checkbox/Checkbox.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const WalletUsedView = () => {
    const [isChecked, setIsChecked] = React.useState(false);
    const [walletAddress, setWalletAddress] = React.useState(undefined);
    const { t } = reactI18next.useTranslation();
    const { setErrorMessage } = ErrorContext.useErrorContext();
    const { loading, setLoading } = LoadingContext.useLoadingContext();
    const { setView, goToInitialView } = ViewContext.useViewContext();
    const { environmentId, displaySiweStatement, authToken, setCallback, setShowAuthFlow, setUser, appName, siweStatement, setPrimaryWalletId, primaryWallet, setMultiWalletWidgetState, connectWallet, selectedWalletConnector: walletConnector, isSingleWalletAccount, consumeNonce, handleLogOut, } = useInternalDynamicContext.useInternalDynamicContext();
    React.useEffect(() => {
        const _fetchPublicAddress = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
            const address = yield (walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.fetchPublicAddress());
            setWalletAddress(address);
        });
        _fetchPublicAddress();
    }, [walletConnector]);
    const _shortenWalletAddress = shortenWalletAddress.shortenWalletAddress(walletAddress);
    const updatePrimaryWalletId = (walletConnector, user) => {
        const newWalletName = walletConnector.name;
        if (user.lastVerifiedCredentialId) {
            if (!primaryWallet) {
                setPrimaryWalletId(user.lastVerifiedCredentialId);
                return;
            }
            const currentPrimaryWalletName = primaryWallet.connector.name;
            if (isSameWalletName.isSameWalletName(newWalletName, currentPrimaryWalletName)) {
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
    const handleWalletTransfer = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
        const siweStatementToUse = getSiweStatement.getSiweStatement({ appName, siweStatement });
        // TODO refactor this block
        try {
            const connectionResult = yield connectWallet(walletConnector);
            if (!(connectionResult === null || connectionResult === void 0 ? void 0 : connectionResult.address)) {
                return;
            }
            const walletProvider = getWalletProvider.getWalletProvider(walletConnector);
            const verifyArgs = yield getVerifyArgs.getVerifyArgs({
                displaySiweStatement,
                environmentId,
                nonce,
                publicWalletAddress: connectionResult.address,
                siweStatement: siweStatementToUse,
                skipEmptyAccountCheck: isChecked,
                walletConnector,
                walletProvider,
            });
            const jwt = yield api.transferWallet(environmentId, verifyArgs, authToken);
            if (!jwt)
                throw new utils.DynamicError('Invalid JWT!');
            const decodedJwt = decodeJwt.decodeJwt(jwt);
            if (!decodedJwt)
                throw new utils.DynamicError('Invalid token!');
            const userProfile = createUserProfile.createUserProfile(decodedJwt);
            updatePrimaryWalletId(walletConnector, userProfile);
            index.storeAuthToken(jwt);
            setUser(userProfile);
            setCallback('linkSuccess', {
                walletId: decodedJwt.lastVerifiedCredentialId,
            });
        }
        catch (error) {
            logger.logger.error(error);
        }
        finally {
            setLoading(false);
            setShowAuthFlow(false);
            setMultiWalletWidgetState('idle');
        }
    });
    return (jsxRuntime.jsxs("div", { className: 'wallet-used-view__container', children: [jsxRuntime.jsx("div", { className: 'wallet-used-view__icon', children: jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.key, width: 64, height: 64 }) }), jsxRuntime.jsx(Typography.Typography, { className: 'wallet-used-view__shorten-wallet-address', variant: 'body_normal', weight: 'medium', color: 'primary', children: _shortenWalletAddress }), jsxRuntime.jsx(Typography.Typography, { className: 'wallet-used-view__copy', variant: 'body_normal', color: 'secondary', weight: 'regular', copykey: 'dyn_wallet_link.existent_account.warning', children: t('dyn_wallet_link.existent_account.warning') }), isSingleWalletAccount && (jsxRuntime.jsxs("label", { htmlFor: 'skipEmptyAccountCheck', className: 'wallet-used-view__checkbox-label', children: [jsxRuntime.jsx(Checkbox.Checkbox, { id: 'skipEmptyAccountCheck', className: 'wallet-used-view__checkbox-container', defaultChecked: isChecked, onChange: () => setIsChecked(!isChecked), ariaLabel: 'skip empty account check' }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'secondary', copykey: 'dyn_wallet_link.existent_account.acceptance', children: t('dyn_wallet_link.existent_account.acceptance') })] })), jsxRuntime.jsx(Button.Button, { buttonClassName: 'wallet-used-view__accept-button', buttonVariant: 'primary', expanded: true, buttonPadding: 'large', onClick: () => handleWalletTransfer(), disabled: (!isChecked && isSingleWalletAccount) || loading, dataTestId: 'wallet-used-view-transfer-wallet', copykey: 'dyn_wallet_link.confirm_button', children: t('dyn_wallet_link.confirm_button') }), jsxRuntime.jsx(Button.Button, { dataTestId: 'wallet-used-view-log-out', buttonPadding: 'small', buttonClassName: 'wallet-used-view__logout', onClick: handleLogOut, copykey: 'dyn_wallet_link.log_out_button', children: t('dyn_wallet_link.log_out_button') })] }));
};

exports.WalletUsedView = WalletUsedView;
