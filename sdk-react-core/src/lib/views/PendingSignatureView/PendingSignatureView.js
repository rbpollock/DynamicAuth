import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PhantomLedgerWalletName } from '@dynamic-labs/wallet-connector-core';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { pixelToRem } from '../../utils/functions/pixelToRem/pixelToRem.js';
import { requiresTwoStepAuthentication } from '../../utils/functions/requiresTwoStepAuthentication/requiresTwoStepAuthentication.js';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import { useConnectAndSignSplitSteps } from '../../utils/hooks/authenticationHooks/useConnectAndSignSplitSteps/useConnectAndSignSplitSteps.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../components/Typography/Typography.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import { IconWithSpinner, iconRatio } from '../../components/IconWithSpinner/IconWithSpinner.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import { Button } from '../../components/Button/Button.js';
import '../../components/IconButton/IconButton.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const PendingSignatureView = () => {
    const [loading, setLoading] = useState(false);
    const { selectedWalletConnector: walletConnector } = useInternalDynamicContext();
    const { signAlreadyConnectedUser } = useConnectAndSignSplitSteps();
    const { t } = useTranslation();
    const iconSize = 96;
    /**
     * The following check on Phantom+Ledger will be fixed in a future ticket.
     */
    const isPhantomLedger = (walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.name) === PhantomLedgerWalletName;
    if (!walletConnector) {
        return null;
    }
    const handleClick = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setLoading(true);
            yield signAlreadyConnectedUser({ walletConnector });
        }
        catch (e) {
            logger.error(e);
        }
        finally {
            setLoading(false);
        }
    });
    const icon = (jsx(WalletIcon, { walletKey: walletConnector.key, style: {
            height: pixelToRem(iconSize * iconRatio),
            width: pixelToRem(iconSize * iconRatio),
        } }));
    const typographyBodyCopy = isPhantomLedger
        ? t('dyn_pending_signature.phantom_ledger_sign')
        : t('dyn_pending_signature.regular_sign_description');
    return (jsxs("div", { className: 'pending-signature__container', "data-testid": 'pending-signature-view', children: [jsx(IconWithSpinner, { Icon: icon, iconSize: iconSize, isSpinning: true, indicator: 'connected', className: 'pending-signature__icon-with-spinner' }), jsx(Typography, { variant: 'body_normal', weight: 'regular', className: classNames('pending-signature__copy'), copykey: isPhantomLedger
                    ? 'dyn_pending_signature.phantom_ledger_sign'
                    : 'dyn_pending_signature.regular_sign_description', children: typographyBodyCopy }), isPhantomLedger && (jsxs(Typography, { variant: 'body_small', weight: 'regular', className: classNames('pending-signature__copy', 'pending-signature__copy--mini'), copykey: 'dyn_pending_signature.phantom_ledger_warning', children: [jsx("strong", { children: t('dyn_pending_signature.note') }), t('dyn_pending_signature.phantom_ledger_warning')] })), requiresTwoStepAuthentication(walletConnector) && (jsx(Button, { buttonClassName: 'pending-signature__button', onClick: handleClick, loading: loading, buttonVariant: 'primary', buttonPadding: 'large', expanded: true, typographyProps: {
                    variant: 'button_primary',
                    weight: 'medium',
                }, copykey: 'dyn_pending_signature.click_to_sign', children: t('dyn_pending_signature.click_to_sign') }))] }));
};

export { PendingSignatureView };
