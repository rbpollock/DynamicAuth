'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var iconic = require('@dynamic-labs/iconic');
require('react');
require('@dynamic-labs/utils');
require('../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
var CaptchaContext = require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
var PoweredByDynamic = require('../../components/PoweredByDynamic/PoweredByDynamic.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
var Typography = require('../../components/Typography/Typography.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../components/IconButton/IconButton.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var Captcha = require('../../components/Captcha/Captcha.cjs');

const CaptchaVerifyUser = () => {
    const { t } = reactI18next.useTranslation();
    const { captchaAuthState } = CaptchaContext.useCaptchaContext();
    const handleSuccess = (captchaToken) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _a;
        yield ((_a = captchaAuthState === null || captchaAuthState === void 0 ? void 0 : captchaAuthState.onCaptchaSuccess) === null || _a === void 0 ? void 0 : _a.call(captchaAuthState, captchaToken));
    });
    return (jsxRuntime.jsxs("div", { className: 'captcha-verify-user__container', children: [jsxRuntime.jsx(iconic.CaptchaWaveIcon, { className: 'captcha-verify-user__icon' }), jsxRuntime.jsx(Typography.Typography, { weight: 'medium', variant: 'title', color: 'primary', className: 'captcha-verify-user__title', copykey: 'dyn_captcha.verify_user_title', children: t('dyn_captcha.verify_user_title') }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', className: 'captcha-verify-user__subtitle', copykey: 'dyn_captcha.verify_user_subtitle', children: t('dyn_captcha.verify_user_subtitle') }), jsxRuntime.jsx(Captcha.Captcha, { handleSuccess: handleSuccess }), jsxRuntime.jsx(PoweredByDynamic.PoweredByDynamic, { classNameRoot: 'captcha-verify-user__dynamic-logo' })] }));
};

exports.CaptchaVerifyUser = CaptchaVerifyUser;