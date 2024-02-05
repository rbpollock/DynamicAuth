import { JwtVerifiedCredential } from '@dynamic-labs/sdk-api';
import { AuthModeType, OnAuthSuccess, onConnect, OnEmailVerificationFailure, OnEmailVerificationSuccess, OnEmbeddedWalletCreated, OnLinkSuccess, OnUserProfileUpdate, UserProfile, Wallet } from '../../../shared/types';
import { IDynamicContext } from '../types';
export type Callback = 'authSuccess' | 'linkSuccess' | 'emailVerificationSuccess' | 'emailVerificationFailure' | 'userProfileUpdate' | 'connectSuccess' | 'embeddedWalletCreated';
export type CallbackParams = {
    /** For email verification */
    email?: string;
    verifiedCredential?: JwtVerifiedCredential;
    /** Used to indicate which wallet the callback refers to (ex onLinkSuccess) */
    walletId?: string;
};
export type UseCustomerCallbacksArgs = {
    authMode: AuthModeType;
    callbacks: {
        onAuthSuccess?: OnAuthSuccess;
        onEmailVerificationSuccess?: OnEmailVerificationSuccess;
        onEmailVerificationFailure?: OnEmailVerificationFailure;
        onConnect?: onConnect;
        onLinkSuccess?: OnLinkSuccess;
        onUserProfileUpdate?: OnUserProfileUpdate;
        onEmbeddedWalletCreated?: OnEmbeddedWalletCreated;
    };
    handleLogOut: () => Promise<void>;
    isAuthenticated: boolean;
    primaryWallet: Wallet | null;
    secondaryWallets: Wallet[];
    user: UserProfile | undefined;
    setIsVerificationInProgress: IDynamicContext['setIsVerificationInProgress'];
};
export type SetCallbackType = (callback: Callback, params?: CallbackParams) => void;
