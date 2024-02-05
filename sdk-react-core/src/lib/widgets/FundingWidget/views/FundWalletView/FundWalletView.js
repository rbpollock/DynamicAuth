import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import { useOnClickOutside } from '../../../../shared/utils/hooks/useOnClickOutside/index.js';
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
import { OpacityTransition } from '../../../../components/Transition/OpacityTransition/OpacityTransition.js';
import { ShadowDOM } from '../../../../components/ShadowDOM/ShadowDOM.js';
import '../../../../components/OverlayCard/OverlayCard.context.js';
import '../../../../context/FooterAnimationContext/index.js';
import '../../../../context/QrCodeContext/QrCodeContext.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../../DynamicWidget/context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { useFundingContext } from '../../../../context/FundingContext/FundingContext.js';

const Modal = ({ onrampUrl }) => {
    const { fundingRef, setShowFunding } = useFundingContext();
    const close = () => {
        setShowFunding(false);
    };
    useOnClickOutside(fundingRef, close);
    return (jsx("div", { className: 'fund-wallet__modal', "data-testid": 'fund-wallet-modal', children: jsx("div", { className: 'fund-wallet__modal-content', ref: fundingRef, children: jsx("iframe", { id: 'onramp-iframe', src: onrampUrl, allow: 'camera *;geolocation *', title: 'Crypto Onramp' }) }) }));
};
const FundWalletView = () => {
    const { primaryWallet } = useInternalDynamicContext();
    const { showFunding, fundingUrl, fundingEnabled } = useFundingContext();
    if (!fundingEnabled ||
        !showFunding ||
        !fundingUrl ||
        !(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.address)) {
        return null;
    }
    return (jsx(ShadowDOM, { children: jsxs(OpacityTransition, { isShown: showFunding, children: [jsx("div", { className: 'fund-wallet__backdrop', "aria-hidden": 'true' }), jsx("div", { className: 'fund-wallet__modal-container', children: jsx(Modal, { onrampUrl: fundingUrl }) })] }) }));
};

export { FundWalletView, Modal };
