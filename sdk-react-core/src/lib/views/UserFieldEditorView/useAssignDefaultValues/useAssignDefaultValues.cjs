'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useInternalDynamicContext = require('../../../context/DynamicContext/useInternalDynamicContext.cjs');
var splitCamelCase = require('../../../shared/utils/functions/splitCamelCase/splitCamelCase.cjs');

/** This function assigns the default values for the modal's text components */
const useAssignDefaultValues = (texts, fields) => {
    const { appName, user } = useInternalDynamicContext.useInternalDynamicContext();
    const appDisplay = appName ? `${appName} ` : '';
    // This is fixed
    if (!texts.submitText)
        texts.submitText = 'Update';
    // Others depend on the fields
    if (fields.length !== 1) {
        if (!texts.title)
            texts.title = 'Update your info';
        if (!texts.subtitle)
            texts.subtitle = `Fill out your info for your ${appDisplay}account`;
        return texts;
    }
    const [field] = fields;
    const fieldDisplay = splitCamelCase.splitCamelCase(field).toLowerCase();
    // If the field already has some value, use the word "update"
    const titleAction = (user === null || user === void 0 ? void 0 : user[field]) ? 'Update' : 'Enter';
    if (!texts.title)
        texts.title = `${titleAction} your ${fieldDisplay}`;
    if (!texts.subtitle)
        texts.subtitle = `Add your ${fieldDisplay} to your ${appDisplay}account`;
    return texts;
};

exports.useAssignDefaultValues = useAssignDefaultValues;
