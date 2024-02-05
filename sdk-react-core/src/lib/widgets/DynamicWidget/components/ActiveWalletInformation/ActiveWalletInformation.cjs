'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
var shortenWalletAddress = require('../../../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
var createOwnerWallet = require('../../../../utils/functions/createOwnerWallet/createOwnerWallet.cjs');
require('@dynamic-labs/multi-wallet');
var isAccountAbstractionWallet = require('../../../../utils/functions/isAccountAbstractionWallet/isAccountAbstractionWallet.cjs');
var isTestnet = require('../../../../utils/functions/isTestnet/isTestnet.cjs');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../context/ThemeContext/ThemeContext.cjs');
var usePromise = require('../../../../utils/hooks/usePromise/usePromise.cjs');
require('@dynamic-labs/types');
require('yup');
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
var useIsTurnkeyWallet = require('../../../../utils/hooks/useIsTurnkeyWallet/useIsTurnkeyWallet.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
var AuthProviderIcon = require('../../../../components/AuthProviderIcon/AuthProviderIcon.cjs');
var helpers = require('../../helpers/helpers.cjs');
var DynamicWidgetContext = require('../../context/DynamicWidgetContext.cjs');
var DotsMenu = require('../DotsMenu/DotsMenu.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../components/IconButton/IconButton.cjs');
var Alert = require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var NetworkPicker = require('../../../../components/NetworkPicker/NetworkPicker.cjs');
var useFetchNameService = require('../../hooks/useFetchNameService/useFetchNameService.cjs');
var Balance = require('../Balance/Balance.cjs');

const ICON_SIZE = 28;
const ActiveWalletInformation = () => {
    const { t } = reactI18next.useTranslation();
    const [isNetworkPickerOpen, setIsNetworkPickerOpen] = React.useState(false);
    const { primaryWallet, authToken, network, projectSettings, handleLogOut, user, } = useInternalDynamicContext.useInternalDynamicContext();
    const { setDynamicWidgetView } = DynamicWidgetContext.useWidgetContext();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet.useIsTurnkeyWallet();
    const address = primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.address;
    const nameService = useFetchNameService.useFetchNameService(address);
    const { data: testnet } = usePromise.usePromise(() => isTestnet.isTestnet(primaryWallet), { deps: [network] });
    const exportKeysOption = helpers.getExportKeysOption(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector, projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers);
    const wallet = isAccountAbstractionWallet.isAccountAbstractionWallet(primaryWallet)
        ? createOwnerWallet.createOwnerWallet(primaryWallet, (user === null || user === void 0 ? void 0 : user.verifiedCredentials) || [])
        : primaryWallet;
    const options = [
        {
            Icon: null,
            callback: () => (nameService === null || nameService === void 0 ? void 0 : nameService.name) && navigator.clipboard.writeText(nameService === null || nameService === void 0 ? void 0 : nameService.name),
            hide: !(nameService === null || nameService === void 0 ? void 0 : nameService.name),
            text: 'Copy ENS',
        },
        {
            Icon: null,
            callback: () => address && navigator.clipboard.writeText(address),
            hide: !address,
            text: 'Copy wallet address',
        },
        {
            Icon: null,
            callback: () => setDynamicWidgetView('manage-passkeys'),
            hide: !(wallet &&
                walletConnectorCore.normalizeWalletName(wallet.connector.name).startsWith('turnkey')),
            text: 'My passkeys',
        },
        {
            Icon: null,
            callback: exportKeysOption ||
                (() => logger.logger.info('No option to export private keys')),
            hide: !exportKeysOption,
            text: 'Export private keys',
        },
        {
            Icon: null,
            callback: handleLogOut,
            text: 'Disconnect',
        },
    ];
    const evmNetworks = ((primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector) &&
        (primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector).evmNetworks) ||
        [];
    const showTestnetAlert = testnet && !isTurnkeyWalletWithoutAuthenticator;
    return (jsxRuntime.jsxs("div", { className: 'active-wallet-information-container', "data-testid": 'active-wallet-information', children: [jsxRuntime.jsxs("div", { className: 'active-wallet-information', children: [jsxRuntime.jsxs("div", { className: 'active-wallet-information__header', children: [jsxRuntime.jsx("div", { className: 'active-wallet-information__avatar--centered', children: (nameService === null || nameService === void 0 ? void 0 : nameService.avatar) ? (jsxRuntime.jsx("div", { className: 'active-wallet-information__avatar', children: jsxRuntime.jsx("img", { src: nameService === null || nameService === void 0 ? void 0 : nameService.avatar, alt: '' }) })) : (jsxRuntime.jsx("div", { className: 'active-wallet-information__wallet-img', children: jsxRuntime.jsx(AuthProviderIcon.AuthProviderIcon, { jwt: authToken, iconSize: ICON_SIZE, showStatus: true }) })) }), jsxRuntime.jsxs("div", { className: 'active-wallet-information__details', children: [jsxRuntime.jsxs("div", { className: classNames.classNames('active-wallet-information__actions-container', {
                                            'active-wallet-information__actions-container--centered': !(nameService === null || nameService === void 0 ? void 0 : nameService.name),
                                        }), children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(Typography.Typography, { className: 'active-wallet-information__handle', color: 'primary', variant: 'body_normal', children: nameService === null || nameService === void 0 ? void 0 : nameService.name }), jsxRuntime.jsx(Typography.Typography, { className: 'active-wallet-information__address', weight: (nameService === null || nameService === void 0 ? void 0 : nameService.name) ? 'regular' : 'medium', variant: (nameService === null || nameService === void 0 ? void 0 : nameService.name) ? 'body_small' : 'body_normal', color: (nameService === null || nameService === void 0 ? void 0 : nameService.name) ? 'secondary' : 'primary', children: shortenWalletAddress.shortenWalletAddress(address, 4, 4) })] }), jsxRuntime.jsx(DotsMenu.DotsMenu, { "data-testid": 'dots-menu', options: options, buttonClassName: 'active-wallet-information__dots-menu', buttonClassNameWithOpenMenu: 'active-wallet-information__dots-menu' })] }), jsxRuntime.jsx(NetworkPicker.NetworkPicker, { currentNetwork: network, connector: primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector, isNetworkPickerOpen: isNetworkPickerOpen, setIsNetworkPickerOpen: setIsNetworkPickerOpen, mainClassName: 'active-wallet-information__network-picker', buttonClassName: 'active-wallet-information__network-picker-button', evmNetworks: evmNetworks, showNetworkName: true })] })] }), showTestnetAlert && (jsxRuntime.jsx(Alert.Alert, { variant: 'warning', copykey: 'dyn_active_wallet_info.testnet_warning', children: t('dyn_active_wallet_info.testnet_warning') }))] }), jsxRuntime.jsxs("div", { className: 'balance-container', children: [jsxRuntime.jsx(Typography.Typography, { color: 'secondary', variant: 'body_small', children: "Balance" }), primaryWallet && (jsxRuntime.jsx(Balance.Balance, { className: 'balance-container__balance', connector: primaryWallet.connector, address: primaryWallet.address, network: network }))] })] }));
};

exports.ActiveWalletInformation = ActiveWalletInformation;
