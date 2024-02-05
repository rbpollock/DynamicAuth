'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var UserProfile = require('../../../../components/UserProfile/UserProfile.cjs');
var DynamicWidgetFooter = require('../../components/DynamicWidgetFooter/DynamicWidgetFooter.cjs');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');
require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var pencil = require('../../../../shared/assets/pencil.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getUserProfileFields = require('../../../../utils/functions/getUserProfileFields/getUserProfileFields.cjs');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../../../context/MockContext/MockContext.cjs');
require('../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
var DynamicWidgetContext = require('../../context/DynamicWidgetContext.cjs');
require('formik');
var Button = require('../../../../components/Button/Button.cjs');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
var LogoutButton = require('../../../../components/LogoutButton/LogoutButton.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const ProfileView = () => {
    const { setDynamicWidgetView } = DynamicWidgetContext.useWidgetContext();
    const { projectSettings } = useInternalDynamicContext.useInternalDynamicContext();
    // Allow to navigate to edit profile view when there are fields what can be edited
    const editableUserFields = getUserProfileFields.getEditableUserProfileFields(projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.kyc);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(UserProfile.UserProfile, { rootClassName: 'profile-view' }), jsxRuntime.jsx(DynamicWidgetFooter.DynamicWidgetFooter, { children: jsxRuntime.jsxs("div", { className: 'profile-view__footer', children: [editableUserFields.length > 0 && (jsxRuntime.jsx(Button.Button, { buttonClassName: 'dynamic-widget-footer__button', buttonVariant: 'tertiary', buttonPadding: 'none', typographyProps: {
                                color: 'secondary',
                                variant: 'button_tertiary',
                            }, onClick: () => setDynamicWidgetView('edit-profile'), startSlot: jsxRuntime.jsx(pencil.ReactComponent, {}), children: "Edit profile" })), jsxRuntime.jsx(LogoutButton.LogoutButton, { isTextButton: true, buttonClassName: classNames.classNames('dynamic-widget-footer__button', {
                                'dynamic-widget-footer__button-align-right': !(editableUserFields === null || editableUserFields === void 0 ? void 0 : editableUserFields.length),
                            }) })] }) })] }));
};

exports.ProfileView = ProfileView;
