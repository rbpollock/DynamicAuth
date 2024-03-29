import { jsx, jsxs } from 'react/jsx-runtime';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgPromptAccountSwitch } from '../../../../shared/assets/prompt-account-switch.js';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../../shared/consts/index.js';
import { WidgetPortal } from '../../components/WidgetPortal/WidgetPortal.js';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
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
import '../../../../context/LoadingContext/LoadingContext.js';
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

const DetectedNewWalletModal = () => {
    const { setMultiWalletWidgetState, primaryWallet } = useInternalDynamicContext();
    const handleClick = () => {
        setMultiWalletWidgetState('awaiting_signature', undefined, 'linking_new_wallet');
    };
    return (jsx(WidgetPortal, { children: jsxs("div", { className: 'detected-new-wallet-modal__content', children: [jsx(Typography, { variant: 'body_normal', color: 'primary', children: "Account Change Detected" }), jsx(SvgPromptAccountSwitch, {}), jsxs(Typography, { variant: 'body_small', color: 'secondary', children: ["Your active account in ", primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector.name, " has changed. This account is not currently linked to this app. Do you want to add it?"] }), jsx(Button, { expanded: true, onClick: handleClick, typographyProps: {
                        variant: 'button_secondary',
                    }, children: "Yes, link this wallet" })] }) }));
};

export { DetectedNewWalletModal };
