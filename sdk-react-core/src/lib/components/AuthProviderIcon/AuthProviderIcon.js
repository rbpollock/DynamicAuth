import { jsx } from 'react/jsx-runtime';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import { isEmailOTPWalletConnector, isSocialWalletConnector, isEmbeddedConnector, isSmartWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { SignInWithEmailIcon } from '@dynamic-labs/iconic';
import '@dynamic-labs/sdk-api';
import { logger } from '../../shared/logger.js';
import '../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgEmbeddedWalletIcon } from '../../shared/assets/embedded-wallet-icon.js';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getReferencedAccount } from '../../utils/functions/getReferencedAccount/getReferencedAccount.js';
import { pixelToRem } from '../../utils/functions/pixelToRem/pixelToRem.js';
import { IconWithStatus } from '../IconWithStatus/IconWithStatus.js';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import { WalletIconWithStatus } from '../../widgets/DynamicWidget/components/WalletIconWithStatus/WalletIconWithStatus.js';
import { useAccessDeniedContext } from '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { useFindSocialIcon } from '../../utils/hooks/useFindSocialIcon/useFindSocialIcon.js';
import '../../context/ThemeContext/ThemeContext.js';
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

const getMagicEmailOrSocialIcon = ({ findSocialIcon, wallet, jwt, }) => {
    if (isEmailOTPWalletConnector(wallet.connector)) {
        return SignInWithEmailIcon;
    }
    if (isSocialWalletConnector(wallet.connector)) {
        const socialAccountDataForWallet = getReferencedAccount(jwt, wallet.id);
        if (!socialAccountDataForWallet ||
            !socialAccountDataForWallet.oauthProvider) {
            return SignInWithEmailIcon;
        }
        const { oauthProvider } = socialAccountDataForWallet;
        try {
            const MagicSocialWalletIcon = findSocialIcon(oauthProvider);
            return MagicSocialWalletIcon;
        }
        catch (err) {
            logger.error(err);
        }
    }
    if (isEmbeddedConnector(wallet.connector) ||
        isSmartWalletConnector(wallet.connector)) {
        return SvgEmbeddedWalletIcon;
    }
    return null;
};
const AuthProviderIcon = ({ jwt, iconSize = 64, showStatus, wallet, }) => {
    const { primaryWallet, selectedWalletConnector } = useInternalDynamicContext();
    const { deniedOauthProvider, deniedAddress } = useAccessDeniedContext();
    const findSocialIcon = useFindSocialIcon();
    // when access is denied we don't have jwt set, so we're getting this value out of useAccessDeniedContext
    if (deniedOauthProvider) {
        const MagicSocialWalletIcon = findSocialIcon(deniedOauthProvider);
        if (!MagicSocialWalletIcon) {
            return null;
        }
        return (jsx(MagicSocialWalletIcon, { style: {
                height: pixelToRem(iconSize),
                width: pixelToRem(iconSize),
            } }));
    }
    // it means that user tried to login with actual wallet and no magic social and failed to go through the access list
    if (deniedAddress) {
        return (jsx(WalletIcon, { walletKey: selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.key, style: { height: pixelToRem(iconSize), width: pixelToRem(iconSize) } }));
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
        return showStatus ? (jsx(IconWithStatus, { iconSize: iconSize, Icon: MagicEmailOrSocialIcon, variant: walletForIcon.connected ? 'green' : 'red' })) : (jsx(MagicEmailOrSocialIcon, { style: { height: pixelToRem(iconSize), width: pixelToRem(iconSize) } }));
    }
    return showStatus ? (jsx(WalletIconWithStatus, { iconSize: iconSize, walletKey: walletForIcon.connector.key, connected: walletForIcon.connected, variant: 'secondary' })) : (jsx(WalletIcon, { walletKey: walletForIcon.connector.key, style: { height: pixelToRem(iconSize), width: pixelToRem(iconSize) } }));
};

export { AuthProviderIcon };
