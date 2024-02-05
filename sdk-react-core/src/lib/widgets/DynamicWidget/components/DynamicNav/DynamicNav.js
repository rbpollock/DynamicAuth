import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { AccountControl } from '../AccountControl/AccountControl.js';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import { ShadowDOM } from '../../../../components/ShadowDOM/ShadowDOM.js';
import { useWidgetContext } from '../../context/DynamicWidgetContext.js';
import { IsBrowser } from '../../../../components/IsBrowser/IsBrowser.js';
import { NetworkPicker } from '../../../../components/NetworkPicker/NetworkPicker.js';
import '@dynamic-labs/utils';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../config/ApiEndpoint.js';
import '../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../../../context/MockContext/MockContext.js';
import '../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../../components/OverlayCard/OverlayCard.context.js';
import '../../../../context/FooterAnimationContext/index.js';
import '../../../../context/QrCodeContext/QrCodeContext.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import { PopperProvider } from '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const DynamicNav = () => {
    const [isNetworkPickerOpen, setIsNetworkPickerOpen] = useState(false);
    const { primaryWallet, projectSettings, network } = useInternalDynamicContext();
    const { inlineControlsRef } = useWidgetContext();
    const evmNetworks = ((primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector) &&
        primaryWallet.connector.evmNetworks) ||
        [];
    if (!projectSettings)
        return null;
    const shouldHideNetwork = projectSettings.sdk.hideNetworkInDynamicWidget;
    return (jsx(IsBrowser, { children: jsxs("div", { ref: inlineControlsRef, "data-testid": 'DynamicNav', className: 'dynamic-widget-inline-controls', children: [!shouldHideNetwork && primaryWallet && (jsx(PopperProvider, { children: jsx(NetworkPicker, { currentNetwork: network, connector: primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector, showNetworkName: true, isNetworkPickerOpen: isNetworkPickerOpen, setIsNetworkPickerOpen: setIsNetworkPickerOpen, mainClassName: 'dynamic-widget-inline-controls__network-picker-main', buttonClassName: 'dynamic-widget-inline-controls__network-picker', listClassName: 'dynamic-widget-inline-controls__network-picker-list', checkboxClassName: 'dynamic-widget-inline-controls__network-picker-checkbox', evmNetworks: evmNetworks }) })), jsx("div", { className: 'dynamic-widget-inline-controls__account-control-container', children: jsx(AccountControl, { className: 'dynamic-widget-inline-controls__account-control' }) })] }) }));
};
const ShadowedDynamicNav = () => (jsx(ShadowDOM, { children: jsx(DynamicNav, {}) }));

export { DynamicNav, ShadowedDynamicNav };
