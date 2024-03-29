'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactI18next = require('react-i18next');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var AnimatePresence = require('../AnimatePresence/AnimatePresence.cjs');
var Typography = require('../Typography/Typography.cjs');
require('../Transition/ZoomTransition/ZoomTransition.cjs');
require('../Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../Transition/OpacityTransition/OpacityTransition.cjs');
var VerticalDrawerTransition = require('../Transition/VerticalDrawerTransition/VerticalDrawerTransition.cjs');

const typographyColor = {
    error: 'error-1',
    notice: 'brand-primary',
    success: 'green-1',
};
const ModalHeaderBanner = ({ messageKey, type = 'error', disableTruncate = false, }) => {
    const { t } = reactI18next.useTranslation();
    return (jsxRuntime.jsx(AnimatePresence.AnimatePresence, { animationComponent: jsxRuntime.jsx(VerticalDrawerTransition.VerticalDrawerTransition, { style: { width: '100%' } }), children: Boolean(messageKey) && (jsxRuntime.jsx("div", { className: classNames.classNames('modal-header-banner', {
                'modal-header-banner__error': type === 'error',
                'modal-header-banner__notice': type === 'notice',
                'modal-header-banner__success': type === 'success',
            }), children: jsxRuntime.jsx(Typography.Typography, { variant: 'body_small', color: typographyColor[type], truncate: disableTruncate === false, copykey: messageKey, children: t(messageKey || '') }) })) }));
};

exports.ModalHeaderBanner = ModalHeaderBanner;
