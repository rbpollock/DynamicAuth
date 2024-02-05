import { jsx } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { isMobile } from '@dynamic-labs/utils';
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
import { widgetModalZIndex } from '../../../../shared/consts/index.js';
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
import '../../../../components/Transition/OpacityTransition/OpacityTransition.js';
import { ShadowDOM } from '../../../../components/ShadowDOM/ShadowDOM.js';
import '../../../../components/OverlayCard/OverlayCard.context.js';
import '../../../../context/FooterAnimationContext/index.js';
import '../../../../context/QrCodeContext/QrCodeContext.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import { DynamicUserProfileLayout } from '../../../../layout/DynamicUserProfileLayout/DynamicUserProfileLayout.js';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import 'formik';
import '../../../../components/InlineWidget/InlineWidget.js';
import { IsBrowser } from '../../../../components/IsBrowser/IsBrowser.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import { PopperProvider } from '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'i18next';
import { useWidgetContext } from '../../context/DynamicWidgetContext.js';
import { DynamicWidgetCard } from '../DynamicWidgetCard/DynamicWidgetCard.js';
import { DynamicWidgetVariants } from '../DynamicWidgetVariants/DynamicWidgetVariants.js';

const DynamicUserProfile = ({ variant, }) => {
    const { projectSettings } = useInternalDynamicContext();
    const { setIsOpen, isOpen, widgetRef } = useWidgetContext();
    const _variant = useMemo(() => {
        if (isMobile()) {
            return 'modal';
        }
        return variant;
    }, [variant]);
    if (!projectSettings)
        return null;
    return (jsx(IsBrowser, { children: jsx(PopperProvider, { children: jsx(DynamicWidgetVariants, { isOpen: isOpen, setIsOpen: setIsOpen, variant: _variant, zIndex: widgetModalZIndex, children: jsx(DynamicWidgetCard, { ref: widgetRef, children: jsx(DynamicUserProfileLayout, { variant: variant }) }) }) }) }));
};
const ShadowedDynamicUserProfile = () => (jsx(ShadowDOM, { zIndex: widgetModalZIndex, children: jsx(DynamicUserProfile, {}) }));

export { DynamicUserProfile, ShadowedDynamicUserProfile };
