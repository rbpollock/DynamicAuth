'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
var shortenWalletAddress = require('../../../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
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
require('../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../context/DynamicWidgetContext.cjs');
var DotsMenu = require('../DotsMenu/DotsMenu.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const UnknownWalletInformation = ({ address, }) => {
    const { handleLogOut } = useInternalDynamicContext.useInternalDynamicContext();
    const options = [
        {
            Icon: null,
            callback: () => address && navigator.clipboard.writeText(address),
            hide: !address,
            text: 'Copy wallet address',
        },
        {
            Icon: null,
            callback: handleLogOut,
            text: 'Disconnect',
        },
    ];
    return (jsxRuntime.jsx("div", { className: 'unknown-wallet-information-container', children: jsxRuntime.jsx("div", { className: 'unknown-wallet-information', children: jsxRuntime.jsx("div", { className: 'unknown-wallet-information__header', children: jsxRuntime.jsx("div", { className: 'unknown-wallet-information__details', children: jsxRuntime.jsxs("div", { className: 'unknown-wallet-information__actions-container', children: [jsxRuntime.jsx("div", { children: jsxRuntime.jsx(Typography.Typography, { className: 'unknown-wallet-information__address', weight: 'medium', variant: 'body_normal', color: 'primary', children: shortenWalletAddress.shortenWalletAddress(address, 4, 4) }) }), jsxRuntime.jsx(DotsMenu.DotsMenu, { options: options, buttonClassName: 'unknown-wallet-information__dots-menu', buttonClassNameWithOpenMenu: 'unknown-wallet-information__dots-menu' })] }) }) }) }) }));
};

exports.UnknownWalletInformation = UnknownWalletInformation;
