import { jsx } from 'react/jsx-runtime';
import React__default, { useContext, useRef, useState, useCallback } from 'react';

const DynamicBridgeWidgetContext = React__default.createContext(undefined);
const useDynamicBridgeWidgetContext = () => {
    const context = useContext(DynamicBridgeWidgetContext);
    if (context === undefined) {
        throw new Error('usage of useDynamicBridgeWidgetContext not wrapped in `DynamicBridgeWidgetContextProvider`.');
    }
    return context;
};
const initialView = 'wallets';
const DynamicBridgeWidgetContextProvider = ({ children, }) => {
    const widgetRef = useRef(null);
    const inlineControlsRef = useRef(null);
    const [bridgeWidgetView, setBridgeWidgetView] = useState(initialView);
    const onDynamicBridgeWidgetClose = useCallback(() => {
        setBridgeWidgetView(initialView);
    }, []);
    const goToProfileView = useCallback(() => {
        setBridgeWidgetView('profile');
    }, []);
    const bridgeWidgetRootContextValue = {
        bridgeWidgetView,
        events: {
            onDynamicBridgeWidgetClose,
        },
        goToProfileView,
        inlineControlsRef,
        setBridgeWidgetView,
        widgetRef,
    };
    return (jsx(DynamicBridgeWidgetContext.Provider, { value: bridgeWidgetRootContextValue, children: children }));
};

export { DynamicBridgeWidgetContext, DynamicBridgeWidgetContextProvider, useDynamicBridgeWidgetContext };
