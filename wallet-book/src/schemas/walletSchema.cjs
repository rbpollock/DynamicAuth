'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var zod = require('zod');
var nonEmptyString = require('./utils/nonEmptyString.cjs');
var transformChromeExtensionId = require('./utils/transformChromeExtensionId.cjs');
var transformEdgeExtensionId = require('./utils/transformEdgeExtensionId.cjs');
var transformFirefoxExtensionId = require('./utils/transformFirefoxExtensionId.cjs');
var transformIosId = require('./utils/transformIosId.cjs');
var transformAndroidId = require('./utils/transformAndroidId.cjs');
var nonEmptyStringArray = require('./utils/nonEmptyStringArray.cjs');
var filterEmptyObject = require('./utils/filterEmptyObject.cjs');

const injectedConfigSchema = zod.z.object({
    chain: zod.z.string(),
    extensionLocators: zod.z.array(zod.z.object({
        flag: zod.z.string(),
        value: zod.z.boolean().optional().default(true),
    })),
    windowLocations: zod.z
        .array(zod.z.string())
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
const walletSchema = zod.z
    .preprocess((val) => val, zod.z.object({
    brand: zod.z
        .object({
        alt: nonEmptyString.nonEmptyString,
        imageId: nonEmptyString.nonEmptyString,
        primaryColor: nonEmptyString.nonEmptyString,
        spriteId: nonEmptyString.nonEmptyString,
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
    chains: zod.z.array(zod.z.string()).optional(),
    desktop: zod.z
        .object({
        chromeId: nonEmptyString.nonEmptyString.transform(transformChromeExtensionId.transformChromeExtensionId),
        edgeId: nonEmptyString.nonEmptyString.transform(transformEdgeExtensionId.transformEdgeExtensionId),
        firefoxId: nonEmptyString.nonEmptyString.transform(transformFirefoxExtensionId.transformFirefoxExtensionId),
        native: nonEmptyString.nonEmptyString,
        operaId: nonEmptyString.nonEmptyString,
        safariId: nonEmptyString.nonEmptyString,
        universal: nonEmptyString.nonEmptyString,
    })
        .optional()
        .transform(filterEmptyObject.filterEmptyObject),
    eip6963Config: zod.z.object({ rdns: zod.z.string() }).optional(),
    filterFromWalletConnect: zod.z.boolean().optional(),
    group: zod.z.string().optional(),
    injectedConfig: zod.z.array(injectedConfigSchema).optional(),
    mobile: zod.z
        .object({
        android: zod.string().nullish(),
        androidId: nonEmptyString.nonEmptyString.transform(transformAndroidId.transformAndroidId),
        ios: zod.string().nullish(),
        iosId: nonEmptyString.nonEmptyString.transform(transformIosId.transformIosId),
        native: nonEmptyString.nonEmptyString,
        universal: nonEmptyString.nonEmptyString,
    })
        .optional()
        .transform(filterEmptyObject.filterEmptyObject),
    name: zod.z.string(),
    shortName: nonEmptyString.nonEmptyString,
    showOnlyIfInstalled: zod.z.boolean().optional(),
    switchNetworkOnlyFromWallet: zod.z.boolean().optional(),
    walletConnect: zod.z
        .object({
        sdks: nonEmptyStringArray.nonEmptyStringArray,
    })
        .optional()
        .transform(filterEmptyObject.filterEmptyObject),
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

exports.walletSchema = walletSchema;
