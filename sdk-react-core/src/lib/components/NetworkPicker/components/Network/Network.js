import { jsxs, jsx } from 'react/jsx-runtime';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';
import 'react';
import '@dynamic-labs/utils';
import '../../../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgCheck } from '../../../../shared/assets/check.js';
import { ReactComponent as SvgError } from '../../../../shared/assets/error.js';
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
import '../../../Transition/ZoomTransition/ZoomTransition.js';
import '../../../Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../Transition/OpacityTransition/OpacityTransition.js';
import '../../../ShadowDOM/ShadowDOM.js';
import '../../../OverlayCard/OverlayCard.context.js';
import '../../../../context/FooterAnimationContext/index.js';
import '../../../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../../Typography/Typography.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import { Spinner } from '../../../IconWithSpinner/Spinner/Spinner.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../IconButton/IconButton.js';
import '../../../Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../InlineWidget/InlineWidget.js';
import '../../../MenuList/Dropdown/Dropdown.js';
import '../../../Popper/Popper/Popper.js';
import '../../../Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const Network = ({ iconUrl, isActive, networkName, className, checkboxClassName = '', isChanging, notSupported = false, }) => (jsxs("div", { className: classNames('network', className, {
        'network--not-supported': notSupported,
    }), children: [jsxs("div", { className: 'network__container', children: [iconUrl ? (jsx("img", { src: iconUrl, className: 'network__title-icon', alt: `${networkName} icon` })) : (jsx(SvgError, {})), jsxs("div", { className: 'network__title-container', children: [jsx(Typography, { variant: 'button_primary', className: 'network__title-copy', as: 'span', weight: 'medium', color: notSupported ? 'secondary' : 'primary', children: networkName }), notSupported && (jsx(Typography, { variant: 'body_mini', className: 'network__title-copy', as: 'span', weight: 'medium', color: notSupported ? 'secondary' : 'primary', "data-testid": 'network-not-supported', children: "Switch network in your wallet" }))] })] }), jsxs("div", { className: classNames('network__status-container', {
                'network__status-container--active': isActive,
            }, checkboxClassName), "data-testid": 'single-network-checkbox', children: [isActive && jsx(SvgCheck, { className: 'network__status-icon' }), isChanging && (jsx(Spinner, { className: 'network__status-spinner-icon', size: 12 }))] })] }));

export { Network };
