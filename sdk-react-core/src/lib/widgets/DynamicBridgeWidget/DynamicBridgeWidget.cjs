'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var IsBrowser = require('../../components/IsBrowser/IsBrowser.cjs');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
var getChainIcon = require('../../shared/utils/functions/chain/getChainIcon.cjs');
require('@dynamic-labs/wallet-book');
var shortenWalletAddress = require('../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var index = require('../../shared/utils/hooks/useOnClickOutside/index.cjs');
require('@dynamic-labs/iconic');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
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
var ShadowDOM = require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../components/IconButton/IconButton.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var InlineWidgetButton = require('../../components/InlineWidget/components/InlineWidgetButton/InlineWidgetButton.cjs');
var InlineWidget = require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var DynamicBridgeUserProfile = require('./components/DynamicBridgeUserProfile/DynamicBridgeUserProfile.cjs');
var DynamicBridgeWidgetContext = require('./context/DynamicBridgeWidgetContext/DynamicBridgeWidgetContext.cjs');

const DynamicBridgeWidget = ({ className, variant = 'modal', }) => {
    const { showAuthFlow, setShowBridgeWidget, bridgeChains, setShowAuthFlow, connectedWallets, } = useInternalDynamicContext.useInternalDynamicContext();
    const { widgetRef, inlineControlsRef } = DynamicBridgeWidgetContext.useDynamicBridgeWidgetContext();
    const { t } = reactI18next.useTranslation();
    const closeOnOutsideClick = React.useCallback((e) => {
        var _a;
        const target = e.composedPath().shift();
        if ((_a = inlineControlsRef.current) === null || _a === void 0 ? void 0 : _a.contains(target))
            return;
        if (variant === 'dropdown' && !showAuthFlow) {
            setShowBridgeWidget(false);
        }
    }, [inlineControlsRef, variant, showAuthFlow, setShowBridgeWidget]);
    index.useOnClickOutside(widgetRef, closeOnOutsideClick);
    return (jsxRuntime.jsx(IsBrowser.IsBrowser, { children: jsxRuntime.jsxs(ShadowDOM.ShadowDOM, { id: 'dynamic-bridge-widget', className: 'dynamic-widget__container', children: [jsxRuntime.jsx(InlineWidget.InlineWidget, { ref: inlineControlsRef, className: className, dataTestId: 'BridgeWidgetNav', children: bridgeChains === null || bridgeChains === void 0 ? void 0 : bridgeChains.map(({ chain }) => {
                        const ChainIcon = getChainIcon.getChainIcon(chain);
                        const connectedChainWallets = connectedWallets.filter(({ chain: connectedChain }) => connectedChain === chain);
                        if (connectedChainWallets.length > 0) {
                            return connectedChainWallets.map((wallet) => (jsxRuntime.jsx(InlineWidgetButton.InlineWidgetButton, { icon: jsxRuntime.jsx(ChainIcon, {}), onClick: () => setShowBridgeWidget(true), children: shortenWalletAddress.shortenWalletAddress(wallet.address, 3, 3) }, wallet.id)));
                        }
                        return (jsxRuntime.jsx(InlineWidgetButton.InlineWidgetButton, { icon: jsxRuntime.jsx(ChainIcon, {}), onClick: () => setShowAuthFlow(true), copykey: 'dyn_bridge.widget.connect', children: t('dyn_bridge.widget.connect') }, chain));
                    }) }), jsxRuntime.jsx(DynamicBridgeUserProfile.DynamicBridgeUserProfile, { variant: variant })] }) }));
};

exports.DynamicBridgeWidget = DynamicBridgeWidget;
