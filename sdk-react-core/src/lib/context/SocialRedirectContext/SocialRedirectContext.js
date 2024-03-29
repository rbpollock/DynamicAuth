import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { createContext, useState, useMemo, useEffect, useCallback, useContext } from 'react';
import { isSocialWalletConnector } from '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import { logger } from '../../shared/logger.js';
import '@dynamic-labs/iconic';
import { useViewContext } from '../ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getReferencedAccount } from '../../utils/functions/getReferencedAccount/getReferencedAccount.js';
import { useInternalDynamicContext } from '../DynamicContext/useInternalDynamicContext.js';
import { useCaptchaContext } from '../CaptchaContext/CaptchaContext.js';
import { useErrorContext } from '../ErrorContext/ErrorContext.js';
import { useVerifyWallet } from '../../utils/hooks/useVerifyWallet/useVerifyWallet.js';
import '../../config/ApiEndpoint.js';
import '../EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../UserWalletsContext/UserWalletsContext.js';
import '../../components/Alert/Alert.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/IconButton/IconButton.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../FooterAnimationContext/index.js';
import '../QrCodeContext/QrCodeContext.js';
import '../AccountExistsContext/AccountExistsContext.js';
import '../WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../LoadingContext/LoadingContext.js';
import '../AccessDeniedContext/AccessDeniedContext.js';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';

const SocialRedirectContext = createContext(undefined);
const SocialRedirectContextProvider = ({ children, }) => {
    var _a, _b, _c, _d;
    const { setShowAuthFlow, walletConnectorOptions, setSelectedWalletConnectorKey, walletUiUtils, consumeNonce, displaySiweStatement, environmentId, projectSettings, setIsSingleWalletAccount, setShowDynamicUserProfile, isAuthenticated, setPrimaryWalletId, secondaryWallets, sdkHasLoaded, authToken, connectWallet, primaryWallet, internalEvents, socialProvidersFilter = (providers) => providers, } = useInternalDynamicContext();
    const { setErrorMessage } = useErrorContext();
    const { setView } = useViewContext();
    const { getCaptchaToken } = useCaptchaContext();
    const verifyWallet = useVerifyWallet({
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
        .find(isSocialWalletConnector);
    const [redirectStatus, setRedirectStatus] = useState('idle');
    const [socialProvider, setSocialProvider] = useState();
    const userWallets = primaryWallet
        ? [primaryWallet, ...secondaryWallets]
        : secondaryWallets;
    const wallet = userWallets.find((wallet) => wallet.connector.key === (socialWalletConnector === null || socialWalletConnector === void 0 ? void 0 : socialWalletConnector.key));
    const socialAccount = useMemo(() => (wallet ? getReferencedAccount(authToken, wallet.id) : undefined), [authToken, wallet]);
    // added to make sure to reset the social provider on logout
    useEffect(() => {
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
    const handleError = useCallback((message) => {
        logger.error(message);
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
    useEffect(() => {
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
                .getSession) === null || _b === void 0 ? void 0 : _b.call(socialWalletConnector).then((session) => __awaiter(void 0, void 0, void 0, function* () {
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
    return (jsx(SocialRedirectContext.Provider, { value: {
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
    const context = useContext(SocialRedirectContext);
    if (context === undefined) {
        throw new Error('useSocialRedirectContext must be used within a SocialRedirectContextProvider');
    }
    return context;
};

export { SocialRedirectContext, SocialRedirectContextProvider, useSocialRedirectContext };
