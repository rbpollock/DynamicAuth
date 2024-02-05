'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var walletBook = require('@dynamic-labs/wallet-book');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var iconic = require('@dynamic-labs/iconic');
require('@dynamic-labs/sdk-api');
var logger = require('../../shared/logger.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('react');
var embeddedWalletIcon = require('../../shared/assets/embedded-wallet-icon.cjs');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getReferencedAccount = require('../../utils/functions/getReferencedAccount/getReferencedAccount.cjs');
var pixelToRem = require('../../utils/functions/pixelToRem/pixelToRem.cjs');
var IconWithStatus = require('../IconWithStatus/IconWithStatus.cjs');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
var WalletIconWithStatus = require('../../widgets/DynamicWidget/components/WalletIconWithStatus/WalletIconWithStatus.cjs');
var AccessDeniedContext = require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var useFindSocialIcon = require('../../utils/hooks/useFindSocialIcon/useFindSocialIcon.cjs');
require('../../context/ThemeContext/ThemeContext.cjs');
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

const getMagicEmailOrSocialIcon = ({ findSocialIcon, wallet, jwt, }) => {
    if (walletConnectorCore.isEmailOTPWalletConnector(wallet.connector)) {
        return iconic.SignInWithEmailIcon;
    }
    if (walletConnectorCore.isSocialWalletConnector(wallet.connector)) {
        const socialAccountDataForWallet = getReferencedAccount.getReferencedAccount(jwt, wallet.id);
        if (!socialAccountDataForWallet ||
            !socialAccountDataForWallet.oauthProvider) {
            return iconic.SignInWithEmailIcon;
        }
        const { oauthProvider } = socialAccountDataForWallet;
        try {
            const MagicSocialWalletIcon = findSocialIcon(oauthProvider);
            return MagicSocialWalletIcon;
        }
        catch (err) {
            logger.logger.error(err);
        }
    }
    if (walletConnectorCore.isEmbeddedConnector(wallet.connector) ||
        walletConnectorCore.isSmartWalletConnector(wallet.connector)) {
        return embeddedWalletIcon.ReactComponent;
    }
    return null;
};
const AuthProviderIcon = ({ jwt, iconSize = 64, showStatus, wallet, }) => {
    const { primaryWallet, selectedWalletConnector } = useInternalDynamicContext.useInternalDynamicContext();
    const { deniedOauthProvider, deniedAddress } = AccessDeniedContext.useAccessDeniedContext();
    const findSocialIcon = useFindSocialIcon.useFindSocialIcon();
    // when access is denied we don't have jwt set, so we're getting this value out of useAccessDeniedContext
    if (deniedOauthProvider) {
        const MagicSocialWalletIcon = findSocialIcon(deniedOauthProvider);
        if (!MagicSocialWalletIcon) {
            return null;
        }
        return (jsxRuntime.jsx(MagicSocialWalletIcon, { style: {
                height: pixelToRem.pixelToRem(iconSize),
                width: pixelToRem.pixelToRem(iconSize),
            } }));
    }
    // it means that user tried to login with actual wallet and no magic social and failed to go through the access list
    if (deniedAddress) {
        return (jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.key, style: { height: pixelToRem.pixelToRem(iconSize), width: pixelToRem.pixelToRem(iconSize) } }));
    }
    const walletForIcon = wallet ? wallet : primaryWallet;
    if (!walletForIcon) {
        return null;
    }
    const MagicEmailOrSocialIcon = getMagicEmailOrSocialIcon({
        findSocialIcon,
        jwt,
        wallet: walletForIcon,
    });
    if (MagicEmailOrSocialIcon) {
        return showStatus ? (jsxRuntime.jsx(IconWithStatus.IconWithStatus, { iconSize: iconSize, Icon: MagicEmailOrSocialIcon, variant: walletForIcon.connected ? 'green' : 'red' })) : (jsxRuntime.jsx(MagicEmailOrSocialIcon, { style: { height: pixelToRem.pixelToRem(iconSize), width: pixelToRem.pixelToRem(iconSize) } }));
    }
    return showStatus ? (jsxRuntime.jsx(WalletIconWithStatus.WalletIconWithStatus, { iconSize: iconSize, walletKey: walletForIcon.connector.key, connected: walletForIcon.connected, variant: 'secondary' })) : (jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: walletForIcon.connector.key, style: { height: pixelToRem.pixelToRem(iconSize), width: pixelToRem.pixelToRem(iconSize) } }));
};

exports.AuthProviderIcon = AuthProviderIcon;
