import { jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const FormFieldLabel = ({ children, htmlFor, className, divider, }) => (jsx("label", { className: classNames('form-field-label', { 'form-field-label__with-divider': divider }, className), htmlFor: htmlFor, children: children }));

export { FormFieldLabel };
