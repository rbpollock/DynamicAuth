'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var zod = require('zod');

const walletConnectSourceValueSchema = zod.z
    .object({
    app: zod.z.object({
        android: zod.z.string().nullable(),
        browser: zod.z.string().nullable(),
        chrome: zod.z.string().nullable(),
        edge: zod.z.string().nullable(),
        firefox: zod.z.string().nullable(),
        ios: zod.z.string().nullable(),
        linux: zod.z.string().nullable(),
        mac: zod.z.string().nullable(),
        opera: zod.z.string().nullable(),
        safari: zod.z.string().nullable(),
        windows: zod.z.string().nullable(),
    }),
    app_type: zod.z.string(),
    category: zod.z.string().nullable(),
    chains: zod.z.array(zod.z.string()),
    description: zod.z.string().nullable(),
    desktop: zod.z.object({
        native: zod.z.string().nullable(),
        universal: zod.z.string().nullable(),
    }),
    homepage: zod.z.string(),
    id: zod.z.string(),
    image_id: zod.z.string(),
    image_url: zod.z.object({
        lg: zod.z.string(),
        md: zod.z.string(),
        sm: zod.z.string(),
    }),
    injected: zod.z
        .array(zod.z.object({
        injected_id: zod.z.string(),
        namespace: zod.z.string(),
    }))
        .nullable(),
    metadata: zod.z.object({
        colors: zod.z.object({
            primary: zod.z.string().nullable(),
            secondary: zod.z.string().nullable(),
        }),
        shortName: zod.z.string().nullable(),
    }),
    mobile: zod.z.object({
        native: zod.z.string().nullable(),
        universal: zod.z.string().nullable(),
    }),
    name: zod.z.string(),
    rdns: zod.z.string().nullable(),
    sdks: zod.z.array(zod.z.string()),
    slug: zod.z.string(),
    supported_standards: zod.z
        .array(zod.z.object({
        id: zod.z.string(),
        standard_id: zod.z.number(),
        standard_prefix: zod.z.string(),
        title: zod.z.string(),
        url: zod.z.string(),
    }))
        .optional(),
    updatedAt: zod.z.string(),
    versions: zod.z.array(zod.z.string()),
})
    .strict();
/**
 * Validates the walletconnect.json file to ensure it is in the correct format
 */
zod.z.record(zod.z.string(), walletConnectSourceValueSchema);

exports.walletConnectSourceValueSchema = walletConnectSourceValueSchema;
