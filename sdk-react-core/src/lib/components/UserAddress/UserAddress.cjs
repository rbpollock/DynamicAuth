'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
var shortenWalletAddress = require('../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
var useFetchNameService = require('../../widgets/DynamicWidget/hooks/useFetchNameService/useFetchNameService.cjs');
var StatusDot = require('../StatusDot/StatusDot.cjs');
var Typography = require('../Typography/Typography.cjs');
require('../../context/DynamicContext/DynamicContext.cjs');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('@dynamic-labs/multi-wallet');
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

const UserAddress = ({ userProfile, walletConnector }) => {
    var _a;
    const walletAddress = (_a = userProfile === null || userProfile === void 0 ? void 0 : userProfile.verifiedCredentials.find((verifiedCredential) => verifiedCredential.id === userProfile.lastVerifiedCredentialId)) === null || _a === void 0 ? void 0 : _a.address;
    const nameService = useFetchNameService.useFetchNameService(walletAddress);
    const { data: walletConnectorAddress } = usePromise.usePromise(() => walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.fetchPublicAddress(), {
        enabled: !userProfile && Boolean(walletConnector),
    });
    return (jsxRuntime.jsxs("div", { className: 'user-address__container', children: [jsxRuntime.jsx(StatusDot.StatusDot, { variant: 'green', containerClassName: 'user-address__status-dot' }), (nameService === null || nameService === void 0 ? void 0 : nameService.name) ? (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(Typography.Typography, { variant: 'numbers_big', color: 'primary', className: 'user-address', children: nameService.name }), jsxRuntime.jsx("div", { className: 'dynamic-widget-wallet-header__seperator' }), jsxRuntime.jsx(Typography.Typography, { variant: 'numbers_medium', color: 'secondary', className: 'user-address', children: shortenWalletAddress.shortenWalletAddress(walletAddress, 3, 3) })] })) : (jsxRuntime.jsx(Typography.Typography, { variant: 'numbers_big', color: 'primary', className: 'user-address', children: shortenWalletAddress.shortenWalletAddress(walletAddress || walletConnectorAddress, 4, 4) }))] }));
};

exports.UserAddress = UserAddress;
