import { jsx, jsxs } from 'react/jsx-runtime';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IsBrowser } from '../../components/IsBrowser/IsBrowser.js';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import { getChainIcon } from '../../shared/utils/functions/chain/getChainIcon.js';
import '@dynamic-labs/wallet-book';
import { shortenWalletAddress } from '../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import { useOnClickOutside } from '../../shared/utils/hooks/useOnClickOutside/index.js';
import '@dynamic-labs/iconic';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
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
import { ShadowDOM } from '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../components/IconButton/IconButton.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { InlineWidgetButton } from '../../components/InlineWidget/components/InlineWidgetButton/InlineWidgetButton.js';
import { InlineWidget } from '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { DynamicBridgeUserProfile } from './components/DynamicBridgeUserProfile/DynamicBridgeUserProfile.js';
import { useDynamicBridgeWidgetContext } from './context/DynamicBridgeWidgetContext/DynamicBridgeWidgetContext.js';

const DynamicBridgeWidget = ({ className, variant = 'modal', }) => {
    const { showAuthFlow, setShowBridgeWidget, bridgeChains, setShowAuthFlow, connectedWallets, } = useInternalDynamicContext();
    const { widgetRef, inlineControlsRef } = useDynamicBridgeWidgetContext();
    const { t } = useTranslation();
    const closeOnOutsideClick = useCallback((e) => {
        var _a;
        const target = e.composedPath().shift();
        if ((_a = inlineControlsRef.current) === null || _a === void 0 ? void 0 : _a.contains(target))
            return;
        if (variant === 'dropdown' && !showAuthFlow) {
            setShowBridgeWidget(false);
        }
    }, [inlineControlsRef, variant, showAuthFlow, setShowBridgeWidget]);
    useOnClickOutside(widgetRef, closeOnOutsideClick);
    return (jsx(IsBrowser, { children: jsxs(ShadowDOM, { id: 'dynamic-bridge-widget', className: 'dynamic-widget__container', children: [jsx(InlineWidget, { ref: inlineControlsRef, className: className, dataTestId: 'BridgeWidgetNav', children: bridgeChains === null || bridgeChains === void 0 ? void 0 : bridgeChains.map(({ chain }) => {
                        const ChainIcon = getChainIcon(chain);
                        const connectedChainWallets = connectedWallets.filter(({ chain: connectedChain }) => connectedChain === chain);
                        if (connectedChainWallets.length > 0) {
                            return connectedChainWallets.map((wallet) => (jsx(InlineWidgetButton, { icon: jsx(ChainIcon, {}), onClick: () => setShowBridgeWidget(true), children: shortenWalletAddress(wallet.address, 3, 3) }, wallet.id)));
                        }
                        return (jsx(InlineWidgetButton, { icon: jsx(ChainIcon, {}), onClick: () => setShowAuthFlow(true), copykey: 'dyn_bridge.widget.connect', children: t('dyn_bridge.widget.connect') }, chain));
                    }) }), jsx(DynamicBridgeUserProfile, { variant: variant })] }) }));
};

export { DynamicBridgeWidget };
