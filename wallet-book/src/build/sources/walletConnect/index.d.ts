export declare const walletConnectSourceData: Record<string, {
    name: string;
    chains: string[];
    desktop: {
        native: string | null;
        universal: string | null;
    };
    rdns: string | null;
    mobile: {
        native: string | null;
        universal: string | null;
    };
    sdks: string[];
    app: {
        android: string | null;
        ios: string | null;
        opera: string | null;
        browser: string | null;
        chrome: string | null;
        edge: string | null;
        firefox: string | null;
        linux: string | null;
        mac: string | null;
        safari: string | null;
        windows: string | null;
    };
    app_type: string;
    category: string | null;
    description: string | null;
    homepage: string;
    id: string;
    image_id: string;
    image_url: {
        lg: string;
        md: string;
        sm: string;
    };
    injected: {
        injected_id: string;
        namespace: string;
    }[] | null;
    metadata: {
        shortName: string | null;
        colors: {
            primary: string | null;
            secondary: string | null;
        };
    };
    slug: string;
    updatedAt: string;
    versions: string[];
    supported_standards?: {
        id: string;
        standard_id: number;
        standard_prefix: string;
        title: string;
        url: string;
    }[] | undefined;
}>;
export declare const walletConnectTransformedData: Promise<Record<string, {
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
}>>;
