import { jsxs, jsx } from 'react/jsx-runtime';
import React__default, { useMemo } from 'react';
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
import '../../../../shared/consts/index.js';
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
import '../../../../components/Alert/Alert.js';
import '../../../../components/ShadowDOM/ShadowDOM.js';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../../components/Transition/OpacityTransition/OpacityTransition.js';
import { OptionsSwitcher } from '../../../../components/OptionsSwitcher/OptionsSwitcher.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../../../../components/OverlayCard/OverlayCard.context.js';
import { PasskeyCreatedSuccessBanner } from '../../../../components/PasskeyCreatedSuccessBanner/PasskeyCreatedSuccessBanner.js';
import '../../../../context/FooterAnimationContext/index.js';
import '../../../../context/QrCodeContext/QrCodeContext.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import { useWidgetContext } from '../../context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { DynamicWidgetWalletHeader } from './DynamicWidgetWalletHeader/DynamicWidgetWalletHeader.js';

const options = [
    {
        key: 'wallets',
        label: 'Wallets',
    },
    {
        key: 'profile',
        label: 'Profile',
    },
];
const DynamicWidgetHeader = ({ variant, }) => {
    const { dynamicWidgetView, setDynamicWidgetView } = useWidgetContext();
    const { multiWallet } = useInternalDynamicContext();
    const isKYCEnabled = useKYCFlag();
    // Marks 'Profile' view as active when client goes to 'Edit Profile' view
    const dynamicWidgetSwitcherOverwriteValue = useMemo(() => {
        if (!isKYCEnabled && !multiWallet)
            return 'wallets';
        if (dynamicWidgetView === 'edit-profile')
            return 'profile';
        return dynamicWidgetView;
    }, [dynamicWidgetView, isKYCEnabled, multiWallet]);
    return (jsxs("div", { className: 'dynamic-widget-header', children: [isKYCEnabled && multiWallet && (jsx(OptionsSwitcher, { rootClassName: 'dynamic-widget-header__switcher', value: dynamicWidgetSwitcherOverwriteValue, options: options, onChange: (view) => setDynamicWidgetView(view) })), jsx(PasskeyCreatedSuccessBanner, { className: 'dynamic-widget-header__passkey-success' }), (dynamicWidgetSwitcherOverwriteValue === 'wallets' ||
                (dynamicWidgetSwitcherOverwriteValue === 'profile' &&
                    !multiWallet)) && jsx(DynamicWidgetWalletHeader, { variant: variant })] }));
};
const MemoizedDynamicWidgetHeader = React__default.memo(DynamicWidgetHeader);

export { DynamicWidgetHeader, MemoizedDynamicWidgetHeader, MemoizedDynamicWidgetHeader as default };
