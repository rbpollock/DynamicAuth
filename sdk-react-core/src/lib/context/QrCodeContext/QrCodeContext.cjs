'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('@dynamic-labs/utils');
require('../DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../CaptchaContext/CaptchaContext.cjs');
require('../ErrorContext/ErrorContext.cjs');
require('../ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../AccessDeniedContext/AccessDeniedContext.cjs');
require('../AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var useDefaultQrCode = require('../../utils/hooks/useDefaultQrCode/useDefaultQrCode.cjs');
require('../ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../UserWalletsContext/UserWalletsContext.cjs');
require('../../components/Alert/Alert.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/IconButton/IconButton.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../FooterAnimationContext/index.cjs');
require('../WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../LoadingContext/LoadingContext.cjs');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');

const QrCodeContext = React.createContext(undefined);
const QrCodeContextProvider = ({ children, }) => {
    const { setShowQrCodeImage, setShowQrCodeMessage, showQrCodeImage, showQrCodeMessage, } = useDefaultQrCode.useDefaultQrCode();
    const value = {
        setShowQrCodeImage,
        setShowQrCodeMessage,
        showQrCodeImage,
        showQrCodeMessage,
    };
    return (jsxRuntime.jsx(QrCodeContext.Provider, { value: value, children: children }));
};
const useQrCodeContext = () => {
    const context = React.useContext(QrCodeContext);
    if (context === undefined) {
        throw new Error('usage of useQrCodeContext not wrapped in `QrCodeContextProvider`.');
    }
    return context;
};

exports.QrCodeContext = QrCodeContext;
exports.QrCodeContextProvider = QrCodeContextProvider;
exports.useQrCodeContext = useQrCodeContext;
