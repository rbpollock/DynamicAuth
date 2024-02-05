import { useInternalDynamicContext } from '../../../context/DynamicContext/useInternalDynamicContext.js';
import { useViewContext } from '../../../context/ViewContext/ViewContext.js';

const useHandleWalletsToConnect = () => {
    const { bridgeChainsToConnect, setBridgeChainsToConnect, setShowAuthFlow, setIsFullyConnected, isFullyConnected, } = useInternalDynamicContext();
    const { setView, goToInitialView } = useViewContext();
    const handleWalletsToConnect = ({ walletConnector, }) => {
        if (!bridgeChainsToConnect) {
            setIsFullyConnected(true);
            setShowAuthFlow(false);
            return;
        }
        // Avoid showing wallet-list when wallet updates network to the correct one in run time (bridge mode)
        if (bridgeChainsToConnect.length === 0) {
            setShowAuthFlow(false);
            return goToInitialView();
        }
        if (!walletConnector || !walletConnector.connectedChain) {
            setShowAuthFlow(false);
            return goToInitialView();
        }
        const restOfWallets = bridgeChainsToConnect.filter((wallet) => wallet.chain !== (walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.connectedChain));
        setBridgeChainsToConnect(restOfWallets);
        const allWalletsConnected = restOfWallets.length === 0;
        if (allWalletsConnected) {
            if (!isFullyConnected) {
                setIsFullyConnected(true);
                setView('bridge-summary');
            }
            else {
                setShowAuthFlow(false);
                goToInitialView();
            }
            return;
        }
        setView('bridge-next-wallet-connection');
    };
    return { handleWalletsToConnect };
};

export { useHandleWalletsToConnect };
