'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
var logger = require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var ViewContext = require('../ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getReferencedAccount = require('../../utils/functions/getReferencedAccount/getReferencedAccount.cjs');
var useInternalDynamicContext = require('../DynamicContext/useInternalDynamicContext.cjs');
var CaptchaContext = require('../CaptchaContext/CaptchaContext.cjs');
var ErrorContext = require('../ErrorContext/ErrorContext.cjs');
var useVerifyWallet = require('../../utils/hooks/useVerifyWallet/useVerifyWallet.cjs');
require('../../config/ApiEndpoint.cjs');
require('../EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../UserWalletsContext/UserWalletsContext.cjs');
require('../../components/Alert/Alert.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/IconButton/IconButton.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../FooterAnimationContext/index.cjs');
require('../QrCodeContext/QrCodeContext.cjs');
require('../AccountExistsContext/AccountExistsContext.cjs');
require('../WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../LoadingContext/LoadingContext.cjs');
require('../AccessDeniedContext/AccessDeniedContext.cjs');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');

const SocialRedirectContext = React.createContext(undefined);
const SocialRedirectContextProvider = ({ children, }) => {
    var _a, _b, _c, _d;
    const { setShowAuthFlow, walletConnectorOptions, setSelectedWalletConnectorKey, walletUiUtils, consumeNonce, displaySiweStatement, environmentId, projectSettings, setIsSingleWalletAccount, setShowDynamicUserProfile, isAuthenticated, setPrimaryWalletId, secondaryWallets, sdkHasLoaded, authToken, connectWallet, primaryWallet, internalEvents, socialProvidersFilter = (providers) => providers, } = useInternalDynamicContext.useInternalDynamicContext();
    const { setErrorMessage } = ErrorContext.useErrorContext();
    const { setView } = ViewContext.useViewContext();
    const { getCaptchaToken } = CaptchaContext.useCaptchaContext();
    const verifyWallet = useVerifyWallet.useVerifyWallet({
        consumeNonce,
        displaySiweStatement,
        environmentId,
        projectSettings,
        setIsSingleWalletAccount,
    });
    const signInProvider = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk.socialSignIn) === null || _a === void 0 ? void 0 : _a.signInProvider;
    const enabledSocialProvidersInDb = (_c = (_b = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk.socialSignIn) === null || _b === void 0 ? void 0 : _b.providers) !== null && _c !== void 0 ? _c : [];
    const enabledSocialProviders = (_d = socialProvidersFilter(enabledSocialProvidersInDb
        .filter((provider) => provider.enabled)
        .map((provider) => provider.provider))) !== null && _d !== void 0 ? _d : [];
    const socialWalletConnector = walletConnectorOptions
        .map(({ walletConnector }) => walletConnector)
        .find(walletConnectorCore.isSocialWalletConnector);
    const [redirectStatus, setRedirectStatus] = React.useState('idle');
    const [socialProvider, setSocialProvider] = React.useState();
    const userWallets = primaryWallet
        ? [primaryWallet, ...secondaryWallets]
        : secondaryWallets;
    const wallet = userWallets.find((wallet) => wallet.connector.key === (socialWalletConnector === null || socialWalletConnector === void 0 ? void 0 : socialWalletConnector.key));
    const socialAccount = React.useMemo(() => (wallet ? getReferencedAccount.getReferencedAccount(authToken, wallet.id) : undefined), [authToken, wallet]);
    // added to make sure to reset the social provider on logout
    React.useEffect(() => {
        const events = internalEvents === null || internalEvents === void 0 ? void 0 : internalEvents.current;
        if (!events) {
            return;
        }
        const handleInternalLogoutEvent = () => {
            setSocialProvider(undefined);
        };
        events.on('logout', handleInternalLogoutEvent);
        return () => {
            events.off('logout', handleInternalLogoutEvent);
        };
    }, [internalEvents]);
    const handleError = React.useCallback((message) => {
        logger.logger.error(message);
        if (isAuthenticated) {
            setShowAuthFlow(false);
            setShowDynamicUserProfile(true);
        }
        else {
            setShowAuthFlow(true);
            setView('wallet-list');
            setErrorMessage('-1');
        }
    }, [
        isAuthenticated,
        setErrorMessage,
        setShowAuthFlow,
        setShowDynamicUserProfile,
        setView,
    ]);
    React.useEffect(() => {
        var _a, _b;
        if (!projectSettings || !socialWalletConnector || !sdkHasLoaded) {
            // todo: we are competing with the useEffect in ViewContext.
            // once that is cleaned up, we can remove this code
            const params = new URLSearchParams(window.location.search);
            if (params.has('magic_oauth_request_id')) {
                setView('social-redirect-view');
                setShowAuthFlow(true);
            }
            return;
        }
        const params = new URLSearchParams(window.location.search);
        if (params.has('error') && params.has('provider')) {
            const errorDescription = params.get('error_description');
            handleError(errorDescription !== null && errorDescription !== void 0 ? errorDescription : 'Unknown error');
            // calling this to clear the relevant query params
            (_a = socialWalletConnector.getSession) === null || _a === void 0 ? void 0 : _a.call(socialWalletConnector);
            return;
        }
        if (params.has('magic_oauth_request_id')) {
            const providerFromParams = params.get('provider');
            setSocialProvider(providerFromParams);
            setRedirectStatus('loading');
            setView('social-redirect-view');
            setShowAuthFlow(true);
            if (!isAuthenticated) {
                setSelectedWalletConnectorKey(socialWalletConnector.key);
            }
            (_b = socialWalletConnector
                .getSession) === null || _b === void 0 ? void 0 : _b.call(socialWalletConnector).then((session) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
                /**
                 * If the user is already authenticated, that means that they are in the process
                 * of setting their social wallet as their primary wallet. At this point, they
                 * have successfully re-authenticated with the social provider. We can now finish
                 * the setPrimaryWallet flow
                 */
                if (isAuthenticated) {
                    if (!socialAccount) {
                        throw new Error('Social account not found');
                    }
                    /**
                     * consider google: a user may have multiple google accounts.
                     * we need to make sure they connected with the same google account
                     * that they originally used to authenticate
                     *
                     * there are two known scenarios that we enter this branch:
                     * 1. the user is reconnected a social wallet:
                     *   a. the user signed in with social
                     *   b. the user then linked another wallet (for ex: metamask)
                     *   c. the user signed out
                     *   d. the user signed in with metamask
                     *   e. the user selects their social wallet as their primary wallet
                     *   f. we need to reconnect the social wallet and put the user in the social oauth redirect flow
                     *
                     * 2. for an unknown reason, the magic search params get put back into the url and this component rerenders,
                     *    causing us to think the user is reconnecting.
                     *    see: https://dynamiclabsgroup.slack.com/archives/C0473MNEP0T/p1697503460754999
                     */
                    if (socialAccount.oauthAccountId === session.oauthId) {
                        if ((wallet === null || wallet === void 0 ? void 0 : wallet.id) !== (primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.id)) {
                            // justification: socialAccount is defined if and only if wallet is also defined
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            setPrimaryWalletId(wallet.id);
                            setShowAuthFlow(false);
                            setShowDynamicUserProfile(true);
                        }
                    }
                    else {
                        yield socialWalletConnector.endSession();
                        setView('social-wrong-account');
                    }
                }
                else {
                    yield connectWallet(socialWalletConnector);
                    const address = yield socialWalletConnector.fetchPublicAddress();
                    walletUiUtils.disabledConfirmationOnce();
                    yield verifyWallet({
                        captchaToken: getCaptchaToken(),
                        oauth: {
                            accessToken: session.accessToken,
                            didToken: session.didToken,
                            provider: providerFromParams,
                        },
                        /**
                         * justification: if the user just successfully authenticated their social,
                         * then the social connector must return an address
                         */
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        publicWalletAddress: address,
                        walletConnector: socialWalletConnector,
                    });
                }
                setSocialProvider(undefined);
                setRedirectStatus('success');
            })).catch((error) => {
                setSocialProvider(undefined);
                setRedirectStatus('error');
                handleError(error);
            });
        }
    }, [
        socialAccount,
        authToken,
        isAuthenticated,
        projectSettings,
        sdkHasLoaded,
        secondaryWallets,
        setPrimaryWalletId,
        setSelectedWalletConnectorKey,
        setShowAuthFlow,
        setShowDynamicUserProfile,
        setView,
        socialWalletConnector,
        verifyWallet,
        walletUiUtils,
        wallet,
        handleError,
        connectWallet,
        primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.id,
    ]);
    return (jsxRuntime.jsx(SocialRedirectContext.Provider, { value: {
            enabledSocialProviders,
            redirectStatus,
            setSocialProvider,
            signInProvider,
            socialAccount,
            socialProvider,
            socialWalletConnector,
        }, children: children }));
};
const useSocialRedirectContext = () => {
    const context = React.useContext(SocialRedirectContext);
    if (context === undefined) {
        throw new Error('useSocialRedirectContext must be used within a SocialRedirectContextProvider');
    }
    return context;
};

exports.SocialRedirectContext = SocialRedirectContext;
exports.SocialRedirectContextProvider = SocialRedirectContextProvider;
exports.useSocialRedirectContext = useSocialRedirectContext;
