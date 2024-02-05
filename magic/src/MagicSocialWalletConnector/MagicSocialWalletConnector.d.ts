import { OAuthExtension, OAuthProvider, OAuthRedirectResult } from '@magic-ext/oauth';
import { Magic } from 'magic-sdk';
import { MagicConnectorProps, MagicPromiEvent, MagicWalletConnector } from '../MagicWalletConnector';
import { MagicClientNetworkHandler } from '../MagicClientNetworkHandler';
export type MagicSocialSession = OAuthRedirectResult['oauth'] & {
    didToken: OAuthRedirectResult['magic']['idToken'];
    oauthId: OAuthRedirectResult['oauth']['userInfo']['sub'];
};
export declare class MagicSocialWalletConnector extends MagicWalletConnector {
    name: string;
    canConnectViaSocial: boolean;
    _magicClient: MagicClientNetworkHandler<Magic<OAuthExtension[]>>;
    constructor(opts: MagicConnectorProps);
    connect(provider: OAuthProvider): Promise<void>;
    loginWithMagic(provider: OAuthProvider): Promise<MagicPromiEvent | undefined>;
    getSession(): Promise<MagicSocialSession | undefined>;
}
