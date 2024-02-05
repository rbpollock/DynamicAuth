import { Wallet } from '../../../../shared';
export declare const initPasskeyRecovery: ({ authToken, iframeContainerId, iframeElementId, environmentId, wallet, }: {
    authToken: string | undefined;
    iframeContainerId: string;
    iframeElementId: string;
    environmentId: string;
    wallet: Wallet | null;
}) => Promise<void>;
export declare const passkeyRecoveryBundleValidation: ({ authToken, bundleInput, wallet, }: {
    authToken: string | undefined;
    bundleInput: string | undefined;
    wallet: Wallet | null;
}) => Promise<unknown>;
export declare const resentRecoveryEmail: ({ authToken, environmentId, wallet, }: {
    authToken: string | undefined;
    environmentId: string;
    wallet: Wallet | null;
}) => Promise<import("@dynamic-labs/sdk-api").InitPasskeyRecoveryResponse>;
export declare const completePasskeyRecovery: ({ authToken, userEmail, environmentId, wallet, }: {
    authToken: string | undefined;
    userEmail: string | undefined;
    environmentId: string;
    wallet: Wallet | null;
}) => Promise<{
    decodedJwt: Omit<import("@dynamic-labs/sdk-api").DynamicJwt, "jwt">;
    jwt: string;
}>;
