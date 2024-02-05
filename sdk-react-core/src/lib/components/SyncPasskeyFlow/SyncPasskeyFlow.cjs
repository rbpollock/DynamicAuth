'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var React = require('react');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
var localStorage$1 = require('../../utils/constants/localStorage.cjs');
require('../../utils/constants/colors.cjs');
var localStorage = require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('@dynamic-labs/multi-wallet');
var isTurnkeyEnabled = require('../../utils/functions/isTurnkeyEnabled/isTurnkeyEnabled.cjs');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var useEmbeddedWallet = require('../../utils/hooks/useEmbeddedWallet/useEmbeddedWallet.cjs');
require('../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../Alert/Alert.cjs');
require('../ShadowDOM/ShadowDOM.cjs');
require('../IconButton/IconButton.cjs');
require('../InlineWidget/InlineWidget.cjs');
require('../MenuList/Dropdown/Dropdown.cjs');
require('../Transition/ZoomTransition/ZoomTransition.cjs');
require('../Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../Transition/OpacityTransition/OpacityTransition.cjs');
require('../Popper/Popper/Popper.cjs');
require('../Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');

const SyncPasskeyFlow = () => {
    const { projectSettings, isProjectSettingsLoading, user, primaryWalletId } = useInternalDynamicContext.useInternalDynamicContext();
    const lastUsedWallet = localStorage.LocalStorage.getFromLS(localStorage$1.LAST_USED_WALLET);
    const { createEmbeddedWallet } = useEmbeddedWallet.useEmbeddedWallet();
    // this is used to trigger createEmbeddedWallet
    // when user didn't create a passkey after login and refresh page to skip it
    // we force them to created it before they can use the app
    // ** It must be an useEffect because some of the dependencies are async
    React.useEffect(() => {
        var _a, _b, _c, _d, _e;
        const createWallet = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
            !isTurnkeyEnabled.isTurnkeyEnabled(projectSettings) ||
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

exports.SyncPasskeyFlow = SyncPasskeyFlow;
