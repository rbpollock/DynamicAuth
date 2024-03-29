export declare const preprocessFilterWCWallets: (sourceData: any) => void;
export declare const preprocessBrand: (sourceData: any) => void;
export declare const preprocessDesktop: (sourceData: any) => void;
export declare const preprocessMobile: (sourceData: any) => void;
export declare const preprocessSdks: (sourceData: any) => void;
export declare const preprocessUniversal: (data: any) => Promise<void>;
export declare const preprocessNative: (data: any) => void;
/**
 * 1. Convert the name to lowercase
 * 2. Replace all spaces with empty string
 * 3. Use the new name as the key
 */
export declare const preprocessRenameKey: (sourceData: any) => void;
