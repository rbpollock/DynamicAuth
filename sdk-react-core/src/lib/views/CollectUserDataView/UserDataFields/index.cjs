'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var formik = require('formik');
var reactI18next = require('react-i18next');
require('react');
require('@dynamic-labs/utils');
require('../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../context/ErrorContext/ErrorContext.cjs');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
var index = require('../../../shared/utils/functions/getValueByKey/index.cjs');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var index$1 = require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../config/ApiEndpoint.cjs');
require('../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
var useFields = require('../useFields.cjs');
require('../../../context/MockContext/MockContext.cjs');
require('../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../context/FooterAnimationContext/index.cjs');
require('../../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../../components/Typography/Typography.cjs');
var Tooltip = require('../../../components/Tooltip/Tooltip.cjs');
require('../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
var getDisplayErrorMessage = require('./utils/getDisplayErrorMessage/getDisplayErrorMessage.cjs');
require('../../../components/IconButton/IconButton.cjs');
require('../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var Checkbox = require('../../../components/Checkbox/Checkbox.cjs');
require('../../../components/InlineWidget/InlineWidget.cjs');
var Input = require('../../../components/Input/Input.cjs');
require('../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../components/Popper/Popper/Popper.cjs');
require('../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var Select = require('../../../components/Select/Select.cjs');

const UserDataFields = ({ errors, policiesConsentInnerComponentArray, fields, touched, }) => {
    const { fieldsConfig } = useFields.useFields();
    const { t } = reactI18next.useTranslation();
    return (jsxRuntime.jsx("div", { className: 'user-data-fields__fields-column', children: fields === null || fields === void 0 ? void 0 : fields.map(({ name, required, enabled }) => {
            const { label, type, key } = index.getValueByKey(fieldsConfig, name);
            if (name === 'tShirtSize') {
                return (jsxRuntime.jsx(formik.Field, { copykey: key, as: Select.Select, type: type, id: name, name: name, label: label, error: errors[name] && touched[name], selectDataTestId: 'tShirtSizeSelect', message: touched[name] && getDisplayErrorMessage.getDisplayErrorMessage(label, errors[name]), children: index$1.tShirtSizes.map((size) => (jsxRuntime.jsx("option", { value: size, children: size }, size))) }, name));
            }
            else if (name === 'team') {
                return (jsxRuntime.jsx(formik.Field, { copykey: key, as: Select.Select, type: type, id: name, name: name, label: label, error: errors[name] && touched[name], selectDataTestId: 'teamSelect', message: touched[name] && getDisplayErrorMessage.getDisplayErrorMessage(label, errors[name]), children: index$1.teamNames.map((teamName) => (jsxRuntime.jsx("option", { value: teamName, children: teamName }, teamName))) }, name));
            }
            else if (name === 'country') {
                return (jsxRuntime.jsx(formik.Field, { copykey: key, as: Select.Select, type: type, id: name, name: name, label: label, error: errors[name] && touched[name], selectDataTestId: 'countrySelect', message: touched[name] && getDisplayErrorMessage.getDisplayErrorMessage(label, errors[name]), children: index$1.countryCodes.map((countryCode) => (jsxRuntime.jsx("option", { value: countryCode.code, children: countryCode.name }, countryCode.code))) }, name));
            }
            else if (name === 'policiesConsent') {
                return (jsxRuntime.jsx("div", { role: 'group', "aria-labelledby": 'checkbox-group', className: 'user-data-fields__checkbox-container', children: policiesConsentInnerComponentArray === null || policiesConsentInnerComponentArray === void 0 ? void 0 : policiesConsentInnerComponentArray.map((component, index) => (jsxRuntime.jsxs("div", { className: 'user-data-fields__consent-checkbox', children: [jsxRuntime.jsx(formik.Field, { copykey: key, as: Checkbox.Checkbox, id: `policiesConsent_${index}`, name: 'policiesConsentArray', type: 'checkbox', value: `${index}` }, `policiesConsent_${index}`), jsxRuntime.jsx("label", { htmlFor: `policiesConsent_${index}`, className: 'user-data-fields__checkbox-label', children: jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: 'secondary', children: component }) })] }, `policiesConsent_${index}`))) }, 'policiesConsentGroup'));
            }
            else if (name === 'email' && !enabled) {
                return (jsxRuntime.jsx(Tooltip.Tooltip, { content: t('dyn_collect_user_data.update_email_tooltip'), className: 'user-data-fields__tooltip', copykey: 'dyn_collect_user_data.update_email_tooltip', children: jsxRuntime.jsx(formik.Field, { copykey: key, disabled: true, as: Input.Input, type: type, id: name, name: name, label: label }, name) }, 'disabled-email-tooltip'));
            }
            else {
                return (jsxRuntime.jsx(formik.Field, { copykey: key, disabled: !enabled, as: Input.Input, type: type, id: name, name: name, label: label, optional: enabled && !required, error: errors[name] && touched[name], message: touched[name] && getDisplayErrorMessage.getDisplayErrorMessage(label, errors[name]) }, name));
            }
        }) }));
};

exports.UserDataFields = UserDataFields;
