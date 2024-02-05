'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
var LoadingContext = require('../../../../context/LoadingContext/LoadingContext.cjs');
var WidgetPortal = require('../../components/WidgetPortal/WidgetPortal.cjs');
require('react');
require('@dynamic-labs/utils');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../../../shared/logger.cjs');
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
require('react-i18next');
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
require('../../components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('i18next');
require('../../context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
var Button = require('../../../../components/Button/Button.cjs');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const UnlinkWalletPopUp = ({ walletId }) => {
    const { handleUnlinkWallet, setSelectedWalletWithAction, authMode } = useInternalDynamicContext.useInternalDynamicContext();
    const { loading, setLoading } = LoadingContext.useLoadingContext();
    const onConfirmClick = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        try {
            setLoading(true);
            yield handleUnlinkWallet(walletId);
            setSelectedWalletWithAction(null);
        }
        catch (error) {
            logger.logger.error(error);
        }
        finally {
            setLoading(false);
        }
    });
    const onCancelClick = () => {
        setSelectedWalletWithAction(null);
    };
    return (jsxRuntime.jsx(WidgetPortal.WidgetPortal, { onBackdropClick: onCancelClick, children: jsxRuntime.jsxs("div", { className: 'unlink-wallet-popup__container', children: [jsxRuntime.jsxs(Typography.Typography, { color: 'primary', className: 'unlink-wallet-popup__title', variant: 'body_normal', as: 'h6', children: [authMode === 'connect-only' ? 'Disconnect' : 'Unlink', " your wallet?"] }), jsxRuntime.jsxs(Typography.Typography, { className: 'unlink-wallet-popup__label', variant: 'body_small', color: 'secondary', children: ["Are you sure you want to", ' ', authMode === 'connect-only' ? 'disconnect' : 'unlink', " your wallet?"] }), jsxRuntime.jsxs(Button.Button, { buttonPadding: 'small', onClick: onConfirmClick, disabled: loading, buttonClassName: 'unlink-wallet-popup__button unlink-wallet-popup__button--shadow', color: 'primary', expanded: true, typographyProps: {
                        variant: 'button_secondary',
                        weight: 'medium',
                    }, dataTestId: 'unlink-wallet-popup-yes-button', children: ["Yes, ", authMode === 'connect-only' ? 'disconnect' : 'unlink'] }), jsxRuntime.jsx(Button.Button, { expanded: true, buttonPadding: 'small', onClick: onCancelClick, buttonVariant: 'secondary', buttonClassName: 'unlink-wallet-popup__button', typographyProps: {
                        variant: 'button_secondary',
                        weight: 'medium',
                    }, children: "No" })] }) }));
};

exports.UnlinkWalletPopUp = UnlinkWalletPopUp;
