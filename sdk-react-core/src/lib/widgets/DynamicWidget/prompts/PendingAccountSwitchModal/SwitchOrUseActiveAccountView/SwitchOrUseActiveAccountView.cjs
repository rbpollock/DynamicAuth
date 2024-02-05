'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var walletBook = require('@dynamic-labs/wallet-book');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var shortenWalletAddress = require('../../../../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.cjs');
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
var Typography = require('../../../../../components/Typography/Typography.cjs');
require('../../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
var Divider = require('../../../../../components/Divider/Divider.cjs');
require('qrcode');
require('../../../../../context/LoadingContext/LoadingContext.cjs');
var Icon = require('../../../../../components/Icon/Icon.cjs');
require('i18next');
require('../../../context/DynamicWidgetContext.cjs');
require('../../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../../../../components/Button/Button.cjs');
require('../../../../../components/IconButton/IconButton.cjs');
require('../../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../../components/Popper/Popper/Popper.cjs');
require('../../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const SwitchOrUseActiveAccountView = ({ connectedWallet, selectedWalletToSwitchTo, }) => {
    const { setSelectedWalletWithAction, setSelectedWalletConnectorKey, setPrimaryWallet, } = useInternalDynamicContext.useInternalDynamicContext();
    const onUseActiveWalletClick = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs(Typography.Typography, { variant: 'body_normal', color: 'secondary', weight: 'regular', "data-testid": 'content', children: ["Wallet", ' ', jsxRuntime.jsx(Typography.Typography, { as: 'span', weight: 'medium', color: 'primary', children: shortenWalletAddress.shortenWalletAddress(selectedWalletToSwitchTo === null || selectedWalletToSwitchTo === void 0 ? void 0 : selectedWalletToSwitchTo.address, 3, 3) }), ' ', "is not active in ", selectedWalletToSwitchTo === null || selectedWalletToSwitchTo === void 0 ? void 0 : selectedWalletToSwitchTo.connector.name, ". To make active, open your ", selectedWalletToSwitchTo === null || selectedWalletToSwitchTo === void 0 ? void 0 : selectedWalletToSwitchTo.connector.name, " wallet and switch to this account."] }), jsxRuntime.jsx(Divider.Divider, { fullWidth: true, text: 'Or' }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'primary', children: "Use your active wallet" }), jsxRuntime.jsxs(Button.Button, { buttonClassName: 'default-prompt-modal__button', expanded: true, type: 'button', buttonPadding: 'medium', typographyProps: { variant: 'button_secondary' }, onClick: onUseActiveWalletClick, dataTestId: 'use-active-wallet-button', children: ["Select", ' ', jsxRuntime.jsx(Icon.Icon, { size: 'xsmall', children: jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: selectedWalletToSwitchTo === null || selectedWalletToSwitchTo === void 0 ? void 0 : selectedWalletToSwitchTo.connector.key }) }), ' ', shortenWalletAddress.shortenWalletAddress(connectedWallet === null || connectedWallet === void 0 ? void 0 : connectedWallet.address, 3, 3)] })] }));
};

exports.SwitchOrUseActiveAccountView = SwitchOrUseActiveAccountView;
