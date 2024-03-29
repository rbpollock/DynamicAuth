import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import { shortenWalletAddress } from '../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
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
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const WalletCannotBeTransferredView = () => {
    const [walletAddress, setWalletAddress] = useState(undefined);
    const { goToInitialView } = useViewContext();
    const { selectedWalletConnector: walletConnector } = useInternalDynamicContext();
    const { t } = useTranslation();
    useEffect(() => {
        const _fetchPublicAddress = () => __awaiter(void 0, void 0, void 0, function* () {
            const address = yield (walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.fetchPublicAddress());
            setWalletAddress(address);
        });
        _fetchPublicAddress();
    }, [walletConnector]);
    const _shortenWalletAddress = shortenWalletAddress(walletAddress);
    return (jsxs("div", { className: 'wallet-cannot-be-transferred-view__container', children: [jsx(Typography, { className: 'wallet-cannot-be-transferred-view__title', as: 'h6', variant: 'title', color: 'primary', weight: 'medium', copykey: 'dyn_wallet_link.cannot_link.title', children: t('dyn_wallet_link.cannot_link.title') }), jsx("div", { className: 'wallet-cannot-be-transferred-view__icon', children: jsx(WalletIcon, { walletKey: walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.key, width: 64, height: 64 }) }), jsx(Typography, { className: 'wallet-cannot-be-transferred-view__shorten-wallet-address', variant: 'body_normal', weight: 'regular', color: 'primary', children: _shortenWalletAddress }), jsx(Typography, { className: 'wallet-cannot-be-transferred-view__copy', variant: 'body_normal', color: 'secondary', weight: 'regular', copykey: 'dyn_wallet_link.cannot_link.description', children: t('dyn_wallet_link.cannot_link.description') }), jsx(Button, { buttonClassName: 'wallet-cannot-be-transferred-view__transfer-alt-wallet-button', buttonVariant: 'primary', expanded: true, buttonPadding: 'large', onClick: goToInitialView, dataTestId: 'wallet-cannot-be-transferred-view-transfer-alt-wallet', copykey: 'dyn_wallet_link.cannot_link.link_other_button', children: t('dyn_wallet_link.cannot_link.link_other_button') }), jsx(Button, { dataTestId: 'wallet-cannot-be-transferred-view-cancel', buttonPadding: 'small', buttonClassName: 'wallet-cannot-be-transferred-view__cancel', onClick: goToInitialView, copykey: 'dyn_wallet_link.cannot_link.cancel_button', children: t('dyn_wallet_link.cannot_link.cancel_button') })] }));
};

export { WalletCannotBeTransferredView };
