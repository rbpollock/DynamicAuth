import { __awaiter } from '../../../../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import 'react';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import { useCaptchaContext } from '../../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import '../../../../../utils/constants/colors.js';
import '../../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getProviderEnumForSocialSignInProvider } from '../../../../../utils/functions/getProviderEnumForSocialSignInProvider/getProviderEnumForSocialSignInProvider.js';
import '../../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../../config/ApiEndpoint.js';
import '../../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import { useSocialAuth } from '../../../../../utils/hooks/useSocialAuth/useSocialAuth.js';
import 'yup';
import 'react-i18next';
import '../../../../../context/MockContext/MockContext.js';
import '../../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../../../components/ShadowDOM/ShadowDOM.js';
import '../../../../../components/OverlayCard/OverlayCard.context.js';
import '../../../../../context/FooterAnimationContext/index.js';
import '../../../../../context/QrCodeContext/QrCodeContext.js';
import '../../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../../components/IconButton/IconButton.js';
import '../../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../../components/InlineWidget/InlineWidget.js';
import '../../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../../components/Popper/Popper/Popper.js';
import '../../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { SocialSignIn } from '../../../../../components/SocialSignIn/SocialSignIn.js';
import { useSocialRedirectContext } from '../../../../../context/SocialRedirectContext/SocialRedirectContext.js';

const DynamicSocialSignIn = ({ defaultProvider, numOfItemsToDisplay, collapsedLayout, }) => {
    const { setShowAuthFlow, projectSettings } = useInternalDynamicContext();
    const { setSocialProvider, socialProvider, enabledSocialProviders } = useSocialRedirectContext();
    const { setView, goToInitialView } = useViewContext();
    const { engageCaptcha } = useCaptchaContext();
    const { isProcessing, connectSocialAccount } = useSocialAuth({
        authMode: 'signin',
        onError: () => {
            goToInitialView();
        },
        onSettled: () => {
            setSocialProvider(undefined);
        },
        sessionTimeout: 10000,
    });
    const onSelectProvider = (provider) => {
        var _a;
        const providerEnum = getProviderEnumForSocialSignInProvider(provider);
        setSocialProvider(provider);
        if ((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.security.hCaptcha) === null || _a === void 0 ? void 0 : _a.enabled) {
            engageCaptcha({
                authMethod: 'social',
                onCaptchaSuccess: (captchaToken) => __awaiter(void 0, void 0, void 0, function* () {
                    setView('social-redirect-view');
                    setShowAuthFlow(true);
                    connectSocialAccount({
                        captchaToken,
                        provider: providerEnum,
                    });
                }),
            });
            return;
        }
        setView('social-redirect-view');
        setShowAuthFlow(true);
        connectSocialAccount({ provider: providerEnum });
    };
    return (jsx(SocialSignIn, { onSelectProvider: onSelectProvider, providers: enabledSocialProviders, selectedProvider: socialProvider, isLoading: isProcessing, testId: 'dynamic-social-sign-in', defaultProvider: defaultProvider, numOfItemsToDisplay: numOfItemsToDisplay, collapsedLayout: collapsedLayout }));
};

export { DynamicSocialSignIn };
