'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var iconic = require('@dynamic-labs/iconic');
var useIsTurnkeyWallet = require('../useIsTurnkeyWallet/useIsTurnkeyWallet.cjs');

const useDynamicLayoutData = ({ view, authMode, }) => {
    const { t } = reactI18next.useTranslation();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet.useIsTurnkeyWallet();
    if (view === 'no-access') {
        const headerData = {
            copykey: 'dyn_no_access.title',
            heading: t('dyn_no_access.title'),
        };
        return { headerData };
    }
    const helpHeaderMap = {
        'login-with-email-or-wallet-full-wallet-list': {
            copykey: 'dyn_login.helper.all_wallet_list',
            heading: t('dyn_login.helper.all_wallet_list'),
        },
        'login-with-wallet-only': {
            copykey: 'dyn_login.helper.wallet_only',
            heading: t('dyn_login.helper.wallet_only'),
        },
        'passkey-intro': {
            copykey: 'dyn_passkey_intro.helper.title',
            heading: t('dyn_passkey_intro.helper.title'),
        },
        'pending-connect': {
            copykey: 'dyn_login.helper.pending_connect.title',
            heading: t('dyn_login.helper.pending_connect.title'),
        },
        'pending-signature': {
            copykey: 'dyn_login.helper.pending_signature.title',
            heading: t('dyn_login.helper.pending_signature.title'),
        },
        'pending-signature-without-back-button': {
            copykey: 'dyn_login.helper.pending_signature_without_back_button.title',
            heading: t('dyn_login.helper.pending_signature_without_back_button.title'),
        },
        'qr-code': {
            copykey: 'dyn_login.helper.qr_code.title',
            heading: t('dyn_login.helper.qr_code.title'),
        },
        'wallet-connect-mobile-wallets-list': {
            copykey: 'dyn_wallet_conect.mobile.wallet_list.helper',
            heading: t('dyn_wallet_conect.mobile.wallet_list.helper'),
        },
        'wallet-list': {
            copykey: 'dyn_wallet_list.helper',
            heading: t('dyn_wallet_list.helper'),
        },
    };
    const headerMap = {
        'account-exists': {
            copykey: 'dyn_account_exists.title',
            heading: t('dyn_account_exists.title'),
        },
        'chainalysis-blocked-wallet': {
            copykey: 'dyn_chainalysis_blocked_wallet.title',
            heading: t('dyn_chainalysis_blocked_wallet.title'),
        },
        'login-with-email-or-wallet': {
            copykey: 'dyn_login.title.all',
            heading: t('dyn_login.title.all'),
        },
        'login-with-email-or-wallet-full-wallet-list': {
            copykey: 'dyn_login.title.all_wallet_list',
            heading: t('dyn_login.title.all_wallet_list'),
        },
        'login-with-email-verification': {
            copykey: 'dyn_otp_verification.title',
            heading: t('dyn_otp_verification.title'),
        },
        'login-with-wallet-only': {
            copykey: 'dyn_login.title.wallet_only',
            heading: t('dyn_login.title.wallet_only'),
        },
        'multi-wallet-wallet-list': {
            copykey: authMode === 'connect-only'
                ? 'dyn_wallet_list.title.connect'
                : 'dyn_wallet_list.title.link',
            heading: authMode === 'connect-only'
                ? t('dyn_wallet_list.title.connect')
                : t('dyn_wallet_list.title.link'),
        },
        'network-not-supported': {
            copykey: 'dyn_network_not_supported.title',
            heading: t('dyn_network_not_supported.title'),
        },
        'passkey-recovery-bundle': {
            copykey: isTurnkeyWalletWithoutAuthenticator
                ? 'dyn_passkey_secure_modal.code.title'
                : 'dyn_passkey_recovery.code.title',
            heading: isTurnkeyWalletWithoutAuthenticator
                ? t('dyn_passkey_secure_modal.code.title')
                : t('dyn_passkey_recovery.code.title'),
        },
        'passkey-recovery-complete': {
            copykey: isTurnkeyWalletWithoutAuthenticator
                ? 'dyn_passkey_secure_modal.complete.title'
                : 'dyn_passkey_recovery.complete.title',
            heading: isTurnkeyWalletWithoutAuthenticator
                ? t('dyn_passkey_secure_modal.complete.title')
                : t('dyn_passkey_recovery.complete.title'),
        },
        'passkey-recovery-start': {
            copykey: isTurnkeyWalletWithoutAuthenticator
                ? 'dyn_passkey_secure_modal.start.title'
                : 'dyn_passkey_recovery.start.title',
            heading: isTurnkeyWalletWithoutAuthenticator
                ? t('dyn_passkey_secure_modal.start.title')
                : t('dyn_passkey_recovery.start.title'),
        },
        'pending-connect': {
            copykey: 'dyn_login.connect_wallet.title',
            heading: t('dyn_login.connect_wallet.title'),
        },
        'pending-signature': {
            copykey: 'dyn_login.sign_wallet.title',
            heading: t('dyn_login.sign_wallet.title'),
        },
        'qr-code': {
            copykey: 'dyn_login.qr_code.title',
            heading: t('dyn_login.qr_code.title'),
        },
        'verify-email': {
            copykey: 'dyn_otp_verification.title',
            heading: t('dyn_otp_verification.title'),
        },
        'wallet-connect-mobile-wallets-list': {
            copykey: 'dyn_wallet_conect.mobile.wallet_list.title',
            heading: (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx(iconic.WalletConnectIcon, { style: { height: '1.5rem', width: '1.5rem' } }), ' ', t('dyn_wallet_conect.mobile.wallet_list.title')] })),
        },
        'wallet-group': {
            copykey: 'dyn_login.wallet_group.title',
            heading: t('dyn_login.wallet_group.title'),
        },
        'wallet-list': {
            copykey: 'dyn_wallet_list.title.select',
            heading: t('dyn_wallet_list.title.select'),
        },
        'wallet-sign': {
            copykey: 'dyn_wallet_transfer.sign.title',
            heading: t('dyn_wallet_transfer.sign.title'),
        },
        'wallet-used': {
            copykey: 'dyn_wallet_link.title',
            heading: t('dyn_wallet_link.title'),
        },
    };
    const helpHeaderData = helpHeaderMap[view];
    const headerData = headerMap[view];
    return {
        headerData,
        helpHeaderData,
    };
};

exports.useDynamicLayoutData = useDynamicLayoutData;
