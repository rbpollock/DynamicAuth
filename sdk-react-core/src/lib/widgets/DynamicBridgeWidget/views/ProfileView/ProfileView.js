import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { UserProfile } from '../../../../components/UserProfile/UserProfile.js';
import { DynamicWidgetFooter } from '../../../DynamicWidget/components/DynamicWidgetFooter/DynamicWidgetFooter.js';
import { useDynamicBridgeWidgetContext } from '../../context/DynamicBridgeWidgetContext/DynamicBridgeWidgetContext.js';
import { LogoutButton } from '../../../../components/LogoutButton/LogoutButton.js';
import { Button } from '../../../../components/Button/Button.js';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';
import '@dynamic-labs/iconic';
import '../../../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgPencil } from '../../../../shared/assets/pencil.js';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import { getEditableUserProfileFields } from '../../../../utils/functions/getUserProfileFields/getUserProfileFields.js';

const ProfileView = () => {
    const { t } = useTranslation();
    const { setBridgeWidgetView } = useDynamicBridgeWidgetContext();
    const { projectSettings } = useInternalDynamicContext();
    // Allow to navigate to edit profile view when there are fields what can be edited
    const editableUserFields = getEditableUserProfileFields(projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.kyc);
    return (jsxs(Fragment, { children: [jsx(UserProfile, { rootClassName: 'profile-view' }), jsx(DynamicWidgetFooter, { children: jsxs("div", { className: 'profile-view__footer', children: [editableUserFields.length > 0 && (jsx(Button, { buttonClassName: 'dynamic-widget-footer__button', buttonVariant: 'tertiary', buttonPadding: 'none', typographyProps: {
                                color: 'secondary',
                                variant: 'button_tertiary',
                            }, onClick: () => setBridgeWidgetView('edit-profile'), startSlot: jsx(SvgPencil, {}), copykey: 'dyn_bridge.widget.edit_profile', children: t('dyn_bridge.widget.edit_profile') })), jsx(LogoutButton, { isTextButton: true, buttonClassName: classNames('dynamic-widget-footer__button', {
                                'dynamic-widget-footer__button-align-right': !(editableUserFields === null || editableUserFields === void 0 ? void 0 : editableUserFields.length),
                            }) })] }) })] }));
};

export { ProfileView, ProfileView as default };
