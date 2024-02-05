import { ChainInfo, EthSignType, Keplr, KeplrIntereactionOptions, KeplrMode, KeplrSignOptions, Key, DirectSignResponse, OfflineDirectSigner, AminoSignResponse, BroadcastMode, OfflineAminoSigner, StdSignature, StdSignDoc, ICNSAdr36Signatures, ChainInfoWithoutEndpoints, SecretUtils } from '@keplr-wallet/types';
import { KVStore } from './utils/indexDB';
export type KeplrGetKeyWalletCoonectV1Response = {
    address: string;
    algo: string;
    bech32Address: string;
    isKeystone: boolean;
    isNanoLedger: boolean;
    name: string;
    pubKey: string;
};
export type KeplrKeystoreMayChangedEventParam = {
    algo: string;
    isKeystone: boolean;
    isNanoLedger: boolean;
    keys: {
        address: string;
        bech32Address: string;
        chainIdentifier: string;
        pubKey: string;
    }[];
    name: string;
};
export declare class KeplrWalletConnectV1 implements Keplr {
    readonly connector: any;
    readonly options: {
        kvStore?: KVStore;
        onAfterSendRequest?: (response: any, request: Partial<any>, options?: any) => Promise<void> | void;
        onBeforeSendRequest?: (request: Partial<any>, options?: any) => Promise<void> | void;
        sendTx?: Keplr['sendTx'];
    };
    constructor(connector: any, options?: {
        kvStore?: KVStore;
        onAfterSendRequest?: (response: any, request: Partial<any>, options?: any) => Promise<void> | void;
        onBeforeSendRequest?: (request: Partial<any>, options?: any) => Promise<void> | void;
        sendTx?: Keplr['sendTx'];
    });
    readonly version: string;
    readonly mode: KeplrMode;
    defaultOptions: KeplrIntereactionOptions;
    protected readonly onCallReqeust: (error: Error | null, payload: any | null) => Promise<void>;
    protected clearSaved(): Promise<void>;
    protected sendCustomRequest(request: Partial<any>, options?: any): Promise<any>;
    enable(chainIds: string | string[]): Promise<void>;
    protected getKeyHasEnabled(): string;
    protected getHasEnabledChainIds(): Promise<string[]>;
    protected saveHasEnabledChainIds(chainIds: string[]): Promise<void>;
    enigmaDecrypt(_chainId: string, _ciphertext: Uint8Array, _nonce: Uint8Array): Promise<Uint8Array>;
    enigmaEncrypt(_chainId: string, _contractCodeHash: string, _msg: object): Promise<Uint8Array>;
    experimentalSuggestChain(_chainInfo: ChainInfo): Promise<void>;
    getEnigmaPubKey(_chainId: string): Promise<Uint8Array>;
    getEnigmaTxEncryptionKey(_chainId: string, _nonce: Uint8Array): Promise<Uint8Array>;
    getEnigmaUtils(_chainId: string): SecretUtils;
    getKey(chainId: string): Promise<Key>;
    protected getKeyLastSeenKey(): string;
    protected getLastSeenKey(chainId: string): Promise<KeplrGetKeyWalletCoonectV1Response | undefined>;
    protected getAllLastSeenKey(): Promise<{
        [chainId: string]: KeplrGetKeyWalletCoonectV1Response | undefined;
    } | undefined>;
    protected saveAllLastSeenKey(data: {
        [chainId: string]: KeplrGetKeyWalletCoonectV1Response | undefined;
    }): Promise<void>;
    protected saveLastSeenKey(chainId: string, response: KeplrGetKeyWalletCoonectV1Response): Promise<void>;
    signArbitrary(_chainId: string, _signer: string, _data: string | Uint8Array): Promise<StdSignature>;
    verifyArbitrary(_chainId: string, _signer: string, _data: string | Uint8Array, _signature: StdSignature): Promise<boolean>;
    signEthereum(_chainId: string, _signer: string, _data: string | Uint8Array, _mode: EthSignType): Promise<Uint8Array>;
    signICNSAdr36(_chainId: string, _contractAddress: string, _owner: string, _username: string, _addressChainIds: string[]): Promise<ICNSAdr36Signatures>;
    getOfflineSigner(chainId: string): OfflineAminoSigner & OfflineDirectSigner;
    getOfflineSignerAuto(chainId: string): Promise<OfflineAminoSigner | OfflineDirectSigner>;
    getOfflineSignerOnlyAmino(chainId: string): OfflineAminoSigner;
    getSecret20ViewingKey(_chainId: string, _contractAddress: string): Promise<string>;
    /**
     * In the extension environment, this API let the extension to send the tx on behalf of the client.
     * But, in the wallet connect environment, in order to send the tx on behalf of the client, wallet should receive the tx data from remote.
     * However, this approach is not efficient and hard to ensure the stability and `KeplrWalletConnect` should have the informations of rpc and rest endpoints.
     * So, rather than implementing this, just fallback to the client sided implementation or throw error of the client sided implementation is not delivered to the `options`.
     * @param chainId
     * @param stdTx
     * @param mode
     */
    sendTx(chainId: string, tx: Uint8Array, mode: BroadcastMode): Promise<Uint8Array>;
    signAmino(chainId: string, signer: string, signDoc: StdSignDoc, signOptions?: KeplrSignOptions): Promise<AminoSignResponse>;
    signDirect(_chainId: string, _signer: string, _signDoc: {
        accountNumber?: any | null;
        authInfoBytes?: Uint8Array | null;
        bodyBytes?: Uint8Array | null;
        chainId?: string | null;
    }, _signOptions?: KeplrSignOptions): Promise<DirectSignResponse>;
    suggestToken(_chainId: string, _contractAddress: string, _viewingKey?: string): Promise<void>;
    experimentalSignEIP712CosmosTx_v0(_chainId: string, _signer: string, _eip712: {
        domain: Record<string, any>;
        primaryType: string;
        types: Record<string, {
            name: string;
            type: string;
        }[] | undefined>;
    }, _signDoc: StdSignDoc, _signOptions?: KeplrSignOptions): Promise<AminoSignResponse>;
    getChainInfosWithoutEndpoints(): Promise<ChainInfoWithoutEndpoints[]>;
    disable(_chainIds?: string | string[]): Promise<void>;
    changeKeyRingName(_opts: {
        defaultName: string;
        editable?: boolean | undefined;
    }): Promise<string>;
}
