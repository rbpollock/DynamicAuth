'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isClassNamesObjectArg = require('./utils/isClassNamesObjectArg.cjs');
var isString = require('./utils/isString.cjs');

const classNames = (...args) => {
    const classes1 = args.reduce((classes, arg) => {
        if (isString.isString(arg)) {
            return [...classes, arg];
        }
        if (isClassNamesObjectArg.isClassNamesObjectArg(arg)) {
            const keys = Object.keys(arg);
            const validClasses = keys
                .map((key) => {
                if (arg[key]) {
                    return key;
                }
                return null;
            })
                .filter(isString.isString);
            return [...classes, ...validClasses];
        }
        return classes;
    }, []);
    return classes1.join(' ');
};

exports.classNames = classNames;
