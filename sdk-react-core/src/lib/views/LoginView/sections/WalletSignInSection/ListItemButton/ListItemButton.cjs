'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('@dynamic-labs/iconic');
require('../../../../../context/ViewContext/ViewContext.cjs');
var stroke = require('../../../../../shared/assets/stroke.cjs');
var classNames = require('../../../../../utils/functions/classNames/classNames.cjs');
require('@dynamic-labs/utils');
require('../../../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../../context/ErrorContext/ErrorContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../../utils/constants/colors.cjs');
require('../../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../../config/ApiEndpoint.cjs');
require('../../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../../../../context/MockContext/MockContext.cjs');
require('../../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../../context/FooterAnimationContext/index.cjs');
require('../../../../../context/QrCodeContext/QrCodeContext.cjs');
var Badge = require('../../../../../components/Badge/Badge.cjs');
require('../../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../../context/LoadingContext/LoadingContext.cjs');
var Icon = require('../../../../../components/Icon/Icon.cjs');
require('i18next');
require('../../../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../../components/IconButton/IconButton.cjs');
require('../../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var ListTile = require('../../../../../components/ListTile/ListTile.cjs');
require('../../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../../components/Popper/Popper/Popper.cjs');
require('../../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const ListItemButton = ({ text, onClick, numberOfWallets, disabled = false, copykey, }) => {
    const numberOfWalletsText = React.useMemo(() => {
        if (numberOfWallets <= 10) {
            return numberOfWallets;
        }
        return `${Math.floor(numberOfWallets / 10) * 10}+`;
    }, [numberOfWallets]);
    const trailing = (jsxRuntime.jsxs("div", { className: 'list-item-button__trailing', children: [jsxRuntime.jsx("div", { className: classNames.classNames('list-item-button__trailing-child', 'list-item-button__trailing-label'), children: jsxRuntime.jsx(Badge.Badge, { text: `${numberOfWalletsText} available` }) }), jsxRuntime.jsx("div", { className: classNames.classNames('list-item-button__trailing-child', 'list-item-button__trailing-icon'), children: jsxRuntime.jsx(Icon.Icon, { color: 'text-primary', size: 'small', children: jsxRuntime.jsx(stroke.ReactComponent, {}) }) })] }));
    return (jsxRuntime.jsx(ListTile.ListTile, { trailing: trailing, onClick: onClick, className: 'list-item-button', disabled: disabled, copykey: copykey, children: text }));
};

exports.ListItemButton = ListItemButton;
