import { jsxs, jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { useIsTurnkeyWallet } from '../../utils/hooks/useIsTurnkeyWallet/useIsTurnkeyWallet.js';
import { usePasskeyRecovery } from '../../utils/hooks/usePasskeyRecovery/usePasskeyRecovery.js';
import { Button } from '../Button/Button.js';
import { Typography } from '../Typography/Typography.js';

const SecureTurnkeyWalletCard = ({ className }) => {
    const { t } = useTranslation();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet();
    const { initPasskeyRecoveryProcess } = usePasskeyRecovery();
    if (!isTurnkeyWalletWithoutAuthenticator)
        return null;
    return (jsxs("div", { className: classNames('secure-turnkey-wallet-card', className), children: [jsx(Typography, { variant: 'body_small', weight: 'regular', className: 'secure-turnkey-wallet-card__text', color: 'primary', copykey: 'dyn_secure_pregenerated_wallet.description', children: t('dyn_secure_pregenerated_wallet.description') }), jsx(Button, { onClick: initPasskeyRecoveryProcess, buttonVariant: 'brand-primary', color: 'primary', typographyProps: {
                    color: 'inherit',
                }, showInternalLoading: false, copykey: 'dyn_secure_pregenerated_wallet.secure_button', children: t('dyn_secure_pregenerated_wallet.secure_button') })] }));
};

export { SecureTurnkeyWalletCard };
