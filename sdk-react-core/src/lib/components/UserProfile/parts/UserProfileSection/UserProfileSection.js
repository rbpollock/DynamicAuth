import { jsxs, jsx } from 'react/jsx-runtime';
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
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
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

const UserProfileSection = ({ title, children, }) => (jsxs("div", { className: 'user-profile-section', children: [title && (jsx(Typography, { as: 'h6', color: 'secondary', weight: 'medium', variant: 'body_small', className: 'user-profile-section__title', children: title })), children] }));

export { UserProfileSection };
