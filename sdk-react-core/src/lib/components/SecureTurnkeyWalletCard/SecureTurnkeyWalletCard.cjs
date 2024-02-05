'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var useIsTurnkeyWallet = require('../../utils/hooks/useIsTurnkeyWallet/useIsTurnkeyWallet.cjs');
var usePasskeyRecovery = require('../../utils/hooks/usePasskeyRecovery/usePasskeyRecovery.cjs');
var Button = require('../Button/Button.cjs');
var Typography = require('../Typography/Typography.cjs');

const SecureTurnkeyWalletCard = ({ className }) => {
    const { t } = reactI18next.useTranslation();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet.useIsTurnkeyWallet();
    const { initPasskeyRecoveryProcess } = usePasskeyRecovery.usePasskeyRecovery();
    if (!isTurnkeyWalletWithoutAuthenticator)
        return null;
    return (jsxRuntime.jsxs("div", { className: classNames.classNames('secure-turnkey-wallet-card', className), children: [jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', weight: 'regular', className: 'secure-turnkey-wallet-card__text', color: 'primary', copykey: 'dyn_secure_pregenerated_wallet.description', children: t('dyn_secure_pregenerated_wallet.description') }), jsxRuntime.jsx(Button.Button, { onClick: initPasskeyRecoveryProcess, buttonVariant: 'brand-primary', color: 'primary', typographyProps: {
                    color: 'inherit',
                }, showInternalLoading: false, copykey: 'dyn_secure_pregenerated_wallet.secure_button', children: t('dyn_secure_pregenerated_wallet.secure_button') })] }));
};

exports.SecureTurnkeyWalletCard = SecureTurnkeyWalletCard;
