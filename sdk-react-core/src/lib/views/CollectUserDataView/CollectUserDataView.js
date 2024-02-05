import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgCheckConnection } from '../../shared/assets/check-connection.js';
import '@dynamic-labs/wallet-book';
import { shortenWalletAddress } from '../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import { createUserProfile } from '../../utils/functions/createUserProfile/createUserProfile.js';
import '@dynamic-labs/multi-wallet';
import { isSupportedNetwork } from '../../utils/functions/isSupportedNetwork/isSupportedNetwork.js';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
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
import { AuthProviderIcon } from '../../components/AuthProviderIcon/AuthProviderIcon.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import { ErrorContainer } from '../../components/ErrorContainer/ErrorContainer.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../components/IconButton/IconButton.js';
import { Icon } from '../../components/Icon/Icon.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { TextButton } from '../../components/TextButton/TextButton.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { NetworkPicker } from '../../components/NetworkPicker/NetworkPicker.js';
import { useFetchNameService } from '../../widgets/DynamicWidget/hooks/useFetchNameService/useFetchNameService.js';
import { OnboardingUserDataForm } from './OnboardingUserDataForm/OnboardingUserDataForm.js';

const CollectUserDataView = () => {
    var _a;
    const { appName, onboardingOnlyJwt, projectSettings, network, decodedOnboardingOnlyToken, selectedWalletConnector: walletConnector, handleLogOut, onboardingImageUrl, } = useInternalDynamicContext();
    const [isNetworkPickerOpen, setIsNetworkPickerOpen] = useState(false);
    const nameService = useFetchNameService();
    const { t } = useTranslation();
    if (!walletConnector || !decodedOnboardingOnlyToken) {
        return null;
    }
    const userProfile = createUserProfile(decodedOnboardingOnlyToken);
    const evmNetworks = walletConnector.evmNetworks || [];
    const _isSupportedNetwork = !network || isSupportedNetwork({ network, walletConnector });
    const walletAddress = (_a = userProfile === null || userProfile === void 0 ? void 0 : userProfile.verifiedCredentials.find((verifiedCredential) => verifiedCredential.id === userProfile.lastVerifiedCredentialId)) === null || _a === void 0 ? void 0 : _a.address;
    return (jsxs("div", { className: 'collect-user-data', "data-testid": 'collect-user-data-view', children: [jsxs("div", { className: 'collect-user-data__network-container', children: [jsxs("div", { className: 'collect-user-data__img-container', children: [(nameService === null || nameService === void 0 ? void 0 : nameService.avatar) ? (jsx("img", { src: nameService.avatar, alt: '', className: 'collect-user-data__img collect-user-data__img--rounded' })) : (jsx(AuthProviderIcon, { jwt: onboardingOnlyJwt, iconSize: 28 })), jsx(Typography, { variant: 'body_normal', color: 'primary', weight: 'medium', className: 'collect-user-data__wallet-address', children: (nameService === null || nameService === void 0 ? void 0 : nameService.name) || shortenWalletAddress(walletAddress, 3, 3) })] }), jsx(NetworkPicker, { currentNetwork: network, evmNetworks: evmNetworks, connector: walletConnector, showNetworkName: true, isNetworkPickerOpen: isNetworkPickerOpen, setIsNetworkPickerOpen: setIsNetworkPickerOpen, buttonClassName: 'collect-user-data__network-picker-button', mainClassName: 'collect-user-data__network-picker' })] }), onboardingImageUrl && (jsx("img", { className: 'collect-user-data__main-img', src: onboardingImageUrl, alt: 'onboarding' })), !_isSupportedNetwork && (jsx(ErrorContainer, { withIcon: false, className: 'collect-user-data__error--not-supported', copykey: 'dyn_collect_user_data.not_supported_network.error_message', children: t('dyn_collect_user_data.not_supported_network.error_message') })), jsxs("div", { className: classNames('collect-user-data__form', {
                    'collect-user-data__form--error': !_isSupportedNetwork,
                }), children: [jsx("div", { className: 'collect-user-data__success-icon', children: jsx(Icon, { color: 'text-primary', size: 'large', children: jsx(SvgCheckConnection, {}) }) }), jsx(OnboardingUserDataForm, { disableSubmit: !_isSupportedNetwork, userProfile: userProfile, children: !_isSupportedNetwork ? (jsxs("div", { className: 'collect-user-data__welcome-container', children: [jsx(Typography, { variant: 'title', color: 'primary', className: 'collect-user-data__welcome-title', copykey: 'dyn_collect_user_data.not_supported_network.title', children: t('dyn_collect_user_data.not_supported_network.title') }), jsx(Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', copykey: 'dyn_collect_user_data.not_supported_network.description', children: t('dyn_collect_user_data.not_supported_network.description') })] })) : (jsxs("div", { className: 'collect-user-data__welcome-container', children: [jsx(Typography, { variant: 'title', color: 'primary', className: 'collect-user-data__welcome-title', copykey: 'dyn_collect_user_data.greeting', children: (projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general.collectUserDataWelcomeHeader) ||
                                        t('dyn_collect_user_data.greeting', { appName }) }), jsx(Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', copykey: 'dyn_collect_user_data.description', children: (projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general.collectUserDataWelcomeMessage) ||
                                        t('dyn_collect_user_data.description') })] })) }), jsx(TextButton, { className: 'collect-user-data__log-out', onClick: handleLogOut, copykey: 'dyn_collect_user_data.log_out_button', children: t('dyn_collect_user_data.log_out_button') })] })] }));
};

export { CollectUserDataView };
