'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../context/ThemeContext/ThemeContext.cjs');
var useKYCFlag = require('../../../../utils/hooks/useKYCFlag/useKYCFlag.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../../../context/MockContext/MockContext.cjs');
var useUserUpdateRequest = require('../../../../utils/hooks/useUserUpdateRequest/useUserUpdateRequest.cjs');
require('../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
var DynamicWidgetContext = require('../../context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
var UserProfileForm = require('../../../../components/UserProfileForm/UserProfileForm.cjs');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');

const EditProfileView = ({ rootClassName, }) => {
    const { setView } = ViewContext.useViewContext();
    const { internalSetShowAuthFlow, multiWallet } = useInternalDynamicContext.useInternalDynamicContext();
    const { goToProfileView } = DynamicWidgetContext.useWidgetContext();
    const { updateUser } = useUserUpdateRequest.useUserUpdateRequestInternal({
        validationSchemaStripUnknown: true,
    });
    const onEditProfileFormSubmit = React.useCallback((formValues) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const { isEmailVerificationRequired } = yield updateUser(formValues);
        goToProfileView();
        if (isEmailVerificationRequired) {
            internalSetShowAuthFlow(true);
            setView('verify-email');
        }
    }), [goToProfileView, internalSetShowAuthFlow, setView, updateUser]);
    const isKYCEnabled = useKYCFlag.useKYCFlag();
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [!multiWallet && isKYCEnabled && (jsxRuntime.jsx(Typography.Typography, { weight: 'regular', color: 'secondary', variant: 'body_normal', className: 'dynamic-widget-edit-profile-view__profile-title', children: "My information" })), jsxRuntime.jsx(UserProfileForm.UserProfileForm, { formClassName: rootClassName, onEditProfileSubmit: onEditProfileFormSubmit, onEditProfileCancel: goToProfileView })] }));
};

exports.EditProfileView = EditProfileView;
