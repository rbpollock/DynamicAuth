'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('@dynamic-labs/iconic');
require('../../../../context/ViewContext/ViewContext.cjs');
require('react');
var threeDots = require('../../../../shared/assets/three-dots.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/wallet-book');
var shortenWalletAddress = require('../../../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
var DynamicWidgetContext = require('../../context/DynamicWidgetContext.cjs');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getActiveOauthCredential = require('../../../../utils/functions/getActiveOauthCredential/getActiveOauthCredential.cjs');
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
var AuthProviderIcon = require('../../../../components/AuthProviderIcon/AuthProviderIcon.cjs');
require('i18next');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../components/IconButton/IconButton.cjs');
var Icon = require('../../../../components/Icon/Icon.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
var shortenEmail = require('../../../../shared/utils/functions/shortenEmail/shortenEmail.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var useFetchNameService = require('../../hooks/useFetchNameService/useFetchNameService.cjs');

const AccountControl = ({ className }) => {
    const { primaryWallet, user, authToken } = useInternalDynamicContext.useInternalDynamicContext();
    const { isOpen, setIsOpen } = DynamicWidgetContext.useWidgetContext();
    const address = primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.address;
    const nameService = useFetchNameService.useFetchNameService(address);
    const renderUserIdentifier = () => {
        if (nameService === null || nameService === void 0 ? void 0 : nameService.name) {
            return nameService === null || nameService === void 0 ? void 0 : nameService.name;
        }
        if (address) {
            return shortenWalletAddress.shortenWalletAddress(address, 3, 3);
        }
        const oauthCredential = getActiveOauthCredential.getActiveOauthCredential(user);
        if (oauthCredential === null || oauthCredential === void 0 ? void 0 : oauthCredential.publicIdentifier) {
            return oauthCredential.publicIdentifier;
        }
        if (user === null || user === void 0 ? void 0 : user.email) {
            return shortenEmail.shortenEmail(user === null || user === void 0 ? void 0 : user.email);
        }
        return 'My Profile';
    };
    return (jsxRuntime.jsxs("button", { "data-testid": 'AccountControl', onClick: () => setIsOpen(!isOpen), className: classNames.classNames('account-control__container', {
            'account-control__container--active': isOpen,
            'account-control__container--multiwallet-disabled': true,
        }, className), children: [jsxRuntime.jsx(AuthProviderIcon.AuthProviderIcon, { jwt: authToken, iconSize: 16 }), jsxRuntime.jsx(Typography.Typography, { className: 'account-control__name', as: 'p', children: renderUserIdentifier() }), jsxRuntime.jsx(Icon.Icon, { className: 'account-control__icon', color: 'text-primary', children: jsxRuntime.jsx(threeDots.ReactComponent, {}) })] }));
};

exports.AccountControl = AccountControl;
