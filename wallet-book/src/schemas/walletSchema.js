import { z, string } from 'zod';
import { nonEmptyString } from './utils/nonEmptyString.js';
import { transformChromeExtensionId } from './utils/transformChromeExtensionId.js';
import { transformEdgeExtensionId } from './utils/transformEdgeExtensionId.js';
import { transformFirefoxExtensionId } from './utils/transformFirefoxExtensionId.js';
import { transformIosId } from './utils/transformIosId.js';
import { transformAndroidId } from './utils/transformAndroidId.js';
import { nonEmptyStringArray } from './utils/nonEmptyStringArray.js';
import { filterEmptyObject } from './utils/filterEmptyObject.js';

const injectedConfigSchema = z.object({
    chain: z.string(),
    extensionLocators: z.array(z.object({
        flag: z.string(),
        value: z.boolean().optional().default(true),
    })),
    windowLocations: z
        .array(z.string())
        .optional()
        .refine((val) => {
        if (!val)
            return true;
        if (!val.some((v) => ['ethereum', 'ethereum.providers'].includes(v)))
            return true;
        return false;
    }, {
        message: 'windowLocations cannot include ethereum or ethereum.providers as they are included by default',
        path: ['config'],
    }),
});
const walletSchema = z
    .preprocess((val) => val, z.object({
    brand: z
        .object({
        alt: nonEmptyString,
        imageId: nonEmptyString,
        primaryColor: nonEmptyString,
        spriteId: nonEmptyString,
    })
        .optional()
        .refine((val) => {
        if (!val)
            return true;
        if (!(val.spriteId && val.imageId) &&
            (val.spriteId || val.imageId)) {
            return true;
        }
        return false;
    }, {
        message: 'Only one of spriteId or imageId can be defined',
        path: ['brand'],
    }),
    chains: z.array(z.string()).optional(),
    desktop: z
        .object({
        chromeId: nonEmptyString.transform(transformChromeExtensionId),
        edgeId: nonEmptyString.transform(transformEdgeExtensionId),
        firefoxId: nonEmptyString.transform(transformFirefoxExtensionId),
        native: nonEmptyString,
        operaId: nonEmptyString,
        safariId: nonEmptyString,
        universal: nonEmptyString,
    })
        .optional()
        .transform(filterEmptyObject),
    eip6963Config: z.object({ rdns: z.string() }).optional(),
    filterFromWalletConnect: z.boolean().optional(),
    group: z.string().optional(),
    injectedConfig: z.array(injectedConfigSchema).optional(),
    mobile: z
        .object({
        android: string().nullish(),
        androidId: nonEmptyString.transform(transformAndroidId),
        ios: string().nullish(),
        iosId: nonEmptyString.transform(transformIosId),
        native: nonEmptyString,
        universal: nonEmptyString,
    })
        .optional()
        .transform(filterEmptyObject),
    name: z.string(),
    shortName: nonEmptyString,
    showOnlyIfInstalled: z.boolean().optional(),
    switchNetworkOnlyFromWallet: z.boolean().optional(),
    walletConnect: z
        .object({
        sdks: nonEmptyStringArray,
    })
        .optional()
        .transform(filterEmptyObject),
}))
    .transform((val) => {
    var _a, _b, _c, _d, _e, _f;
    if (((_a = val.mobile) === null || _a === void 0 ? void 0 : _a.iosId) || ((_b = val.mobile) === null || _b === void 0 ? void 0 : _b.ios) === null) {
        (_c = val.mobile) === null || _c === void 0 ? true : delete _c.ios;
    }
    if (((_d = val.mobile) === null || _d === void 0 ? void 0 : _d.androidId) || ((_e = val.mobile) === null || _e === void 0 ? void 0 : _e.android) === null) {
        (_f = val.mobile) === null || _f === void 0 ? true : delete _f.android;
    }
    return val;
});

export { walletSchema };
