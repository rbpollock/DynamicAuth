import { IEmailWalletConnector, IPasskeyWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { UserProfile } from '../../../../shared';
export declare const createEmbeddedWalletWithPasskey: ({ user, walletConnector, environmentId, authToken, }: {
    authToken: string | undefined;
    environmentId: string;
    user: UserProfile | undefined;
    walletConnector: (IPasskeyWalletConnector & IEmailWalletConnector) | undefined;
}) => Promise<{
    decodedJwt: Omit<import("@dynamic-labs/sdk-api").DynamicJwt, "jwt">;
    embeddedWalletVerifiedCredential: import("@dynamic-labs/sdk-api").JwtVerifiedCredential;
    jwt: string;
    walletConnector: IPasskeyWalletConnector & IEmailWalletConnector;
}>;
