import { SetCallbackType, UseCustomerCallbacksArgs } from './types';
export declare const useCustomerCallbacks: ({ callbacks: { onAuthSuccess, onLinkSuccess, onUserProfileUpdate, onConnect, onEmailVerificationFailure, onEmailVerificationSuccess, onEmbeddedWalletCreated, }, handleLogOut, primaryWallet, secondaryWallets, user, isAuthenticated, authMode, setIsVerificationInProgress, }: UseCustomerCallbacksArgs) => {
    setCallback: SetCallbackType;
};
