import { __awaiter } from '../../../../_virtual/_tslib.js';
import { useEffect } from 'react';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import { LAST_USED_WALLET } from '../../utils/constants/localStorage.js';
import '../../utils/constants/colors.js';
import { LocalStorage } from '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '@dynamic-labs/multi-wallet';
import { isTurnkeyEnabled } from '../../utils/functions/isTurnkeyEnabled/isTurnkeyEnabled.js';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { useEmbeddedWallet } from '../../utils/hooks/useEmbeddedWallet/useEmbeddedWallet.js';
import '../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../Alert/Alert.js';
import '../ShadowDOM/ShadowDOM.js';
import '../IconButton/IconButton.js';
import '../InlineWidget/InlineWidget.js';
import '../MenuList/Dropdown/Dropdown.js';
import '../Transition/ZoomTransition/ZoomTransition.js';
import '../Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../Transition/OpacityTransition/OpacityTransition.js';
import '../Popper/Popper/Popper.js';
import '../Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';

const SyncPasskeyFlow = () => {
    const { projectSettings, isProjectSettingsLoading, user, primaryWalletId } = useInternalDynamicContext();
    const lastUsedWallet = LocalStorage.getFromLS(LAST_USED_WALLET);
    const { createEmbeddedWallet } = useEmbeddedWallet();
    // this is used to trigger createEmbeddedWallet
    // when user didn't create a passkey after login and refresh page to skip it
    // we force them to created it before they can use the app
    // ** It must be an useEffect because some of the dependencies are async
    useEffect(() => {
        var _a, _b, _c, _d, _e;
        const createWallet = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield createEmbeddedWallet();
            }
            catch (error) {
                return;
            }
        });
        if (!user ||
            isProjectSettingsLoading ||
            !projectSettings ||
            !isTurnkeyEnabled(projectSettings) ||
            !((_a = projectSettings.sdk) === null || _a === void 0 ? void 0 : _a.automaticEmbeddedWalletCreation) ||
            // If embedded wallet is enabled and no security method is set don't call createWallet on refresh
            ((_e = (((_b = projectSettings.sdk) === null || _b === void 0 ? void 0 : _b.automaticEmbeddedWalletCreation) &&
                ((_d = (_c = projectSettings.sdk) === null || _c === void 0 ? void 0 : _c.embeddedWalletSecurityMethods) === null || _d === void 0 ? void 0 : _d.length))) !== null && _e !== void 0 ? _e : 0) === 0 ||
            primaryWalletId || //should not override primary wallet
            lastUsedWallet !== undefined //untill embedded wallet is generated it's undefined
        ) {
            return;
        }
        createWallet();
    }, [
        isProjectSettingsLoading,
        projectSettings,
        lastUsedWallet,
        primaryWalletId,
        user,
        createEmbeddedWallet,
    ]);
    return null;
};

export { SyncPasskeyFlow };
