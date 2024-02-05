import { IEmailWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { Provider } from '@dynamic-labs/sdk-api';
type Props = {
    emailWalletConnector: IEmailWalletConnector | undefined;
};
export declare const checkMagicOrBloctoEnabled: (providers: Provider[] | undefined) => boolean;
export declare const useEmailProvider: ({ emailWalletConnector }: Props) => {
    handleEmailSubmitWithOptionalCaptcha: (emailInput: string, captchaToken?: string) => Promise<void>;
    isEmailProviderLoading: boolean;
};
export {};
