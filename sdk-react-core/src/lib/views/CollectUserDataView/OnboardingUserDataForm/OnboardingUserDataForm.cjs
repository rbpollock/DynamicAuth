'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var formik = require('formik');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../../context/ViewContext/ViewContext.cjs');
var decodeJwt = require('../../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
require('@dynamic-labs/iconic');
require('../../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('@dynamic-labs/sdk-api');
require('../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../config/ApiEndpoint.cjs');
require('../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var useEmbeddedWallet = require('../../../utils/hooks/useEmbeddedWallet/useEmbeddedWallet.cjs');
require('../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
var useUserDataForm = require('../../../utils/hooks/useUserDataForm/useUserDataForm.cjs');
var useUserUpdateRequest = require('../../../utils/hooks/useUserUpdateRequest/useUserUpdateRequest.cjs');
require('../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../context/MockContext/MockContext.cjs');
require('react-i18next');
require('../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../context/FooterAnimationContext/index.cjs');
require('../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('yup');
require('../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
var index = require('../UserDataFields/index.cjs');
var Button = require('../../../components/Button/Button.cjs');
require('../../../components/IconButton/IconButton.cjs');
require('../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../components/InlineWidget/InlineWidget.cjs');
require('../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../components/Popper/Popper/Popper.cjs');
require('../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const OnboardingUserDataForm = ({ children, userProfile, disableSubmit, }) => {
    const { policiesConsentInnerComponent, onboardingOnlyJwt, setShowAuthFlow, setCallback, projectSettings, } = useInternalDynamicContext.useInternalDynamicContext();
    const { setView, view } = ViewContext.useViewContext();
    const { createEmbeddedWallet } = useEmbeddedWallet.useEmbeddedWallet();
    const decodedJwt = decodeJwt.decodeJwt(onboardingOnlyJwt);
    const { updateUser } = useUserUpdateRequest.useUserUpdateRequestInternal({
        validationSchemaStripUnknown: false,
    });
    const onSubmit = React.useCallback((formValues) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
    const { fetch: loading, formikInitialValues, formikValidationSchema, enforcePolicies, onFormSubmit, } = useUserDataForm.useUserDataForm({
        fields: (decodedJwt === null || decodedJwt === void 0 ? void 0 : decodedJwt.missingFields) || [],
        onSubmit,
        userProfile,
    });
    const policiesConsentInnerComponentArray = [
        policiesConsentInnerComponent,
    ].flat();
    return (jsxRuntime.jsx(formik.Formik, { onSubmit: onFormSubmit, initialValues: formikInitialValues, validationSchema: formikValidationSchema, children: ({ errors, touched, values }) => {
            var _a;
            const isSubmitBtnDisabled = disableSubmit ||
                (enforcePolicies &&
                    (policiesConsentInnerComponentArray === null || policiesConsentInnerComponentArray === void 0 ? void 0 : policiesConsentInnerComponentArray.length) !==
                        ((_a = values.policiesConsentArray) === null || _a === void 0 ? void 0 : _a.length));
            return (jsxRuntime.jsx(formik.Form, { className: 'user-data-form__form', children: jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [children, jsxRuntime.jsx(index.UserDataFields, { fields: decodedJwt === null || decodedJwt === void 0 ? void 0 : decodedJwt.missingFields, errors: errors, touched: touched, policiesConsentInnerComponentArray: policiesConsentInnerComponentArray }), jsxRuntime.jsx(Button.Button, { type: 'submit', loading: loading, disabled: isSubmitBtnDisabled, buttonVariant: 'primary', expanded: true, buttonPadding: 'login-screen-height', children: "Continue" })] }) }));
        } }));
};

exports.OnboardingUserDataForm = OnboardingUserDataForm;
