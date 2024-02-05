import { jsx, jsxs } from 'react/jsx-runtime';
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
import { ReactComponent as SvgClose } from '../../../../shared/assets/close.js';
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
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { IconButton } from '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const WidgetPortal = ({ children, onBackdropClick, disablePadding, showCloseButton, }) => {
    const { accountSwitchState, setMultiWalletWidgetState, setSelectedWalletWithAction, selectedWalletWithAction, } = useInternalDynamicContext();
    const handleBackdropClick = (e) => {
        e.stopPropagation();
        if (!selectedWalletWithAction &&
            accountSwitchState === 'primary_not_connected') {
            return;
        }
        setSelectedWalletWithAction(null);
        setMultiWalletWidgetState('idle');
        if (!onBackdropClick)
            return;
        onBackdropClick();
    };
    return (jsx("div", { className: 'widget-portal', onClick: (e) => handleBackdropClick(e), "data-testid": 'backdrop', children: jsxs("div", { className: classNames('widget-portal__container', {
                'widget-portal__container--no-padding': disablePadding,
            }), onClick: (e) => e.stopPropagation(), children: [showCloseButton && (jsx("div", { className: 'widget-portal__container__header', children: jsx(IconButton, { className: 'widget-portal__container__close-button', onClick: (e) => handleBackdropClick(e), type: 'button', "data-testid": 'close-button', children: jsx(SvgClose, {}) }) })), children] }) }));
};

export { WidgetPortal };
