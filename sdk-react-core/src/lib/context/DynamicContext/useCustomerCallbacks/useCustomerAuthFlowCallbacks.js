import { useEffect } from 'react';
import '@dynamic-labs/utils';
import '../DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../CaptchaContext/CaptchaContext.js';
import '../../ErrorContext/ErrorContext.js';
import '../../ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '@dynamic-labs/wallet-book';
import '../../../utils/constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../AccessDeniedContext/AccessDeniedContext.js';
import '../../AccountExistsContext/AccountExistsContext.js';
import '../../../config/ApiEndpoint.js';
import '../../EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../ThemeContext/ThemeContext.js';
import { usePrevious } from '../../../utils/hooks/usePrevious/usePrevious.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../MockContext/MockContext.js';
import '../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../UserWalletsContext/UserWalletsContext.js';
import '../../../components/Alert/Alert.js';
import '../../../components/ShadowDOM/ShadowDOM.js';
import '../../../components/IconButton/IconButton.js';
import '../../../components/InlineWidget/InlineWidget.js';
import '../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../components/Popper/Popper/Popper.js';
import '../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../../../components/OverlayCard/OverlayCard.context.js';
import '../../FooterAnimationContext/index.js';
import '../../QrCodeContext/QrCodeContext.js';
import '../../WalletGroupContext/WalletGroupContext.js';
import '../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../LoadingContext/LoadingContext.js';
import '../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';

const useCustomerAuthFlowCallbacks = ({ eventsCallbacks, showAuthFlow, }) => {
    const prevShowAuthFlow = usePrevious(showAuthFlow);
    useEffect(() => {
        var _a, _b;
        if (!prevShowAuthFlow && showAuthFlow) {
            (_a = eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onAuthFlowOpen) === null || _a === void 0 ? void 0 : _a.call(eventsCallbacks);
        }
        else if (prevShowAuthFlow && !showAuthFlow) {
            (_b = eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onAuthFlowClose) === null || _b === void 0 ? void 0 : _b.call(eventsCallbacks);
        }
    }, [eventsCallbacks, prevShowAuthFlow, showAuthFlow]);
};

export { useCustomerAuthFlowCallbacks };
