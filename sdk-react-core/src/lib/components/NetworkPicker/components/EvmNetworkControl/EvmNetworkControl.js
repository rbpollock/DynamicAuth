import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { parseChainId } from '@dynamic-labs/utils';
import '@dynamic-labs/iconic';
import '../../../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgStroke } from '../../../../shared/assets/stroke.js';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';
import '../../../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
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
import '../../../Transition/ZoomTransition/ZoomTransition.js';
import '../../../Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../Transition/OpacityTransition/OpacityTransition.js';
import '../../../ShadowDOM/ShadowDOM.js';
import '../../../OverlayCard/OverlayCard.context.js';
import '../../../../context/FooterAnimationContext/index.js';
import '../../../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../../Typography/Typography.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import { Icon } from '../../../Icon/Icon.js';
import 'i18next';
import '../../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../IconButton/IconButton.js';
import '../../../Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../InlineWidget/InlineWidget.js';
import '../../../MenuList/Dropdown/Dropdown.js';
import '../../../Popper/Popper/Popper.js';
import '../../../Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { NetworkControlSkeleton } from '../NetworkControlSkeleton/NetworkControlSkeleton.js';
import { UnsupportedNetwork } from '../UnsupportedNetwork/UnsupportedNetwork.js';

const EvmNetworkControl = ({ evmNetworks, className = '', activeClassName = '', network, walletConnector, isOpen, setIsOpen, showNetworkName = false, }) => {
    var _a, _b;
    const currentEvmNetwork = evmNetworks === null || evmNetworks === void 0 ? void 0 : evmNetworks.find((element) => network && element.chainId === parseChainId(network));
    if (evmNetworks && !evmNetworks.length) {
        return (jsx("div", { "data-testid": 'EvmNetworkControl', className: classNames('evm-network-control__container evm-network-control__container--error', className), children: jsx(UnsupportedNetwork, { showMsg: showNetworkName }) }));
    }
    if (!network) {
        return (jsx("div", { "data-testid": 'EvmNetworkControl', className: classNames('evm-network-control__container', className), children: jsx(NetworkControlSkeleton, {}) }));
    }
    if ((evmNetworks === null || evmNetworks === void 0 ? void 0 : evmNetworks.length) === 1) {
        const unsupportedNetworkClassName = classNames(className, 'evm-network-control__container', 'evm-network-control__container--error', {
            [activeClassName]: isOpen,
            'evm-network-control__container': Boolean(walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.supportsNetworkSwitching()),
        });
        if (!currentEvmNetwork) {
            return (jsxs("button", { "data-testid": 'EvmNetworkControl', type: 'button', onClick: () => setIsOpen(!isOpen), className: unsupportedNetworkClassName, children: [jsx(UnsupportedNetwork, { showMsg: showNetworkName }), jsx(Icon, { color: 'text-primary', size: 'small', className: classNames('evm-network-control__arrow-icon', {
                            'evm-network-control__arrow-icon--active': isOpen,
                        }), children: jsx(SvgStroke, {}) })] }));
        }
        return (jsx("div", { "data-testid": 'EvmNetworkControl', onClick: () => network && setIsOpen(!isOpen), className: classNames('evm-network-control__container', {
                [activeClassName]: isOpen,
            }, className), children: currentEvmNetwork.name && ((_a = currentEvmNetwork.iconUrls) === null || _a === void 0 ? void 0 : _a[0]) ? (jsxs(Fragment, { children: [jsx(Icon, { size: 'small', children: jsx("img", { src: currentEvmNetwork.iconUrls[0], alt: `${currentEvmNetwork.name} icon` }) }), showNetworkName && (jsx(Typography, { className: 'evm-network-control__network-name', as: 'span', variant: 'body_small', children: currentEvmNetwork.vanityName || currentEvmNetwork.name }))] })) : (jsx(UnsupportedNetwork, { showMsg: showNetworkName })) }));
    }
    return (jsxs("button", { "data-testid": 'EvmNetworkControl', type: 'button', onClick: (e) => {
            e.stopPropagation();
            network && setIsOpen(!isOpen);
        }, className: classNames(className, {
            [activeClassName]: isOpen,
            'evm-network-control__container': Boolean(walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.supportsNetworkSwitching()),
            'evm-network-control__container--error': !(currentEvmNetwork === null || currentEvmNetwork === void 0 ? void 0 : currentEvmNetwork.name),
        }), children: [(currentEvmNetwork === null || currentEvmNetwork === void 0 ? void 0 : currentEvmNetwork.name) && ((_b = currentEvmNetwork === null || currentEvmNetwork === void 0 ? void 0 : currentEvmNetwork.iconUrls) === null || _b === void 0 ? void 0 : _b[0]) ? (jsxs(Fragment, { children: [jsx(Icon, { size: 'small', children: jsx("img", { src: currentEvmNetwork.iconUrls[0], alt: `${currentEvmNetwork.name} icon` }) }), showNetworkName && (jsx(Typography, { className: 'evm-network-control__network-name', as: 'span', variant: 'body_small', children: currentEvmNetwork.vanityName || currentEvmNetwork.name }))] })) : (jsx(UnsupportedNetwork, { showMsg: showNetworkName })), evmNetworks && evmNetworks.length > 1 && (jsx(Icon, { color: 'text-primary', size: 'small', className: classNames('evm-network-control__arrow-icon', {
                    'evm-network-control__arrow-icon--active': isOpen,
                }), children: jsx(SvgStroke, {}) }))] }));
};

export { EvmNetworkControl };
