import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import { useLoadingContext } from '../../../../context/LoadingContext/LoadingContext.js';
import { WidgetPortal } from '../../components/WidgetPortal/WidgetPortal.js';
import 'react';
import '@dynamic-labs/utils';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../../shared/logger.js';
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
import 'i18next';
import '../../context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { Button } from '../../../../components/Button/Button.js';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const UnlinkWalletPopUp = ({ walletId }) => {
    const { handleUnlinkWallet, setSelectedWalletWithAction, authMode } = useInternalDynamicContext();
    const { loading, setLoading } = useLoadingContext();
    const onConfirmClick = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setLoading(true);
            yield handleUnlinkWallet(walletId);
            setSelectedWalletWithAction(null);
        }
        catch (error) {
            logger.error(error);
        }
        finally {
            setLoading(false);
        }
    });
    const onCancelClick = () => {
        setSelectedWalletWithAction(null);
    };
    return (jsx(WidgetPortal, { onBackdropClick: onCancelClick, children: jsxs("div", { className: 'unlink-wallet-popup__container', children: [jsxs(Typography, { color: 'primary', className: 'unlink-wallet-popup__title', variant: 'body_normal', as: 'h6', children: [authMode === 'connect-only' ? 'Disconnect' : 'Unlink', " your wallet?"] }), jsxs(Typography, { className: 'unlink-wallet-popup__label', variant: 'body_small', color: 'secondary', children: ["Are you sure you want to", ' ', authMode === 'connect-only' ? 'disconnect' : 'unlink', " your wallet?"] }), jsxs(Button, { buttonPadding: 'small', onClick: onConfirmClick, disabled: loading, buttonClassName: 'unlink-wallet-popup__button unlink-wallet-popup__button--shadow', color: 'primary', expanded: true, typographyProps: {
                        variant: 'button_secondary',
                        weight: 'medium',
                    }, dataTestId: 'unlink-wallet-popup-yes-button', children: ["Yes, ", authMode === 'connect-only' ? 'disconnect' : 'unlink'] }), jsx(Button, { expanded: true, buttonPadding: 'small', onClick: onCancelClick, buttonVariant: 'secondary', buttonClassName: 'unlink-wallet-popup__button', typographyProps: {
                        variant: 'button_secondary',
                        weight: 'medium',
                    }, children: "No" })] }) }));
};

export { UnlinkWalletPopUp };
