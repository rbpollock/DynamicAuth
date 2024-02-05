'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var isNetworkUnsupported = require('../../utils/functions/isNetworkUnsupported/isNetworkUnsupported.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var MenuList = require('../MenuList/MenuList/MenuList.cjs');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../context/ThemeContext/ThemeContext.cjs');
var usePromise = require('../../utils/hooks/usePromise/usePromise.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../Alert/Alert.cjs');
require('../ShadowDOM/ShadowDOM.cjs');
require('../IconButton/IconButton.cjs');
require('../InlineWidget/InlineWidget.cjs');
require('../MenuList/Dropdown/Dropdown.cjs');
require('../Transition/ZoomTransition/ZoomTransition.cjs');
require('../Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../Transition/OpacityTransition/OpacityTransition.cjs');
require('../Popper/Popper/Popper.cjs');
require('../Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var NetworkAction = require('./components/NetworkAction/NetworkAction.cjs');
var NetworkControl = require('./components/NetworkControl/NetworkControl.cjs');

const NetworkPicker = ({ activeClassName = '', buttonClassName = '', checkboxClassName = '', connector, evmNetworks, isNetworkPickerOpen, listClassName = '', mainClassName = '', setIsNetworkPickerOpen, showNetworkName, customCallbackOnSuccess, currentNetwork, }) => {
    const pickerRef = React.useRef(null);
    const [newNetworkId, setNewNetworkId] = React.useState(undefined);
    const { loadingNetwork, primaryWallet, setNetwork } = useInternalDynamicContext.useInternalDynamicContext();
    const { data: supportedWalletNetworks } = usePromise.usePromise(() => connector === null || connector === void 0 ? void 0 : connector.getSupportedNetworks(), { deps: [connector, isNetworkPickerOpen] });
    const shouldAllowOpenDropdown = isNetworkUnsupported.isNetworkUnsupported(currentNetwork, evmNetworks) ||
        (evmNetworks === null || evmNetworks === void 0 ? void 0 : evmNetworks.length) > 1;
    // Ref to anchor popper to
    const anchorRef = React.useRef(null);
    const handleNetworkChange = (networkId) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
            logger.logger.debug(error);
        }
        finally {
            setNewNetworkId(undefined);
            setIsNetworkPickerOpen(false);
        }
    });
    return (jsxRuntime.jsxs("div", { className: classNames.classNames('non-widget-network-picker', mainClassName), ref: pickerRef, "data-testid": 'network-picker', children: [jsxRuntime.jsxs("div", { className: 'network-picker-network-control', children: [jsxRuntime.jsx(NetworkControl.NetworkControl, { evmNetworks: evmNetworks, activeClassName: activeClassName, network: currentNetwork, loading: loadingNetwork, isOpen: isNetworkPickerOpen, setIsOpen: setIsNetworkPickerOpen, walletConnector: connector, showNetworkName: showNetworkName, buttonClassName: buttonClassName }), jsxRuntime.jsx("div", { ref: anchorRef, className: 'network-picker-network-control__anchor' })] }), shouldAllowOpenDropdown && (jsxRuntime.jsx(MenuList.MenuList, { className: listClassName, isOpen: isNetworkPickerOpen, onClickClose: () => setIsNetworkPickerOpen(false), popperProps: {
                    anchorOrigin: 'bottom-left',
                    anchorRef,
                }, mobileTitle: 'Select network', children: evmNetworks.map(({ name, networkId, vanityName, iconUrls }) => (jsxRuntime.jsx(NetworkAction.NetworkAction, { iconUrl: iconUrls === null || iconUrls === void 0 ? void 0 : iconUrls[0], networkId: networkId, networkName: vanityName || name, network: currentNetwork, onClick: handleNetworkChange, checkboxClassName: checkboxClassName, newNetworkId: newNetworkId, notSupported: supportedWalletNetworks &&
                        !supportedWalletNetworks.includes(`${networkId}`) }, networkId))) }))] }));
};

exports.NetworkPicker = NetworkPicker;
