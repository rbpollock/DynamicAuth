import { __awaiter } from '../../../../../../../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { isMobile } from '@dynamic-labs/utils';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import { logger } from '@dynamic-labs/wallet-connector-core';
import 'react';
import { useInternalDynamicContext } from '../../../../../context/DynamicContext/useInternalDynamicContext.js';
import '../../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../../context/ErrorContext/ErrorContext.js';
import '../../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '../../../../../utils/constants/colors.js';
import '../../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../../config/ApiEndpoint.js';
import { useConnectAndSignSplitSteps } from '../../../../../utils/hooks/authenticationHooks/useConnectAndSignSplitSteps/useConnectAndSignSplitSteps.js';
import '../../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../../../../context/MockContext/MockContext.js';
import '../../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../../../components/ShadowDOM/ShadowDOM.js';
import '../../../../../components/OverlayCard/OverlayCard.context.js';
import '../../../../../context/FooterAnimationContext/index.js';
import '../../../../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../../../../components/Typography/Typography.js';
import '../../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import { DefaultPromptModal } from '../../DefaultPromptModal/DefaultPromptModal.js';
import 'qrcode';
import '../../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../../context/DynamicWidgetContext.js';
import '../../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { Button } from '../../../../../components/Button/Button.js';
import '../../../../../components/IconButton/IconButton.js';
import '../../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../../components/InlineWidget/InlineWidget.js';
import '../../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../../components/Popper/Popper/Popper.js';
import '../../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const DefaultPendingSignModalContent = () => {
    const { selectedWalletConnector, setMultiWalletWidgetState } = useInternalDynamicContext();
    const { signAlreadyConnectedUser } = useConnectAndSignSplitSteps();
    const onClickToSign = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (selectedWalletConnector) {
                yield signAlreadyConnectedUser({
                    walletConnector: selectedWalletConnector,
                });
            }
        }
        catch (e) {
            logger.error(e);
        }
        finally {
            setMultiWalletWidgetState('idle');
        }
    });
    return (jsxs(DefaultPromptModal, { showCloseButton: true, dataTestId: 'pending-account-switch', icon: jsx(WalletIcon, { walletKey: selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.key }), title: `Sign in with ${selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name}`, children: [jsx(Typography, { variant: 'body_normal', color: 'secondary', weight: 'regular', "data-testid": 'content', children: "Sign the message in your wallet to approve linking this wallet to your account" }), isMobile() &&
                !(selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.canConnectViaCustodialService) && (jsx(Button, { buttonClassName: 'default-prompt-modal__button', expanded: true, type: 'button', buttonPadding: 'medium', typographyProps: { variant: 'button_secondary' }, onClick: onClickToSign, dataTestId: 'click-to-sign-button', children: "Click to Sign" }))] }));
};

export { DefaultPendingSignModalContent };
