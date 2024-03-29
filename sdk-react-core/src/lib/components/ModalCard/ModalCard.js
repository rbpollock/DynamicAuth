import { jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const ModalCard = ({ children, borderRadius = 'default', border = false, sharpBottomRadiusOnMobile = true, dataTestId, }) => (jsx("div", { "data-testid": dataTestId, className: classNames('modal-card', {
        'modal-card--sharp-mobile-bottom-radius': sharpBottomRadiusOnMobile,
        'modal-card--with-border': border,
    }, `modal-card--radius-${borderRadius}`), children: children }));

export { ModalCard };
