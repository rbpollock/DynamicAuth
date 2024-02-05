'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
var ViewContext = require('../../context/ViewContext/ViewContext.cjs');
var ConnectButton = require('./components/ConnectButton.cjs');

const DynamicConnectButton = ({ buttonContainerClassName = '', buttonClassName = '', children, copykey, }) => {
    const { isProjectSettingsLoading, setShowAuthFlow, setSelectedWalletConnectorKey, } = useInternalDynamicContext.useInternalDynamicContext();
    const { setView } = ViewContext.useViewContext();
    const [didUserClick, setUserClicked] = React.useState(false);
    const handleOnClick = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (!didUserClick) {
            setUserClicked(true);
        }
        setSelectedWalletConnectorKey(null);
        setShowAuthFlow(true);
    }), [didUserClick, setSelectedWalletConnectorKey, setShowAuthFlow, setView]);
    return (jsxRuntime.jsx(ConnectButton.ConnectButton, { isLoading: isProjectSettingsLoading, isActive: didUserClick, onClick: handleOnClick, buttonContainerClassName: buttonContainerClassName, buttonClassName: buttonClassName, copykey: copykey, children: children }));
};

exports.DynamicConnectButton = DynamicConnectButton;
