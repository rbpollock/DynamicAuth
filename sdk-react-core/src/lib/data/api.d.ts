import { ProjectSettings, UserFields, ChainEnum, UpdateSelfResponse, WalletProviderEnum, AuthModeEnum, EmailVerificationCreateResponse, VerifyResponse, OauthRequest, OauthResultRequest, ProviderEnum, OnrampConfiguration, EmailProviderResponse, OauthResultResponse, PasskeyRegistrationCredential } from '@dynamic-labs/sdk-api';
import { AuthModeType, VerifyWallet } from '../shared/types';
export declare const fetchNonce: (environmentId: string) => Promise<string | undefined>;
export declare const getEmailProvider: ({ email, environmentId, }: {
    email: string;
    environmentId: string;
}) => Promise<EmailProviderResponse>;
export declare const createEmailVerification: ({ email, environmentId, captchaToken, }: {
    email: string;
    environmentId: string;
    captchaToken?: string | undefined;
}) => Promise<EmailVerificationCreateResponse>;
export declare const signInWithEmailVerification: ({ verificationToken, verificationUUID, environmentId, captchaToken, }: {
    environmentId: string;
    verificationToken: string;
    verificationUUID: string;
    captchaToken?: string | undefined;
}) => Promise<VerifyResponse>;
export declare const retryEmailVerification: ({ email, environmentId, verificationUUID, }: {
    email: string;
    environmentId: string;
    verificationUUID: string;
}) => Promise<EmailVerificationCreateResponse>;
export declare const verifyEmail: ({ verificationToken, verificationUUID, environmentId, }: {
    environmentId: string;
    verificationToken: string;
    verificationUUID: string;
}, userJwt: string) => Promise<UpdateSelfResponse>;
export declare const revokeSession: ({ environmentId, sessionId, }: {
    environmentId: string;
    sessionId: string;
}, userJwt: string) => Promise<void>;
export declare const linkWallet: (environmentId: string, { messageToSign, network, signedMessage, publicWalletAddress, chain, walletName, walletProvider, }: VerifyWallet, userJwt: string) => Promise<string | undefined>;
export declare const unlinkWallet: ({ environmentId, primaryWalletId, walletId, }: {
    environmentId: string;
    primaryWalletId: string | undefined;
    walletId: string;
}, userJwt: string) => Promise<string | undefined>;
export declare const transferWallet: (environmentId: string, { network, messageToSign, signedMessage, publicWalletAddress, chain, walletName, walletProvider, skipEmptyAccountCheck, }: VerifyWallet, userJwt: string) => Promise<string | undefined>;
export declare const mapChainToChainEnum: (chain: string) => ChainEnum;
export declare const mapProviderToProviderEnum: (provider: string) => WalletProviderEnum;
export declare const mapAuthModeTypeToEnum: (authMode: string) => AuthModeEnum;
export declare const createVisit: ({ authMode, chain, environmentId, walletProvider, publicWalletAddress, walletName, }: {
    authMode: AuthModeType;
    chain: string;
    environmentId: string;
    publicWalletAddress: string;
    walletName: string;
    walletProvider: string;
}) => Promise<void | undefined>;
export declare const verifyWallet: (environmentId: string, { messageToSign, signedMessage, publicWalletAddress, chain, walletName, walletProvider, captchaToken, network, oauth, }: VerifyWallet) => Promise<string | undefined>;
export declare const fetchProjectSettings: (environmentId: string) => Promise<ProjectSettings | undefined>;
export declare const updateUserProfileFields: (jwt: string | undefined, environmentId: string, fields: UserFields) => Promise<UpdateSelfResponse>;
export declare const getOauthLoginUrl: (environmentId: string, providerType: ProviderEnum, userJwt: string) => Promise<string | undefined>;
export declare const verifyOAuth: (environmentId: string, providerType: ProviderEnum, { code, codeVerifier, state }: OauthRequest, userJwt: string) => Promise<string | undefined>;
export declare const unlinkOAuth: ({ environmentId, primaryWalletId, verifiedCrentialId, }: {
    environmentId: string;
    primaryWalletId: string | undefined;
    verifiedCrentialId: string;
}, userJwt: string) => Promise<string | undefined>;
export declare const signInOAuth: (environmentId: string, providerType: ProviderEnum, { code, codeVerifier, state, captchaToken }: OauthRequest) => Promise<string | undefined>;
export declare const getOAuthResult: (environmentId: string, providerType: ProviderEnum, { state }: OauthResultRequest) => Promise<OauthResultResponse | undefined>;
export declare const getOnrampProviders: ({ chain, environmentId, networkId, token, walletAddress, }: {
    chain: string;
    environmentId: string;
    networkId?: string | number | undefined;
    token?: string | undefined;
    walletAddress: string;
}) => Promise<OnrampConfiguration[]>;
export declare const sendDynamicProps: (environmentId: string, settingsToSend: {
    dynamicContextProps?: object;
    dynamicWagmiSettings?: object;
    frameworkSettings?: object;
}) => Promise<void>;
export declare const mergeUserAccounts: (userJwt: string, environmentId: string) => Promise<string | undefined>;
export type CreateTurnkeyEvmEmbeddedWalletProps = {
    userJwt: string;
    environmentId: string;
    attestation?: PasskeyRegistrationCredential;
    challenge?: string;
};
export declare const createTurnkeyEvmEmbeddedWallet: ({ attestation, challenge, environmentId, userJwt, }: CreateTurnkeyEvmEmbeddedWalletProps) => Promise<VerifyResponse>;
export type InitPasskeyRecoveryProps = {
    userJwt: string;
    environmentId: string;
    walletId: string;
    publicKey: string;
};
export declare const initPasskeyRecovery: ({ walletId, publicKey, environmentId, userJwt, }: InitPasskeyRecoveryProps) => Promise<import("@dynamic-labs/sdk-api").InitPasskeyRecoveryResponse>;
export type CompletePasskeyRecoveryProps = {
    userJwt: string;
    environmentId: string;
    walletId: string;
    attestation: PasskeyRegistrationCredential;
    challenge: string;
};
export declare const completePasskeyRecovery: ({ walletId, attestation, challenge, environmentId, userJwt, }: CompletePasskeyRecoveryProps) => Promise<VerifyResponse>;
export type GetUserPasskeysProps = {
    userJwt: string;
    environmentId: string;
};
export declare const getUserPasskeys: ({ userJwt, environmentId, }: GetUserPasskeysProps) => Promise<import("@dynamic-labs/sdk-api").GetUserPasskeysResponse>;
