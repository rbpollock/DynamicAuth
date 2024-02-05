/**
 * Copied from https://github.com/chainapsis/keplr-wallet/blob/master/packages/common/src/kv-store/indexed-db.ts
 * because of the dependency issue on cipher-base that required a stream polyfill.
 */
export interface KVStore {
    get<T = unknown>(key: string): Promise<T | undefined>;
    prefix(): string;
    set<T = unknown>(key: string, data: T | null): Promise<void>;
}
export declare class IndexedDBKVStore implements KVStore {
    protected readonly _prefix: string;
    protected cachedDB?: IDBDatabase;
    constructor(_prefix: string);
    get<T = unknown>(key: string): Promise<T | undefined>;
    set<T = unknown>(key: string, data: T | null): Promise<void>;
    prefix(): string;
    protected getDB(): Promise<IDBDatabase>;
}
