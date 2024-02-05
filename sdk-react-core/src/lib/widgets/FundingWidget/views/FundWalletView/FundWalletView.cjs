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
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var index = require('../../../../shared/utils/hooks/useOnClickOutside/index.cjs');
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
var OpacityTransition = require('../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
var ShadowDOM = require('../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
var FundingContext = require('../../../../context/FundingContext/FundingContext.cjs');

const Modal = ({ onrampUrl }) => {
    const { fundingRef, setShowFunding } = FundingContext.useFundingContext();
    const close = () => {
        setShowFunding(false);
    };
    index.useOnClickOutside(fundingRef, close);
    return (jsxRuntime.jsx("div", { className: 'fund-wallet__modal', "data-testid": 'fund-wallet-modal', children: jsxRuntime.jsx("div", { className: 'fund-wallet__modal-content', ref: fundingRef, children: jsxRuntime.jsx("iframe", { id: 'onramp-iframe', src: onrampUrl, allow: 'camera *;geolocation *', title: 'Crypto Onramp' }) }) }));
};
const FundWalletView = () => {
    const { primaryWallet } = useInternalDynamicContext.useInternalDynamicContext();
    const { showFunding, fundingUrl, fundingEnabled } = FundingContext.useFundingContext();
    if (!fundingEnabled ||
        !showFunding ||
        !fundingUrl ||
        !(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.address)) {
        return null;
    }
    return (jsxRuntime.jsx(ShadowDOM.ShadowDOM, { children: jsxRuntime.jsxs(OpacityTransition.OpacityTransition, { isShown: showFunding, children: [jsxRuntime.jsx("div", { className: 'fund-wallet__backdrop', "aria-hidden": 'true' }), jsxRuntime.jsx("div", { className: 'fund-wallet__modal-container', children: jsxRuntime.jsx(Modal, { onrampUrl: fundingUrl }) })] }) }));
};

exports.FundWalletView = FundWalletView;
exports.Modal = Modal;
