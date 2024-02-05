export declare const useWalletBookCdn: () => {
    groups: Record<string, {
        key: string;
        name: string;
        brand?: {
            alt?: string | undefined;
            imageId?: string | undefined;
            primaryColor?: string | undefined;
            spriteId?: string | undefined;
        } | undefined;
    }>;
    wallets: Record<string, {
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
    }>;
};
