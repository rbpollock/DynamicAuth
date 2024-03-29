import { jsx } from 'react/jsx-runtime';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';

const VerticalAccordion = ({ children, className, style, }) => (jsx("div", { className: classNames(className, 'vertical-accordion__container'), style: style, children: children }));

export { VerticalAccordion };
