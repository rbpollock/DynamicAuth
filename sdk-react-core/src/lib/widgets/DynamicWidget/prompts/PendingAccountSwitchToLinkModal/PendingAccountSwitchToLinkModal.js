import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useEffect } from 'react';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/utils';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
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
import { Typography } from '../../../../components/Typography/Typography.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import { DefaultPromptModal } from '../DefaultPromptModal/DefaultPromptModal.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const PendingAccountSwitchToLinkModal = () => {
    const { selectedWalletConnector } = useInternalDynamicContext();
    useEffect(() => {
        //flow client library only supports one connected wallet at any given time.
        const disconnectAndConnect = () => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            if ((selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.connectedChain) !== 'FLOW') {
                return;
            }
            yield ((_a = selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.endSession) === null || _a === void 0 ? void 0 : _a.call(selectedWalletConnector));
            (_b = selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.connect) === null || _b === void 0 ? void 0 : _b.call(selectedWalletConnector);
        });
        disconnectAndConnect();
    }, [selectedWalletConnector]);
    return (jsx(DefaultPromptModal, { showCloseButton: true, dataTestId: 'pending-account-switch', icon: jsx(WalletIcon, { walletKey: selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.key }), title: `Switch wallet in ${selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name}`, children: jsxs(Typography, { variant: 'body_normal', color: 'secondary', weight: 'regular', "data-testid": 'content', children: ["To link a new wallet, open", ' ', jsx(Typography, { as: 'span', weight: 'medium', color: 'primary', children: selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name }), ' ', "and switch to the account you want to link."] }) }));
};

export { PendingAccountSwitchToLinkModal };
