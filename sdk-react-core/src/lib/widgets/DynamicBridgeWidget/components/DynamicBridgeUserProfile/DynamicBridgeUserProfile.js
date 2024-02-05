import { jsx, jsxs } from 'react/jsx-runtime';
import { isMobile } from '@dynamic-labs/utils';
import { useDynamicBridgeWidgetContext } from '../../context/DynamicBridgeWidgetContext/DynamicBridgeWidgetContext.js';
import { DynamicWidgetVariants } from '../../../DynamicWidget/components/DynamicWidgetVariants/DynamicWidgetVariants.js';
import { widgetModalZIndex } from '../../../../shared/consts/index.js';
import { DynamicWidgetCard } from '../../../DynamicWidget/components/DynamicWidgetCard/DynamicWidgetCard.js';
import { DynamicBridgeWidgetViews } from '../DynamicBridgeWidgetViews/DynamicBridgeWidgetViews.js';
import 'react';
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
import '@dynamic-labs/multi-wallet';
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../config/ApiEndpoint.js';
import '../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../../context/ThemeContext/ThemeContext.js';
import { useKYCFlag } from '../../../../utils/hooks/useKYCFlag/useKYCFlag.js';
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
import '../../../../components/ShadowDOM/ShadowDOM.js';
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
import { OptionsSwitcher } from '../../../../components/OptionsSwitcher/OptionsSwitcher.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const options = [
    {
        key: 'profile',
        label: 'Profile',
    },
    {
        key: 'wallets',
        label: 'Wallets',
    },
];
const DynamicBridgeUserProfile = ({ variant: rawVariant, }) => {
    const { widgetRef, events, bridgeWidgetView, setBridgeWidgetView } = useDynamicBridgeWidgetContext();
    const { setShowBridgeWidget, showBridgeWidget } = useInternalDynamicContext();
    const { onDynamicBridgeWidgetClose } = events;
    const variant = isMobile() ? 'modal' : rawVariant;
    const DynamicBridgeViewSwitcher = (OptionsSwitcher);
    const isKYCEnabled = useKYCFlag();
    return (jsx(DynamicWidgetVariants, { transitionEvents: {
            onUnmount: onDynamicBridgeWidgetClose,
        }, isOpen: showBridgeWidget, setIsOpen: setShowBridgeWidget, variant: variant, zIndex: widgetModalZIndex, children: jsxs(DynamicWidgetCard, { ref: widgetRef, children: [isKYCEnabled && (jsx("div", { className: 'dynamic-bridge-user-profile__switcher', children: jsx(DynamicBridgeViewSwitcher, { options: options, value: bridgeWidgetView, onChange: (view) => setBridgeWidgetView(view) }) })), jsx(DynamicBridgeWidgetViews, {})] }) }));
};

export { DynamicBridgeUserProfile };
