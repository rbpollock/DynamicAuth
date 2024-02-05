'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var walletBook = require('@dynamic-labs/wallet-book');
require('react');
require('@dynamic-labs/utils');
require('../../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
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
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../DynamicWidget/context/DynamicWidgetContext.cjs');
var DotsMenu = require('../../../DynamicWidget/components/DotsMenu/DotsMenu.cjs');
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
var WalletInformationCard = require('../../../../components/WalletInformationCard/WalletInformationCard.cjs');
var useFetchNameService = require('../../../DynamicWidget/hooks/useFetchNameService/useFetchNameService.cjs');

const DynamicBridgeWalletCardBody = ({ walletAddress, walletBalance, walletKey, onDisconnectClick }) => {
    const { t } = reactI18next.useTranslation();
    const nameService = useFetchNameService.useFetchNameService(walletAddress);
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
    return (jsxRuntime.jsx(WalletInformationCard.WalletInformationCard, { ens: nameService === null || nameService === void 0 ? void 0 : nameService.name, address: walletAddress, icon: jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: walletKey }), balance: walletBalance, menu: jsxRuntime.jsx(DotsMenu.DotsMenu, { options: options }), copykey: 'dyn_bridge.widget' }));
};

exports.DynamicBridgeWalletCardBody = DynamicBridgeWalletCardBody;
