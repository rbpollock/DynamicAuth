import { IEmailWalletConnector } from '@dynamic-labs/wallet-connector-core';
import { MagicPromiEvent, MagicWalletConnector } from '../MagicWalletConnector';
export declare class EmailMagicWalletConnector extends MagicWalletConnector implements IEmailWalletConnector {
    name: string;
    canConnectViaEmail: boolean;
    protected _email: string | undefined | null;
    get email(): string | null | undefined;
    setEmail(email: EmailMagicWalletConnector['email']): void;
    clearEmail(): void;
    endSession(): Promise<void>;
    cancelPreviousEmail(): void;
    loginWithMagic(): Promise<MagicPromiEvent | undefined>;
    static storageEmailKey: string;
}
