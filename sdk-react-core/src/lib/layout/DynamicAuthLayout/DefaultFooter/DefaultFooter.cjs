'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var classNames = require('../../../utils/functions/classNames/classNames.cjs');

const DefaultFooter = ({ hideBorder }) => (jsxRuntime.jsx("div", { className: classNames.classNames('default-footer', {
        'default-footer__hide-border': hideBorder,
    }), "data-testid": 'default-footer' }));

exports.DefaultFooter = DefaultFooter;
