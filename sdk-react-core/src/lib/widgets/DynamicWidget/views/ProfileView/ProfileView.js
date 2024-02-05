import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { UserProfile } from '../../../../components/UserProfile/UserProfile.js';
import { DynamicWidgetFooter } from '../../components/DynamicWidgetFooter/DynamicWidgetFooter.js';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';
import 'react';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgPencil } from '../../../../shared/assets/pencil.js';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getEditableUserProfileFields } from '../../../../utils/functions/getUserProfileFields/getUserProfileFields.js';
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../config/ApiEndpoint.js';
import '../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../../../context/MockContext/MockContext.js';
import '../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../../components/ShadowDOM/ShadowDOM.js';
import '../../../../components/OverlayCard/OverlayCard.context.js';
import '../../../../context/FooterAnimationContext/index.js';
import '../../../../context/QrCodeContext/QrCodeContext.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import { useWidgetContext } from '../../context/DynamicWidgetContext.js';
import 'formik';
import { Button } from '../../../../components/Button/Button.js';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import { LogoutButton } from '../../../../components/LogoutButton/LogoutButton.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const ProfileView = () => {
    const { setDynamicWidgetView } = useWidgetContext();
    const { projectSettings } = useInternalDynamicContext();
    // Allow to navigate to edit profile view when there are fields what can be edited
    const editableUserFields = getEditableUserProfileFields(projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.kyc);
    return (jsxs(Fragment, { children: [jsx(UserProfile, { rootClassName: 'profile-view' }), jsx(DynamicWidgetFooter, { children: jsxs("div", { className: 'profile-view__footer', children: [editableUserFields.length > 0 && (jsx(Button, { buttonClassName: 'dynamic-widget-footer__button', buttonVariant: 'tertiary', buttonPadding: 'none', typographyProps: {
                                color: 'secondary',
                                variant: 'button_tertiary',
                            }, onClick: () => setDynamicWidgetView('edit-profile'), startSlot: jsx(SvgPencil, {}), children: "Edit profile" })), jsx(LogoutButton, { isTextButton: true, buttonClassName: classNames('dynamic-widget-footer__button', {
                                'dynamic-widget-footer__button-align-right': !(editableUserFields === null || editableUserFields === void 0 ? void 0 : editableUserFields.length),
                            }) })] }) })] }));
};

export { ProfileView };
