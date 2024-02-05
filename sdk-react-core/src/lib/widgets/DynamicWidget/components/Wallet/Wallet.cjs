'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/iconic');
require('../../../../context/ViewContext/ViewContext.cjs');
require('react');
var copy = require('../../../../shared/assets/copy.cjs');
var key = require('../../../../shared/assets/key.cjs');
var switchHorizontal = require('../../../../shared/assets/switch-horizontal.cjs');
var unlink = require('../../../../shared/assets/unlink.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
var shortenWalletAddress = require('../../../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../../../context/MockContext/MockContext.cjs');
require('../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
var AuthProviderIcon = require('../../../../components/AuthProviderIcon/AuthProviderIcon.cjs');
var helpers = require('../../helpers/helpers.cjs');
require('../../context/DynamicWidgetContext.cjs');
var DotsMenu = require('../DotsMenu/DotsMenu.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const Wallet = ({ wallet, ens }) => {
    var _a;
    const { id: walletId, connector, address } = wallet;
    const { setPrimaryWallet, setSelectedWalletConnectorKey, setShowWidgetStatePopup, setSelectedWalletWithAction, authToken, primaryWallet, user, projectSettings, authMode, } = useInternalDynamicContext.useInternalDynamicContext();
    const email = (_a = user === null || user === void 0 ? void 0 : user.verifiedCredentials.find((verifiedCredential) => verifiedCredential.format === 'email')) === null || _a === void 0 ? void 0 : _a.email;
    const iconSize = 20;
    const options = [
        {
            Icon: jsxRuntime.jsx(switchHorizontal.ReactComponent, {}),
            callback: () => onSelectWalletClick(),
            text: 'Select wallet',
        },
    ];
    if (ens === null || ens === void 0 ? void 0 : ens.name) {
        options.push({
            Icon: jsxRuntime.jsx(copy.ReactComponent, {}),
            callback: () => helpers.copyToClipboard(ens.name),
            text: 'Copy ENS',
        });
    }
    options.push({
        Icon: jsxRuntime.jsx(copy.ReactComponent, {}),
        callback: () => helpers.copyToClipboard(address || ''),
        text: 'Copy address',
    });
    if (!walletConnectorCore.isEmbeddedConnector(connector) &&
        !(projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk.multiWalletUnlinkDisabled)) {
        options.push({
            Icon: jsxRuntime.jsx(unlink.ReactComponent, {}),
            callback: () => setSelectedWalletWithAction({ action: 'unlink', wallet }),
            text: `${authMode === 'connect-only' ? 'Disconnect' : 'Unlink'} from my account`,
        });
    }
    const exportKeysOption = helpers.getExportKeysOption(connector, projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers);
    if (exportKeysOption) {
        options.push({
            Icon: jsxRuntime.jsx(key.ReactComponent, {}),
            callback: exportKeysOption,
            text: 'Export private keys',
        });
    }
    const onSelectWalletClick = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if ((primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.chain) === 'flow' &&
            connector.connectedChain === 'FLOW') {
            yield connector.endSession();
        }
        if (walletConnectorCore.isEmailWalletConnector(connector) && email) {
            connector.setEmail(email);
        }
        setShowWidgetStatePopup(true);
        setSelectedWalletWithAction({ action: 'select', wallet });
        setPrimaryWallet(walletId);
        setSelectedWalletConnectorKey(connector.key);
    });
    return (jsxRuntime.jsxs("div", { className: 'wallet__container', "data-testid": 'wallet', children: [jsxRuntime.jsxs("div", { className: 'wallet__row', children: [jsxRuntime.jsx("div", { className: 'wallet__icon-container', children: jsxRuntime.jsx(AuthProviderIcon.AuthProviderIcon, { iconSize: iconSize, jwt: authToken, wallet: wallet, showStatus: true }) }), (ens === null || ens === void 0 ? void 0 : ens.name) ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Typography.Typography, { className: 'wallet__ens-name', variant: 'body_small', color: 'primary', truncate: true, children: ens === null || ens === void 0 ? void 0 : ens.name }), jsxRuntime.jsx("div", { className: 'wallet__row__seperator' }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_mini', color: 'secondary', children: shortenWalletAddress.shortenWalletAddress(address, 3, 3) })] })) : (jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'primary', children: shortenWalletAddress.shortenWalletAddress(address, 4, 4) }))] }), jsxRuntime.jsx(DotsMenu.DotsMenu, { "data-testid": 'dots-menu', options: options, buttonClassName: 'wallet__menu', direction: 'left' })] }));
};

exports.Wallet = Wallet;
