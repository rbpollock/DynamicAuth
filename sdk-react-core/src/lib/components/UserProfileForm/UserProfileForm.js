import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { Formik, Form } from 'formik';
import { useUserDataForm } from '../../utils/hooks/useUserDataForm/useUserDataForm.js';
import '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '../../context/ViewContext/ViewContext.js';
import { ReactComponent as SvgCheck } from '../../shared/assets/check.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getUserProfileFields } from '../../utils/functions/getUserProfileFields/getUserProfileFields.js';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { UserDataFields } from '../../views/CollectUserDataView/UserDataFields/index.js';
import { DynamicWidgetFooter } from '../../widgets/DynamicWidget/components/DynamicWidgetFooter/DynamicWidgetFooter.js';
import { Button } from '../Button/Button.js';

const UserProfileForm = ({ filterFields, formClassName, fieldsContainerStyle, onEditProfileSubmit, onEditProfileCancel, options = {
    buttonsAsFooter: true,
    cancelText: 'Cancel',
    shouldEnforcePolicies: false,
    submitText: 'Save',
}, }) => {
    const { projectSettings, user } = useInternalDynamicContext();
    const targetFields = useMemo(() => {
        const allUserFields = getUserProfileFields({
            projectSettingsKyc: projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.kyc,
            user,
        });
        if (!filterFields)
            return allUserFields;
        return allUserFields.filter(({ name }) => filterFields.includes(name));
    }, [filterFields, projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.kyc, user]);
    const { fetch, formikInitialValues, formikValidationSchema, onFormSubmit } = useUserDataForm({
        fields: targetFields,
        onSubmit: onEditProfileSubmit,
        shouldEnforcePolicies: options.shouldEnforcePolicies,
        userProfile: user,
    });
    const makeButtonsContent = (isSubmitting, isValid, dirty) => (jsxs(Fragment, { children: [!options.hideCancelButton && (jsx(Button, Object.assign({ disabled: fetch, expanded: true, buttonPadding: 'medium', buttonVariant: 'secondary', type: 'button', typographyProps: { variant: 'button_secondary' }, onClick: onEditProfileCancel, dataTestId: 'cancel-button' }, options.cancelButtonProps, { children: options.cancelText }))), jsx(Button, Object.assign({ buttonClassName: 'dynamic-widget-footer__button', disabled: fetch || !isValid || !dirty, expanded: true, type: 'submit', buttonPadding: 'medium', typographyProps: { variant: 'button_secondary' }, loading: isSubmitting, startSlot: jsx(SvgCheck, {}), dataTestId: 'submit-button' }, options.submitButtonProps, { children: options.submitText }))] }));
    return (jsx(Formik, { onSubmit: onFormSubmit, initialValues: formikInitialValues, validationSchema: formikValidationSchema, validateOnChange: true, children: ({ errors, touched, isSubmitting, isValid, dirty }) => (jsxs(Form, { className: classNames('dynamic-widget-edit-profile-view', formClassName), "data-testid": 'editUserProfileForm', children: [jsx("div", { className: 'dynamic-widget-edit-profile-view__fields', style: fieldsContainerStyle, children: jsx(UserDataFields, { errors: errors, fields: targetFields, touched: touched }) }), options.buttonsAsFooter ? (jsx(DynamicWidgetFooter, { children: makeButtonsContent(isSubmitting, isValid, dirty) })) : (makeButtonsContent(isSubmitting, isValid, dirty))] })) }));
};

export { UserProfileForm };
