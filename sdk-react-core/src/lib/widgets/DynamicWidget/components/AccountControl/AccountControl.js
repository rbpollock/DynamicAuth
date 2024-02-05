import { jsxs, jsx } from 'react/jsx-runtime';
import '@dynamic-labs/iconic';
import '../../../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgThreeDots } from '../../../../shared/assets/three-dots.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/wallet-book';
import { shortenWalletAddress } from '../../../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import { useWidgetContext } from '../../context/DynamicWidgetContext.js';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getActiveOauthCredential } from '../../../../utils/functions/getActiveOauthCredential/getActiveOauthCredential.js';
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../config/ApiEndpoint.js';
import '../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
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
import { Typography } from '../../../../components/Typography/Typography.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import { AuthProviderIcon } from '../../../../components/AuthProviderIcon/AuthProviderIcon.js';
import 'i18next';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../components/IconButton/IconButton.js';
import { Icon } from '../../../../components/Icon/Icon.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import { shortenEmail } from '../../../../shared/utils/functions/shortenEmail/shortenEmail.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { useFetchNameService } from '../../hooks/useFetchNameService/useFetchNameService.js';

const AccountControl = ({ className }) => {
    const { primaryWallet, user, authToken } = useInternalDynamicContext();
    const { isOpen, setIsOpen } = useWidgetContext();
    const address = primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.address;
    const nameService = useFetchNameService(address);
    const renderUserIdentifier = () => {
        if (nameService === null || nameService === void 0 ? void 0 : nameService.name) {
            return nameService === null || nameService === void 0 ? void 0 : nameService.name;
        }
        if (address) {
            return shortenWalletAddress(address, 3, 3);
        }
        const oauthCredential = getActiveOauthCredential(user);
        if (oauthCredential === null || oauthCredential === void 0 ? void 0 : oauthCredential.publicIdentifier) {
            return oauthCredential.publicIdentifier;
        }
        if (user === null || user === void 0 ? void 0 : user.email) {
            return shortenEmail(user === null || user === void 0 ? void 0 : user.email);
        }
        return 'My Profile';
    };
    return (jsxs("button", { "data-testid": 'AccountControl', onClick: () => setIsOpen(!isOpen), className: classNames('account-control__container', {
            'account-control__container--active': isOpen,
            'account-control__container--multiwallet-disabled': true,
        }, className), children: [jsx(AuthProviderIcon, { jwt: authToken, iconSize: 16 }), jsx(Typography, { className: 'account-control__name', as: 'p', children: renderUserIdentifier() }), jsx(Icon, { className: 'account-control__icon', color: 'text-primary', children: jsx(SvgThreeDots, {}) })] }));
};

export { AccountControl };
