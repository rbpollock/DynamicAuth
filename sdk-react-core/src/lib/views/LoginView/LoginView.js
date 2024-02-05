import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useMemo } from 'react';
import { SdkViewSectionType } from '@dynamic-labs/sdk-api';
import { isMobile } from '@dynamic-labs/utils';
import { Divider } from '../../components/Divider/Divider.js';
import { useErrorContext } from '../../context/ErrorContext/ErrorContext.js';
import { ErrorContainer } from '../../components/ErrorContainer/ErrorContainer.js';
import { useLoadingContext } from '../../context/LoadingContext/LoadingContext.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { useViewContext } from '../../context/ViewContext/ViewContext.js';
import { WalletList } from '../WalletList/WalletList.js';
import { DefaultFooter } from '../../layout/DynamicAuthLayout/DefaultFooter/DefaultFooter.js';
import { useAuthLayoutChecks } from '../../utils/hooks/useAuthLayoutChecks/useAuthLayoutChecks.js';
import { LoginEmailForm } from './sections/EmailSignInSection/LoginEmailForm.js';
import { WalletSignInSection } from './sections/WalletSignInSection/WalletSignInSection.js';
import { SocialSignInSection } from './sections/SocialSignInSection/SocialSignInSection.js';
import { useLoginView } from './useLoginView.js';

const LoginView = () => {
    var _a;
    const { error } = useErrorContext();
    const { loading } = useLoadingContext();
    const { view, setView } = useViewContext();
    const { isWalletOnly, logingViewSections } = useLoginView();
    const [showWalletList, setShowWalletList] = useState(isWalletOnly);
    const [isLoading, setIsLoading] = useState(loading);
    useEffect(() => {
        // toolkit log in with email was set to false
        if (isWalletOnly) {
            setView('login-with-wallet-only');
            setShowWalletList(true);
        }
        // returning from 'View all wallets' button
        if (!isWalletOnly && view === 'login-with-email-or-wallet') {
            setShowWalletList(false);
        }
        // toolkit log in with email was set back to true
        if (!isWalletOnly &&
            (!showWalletList || view === 'login-with-wallet-only')) {
            setView('login-with-email-or-wallet');
            setShowWalletList(false);
        }
    }, [isWalletOnly, view]);
    const { showDefaultFooter } = useAuthLayoutChecks();
    const numOfWallets = ((_a = logingViewSections.find((section) => section.type === SdkViewSectionType.Wallet)) === null || _a === void 0 ? void 0 : _a.numOfItemsToDisplay) || 0;
    const renderViewSections = useMemo(() => logingViewSections.map((viewSection, index) => {
        switch (viewSection.type) {
            case 'separator':
                return (jsx(Divider, { text: viewSection.label }, `${viewSection.type}_${index}`));
            case 'email':
                return (jsx(LoginEmailForm, { onSubmit: () => setIsLoading(true), onSubmitError: () => setIsLoading(false), isLoading: isLoading }, `${viewSection.type}_${index}`));
            case 'wallet':
                return (jsx(WalletSignInSection, { numberOfItensToShow: viewSection.numOfItemsToDisplay || 0, onSubmit: () => {
                        setView('login-with-email-or-wallet-full-wallet-list'); // this view is just to show the back button
                        setShowWalletList(true);
                    }, isLoading: isLoading }, `${viewSection.type}_${index}`));
            case 'social':
                return (jsx(SocialSignInSection, { collapsedLayout: numOfWallets > 1, sectionData: viewSection }, `${viewSection.type}_${index}`));
            default:
                return null;
        }
    }), [logingViewSections, isLoading, numOfWallets, setView]);
    if (showWalletList) {
        return jsx(WalletList, {});
    }
    const shouldShowFooter = isMobile() && showDefaultFooter;
    return (jsxs(Fragment, { children: [error && (jsx(ErrorContainer, { className: 'login-with-email__error-container', withIcon: false, children: error })), jsx("div", { className: classNames('login-with-email__container', {
                    'login-with-email__container--error': Boolean(error),
                }), children: jsx("div", { className: 'login-with-email__scroll', "data-testid": 'login-with-email-scroll', children: renderViewSections }) }), shouldShowFooter && jsx(DefaultFooter, { hideBorder: true })] }));
};

export { LoginView };
