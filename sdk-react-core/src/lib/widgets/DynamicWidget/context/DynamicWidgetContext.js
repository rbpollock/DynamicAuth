import { jsx } from 'react/jsx-runtime';
import { createContext, useRef, useCallback, useMemo, useContext } from 'react';
import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/utils';
import '@dynamic-labs/wallet-connector-core';
import '../../../context/CaptchaContext/CaptchaContext.js';
import '../../../context/ErrorContext/ErrorContext.js';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import '../../../utils/constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../config/ApiEndpoint.js';
import '../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../context/ThemeContext/ThemeContext.js';
import { useKYCFlag } from '../../../utils/hooks/useKYCFlag/useKYCFlag.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../../context/MockContext/MockContext.js';
import '../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../components/Alert/Alert.js';
import '../../../components/ShadowDOM/ShadowDOM.js';
import '../../../components/IconButton/IconButton.js';
import '../../../components/InlineWidget/InlineWidget.js';
import '../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../components/Popper/Popper/Popper.js';
import '../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../../../components/OverlayCard/OverlayCard.context.js';
import '../../../context/FooterAnimationContext/index.js';
import '../../../context/QrCodeContext/QrCodeContext.js';
import '../../../context/WalletGroupContext/WalletGroupContext.js';
import '../components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../context/LoadingContext/LoadingContext.js';
import '../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import { useViewController } from '../hooks/useViewController/useViewController.js';
import '@dynamic-labs/viem-utils';
import '../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';

const DynamicWidgetContext = createContext(undefined);
const DynamicWidgetContextProvider = ({ children, }) => {
    const widgetRef = useRef(null);
    const inlineControlsRef = useRef(null);
    const availableWalletsContainerRef = useRef(null);
    const { setShowDynamicUserProfile, showDynamicUserProfile, multiWallet } = useInternalDynamicContext();
    const isKYCEnabled = useKYCFlag();
    const { view: dynamicWidgetView, setView: setDynamicWidgetView, goToInitialView: goToInitialDynamicWidgetView, } = useViewController(isKYCEnabled && !multiWallet ? 'profile' : 'wallets');
    const goToProfileView = useCallback(() => {
        if (isKYCEnabled)
            return setDynamicWidgetView('profile');
        setDynamicWidgetView('wallets');
    }, [isKYCEnabled, multiWallet]);
    const value = useMemo(() => ({
        availableWalletsContainerRef,
        dynamicWidgetView,
        goToInitialDynamicWidgetView,
        goToProfileView,
        inlineControlsRef,
        isOpen: showDynamicUserProfile,
        setDynamicWidgetView,
        setIsOpen: setShowDynamicUserProfile,
        widgetRef,
    }), [
        dynamicWidgetView,
        setShowDynamicUserProfile,
        goToInitialDynamicWidgetView,
        goToProfileView,
        showDynamicUserProfile,
    ]);
    return (jsx(DynamicWidgetContext.Provider, { value: value, children: children }));
};
const useWidgetContext = () => {
    const context = useContext(DynamicWidgetContext);
    if (context === undefined) {
        throw new Error('usage of useWidgetContext not wrapped in `DynamicWidgetContextProvider`.');
    }
    return context;
};

export { DynamicWidgetContext, DynamicWidgetContextProvider, useWidgetContext };
