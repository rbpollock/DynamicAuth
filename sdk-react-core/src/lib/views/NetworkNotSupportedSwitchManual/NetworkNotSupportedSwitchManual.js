import { jsx, jsxs } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import { useConnectAndSign } from '../../utils/hooks/authenticationHooks/useConnectAndSign/useConnectAndSign.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/ViewContext/ViewContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '@dynamic-labs/sdk-api';
import '../../config/ApiEndpoint.js';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getWalletConnectorNetworks } from '../../utils/functions/getWalletConnectorNetworks/getWalletConnectorNetworks.js';
import { isSupportedNetwork } from '../../utils/functions/isSupportedNetwork/isSupportedNetwork.js';
import { pixelToRem } from '../../utils/functions/pixelToRem/pixelToRem.js';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../context/ThemeContext/ThemeContext.js';
import { usePromise } from '../../utils/hooks/usePromise/usePromise.js';
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
import { IconWithSpinner, iconRatio } from '../../components/IconWithSpinner/IconWithSpinner.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../components/IconButton/IconButton.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

//   The component notifies the user about the required manual network change,
//   as the wallet does not support programmatic network change.
const NetworkNotSupportedSwitchManual = () => {
    var _a, _b;
    const { user, selectedWalletConnector: walletConnector, connectedWallets, isFullyConnected, setShowAuthFlow, bridgeChainsToConnect, } = useInternalDynamicContext();
    const { t } = useTranslation();
    // Refresh selectedWalletConnector network when primaryWallet or connectedWallets updates
    const { data: walletConnectorNetwork } = usePromise(() => walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.getNetwork(), {
        deps: [walletConnector, connectedWallets],
    });
    const finishConnectAndSign = useConnectAndSign({
        shouldCallCallback: false,
        shouldUpdateWallets: !isFullyConnected ||
            (isFullyConnected && Boolean(bridgeChainsToConnect === null || bridgeChainsToConnect === void 0 ? void 0 : bridgeChainsToConnect.length)),
    });
    // Finishes auth flow when wallet switches to proper network
    useEffect(() => {
        if (isSupportedNetwork({ network: walletConnectorNetwork, walletConnector })) {
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
    const icon = (jsx(WalletIcon, { walletKey: walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.key, style: {
            height: pixelToRem(iconSize * iconRatio),
            width: pixelToRem(iconSize * iconRatio),
        } }));
    const walletConnectorNetworks = getWalletConnectorNetworks(walletConnector);
    return (jsxs("div", { "data-testid": 'network-not-supported', className: 'network-not-supported-switch-manual', children: [jsx("div", { className: 'network-not-supported-switch-manual__img-container', children: ((_a = user === null || user === void 0 ? void 0 : user.ens) === null || _a === void 0 ? void 0 : _a.avatar) ? (jsx("div", { className: 'network-not-supported-switch-manual__network-container', children: jsx("img", { src: (_b = user === null || user === void 0 ? void 0 : user.ens) === null || _b === void 0 ? void 0 : _b.avatar, alt: 'user ens avatar', className: 'network-not-supported-switch-manual__img' }) })) : (jsx("div", { className: 'network-not-supported-switch-manual__network-container', children: jsx(IconWithSpinner, { Icon: icon, iconSize: iconSize, isSpinning: true }) })) }), jsxs("div", { className: 'network-not-supported-switch-manual__content', children: [jsx(Typography, { className: 'network-not-supported-switch-manual__title', weight: 'medium', variant: 'title', color: 'primary', copykey: 'dyn_network_not_supported_manual_switch.title', children: t('dyn_network_not_supported_manual_switch.title') }), jsx(Typography, { variant: 'body_normal', color: 'secondary', copykey: walletConnectorNetworks.length
                            ? 'dyn_network_not_supported_manual_switch.subtitle_network_defined'
                            : 'dyn_network_not_supported_manual_switch.subtitle_no_network_defined', children: walletConnectorNetworks.length
                            ? t('dyn_network_not_supported_manual_switch.subtitle_network_defined', { network: walletConnectorNetworks[0].name })
                            : t('dyn_network_not_supported_manual_switch.subtitle_no_network_defined') })] })] }));
};

export { NetworkNotSupportedSwitchManual };
