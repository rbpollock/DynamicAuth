'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
var CaptchaContext = require('../../../../context/CaptchaContext/CaptchaContext.cjs');
var ErrorContext = require('../../../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var arrowRightBackground = require('../../../../shared/assets/arrow-right-background.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var isEmailProviderEnabled = require('../../../../utils/functions/isEmailProviderEnabled/isEmailProviderEnabled.cjs');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var findEmailOtpWalletConnector = require('../../../Passkey/utils/findEmailOtpWalletConnector/findEmailOtpWalletConnector.cjs');
require('../../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../../../context/MockContext/MockContext.cjs');
require('../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../../../components/Button/Button.cjs');
var IconButton = require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
var Input = require('../../../../components/Input/Input.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var useEmailProvider = require('../../../../utils/hooks/useEmailProvider/useEmailProvider.cjs');

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const LoginEmailForm = ({ isLoading: isExternalLoading, onSubmit, onSubmitError, currentEmail, }) => {
    var _a, _b, _c;
    const { t } = reactI18next.useTranslation();
    const { walletConnectorOptions, projectSettings } = useInternalDynamicContext.useInternalDynamicContext();
    const { view, setView } = ViewContext.useViewContext();
    const { setErrorMessage } = ErrorContext.useErrorContext();
    const { engageCaptcha } = CaptchaContext.useCaptchaContext();
    const [emailInput, setEmailInput] = React.useState(currentEmail !== null && currentEmail !== void 0 ? currentEmail : '');
    const [invalidEmail, setInvalidEmail] = React.useState(false);
    const emailWalletConnector = findEmailOtpWalletConnector.findEmailOtpWalletConnector(walletConnectorOptions);
    const { handleEmailSubmitWithOptionalCaptcha, isEmailProviderLoading } = useEmailProvider.useEmailProvider({
        emailWalletConnector,
    });
    const isLoading = React.useMemo(() => isEmailProviderLoading || isExternalLoading, [isEmailProviderLoading, isExternalLoading]);
    const handleEmailOnChangeEvent = (event) => {
        const { value } = event.currentTarget;
        setEmailInput(value);
    };
    const handleEmailSubmitError = (error) => {
        if (error.code === 'invalid_email_address') {
            setInvalidEmail(true);
        }
        else {
            setErrorMessage(error.code);
        }
        logger.logger.debug(error);
        onSubmitError === null || onSubmitError === void 0 ? void 0 : onSubmitError();
    };
    /** Indicates the state of the input relative to the user's interaction */
    const [inputState, dispatchInputState] = React.useReducer((state, action) => {
        const [label, value] = action;
        return Object.assign(Object.assign({}, state), { [label]: value });
    }, {
        focused: false,
        hovered: false,
    });
    const emailInputSuffixIcon = (jsxRuntime.jsx(IconButton.IconButton, { "data-testid": 'email_submit_button', type: 'submit', className: classNames.classNames('icon-button', {
            'icon-button--active': inputState.focused || inputState.hovered,
            'icon-button--has-content': emailInput.length > 0,
        }), disabled: isLoading, children: jsxRuntime.jsx(arrowRightBackground.ReactComponent, {}) }));
    const handleSubmit = (e) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _d;
        e.preventDefault();
        if (!EMAIL_REGEX.test(emailInput)) {
            setInvalidEmail(true);
            return;
        }
        try {
            onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit();
            // we are making sure that the wallet connect is not magic as to not show captcha
            // until we have a request to our backend (useConnectAndSign)
            if (((_d = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.security.hCaptcha) === null || _d === void 0 ? void 0 : _d.enabled) &&
                (emailWalletConnector === null || emailWalletConnector === void 0 ? void 0 : emailWalletConnector.key) !== 'magicemailotp') {
                engageCaptcha({
                    authMethod: 'email',
                    onCaptchaSuccess: (captchaToken) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
                        try {
                            yield handleEmailSubmitWithOptionalCaptcha(emailInput, captchaToken);
                        }
                        catch (e) {
                            setView(view);
                            handleEmailSubmitError(e);
                        }
                    }),
                });
                return;
            }
            yield handleEmailSubmitWithOptionalCaptcha(emailInput);
        }
        catch (error) {
            handleEmailSubmitError(error);
        }
    });
    if (!isEmailProviderEnabled.isEmailProviderEnabled((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) !== null && _a !== void 0 ? _a : [])) {
        logger.logger.error('Failed to render EmailSignInSection - no sign in provider enabled');
        return null;
    }
    return (jsxRuntime.jsxs("form", { className: 'login-with-email-form', onSubmit: (e) => handleSubmit(e), children: [jsxRuntime.jsx(Input.Input, { id: 'email_field', value: emailInput, onChange: handleEmailOnChangeEvent, label: 'Enter your email', error: invalidEmail, message: invalidEmail && t('dyn_login.helper.email_form.invalid_email'), suffix: ((_b = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.design.modal) === null || _b === void 0 ? void 0 : _b.emailSubmitButtonInsideInput)
                    ? emailInputSuffixIcon
                    : null, disabled: isLoading, type: 'email', onPointerEnter: () => dispatchInputState(['hovered', true]), onPointerLeave: () => dispatchInputState(['hovered', false]), onFocus: () => dispatchInputState(['focused', true]), onBlur: () => dispatchInputState(['focused', false]) }), !((_c = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.design.modal) === null || _c === void 0 ? void 0 : _c.emailSubmitButtonInsideInput) && (jsxRuntime.jsx(Button.Button, { dataTestId: 'email_submit_button', buttonClassName: 'login-with-email-form__button', type: 'submit', loading: isLoading, disabled: isLoading, buttonVariant: 'brand-primary', buttonPadding: 'login-screen-height', expanded: true, typographyProps: {
                    color: 'inherit',
                }, children: "Continue" }))] }));
};

exports.EMAIL_REGEX = EMAIL_REGEX;
exports.LoginEmailForm = LoginEmailForm;
