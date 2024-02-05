'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var walletBook = require('@dynamic-labs/wallet-book');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
var useConnectAndSign = require('../../utils/hooks/authenticationHooks/useConnectAndSign/useConnectAndSign.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../config/ApiEndpoint.cjs');
var logger = require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var isSupportedNetwork = require('../../utils/functions/isSupportedNetwork/isSupportedNetwork.cjs');
require('../../context/CaptchaContext/CaptchaContext.cjs');
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
require('../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
var ErrorContainer = require('../../components/ErrorContainer/ErrorContainer.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../components/IconButton/IconButton.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var NetworkPicker = require('../../components/NetworkPicker/NetworkPicker.cjs');
var UserAddress = require('../../components/UserAddress/UserAddress.cjs');
var SelectNetworkButton = require('../../components/SelectNetworkButton/SelectNetworkButton.cjs');

const NetworkNotSupported = () => {
    const { onboardingImageUrl, selectedWalletConnector: walletConnector, connectedWallets, primaryWallet, isFullyConnected, setShowAuthFlow, bridgeChainsToConnect, } = useInternalDynamicContext.useInternalDynamicContext();
    const { t } = reactI18next.useTranslation();
    // Refresh selectedWalletConnector network when primaryWallet or connectedWallets updates
    const { data: walletConnectorNetwork } = usePromise.usePromise(() => walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.getNetwork(), { deps: [primaryWallet, walletConnector, connectedWallets] });
    const finishConnectAndSign = useConnectAndSign.useConnectAndSign({
        shouldCallCallback: false,
        shouldUpdateWallets: !isFullyConnected ||
            (isFullyConnected && Boolean(bridgeChainsToConnect === null || bridgeChainsToConnect === void 0 ? void 0 : bridgeChainsToConnect.length)),
    });
    const [isNetworkPickerOpen, setIsNetworkPickerOpen] = React.useState(false);
    // Finishes auth flow when wallet switches to proper network
    React.useEffect(() => {
        if (isSupportedNetwork.isSupportedNetwork({ network: walletConnectorNetwork, walletConnector })) {
            finishConnectAndSign({
                walletConnector: walletConnector,
            });
            // there are two scenarios here, one in not connected state and the other one in connected state.
            // previously we were calling setShowAuthFlow(false) in useHandleWalletsToConnect.
            // now, we don't call it in network-not-supported view, so we need to handle that scenario and close modal here
            // this should be gone, once we're done with the useConnectAndSign hook refactor.
            // TODO: https://linear.app/dynamic-labs/issue/QNTM-117/break-useconnectandsign-hook-to-small-parts
            if (isFullyConnected) {
                setShowAuthFlow(false);
            }
        }
    }, [walletConnectorNetwork, setShowAuthFlow, isFullyConnected]);
    if (!walletConnector) {
        return null;
    }
    const onSelectNetworkButtonClick = (networkId) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        try {
            yield walletConnector.switchNetwork({
                networkChainId: networkId,
            });
        }
        catch (e) {
            logger.logger.debug(e);
        }
    });
    const evmNetworks = walletConnector.evmNetworks || [];
    const _isSupportedNetwork = isSupportedNetwork.isSupportedNetwork({
        network: walletConnectorNetwork,
        walletConnector,
    });
    return (jsxRuntime.jsxs("div", { className: 'network-not-supported', "data-testid": 'network-not-supported', children: [onboardingImageUrl && (jsxRuntime.jsx("img", { className: 'network-not-supported__main-img', src: onboardingImageUrl, alt: 'onboarding' })), !_isSupportedNetwork && (jsxRuntime.jsx(ErrorContainer.ErrorContainer, { variant: 'info', withIcon: false, className: 'network-not-supported__error--not-supported', copykey: 'dyn_network_not_supported.warning_message', children: t('dyn_network_not_supported.warning_message') })), jsxRuntime.jsxs("div", { className: classNames.classNames('network-not-supported__content-container', {
                    'network-not-supported__content-container--error': !_isSupportedNetwork,
                }), children: [jsxRuntime.jsx("div", { className: 'network-not-supported__img-container', children: jsxRuntime.jsx(walletBook.WalletIcon, { style: { height: 64, width: 64 }, walletKey: walletConnector.key }) }), jsxRuntime.jsx(UserAddress.UserAddress, { walletConnector: walletConnector }), jsxRuntime.jsx("div", { className: 'network-not-supported__network-container', children: evmNetworks.length > 1 && (jsxRuntime.jsx(NetworkPicker.NetworkPicker, { currentNetwork: walletConnectorNetwork, evmNetworks: evmNetworks, connector: walletConnector, isNetworkPickerOpen: isNetworkPickerOpen, setIsNetworkPickerOpen: setIsNetworkPickerOpen, showNetworkName: true, buttonClassName: 'network-not-supported__network-picker-button', mainClassName: 'network-not-supported__network-picker' })) }), jsxRuntime.jsx("div", { className: 'network-not-supported__welcome-container', children: jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', copykey: 'dyn_network_not_supported.subtitle', children: t('dyn_network_not_supported.subtitle') }) }), evmNetworks.length === 1 && (jsxRuntime.jsx(SelectNetworkButton.SelectNetworkButton, { onClick: onSelectNetworkButtonClick, networkId: evmNetworks[0].networkId, networkName: evmNetworks[0].vanityName || evmNetworks[0].name, networkIconUrl: evmNetworks[0].iconUrls[0] }))] })] }));
};

exports.NetworkNotSupported = NetworkNotSupported;
