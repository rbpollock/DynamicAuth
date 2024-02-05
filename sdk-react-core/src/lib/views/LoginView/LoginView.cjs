'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var sdkApi = require('@dynamic-labs/sdk-api');
var utils = require('@dynamic-labs/utils');
var Divider = require('../../components/Divider/Divider.cjs');
var ErrorContext = require('../../context/ErrorContext/ErrorContext.cjs');
var ErrorContainer = require('../../components/ErrorContainer/ErrorContainer.cjs');
var LoadingContext = require('../../context/LoadingContext/LoadingContext.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var ViewContext = require('../../context/ViewContext/ViewContext.cjs');
var WalletList = require('../WalletList/WalletList.cjs');
var DefaultFooter = require('../../layout/DynamicAuthLayout/DefaultFooter/DefaultFooter.cjs');
var useAuthLayoutChecks = require('../../utils/hooks/useAuthLayoutChecks/useAuthLayoutChecks.cjs');
var LoginEmailForm = require('./sections/EmailSignInSection/LoginEmailForm.cjs');
var WalletSignInSection = require('./sections/WalletSignInSection/WalletSignInSection.cjs');
var SocialSignInSection = require('./sections/SocialSignInSection/SocialSignInSection.cjs');
var useLoginView = require('./useLoginView.cjs');

const LoginView = () => {
    var _a;
    const { error } = ErrorContext.useErrorContext();
    const { loading } = LoadingContext.useLoadingContext();
    const { view, setView } = ViewContext.useViewContext();
    const { isWalletOnly, logingViewSections } = useLoginView.useLoginView();
    const [showWalletList, setShowWalletList] = React.useState(isWalletOnly);
    const [isLoading, setIsLoading] = React.useState(loading);
    React.useEffect(() => {
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
    const { showDefaultFooter } = useAuthLayoutChecks.useAuthLayoutChecks();
    const numOfWallets = ((_a = logingViewSections.find((section) => section.type === sdkApi.SdkViewSectionType.Wallet)) === null || _a === void 0 ? void 0 : _a.numOfItemsToDisplay) || 0;
    const renderViewSections = React.useMemo(() => logingViewSections.map((viewSection, index) => {
        switch (viewSection.type) {
            case 'separator':
                return (jsxRuntime.jsx(Divider.Divider, { text: viewSection.label }, `${viewSection.type}_${index}`));
            case 'email':
                return (jsxRuntime.jsx(LoginEmailForm.LoginEmailForm, { onSubmit: () => setIsLoading(true), onSubmitError: () => setIsLoading(false), isLoading: isLoading }, `${viewSection.type}_${index}`));
            case 'wallet':
                return (jsxRuntime.jsx(WalletSignInSection.WalletSignInSection, { numberOfItensToShow: viewSection.numOfItemsToDisplay || 0, onSubmit: () => {
                        setView('login-with-email-or-wallet-full-wallet-list'); // this view is just to show the back button
                        setShowWalletList(true);
                    }, isLoading: isLoading }, `${viewSection.type}_${index}`));
            case 'social':
                return (jsxRuntime.jsx(SocialSignInSection.SocialSignInSection, { collapsedLayout: numOfWallets > 1, sectionData: viewSection }, `${viewSection.type}_${index}`));
            default:
                return null;
        }
    }), [logingViewSections, isLoading, numOfWallets, setView]);
    if (showWalletList) {
        return jsxRuntime.jsx(WalletList.WalletList, {});
    }
    const shouldShowFooter = utils.isMobile() && showDefaultFooter;
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [error && (jsxRuntime.jsx(ErrorContainer.ErrorContainer, { className: 'login-with-email__error-container', withIcon: false, children: error })), jsxRuntime.jsx("div", { className: classNames.classNames('login-with-email__container', {
                    'login-with-email__container--error': Boolean(error),
                }), children: jsxRuntime.jsx("div", { className: 'login-with-email__scroll', "data-testid": 'login-with-email-scroll', children: renderViewSections }) }), shouldShowFooter && jsxRuntime.jsx(DefaultFooter.DefaultFooter, { hideBorder: true })] }));
};

exports.LoginView = LoginView;
