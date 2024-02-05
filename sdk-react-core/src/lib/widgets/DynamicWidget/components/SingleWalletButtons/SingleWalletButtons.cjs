'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var checkCircle = require('../../../../shared/assets/check-circle.cjs');
require('@dynamic-labs/wallet-book');
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
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
var helpers = require('../../helpers/helpers.cjs');
require('../../context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../../../components/Button/Button.cjs');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const SingleWalletButtons = () => {
    const { primaryWallet, handleLogOut, user } = useInternalDynamicContext.useInternalDynamicContext();
    const unknownWallet = user === null || user === void 0 ? void 0 : user.verifiedCredentials.find((credential) => credential.walletName === 'unknown');
    return (jsxRuntime.jsxs("div", { className: 'single-wallet-buttons', children: [jsxRuntime.jsx(Button.Button, { dataTestId: 'Copy address', expanded: true, buttonPadding: 'medium', typographyProps: {
                    className: 'single-wallet-buttons--center',
                    variant: 'button_primary',
                }, onClick: () => helpers.copyToClipboard((primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.address) ||
                    (unknownWallet === null || unknownWallet === void 0 ? void 0 : unknownWallet.address) ||
                    (user === null || user === void 0 ? void 0 : user.email) ||
                    ''), feedback: 
                // eslint-disable-next-line react/jsx-wrap-multilines
                jsxRuntime.jsxs("div", { className: 'single-wallet-buttons__copied', children: [jsxRuntime.jsx(checkCircle.ReactComponent, {}), " Copied!"] }), children: "Copy address" }), jsxRuntime.jsx(Button.Button, { dataTestId: 'Disconnect', expanded: true, buttonPadding: 'medium', typographyProps: {
                    className: 'single-wallet-buttons--center',
                    variant: 'button_primary',
                }, onClick: handleLogOut, children: "Disconnect" })] }));
};

exports.SingleWalletButtons = SingleWalletButtons;
