import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useCallback } from 'react';
import { Formik, Form } from 'formik';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../context/CaptchaContext/CaptchaContext.js';
import '../../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../../context/ViewContext/ViewContext.js';
import { decodeJwt } from '../../../shared/utils/functions/decodeJwt/decodeJwt.js';
import '@dynamic-labs/iconic';
import '../../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import '../../../utils/constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '@dynamic-labs/sdk-api';
import '../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../config/ApiEndpoint.js';
import '../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { useEmbeddedWallet } from '../../../utils/hooks/useEmbeddedWallet/useEmbeddedWallet.js';
import '../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import { useUserDataForm } from '../../../utils/hooks/useUserDataForm/useUserDataForm.js';
import { useUserUpdateRequestInternal } from '../../../utils/hooks/useUserUpdateRequest/useUserUpdateRequest.js';
import '../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '@dynamic-labs/rpc-providers';
import '../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../context/MockContext/MockContext.js';
import 'react-i18next';
import '../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../components/ShadowDOM/ShadowDOM.js';
import '../../../components/OverlayCard/OverlayCard.context.js';
import '../../../context/FooterAnimationContext/index.js';
import '../../../context/QrCodeContext/QrCodeContext.js';
import '../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import 'yup';
import '../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import { UserDataFields } from '../UserDataFields/index.js';
import { Button } from '../../../components/Button/Button.js';
import '../../../components/IconButton/IconButton.js';
import '../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../components/InlineWidget/InlineWidget.js';
import '../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../components/Popper/Popper/Popper.js';
import '../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const OnboardingUserDataForm = ({ children, userProfile, disableSubmit, }) => {
    const { policiesConsentInnerComponent, onboardingOnlyJwt, setShowAuthFlow, setCallback, projectSettings, } = useInternalDynamicContext();
    const { setView, view } = useViewContext();
    const { createEmbeddedWallet } = useEmbeddedWallet();
    const decodedJwt = decodeJwt(onboardingOnlyJwt);
    const { updateUser } = useUserUpdateRequestInternal({
        validationSchemaStripUnknown: false,
    });
    const onSubmit = useCallback((formValues) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const { isEmailVerificationRequired, missingFields } = yield updateUser(formValues);
        if (isEmailVerificationRequired &&
            missingFields.map((field) => field.name).toString() === 'email') {
            setView('verify-email');
            return;
        }
        else if (missingFields.length > 0) {
            // make sure we capture the fields that are required and still missing!
            // do not change the view, just use the current one
            setView(view);
            return;
        }
        setCallback('authSuccess');
        if (!((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _a === void 0 ? void 0 : _a.automaticEmbeddedWalletCreation)) {
            setShowAuthFlow(false);
            return;
        }
        try {
            // this function will check turnkey wallet enabled and create wallet if needed
            // if not enabled, it will throw an error.
            yield createEmbeddedWallet();
        }
        catch (e) {
            setShowAuthFlow(false);
        }
    }), [
        updateUser,
        setCallback,
        setView,
        view,
        createEmbeddedWallet,
        setShowAuthFlow,
        projectSettings,
    ]);
    const { fetch: loading, formikInitialValues, formikValidationSchema, enforcePolicies, onFormSubmit, } = useUserDataForm({
        fields: (decodedJwt === null || decodedJwt === void 0 ? void 0 : decodedJwt.missingFields) || [],
        onSubmit,
        userProfile,
    });
    const policiesConsentInnerComponentArray = [
        policiesConsentInnerComponent,
    ].flat();
    return (jsx(Formik, { onSubmit: onFormSubmit, initialValues: formikInitialValues, validationSchema: formikValidationSchema, children: ({ errors, touched, values }) => {
            var _a;
            const isSubmitBtnDisabled = disableSubmit ||
                (enforcePolicies &&
                    (policiesConsentInnerComponentArray === null || policiesConsentInnerComponentArray === void 0 ? void 0 : policiesConsentInnerComponentArray.length) !==
                        ((_a = values.policiesConsentArray) === null || _a === void 0 ? void 0 : _a.length));
            return (jsx(Form, { className: 'user-data-form__form', children: jsxs(Fragment, { children: [children, jsx(UserDataFields, { fields: decodedJwt === null || decodedJwt === void 0 ? void 0 : decodedJwt.missingFields, errors: errors, touched: touched, policiesConsentInnerComponentArray: policiesConsentInnerComponentArray }), jsx(Button, { type: 'submit', loading: loading, disabled: isSubmitBtnDisabled, buttonVariant: 'primary', expanded: true, buttonPadding: 'login-screen-height', children: "Continue" })] }) }));
        } }));
};

export { OnboardingUserDataForm };
