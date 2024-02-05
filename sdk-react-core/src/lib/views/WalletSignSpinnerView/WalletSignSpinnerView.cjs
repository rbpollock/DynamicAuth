'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var walletBook = require('@dynamic-labs/wallet-book');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
var ViewContext = require('../../context/ViewContext/ViewContext.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
require('react');
require('@dynamic-labs/utils');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var pixelToRem = require('../../utils/functions/pixelToRem/pixelToRem.cjs');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../components/Typography/Typography.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
var IconWithSpinner = require('../../components/IconWithSpinner/IconWithSpinner.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../components/Button/Button.cjs');
require('../../components/IconButton/IconButton.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const WalletSignSpinnerView = () => {
    const { goToInitialView } = ViewContext.useViewContext();
    const { t } = reactI18next.useTranslation();
    const { setMultiWalletWidgetState, setSelectedWalletConnectorKey, selectedWalletConnector: walletConnector, } = useInternalDynamicContext.useInternalDynamicContext();
    if (!walletConnector) {
        return null;
    }
    const { key } = walletConnector;
    const iconSize = 96;
    const handleClose = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        goToInitialView();
        setMultiWalletWidgetState('idle');
        setSelectedWalletConnectorKey(null);
        yield (walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.endSession());
    });
    const icon = (jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: key, style: {
            height: pixelToRem.pixelToRem(iconSize * IconWithSpinner.iconRatio),
            width: pixelToRem.pixelToRem(iconSize * IconWithSpinner.iconRatio),
        } }));
    return (jsxRuntime.jsxs("div", { className: 'wallet-sign-spinner__container', "data-testid": 'wallet-sign-spinner-view', children: [jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { Icon: icon, iconSize: iconSize, isSpinning: true }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', className: classNames.classNames('wallet-sign-spinner__copy'), copykey: 'dyn_wallet_transfer.sign.spinner.confirm_transfer', children: t('dyn_wallet_transfer.sign.spinner.confirm_transfer') }), jsxRuntime.jsx(Button.Button, { expanded: true, buttonPadding: 'large', buttonVariant: 'primary', buttonClassName: 'wallet-sign-spinner__button', onClick: () => handleClose(), typographyProps: {
                    variant: 'button_primary',
                    weight: 'medium',
                }, copykey: 'dyn_wallet_transfer.sign.spinner.cancel', children: t('dyn_wallet_transfer.sign.spinner.cancel') })] }));
};

exports.WalletSignSpinnerView = WalletSignSpinnerView;
