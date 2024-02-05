'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var walletBook = require('@dynamic-labs/wallet-book');
var ErrorContext = require('../ErrorContext/ErrorContext.cjs');
var index = require('../FooterAnimationContext/index.cjs');
var ThemeContext = require('../ThemeContext/ThemeContext.cjs');
var ViewContext = require('../ViewContext/ViewContext.cjs');
require('@dynamic-labs/utils');
require('../DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../CaptchaContext/CaptchaContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../AccessDeniedContext/AccessDeniedContext.cjs');
require('../AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../UserWalletsContext/UserWalletsContext.cjs');
var DynamicAuthModal = require('../../modals/DynamicAuthModal/DynamicAuthModal.cjs');
require('../../components/IconButton/IconButton.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('formik');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Popper/Popper/Popper.cjs');
var PopperContext = require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('i18next');
require('../../components/OverlayCard/OverlayCard.context.cjs');
var index$1 = require('./constants/index.cjs');

const MockContext = React.createContext(undefined);
const MockContextProvider = ({ children, walletName, view, mockedWalletConnector, customerTheme, dynamicLayoutClassName, }) => {
    const viewContextValue = {
        goToInitialView: () => { },
        /* istanbul ignore next */
        setView: () => { },
        view,
    };
    return (jsxRuntime.jsx(MockContext.Provider, { value: { mockedSDK: true }, children: jsxRuntime.jsx(PopperContext.PopperProvider, { children: jsxRuntime.jsx(ViewContext.ViewContext.Provider, { value: viewContextValue, children: jsxRuntime.jsx(ErrorContext.ErrorContextProvider, { children: jsxRuntime.jsx(ThemeContext.ThemeContextProvider, { customerTheme: customerTheme, children: jsxRuntime.jsx(index.FooterAnimationContextProvider, { children: jsxRuntime.jsx(walletBook.WalletBookContextProvider, { walletBook: index$1.walletBookMock, children: jsxRuntime.jsx(MockContextWrapper, { dynamicLayoutClassName: dynamicLayoutClassName, mockedWalletConnector: mockedWalletConnector, walletName: walletName, children: children }) }) }) }) }) }) }) }));
};
const MockContextWrapper = ({ dynamicLayoutClassName, mockedWalletConnector, walletName, children, }) => {
    /* istanbul ignore next */
    const onClose = () => new Promise(() => { });
    const mockProjectSettings = {
        chains: [],
        design: {},
        general: {},
        kyc: [],
        privacy: {},
        sdk: { walletConnect: { projectId: '', v2Enabled: false } },
        security: {},
    };
    return (jsxRuntime.jsx("div", { className: 'mock-ctx__container', style: { position: 'relative' }, children: jsxRuntime.jsx(DynamicAuthModal.DynamicAuthModal, { className: dynamicLayoutClassName, onClose: onClose, projectSettings: mockProjectSettings, transitionProps: {
                isShown: true,
            }, walletConnector: mockedWalletConnector !== null && mockedWalletConnector !== void 0 ? mockedWalletConnector : {
                canConnectViaQrCode: true,
                name: walletName,
            }, children: children }) }));
};
const useMockContext = () => {
    const context = React.useContext(MockContext);
    if (context === undefined) {
        return { mockedSDK: false };
    }
    return context;
};

exports.MockContext = MockContext;
exports.MockContextProvider = MockContextProvider;
exports.MockContextWrapper = MockContextWrapper;
exports.useMockContext = useMockContext;
