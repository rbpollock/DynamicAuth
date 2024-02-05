'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('@dynamic-labs/utils');
require('../DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../CaptchaContext/CaptchaContext.cjs');
require('../../ErrorContext/ErrorContext.cjs');
require('../../ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('@dynamic-labs/wallet-book');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../AccessDeniedContext/AccessDeniedContext.cjs');
require('../../AccountExistsContext/AccountExistsContext.cjs');
require('../../../config/ApiEndpoint.cjs');
require('../../EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../ThemeContext/ThemeContext.cjs');
var usePrevious = require('../../../utils/hooks/usePrevious/usePrevious.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../MockContext/MockContext.cjs');
require('../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../UserWalletsContext/UserWalletsContext.cjs');
require('../../../components/Alert/Alert.cjs');
require('../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../components/IconButton/IconButton.cjs');
require('../../../components/InlineWidget/InlineWidget.cjs');
require('../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../components/Popper/Popper/Popper.cjs');
require('../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../FooterAnimationContext/index.cjs');
require('../../QrCodeContext/QrCodeContext.cjs');
require('../../WalletGroupContext/WalletGroupContext.cjs');
require('../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../LoadingContext/LoadingContext.cjs');
require('../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');

const useCustomerAuthFlowCallbacks = ({ eventsCallbacks, showAuthFlow, }) => {
    const prevShowAuthFlow = usePrevious.usePrevious(showAuthFlow);
    React.useEffect(() => {
        var _a, _b;
        if (!prevShowAuthFlow && showAuthFlow) {
            (_a = eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onAuthFlowOpen) === null || _a === void 0 ? void 0 : _a.call(eventsCallbacks);
        }
        else if (prevShowAuthFlow && !showAuthFlow) {
            (_b = eventsCallbacks === null || eventsCallbacks === void 0 ? void 0 : eventsCallbacks.onAuthFlowClose) === null || _b === void 0 ? void 0 : _b.call(eventsCallbacks);
        }
    }, [eventsCallbacks, prevShowAuthFlow, showAuthFlow]);
};

exports.useCustomerAuthFlowCallbacks = useCustomerAuthFlowCallbacks;
