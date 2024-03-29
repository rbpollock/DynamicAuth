import { z } from 'zod';

const walletConnectSourceValueSchema = z
    .object({
    app: z.object({
        android: z.string().nullable(),
        browser: z.string().nullable(),
        chrome: z.string().nullable(),
        edge: z.string().nullable(),
        firefox: z.string().nullable(),
        ios: z.string().nullable(),
        linux: z.string().nullable(),
        mac: z.string().nullable(),
        opera: z.string().nullable(),
        safari: z.string().nullable(),
        windows: z.string().nullable(),
    }),
    app_type: z.string(),
    category: z.string().nullable(),
    chains: z.array(z.string()),
    description: z.string().nullable(),
    desktop: z.object({
        native: z.string().nullable(),
        universal: z.string().nullable(),
    }),
    homepage: z.string(),
    id: z.string(),
    image_id: z.string(),
    image_url: z.object({
        lg: z.string(),
        md: z.string(),
        sm: z.string(),
    }),
    injected: z
        .array(z.object({
        injected_id: z.string(),
        namespace: z.string(),
    }))
        .nullable(),
    metadata: z.object({
        colors: z.object({
            primary: z.string().nullable(),
            secondary: z.string().nullable(),
        }),
        shortName: z.string().nullable(),
    }),
    mobile: z.object({
        native: z.string().nullable(),
        universal: z.string().nullable(),
    }),
    name: z.string(),
    rdns: z.string().nullable(),
    sdks: z.array(z.string()),
    slug: z.string(),
    supported_standards: z
        .array(z.object({
        id: z.string(),
        standard_id: z.number(),
        standard_prefix: z.string(),
        title: z.string(),
        url: z.string(),
    }))
        .optional(),
    updatedAt: z.string(),
    versions: z.array(z.string()),
})
    .strict();
/**
 * Validates the walletconnect.json file to ensure it is in the correct format
 */
z.record(z.string(), walletConnectSourceValueSchema);

export { walletConnectSourceValueSchema };
