'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('react');
require('@dynamic-labs/utils');
require('../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var close = require('../../shared/assets/close.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
var PoweredByDynamic = require('../../components/PoweredByDynamic/PoweredByDynamic.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
var Icon = require('../../components/Icon/Icon.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
var Typography = require('../../components/Typography/Typography.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
var UserProfileForm = require('../../components/UserProfileForm/UserProfileForm.cjs');
var ModalHeader = require('../../components/ModalHeader/ModalHeader.cjs');
var IconButton = require('../../components/IconButton/IconButton.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var useAssignDefaultValues = require('./useAssignDefaultValues/useAssignDefaultValues.cjs');
var UserFieldsToIcon = require('./UserFieldsToIcon/UserFieldsToIcon.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');

const UserFieldEditorView = ({ onClickClose, onSubmit, fields, submitText, subtitle, title, }) => {
    // Treat undefined props
    ({ submitText, subtitle, title } = useAssignDefaultValues.useAssignDefaultValues({ submitText, subtitle, title }, fields));
    const closeButton = onClickClose && (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: onClickClose, "data-testid": 'close-button', children: jsxRuntime.jsx(close.ReactComponent, {}) }));
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { alignContent: 'bottom', trailing: closeButton, children: jsxRuntime.jsxs("div", { className: 'user-field-editor__header', children: [jsxRuntime.jsx("div", { className: 'user-field-editor__header__icon', children: jsxRuntime.jsx(Icon.Icon, { color: 'brand-primary', size: 'large', children: jsxRuntime.jsx(UserFieldsToIcon.UserFieldsToIcon, { fields: fields }) }) }), title && (jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', children: title }))] }) }), jsxRuntime.jsxs("div", { className: 'user-field-editor__body', children: [subtitle && (jsxRuntime.jsx(Typography.Typography, { className: 'user-field-editor__body__subtitle', variant: 'body_normal', color: 'secondary', children: subtitle })), jsxRuntime.jsx(UserProfileForm.UserProfileForm, { filterFields: fields, onEditProfileSubmit: onSubmit, formClassName: 'user-field-editor__body__form', fieldsContainerStyle: { padding: 0 }, options: {
                            buttonsAsFooter: false,
                            hideCancelButton: true,
                            submitButtonProps: {
                                buttonPadding: 'large',
                                startSlot: undefined,
                                typographyProps: { variant: 'button_primary' },
                            },
                            submitText,
                        } })] }), jsxRuntime.jsx(PoweredByDynamic.PoweredByDynamic, { asFooter: true })] }));
};

exports.UserFieldEditorView = UserFieldEditorView;
