import { Magic } from 'magic-sdk';
import { IEmailOTPWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { EmailMagicWalletConnector } from '../EmailMagicWalletConnector';
import { MagicPromiEvent } from '../MagicWalletConnector';
type LoginWithEmailOTPPromiEvent = ReturnType<Magic['auth']['loginWithEmailOTP']>;
export declare class EmailOTPMagicWalletConnector extends EmailMagicWalletConnector implements IEmailOTPWalletConnector {
    name: string;
    _handle: LoginWithEmailOTPPromiEvent | undefined;
    cancelLogIn(): void;
    verifyOneTimePassword(otp: string): Promise<boolean>;
    loginWithMagic(): Promise<MagicPromiEvent | undefined>;
}
export {};
