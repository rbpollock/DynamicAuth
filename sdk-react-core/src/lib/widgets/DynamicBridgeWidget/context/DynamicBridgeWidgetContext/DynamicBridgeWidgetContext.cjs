'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const DynamicBridgeWidgetContext = React__default["default"].createContext(undefined);
const useDynamicBridgeWidgetContext = () => {
    const context = React.useContext(DynamicBridgeWidgetContext);
    if (context === undefined) {
        throw new Error('usage of useDynamicBridgeWidgetContext not wrapped in `DynamicBridgeWidgetContextProvider`.');
    }
    return context;
};
const initialView = 'wallets';
const DynamicBridgeWidgetContextProvider = ({ children, }) => {
    const widgetRef = React.useRef(null);
    const inlineControlsRef = React.useRef(null);
    const [bridgeWidgetView, setBridgeWidgetView] = React.useState(initialView);
    const onDynamicBridgeWidgetClose = React.useCallback(() => {
        setBridgeWidgetView(initialView);
    }, []);
    const goToProfileView = React.useCallback(() => {
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
    return (jsxRuntime.jsx(DynamicBridgeWidgetContext.Provider, { value: bridgeWidgetRootContextValue, children: children }));
};

exports.DynamicBridgeWidgetContext = DynamicBridgeWidgetContext;
exports.DynamicBridgeWidgetContextProvider = DynamicBridgeWidgetContextProvider;
exports.useDynamicBridgeWidgetContext = useDynamicBridgeWidgetContext;
