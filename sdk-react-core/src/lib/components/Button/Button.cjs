'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
var spinner = require('../Spinner/spinner.cjs');
var Typography = require('../Typography/Typography.cjs');

const Button = ({ buttonClassName = '', buttonPadding = 'medium', buttonVariant = 'primary', children, feedback, expanded, dataTestId, disabled = false, showInternalLoading = true, loading = false, onClick, type, startSlot, endSlot, typographyProps = {
    variant: 'button_primary',
}, copykey, }) => {
    const [internalButtonLoading, setInternalButtonLoading] = React.useState(false);
    const [isFeedbackVisible, setIsFeedbackVisible] = React.useState(false);
    const buttonVariantClassNameMap = {
        'brand-primary': 'button--brand-primary',
        primary: 'button--primary',
        secondary: 'button--secondary',
        tertiary: 'button--tertiary',
    };
    const buttonPaddingClassNameMap = {
        default: 'button--padding-default',
        large: 'button--padding-large',
        'login-screen-height': 'button--padding-login-screen-height',
        medium: 'button--padding-medium',
        none: 'button--padding-none',
        small: 'button--padding-small',
    };
    const buttonEffectiveClassName = classNames.classNames('button', {
        'button--expanded': Boolean(expanded),
        'button--loading': Boolean(loading),
    }, buttonPadding ? buttonPaddingClassNameMap[buttonPadding] : '', buttonVariant ? buttonVariantClassNameMap[buttonVariant] : '', buttonClassName);
    const handleClick = (e) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (onClick) {
            const onClickResult = onClick(e);
            if (onClickResult instanceof Promise) {
                if (showInternalLoading) {
                    setInternalButtonLoading(true);
                }
                try {
                    yield onClickResult;
                }
                finally {
                    setInternalButtonLoading(false);
                }
            }
        }
        if (feedback) {
            setIsFeedbackVisible(true);
            setTimeout(() => {
                setIsFeedbackVisible(false);
            }, 2000);
        }
    });
    const buttonContent = (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [startSlot && jsxRuntime.jsx("div", { className: 'button__start-slot', children: startSlot }), (feedback || children) && (jsxRuntime.jsx(Typography.Typography, Object.assign({ variant: 'button_primary', color: 'primary', as: 'span' }, typographyProps, { copykey: copykey, children: isFeedbackVisible && feedback ? feedback : children }))), endSlot && jsxRuntime.jsx("div", { className: 'button__end-slot', children: endSlot })] }));
    return (jsxRuntime.jsxs("button", { type: type, onClick: handleClick, className: buttonEffectiveClassName, disabled: disabled || internalButtonLoading || loading, "data-testid": dataTestId, children: [(internalButtonLoading || loading) && (jsxRuntime.jsx("div", { className: 'button__spinner-container', "data-testid": 'button__spinner', children: jsxRuntime.jsx(spinner.Spinner, { className: 'button__spinner' }) })), buttonContent] }));
};

exports.Button = Button;
