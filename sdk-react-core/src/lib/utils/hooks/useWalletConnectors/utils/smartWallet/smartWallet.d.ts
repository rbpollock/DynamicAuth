import { JwtVerifiedCredential } from '@dynamic-labs/sdk-api';
import { WalletOption } from '../../../../../shared';
export declare const findOwner: (account: JwtVerifiedCredential, verifiedCredentials: JwtVerifiedCredential[]) => JwtVerifiedCredential | undefined;
export declare const findSmartWallet: (account: JwtVerifiedCredential, verifiedCredentials: JwtVerifiedCredential[]) => JwtVerifiedCredential | undefined;
export declare const isOwnerOfASmartWallet: (account: JwtVerifiedCredential, verifiedCredentials: JwtVerifiedCredential[]) => boolean;
export declare const initializeSmartWallet: ({ account, verifiedCredentials, walletConnectorOptions, }: {
    account: JwtVerifiedCredential;
    verifiedCredentials: JwtVerifiedCredential[];
    walletConnectorOptions: WalletOption[];
}) => Promise<void>;
