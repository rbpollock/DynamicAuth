import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import 'react';
import '@dynamic-labs/utils';
import '../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgClose } from '../../shared/assets/close.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import { PoweredByDynamic } from '../../components/PoweredByDynamic/PoweredByDynamic.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import { Icon } from '../../components/Icon/Icon.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import { Typography } from '../../components/Typography/Typography.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import { UserProfileForm } from '../../components/UserProfileForm/UserProfileForm.js';
import { ModalHeader } from '../../components/ModalHeader/ModalHeader.js';
import { IconButton } from '../../components/IconButton/IconButton.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { useAssignDefaultValues } from './useAssignDefaultValues/useAssignDefaultValues.js';
import { UserFieldsToIcon } from './UserFieldsToIcon/UserFieldsToIcon.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';

const UserFieldEditorView = ({ onClickClose, onSubmit, fields, submitText, subtitle, title, }) => {
    // Treat undefined props
    ({ submitText, subtitle, title } = useAssignDefaultValues({ submitText, subtitle, title }, fields));
    const closeButton = onClickClose && (jsx(IconButton, { type: 'button', onClick: onClickClose, "data-testid": 'close-button', children: jsx(SvgClose, {}) }));
    return (jsxs(Fragment, { children: [jsx(ModalHeader, { alignContent: 'bottom', trailing: closeButton, children: jsxs("div", { className: 'user-field-editor__header', children: [jsx("div", { className: 'user-field-editor__header__icon', children: jsx(Icon, { color: 'brand-primary', size: 'large', children: jsx(UserFieldsToIcon, { fields: fields }) }) }), title && (jsx(Typography, { variant: 'title', color: 'primary', children: title }))] }) }), jsxs("div", { className: 'user-field-editor__body', children: [subtitle && (jsx(Typography, { className: 'user-field-editor__body__subtitle', variant: 'body_normal', color: 'secondary', children: subtitle })), jsx(UserProfileForm, { filterFields: fields, onEditProfileSubmit: onSubmit, formClassName: 'user-field-editor__body__form', fieldsContainerStyle: { padding: 0 }, options: {
                            buttonsAsFooter: false,
                            hideCancelButton: true,
                            submitButtonProps: {
                                buttonPadding: 'large',
                                startSlot: undefined,
                                typographyProps: { variant: 'button_primary' },
                            },
                            submitText,
                        } })] }), jsx(PoweredByDynamic, { asFooter: true })] }));
};

export { UserFieldEditorView };
