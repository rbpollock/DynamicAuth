import { Dispatch, SetStateAction } from 'react';
import { ProjectSettingsProps, VerifyCallbackArgs, VerifyProps } from '../../../shared/types';
type UseVerifyWalletArgs = VerifyProps & ProjectSettingsProps & {
    consumeNonce: () => string | undefined;
    displaySiweStatement: boolean;
    setIsSingleWalletAccount: Dispatch<SetStateAction<boolean>>;
};
export declare const useVerifyWallet: ({ consumeNonce, displaySiweStatement, environmentId, projectSettings, setIsSingleWalletAccount, }: UseVerifyWalletArgs) => ({ walletConnector, fetchPublicAddressOpts, publicWalletAddress, captchaToken, oauth, }: VerifyCallbackArgs) => Promise<void>;
export {};
