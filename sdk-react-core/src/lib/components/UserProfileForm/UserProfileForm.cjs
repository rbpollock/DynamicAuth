'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var formik = require('formik');
var useUserDataForm = require('../../utils/hooks/useUserDataForm/useUserDataForm.cjs');
require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../context/ViewContext/ViewContext.cjs');
var check = require('../../shared/assets/check.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getUserProfileFields = require('../../utils/functions/getUserProfileFields/getUserProfileFields.cjs');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var index = require('../../views/CollectUserDataView/UserDataFields/index.cjs');
var DynamicWidgetFooter = require('../../widgets/DynamicWidget/components/DynamicWidgetFooter/DynamicWidgetFooter.cjs');
var Button = require('../Button/Button.cjs');

const UserProfileForm = ({ filterFields, formClassName, fieldsContainerStyle, onEditProfileSubmit, onEditProfileCancel, options = {
    buttonsAsFooter: true,
    cancelText: 'Cancel',
    shouldEnforcePolicies: false,
    submitText: 'Save',
}, }) => {
    const { projectSettings, user } = useInternalDynamicContext.useInternalDynamicContext();
    const targetFields = React.useMemo(() => {
        const allUserFields = getUserProfileFields.getUserProfileFields({
            projectSettingsKyc: projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.kyc,
            user,
        });
        if (!filterFields)
            return allUserFields;
        return allUserFields.filter(({ name }) => filterFields.includes(name));
    }, [filterFields, projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.kyc, user]);
    const { fetch, formikInitialValues, formikValidationSchema, onFormSubmit } = useUserDataForm.useUserDataForm({
        fields: targetFields,
        onSubmit: onEditProfileSubmit,
        shouldEnforcePolicies: options.shouldEnforcePolicies,
        userProfile: user,
    });
    const makeButtonsContent = (isSubmitting, isValid, dirty) => (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [!options.hideCancelButton && (jsxRuntime.jsx(Button.Button, Object.assign({ disabled: fetch, expanded: true, buttonPadding: 'medium', buttonVariant: 'secondary', type: 'button', typographyProps: { variant: 'button_secondary' }, onClick: onEditProfileCancel, dataTestId: 'cancel-button' }, options.cancelButtonProps, { children: options.cancelText }))), jsxRuntime.jsx(Button.Button, Object.assign({ buttonClassName: 'dynamic-widget-footer__button', disabled: fetch || !isValid || !dirty, expanded: true, type: 'submit', buttonPadding: 'medium', typographyProps: { variant: 'button_secondary' }, loading: isSubmitting, startSlot: jsxRuntime.jsx(check.ReactComponent, {}), dataTestId: 'submit-button' }, options.submitButtonProps, { children: options.submitText }))] }));
    return (jsxRuntime.jsx(formik.Formik, { onSubmit: onFormSubmit, initialValues: formikInitialValues, validationSchema: formikValidationSchema, validateOnChange: true, children: ({ errors, touched, isSubmitting, isValid, dirty }) => (jsxRuntime.jsxs(formik.Form, { className: classNames.classNames('dynamic-widget-edit-profile-view', formClassName), "data-testid": 'editUserProfileForm', children: [jsxRuntime.jsx("div", { className: 'dynamic-widget-edit-profile-view__fields', style: fieldsContainerStyle, children: jsxRuntime.jsx(index.UserDataFields, { errors: errors, fields: targetFields, touched: touched }) }), options.buttonsAsFooter ? (jsxRuntime.jsx(DynamicWidgetFooter.DynamicWidgetFooter, { children: makeButtonsContent(isSubmitting, isValid, dirty) })) : (makeButtonsContent(isSubmitting, isValid, dirty))] })) }));
};

exports.UserProfileForm = UserProfileForm;
