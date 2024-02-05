'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var checkConnection = require('../../shared/assets/check-connection.cjs');
require('@dynamic-labs/wallet-book');
var shortenWalletAddress = require('../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
var createUserProfile = require('../../utils/functions/createUserProfile/createUserProfile.cjs');
require('@dynamic-labs/multi-wallet');
var isSupportedNetwork = require('../../utils/functions/isSupportedNetwork/isSupportedNetwork.cjs');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
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
var AuthProviderIcon = require('../../components/AuthProviderIcon/AuthProviderIcon.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
var ErrorContainer = require('../../components/ErrorContainer/ErrorContainer.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../components/IconButton/IconButton.cjs');
var Icon = require('../../components/Icon/Icon.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var TextButton = require('../../components/TextButton/TextButton.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var NetworkPicker = require('../../components/NetworkPicker/NetworkPicker.cjs');
var useFetchNameService = require('../../widgets/DynamicWidget/hooks/useFetchNameService/useFetchNameService.cjs');
var OnboardingUserDataForm = require('./OnboardingUserDataForm/OnboardingUserDataForm.cjs');

const CollectUserDataView = () => {
    var _a;
    const { appName, onboardingOnlyJwt, projectSettings, network, decodedOnboardingOnlyToken, selectedWalletConnector: walletConnector, handleLogOut, onboardingImageUrl, } = useInternalDynamicContext.useInternalDynamicContext();
    const [isNetworkPickerOpen, setIsNetworkPickerOpen] = React.useState(false);
    const nameService = useFetchNameService.useFetchNameService();
    const { t } = reactI18next.useTranslation();
    if (!walletConnector || !decodedOnboardingOnlyToken) {
        return null;
    }
    const userProfile = createUserProfile.createUserProfile(decodedOnboardingOnlyToken);
    const evmNetworks = walletConnector.evmNetworks || [];
    const _isSupportedNetwork = !network || isSupportedNetwork.isSupportedNetwork({ network, walletConnector });
    const walletAddress = (_a = userProfile === null || userProfile === void 0 ? void 0 : userProfile.verifiedCredentials.find((verifiedCredential) => verifiedCredential.id === userProfile.lastVerifiedCredentialId)) === null || _a === void 0 ? void 0 : _a.address;
    return (jsxRuntime.jsxs("div", { className: 'collect-user-data', "data-testid": 'collect-user-data-view', children: [jsxRuntime.jsxs("div", { className: 'collect-user-data__network-container', children: [jsxRuntime.jsxs("div", { className: 'collect-user-data__img-container', children: [(nameService === null || nameService === void 0 ? void 0 : nameService.avatar) ? (jsxRuntime.jsx("img", { src: nameService.avatar, alt: '', className: 'collect-user-data__img collect-user-data__img--rounded' })) : (jsxRuntime.jsx(AuthProviderIcon.AuthProviderIcon, { jwt: onboardingOnlyJwt, iconSize: 28 })), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'primary', weight: 'medium', className: 'collect-user-data__wallet-address', children: (nameService === null || nameService === void 0 ? void 0 : nameService.name) || shortenWalletAddress.shortenWalletAddress(walletAddress, 3, 3) })] }), jsxRuntime.jsx(NetworkPicker.NetworkPicker, { currentNetwork: network, evmNetworks: evmNetworks, connector: walletConnector, showNetworkName: true, isNetworkPickerOpen: isNetworkPickerOpen, setIsNetworkPickerOpen: setIsNetworkPickerOpen, buttonClassName: 'collect-user-data__network-picker-button', mainClassName: 'collect-user-data__network-picker' })] }), onboardingImageUrl && (jsxRuntime.jsx("img", { className: 'collect-user-data__main-img', src: onboardingImageUrl, alt: 'onboarding' })), !_isSupportedNetwork && (jsxRuntime.jsx(ErrorContainer.ErrorContainer, { withIcon: false, className: 'collect-user-data__error--not-supported', copykey: 'dyn_collect_user_data.not_supported_network.error_message', children: t('dyn_collect_user_data.not_supported_network.error_message') })), jsxRuntime.jsxs("div", { className: classNames.classNames('collect-user-data__form', {
                    'collect-user-data__form--error': !_isSupportedNetwork,
                }), children: [jsxRuntime.jsx("div", { className: 'collect-user-data__success-icon', children: jsxRuntime.jsx(Icon.Icon, { color: 'text-primary', size: 'large', children: jsxRuntime.jsx(checkConnection.ReactComponent, {}) }) }), jsxRuntime.jsx(OnboardingUserDataForm.OnboardingUserDataForm, { disableSubmit: !_isSupportedNetwork, userProfile: userProfile, children: !_isSupportedNetwork ? (jsxRuntime.jsxs("div", { className: 'collect-user-data__welcome-container', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', className: 'collect-user-data__welcome-title', copykey: 'dyn_collect_user_data.not_supported_network.title', children: t('dyn_collect_user_data.not_supported_network.title') }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', copykey: 'dyn_collect_user_data.not_supported_network.description', children: t('dyn_collect_user_data.not_supported_network.description') })] })) : (jsxRuntime.jsxs("div", { className: 'collect-user-data__welcome-container', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'title', color: 'primary', className: 'collect-user-data__welcome-title', copykey: 'dyn_collect_user_data.greeting', children: (projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general.collectUserDataWelcomeHeader) ||
                                        t('dyn_collect_user_data.greeting', { appName }) }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', color: 'secondary', copykey: 'dyn_collect_user_data.description', children: (projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.general.collectUserDataWelcomeMessage) ||
                                        t('dyn_collect_user_data.description') })] })) }), jsxRuntime.jsx(TextButton.TextButton, { className: 'collect-user-data__log-out', onClick: handleLogOut, copykey: 'dyn_collect_user_data.log_out_button', children: t('dyn_collect_user_data.log_out_button') })] })] }));
};

exports.CollectUserDataView = CollectUserDataView;
