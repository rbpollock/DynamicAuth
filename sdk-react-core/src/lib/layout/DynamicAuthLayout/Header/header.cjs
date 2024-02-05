'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/CaptchaContext/CaptchaContext.cjs');
var ErrorContext = require('../../../context/ErrorContext/ErrorContext.cjs');
var ViewContext = require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var arrowLeft = require('../../../shared/assets/arrow-left.cjs');
var close = require('../../../shared/assets/close.cjs');
var footerInfoIcon = require('../../../shared/assets/footer-info-icon.cjs');
var questionMark = require('../../../shared/assets/question-mark.cjs');
require('@dynamic-labs/wallet-book');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
var AccountExistsContext = require('../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../config/ApiEndpoint.cjs');
require('../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../../context/MockContext/MockContext.cjs');
require('../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../components/OverlayCard/OverlayCard.context.cjs');
var index = require('../../../context/FooterAnimationContext/index.cjs');
var useAuthLayoutChecks = require('../../../utils/hooks/useAuthLayoutChecks/useAuthLayoutChecks.cjs');
var Typography = require('../../../components/Typography/Typography.cjs');
var Skeleton = require('../../../components/Skeleton/Skeleton.cjs');
var Tooltip = require('../../../components/Tooltip/Tooltip.cjs');
var QrCodeContext = require('../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var ModalHeader = require('../../../components/ModalHeader/ModalHeader.cjs');
var IconButton = require('../../../components/IconButton/IconButton.cjs');
require('../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../components/InlineWidget/InlineWidget.cjs');
require('../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../components/Popper/Popper/Popper.cjs');
require('../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const Header = ({ onClose: handleClose, heading, projectSettings, walletConnector, copykey, }) => {
    const { clearStatesOnBackClick, selectedWalletConnector } = useInternalDynamicContext.useInternalDynamicContext();
    const { setError } = ErrorContext.useErrorContext();
    const { setShowQrCodeImage } = QrCodeContext.useQrCodeContext();
    const { isFooterExpanded, setIsFooterExpanded } = index.useFooterAnimationContext();
    const { goToInitialView } = ViewContext.useViewContext();
    const { showBackButton, showCloseButton, showQrCodePreHeader, showHelpContent, isWalletListTypeView, displayBorderBelowHeader, } = useAuthLayoutChecks.useAuthLayoutChecks(walletConnector);
    const { setExistentAccountData } = AccountExistsContext.useAccountExistsContext();
    const handleBackClick = React.useCallback(() => {
        goToInitialView();
        setExistentAccountData(undefined);
        setError(undefined);
        // on back button click in Coinbase wallet clearing state would kill connection and refresh the page
        if ((selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name) !== 'Coinbase') {
            clearStatesOnBackClick();
        }
    }, [
        goToInitialView,
        setExistentAccountData,
        setError,
        selectedWalletConnector === null || selectedWalletConnector === void 0 ? void 0 : selectedWalletConnector.name,
        clearStatesOnBackClick,
    ]);
    const closeButton = showCloseButton && handleClose && (jsxRuntime.jsx(IconButton.IconButton, { onClick: handleClose, type: 'button', id: 'close-button', "data-testid": 'close-button', className: 'header__icon', children: jsxRuntime.jsx(close.ReactComponent, {}) }));
    const infoButton = showHelpContent && (jsxRuntime.jsx(Tooltip.Tooltip, { content: 'Need some help?', className: 'header__tooltip', children: jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: () => setIsFooterExpanded(!isFooterExpanded), "data-testid": 'info-button', className: 'header__icon', children: isWalletListTypeView ? jsxRuntime.jsx(questionMark.ReactComponent, {}) : jsxRuntime.jsx(footerInfoIcon.ReactComponent, {}) }) }, 'info-button'));
    const leadingButtons = [];
    if (showBackButton) {
        leadingButtons.push(jsxRuntime.jsx(IconButton.IconButton, { type: 'button', onClick: handleBackClick, "data-testid": 'back-button', className: 'header__icon', children: jsxRuntime.jsx(arrowLeft.ReactComponent, {}) }, 'back-button'));
    }
    // if has close button and info button, info button should be on the right
    if (closeButton && infoButton) {
        leadingButtons.push(infoButton);
    }
    const qrCodePreHeader = (jsxRuntime.jsxs("div", { className: 'qr-code-view__scan-issue-message', children: [jsxRuntime.jsx(Typography.Typography, { color: 'primary', variant: 'body_small', children: "If you're having issues scanning, click\u00A0" }), jsxRuntime.jsx("button", { className: 'qr-code-view__scan-issue-button', onClick: () => setShowQrCodeImage(true), children: "here" })] }));
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { leading: leadingButtons, trailing: closeButton || infoButton, displayBorder: displayBorderBelowHeader, children: jsxRuntime.jsx(Typography.Typography, { as: 'h1', variant: 'title', color: 'primary', "data-testid": 'dynamic-auth-modal-heading', className: 'header__typography', copykey: copykey, children: !projectSettings ? (jsxRuntime.jsx(Skeleton.Skeleton, { className: 'header__skeleton' })) : (heading) }) }), showQrCodePreHeader && qrCodePreHeader] }));
};

exports.Header = Header;
