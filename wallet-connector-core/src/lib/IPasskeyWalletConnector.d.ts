import { WalletConnectorBase } from './WalletConnector';
export interface Attestation {
    attestationObject: string;
    clientDataJson: string;
    credentialId: string;
    transports: unknown[];
}
export interface WebAuthnAttestation {
    attestation: Attestation;
    challenge: string;
}
export type RecoveryWebAuthnAttestation = WebAuthnAttestation & {
    organizationId: string;
};
export interface IPasskeyWalletConnector extends WalletConnectorBase {
    getWebAuthnAttestation(): Promise<WebAuthnAttestation>;
    getRecoverPasskeyHandler: () => PasskeyRecoveryHandler;
}
export interface PasskeyRecoveryHandler {
    initRecovery: (iframeContainerId: string, iframeElementId: string) => Promise<string | null>;
    verifyRecoveryCode: (recoveryBundle: string, organizationId?: string) => Promise<unknown>;
    completeRecovery: (recoveryParams: RecoveryWebAuthnAttestation) => Promise<unknown>;
    clear: () => void;
    get publicKey(): string | undefined | null;
    set recoveryUserId(recoveryUserId: string);
}
