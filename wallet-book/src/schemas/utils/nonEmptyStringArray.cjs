'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var zod = require('zod');

/**
 * A zod type to ensure an array is not empty
 */
const nonEmptyStringArray = zod.z.preprocess((val) => (Array.isArray(val) && val.length > 0 ? val : undefined), zod.z.array(zod.z.string()).optional());

exports.nonEmptyStringArray = nonEmptyStringArray;
