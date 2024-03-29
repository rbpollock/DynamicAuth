'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var zod = require('zod');

/**
 * A zod type to ensure a string is not empty
 */
const nonEmptyString = zod.z.preprocess((val) => (val ? val : undefined), zod.z.string().optional());

exports.nonEmptyString = nonEmptyString;
