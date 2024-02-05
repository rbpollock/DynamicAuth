'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');
require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var close = require('../../../../shared/assets/close.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../../../context/MockContext/MockContext.cjs');
require('../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var IconButton = require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const WidgetPortal = ({ children, onBackdropClick, disablePadding, showCloseButton, }) => {
    const { accountSwitchState, setMultiWalletWidgetState, setSelectedWalletWithAction, selectedWalletWithAction, } = useInternalDynamicContext.useInternalDynamicContext();
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
    return (jsxRuntime.jsx("div", { className: 'widget-portal', onClick: (e) => handleBackdropClick(e), "data-testid": 'backdrop', children: jsxRuntime.jsxs("div", { className: classNames.classNames('widget-portal__container', {
                'widget-portal__container--no-padding': disablePadding,
            }), onClick: (e) => e.stopPropagation(), children: [showCloseButton && (jsxRuntime.jsx("div", { className: 'widget-portal__container__header', children: jsxRuntime.jsx(IconButton.IconButton, { className: 'widget-portal__container__close-button', onClick: (e) => handleBackdropClick(e), type: 'button', "data-testid": 'close-button', children: jsxRuntime.jsx(close.ReactComponent, {}) }) })), children] }) }));
};

exports.WidgetPortal = WidgetPortal;
