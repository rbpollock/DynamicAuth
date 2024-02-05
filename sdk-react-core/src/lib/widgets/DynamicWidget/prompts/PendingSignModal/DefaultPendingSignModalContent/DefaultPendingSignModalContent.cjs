'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var utils = require('@dynamic-labs/utils');
var walletBook = require('@dynamic-labs/wallet-book');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
require('react');
var useInternalDynamicContext = require('../../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('../../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../../../../utils/constants/colors.cjs');
require('../../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../../config/ApiEndpoint.cjs');
var useConnectAndSignSplitSteps = require('../../../../../utils/hooks/authenticationHooks/useConnectAndSignSplitSteps/useConnectAndSignSplitSteps.cjs');
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
var DefaultPromptModal = require('../../DefaultPromptModal/DefaultPromptModal.cjs');
require('qrcode');
require('../../../../../context/LoadingContext/LoadingContext.cjs');
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

const DefaultPendingSignModalContent = () => {
    const { selectedWalletConnector, setMultiWalletWidgetState } = useInternalDynamicContext.useInternalDynamicContext();
    const { signAlreadyConnectedUser } = useConnectAndSignSplitSteps.useConnectAndSignSplitSteps();
    const onClickToSign = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        try {
            if (selectedWalletConnector) {
                yield signAlreadyConnectedUser({
                    walletConnector: selectedWalletConnector,
                });
            }
        }
        catch (e) {
            walletConnectorCore.logger.error(e);
        }
        finally {
            setMultiWalletWidgetState('idle');
        }
    });
    return (jsxRuntime.jsxs(DefaultPromptModal.DefaultPromptModal, { showCloseButton: true, dataTestId: 'pending-account-switch', icon: jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.key }), title: `Sign in with ${selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name}`, children: [jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', color: 'secondary', weight: 'regular', "data-testid": 'content', children: "Sign the message in your wallet to approve linking this wallet to your account" }), utils.isMobile() &&
                !(selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.canConnectViaCustodialService) && (jsxRuntime.jsx(Button.Button, { buttonClassName: 'default-prompt-modal__button', expanded: true, type: 'button', buttonPadding: 'medium', typographyProps: { variant: 'button_secondary' }, onClick: onClickToSign, dataTestId: 'click-to-sign-button', children: "Click to Sign" }))] }));
};

exports.DefaultPendingSignModalContent = DefaultPendingSignModalContent;
