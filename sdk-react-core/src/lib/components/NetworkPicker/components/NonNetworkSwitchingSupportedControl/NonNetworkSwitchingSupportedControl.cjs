'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');
require('react');
require('@dynamic-labs/utils');
require('../../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
var getChainIcon = require('../../../../shared/utils/functions/chain/getChainIcon.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/iconic');
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
var useFetchChain = require('../../../../widgets/DynamicWidget/hooks/useFetchChain/useFetchChain.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../InlineWidget/InlineWidget.cjs');
require('../../../MenuList/Dropdown/Dropdown.cjs');
require('../../../Popper/Popper/Popper.cjs');
require('../../../Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var capitalize = require('../../../../shared/utils/functions/capitalize/capitalize.cjs');

const NonNetworkSwitchingSupportedControl = ({ walletConnector, className, showNetworkName = false, }) => {
    const [chain] = useFetchChain.useFetchChain(walletConnector);
    const chainName = (chain === null || chain === void 0 ? void 0 : chain.name) || '';
    const ChainIcon = getChainIcon.getChainIcon(chainName);
    return (jsxRuntime.jsxs("div", { "data-testid": 'NonNetworkSwitchingSupportedControl', className: classNames.classNames('non-network-switching-supported-control', className), children: [jsxRuntime.jsx(Icon.Icon, { size: 'small', children: (chain === null || chain === void 0 ? void 0 : chain.icon) ? (jsxRuntime.jsx("img", { src: chain.icon, alt: `${chain.name} icon` })) : (jsxRuntime.jsx(ChainIcon, {})) }), showNetworkName && (jsxRuntime.jsx(Typography.Typography, { className: classNames.classNames('non-network-switching-supported-control__network-name'), as: 'span', variant: 'body_small', children: capitalize.capitalize(chainName) })), jsxRuntime.jsx("span", {})] }));
};

exports.NonNetworkSwitchingSupportedControl = NonNetworkSwitchingSupportedControl;