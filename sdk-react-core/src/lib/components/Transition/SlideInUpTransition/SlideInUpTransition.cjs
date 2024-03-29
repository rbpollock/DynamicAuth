'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var useTransition = require('../../../utils/hooks/useTransition/useTransition.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const getSlideInUpTransitionDefaultStyles = (duration, curve = 'linear') => ({
    transition: `transform ${duration}ms ${curve}, opacity ${duration}ms ${curve}`,
});
const transitionStyles = {
    ENTERED: {
        transform: 'translateY(0)',
    },
    ENTERING: {
        transform: 'translateY(0.625rem)',
    },
    EXITING: {
        transform: 'translateY(0.625rem)',
    },
};
const UnoptimizedSlideInUpTransition = (_a) => {
    var { children } = _a, transitionProps = _tslib.__rest(_a, ["children"]);
    const { mount, stage, currentDuration } = useTransition.useTransition(transitionProps);
    const defaultStyles = getSlideInUpTransitionDefaultStyles(currentDuration);
    const stageStyles = transitionStyles[stage];
    if (!mount)
        return null;
    return jsxRuntime.jsx("div", { style: Object.assign(Object.assign({}, defaultStyles), stageStyles), children: children });
};
const SlideInUpTransition = React__default["default"].memo(UnoptimizedSlideInUpTransition);

exports.SlideInUpTransition = SlideInUpTransition;
exports.UnoptimizedSlideInUpTransition = UnoptimizedSlideInUpTransition;
