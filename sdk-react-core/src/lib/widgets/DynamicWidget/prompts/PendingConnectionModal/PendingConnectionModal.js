import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { isSocialWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import { DefaultPromptModal } from '../DefaultPromptModal/DefaultPromptModal.js';
import 'react';
import '@dynamic-labs/utils';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getReferencedAccount } from '../../../../utils/functions/getReferencedAccount/getReferencedAccount.js';
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
import '../../components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import { AuthProviderIcon } from '../../../../components/AuthProviderIcon/AuthProviderIcon.js';
import { capitalize } from '../../helpers/helpers.js';
import '../../context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const PendingConnectionModal = () => {
    var _a;
    const { selectedWalletConnector, authToken, selectedWalletWithAction } = useInternalDynamicContext();
    let title;
    let description;
    if (selectedWalletWithAction &&
        isSocialWalletConnector(selectedWalletWithAction.wallet.connector)) {
        const account = getReferencedAccount(authToken, selectedWalletWithAction.wallet.id);
        title = `Reconnecting ${capitalize((_a = account === null || account === void 0 ? void 0 : account.oauthProvider) !== null && _a !== void 0 ? _a : '')}`;
    }
    else {
        title = `Connect ${selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name} wallet`;
        description = (jsxs(Fragment, { children: ["Connect your", ' ', jsx(Typography, { as: 'span', weight: 'medium', color: 'primary', children: selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name }), ' ', "wallet to make active."] }));
    }
    return (jsx(DefaultPromptModal, { showCloseButton: true, dataTestId: 'pending-connection-modal', icon: jsx(AuthProviderIcon // eslint-disable-line
        , { jwt: authToken, wallet: selectedWalletWithAction === null || selectedWalletWithAction === void 0 ? void 0 : selectedWalletWithAction.wallet }), title: title, children: jsx(Typography, { variant: 'body_normal', color: 'secondary', weight: 'regular', "data-testid": 'content', children: description }) }));
};

export { PendingConnectionModal };
