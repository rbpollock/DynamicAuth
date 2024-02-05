import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { DynamicError } from '@dynamic-labs/utils';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import { UserProfileIcon } from '@dynamic-labs/iconic';
import 'react';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import { useErrorContext } from '../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../context/ViewContext/ViewContext.js';
import { decodeJwt } from '../../shared/utils/functions/decodeJwt/decodeJwt.js';
import { ReactComponent as SvgDoubleArrowRight } from '../../shared/assets/double-arrow-right.js';
import '../../shared/logger.js';
import { shortenWalletAddress } from '../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import { createUserProfile } from '../../utils/functions/createUserProfile/createUserProfile.js';
import '@dynamic-labs/multi-wallet';
import '@dynamic-labs/sdk-api';
import { storeAuthToken } from '../../utils/functions/storeAuthToken/index.js';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import { mergeUserAccounts } from '../../data/api.js';
import { useEmailVerificationContext } from '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../components/Typography/Typography.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import { Icon } from '../../components/Icon/Icon.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { Button } from '../../components/Button/Button.js';
import '../../components/IconButton/IconButton.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import { shortenEmail } from '../../shared/utils/functions/shortenEmail/shortenEmail.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const MergeUserAccountsView = () => {
    const { environmentId, setUser, setOnboardingOnlyJwt, setShowAuthFlow, setCallback, primaryWallet, user, authToken, onboardingOnlyJwt, } = useInternalDynamicContext();
    const { t } = useTranslation();
    const { setError } = useErrorContext();
    const { setView, goToInitialView } = useViewContext();
    const { email } = useEmailVerificationContext();
    // If user tries to update an email for logged user there is already an authToken and onboardingOnlyJwt is undefined
    // If user tries to merge during KYC step, authToken is undefined and onboardingOnlyJwt is defined
    const jwtToken = authToken || onboardingOnlyJwt;
    const handleMergeUserAccounts = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!jwtToken) {
            return;
        }
        try {
            const newJwt = yield mergeUserAccounts(jwtToken, environmentId);
            if (newJwt) {
                storeAuthToken(newJwt);
                const decodedJwt = decodeJwt(newJwt);
                if (decodedJwt === undefined) {
                    throw new DynamicError('Invalid token!');
                }
                const newUser = createUserProfile(decodedJwt);
                setOnboardingOnlyJwt(undefined);
                setUser(newUser);
                setShowAuthFlow(false);
                setCallback('authSuccess');
                return;
            }
            throw new DynamicError('Something went wrong, please try again.');
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
    return (jsxs("div", { className: 'merge-user-accounts__container', children: [jsxs("div", { className: 'merge-user-accounts__accounts', children: [jsxs("div", { className: 'merge-user-accounts__accounts__item', children: [jsx(WalletIcon, { walletKey: primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector.key, className: 'merge-user-accounts__accounts__item__icon' }), jsx(Typography, { variant: 'body_normal', weight: 'medium', color: 'secondary', className: 'merge-user-accounts__accounts__item__text', children: shortenWalletAddress(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.address, 3, 3) })] }), jsx("div", { className: 'merge-user-accounts__accounts__divider', children: jsx(Icon, { color: 'text-secondary', size: 'small', children: jsx(SvgDoubleArrowRight, {}) }) }), jsxs("div", { className: 'merge-user-accounts__accounts__item', children: [jsx(UserProfileIcon, { className: 'merge-user-accounts__accounts__item__icon' }), jsx(Typography, { variant: 'body_normal', weight: 'medium', color: 'secondary', className: 'merge-user-accounts__accounts__item__text', children: shortenEmail(email, {
                                    breakpoint: 4,
                                    cutEnd: 1,
                                    cutStart: 2,
                                }) })] })] }), jsx(Typography, { weight: 'regular', variant: 'title', className: 'merge-user-accounts__text merge-user-accounts__text__header', copykey: 'dyn_merge_user_accounts.title', children: t('dyn_merge_user_accounts.title') }), jsxs(Typography, { weight: 'medium', variant: 'body_normal', className: 'merge-user-accounts__text merge-user-accounts__text__body', copykey: 'dyn_merge_user_accounts.existing_account', children: [t('dyn_merge_user_accounts.existing_account'), ' ', jsx("span", { className: 'merge-user-accounts__text--bold', children: shortenEmail(email, {
                            breakpoint: 14,
                        }) }), ' ', t('dyn_merge_user_accounts.existing_account_trail')] }), jsxs("div", { className: 'merge-user-accounts__buttons', children: [jsx(Button, { className: 'merge-user-accounts__buttons__button', onClick: handleMergeUserAccounts, buttonVariant: 'primary', buttonPadding: 'large', copykey: 'dyn_merge_user_accounts.confirm_button', children: t('dyn_merge_user_accounts.confirm_button') }), jsx(Button, { className: 'merge-user-accounts__buttons__button', onClick: handleUseDifferentEmail, buttonVariant: 'secondary', buttonPadding: 'large', copykey: 'dyn_merge_user_accounts.cancel_button', children: t('dyn_merge_user_accounts.cancel_button') })] })] }));
};

export { MergeUserAccountsView };
