'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');
require('react');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
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
var Typography = require('../../../../components/Typography/Typography.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
var DynamicWidgetContext = require('../../context/DynamicWidgetContext.cjs');
var getWalletVerifiedCredential = require('../../../../utils/functions/getWalletVerifiedCredential/getWalletVerifiedCredential.cjs');
var EmptyWallets = require('../EmptyWallets/EmptyWallets.cjs');
var Wallet = require('../Wallet/Wallet.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const DynamicWidgetWallets = () => {
    const { t } = reactI18next.useTranslation();
    const { secondaryWallets, user, authMode } = useInternalDynamicContext.useInternalDynamicContext();
    const { availableWalletsContainerRef } = DynamicWidgetContext.useWidgetContext();
    const isEmpty = secondaryWallets.length === 0;
    return (jsxRuntime.jsxs("div", { ref: availableWalletsContainerRef, className: 'dynamic-widget-wallets', "data-testid": 'dynamicWidgetWallets', children: [jsxRuntime.jsx(Typography.Typography, { weight: 'medium', variant: 'body_small', color: 'secondary', className: 'dynamic-widget-wallets__title', copykey: 'dyn_widget.other_wallets', children: t('dyn_widget.other_wallets') }), jsxRuntime.jsx("div", { className: classNames.classNames('dynamic-widget-wallets__body', {
                    'dynamic-widget-wallets__body--apply-height': !isEmpty,
                }), children: isEmpty ? (jsxRuntime.jsx(EmptyWallets.EmptyWallets, { copykey: 'dyn_widget.empty_wallets', text: t('dyn_widget.empty_wallets', {
                        action: authMode === 'connect-and-sign'
                            ? t('dyn_widget.empty_wallets_action_link')
                            : t('dyn_widget.empty_wallets_action_connect'),
                    }) })) : (jsxRuntime.jsx("div", { className: 'dynamic-widget-wallets__body__wallet-list', children: secondaryWallets.map((wallet, index) => {
                        var _a;
                        return (jsxRuntime.jsx(Wallet.Wallet, { ens: (_a = getWalletVerifiedCredential.getWalletVerifiedCredential(wallet.address, user === null || user === void 0 ? void 0 : user.verifiedCredentials, wallet.chain)) === null || _a === void 0 ? void 0 : _a.nameService, wallet: wallet }, wallet.id));
                    }) })) })] }));
};

exports.DynamicWidgetWallets = DynamicWidgetWallets;
