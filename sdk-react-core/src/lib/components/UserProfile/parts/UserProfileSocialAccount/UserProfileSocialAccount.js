import { jsxs, jsx } from 'react/jsx-runtime';
import { SocialIcon } from '@dynamic-labs/iconic';
import 'react';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import { ReactComponent as SvgAdd } from '../../../../shared/assets/add.js';
import { ReactComponent as SvgUnlink } from '../../../../shared/assets/unlink.js';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../config/ApiEndpoint.js';
import '../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { useIconThemeVariant } from '../../../../utils/hooks/useIconThemeVariant/useIconThemeVariant.js';
import { useSocialAccounts } from '../../../../utils/hooks/useSocialAccounts/useSocialAccounts.js';
import 'yup';
import 'react-i18next';
import '../../../../context/MockContext/MockContext.js';
import '../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../Transition/ZoomTransition/ZoomTransition.js';
import '../../../Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../Transition/OpacityTransition/OpacityTransition.js';
import '../../../ShadowDOM/ShadowDOM.js';
import '../../../OverlayCard/OverlayCard.context.js';
import '../../../../context/FooterAnimationContext/index.js';
import '../../../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../../Typography/Typography.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import '../../../../context/ThemeContext/ThemeContext.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import { Icon } from '../../../Icon/Icon.js';
import { capitalize } from '../../../../widgets/DynamicWidget/helpers/helpers.js';
import '../../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import { ConnectedAccountAvatar } from './components/ConnectedAccountAvatar/ConnectedAccountAvatar.js';
import 'formik';
import { Button } from '../../../Button/Button.js';
import '../../../IconButton/IconButton.js';
import '../../../Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../InlineWidget/InlineWidget.js';
import '../../../MenuList/Dropdown/Dropdown.js';
import '../../../Popper/Popper/Popper.js';
import '../../../Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const UserProfileSocialAccount = ({ provider, }) => {
    var _a;
    const { user, primaryWallet } = useInternalDynamicContext();
    const { linkSocialAccount, unlinkSocialAccount, isProcessing, isLinked, getLinkedAccountInformation, } = useSocialAccounts();
    const isProviderLinked = isLinked(provider);
    const connectedAccountInfo = getLinkedAccountInformation(provider);
    const iconThemeVariant = useIconThemeVariant();
    const isActiveCredential = !primaryWallet &&
        connectedAccountInfo &&
        (connectedAccountInfo === null || connectedAccountInfo === void 0 ? void 0 : connectedAccountInfo.id) === (user === null || user === void 0 ? void 0 : user.lastVerifiedCredentialId);
    const renderButton = () => (jsx(Button, { buttonClassName: 'user-profile-social-account__button', buttonVariant: 'secondary', buttonPadding: 'none', onClick: () => isProviderLinked
            ? unlinkSocialAccount(provider)
            : linkSocialAccount(provider), loading: isProcessing, dataTestId: `social-account-${isProviderLinked ? 'disconnect' : 'connect'}-button`, typographyProps: {
            color: 'secondary',
            variant: 'button_tertiary',
            // weight: 'medium',
        }, startSlot: 
        // eslint-disable-next-line react/jsx-wrap-multilines
        jsx(Icon, { color: 'text-tertiary', size: 'small', children: isProviderLinked ? jsx(SvgUnlink, {}) : jsx(SvgAdd, {}) }), children: isProviderLinked ? null : 'Connect' }));
    return (jsxs("div", { className: 'user-profile-social-account', "data-testid": `social-account-${provider}`, children: [jsx("div", { className: 'user-profile-social-account__icon', children: isProviderLinked ? (jsx(ConnectedAccountAvatar, { provider: provider, avatarUrl: connectedAccountInfo === null || connectedAccountInfo === void 0 ? void 0 : connectedAccountInfo.avatar })) : (jsx(SocialIcon, { name: provider, variant: iconThemeVariant })) }), jsx("div", { className: 'user-profile-social-account__label', children: jsx(Typography, { weight: 'medium', variant: 'body_normal', color: 'primary', children: (_a = connectedAccountInfo === null || connectedAccountInfo === void 0 ? void 0 : connectedAccountInfo.publicIdentifier) !== null && _a !== void 0 ? _a : capitalize(provider) }) }), !isActiveCredential ? renderButton() : null] }));
};

export { UserProfileSocialAccount };
