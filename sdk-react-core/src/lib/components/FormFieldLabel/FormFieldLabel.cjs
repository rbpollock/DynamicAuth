'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const FormFieldLabel = ({ children, htmlFor, className, divider, }) => (jsxRuntime.jsx("label", { className: classNames.classNames('form-field-label', { 'form-field-label__with-divider': divider }, className), htmlFor: htmlFor, children: children }));

exports.FormFieldLabel = FormFieldLabel;
