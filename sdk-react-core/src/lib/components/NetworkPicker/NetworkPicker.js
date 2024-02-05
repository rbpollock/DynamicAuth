import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useState } from 'react';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { isNetworkUnsupported } from '../../utils/functions/isNetworkUnsupported/isNetworkUnsupported.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { MenuList } from '../MenuList/MenuList/MenuList.js';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../context/ThemeContext/ThemeContext.js';
import { usePromise } from '../../utils/hooks/usePromise/usePromise.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../Alert/Alert.js';
import '../ShadowDOM/ShadowDOM.js';
import '../IconButton/IconButton.js';
import '../InlineWidget/InlineWidget.js';
import '../MenuList/Dropdown/Dropdown.js';
import '../Transition/ZoomTransition/ZoomTransition.js';
import '../Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../Transition/OpacityTransition/OpacityTransition.js';
import '../Popper/Popper/Popper.js';
import '../Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { NetworkAction } from './components/NetworkAction/NetworkAction.js';
import { NetworkControl } from './components/NetworkControl/NetworkControl.js';

const NetworkPicker = ({ activeClassName = '', buttonClassName = '', checkboxClassName = '', connector, evmNetworks, isNetworkPickerOpen, listClassName = '', mainClassName = '', setIsNetworkPickerOpen, showNetworkName, customCallbackOnSuccess, currentNetwork, }) => {
    const pickerRef = useRef(null);
    const [newNetworkId, setNewNetworkId] = useState(undefined);
    const { loadingNetwork, primaryWallet, setNetwork } = useInternalDynamicContext();
    const { data: supportedWalletNetworks } = usePromise(() => connector === null || connector === void 0 ? void 0 : connector.getSupportedNetworks(), { deps: [connector, isNetworkPickerOpen] });
    const shouldAllowOpenDropdown = isNetworkUnsupported(currentNetwork, evmNetworks) ||
        (evmNetworks === null || evmNetworks === void 0 ? void 0 : evmNetworks.length) > 1;
    // Ref to anchor popper to
    const anchorRef = useRef(null);
    const handleNetworkChange = (networkId) => __awaiter(void 0, void 0, void 0, function* () {
        setNewNetworkId(networkId);
        try {
            yield (connector === null || connector === void 0 ? void 0 : connector.switchNetwork({
                networkChainId: networkId,
            }));
            const chainId = yield (connector === null || connector === void 0 ? void 0 : connector.getNetwork());
            if ((primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector.key) === (connector === null || connector === void 0 ? void 0 : connector.key))
                setNetwork(chainId);
            customCallbackOnSuccess === null || customCallbackOnSuccess === void 0 ? void 0 : customCallbackOnSuccess();
        }
        catch (error) {
            /* istanbul ignore next */
            logger.debug(error);
        }
        finally {
            setNewNetworkId(undefined);
            setIsNetworkPickerOpen(false);
        }
    });
    return (jsxs("div", { className: classNames('non-widget-network-picker', mainClassName), ref: pickerRef, "data-testid": 'network-picker', children: [jsxs("div", { className: 'network-picker-network-control', children: [jsx(NetworkControl, { evmNetworks: evmNetworks, activeClassName: activeClassName, network: currentNetwork, loading: loadingNetwork, isOpen: isNetworkPickerOpen, setIsOpen: setIsNetworkPickerOpen, walletConnector: connector, showNetworkName: showNetworkName, buttonClassName: buttonClassName }), jsx("div", { ref: anchorRef, className: 'network-picker-network-control__anchor' })] }), shouldAllowOpenDropdown && (jsx(MenuList, { className: listClassName, isOpen: isNetworkPickerOpen, onClickClose: () => setIsNetworkPickerOpen(false), popperProps: {
                    anchorOrigin: 'bottom-left',
                    anchorRef,
                }, mobileTitle: 'Select network', children: evmNetworks.map(({ name, networkId, vanityName, iconUrls }) => (jsx(NetworkAction, { iconUrl: iconUrls === null || iconUrls === void 0 ? void 0 : iconUrls[0], networkId: networkId, networkName: vanityName || name, network: currentNetwork, onClick: handleNetworkChange, checkboxClassName: checkboxClassName, newNetworkId: newNetworkId, notSupported: supportedWalletNetworks &&
                        !supportedWalletNetworks.includes(`${networkId}`) }, networkId))) }))] }));
};

export { NetworkPicker };
