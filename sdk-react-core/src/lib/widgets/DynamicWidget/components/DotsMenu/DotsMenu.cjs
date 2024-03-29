'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('@dynamic-labs/utils');
require('../../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var threeDots = require('../../../../shared/assets/three-dots.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var index = require('../../../../shared/utils/hooks/useOnClickOutside/index.cjs');
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
var Icon = require('../../../../components/Icon/Icon.cjs');
require('i18next');
require('../../context/DynamicWidgetContext.cjs');
var DotsMenuDropdown = require('../DotsMenuDropdown/DotsMenuDropdown.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var IconButton = require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
var Dropdown = require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const DotsMenu = ({ options, buttonClassName, buttonClassNameWithOpenMenu, direction = 'right', }) => {
    const dotsMenuRef = React.useRef(null);
    const popperContentRef = React.useRef(null);
    const [showMenu, setShowMenu] = React.useState(false);
    index.useOnClickOutside(popperContentRef, () => setShowMenu(false));
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(IconButton.IconButton, { ref: dotsMenuRef, onClick: () => setShowMenu(true), "data-testid": 'dotsMenu', className: showMenu ? buttonClassNameWithOpenMenu : buttonClassName, children: jsxRuntime.jsx(Icon.Icon, { children: jsxRuntime.jsx(threeDots.ReactComponent, {}) }) }), jsxRuntime.jsx(Dropdown.Dropdown, { isOpen: showMenu, onClickOutside: () => setShowMenu(false), onScroll: () => setShowMenu(false), anchorRef: dotsMenuRef, ref: popperContentRef, anchorOrigin: direction === 'right' ? 'bottom-left' : 'top-right', transformOrigin: direction === 'right' ? 'top-left' : 'bottom-right', children: jsxRuntime.jsx(DotsMenuDropdown.DotsMenuDropdown, { options: options, setShowMenu: setShowMenu }) })] }));
};

exports.DotsMenu = DotsMenu;
