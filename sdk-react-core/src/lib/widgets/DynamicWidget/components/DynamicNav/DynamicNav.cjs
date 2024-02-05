'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var AccountControl = require('../AccountControl/AccountControl.cjs');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
var ShadowDOM = require('../../../../components/ShadowDOM/ShadowDOM.cjs');
var DynamicWidgetContext = require('../../context/DynamicWidgetContext.cjs');
var IsBrowser = require('../../../../components/IsBrowser/IsBrowser.cjs');
var NetworkPicker = require('../../../../components/NetworkPicker/NetworkPicker.cjs');
require('@dynamic-labs/utils');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
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
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
var PopperContext = require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const DynamicNav = () => {
    const [isNetworkPickerOpen, setIsNetworkPickerOpen] = React.useState(false);
    const { primaryWallet, projectSettings, network } = useInternalDynamicContext.useInternalDynamicContext();
    const { inlineControlsRef } = DynamicWidgetContext.useWidgetContext();
    const evmNetworks = ((primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector) &&
        primaryWallet.connector.evmNetworks) ||
        [];
    if (!projectSettings)
        return null;
    const shouldHideNetwork = projectSettings.sdk.hideNetworkInDynamicWidget;
    return (jsxRuntime.jsx(IsBrowser.IsBrowser, { children: jsxRuntime.jsxs("div", { ref: inlineControlsRef, "data-testid": 'DynamicNav', className: 'dynamic-widget-inline-controls', children: [!shouldHideNetwork && primaryWallet && (jsxRuntime.jsx(PopperContext.PopperProvider, { children: jsxRuntime.jsx(NetworkPicker.NetworkPicker, { currentNetwork: network, connector: primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector, showNetworkName: true, isNetworkPickerOpen: isNetworkPickerOpen, setIsNetworkPickerOpen: setIsNetworkPickerOpen, mainClassName: 'dynamic-widget-inline-controls__network-picker-main', buttonClassName: 'dynamic-widget-inline-controls__network-picker', listClassName: 'dynamic-widget-inline-controls__network-picker-list', checkboxClassName: 'dynamic-widget-inline-controls__network-picker-checkbox', evmNetworks: evmNetworks }) })), jsxRuntime.jsx("div", { className: 'dynamic-widget-inline-controls__account-control-container', children: jsxRuntime.jsx(AccountControl.AccountControl, { className: 'dynamic-widget-inline-controls__account-control' }) })] }) }));
};
const ShadowedDynamicNav = () => (jsxRuntime.jsx(ShadowDOM.ShadowDOM, { children: jsxRuntime.jsx(DynamicNav, {}) }));

exports.DynamicNav = DynamicNav;
exports.ShadowedDynamicNav = ShadowedDynamicNav;
