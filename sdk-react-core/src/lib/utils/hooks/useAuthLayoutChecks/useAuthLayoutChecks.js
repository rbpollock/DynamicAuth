import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { useMockContext } from '../../../context/MockContext/MockContext.js';
import { useViewContext } from '../../../context/ViewContext/ViewContext.js';
import { isUserLinkingWallet } from '../../../shared/utils/functions/isUserLinkingWallet/isUserLinkingWallet.js';
import { useQrCodeContext } from '../../../context/QrCodeContext/QrCodeContext.js';
import { useDynamicLayoutData } from '../useDynamicLayoutData/useDynamicLayoutData.js';
import { useFooterAnimationContext } from '../../../context/FooterAnimationContext/index.js';

const useAuthLayoutChecks = (walletConnector) => {
    const { view } = useViewContext();
    const { user, customPrivacyPolicy, customTermsOfServices, privacyPolicyUrl, termsOfServiceUrl, isBridgeFlow, authMode, } = useInternalDynamicContext();
    const { showQrCodeMessage, showQrCodeImage } = useQrCodeContext();
    const { isFooterExpanded } = useFooterAnimationContext();
    const { mockedSDK } = useMockContext();
    const { helpHeaderData } = useDynamicLayoutData({ authMode, view });
    const displayBorderBelowHeader = (view !== 'wallet-list' &&
        view !== 'login-with-email-or-wallet-full-wallet-list' &&
        view !== 'multi-wallet-wallet-list' &&
        view !== 'login-with-wallet-only') ||
        isFooterExpanded;
    const isWalletListTypeView = view === 'wallet-connect-mobile-wallets-list' ||
        view === 'wallet-list' ||
        view === 'login-with-email-or-wallet-full-wallet-list' ||
        view === 'login-with-wallet-only';
    const showHelpContent = Boolean(helpHeaderData &&
        // Notice the negation here
        !((view === 'qr-code' && !(walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.canConnectViaQrCode)) ||
            view === 'no-qr-not-installed' ||
            view === 'wallet-used' ||
            view === 'chainalysis-blocked-wallet' ||
            view === 'wallet-sign' ||
            view === 'collect-user-data' ||
            isUserLinkingWallet(user, view, mockedSDK)));
    const showHeader = view !== 'collect-user-data' &&
        view !== 'no-access' &&
        view !== 'chainalysis-blocked-wallet' &&
        view !== 'wallet-locked-view' &&
        view !== 'gate-blocked-wallet' &&
        view !== 'email-wallet-otp-verification-view' &&
        view !== 'bridge-welcome' &&
        view !== 'bridge-summary' &&
        view !== 'bridge-next-wallet-connection' &&
        view !== 'passkey-intro' &&
        view !== 'social-redirect-view' &&
        view !== 'update-email' &&
        view !== 'collect-user-data-login-with-email' &&
        view !== 'passkey-recovery-start';
    const showConnectedWalletProgress = isBridgeFlow &&
        (view === 'wallet-list' ||
            view === 'qr-code' ||
            view === 'wallet-connect-mobile-wallets-list' ||
            view === 'pending-connect' ||
            view === 'pending-signature' ||
            view === 'pending-signature-without-back-button' ||
            view === 'bridge-next-wallet-connection' ||
            view === 'bridge-summary');
    const showToSFooter = Boolean(!isUserLinkingWallet(user, view, mockedSDK) &&
        (view === 'wallet-list' ||
            view === 'wallet-connect-mobile-wallets-list' ||
            // Don't show empty footer during the login
            ((view === 'login-with-email-or-wallet' ||
                view === 'login-with-email-or-wallet-full-wallet-list' ||
                view === 'login-with-wallet-only' ||
                view === 'multi-wallet-wallet-list') &&
                (termsOfServiceUrl ||
                    privacyPolicyUrl ||
                    customPrivacyPolicy ||
                    customTermsOfServices))));
    const showDynamicFooter = view === 'login-with-email-verification' ||
        view === 'verify-email' ||
        view === 'pending-connect' ||
        view === 'wallet-group' ||
        view === 'pending-signature' ||
        view === 'qr-code' ||
        view === 'wallet-used' ||
        view === 'email-wallet-otp-verification-view';
    const showCloseButton = view !== 'login-with-email-or-wallet-full-wallet-list' &&
        view !== 'login-with-email-verification' &&
        view !== 'network-not-supported' &&
        view !== 'passkey-recovery-complete' &&
        view !== 'passkey-recovery-start';
    const showBackButton = view === 'qr-code' ||
        view === 'pending-signature' ||
        view === 'no-qr-not-installed' ||
        view === 'wallet-connect-mobile-wallets-list' ||
        view === 'login-with-email-verification' ||
        view === 'login-with-email-or-wallet-full-wallet-list' ||
        view === 'wallet-group' ||
        view === 'pending-connect' ||
        view === 'account-exists' ||
        view === 'passkey-intro' ||
        (view === 'merge-user-accounts' && !user);
    const showQrCodePreHeader = view === 'qr-code' && showQrCodeMessage && !showQrCodeImage;
    const showDefaultFooter = !showConnectedWalletProgress && !showDynamicFooter && !showToSFooter;
    return {
        displayBorderBelowHeader,
        isWalletListTypeView,
        showBackButton,
        showCloseButton,
        showConnectedWalletProgress,
        showDefaultFooter,
        showDynamicFooter,
        showHeader,
        showHelpContent,
        showQrCodePreHeader,
        showToSFooter,
    };
};

export { useAuthLayoutChecks };
