import { jsx, jsxs } from 'react/jsx-runtime';
import { Field } from 'formik';
import { useTranslation } from 'react-i18next';
import 'react';
import '@dynamic-labs/utils';
import '../../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../context/CaptchaContext/CaptchaContext.js';
import '../../../context/ErrorContext/ErrorContext.js';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import { getValueByKey } from '../../../shared/utils/functions/getValueByKey/index.js';
import '../../../utils/constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import { tShirtSizes, teamNames, countryCodes } from '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../config/ApiEndpoint.js';
import '../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import { useFields } from '../useFields.js';
import '../../../context/MockContext/MockContext.js';
import '../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../components/ShadowDOM/ShadowDOM.js';
import '../../../components/OverlayCard/OverlayCard.context.js';
import '../../../context/FooterAnimationContext/index.js';
import '../../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../../components/Typography/Typography.js';
import { Tooltip } from '../../../components/Tooltip/Tooltip.js';
import '../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import { getDisplayErrorMessage } from './utils/getDisplayErrorMessage/getDisplayErrorMessage.js';
import '../../../components/IconButton/IconButton.js';
import '../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { Checkbox } from '../../../components/Checkbox/Checkbox.js';
import '../../../components/InlineWidget/InlineWidget.js';
import { Input } from '../../../components/Input/Input.js';
import '../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../components/Popper/Popper/Popper.js';
import '../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { Select } from '../../../components/Select/Select.js';

const UserDataFields = ({ errors, policiesConsentInnerComponentArray, fields, touched, }) => {
    const { fieldsConfig } = useFields();
    const { t } = useTranslation();
    return (jsx("div", { className: 'user-data-fields__fields-column', children: fields === null || fields === void 0 ? void 0 : fields.map(({ name, required, enabled }) => {
            const { label, type, key } = getValueByKey(fieldsConfig, name);
            if (name === 'tShirtSize') {
                return (jsx(Field, { copykey: key, as: Select, type: type, id: name, name: name, label: label, error: errors[name] && touched[name], selectDataTestId: 'tShirtSizeSelect', message: touched[name] && getDisplayErrorMessage(label, errors[name]), children: tShirtSizes.map((size) => (jsx("option", { value: size, children: size }, size))) }, name));
            }
            else if (name === 'team') {
                return (jsx(Field, { copykey: key, as: Select, type: type, id: name, name: name, label: label, error: errors[name] && touched[name], selectDataTestId: 'teamSelect', message: touched[name] && getDisplayErrorMessage(label, errors[name]), children: teamNames.map((teamName) => (jsx("option", { value: teamName, children: teamName }, teamName))) }, name));
            }
            else if (name === 'country') {
                return (jsx(Field, { copykey: key, as: Select, type: type, id: name, name: name, label: label, error: errors[name] && touched[name], selectDataTestId: 'countrySelect', message: touched[name] && getDisplayErrorMessage(label, errors[name]), children: countryCodes.map((countryCode) => (jsx("option", { value: countryCode.code, children: countryCode.name }, countryCode.code))) }, name));
            }
            else if (name === 'policiesConsent') {
                return (jsx("div", { role: 'group', "aria-labelledby": 'checkbox-group', className: 'user-data-fields__checkbox-container', children: policiesConsentInnerComponentArray === null || policiesConsentInnerComponentArray === void 0 ? void 0 : policiesConsentInnerComponentArray.map((component, index) => (jsxs("div", { className: 'user-data-fields__consent-checkbox', children: [jsx(Field, { copykey: key, as: Checkbox, id: `policiesConsent_${index}`, name: 'policiesConsentArray', type: 'checkbox', value: `${index}` }, `policiesConsent_${index}`), jsx("label", { htmlFor: `policiesConsent_${index}`, className: 'user-data-fields__checkbox-label', children: jsx(Typography, { variant: 'body_small', color: 'secondary', children: component }) })] }, `policiesConsent_${index}`))) }, 'policiesConsentGroup'));
            }
            else if (name === 'email' && !enabled) {
                return (jsx(Tooltip, { content: t('dyn_collect_user_data.update_email_tooltip'), className: 'user-data-fields__tooltip', copykey: 'dyn_collect_user_data.update_email_tooltip', children: jsx(Field, { copykey: key, disabled: true, as: Input, type: type, id: name, name: name, label: label }, name) }, 'disabled-email-tooltip'));
            }
            else {
                return (jsx(Field, { copykey: key, disabled: !enabled, as: Input, type: type, id: name, name: name, label: label, optional: enabled && !required, error: errors[name] && touched[name], message: touched[name] && getDisplayErrorMessage(label, errors[name]) }, name));
            }
        }) }));
};

export { UserDataFields };
