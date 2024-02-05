'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
var getChainIcon = require('../../../../shared/utils/functions/chain/getChainIcon.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('react');
require('@dynamic-labs/utils');
require('@dynamic-labs/iconic');
require('../../../../context/ViewContext/ViewContext.cjs');
require('../../../../shared/consts/index.cjs');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../../../context/MockContext/MockContext.cjs');
require('../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
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

const DynamicBridgeWidgetEmptyCard = ({ chain }) => {
    const { t } = reactI18next.useTranslation();
    const { bridgeChainsToConnect, setShowAuthFlow, setShowBridgeWidget } = useInternalDynamicContext.useInternalDynamicContext();
    if (!(bridgeChainsToConnect === null || bridgeChainsToConnect === void 0 ? void 0 : bridgeChainsToConnect.length) || !chain) {
        return null;
    }
    const chainInfo = walletConnectorCore.getChainInfo(chain);
    const ChainIcon = getChainIcon.getChainIcon(chain);
    return (jsxRuntime.jsxs("div", { role: 'button', className: 'dynamic-bridge-widget-empty-card', onClick: () => {
            setShowBridgeWidget(false);
            setShowAuthFlow(true);
        }, children: [jsxRuntime.jsx(ChainIcon, { className: 'dynamic-bridge-widget-empty-card__icon' }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'medium', as: 'span', color: 'primary', className: 'dynamic-bridge-widget-empty-card__text', copykey: 'dyn_bridge.widget.connect_with_network', children: t('dyn_bridge.widget.connect_with_network', {
                    blockchainName: chainInfo === null || chainInfo === void 0 ? void 0 : chainInfo.blockchainName,
                }) })] }));
};

exports.DynamicBridgeWidgetEmptyCard = DynamicBridgeWidgetEmptyCard;
