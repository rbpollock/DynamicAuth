import { jsxs, jsx } from 'react/jsx-runtime';
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
import { ReactComponent as SvgCheckCircle } from '../../../../shared/assets/check-circle.js';
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
import { copyToClipboard } from '../../helpers/helpers.js';
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

const SingleWalletButtons = () => {
    const { primaryWallet, handleLogOut, user } = useInternalDynamicContext();
    const unknownWallet = user === null || user === void 0 ? void 0 : user.verifiedCredentials.find((credential) => credential.walletName === 'unknown');
    return (jsxs("div", { className: 'single-wallet-buttons', children: [jsx(Button, { dataTestId: 'Copy address', expanded: true, buttonPadding: 'medium', typographyProps: {
                    className: 'single-wallet-buttons--center',
                    variant: 'button_primary',
                }, onClick: () => copyToClipboard((primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.address) ||
                    (unknownWallet === null || unknownWallet === void 0 ? void 0 : unknownWallet.address) ||
                    (user === null || user === void 0 ? void 0 : user.email) ||
                    ''), feedback: 
                // eslint-disable-next-line react/jsx-wrap-multilines
                jsxs("div", { className: 'single-wallet-buttons__copied', children: [jsx(SvgCheckCircle, {}), " Copied!"] }), children: "Copy address" }), jsx(Button, { dataTestId: 'Disconnect', expanded: true, buttonPadding: 'medium', typographyProps: {
                    className: 'single-wallet-buttons--center',
                    variant: 'button_primary',
                }, onClick: handleLogOut, children: "Disconnect" })] }));
};

export { SingleWalletButtons };
