import { jsx } from 'react/jsx-runtime';
import { classNames } from '../../../utils/functions/classNames/classNames.js';

const DefaultFooter = ({ hideBorder }) => (jsx("div", { className: classNames('default-footer', {
        'default-footer__hide-border': hideBorder,
    }), "data-testid": 'default-footer' }));

export { DefaultFooter };
