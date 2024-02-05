import { jsx, Fragment } from 'react/jsx-runtime';
import { isIPhone, isIPhone8OrEarlier, isAndroid, getAndroidVersion } from '@dynamic-labs/utils';
import 'react';
import '../../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../context/CaptchaContext/CaptchaContext.js';
import '../../../context/ErrorContext/ErrorContext.js';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgAndroidFaceId } from '../../../shared/assets/android-face-id.js';
import { ReactComponent as SvgAndroidTouchId } from '../../../shared/assets/android-touch-id.js';
import { ReactComponent as SvgIphoneFaceId } from '../../../shared/assets/iphone-face-id.js';
import { ReactComponent as SvgIphoneTouchId } from '../../../shared/assets/iphone-touch-id.js';
import '@dynamic-labs/wallet-book';
import '../../../utils/constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../config/ApiEndpoint.js';
import '../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../../context/MockContext/MockContext.js';
import '../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../components/ShadowDOM/ShadowDOM.js';
import '../../../components/OverlayCard/OverlayCard.context.js';
import '../../../context/FooterAnimationContext/index.js';
import '../../../context/QrCodeContext/QrCodeContext.js';
import '../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../context/LoadingContext/LoadingContext.js';
import { Icon } from '../../../components/Icon/Icon.js';
import 'i18next';
import '../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../components/IconButton/IconButton.js';
import '../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../components/InlineWidget/InlineWidget.js';
import '../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../components/Popper/Popper/Popper.js';
import '../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const PasskeyDeviceIcon = () => {
    let IdIcon;
    if (isIPhone()) {
        if (isIPhone8OrEarlier()) {
            IdIcon = jsx(SvgIphoneTouchId, { "data-testid": 'iphone-8-icon' });
        }
        else {
            IdIcon = jsx(SvgIphoneFaceId, { "data-testid": 'iphone-icon' });
        }
    }
    if (isAndroid()) {
        const androidVersion = getAndroidVersion();
        if (androidVersion && androidVersion >= 9) {
            IdIcon = jsx(SvgAndroidTouchId, { "data-testid": 'android-9-icon' });
        }
        else {
            IdIcon = jsx(SvgAndroidFaceId, { "data-testid": 'android-icon' });
        }
    }
    if (!IdIcon) {
        return jsx(Fragment, {});
    }
    return jsx(Icon, { size: 'small', children: IdIcon });
};

export { PasskeyDeviceIcon };
