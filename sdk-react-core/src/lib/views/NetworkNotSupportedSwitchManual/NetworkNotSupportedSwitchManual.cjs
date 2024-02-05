'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var walletBook = require('@dynamic-labs/wallet-book');
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
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getWalletConnectorNetworks = require('../../utils/functions/getWalletConnectorNetworks/getWalletConnectorNetworks.cjs');
var isSupportedNetwork = require('../../utils/functions/isSupportedNetwork/isSupportedNetwork.cjs');
var pixelToRem = require('../../utils/functions/pixelToRem/pixelToRem.cjs');
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
var IconWithSpinner = require('../../components/IconWithSpinner/IconWithSpinner.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
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

//   The component notifies the user about the required manual network change,
//   as the wallet does not support programmatic network change.
const NetworkNotSupportedSwitchManual = () => {
    var _a, _b;
    const { user, selectedWalletConnector: walletConnector, connectedWallets, isFullyConnected, setShowAuthFlow, bridgeChainsToConnect, } = useInternalDynamicContext.useInternalDynamicContext();
    const { t } = reactI18next.useTranslation();
    // Refresh selectedWalletConnector network when primaryWallet or connectedWallets updates
    const { data: walletConnectorNetwork } = usePromise.usePromise(() => walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.getNetwork(), {
        deps: [walletConnector, connectedWallets],
    });
    const finishConnectAndSign = useConnectAndSign.useConnectAndSign({
        shouldCallCallback: false,
        shouldUpdateWallets: !isFullyConnected ||
            (isFullyConnected && Boolean(bridgeChainsToConnect === null || bridgeChainsToConnect === void 0 ? void 0 : bridgeChainsToConnect.length)),
    });
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
    const iconSize = 80;
    const icon = (jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.key, style: {
            height: pixelToRem.pixelToRem(iconSize * IconWithSpinner.iconRatio),
            width: pixelToRem.pixelToRem(iconSize * IconWithSpinner.iconRatio),
        } }));
    const walletConnectorNetworks = getWalletConnectorNetworks.getWalletConnectorNetworks(walletConnector);
    return (jsxRuntime.jsxs("div", { "data-testid": 'network-not-supported', className: 'network-not-supported-switch-manual', children: [jsxRuntime.jsx("div", { className: 'network-not-supported-switch-manual__img-container', children: ((_a = user === null || user === void 0 ? void 0 : user.ens) === null || _a === void 0 ? void 0 : _a.avatar) ? (jsxRuntime.jsx("div", { className: 'network-not-supported-switch-manual__network-container', children: jsxRuntime.jsx("img", { src: (_b = user === null || user === void 0 ? void 0 : user.ens) === null || _b === void 0 ? void 0 : _b.avatar, alt: 'user ens avatar', className: 'network-not-supported-switch-manual__img' }) })) : (jsxRuntime.jsx("div", { className: 'network-not-supported-switch-manual__network-container', children: jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { Icon: icon, iconSize: iconSize, isSpinning: true }) })) }), jsxRuntime.jsxs("div", { className: 'network-not-supported-switch-manual__content', children: [jsxRuntime.jsx(Typography.Typography, { className: 'network-not-supported-switch-manual__title', weight: 'medium', variant: 'title', color: 'primary', copykey: 'dyn_network_not_supported_manual_switch.title', children: t('dyn_network_not_supported_manual_switch.title') }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'secondary', copykey: walletConnectorNetworks.length
                            ? 'dyn_network_not_supported_manual_switch.subtitle_network_defined'
                            : 'dyn_network_not_supported_manual_switch.subtitle_no_network_defined', children: walletConnectorNetworks.length
                            ? t('dyn_network_not_supported_manual_switch.subtitle_network_defined', { network: walletConnectorNetworks[0].name })
                            : t('dyn_network_not_supported_manual_switch.subtitle_no_network_defined') })] })] }));
};

exports.NetworkNotSupportedSwitchManual = NetworkNotSupportedSwitchManual;
