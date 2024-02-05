import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import { useViewContext } from '../../context/ViewContext/ViewContext.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import 'react';
import '@dynamic-labs/utils';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { pixelToRem } from '../../utils/functions/pixelToRem/pixelToRem.js';
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
import { IconWithSpinner, iconRatio } from '../../components/IconWithSpinner/IconWithSpinner.js';
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

const WalletSignSpinnerView = () => {
    const { goToInitialView } = useViewContext();
    const { t } = useTranslation();
    const { setMultiWalletWidgetState, setSelectedWalletConnectorKey, selectedWalletConnector: walletConnector, } = useInternalDynamicContext();
    if (!walletConnector) {
        return null;
    }
    const { key } = walletConnector;
    const iconSize = 96;
    const handleClose = () => __awaiter(void 0, void 0, void 0, function* () {
        goToInitialView();
        setMultiWalletWidgetState('idle');
        setSelectedWalletConnectorKey(null);
        yield (walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.endSession());
    });
    const icon = (jsx(WalletIcon, { walletKey: key, style: {
            height: pixelToRem(iconSize * iconRatio),
            width: pixelToRem(iconSize * iconRatio),
        } }));
    return (jsxs("div", { className: 'wallet-sign-spinner__container', "data-testid": 'wallet-sign-spinner-view', children: [jsx(IconWithSpinner, { Icon: icon, iconSize: iconSize, isSpinning: true }), jsx(Typography, { variant: 'body_normal', weight: 'regular', className: classNames('wallet-sign-spinner__copy'), copykey: 'dyn_wallet_transfer.sign.spinner.confirm_transfer', children: t('dyn_wallet_transfer.sign.spinner.confirm_transfer') }), jsx(Button, { expanded: true, buttonPadding: 'large', buttonVariant: 'primary', buttonClassName: 'wallet-sign-spinner__button', onClick: () => handleClose(), typographyProps: {
                    variant: 'button_primary',
                    weight: 'medium',
                }, copykey: 'dyn_wallet_transfer.sign.spinner.cancel', children: t('dyn_wallet_transfer.sign.spinner.cancel') })] }));
};

export { WalletSignSpinnerView };
