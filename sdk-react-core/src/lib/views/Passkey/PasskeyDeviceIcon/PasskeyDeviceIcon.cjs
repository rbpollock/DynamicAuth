'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@dynamic-labs/utils');
require('react');
require('../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../context/ErrorContext/ErrorContext.cjs');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var androidFaceId = require('../../../shared/assets/android-face-id.cjs');
var androidTouchId = require('../../../shared/assets/android-touch-id.cjs');
var iphoneFaceId = require('../../../shared/assets/iphone-face-id.cjs');
var iphoneTouchId = require('../../../shared/assets/iphone-touch-id.cjs');
require('@dynamic-labs/wallet-book');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../config/ApiEndpoint.cjs');
require('../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../../context/MockContext/MockContext.cjs');
require('../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../context/FooterAnimationContext/index.cjs');
require('../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../context/LoadingContext/LoadingContext.cjs');
var Icon = require('../../../components/Icon/Icon.cjs');
require('i18next');
require('../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../components/IconButton/IconButton.cjs');
require('../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../components/InlineWidget/InlineWidget.cjs');
require('../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../components/Popper/Popper/Popper.cjs');
require('../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const PasskeyDeviceIcon = () => {
    let IdIcon;
    if (utils.isIPhone()) {
        if (utils.isIPhone8OrEarlier()) {
            IdIcon = jsxRuntime.jsx(iphoneTouchId.ReactComponent, { "data-testid": 'iphone-8-icon' });
        }
        else {
            IdIcon = jsxRuntime.jsx(iphoneFaceId.ReactComponent, { "data-testid": 'iphone-icon' });
        }
    }
    if (utils.isAndroid()) {
        const androidVersion = utils.getAndroidVersion();
        if (androidVersion && androidVersion >= 9) {
            IdIcon = jsxRuntime.jsx(androidTouchId.ReactComponent, { "data-testid": 'android-9-icon' });
        }
        else {
            IdIcon = jsxRuntime.jsx(androidFaceId.ReactComponent, { "data-testid": 'android-icon' });
        }
    }
    if (!IdIcon) {
        return jsxRuntime.jsx(jsxRuntime.Fragment, {});
    }
    return jsxRuntime.jsx(Icon.Icon, { size: 'small', children: IdIcon });
};

exports.PasskeyDeviceIcon = PasskeyDeviceIcon;
