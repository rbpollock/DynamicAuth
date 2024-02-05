import { jsxs, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';
import 'react';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
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
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../config/ApiEndpoint.js';
import '../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
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
import { Typography } from '../../../../components/Typography/Typography.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import { useWidgetContext } from '../../context/DynamicWidgetContext.js';
import { getWalletVerifiedCredential } from '../../../../utils/functions/getWalletVerifiedCredential/getWalletVerifiedCredential.js';
import { EmptyWallets } from '../EmptyWallets/EmptyWallets.js';
import { Wallet } from '../Wallet/Wallet.js';
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

const DynamicWidgetWallets = () => {
    const { t } = useTranslation();
    const { secondaryWallets, user, authMode } = useInternalDynamicContext();
    const { availableWalletsContainerRef } = useWidgetContext();
    const isEmpty = secondaryWallets.length === 0;
    return (jsxs("div", { ref: availableWalletsContainerRef, className: 'dynamic-widget-wallets', "data-testid": 'dynamicWidgetWallets', children: [jsx(Typography, { weight: 'medium', variant: 'body_small', color: 'secondary', className: 'dynamic-widget-wallets__title', copykey: 'dyn_widget.other_wallets', children: t('dyn_widget.other_wallets') }), jsx("div", { className: classNames('dynamic-widget-wallets__body', {
                    'dynamic-widget-wallets__body--apply-height': !isEmpty,
                }), children: isEmpty ? (jsx(EmptyWallets, { copykey: 'dyn_widget.empty_wallets', text: t('dyn_widget.empty_wallets', {
                        action: authMode === 'connect-and-sign'
                            ? t('dyn_widget.empty_wallets_action_link')
                            : t('dyn_widget.empty_wallets_action_connect'),
                    }) })) : (jsx("div", { className: 'dynamic-widget-wallets__body__wallet-list', children: secondaryWallets.map((wallet, index) => {
                        var _a;
                        return (jsx(Wallet, { ens: (_a = getWalletVerifiedCredential(wallet.address, user === null || user === void 0 ? void 0 : user.verifiedCredentials, wallet.chain)) === null || _a === void 0 ? void 0 : _a.nameService, wallet: wallet }, wallet.id));
                    }) })) })] }));
};

export { DynamicWidgetWallets };
