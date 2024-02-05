import { jsx } from 'react/jsx-runtime';
import { useWalletBookContext, WalletIcon, getWalletPrimaryColor } from '@dynamic-labs/wallet-book';
import { useThemeContext } from '../../context/ThemeContext/ThemeContext.js';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import { useQrCodeContext } from '../../context/QrCodeContext/QrCodeContext.js';
import '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '../../context/ViewContext/ViewContext.js';
import 'react';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { pixelToRem } from '../../utils/functions/pixelToRem/pixelToRem.js';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '@dynamic-labs/types';
import { useTimeout } from '../../utils/hooks/useTimeout/useTimeout.js';
import 'yup';
import 'react-i18next';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../../components/Alert/Alert.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/IconButton/IconButton.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { QrCodeContainer } from './QrCodeContainer/QrCodeContainer.js';

const QrCodeView = () => {
    var _a;
    const { theme: { theme }, } = useThemeContext();
    const { name } = theme;
    const { setShowQrCodeMessage, showQrCodeMessage } = useQrCodeContext();
    const { qrcodeUri, desktopUri, selectedWalletConnector: walletConnector, } = useInternalDynamicContext();
    const { walletBook } = useWalletBookContext();
    useTimeout(() => setShowQrCodeMessage(true), 5000);
    if (!walletConnector) {
        return null;
    }
    const icon = (jsx(WalletIcon, { walletKey: walletConnector.key, style: { height: pixelToRem(32), width: pixelToRem(32) } }));
    return (jsx("div", { className: 'qr-code-view__container', "data-testid": 'qr-code-view', children: jsx(QrCodeContainer, { showQrCodeMessage: showQrCodeMessage, desktopUri: desktopUri, accentColor: 
            /* istanbul ignore next */
            name === 'dark'
                ? theme.colors.textPrimary
                : (_a = getWalletPrimaryColor(walletBook, walletConnector.key)) !== null && _a !== void 0 ? _a : '', walletKey: walletConnector.key, walletName: walletConnector.name, qrcodeValue: qrcodeUri, Icon: icon, showCopyToClipboardButton: walletConnector.isWalletConnect }) }));
};

export { QrCodeView };
