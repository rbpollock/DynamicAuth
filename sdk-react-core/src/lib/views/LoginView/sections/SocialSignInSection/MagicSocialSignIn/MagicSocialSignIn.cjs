'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
var CaptchaContext = require('../../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
require('../../../../../utils/constants/colors.cjs');
require('../../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../../config/ApiEndpoint.cjs');
require('../../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var useMutation = require('../../../../../utils/hooks/useMutation/useMutation.cjs');
require('../../../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../../../../context/MockContext/MockContext.cjs');
require('../../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../../context/FooterAnimationContext/index.cjs');
require('../../../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../../components/IconButton/IconButton.cjs');
require('../../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../../components/Popper/Popper/Popper.cjs');
require('../../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var SocialSignIn = require('../../../../../components/SocialSignIn/SocialSignIn.cjs');
var SocialRedirectContext = require('../../../../../context/SocialRedirectContext/SocialRedirectContext.cjs');

const MagicSocialSignIn = ({ defaultProvider, numOfItemsToDisplay, collapsedLayout, }) => {
    const { projectSettings } = useInternalDynamicContext.useInternalDynamicContext();
    const { socialProvider, setSocialProvider, socialWalletConnector, enabledSocialProviders, } = SocialRedirectContext.useSocialRedirectContext();
    const { engageCaptcha, setCaptchaTokenInLS } = CaptchaContext.useCaptchaContext();
    const { mutate: onClickProvider, isLoading } = useMutation.useMutation((provider) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if ((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.security.hCaptcha) === null || _a === void 0 ? void 0 : _a.enabled) {
            engageCaptcha({
                authMethod: 'social',
                onCaptchaSuccess: (captchaToken) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
                    setCaptchaTokenInLS(captchaToken);
                    setSocialProvider(provider);
                    yield (socialWalletConnector === null || socialWalletConnector === void 0 ? void 0 : socialWalletConnector.endSession());
                    return socialWalletConnector === null || socialWalletConnector === void 0 ? void 0 : socialWalletConnector.connect(provider);
                }),
            });
            return;
        }
        setSocialProvider(provider);
        yield (socialWalletConnector === null || socialWalletConnector === void 0 ? void 0 : socialWalletConnector.endSession());
        return socialWalletConnector === null || socialWalletConnector === void 0 ? void 0 : socialWalletConnector.connect(provider);
    }));
    return (jsxRuntime.jsx(SocialSignIn.SocialSignIn, { onSelectProvider: onClickProvider, providers: enabledSocialProviders, selectedProvider: socialProvider, isLoading: isLoading, testId: 'magic-social-sign-in', defaultProvider: defaultProvider, numOfItemsToDisplay: numOfItemsToDisplay, collapsedLayout: collapsedLayout }));
};

exports.MagicSocialSignIn = MagicSocialSignIn;
