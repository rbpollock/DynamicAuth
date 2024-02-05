import { DynamicJwt } from '@dynamic-labs/sdk-api';
import { WalletOption } from '../../../shared';
type MutationProps = {
    authToken: string | undefined;
    environmentId: string;
    walletConnectorOptions: WalletOption[];
    decodedJwt: DynamicJwt;
    withAuthenticator: boolean;
};
export declare const useCreateDynamicEmbeddedWalletMutation: () => {
    createDynamicEmbeddedWalletMutation: (variables: MutationProps) => void;
    error: unknown;
    isLoading: boolean;
};
export {};
