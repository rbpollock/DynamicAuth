import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { CaptchaWaveIcon } from '@dynamic-labs/iconic';
import 'react';
import '@dynamic-labs/utils';
import '../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import { useCaptchaContext } from '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
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
import { PoweredByDynamic } from '../../components/PoweredByDynamic/PoweredByDynamic.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import { Typography } from '../../components/Typography/Typography.js';
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
import { Captcha } from '../../components/Captcha/Captcha.js';

const CaptchaVerifyUser = () => {
    const { t } = useTranslation();
    const { captchaAuthState } = useCaptchaContext();
    const handleSuccess = (captchaToken) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        yield ((_a = captchaAuthState === null || captchaAuthState === void 0 ? void 0 : captchaAuthState.onCaptchaSuccess) === null || _a === void 0 ? void 0 : _a.call(captchaAuthState, captchaToken));
    });
    return (jsxs("div", { className: 'captcha-verify-user__container', children: [jsx(CaptchaWaveIcon, { className: 'captcha-verify-user__icon' }), jsx(Typography, { weight: 'medium', variant: 'title', color: 'primary', className: 'captcha-verify-user__title', copykey: 'dyn_captcha.verify_user_title', children: t('dyn_captcha.verify_user_title') }), jsx(Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', className: 'captcha-verify-user__subtitle', copykey: 'dyn_captcha.verify_user_subtitle', children: t('dyn_captcha.verify_user_subtitle') }), jsx(Captcha, { handleSuccess: handleSuccess }), jsx(PoweredByDynamic, { classNameRoot: 'captcha-verify-user__dynamic-logo' })] }));
};

export { CaptchaVerifyUser };