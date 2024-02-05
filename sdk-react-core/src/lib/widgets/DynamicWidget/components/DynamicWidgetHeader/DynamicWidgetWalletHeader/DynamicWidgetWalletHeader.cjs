'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('../../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var add = require('../../../../../shared/assets/add.cjs');
var send = require('../../../../../shared/assets/send.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../../utils/constants/colors.cjs');
require('../../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getActiveOauthCredential = require('../../../../../utils/functions/getActiveOauthCredential/getActiveOauthCredential.cjs');
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
var useIsTurnkeyWallet = require('../../../../../utils/hooks/useIsTurnkeyWallet/useIsTurnkeyWallet.cjs');
var Typography = require('../../../../../components/Typography/Typography.cjs');
require('../../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../../context/LoadingContext/LoadingContext.cjs');
var Icon = require('../../../../../components/Icon/Icon.cjs');
require('i18next');
var DynamicWidgetContext = require('../../../context/DynamicWidgetContext.cjs');
require('../../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../../../../components/Button/Button.cjs');
require('../../../../../components/IconButton/IconButton.cjs');
require('../../../../../components/Alert/Alert.cjs');
var SecureTurnkeyWalletCard = require('../../../../../components/SecureTurnkeyWalletCard/SecureTurnkeyWalletCard.cjs');
require('@dynamic-labs/viem-utils');
require('../../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../../components/MenuList/Dropdown/Dropdown.cjs');
var shortenEmail = require('../../../../../shared/utils/functions/shortenEmail/shortenEmail.cjs');
require('../../../../../components/Popper/Popper/Popper.cjs');
require('../../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var FundingContext = require('../../../../../context/FundingContext/FundingContext.cjs');
var SendBalanceContext = require('../../../../../context/SendBalanceContext/SendBalanceContext.cjs');
var ActiveWalletInformation = require('../../ActiveWalletInformation/ActiveWalletInformation.cjs');
var UnknownWalletInformation = require('../../UnknownWalletInformation/UnknownWalletInformation.cjs');
var UserAvatar = require('../../../../../components/UserAvatar/UserAvatar.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const DynamicWidgetWalletHeader = ({ variant, }) => {
    const { primaryWallet, user } = useInternalDynamicContext.useInternalDynamicContext();
    const { open: openSendBalanceModal } = SendBalanceContext.useSendBalance();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet.useIsTurnkeyWallet();
    const { supportsFunding, setShowFunding, fundingEnabled } = FundingContext.useFundingContext();
    const { setDynamicWidgetView, setIsOpen } = DynamicWidgetContext.useWidgetContext();
    const isSendBalanceEnabled = React.useMemo(() => {
        const connector = primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector;
        if (!connector)
            return false;
        return walletConnectorCore.isEmbeddedConnector(connector);
    }, [primaryWallet]);
    const handleOnClickSend = () => {
        if (variant === 'dropdown') {
            setIsOpen(false);
            openSendBalanceModal().catch((err) => logger.logger.error(err));
        }
        else {
            setDynamicWidgetView('send-balance');
        }
    };
    const renderEmailOrSocialHeader = () => {
        const oauthCredential = getActiveOauthCredential.getActiveOauthCredential(user);
        if (oauthCredential === null || oauthCredential === void 0 ? void 0 : oauthCredential.publicIdentifier) {
            return oauthCredential.publicIdentifier;
        }
        return shortenEmail.shortenEmail(user === null || user === void 0 ? void 0 : user.email);
    };
    const renderWalletHeader = () => {
        const unknownWallet = user === null || user === void 0 ? void 0 : user.verifiedCredentials.find((credential) => credential.walletName === 'unknown');
        if (primaryWallet) {
            return jsxRuntime.jsx(ActiveWalletInformation.ActiveWalletInformation, {});
        }
        else if (unknownWallet) {
            return jsxRuntime.jsx(UnknownWalletInformation.UnknownWalletInformation, { address: unknownWallet.address });
        }
        else {
            return (jsxRuntime.jsx("div", { className: 'dynamic-widget-wallet-header__icon-container', children: jsxRuntime.jsx(UserAvatar.UserAvatar, { user: user }) }));
        }
    };
    const isActionsVisible = isSendBalanceEnabled || fundingEnabled;
    return (jsxRuntime.jsxs("div", { className: 'dynamic-widget-wallet-header', "data-testid": 'dynamic-widget-wallet-header', children: [renderWalletHeader(), primaryWallet ? (jsxRuntime.jsxs("div", { "data-testid": 'primaryWalletStatus', className: 'dynamic-widget-wallet-header__wallet-info', children: [jsxRuntime.jsx(SecureTurnkeyWalletCard.SecureTurnkeyWalletCard, { className: 'dynamic-widget-wallet-header__wallet-info__secure-wallet' }), isActionsVisible && (jsxRuntime.jsxs("div", { className: 'dynamic-widget-wallet-header__wallet-actions', children: [fundingEnabled && (jsxRuntime.jsx(Button.Button, { expanded: true, dataTestId: 'buy-crypto-button', buttonPadding: 'small', buttonVariant: 'primary', onClick: () => setShowFunding(true), disabled: !supportsFunding, startSlot: 
                                // eslint-disable-next-line react/jsx-wrap-multilines
                                jsxRuntime.jsx(Icon.Icon, { size: 'small', color: 'text-secondary', children: jsxRuntime.jsx(add.ReactComponent, {}) }), children: "Buy" })), isSendBalanceEnabled && (jsxRuntime.jsx(Button.Button, { expanded: true, dataTestId: 'send-balance-button', buttonPadding: 'small', buttonVariant: 'primary', onClick: handleOnClickSend, disabled: isTurnkeyWalletWithoutAuthenticator, startSlot: 
                                // eslint-disable-next-line react/jsx-wrap-multilines
                                jsxRuntime.jsx(Icon.Icon, { size: 'small', color: 'text-secondary', children: jsxRuntime.jsx(send.ReactComponent, {}) }), children: "Send" }))] }))] })) : (jsxRuntime.jsx(Typography.Typography, { className: 'dynamic-widget-wallet-header__email', variant: 'body_normal', weight: 'regular', children: renderEmailOrSocialHeader() }))] }));
};
React__default["default"].memo(DynamicWidgetWalletHeader);

exports.DynamicWidgetWalletHeader = DynamicWidgetWalletHeader;
