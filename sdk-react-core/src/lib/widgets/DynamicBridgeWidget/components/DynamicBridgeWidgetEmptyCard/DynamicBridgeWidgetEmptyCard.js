import { jsxs, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { getChainInfo } from '@dynamic-labs/wallet-connector-core';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import { getChainIcon } from '../../../../shared/utils/functions/chain/getChainIcon.js';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import 'react';
import '@dynamic-labs/utils';
import '@dynamic-labs/iconic';
import '../../../../context/ViewContext/ViewContext.js';
import '../../../../shared/consts/index.js';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
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
import { Typography } from '../../../../components/Typography/Typography.js';
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

const DynamicBridgeWidgetEmptyCard = ({ chain }) => {
    const { t } = useTranslation();
    const { bridgeChainsToConnect, setShowAuthFlow, setShowBridgeWidget } = useInternalDynamicContext();
    if (!(bridgeChainsToConnect === null || bridgeChainsToConnect === void 0 ? void 0 : bridgeChainsToConnect.length) || !chain) {
        return null;
    }
    const chainInfo = getChainInfo(chain);
    const ChainIcon = getChainIcon(chain);
    return (jsxs("div", { role: 'button', className: 'dynamic-bridge-widget-empty-card', onClick: () => {
            setShowBridgeWidget(false);
            setShowAuthFlow(true);
        }, children: [jsx(ChainIcon, { className: 'dynamic-bridge-widget-empty-card__icon' }), jsx(Typography, { variant: 'body_normal', weight: 'medium', as: 'span', color: 'primary', className: 'dynamic-bridge-widget-empty-card__text', copykey: 'dyn_bridge.widget.connect_with_network', children: t('dyn_bridge.widget.connect_with_network', {
                    blockchainName: chainInfo === null || chainInfo === void 0 ? void 0 : chainInfo.blockchainName,
                }) })] }));
};

export { DynamicBridgeWidgetEmptyCard };
