import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { Spinner } from '../Spinner/spinner.js';
import { Typography } from '../Typography/Typography.js';

const Button = ({ buttonClassName = '', buttonPadding = 'medium', buttonVariant = 'primary', children, feedback, expanded, dataTestId, disabled = false, showInternalLoading = true, loading = false, onClick, type, startSlot, endSlot, typographyProps = {
    variant: 'button_primary',
}, copykey, }) => {
    const [internalButtonLoading, setInternalButtonLoading] = useState(false);
    const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
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
    const buttonEffectiveClassName = classNames('button', {
        'button--expanded': Boolean(expanded),
        'button--loading': Boolean(loading),
    }, buttonPadding ? buttonPaddingClassNameMap[buttonPadding] : '', buttonVariant ? buttonVariantClassNameMap[buttonVariant] : '', buttonClassName);
    const handleClick = (e) => __awaiter(void 0, void 0, void 0, function* () {
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
    const buttonContent = (jsxs(Fragment, { children: [startSlot && jsx("div", { className: 'button__start-slot', children: startSlot }), (feedback || children) && (jsx(Typography, Object.assign({ variant: 'button_primary', color: 'primary', as: 'span' }, typographyProps, { copykey: copykey, children: isFeedbackVisible && feedback ? feedback : children }))), endSlot && jsx("div", { className: 'button__end-slot', children: endSlot })] }));
    return (jsxs("button", { type: type, onClick: handleClick, className: buttonEffectiveClassName, disabled: disabled || internalButtonLoading || loading, "data-testid": dataTestId, children: [(internalButtonLoading || loading) && (jsx("div", { className: 'button__spinner-container', "data-testid": 'button__spinner', children: jsx(Spinner, { className: 'button__spinner' }) })), buttonContent] }));
};

export { Button };
