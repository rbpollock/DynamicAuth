import { __awaiter } from '../../../../../../../_virtual/_tslib.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useCallback } from 'react';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../../context/ErrorContext/ErrorContext.js';
import '../../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import { shortenWalletAddress } from '../../../../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import '../../../../../utils/constants/colors.js';
import '../../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../../config/ApiEndpoint.js';
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
import { Divider } from '../../../../../components/Divider/Divider.js';
import 'qrcode';
import '../../../../../context/LoadingContext/LoadingContext.js';
import { Icon } from '../../../../../components/Icon/Icon.js';
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

const SwitchOrUseActiveAccountView = ({ connectedWallet, selectedWalletToSwitchTo, }) => {
    const { setSelectedWalletWithAction, setSelectedWalletConnectorKey, setPrimaryWallet, } = useInternalDynamicContext();
    const onUseActiveWalletClick = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        if (!connectedWallet) {
            return;
        }
        if (connectedWallet.connector.connectedChain === 'FLOW') {
            (_b = (_a = connectedWallet.connector).endSession) === null || _b === void 0 ? void 0 : _b.call(_a);
        }
        setSelectedWalletWithAction({ action: 'select', wallet: connectedWallet });
        setPrimaryWallet(connectedWallet === null || connectedWallet === void 0 ? void 0 : connectedWallet.id);
        setSelectedWalletConnectorKey(connectedWallet === null || connectedWallet === void 0 ? void 0 : connectedWallet.connector.key);
    }), [
        connectedWallet,
        setSelectedWalletWithAction,
        setPrimaryWallet,
        setSelectedWalletConnectorKey,
    ]);
    return (jsxs(Fragment, { children: [jsxs(Typography, { variant: 'body_normal', color: 'secondary', weight: 'regular', "data-testid": 'content', children: ["Wallet", ' ', jsx(Typography, { as: 'span', weight: 'medium', color: 'primary', children: shortenWalletAddress(selectedWalletToSwitchTo === null || selectedWalletToSwitchTo === void 0 ? void 0 : selectedWalletToSwitchTo.address, 3, 3) }), ' ', "is not active in ", selectedWalletToSwitchTo === null || selectedWalletToSwitchTo === void 0 ? void 0 : selectedWalletToSwitchTo.connector.name, ". To make active, open your ", selectedWalletToSwitchTo === null || selectedWalletToSwitchTo === void 0 ? void 0 : selectedWalletToSwitchTo.connector.name, " wallet and switch to this account."] }), jsx(Divider, { fullWidth: true, text: 'Or' }), jsx(Typography, { variant: 'body_normal', color: 'primary', children: "Use your active wallet" }), jsxs(Button, { buttonClassName: 'default-prompt-modal__button', expanded: true, type: 'button', buttonPadding: 'medium', typographyProps: { variant: 'button_secondary' }, onClick: onUseActiveWalletClick, dataTestId: 'use-active-wallet-button', children: ["Select", ' ', jsx(Icon, { size: 'xsmall', children: jsx(WalletIcon, { walletKey: selectedWalletToSwitchTo === null || selectedWalletToSwitchTo === void 0 ? void 0 : selectedWalletToSwitchTo.connector.key }) }), ' ', shortenWalletAddress(connectedWallet === null || connectedWallet === void 0 ? void 0 : connectedWallet.address, 3, 3)] })] }));
};

export { SwitchOrUseActiveAccountView };
