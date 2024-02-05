import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useCallback } from 'react';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../context/CaptchaContext/CaptchaContext.js';
import { useErrorContext } from '../../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgArrowLeft } from '../../../shared/assets/arrow-left.js';
import { ReactComponent as SvgClose } from '../../../shared/assets/close.js';
import { ReactComponent as SvgFooterInfoIcon } from '../../../shared/assets/footer-info-icon.js';
import { ReactComponent as SvgQuestionMark } from '../../../shared/assets/question-mark.js';
import '@dynamic-labs/wallet-book';
import '../../../utils/constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../../context/AccessDeniedContext/AccessDeniedContext.js';
import { useAccountExistsContext } from '../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../config/ApiEndpoint.js';
import '../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../../context/MockContext/MockContext.js';
import '../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../components/ShadowDOM/ShadowDOM.js';
import '../../../components/OverlayCard/OverlayCard.context.js';
import { useFooterAnimationContext } from '../../../context/FooterAnimationContext/index.js';
import { useAuthLayoutChecks } from '../../../utils/hooks/useAuthLayoutChecks/useAuthLayoutChecks.js';
import { Typography } from '../../../components/Typography/Typography.js';
import { Skeleton } from '../../../components/Skeleton/Skeleton.js';
import { Tooltip } from '../../../components/Tooltip/Tooltip.js';
import { useQrCodeContext } from '../../../context/QrCodeContext/QrCodeContext.js';
import '../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { ModalHeader } from '../../../components/ModalHeader/ModalHeader.js';
import { IconButton } from '../../../components/IconButton/IconButton.js';
import '../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../components/InlineWidget/InlineWidget.js';
import '../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../components/Popper/Popper/Popper.js';
import '../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const Header = ({ onClose: handleClose, heading, projectSettings, walletConnector, copykey, }) => {
    const { clearStatesOnBackClick, selectedWalletConnector } = useInternalDynamicContext();
    const { setError } = useErrorContext();
    const { setShowQrCodeImage } = useQrCodeContext();
    const { isFooterExpanded, setIsFooterExpanded } = useFooterAnimationContext();
    const { goToInitialView } = useViewContext();
    const { showBackButton, showCloseButton, showQrCodePreHeader, showHelpContent, isWalletListTypeView, displayBorderBelowHeader, } = useAuthLayoutChecks(walletConnector);
    const { setExistentAccountData } = useAccountExistsContext();
    const handleBackClick = useCallback(() => {
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
    const closeButton = showCloseButton && handleClose && (jsx(IconButton, { onClick: handleClose, type: 'button', id: 'close-button', "data-testid": 'close-button', className: 'header__icon', children: jsx(SvgClose, {}) }));
    const infoButton = showHelpContent && (jsx(Tooltip, { content: 'Need some help?', className: 'header__tooltip', children: jsx(IconButton, { type: 'button', onClick: () => setIsFooterExpanded(!isFooterExpanded), "data-testid": 'info-button', className: 'header__icon', children: isWalletListTypeView ? jsx(SvgQuestionMark, {}) : jsx(SvgFooterInfoIcon, {}) }) }, 'info-button'));
    const leadingButtons = [];
    if (showBackButton) {
        leadingButtons.push(jsx(IconButton, { type: 'button', onClick: handleBackClick, "data-testid": 'back-button', className: 'header__icon', children: jsx(SvgArrowLeft, {}) }, 'back-button'));
    }
    // if has close button and info button, info button should be on the right
    if (closeButton && infoButton) {
        leadingButtons.push(infoButton);
    }
    const qrCodePreHeader = (jsxs("div", { className: 'qr-code-view__scan-issue-message', children: [jsx(Typography, { color: 'primary', variant: 'body_small', children: "If you're having issues scanning, click\u00A0" }), jsx("button", { className: 'qr-code-view__scan-issue-button', onClick: () => setShowQrCodeImage(true), children: "here" })] }));
    return (jsxs(Fragment, { children: [jsx(ModalHeader, { leading: leadingButtons, trailing: closeButton || infoButton, displayBorder: displayBorderBelowHeader, children: jsx(Typography, { as: 'h1', variant: 'title', color: 'primary', "data-testid": 'dynamic-auth-modal-heading', className: 'header__typography', copykey: copykey, children: !projectSettings ? (jsx(Skeleton, { className: 'header__skeleton' })) : (heading) }) }), showQrCodePreHeader && qrCodePreHeader] }));
};

export { Header };
