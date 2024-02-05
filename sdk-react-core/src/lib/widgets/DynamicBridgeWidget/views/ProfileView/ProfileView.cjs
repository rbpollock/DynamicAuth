'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var UserProfile = require('../../../../components/UserProfile/UserProfile.cjs');
var DynamicWidgetFooter = require('../../../DynamicWidget/components/DynamicWidgetFooter/DynamicWidgetFooter.cjs');
var DynamicBridgeWidgetContext = require('../../context/DynamicBridgeWidgetContext/DynamicBridgeWidgetContext.cjs');
var LogoutButton = require('../../../../components/LogoutButton/LogoutButton.cjs');
var Button = require('../../../../components/Button/Button.cjs');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');
require('@dynamic-labs/iconic');
require('../../../../context/ViewContext/ViewContext.cjs');
require('react');
var pencil = require('../../../../shared/assets/pencil.cjs');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
var getUserProfileFields = require('../../../../utils/functions/getUserProfileFields/getUserProfileFields.cjs');

const ProfileView = () => {
    const { t } = reactI18next.useTranslation();
    const { setBridgeWidgetView } = DynamicBridgeWidgetContext.useDynamicBridgeWidgetContext();
    const { projectSettings } = useInternalDynamicContext.useInternalDynamicContext();
    // Allow to navigate to edit profile view when there are fields what can be edited
    const editableUserFields = getUserProfileFields.getEditableUserProfileFields(projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.kyc);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(UserProfile.UserProfile, { rootClassName: 'profile-view' }), jsxRuntime.jsx(DynamicWidgetFooter.DynamicWidgetFooter, { children: jsxRuntime.jsxs("div", { className: 'profile-view__footer', children: [editableUserFields.length > 0 && (jsxRuntime.jsx(Button.Button, { buttonClassName: 'dynamic-widget-footer__button', buttonVariant: 'tertiary', buttonPadding: 'none', typographyProps: {
                                color: 'secondary',
                                variant: 'button_tertiary',
                            }, onClick: () => setBridgeWidgetView('edit-profile'), startSlot: jsxRuntime.jsx(pencil.ReactComponent, {}), copykey: 'dyn_bridge.widget.edit_profile', children: t('dyn_bridge.widget.edit_profile') })), jsxRuntime.jsx(LogoutButton.LogoutButton, { isTextButton: true, buttonClassName: classNames.classNames('dynamic-widget-footer__button', {
                                'dynamic-widget-footer__button-align-right': !(editableUserFields === null || editableUserFields === void 0 ? void 0 : editableUserFields.length),
                            }) })] }) })] }));
};

exports.ProfileView = ProfileView;
exports["default"] = ProfileView;
