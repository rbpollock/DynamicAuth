'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var zod = require('zod');
var walletSchema = require('./walletSchema.cjs');
var walletGroup = require('./walletGroup.cjs');

zod.z.record(zod.z.string(), walletSchema.walletSchema);
const walletBookSchema = zod.z.preprocess((val) => val, zod.z.object({
    groups: zod.z.record(zod.z.string(), walletGroup.walletGroupSchema),
    wallets: zod.z.record(zod.z.string(), walletSchema.walletSchema),
}));
zod.z.record(zod.z.string(), walletGroup.walletGroupSchema);

exports.walletBookSchema = walletBookSchema;
