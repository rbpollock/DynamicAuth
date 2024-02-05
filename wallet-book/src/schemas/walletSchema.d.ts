import { z } from 'zod';
declare const injectedConfigSchema: z.ZodObject<{
    chain: z.ZodString;
    extensionLocators: z.ZodArray<z.ZodObject<{
        flag: z.ZodString;
        value: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        value: boolean;
        flag: string;
    }, {
        flag: string;
        value?: boolean | undefined;
    }>, "many">;
    windowLocations: z.ZodEffects<z.ZodOptional<z.ZodArray<z.ZodString, "many">>, string[] | undefined, string[] | undefined>;
}, "strip", z.ZodTypeAny, {
    chain: string;
    extensionLocators: {
        value: boolean;
        flag: string;
    }[];
    windowLocations?: string[] | undefined;
}, {
    chain: string;
    extensionLocators: {
        flag: string;
        value?: boolean | undefined;
    }[];
    windowLocations?: string[] | undefined;
}>;
export declare const walletSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    brand: z.ZodEffects<z.ZodOptional<z.ZodObject<{
        alt: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
        imageId: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
        primaryColor: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
        spriteId: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
    }, "strip", z.ZodTypeAny, {
        alt?: string | undefined;
        imageId?: string | undefined;
        primaryColor?: string | undefined;
        spriteId?: string | undefined;
    }, {
        alt?: unknown;
        imageId?: unknown;
        primaryColor?: unknown;
        spriteId?: unknown;
    }>>, {
        alt?: string | undefined;
        imageId?: string | undefined;
        primaryColor?: string | undefined;
        spriteId?: string | undefined;
    } | undefined, {
        alt?: unknown;
        imageId?: unknown;
        primaryColor?: unknown;
        spriteId?: unknown;
    } | undefined>;
    chains: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    desktop: z.ZodEffects<z.ZodOptional<z.ZodObject<{
        chromeId: z.ZodEffects<z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>, string | undefined, unknown>;
        edgeId: z.ZodEffects<z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>, string | undefined, unknown>;
        firefoxId: z.ZodEffects<z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>, string | undefined, unknown>;
        native: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
        operaId: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
        safariId: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
        universal: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
    }, "strip", z.ZodTypeAny, {
        chromeId?: string | undefined;
        edgeId?: string | undefined;
        firefoxId?: string | undefined;
        native?: string | undefined;
        operaId?: string | undefined;
        safariId?: string | undefined;
        universal?: string | undefined;
    }, {
        chromeId?: unknown;
        edgeId?: unknown;
        firefoxId?: unknown;
        native?: unknown;
        operaId?: unknown;
        safariId?: unknown;
        universal?: unknown;
    }>>, {
        chromeId?: string | undefined;
        edgeId?: string | undefined;
        firefoxId?: string | undefined;
        native?: string | undefined;
        operaId?: string | undefined;
        safariId?: string | undefined;
        universal?: string | undefined;
    } | undefined, {
        chromeId?: unknown;
        edgeId?: unknown;
        firefoxId?: unknown;
        native?: unknown;
        operaId?: unknown;
        safariId?: unknown;
        universal?: unknown;
    } | undefined>;
    eip6963Config: z.ZodOptional<z.ZodObject<{
        rdns: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        rdns: string;
    }, {
        rdns: string;
    }>>;
    filterFromWalletConnect: z.ZodOptional<z.ZodBoolean>;
    group: z.ZodOptional<z.ZodString>;
    injectedConfig: z.ZodOptional<z.ZodArray<z.ZodObject<{
        chain: z.ZodString;
        extensionLocators: z.ZodArray<z.ZodObject<{
            flag: z.ZodString;
            value: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            value: boolean;
            flag: string;
        }, {
            flag: string;
            value?: boolean | undefined;
        }>, "many">;
        windowLocations: z.ZodEffects<z.ZodOptional<z.ZodArray<z.ZodString, "many">>, string[] | undefined, string[] | undefined>;
    }, "strip", z.ZodTypeAny, {
        chain: string;
        extensionLocators: {
            value: boolean;
            flag: string;
        }[];
        windowLocations?: string[] | undefined;
    }, {
        chain: string;
        extensionLocators: {
            flag: string;
            value?: boolean | undefined;
        }[];
        windowLocations?: string[] | undefined;
    }>, "many">>;
    mobile: z.ZodEffects<z.ZodOptional<z.ZodObject<{
        android: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        androidId: z.ZodEffects<z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>, string | undefined, unknown>;
        ios: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        iosId: z.ZodEffects<z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>, string | undefined, unknown>;
        native: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
        universal: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
    }, "strip", z.ZodTypeAny, {
        android?: string | null | undefined;
        androidId?: string | undefined;
        ios?: string | null | undefined;
        iosId?: string | undefined;
        native?: string | undefined;
        universal?: string | undefined;
    }, {
        android?: string | null | undefined;
        androidId?: unknown;
        ios?: string | null | undefined;
        iosId?: unknown;
        native?: unknown;
        universal?: unknown;
    }>>, {
        android?: string | null | undefined;
        androidId?: string | undefined;
        ios?: string | null | undefined;
        iosId?: string | undefined;
        native?: string | undefined;
        universal?: string | undefined;
    } | undefined, {
        android?: string | null | undefined;
        androidId?: unknown;
        ios?: string | null | undefined;
        iosId?: unknown;
        native?: unknown;
        universal?: unknown;
    } | undefined>;
    name: z.ZodString;
    shortName: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
    showOnlyIfInstalled: z.ZodOptional<z.ZodBoolean>;
    switchNetworkOnlyFromWallet: z.ZodOptional<z.ZodBoolean>;
    walletConnect: z.ZodEffects<z.ZodOptional<z.ZodObject<{
        sdks: z.ZodEffects<z.ZodOptional<z.ZodArray<z.ZodString, "many">>, string[] | undefined, unknown>;
    }, "strip", z.ZodTypeAny, {
        sdks?: string[] | undefined;
    }, {
        sdks?: unknown;
    }>>, {
        sdks?: string[] | undefined;
    } | undefined, {
        sdks?: unknown;
    } | undefined>;
}, "strip", z.ZodTypeAny, {
    name: string;
    brand?: {
        alt?: string | undefined;
        imageId?: string | undefined;
        primaryColor?: string | undefined;
        spriteId?: string | undefined;
    } | undefined;
    chains?: string[] | undefined;
    desktop?: {
        chromeId?: string | undefined;
        edgeId?: string | undefined;
        firefoxId?: string | undefined;
        native?: string | undefined;
        operaId?: string | undefined;
        safariId?: string | undefined;
        universal?: string | undefined;
    } | undefined;
    eip6963Config?: {
        rdns: string;
    } | undefined;
    filterFromWalletConnect?: boolean | undefined;
    group?: string | undefined;
    injectedConfig?: {
        chain: string;
        extensionLocators: {
            value: boolean;
            flag: string;
        }[];
        windowLocations?: string[] | undefined;
    }[] | undefined;
    mobile?: {
        android?: string | null | undefined;
        androidId?: string | undefined;
        ios?: string | null | undefined;
        iosId?: string | undefined;
        native?: string | undefined;
        universal?: string | undefined;
    } | undefined;
    shortName?: string | undefined;
    showOnlyIfInstalled?: boolean | undefined;
    switchNetworkOnlyFromWallet?: boolean | undefined;
    walletConnect?: {
        sdks?: string[] | undefined;
    } | undefined;
}, {
    name: string;
    brand?: {
        alt?: unknown;
        imageId?: unknown;
        primaryColor?: unknown;
        spriteId?: unknown;
    } | undefined;
    chains?: string[] | undefined;
    desktop?: {
        chromeId?: unknown;
        edgeId?: unknown;
        firefoxId?: unknown;
        native?: unknown;
        operaId?: unknown;
        safariId?: unknown;
        universal?: unknown;
    } | undefined;
    eip6963Config?: {
        rdns: string;
    } | undefined;
    filterFromWalletConnect?: boolean | undefined;
    group?: string | undefined;
    injectedConfig?: {
        chain: string;
        extensionLocators: {
            flag: string;
            value?: boolean | undefined;
        }[];
        windowLocations?: string[] | undefined;
    }[] | undefined;
    mobile?: {
        android?: string | null | undefined;
        androidId?: unknown;
        ios?: string | null | undefined;
        iosId?: unknown;
        native?: unknown;
        universal?: unknown;
    } | undefined;
    shortName?: unknown;
    showOnlyIfInstalled?: boolean | undefined;
    switchNetworkOnlyFromWallet?: boolean | undefined;
    walletConnect?: {
        sdks?: unknown;
    } | undefined;
}>, {
    name: string;
    brand?: {
        alt?: string | undefined;
        imageId?: string | undefined;
        primaryColor?: string | undefined;
        spriteId?: string | undefined;
    } | undefined;
    chains?: string[] | undefined;
    desktop?: {
        chromeId?: string | undefined;
        edgeId?: string | undefined;
        firefoxId?: string | undefined;
        native?: string | undefined;
        operaId?: string | undefined;
        safariId?: string | undefined;
        universal?: string | undefined;
    } | undefined;
    eip6963Config?: {
        rdns: string;
    } | undefined;
    filterFromWalletConnect?: boolean | undefined;
    group?: string | undefined;
    injectedConfig?: {
        chain: string;
        extensionLocators: {
            value: boolean;
            flag: string;
        }[];
        windowLocations?: string[] | undefined;
    }[] | undefined;
    mobile?: {
        android?: string | null | undefined;
        androidId?: string | undefined;
        ios?: string | null | undefined;
        iosId?: string | undefined;
        native?: string | undefined;
        universal?: string | undefined;
    } | undefined;
    shortName?: string | undefined;
    showOnlyIfInstalled?: boolean | undefined;
    switchNetworkOnlyFromWallet?: boolean | undefined;
    walletConnect?: {
        sdks?: string[] | undefined;
    } | undefined;
}, unknown>, {
    name: string;
    brand?: {
        alt?: string | undefined;
        imageId?: string | undefined;
        primaryColor?: string | undefined;
        spriteId?: string | undefined;
    } | undefined;
    chains?: string[] | undefined;
    desktop?: {
        chromeId?: string | undefined;
        edgeId?: string | undefined;
        firefoxId?: string | undefined;
        native?: string | undefined;
        operaId?: string | undefined;
        safariId?: string | undefined;
        universal?: string | undefined;
    } | undefined;
    eip6963Config?: {
        rdns: string;
    } | undefined;
    filterFromWalletConnect?: boolean | undefined;
    group?: string | undefined;
    injectedConfig?: {
        chain: string;
        extensionLocators: {
            value: boolean;
            flag: string;
        }[];
        windowLocations?: string[] | undefined;
    }[] | undefined;
    mobile?: {
        android?: string | null | undefined;
        androidId?: string | undefined;
        ios?: string | null | undefined;
        iosId?: string | undefined;
        native?: string | undefined;
        universal?: string | undefined;
    } | undefined;
    shortName?: string | undefined;
    showOnlyIfInstalled?: boolean | undefined;
    switchNetworkOnlyFromWallet?: boolean | undefined;
    walletConnect?: {
        sdks?: string[] | undefined;
    } | undefined;
}, unknown>;
export type WalletSchema = z.infer<typeof walletSchema>;
export type WalletInjectedConfigSchema = z.infer<typeof injectedConfigSchema>;
export {};
