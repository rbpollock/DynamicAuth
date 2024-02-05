import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useMemo, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import { useCaptchaContext } from '../../../../context/CaptchaContext/CaptchaContext.js';
import { useErrorContext } from '../../../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgArrowRightBackground } from '../../../../shared/assets/arrow-right-background.js';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { isEmailProviderEnabled } from '../../../../utils/functions/isEmailProviderEnabled/isEmailProviderEnabled.js';
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../config/ApiEndpoint.js';
import '../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { findEmailOtpWalletConnector } from '../../../Passkey/utils/findEmailOtpWalletConnector/findEmailOtpWalletConnector.js';
import '../../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
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
import '../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { Button } from '../../../../components/Button/Button.js';
import { IconButton } from '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import { Input } from '../../../../components/Input/Input.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { useEmailProvider } from '../../../../utils/hooks/useEmailProvider/useEmailProvider.js';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const LoginEmailForm = ({ isLoading: isExternalLoading, onSubmit, onSubmitError, currentEmail, }) => {
    var _a, _b, _c;
    const { t } = useTranslation();
    const { walletConnectorOptions, projectSettings } = useInternalDynamicContext();
    const { view, setView } = useViewContext();
    const { setErrorMessage } = useErrorContext();
    const { engageCaptcha } = useCaptchaContext();
    const [emailInput, setEmailInput] = useState(currentEmail !== null && currentEmail !== void 0 ? currentEmail : '');
    const [invalidEmail, setInvalidEmail] = useState(false);
    const emailWalletConnector = findEmailOtpWalletConnector(walletConnectorOptions);
    const { handleEmailSubmitWithOptionalCaptcha, isEmailProviderLoading } = useEmailProvider({
        emailWalletConnector,
    });
    const isLoading = useMemo(() => isEmailProviderLoading || isExternalLoading, [isEmailProviderLoading, isExternalLoading]);
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
        logger.debug(error);
        onSubmitError === null || onSubmitError === void 0 ? void 0 : onSubmitError();
    };
    /** Indicates the state of the input relative to the user's interaction */
    const [inputState, dispatchInputState] = useReducer((state, action) => {
        const [label, value] = action;
        return Object.assign(Object.assign({}, state), { [label]: value });
    }, {
        focused: false,
        hovered: false,
    });
    const emailInputSuffixIcon = (jsx(IconButton, { "data-testid": 'email_submit_button', type: 'submit', className: classNames('icon-button', {
            'icon-button--active': inputState.focused || inputState.hovered,
            'icon-button--has-content': emailInput.length > 0,
        }), disabled: isLoading, children: jsx(SvgArrowRightBackground, {}) }));
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
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
                    onCaptchaSuccess: (captchaToken) => __awaiter(void 0, void 0, void 0, function* () {
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
    if (!isEmailProviderEnabled((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) !== null && _a !== void 0 ? _a : [])) {
        logger.error('Failed to render EmailSignInSection - no sign in provider enabled');
        return null;
    }
    return (jsxs("form", { className: 'login-with-email-form', onSubmit: (e) => handleSubmit(e), children: [jsx(Input, { id: 'email_field', value: emailInput, onChange: handleEmailOnChangeEvent, label: 'Enter your email', error: invalidEmail, message: invalidEmail && t('dyn_login.helper.email_form.invalid_email'), suffix: ((_b = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.design.modal) === null || _b === void 0 ? void 0 : _b.emailSubmitButtonInsideInput)
                    ? emailInputSuffixIcon
                    : null, disabled: isLoading, type: 'email', onPointerEnter: () => dispatchInputState(['hovered', true]), onPointerLeave: () => dispatchInputState(['hovered', false]), onFocus: () => dispatchInputState(['focused', true]), onBlur: () => dispatchInputState(['focused', false]) }), !((_c = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.design.modal) === null || _c === void 0 ? void 0 : _c.emailSubmitButtonInsideInput) && (jsx(Button, { dataTestId: 'email_submit_button', buttonClassName: 'login-with-email-form__button', type: 'submit', loading: isLoading, disabled: isLoading, buttonVariant: 'brand-primary', buttonPadding: 'login-screen-height', expanded: true, typographyProps: {
                    color: 'inherit',
                }, children: "Continue" }))] }));
};

export { EMAIL_REGEX, LoginEmailForm };
