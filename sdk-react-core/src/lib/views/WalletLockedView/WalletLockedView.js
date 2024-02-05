import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { pixelToRem } from '../../utils/functions/pixelToRem/pixelToRem.js';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../components/Typography/Typography.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import { IconWithSpinner, iconRatio } from '../../components/IconWithSpinner/IconWithSpinner.js';
import { Divider } from '../../components/Divider/Divider.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import { ErrorContainer } from '../../components/ErrorContainer/ErrorContainer.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { Button } from '../../components/Button/Button.js';
import '../../components/IconButton/IconButton.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { TextButton } from '../../components/TextButton/TextButton.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const iconSize = 64;
const WalletLockedView = () => {
    const { handleLogOut, primaryWallet, setShowAuthFlow, appName, authToken } = useInternalDynamicContext();
    const { t } = useTranslation();
    useEffect(() => {
        // when there is no valid session, we want to log user out
        if (!authToken) {
            handleLogOut();
        }
    }, [authToken, handleLogOut]);
    if (!primaryWallet) {
        return null;
    }
    const handleConnectWallet = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield primaryWallet.connector.connect();
            setShowAuthFlow(false);
        }
        catch (_a) {
            logger.info('could not connect wallet');
        }
    });
    const icon = (jsx(WalletIcon, { walletKey: primaryWallet.connector.key, style: {
            height: pixelToRem(iconSize * iconRatio),
            width: pixelToRem(iconSize * iconRatio),
        } }));
    return (jsxs("div", { "data-testid": 'wallet-locked-view', children: [jsx(ErrorContainer, { withIcon: false, variant: 'success', className: 'wallet-locked-view__error-container', copykey: 'dyn_wallet_locked.connect_continue', children: t('dyn_wallet_locked.connect_continue') }), jsxs("div", { className: 'wallet-locked-view__content', children: [jsx(IconWithSpinner, { Icon: icon, iconSize: iconSize, className: 'wallet-locked-view__icon', isSpinning: true }), jsx(Typography, { variant: 'title', color: 'primary', weight: 'medium', className: 'wallet-locked-view__title', copykey: 'dyn_wallet_locked.title', children: t('dyn_wallet_locked.title') }), jsxs(Typography, { variant: 'body_normal', color: 'secondary', weight: 'regular', copykey: 'dyn_wallet_locked.subtitle', children: [t('dyn_wallet_locked.subtitle'), appName, "."] }), jsx(Button, { onClick: () => handleConnectWallet(), buttonClassName: 'wallet-locked-view__button', copykey: 'dyn_wallet_locked.connect', children: t('dyn_wallet_locked.connect') }), jsx(Divider, { text: 'Or' }), jsx(TextButton, { className: 'wallet-locked-view__log-out', onClick: handleLogOut, copykey: 'dyn_wallet_locked.logout', children: t('dyn_wallet_locked.logout') })] })] }));
};

export { WalletLockedView };
