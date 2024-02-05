'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');
require('react');
require('@dynamic-labs/utils');
require('../../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var check = require('../../../../shared/assets/check.cjs');
var error = require('../../../../shared/assets/error.cjs');
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
require('../../../Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../ShadowDOM/ShadowDOM.cjs');
require('../../../OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../../Typography/Typography.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
var Spinner = require('../../../IconWithSpinner/Spinner/Spinner.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../IconButton/IconButton.cjs');
require('../../../Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../InlineWidget/InlineWidget.cjs');
require('../../../MenuList/Dropdown/Dropdown.cjs');
require('../../../Popper/Popper/Popper.cjs');
require('../../../Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const Network = ({ iconUrl, isActive, networkName, className, checkboxClassName = '', isChanging, notSupported = false, }) => (jsxRuntime.jsxs("div", { className: classNames.classNames('network', className, {
        'network--not-supported': notSupported,
    }), children: [jsxRuntime.jsxs("div", { className: 'network__container', children: [iconUrl ? (jsxRuntime.jsx("img", { src: iconUrl, className: 'network__title-icon', alt: `${networkName} icon` })) : (jsxRuntime.jsx(error.ReactComponent, {})), jsxRuntime.jsxs("div", { className: 'network__title-container', children: [jsxRuntime.jsx(Typography.Typography, { variant: 'button_primary', className: 'network__title-copy', as: 'span', weight: 'medium', color: notSupported ? 'secondary' : 'primary', children: networkName }), notSupported && (jsxRuntime.jsx(Typography.Typography, { variant: 'body_mini', className: 'network__title-copy', as: 'span', weight: 'medium', color: notSupported ? 'secondary' : 'primary', "data-testid": 'network-not-supported', children: "Switch network in your wallet" }))] })] }), jsxRuntime.jsxs("div", { className: classNames.classNames('network__status-container', {
                'network__status-container--active': isActive,
            }, checkboxClassName), "data-testid": 'single-network-checkbox', children: [isActive && jsxRuntime.jsx(check.ReactComponent, { className: 'network__status-icon' }), isChanging && (jsxRuntime.jsx(Spinner.Spinner, { className: 'network__status-spinner-icon', size: 12 }))] })] }));

exports.Network = Network;
