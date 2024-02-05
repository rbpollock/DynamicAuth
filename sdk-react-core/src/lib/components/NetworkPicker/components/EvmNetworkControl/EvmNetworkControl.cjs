'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@dynamic-labs/utils');
require('@dynamic-labs/iconic');
require('../../../../context/ViewContext/ViewContext.cjs');
require('react');
var stroke = require('../../../../shared/assets/stroke.cjs');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');
require('../../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
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
require('../../../Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../ShadowDOM/ShadowDOM.cjs');
require('../../../OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../../Typography/Typography.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
var Icon = require('../../../Icon/Icon.cjs');
require('i18next');
require('../../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../IconButton/IconButton.cjs');
require('../../../Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../InlineWidget/InlineWidget.cjs');
require('../../../MenuList/Dropdown/Dropdown.cjs');
require('../../../Popper/Popper/Popper.cjs');
require('../../../Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var NetworkControlSkeleton = require('../NetworkControlSkeleton/NetworkControlSkeleton.cjs');
var UnsupportedNetwork = require('../UnsupportedNetwork/UnsupportedNetwork.cjs');

const EvmNetworkControl = ({ evmNetworks, className = '', activeClassName = '', network, walletConnector, isOpen, setIsOpen, showNetworkName = false, }) => {
    var _a, _b;
    const currentEvmNetwork = evmNetworks === null || evmNetworks === void 0 ? void 0 : evmNetworks.find((element) => network && element.chainId === utils.parseChainId(network));
    if (evmNetworks && !evmNetworks.length) {
        return (jsxRuntime.jsx("div", { "data-testid": 'EvmNetworkControl', className: classNames.classNames('evm-network-control__container evm-network-control__container--error', className), children: jsxRuntime.jsx(UnsupportedNetwork.UnsupportedNetwork, { showMsg: showNetworkName }) }));
    }
    if (!network) {
        return (jsxRuntime.jsx("div", { "data-testid": 'EvmNetworkControl', className: classNames.classNames('evm-network-control__container', className), children: jsxRuntime.jsx(NetworkControlSkeleton.NetworkControlSkeleton, {}) }));
    }
    if ((evmNetworks === null || evmNetworks === void 0 ? void 0 : evmNetworks.length) === 1) {
        const unsupportedNetworkClassName = classNames.classNames(className, 'evm-network-control__container', 'evm-network-control__container--error', {
            [activeClassName]: isOpen,
            'evm-network-control__container': Boolean(walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.supportsNetworkSwitching()),
        });
        if (!currentEvmNetwork) {
            return (jsxRuntime.jsxs("button", { "data-testid": 'EvmNetworkControl', type: 'button', onClick: () => setIsOpen(!isOpen), className: unsupportedNetworkClassName, children: [jsxRuntime.jsx(UnsupportedNetwork.UnsupportedNetwork, { showMsg: showNetworkName }), jsxRuntime.jsx(Icon.Icon, { color: 'text-primary', size: 'small', className: classNames.classNames('evm-network-control__arrow-icon', {
                            'evm-network-control__arrow-icon--active': isOpen,
                        }), children: jsxRuntime.jsx(stroke.ReactComponent, {}) })] }));
        }
        return (jsxRuntime.jsx("div", { "data-testid": 'EvmNetworkControl', onClick: () => network && setIsOpen(!isOpen), className: classNames.classNames('evm-network-control__container', {
                [activeClassName]: isOpen,
            }, className), children: currentEvmNetwork.name && ((_a = currentEvmNetwork.iconUrls) === null || _a === void 0 ? void 0 : _a[0]) ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Icon.Icon, { size: 'small', children: jsxRuntime.jsx("img", { src: currentEvmNetwork.iconUrls[0], alt: `${currentEvmNetwork.name} icon` }) }), showNetworkName && (jsxRuntime.jsx(Typography.Typography, { className: 'evm-network-control__network-name', as: 'span', variant: 'body_small', children: currentEvmNetwork.vanityName || currentEvmNetwork.name }))] })) : (jsxRuntime.jsx(UnsupportedNetwork.UnsupportedNetwork, { showMsg: showNetworkName })) }));
    }
    return (jsxRuntime.jsxs("button", { "data-testid": 'EvmNetworkControl', type: 'button', onClick: (e) => {
            e.stopPropagation();
            network && setIsOpen(!isOpen);
        }, className: classNames.classNames(className, {
            [activeClassName]: isOpen,
            'evm-network-control__container': Boolean(walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.supportsNetworkSwitching()),
            'evm-network-control__container--error': !(currentEvmNetwork === null || currentEvmNetwork === void 0 ? void 0 : currentEvmNetwork.name),
        }), children: [(currentEvmNetwork === null || currentEvmNetwork === void 0 ? void 0 : currentEvmNetwork.name) && ((_b = currentEvmNetwork === null || currentEvmNetwork === void 0 ? void 0 : currentEvmNetwork.iconUrls) === null || _b === void 0 ? void 0 : _b[0]) ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Icon.Icon, { size: 'small', children: jsxRuntime.jsx("img", { src: currentEvmNetwork.iconUrls[0], alt: `${currentEvmNetwork.name} icon` }) }), showNetworkName && (jsxRuntime.jsx(Typography.Typography, { className: 'evm-network-control__network-name', as: 'span', variant: 'body_small', children: currentEvmNetwork.vanityName || currentEvmNetwork.name }))] })) : (jsxRuntime.jsx(UnsupportedNetwork.UnsupportedNetwork, { showMsg: showNetworkName })), evmNetworks && evmNetworks.length > 1 && (jsxRuntime.jsx(Icon.Icon, { color: 'text-primary', size: 'small', className: classNames.classNames('evm-network-control__arrow-icon', {
                    'evm-network-control__arrow-icon--active': isOpen,
                }), children: jsxRuntime.jsx(stroke.ReactComponent, {}) }))] }));
};

exports.EvmNetworkControl = EvmNetworkControl;
