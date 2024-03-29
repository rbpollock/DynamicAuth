import { jsxs, jsx } from 'react/jsx-runtime';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const Switch = ({ disabled = false, firstButton, secondButton, thirdButton, }) => (jsxs("div", { className: classNames('switch__container', { disabled: disabled }), children: [jsx("button", { disabled: disabled, className: classNames('button', { active: firstButton.active }), onClick: firstButton.handleButtonClick, children: firstButton.name }), jsx("button", { disabled: disabled, className: classNames('button', { active: secondButton.active }), onClick: secondButton.handleButtonClick, children: secondButton.name }), thirdButton && (jsx("button", { disabled: disabled, className: classNames('button', { active: thirdButton.active }), onClick: thirdButton.handleButtonClick, children: thirdButton.name }))] }));

export { Switch };
