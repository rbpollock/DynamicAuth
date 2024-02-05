'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var utils = require('@dynamic-labs/utils');
var walletBook = require('@dynamic-labs/wallet-book');
var iconic = require('@dynamic-labs/iconic');
require('react');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
var ErrorContext = require('../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../context/ViewContext/ViewContext.cjs');
var decodeJwt = require('../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
var doubleArrowRight = require('../../shared/assets/double-arrow-right.cjs');
require('../../shared/logger.cjs');
var shortenWalletAddress = require('../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
var createUserProfile = require('../../utils/functions/createUserProfile/createUserProfile.cjs');
require('@dynamic-labs/multi-wallet');
require('@dynamic-labs/sdk-api');
var index = require('../../utils/functions/storeAuthToken/index.cjs');
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
require('../../context/LoadingContext/LoadingContext.cjs');
var Icon = require('../../components/Icon/Icon.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../components/Button/Button.cjs');
require('../../components/IconButton/IconButton.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
var shortenEmail = require('../../shared/utils/functions/shortenEmail/shortenEmail.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const MergeUserAccountsView = () => {
    const { environmentId, setUser, setOnboardingOnlyJwt, setShowAuthFlow, setCallback, primaryWallet, user, authToken, onboardingOnlyJwt, } = useInternalDynamicContext.useInternalDynamicContext();
    const { t } = reactI18next.useTranslation();
    const { setError } = ErrorContext.useErrorContext();
    const { setView, goToInitialView } = ViewContext.useViewContext();
    const { email } = EmailVerificationContext.useEmailVerificationContext();
    // If user tries to update an email for logged user there is already an authToken and onboardingOnlyJwt is undefined
    // If user tries to merge during KYC step, authToken is undefined and onboardingOnlyJwt is defined
    const jwtToken = authToken || onboardingOnlyJwt;
    const handleMergeUserAccounts = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (!jwtToken) {
            return;
        }
        try {
            const newJwt = yield api.mergeUserAccounts(jwtToken, environmentId);
            if (newJwt) {
                index.storeAuthToken(newJwt);
                const decodedJwt = decodeJwt.decodeJwt(newJwt);
                if (decodedJwt === undefined) {
                    throw new utils.DynamicError('Invalid token!');
                }
                const newUser = createUserProfile.createUserProfile(decodedJwt);
                setOnboardingOnlyJwt(undefined);
                setUser(newUser);
                setShowAuthFlow(false);
                setCallback('authSuccess');
                return;
            }
            throw new utils.DynamicError('Something went wrong, please try again.');
        }
        catch (e) {
            setError(t('dyn_merge_user_accounts.errors.merge_error'));
            if (user) {
                setShowAuthFlow(false);
                return;
            }
            goToInitialView();
        }
    });
    const handleUseDifferentEmail = () => {
        setError(undefined);
        if (user) {
            setShowAuthFlow(false);
            return;
        }
        setView('collect-user-data');
    };
    return (jsxRuntime.jsxs("div", { className: 'merge-user-accounts__container', children: [jsxRuntime.jsxs("div", { className: 'merge-user-accounts__accounts', children: [jsxRuntime.jsxs("div", { className: 'merge-user-accounts__accounts__item', children: [jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector.key, className: 'merge-user-accounts__accounts__item__icon' }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'medium', color: 'secondary', className: 'merge-user-accounts__accounts__item__text', children: shortenWalletAddress.shortenWalletAddress(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.address, 3, 3) })] }), jsxRuntime.jsx("div", { className: 'merge-user-accounts__accounts__divider', children: jsxRuntime.jsx(Icon.Icon, { color: 'text-secondary', size: 'small', children: jsxRuntime.jsx(doubleArrowRight.ReactComponent, {}) }) }), jsxRuntime.jsxs("div", { className: 'merge-user-accounts__accounts__item', children: [jsxRuntime.jsx(iconic.UserProfileIcon, { className: 'merge-user-accounts__accounts__item__icon' }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'medium', color: 'secondary', className: 'merge-user-accounts__accounts__item__text', children: shortenEmail.shortenEmail(email, {
                                    breakpoint: 4,
                                    cutEnd: 1,
                                    cutStart: 2,
                                }) })] })] }), jsxRuntime.jsx(Typography.Typography, { weight: 'regular', variant: 'title', className: 'merge-user-accounts__text merge-user-accounts__text__header', copykey: 'dyn_merge_user_accounts.title', children: t('dyn_merge_user_accounts.title') }), jsxRuntime.jsxs(Typography.Typography, { weight: 'medium', variant: 'body_normal', className: 'merge-user-accounts__text merge-user-accounts__text__body', copykey: 'dyn_merge_user_accounts.existing_account', children: [t('dyn_merge_user_accounts.existing_account'), ' ', jsxRuntime.jsx("span", { className: 'merge-user-accounts__text--bold', children: shortenEmail.shortenEmail(email, {
                            breakpoint: 14,
                        }) }), ' ', t('dyn_merge_user_accounts.existing_account_trail')] }), jsxRuntime.jsxs("div", { className: 'merge-user-accounts__buttons', children: [jsxRuntime.jsx(Button.Button, { className: 'merge-user-accounts__buttons__button', onClick: handleMergeUserAccounts, buttonVariant: 'primary', buttonPadding: 'large', copykey: 'dyn_merge_user_accounts.confirm_button', children: t('dyn_merge_user_accounts.confirm_button') }), jsxRuntime.jsx(Button.Button, { className: 'merge-user-accounts__buttons__button', onClick: handleUseDifferentEmail, buttonVariant: 'secondary', buttonPadding: 'large', copykey: 'dyn_merge_user_accounts.cancel_button', children: t('dyn_merge_user_accounts.cancel_button') })] })] }));
};

exports.MergeUserAccountsView = MergeUserAccountsView;
