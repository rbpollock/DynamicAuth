import { useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { SdkViewSectionType, SdkViewType } from '@dynamic-labs/sdk-api';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import { useSocialRedirectContext } from '../../context/SocialRedirectContext/SocialRedirectContext.js';
import '@dynamic-labs/wallet-connector-core';
import { logger } from '../../shared/logger.js';
import '@dynamic-labs/iconic';
import 'react/jsx-runtime';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { isEmailProviderEnabled } from '../../utils/functions/isEmailProviderEnabled/isEmailProviderEnabled.js';

/* eslint-disable multiline-comment-style */
const NUMBER_OF_WALLETS = 3;
const useLoginView = () => {
    var _a, _b, _c, _d, _e, _f;
    const { projectSettings, authorizationViewDisplayOrder, loginWithEmail, walletConnectorOptions, walletsFilter, } = useInternalDynamicContext();
    const { t } = useTranslation();
    const { enabledSocialProviders } = useSocialRedirectContext();
    const hasSocialProvidersEnabled = Boolean(enabledSocialProviders === null || enabledSocialProviders === void 0 ? void 0 : enabledSocialProviders.length);
    const hasEmailProviderEnabled = ((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) === null || _a === void 0 ? void 0 : _a.length) &&
        isEmailProviderEnabled(projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers);
    // is email only is set in the project settings when the "Email (Web2) only" is toggled on in the dashboard
    const isEmailOnly = (_c = (_b = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.design) === null || _b === void 0 ? void 0 : _b.modal) === null || _c === void 0 ? void 0 : _c.emailOnly;
    /** Takes from wallets only those that can be selected in the wallet list by the user.
     * Should filter out embedded wallets
     * WHY: when we decide whether to show wallets or not, we need to know how many wallets
     * will actually be rendered. It would be especially bad to only have for ex "turnkey" in
     * wallets and then display an empty wallet list (since turnkey doesn't render)
     */
    const selectableWallets = (walletsFilter
        ? walletsFilter(walletConnectorOptions)
        : walletConnectorOptions).filter(({ key }) => key !== 'turnkey');
    const separator = useMemo(() => ({
        label: t('dyn_login.separators.default'),
        type: SdkViewSectionType.Separator,
    }), [t]);
    const isWalletOnly = useMemo(() => {
        var _a, _b, _c;
        if (!projectSettings) {
            return false;
        }
        // if both loginWithEmail AND hasSocialProvidersEnabled are false, it's wallet only
        if (!loginWithEmail && !hasSocialProvidersEnabled) {
            return true;
        }
        const loginView = (_b = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _a === void 0 ? void 0 : _a.views) === null || _b === void 0 ? void 0 : _b.find((view) => view.type === SdkViewType.Login);
        // backwards compatibility for those that didn't set up login view sections
        if (!((_c = loginView === null || loginView === void 0 ? void 0 : loginView.sections) === null || _c === void 0 ? void 0 : _c.length)) {
            return !hasEmailProviderEnabled && !hasSocialProvidersEnabled;
        }
        return (loginView.sections.length === 1 && loginView.sections[0].type === 'wallet');
    }, [
        projectSettings,
        loginWithEmail,
        hasSocialProvidersEnabled,
        hasEmailProviderEnabled,
        enabledSocialProviders === null || enabledSocialProviders === void 0 ? void 0 : enabledSocialProviders.length,
    ]);
    /**
     * build email from project settings design.modal props
     * @returns SdkViewSection[]
     */
    const getEmailViewSectionDefinition = useCallback(() => {
        if (!hasEmailProviderEnabled)
            return [];
        return [
            {
                type: SdkViewSectionType.Email,
            },
        ];
    }, [hasEmailProviderEnabled]);
    /**
     * build social from project settings design.modal props
     * @returns SdkViewSection[]
     */
    const getSocialViewSectionDefinition = useCallback(() => {
        if (!(enabledSocialProviders === null || enabledSocialProviders === void 0 ? void 0 : enabledSocialProviders.length))
            return [];
        return [
            {
                numOfItemsToDisplay: 5,
                type: SdkViewSectionType.Social,
            },
        ];
    }, [enabledSocialProviders === null || enabledSocialProviders === void 0 ? void 0 : enabledSocialProviders.length]);
    const getWalletViewSectionDefinition = useCallback(() => {
        var _a, _b;
        if (!(selectableWallets === null || selectableWallets === void 0 ? void 0 : selectableWallets.length))
            return [];
        const numOfItemsToDisplay = ((_b = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.design) === null || _a === void 0 ? void 0 : _a.modal) === null || _b === void 0 ? void 0 : _b.showWalletsButton)
            ? 0
            : NUMBER_OF_WALLETS;
        return [
            {
                numOfItemsToDisplay,
                type: SdkViewSectionType.Wallet,
            },
        ];
    }, [
        (_e = (_d = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.design) === null || _d === void 0 ? void 0 : _d.modal) === null || _e === void 0 ? void 0 : _e.showWalletsButton,
        selectableWallets === null || selectableWallets === void 0 ? void 0 : selectableWallets.length,
    ]);
    const applyLoginModalSettings = useCallback((emailAndSocialSections) => {
        if (emailAndSocialSections.length < 2) {
            return emailAndSocialSections;
        }
        const { splitEmailAndSocial, socialAboveEmail } = (projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.design.modal) || {};
        if (splitEmailAndSocial) {
            emailAndSocialSections.splice(1, 0, separator);
            // eslint-disable-next-line prefer-destructuring
            emailAndSocialSections[2].defaultItem = enabledSocialProviders[0];
        }
        if (socialAboveEmail) {
            emailAndSocialSections.reverse();
        }
        return emailAndSocialSections;
    }, [enabledSocialProviders, projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.design.modal, separator]);
    // TODO: https://linear.app/dynamic-labs/issue/GVTY-212/rethink-or-implement-toolkit-template-for-email-wallet-order
    /**
     * remove wallet view section from projectSettings?.sdk?.views if no wallet defined
     * @param sections
     * @returns
     */
    const filterLoginViewSections = useCallback((sections) => {
        var _a;
        const hasEnabledNetwork = (chain) => { var _a; return (_a = chain.networks) === null || _a === void 0 ? void 0 : _a.some((network) => network.enabled); };
        const hasEnabledChain = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.chains) === null || _a === void 0 ? void 0 : _a.some((chain) => chain.enabled && hasEnabledNetwork(chain));
        if (!hasEnabledChain &&
            sections.find((section) => section.type === 'wallet')) {
            logger.error('Failed to render WalletSignInSection - no chains enabled');
        }
        if (selectableWallets === null || selectableWallets === void 0 ? void 0 : selectableWallets.length) {
            return sections;
        }
        return sections.filter((section) => section.type !== 'wallet');
    }, [selectableWallets === null || selectableWallets === void 0 ? void 0 : selectableWallets.length, projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.chains]);
    /**
     * build login view sections array from project settings design.modal props - backwards compatibility
     * @returns SdkViewSection[]
     */
    const buildLoginSections = useCallback((buildOrder) => {
        var _a;
        const loginViewSections = [];
        buildOrder === null || buildOrder === void 0 ? void 0 : buildOrder.forEach((loginItem) => {
            // Add a separator if there are sections already
            if (loginViewSections.length)
                loginViewSections.push(separator);
            if (loginItem === 'email') {
                // In the past, the email and social sections were combined into one section,
                // so we need to check for that case and add the social section if needed for backwards compatibility
                // if email was just pushed to the loginViewSections array and social is not defined in the buildOrder,
                // then we need to add social (if social is enabled)
                const emailAndSocialSections = [
                    ...getEmailViewSectionDefinition(),
                    ...getSocialViewSectionDefinition(),
                ];
                loginViewSections.push(...applyLoginModalSettings(emailAndSocialSections));
            }
            if (loginItem === 'wallet') {
                loginViewSections.push(...getWalletViewSectionDefinition());
            }
        });
        // remove last separator
        if (((_a = loginViewSections[loginViewSections.length - 1]) === null || _a === void 0 ? void 0 : _a.type) === 'separator') {
            loginViewSections.pop();
        }
        return loginViewSections;
    }, [
        applyLoginModalSettings,
        getEmailViewSectionDefinition,
        getSocialViewSectionDefinition,
        getWalletViewSectionDefinition,
        separator,
    ]);
    /**
     * returns the login view sections to be displayed in order from projectSettings?.sdk?.views
     * and has backwards compatibility with project settings design.modal props
     */
    const logingViewSections = useMemo(() => {
        var _a, _b, _c;
        const loginView = (_b = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _a === void 0 ? void 0 : _a.views) === null || _b === void 0 ? void 0 : _b.find((view) => view.type === SdkViewType.Login);
        if ((_c = loginView === null || loginView === void 0 ? void 0 : loginView.sections) === null || _c === void 0 ? void 0 : _c.length) {
            return filterLoginViewSections(loginView === null || loginView === void 0 ? void 0 : loginView.sections);
        }
        let viewOrder = authorizationViewDisplayOrder;
        if (isEmailOnly) {
            viewOrder = ['email'];
        }
        return buildLoginSections(viewOrder);
    }, [
        (_f = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk) === null || _f === void 0 ? void 0 : _f.views,
        authorizationViewDisplayOrder,
        isEmailOnly,
        buildLoginSections,
        filterLoginViewSections,
    ]);
    return {
        isWalletOnly,
        logingViewSections,
    };
};

export { NUMBER_OF_WALLETS, useLoginView };
