'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var walletBook = require('@dynamic-labs/wallet-book');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
require('@dynamic-labs/utils');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var pixelToRem = require('../../utils/functions/pixelToRem/pixelToRem.cjs');
var requiresTwoStepAuthentication = require('../../utils/functions/requiresTwoStepAuthentication/requiresTwoStepAuthentication.cjs');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
var useConnectAndSignSplitSteps = require('../../utils/hooks/authenticationHooks/useConnectAndSignSplitSteps/useConnectAndSignSplitSteps.cjs');
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

const PendingSignatureView = () => {
    const [loading, setLoading] = React.useState(false);
    const { selectedWalletConnector: walletConnector } = useInternalDynamicContext.useInternalDynamicContext();
    const { signAlreadyConnectedUser } = useConnectAndSignSplitSteps.useConnectAndSignSplitSteps();
    const { t } = reactI18next.useTranslation();
    const iconSize = 96;
    /**
     * The following check on Phantom+Ledger will be fixed in a future ticket.
     */
    const isPhantomLedger = (walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.name) === walletConnectorCore.PhantomLedgerWalletName;
    if (!walletConnector) {
        return null;
    }
    const handleClick = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        try {
            setLoading(true);
            yield signAlreadyConnectedUser({ walletConnector });
        }
        catch (e) {
            logger.logger.error(e);
        }
        finally {
            setLoading(false);
        }
    });
    const icon = (jsxRuntime.jsx(walletBook.WalletIcon, { walletKey: walletConnector.key, style: {
            height: pixelToRem.pixelToRem(iconSize * IconWithSpinner.iconRatio),
            width: pixelToRem.pixelToRem(iconSize * IconWithSpinner.iconRatio),
        } }));
    const typographyBodyCopy = isPhantomLedger
        ? t('dyn_pending_signature.phantom_ledger_sign')
        : t('dyn_pending_signature.regular_sign_description');
    return (jsxRuntime.jsxs("div", { className: 'pending-signature__container', "data-testid": 'pending-signature-view', children: [jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { Icon: icon, iconSize: iconSize, isSpinning: true, indicator: 'connected', className: 'pending-signature__icon-with-spinner' }), jsxRuntime.jsx(Typography.Typography, { variant: 'body_normal', weight: 'regular', className: classNames.classNames('pending-signature__copy'), copykey: isPhantomLedger
                    ? 'dyn_pending_signature.phantom_ledger_sign'
                    : 'dyn_pending_signature.regular_sign_description', children: typographyBodyCopy }), isPhantomLedger && (jsxRuntime.jsxs(Typography.Typography, { variant: 'body_small', weight: 'regular', className: classNames.classNames('pending-signature__copy', 'pending-signature__copy--mini'), copykey: 'dyn_pending_signature.phantom_ledger_warning', children: [jsxRuntime.jsx("strong", { children: t('dyn_pending_signature.note') }), t('dyn_pending_signature.phantom_ledger_warning')] })), requiresTwoStepAuthentication.requiresTwoStepAuthentication(walletConnector) && (jsxRuntime.jsx(Button.Button, { buttonClassName: 'pending-signature__button', onClick: handleClick, loading: loading, buttonVariant: 'primary', buttonPadding: 'large', expanded: true, typographyProps: {
                    variant: 'button_primary',
                    weight: 'medium',
                }, copykey: 'dyn_pending_signature.click_to_sign', children: t('dyn_pending_signature.click_to_sign') }))] }));
};

exports.PendingSignatureView = PendingSignatureView;
