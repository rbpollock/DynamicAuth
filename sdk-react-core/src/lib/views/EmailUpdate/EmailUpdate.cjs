'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var utils = require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
var ErrorContext = require('../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var chevronLeft = require('../../shared/assets/chevron-left.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
var api = require('../../data/api.cjs');
var EmailVerificationContext = require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
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
var Typography = require('../../components/Typography/Typography.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
var LoadingContext = require('../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../components/Button/Button.cjs');
var ModalHeader = require('../../components/ModalHeader/ModalHeader.cjs');
var IconButton = require('../../components/IconButton/IconButton.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
var Input = require('../../components/Input/Input.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const EmailUpdate = () => {
    const [updatedEmail, setUpdatedEmail] = React.useState('');
    const { setError, setErrorMessage } = ErrorContext.useErrorContext();
    const { loading, setLoading } = LoadingContext.useLoadingContext();
    const { setView, goToInitialView } = ViewContext.useViewContext();
    const { email, setEmail, setVerificationUUID } = EmailVerificationContext.useEmailVerificationContext();
    const { environmentId, handleLogOut, onboardingOnlyJwt, authToken } = useInternalDynamicContext.useInternalDynamicContext();
    const { t } = reactI18next.useTranslation();
    const [emailError, setEmailError] = React.useState(undefined);
    const handleBackClick = () => {
        setView('verify-email');
        setError(undefined);
    };
    const backButton = (jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: handleBackClick, "data-testid": 'back-button', children: jsxRuntime.jsx(chevronLeft.ReactComponent, {}) }));
    // If user tries to update an email for logged user there is already an authToken and onboardingOnlyJwt is undefined
    // If user tries to update the email in the authFlow, authToken is undefined and onboardingOnlyJwt is defined
    const jwtToken = authToken || onboardingOnlyJwt;
    const handleEmailUpdate = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        try {
            if (!updatedEmail) {
                return;
            }
            setEmailError(undefined);
            setLoading(true);
            const { emailVerification } = yield api.updateUserProfileFields(jwtToken, environmentId, { email: updatedEmail });
            if (!emailVerification) {
                yield handleLogOut();
                goToInitialView();
                return;
            }
            setError(undefined);
            setView('verify-email');
            setEmail(emailVerification.email);
            setVerificationUUID(emailVerification.verificationUUID);
        }
        catch (error) {
            logger.logger.debug(error);
            if (error instanceof utils.EmailAlreadyExistsError) {
                setEmailError('Email already exists');
                return;
            }
            setErrorMessage(error.code);
        }
        finally {
            setLoading(false);
        }
    });
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { leading: backButton, displayLeading: true, displayBorder: true, children: jsxRuntime.jsx(Typography.Typography, { as: 'h1', variant: 'title', color: 'primary', "data-testid": 'dynamic-auth-modal-heading', className: 'header__typography', copykey: 'dyn_email_update.title', children: t('dyn_email_update.title') }) }), jsxRuntime.jsxs("div", { className: 'email-update__container', children: [jsxRuntime.jsxs("div", { className: 'email-update__copy-text-container', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', copykey: 'dyn_email_update.current_email', children: t('dyn_email_update.current_email') }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'bold', color: 'secondary', children: email })] }), jsxRuntime.jsx(Input.Input, { id: 'email_field', onChange: (e) => {
                            setUpdatedEmail(e.target.value);
                        }, type: 'email', copykey: 'dyn_email_update.label', label: t('dyn_email_update.label'), className: 'email-update__input', error: Boolean(emailError), message: emailError }), jsxRuntime.jsx(Button.Button, { buttonVariant: 'primary', buttonPadding: 'medium', buttonClassName: 'email-update__button', onClick: () => handleEmailUpdate(), loading: loading, copykey: 'dyn_email_update.send_verification', children: t('dyn_email_update.send_verification') })] })] }));
};

exports.EmailUpdate = EmailUpdate;
