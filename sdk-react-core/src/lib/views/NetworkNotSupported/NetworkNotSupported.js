import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import { classNames } from '../../utils/functions/classNames/classNames.js';
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
import { logger } from '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { isSupportedNetwork } from '../../utils/functions/isSupportedNetwork/isSupportedNetwork.js';
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
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import { ErrorContainer } from '../../components/ErrorContainer/ErrorContainer.js';
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
import { NetworkPicker } from '../../components/NetworkPicker/NetworkPicker.js';
import { UserAddress } from '../../components/UserAddress/UserAddress.js';
import { SelectNetworkButton } from '../../components/SelectNetworkButton/SelectNetworkButton.js';

const NetworkNotSupported = () => {
    const { onboardingImageUrl, selectedWalletConnector: walletConnector, connectedWallets, primaryWallet, isFullyConnected, setShowAuthFlow, bridgeChainsToConnect, } = useInternalDynamicContext();
    const { t } = useTranslation();
    // Refresh selectedWalletConnector network when primaryWallet or connectedWallets updates
    const { data: walletConnectorNetwork } = usePromise(() => walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.getNetwork(), { deps: [primaryWallet, walletConnector, connectedWallets] });
    const finishConnectAndSign = useConnectAndSign({
        shouldCallCallback: false,
        shouldUpdateWallets: !isFullyConnected ||
            (isFullyConnected && Boolean(bridgeChainsToConnect === null || bridgeChainsToConnect === void 0 ? void 0 : bridgeChainsToConnect.length)),
    });
    const [isNetworkPickerOpen, setIsNetworkPickerOpen] = useState(false);
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
    if (!walletConnector) {
        return null;
    }
    const onSelectNetworkButtonClick = (networkId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield walletConnector.switchNetwork({
                networkChainId: networkId,
            });
        }
        catch (e) {
            logger.debug(e);
        }
    });
    const evmNetworks = walletConnector.evmNetworks || [];
    const _isSupportedNetwork = isSupportedNetwork({
        network: walletConnectorNetwork,
        walletConnector,
    });
    return (jsxs("div", { className: 'network-not-supported', "data-testid": 'network-not-supported', children: [onboardingImageUrl && (jsx("img", { className: 'network-not-supported__main-img', src: onboardingImageUrl, alt: 'onboarding' })), !_isSupportedNetwork && (jsx(ErrorContainer, { variant: 'info', withIcon: false, className: 'network-not-supported__error--not-supported', copykey: 'dyn_network_not_supported.warning_message', children: t('dyn_network_not_supported.warning_message') })), jsxs("div", { className: classNames('network-not-supported__content-container', {
                    'network-not-supported__content-container--error': !_isSupportedNetwork,
                }), children: [jsx("div", { className: 'network-not-supported__img-container', children: jsx(WalletIcon, { style: { height: 64, width: 64 }, walletKey: walletConnector.key }) }), jsx(UserAddress, { walletConnector: walletConnector }), jsx("div", { className: 'network-not-supported__network-container', children: evmNetworks.length > 1 && (jsx(NetworkPicker, { currentNetwork: walletConnectorNetwork, evmNetworks: evmNetworks, connector: walletConnector, isNetworkPickerOpen: isNetworkPickerOpen, setIsNetworkPickerOpen: setIsNetworkPickerOpen, showNetworkName: true, buttonClassName: 'network-not-supported__network-picker-button', mainClassName: 'network-not-supported__network-picker' })) }), jsx("div", { className: 'network-not-supported__welcome-container', children: jsx(Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', copykey: 'dyn_network_not_supported.subtitle', children: t('dyn_network_not_supported.subtitle') }) }), evmNetworks.length === 1 && (jsx(SelectNetworkButton, { onClick: onSelectNetworkButtonClick, networkId: evmNetworks[0].networkId, networkName: evmNetworks[0].vanityName || evmNetworks[0].name, networkIconUrl: evmNetworks[0].iconUrls[0] }))] })] }));
};

export { NetworkNotSupported };
