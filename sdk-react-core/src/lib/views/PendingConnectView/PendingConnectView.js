import { jsx, jsxs } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { isMobile } from '@dynamic-labs/utils';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import 'react';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
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
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../components/IconButton/IconButton.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const PendingConnectView = () => {
    const { selectedWalletConnector: walletConnector } = useInternalDynamicContext();
    const { t } = useTranslation();
    const iconSize = 94;
    const icon = (jsx(WalletIcon, { walletKey: walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.key, style: {
            height: pixelToRem(iconSize * iconRatio),
            width: pixelToRem(iconSize * iconRatio),
        } }));
    return (jsxs("div", { className: 'pending-connect__container', children: [jsx(IconWithSpinner, { Icon: icon, iconSize: iconSize, isSpinning: true, className: 'pending-connect__icon-with-spinner' }), jsx(Typography, { variant: 'body_normal', weight: 'regular', className: 'pending-connect__copy-text', copykey: isMobile()
                    ? 'dyn_pending_connection.mobile'
                    : 'dyn_pending_connection.computer', children: isMobile()
                    ? t('dyn_pending_connection.mobile')
                    : t('dyn_pending_connection.computer') })] }));
};

export { PendingConnectView };
