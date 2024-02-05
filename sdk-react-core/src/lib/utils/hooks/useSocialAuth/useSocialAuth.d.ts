/// <reference types="react" />
import { ProviderEnum } from '@dynamic-labs/sdk-api';
import { SocialOAuthError, SocialOAuthErrorCode } from '@dynamic-labs/types';
type SocialAuthMode = 'link' | 'signin';
type UseSocialAuthProps = {
    sessionTimeout: number;
    authMode: SocialAuthMode;
    onSettled?: () => void;
    onError?: () => void;
};
export declare const useSocialAuth: ({ sessionTimeout, authMode, onSettled, onError, }: UseSocialAuthProps) => {
    readonly checkValidProvider: (provider: ProviderEnum) => boolean;
    readonly connectSocialAccount: ({ provider, validator, captchaToken, }: {
        provider: ProviderEnum;
        validator?: ((provider: ProviderEnum) => boolean) | undefined;
        captchaToken?: string | undefined;
    }) => Promise<void>;
    readonly error: SocialOAuthError | undefined;
    readonly handleError: (code: SocialOAuthErrorCode, message: string) => void;
    readonly isProcessing: boolean;
    readonly setError: import("react").Dispatch<import("react").SetStateAction<SocialOAuthError | undefined>>;
    readonly setIsProcessing: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
export {};
