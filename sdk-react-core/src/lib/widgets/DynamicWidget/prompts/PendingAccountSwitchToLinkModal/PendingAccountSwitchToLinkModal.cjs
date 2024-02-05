'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var walletBook = require('@dynamic-labs/wallet-book');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/utils');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
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
require('../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
var DefaultPromptModal = require('../DefaultPromptModal/DefaultPromptModal.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const PendingAccountSwitchToLinkModal = () => {
    const { selectedWalletConnector } = useInternalDynamicContext.useInternalDynamicContext();
    React.useEffect(() => {
        //flow client library only supports one connected wallet at any given time.
        const disconnectAndConnect = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            if ((selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.connectedChain) !== 'FLOW') {
                return;
            }
            yield ((_a = selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.endSession) === null || _a === void 0 ? void 0 : _a.call(selectedWalletConnector));
            (_b = selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.connect) === null || _b === void 0 ? void 0 : _b.call(selectedWalletConnector);
        });
        disconnectAndConnect();
    }, [selectedWalletConnector]);
    return (jsxRuntime.jsx(DefaultPromptModal.DefaultPromptModal, { showCloseButton: true, dataTestId: 'pending-account-switch', icon: jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.key }), title: `Switch wallet in ${selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name}`, children: jsxRuntime.jsxs(Typography.Typography, { variant: 'body_normal', color: 'secondary', weight: 'regular', "data-testid": 'content', children: ["To link a new wallet, open", ' ', jsxRuntime.jsx(Typography.Typography, { as: 'span', weight: 'medium', color: 'primary', children: selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name }), ' ', "and switch to the account you want to link."] }) }));
};

exports.PendingAccountSwitchToLinkModal = PendingAccountSwitchToLinkModal;
