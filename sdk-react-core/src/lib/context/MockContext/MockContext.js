import { jsx } from 'react/jsx-runtime';
import { createContext, useContext } from 'react';
import { WalletBookContextProvider } from '@dynamic-labs/wallet-book';
import { ErrorContextProvider } from '../ErrorContext/ErrorContext.js';
import { FooterAnimationContextProvider } from '../FooterAnimationContext/index.js';
import { ThemeContextProvider } from '../ThemeContext/ThemeContext.js';
import { ViewContext } from '../ViewContext/ViewContext.js';
import '@dynamic-labs/utils';
import '../DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../CaptchaContext/CaptchaContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../AccessDeniedContext/AccessDeniedContext.js';
import '../AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../UserWalletsContext/UserWalletsContext.js';
import { DynamicAuthModal } from '../../modals/DynamicAuthModal/DynamicAuthModal.js';
import '../../components/IconButton/IconButton.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import 'formik';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Popper/Popper/Popper.js';
import { PopperProvider } from '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'i18next';
import '../../components/OverlayCard/OverlayCard.context.js';
import { walletBookMock } from './constants/index.js';

const MockContext = createContext(undefined);
const MockContextProvider = ({ children, walletName, view, mockedWalletConnector, customerTheme, dynamicLayoutClassName, }) => {
    const viewContextValue = {
        goToInitialView: () => { },
        /* istanbul ignore next */
        setView: () => { },
        view,
    };
    return (jsx(MockContext.Provider, { value: { mockedSDK: true }, children: jsx(PopperProvider, { children: jsx(ViewContext.Provider, { value: viewContextValue, children: jsx(ErrorContextProvider, { children: jsx(ThemeContextProvider, { customerTheme: customerTheme, children: jsx(FooterAnimationContextProvider, { children: jsx(WalletBookContextProvider, { walletBook: walletBookMock, children: jsx(MockContextWrapper, { dynamicLayoutClassName: dynamicLayoutClassName, mockedWalletConnector: mockedWalletConnector, walletName: walletName, children: children }) }) }) }) }) }) }) }));
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
    return (jsx("div", { className: 'mock-ctx__container', style: { position: 'relative' }, children: jsx(DynamicAuthModal, { className: dynamicLayoutClassName, onClose: onClose, projectSettings: mockProjectSettings, transitionProps: {
                isShown: true,
            }, walletConnector: mockedWalletConnector !== null && mockedWalletConnector !== void 0 ? mockedWalletConnector : {
                canConnectViaQrCode: true,
                name: walletName,
            }, children: children }) }));
};
const useMockContext = () => {
    const context = useContext(MockContext);
    if (context === undefined) {
        return { mockedSDK: false };
    }
    return context;
};

export { MockContext, MockContextProvider, MockContextWrapper, useMockContext };
