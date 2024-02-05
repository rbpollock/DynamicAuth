import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { useState, useCallback } from 'react';
import { useInternalDynamicContext } from '../../context/DynamicContext/useInternalDynamicContext.js';
import { useViewContext } from '../../context/ViewContext/ViewContext.js';
import { ConnectButton } from './components/ConnectButton.js';

const DynamicConnectButton = ({ buttonContainerClassName = '', buttonClassName = '', children, copykey, }) => {
    const { isProjectSettingsLoading, setShowAuthFlow, setSelectedWalletConnectorKey, } = useInternalDynamicContext();
    const { setView } = useViewContext();
    const [didUserClick, setUserClicked] = useState(false);
    const handleOnClick = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        if (!didUserClick) {
            setUserClicked(true);
        }
        setSelectedWalletConnectorKey(null);
        setShowAuthFlow(true);
    }), [didUserClick, setSelectedWalletConnectorKey, setShowAuthFlow, setView]);
    return (jsx(ConnectButton, { isLoading: isProjectSettingsLoading, isActive: didUserClick, onClick: handleOnClick, buttonContainerClassName: buttonContainerClassName, buttonClassName: buttonClassName, copykey: copykey, children: children }));
};

export { DynamicConnectButton };
