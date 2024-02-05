import { jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import 'react';
import '@dynamic-labs/utils';
import '../../../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
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
import '@dynamic-labs/types';
import 'yup';
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
import { DotsMenu } from '../../../DynamicWidget/components/DotsMenu/DotsMenu.js';
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
import { WalletInformationCard } from '../../../../components/WalletInformationCard/WalletInformationCard.js';
import { useFetchNameService } from '../../../DynamicWidget/hooks/useFetchNameService/useFetchNameService.js';

const DynamicBridgeWalletCardBody = ({ walletAddress, walletBalance, walletKey, onDisconnectClick }) => {
    const { t } = useTranslation();
    const nameService = useFetchNameService(walletAddress);
    const options = [
        {
            Icon: null,
            callback: () => (nameService === null || nameService === void 0 ? void 0 : nameService.name) && navigator.clipboard.writeText(nameService === null || nameService === void 0 ? void 0 : nameService.name),
            hide: !(nameService === null || nameService === void 0 ? void 0 : nameService.name),
            text: t('dyn_bridge.widget.copy.ens'),
        },
        {
            Icon: null,
            callback: () => walletAddress && navigator.clipboard.writeText(walletAddress),
            hide: !walletAddress,
            text: t('dyn_bridge.widget.copy.address'),
        },
        {
            Icon: null,
            callback: () => onDisconnectClick === null || onDisconnectClick === void 0 ? void 0 : onDisconnectClick(),
            hide: !onDisconnectClick,
            text: t('dyn_bridge.widget.disconnect'),
        },
    ];
    return (jsx(WalletInformationCard, { ens: nameService === null || nameService === void 0 ? void 0 : nameService.name, address: walletAddress, icon: jsx(WalletIcon, { walletKey: walletKey }), balance: walletBalance, menu: jsx(DotsMenu, { options: options }), copykey: 'dyn_bridge.widget' }));
};

export { DynamicBridgeWalletCardBody };
