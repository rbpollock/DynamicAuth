import { Dispatch, SetStateAction } from 'react';
import { UserProfile, WalletOption } from '../../../../shared';
import { IDynamicContext } from '../../types';
/**
 * this hook wraps `setShowAuthFlow`. WalletConnect requires initialization
 * before we can connect a wallet. The goal here is that when a user clicks
 * on the "Connect your wallet" button, the SDK starts initializing WalletConnect
 * and will prime it for connection. This way, when the user clicks on the
 * "Connect" button in the WalletConnect modal, there is a uri ready to go
 * to immediately trigger the deep link on mobile
 */
export declare const useSetShowAuthFlowWithInit: ({ setShowAuthFlow, walletConnectorOptions, user, isMultiWalletEnabled, isRenderingEmbeddedAuthFlow, }: {
    setShowAuthFlow: Dispatch<SetStateAction<boolean>>;
    isRenderingEmbeddedAuthFlow: IDynamicContext['isRenderingEmbeddedAuthFlow'];
    walletConnectorOptions: WalletOption[];
    user?: UserProfile | undefined;
    isMultiWalletEnabled?: boolean | undefined;
}) => Dispatch<SetStateAction<boolean>>;
