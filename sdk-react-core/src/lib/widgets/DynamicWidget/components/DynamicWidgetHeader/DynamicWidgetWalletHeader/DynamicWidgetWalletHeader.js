import { jsxs, jsx } from 'react/jsx-runtime';
import React__default, { useMemo } from 'react';
import { isEmbeddedConnector } from '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../../context/DynamicContext/useInternalDynamicContext.js';
import '../../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../../context/ErrorContext/ErrorContext.js';
import '../../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgAdd } from '../../../../../shared/assets/add.js';
import { ReactComponent as SvgSend } from '../../../../../shared/assets/send.js';
import '@dynamic-labs/wallet-book';
import '../../../../../utils/constants/colors.js';
import '../../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getActiveOauthCredential } from '../../../../../utils/functions/getActiveOauthCredential/getActiveOauthCredential.js';
import '../../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../../config/ApiEndpoint.js';
import '../../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../../../../context/MockContext/MockContext.js';
import '../../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../../../components/ShadowDOM/ShadowDOM.js';
import '../../../../../components/OverlayCard/OverlayCard.context.js';
import '../../../../../context/FooterAnimationContext/index.js';
import '../../../../../context/QrCodeContext/QrCodeContext.js';
import { useIsTurnkeyWallet } from '../../../../../utils/hooks/useIsTurnkeyWallet/useIsTurnkeyWallet.js';
import { Typography } from '../../../../../components/Typography/Typography.js';
import '../../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../../context/LoadingContext/LoadingContext.js';
import { Icon } from '../../../../../components/Icon/Icon.js';
import 'i18next';
import { useWidgetContext } from '../../../context/DynamicWidgetContext.js';
import '../../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { Button } from '../../../../../components/Button/Button.js';
import '../../../../../components/IconButton/IconButton.js';
import '../../../../../components/Alert/Alert.js';
import { SecureTurnkeyWalletCard } from '../../../../../components/SecureTurnkeyWalletCard/SecureTurnkeyWalletCard.js';
import '@dynamic-labs/viem-utils';
import '../../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../../components/InlineWidget/InlineWidget.js';
import '../../../../../components/MenuList/Dropdown/Dropdown.js';
import { shortenEmail } from '../../../../../shared/utils/functions/shortenEmail/shortenEmail.js';
import '../../../../../components/Popper/Popper/Popper.js';
import '../../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { useFundingContext } from '../../../../../context/FundingContext/FundingContext.js';
import { useSendBalance } from '../../../../../context/SendBalanceContext/SendBalanceContext.js';
import { ActiveWalletInformation } from '../../ActiveWalletInformation/ActiveWalletInformation.js';
import { UnknownWalletInformation } from '../../UnknownWalletInformation/UnknownWalletInformation.js';
import { UserAvatar } from '../../../../../components/UserAvatar/UserAvatar.js';

const DynamicWidgetWalletHeader = ({ variant, }) => {
    const { primaryWallet, user } = useInternalDynamicContext();
    const { open: openSendBalanceModal } = useSendBalance();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet();
    const { supportsFunding, setShowFunding, fundingEnabled } = useFundingContext();
    const { setDynamicWidgetView, setIsOpen } = useWidgetContext();
    const isSendBalanceEnabled = useMemo(() => {
        const connector = primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector;
        if (!connector)
            return false;
        return isEmbeddedConnector(connector);
    }, [primaryWallet]);
    const handleOnClickSend = () => {
        if (variant === 'dropdown') {
            setIsOpen(false);
            openSendBalanceModal().catch((err) => logger.error(err));
        }
        else {
            setDynamicWidgetView('send-balance');
        }
    };
    const renderEmailOrSocialHeader = () => {
        const oauthCredential = getActiveOauthCredential(user);
        if (oauthCredential === null || oauthCredential === void 0 ? void 0 : oauthCredential.publicIdentifier) {
            return oauthCredential.publicIdentifier;
        }
        return shortenEmail(user === null || user === void 0 ? void 0 : user.email);
    };
    const renderWalletHeader = () => {
        const unknownWallet = user === null || user === void 0 ? void 0 : user.verifiedCredentials.find((credential) => credential.walletName === 'unknown');
        if (primaryWallet) {
            return jsx(ActiveWalletInformation, {});
        }
        else if (unknownWallet) {
            return jsx(UnknownWalletInformation, { address: unknownWallet.address });
        }
        else {
            return (jsx("div", { className: 'dynamic-widget-wallet-header__icon-container', children: jsx(UserAvatar, { user: user }) }));
        }
    };
    const isActionsVisible = isSendBalanceEnabled || fundingEnabled;
    return (jsxs("div", { className: 'dynamic-widget-wallet-header', "data-testid": 'dynamic-widget-wallet-header', children: [renderWalletHeader(), primaryWallet ? (jsxs("div", { "data-testid": 'primaryWalletStatus', className: 'dynamic-widget-wallet-header__wallet-info', children: [jsx(SecureTurnkeyWalletCard, { className: 'dynamic-widget-wallet-header__wallet-info__secure-wallet' }), isActionsVisible && (jsxs("div", { className: 'dynamic-widget-wallet-header__wallet-actions', children: [fundingEnabled && (jsx(Button, { expanded: true, dataTestId: 'buy-crypto-button', buttonPadding: 'small', buttonVariant: 'primary', onClick: () => setShowFunding(true), disabled: !supportsFunding, startSlot: 
                                // eslint-disable-next-line react/jsx-wrap-multilines
                                jsx(Icon, { size: 'small', color: 'text-secondary', children: jsx(SvgAdd, {}) }), children: "Buy" })), isSendBalanceEnabled && (jsx(Button, { expanded: true, dataTestId: 'send-balance-button', buttonPadding: 'small', buttonVariant: 'primary', onClick: handleOnClickSend, disabled: isTurnkeyWalletWithoutAuthenticator, startSlot: 
                                // eslint-disable-next-line react/jsx-wrap-multilines
                                jsx(Icon, { size: 'small', color: 'text-secondary', children: jsx(SvgSend, {}) }), children: "Send" }))] }))] })) : (jsx(Typography, { className: 'dynamic-widget-wallet-header__email', variant: 'body_normal', weight: 'regular', children: renderEmailOrSocialHeader() }))] }));
};
React__default.memo(DynamicWidgetWalletHeader);

export { DynamicWidgetWalletHeader };
