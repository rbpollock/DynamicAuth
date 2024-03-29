'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../utils/functions/classNames/classNames.cjs');

const ModalCard = ({ children, borderRadius = 'default', border = false, sharpBottomRadiusOnMobile = true, dataTestId, }) => (jsxRuntime.jsx("div", { "data-testid": dataTestId, className: classNames.classNames('modal-card', {
        'modal-card--sharp-mobile-bottom-radius': sharpBottomRadiusOnMobile,
        'modal-card--with-border': border,
    }, `modal-card--radius-${borderRadius}`), children: children }));

exports.ModalCard = ModalCard;
